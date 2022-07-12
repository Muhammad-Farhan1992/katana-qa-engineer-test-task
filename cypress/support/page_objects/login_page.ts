/// <reference types = "Cypress" />

class loginPage {
    getUsername() {
        /**
         * This function is used to get the Username Field.
         */
        return cy.get('input[type="email"]');
    }

    getPassword() {
        /**
         * This function is used to get the Password Field.
         */
        return cy.get('input[type="password"]');
    }

    getLoginButton() {
        /**
         * This function is used to get the Sign In Button.
         */
        return cy.get('button[type="submit"]');
    }
}

export default loginPage;