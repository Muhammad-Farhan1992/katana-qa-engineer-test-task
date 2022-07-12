/// <reference types = "Cypress" />

class menuValidations {
    verifyTab(tabName: any){
        /**
         * This function is used to verify the redirection to Tab.
         */
        cy.url().should('eq', Cypress.env('baseURL') + Cypress.env(tabName));
    }

    verifyLogoutTab(){
        /**
         * This function is used to verify the redirection to Logout Tab.
         */
        cy.url().should('eq', Cypress.env('loginBaseURL') + '/');
    }
}

export default menuValidations;