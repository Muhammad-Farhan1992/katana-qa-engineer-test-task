/// <reference types = "Cypress" />

class menuValidations {
    verifySellTab(){
        /**
         * This function is used to verify the redirection to Sell Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('sell'));
    }

    verifyMakeTab(){
        /**
         * This function is used to verify the redirection to Make Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('make'));
    }

    verifyBuyTab(){
        /**
         * This function is used to verify the redirection to Buy Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('buy'));
    }

    verifyStockTab(){
        /**
         * This function is used to verify the redirection to Stock Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('stock'));
    }

    verifyItemsTab(){
        /**
         * This function is used to verify the redirection to Items Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('items'));
    }

    verifyContactsTab(){
        /**
         * This function is used to verify the redirection to Contacts Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('contacts'));
    }

    verifySettingsTab(){
        /**
         * This function is used to verify the redirection to Settings Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('settings'));
    }

    verifyAccountTab(){
        /**
         * This function is used to verify the redirection to Account Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('account'));
    }

    verifyTeamTab(){
        /**
         * This function is used to verify the redirection to Team Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('team'));
    }

    verifySubscriptionTab(){
        /**
         * This function is used to verify the redirection to Subscription Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env('subscription'));
    }

    verifyLogoutTab(){
        /**
         * This function is used to verify the redirection to Logout Tab.
         */
        cy.url().should('eq', Cypress.env('loginBaseURL') + '/');
    }
}

export default menuValidations;