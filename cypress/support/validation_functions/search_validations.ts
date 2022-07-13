/// <reference types = "Cypress" />

class searchValidations {
    verifySearchResults(){
        /**
         * This function is used to verify the Search Results.
         */
        cy.get('span[class="ag-overlay-no-rows-center"]').should('not.exist');
    }
}

export default searchValidations;