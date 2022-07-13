/// <reference types = "Cypress" />

class quoteValidations {
    verifyQuoteAddition(){
        /**
         * This function is used to verify the Quote Addition.
         */
        cy.get('h5[class="MuiTypography-root MuiTypography-h5"]').should('not.exist');
    }

    verifyQuoteDeletion(){
        /**
         * This function is used to verify the Quote Deletetion.
         */
        cy.get('h5[class="MuiTypography-root MuiTypography-h5"]').should('exist');
    }
}

export default quoteValidations;