/// <reference types = "Cypress" />

class searchValidations {
    verifySearchResults(){
        /**
         * This function is used to verify the Search Results.
         */
        cy.get('div[class="ag-center-cols-container"]').should('have.length.gt', 0);
    }
}

export default searchValidations;