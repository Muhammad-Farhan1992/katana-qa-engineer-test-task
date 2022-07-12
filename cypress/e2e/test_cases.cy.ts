/// <reference types = "Cypress"/>

import loginPage from "../support/page_objects/login_page";
import globalAdd from "../support/page_objects/global_add";
import loginValidations from "../support/validation_functions/login_validations";
import navigationMenu from "../support/page_objects/navigation_menu";
import menuValidations from "../support/validation_functions/menu_validations";

const login_page = new loginPage();
const global_add = new globalAdd();
const navigation_menu = new navigationMenu();
const login_validations = new loginValidations();
const menu_validations = new menuValidations();

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

// describe('2 - Verify Navigation Menu', () => {
//     it('Verify User is Able to Navigate through Menu', () => {
//         navigation_menu.getMenuTab('salesTab').click();
//         menu_validations.verifyTab('sell');
//         navigation_menu.getMenuTab('manufacturingTab').click();
//         menu_validations.verifyTab('make');
//         navigation_menu.getMenuTab('purchaseTab').click();
//         menu_validations.verifyTab('buy');
//         navigation_menu.getMenuTab('warehouseTab').click();
//         menu_validations.verifyTab('stock');
//         navigation_menu.getMenuTab('portfolioTab').click();
//         menu_validations.verifyTab('items');
//         navigation_menu.getMenuTab('contactsTab').click();
//         menu_validations.verifyTab('contacts');
//         navigation_menu.getMenuTab('settingsTab').click();
//         menu_validations.verifyTab('settings');
//         navigation_menu.getProfileButton().click();
//         navigation_menu.getProfileTab('account').click();
//         menu_validations.verifyTab('account');
//         navigation_menu.getProfileTab('team').click();
//         menu_validations.verifyTab('team');
//         navigation_menu.getProfileTab('subscription').click();
//         menu_validations.verifyTab('subscription');
//     });
// })

describe('3 - Verify Search Functionality', () => {
    it('Verify User is Able to Search Successfully', () => {
        navigation_menu.getMenuTab('salesTab').click();
        menu_validations.verifyTab('sell');
    });
})

// describe('1 - Verify Global Add Functionality', () => {
//     it('Verify User is Redirecting to Specific Category Successfully', () => {
//         global_add.getGlobalAdd().click();
//         global_add.getGlobalType('add-quote').click();
//     });
// })

// describe('2 - Verify Logout Functionality', () => {
//     it('Verify User is Able to Log Out Successfully', () => {
//         navigation_menu.getProfileButton().click();
//         navigation_menu.getProfileTab('logout').click();
//         menu_validations.verifyLogoutTab();
//     });
// })