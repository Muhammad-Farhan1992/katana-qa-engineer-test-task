/// <reference types = "Cypress" />

class loginValidations {
    verifyUnsuccessfulLogin(){
        /**
         * This function is used to verify the Error Message shown on Unsuccessful Log In.
         */
        cy.get('span[class="animated fadeInUp"').invoke('text').then((text) => {
            expect(text).to.eq("Wrong email or password.");
        });
    }
}

export default loginValidations;