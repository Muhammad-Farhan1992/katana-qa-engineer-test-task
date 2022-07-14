/// <reference types = "Cypress"/>

import loginPage from "../support/page_objects/login_page";
import globalAdd from "../support/page_objects/global_add";
import loginValidations from "../support/validation_functions/login_validations";
import navigationMenu from "../support/page_objects/navigation_menu";
import menuValidations from "../support/validation_functions/menu_validations";
import searchField from "../support/page_objects/search_fields";
import searchValidations from "../support/validation_functions/search_validations";
import addQuote from "../support/page_objects/add_quotes";
import addressCommonFunctions from "../support/common_functions/address_functions";
import quoteValidations from "../support/validation_functions/quote_validations";
import addTeamMember from "../support/page_objects/add_team_member";
import addTeamMemberValidations from "../support/validation_functions/add_team_member_validations";

const login_page = new loginPage();
const global_add = new globalAdd();
const navigation_menu = new navigationMenu();
const search_field = new searchField();
const add_quote = new addQuote();
const add_address = new addressCommonFunctions();
const add_team_member = new addTeamMember();

const login_validations = new loginValidations();
const menu_validations = new menuValidations();
const search_validations = new searchValidations();
const quote_validations = new quoteValidations();
const add_team_member_validations = new addTeamMemberValidations();

describe('1 - Verify User Log In Functionality', () => {
    let loginURL: any;
    let username: any;
    let password: any;
    let wrongPassword: any;

    before(() => {
        loginURL = Cypress.env('loginBaseURL') + Cypress.env('login');
        username = Cypress.env('username');
        password = Cypress.env('password');
        wrongPassword = Cypress.env('wrongPassword');
    });

    beforeEach('Go to Login URL', () => {
        cy.visit(loginURL);
    });

    it('Verify User is Unable to Log In', () => {
        login_page.getUsername().type(username);
        login_page.getPassword().type(wrongPassword);
        login_page.getLoginButton().click();
        login_validations.verifyUnsuccessfulLogin();
    });

    it('Verify User is Able to Log In Successfully', () => {
        login_page.getUsername().type(username);
        login_page.getPassword().type(password);
        login_page.getLoginButton().click();
        menu_validations.verifyTab('sell');
    });
})

describe('2 - Verify Navigation Menu', () => {
    it('Verify User is Able to Navigate through Menu', () => {
        navigation_menu.getMenuTab('salesTab').click();
        menu_validations.verifyTab('sell');
        navigation_menu.getMenuTab('manufacturingTab').click();
        menu_validations.verifyTab('make');
        navigation_menu.getMenuTab('purchaseTab').click();
        menu_validations.verifyTab('buy');
        navigation_menu.getMenuTab('warehouseTab').click();
        menu_validations.verifyTab('stock');
        navigation_menu.getMenuTab('portfolioTab').click();
        menu_validations.verifyTab('items');
        navigation_menu.getMenuTab('contactsTab').click();
        menu_validations.verifyTab('contacts');
        navigation_menu.getMenuTab('settingsTab').click();
        menu_validations.verifyTab('settings');
        navigation_menu.getProfileButton().click();
        navigation_menu.getProfileTab('account').click();
        menu_validations.verifyTab('account');
        navigation_menu.getProfileTab('team').click();
        menu_validations.verifyTab('team');
        navigation_menu.getProfileTab('subscription').click();
        menu_validations.verifyTab('subscription');
    });
})

describe('3 - Verify Search Functionality', () => {
    it('Verify User is Able to Search Successfully', () => {
        navigation_menu.getMenuTab('salesTab').click();
        menu_validations.verifyTab('sell');
        search_field.getSearchField('orderNoFilterInput').clear().type('SO-1 [DEMO]');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('customerNameFilterInput').clear().type('Jane Rooms [DEMO]');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('totalAmountFilterInput').clear().type('1500');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('floatingDateFilter').click();
        navigation_menu.getProfileTab('allDates').click();
        search_validations.verifySearchResults();
        search_field.getSearchField('availabilityFilterInput').clear().type('In stock');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('materialAvailabilityFilterInput').clear().type('Processed');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('productionStatusFilterInput').clear().type('Done');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
        search_field.getSearchField('statusFilterInput').clear().type('Not shipped');
        search_validations.verifySearchResults();
        search_field.getClearFilters().click();
    });
})

describe('4 - Verify Global Add Functionality', () => {
    it('Verify User is able to Add Successfully', () => {
        cy.fixture('quote_data.json').then((quote_data) => {
            cy.fixture('address_data.json').then((address_data) => {
                cy.log(quote_data.customer);
                cy.log(quote_data.deliveryDate);
                global_add.getGlobalAdd().click();
                global_add.getGlobalType('add-quote').click();
                menu_validations.verifyTab('quote');
                cy.wait(3000);
                add_quote.getCustomerField().clear().type(quote_data.customer);
                cy.wait(2000);
                add_quote.getExisitngName(quote_data.customer).click();
                add_quote.getField('deliveryDate').click();
                add_quote.getDeliveryDeadline().click();
                add_quote.getField('createdDate').click();
                add_quote.getCreatedDate().click();
                add_quote.getField('orderNo').clear().type(quote_data.salesOrder);
                add_quote.getAddress('address-field-new').click();
                add_address.enterAddress(address_data);
                add_quote.getAddress('address-field-same').click();
                add_address.enterAddress(address_data);
                add_quote.getItemFields('variant-cell-renderer').type(quote_data.item);
                cy.wait(3000);
                add_quote.getExisitngName(quote_data.item).click();
                add_quote.getCloseButton().click();
                menu_validations.verifyTab('quotes');
                quote_validations.verifyQuoteAddition();
            })
        })
    });
})

describe('5 - Verify Delete Functionality', () => {
    it('Verify User is able to Delete Successfully', () => {
        add_quote.getDeleteCheckbox().click();
        add_quote.getExisitngName('Bulk actions').click();
        add_quote.getExisitngName('Delete').click();
        add_quote.getDeleteButton().click();
        menu_validations.verifyTab('quotes');
        quote_validations.verifyQuoteDeletion();
    });
})

describe('6 - Verify Team Member Addition', () => {
    it('Verify User is Able to Add Team Member', () => {
        navigation_menu.getProfileButton().click();
        navigation_menu.getProfileTab('team').click();
        menu_validations.verifyTab('team');
        cy.wait(3000);
        add_quote.getExisitngName('Add a new team member').click();
        add_team_member.getAddMember().click();
        add_quote.getField('email').clear().type('test_email@hotmail.com');
        add_quote.getButton('submitButton').click();
        add_team_member_validations.verifyTeamMemberAdded();
    });
})

describe('7 - Verify Team Member Removal', () => {
    it('Verify User is Able to Remove Team Member', () => {
        add_quote.getButton('removeButton').click();
        add_quote.getExisitngName('Yes, remove').click();
        add_team_member_validations.verifyTeamMemberRemoved();
    });
})

describe('8 - Verify Logout Functionality', () => {
    it('Verify User is Able to Log Out Successfully', () => {
        navigation_menu.getProfileButton().click();
        navigation_menu.getProfileTab('logout').click();
        menu_validations.verifyLogoutTab();
    });
})