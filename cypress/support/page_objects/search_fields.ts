/// <reference types = "Cypress" />

class searchField {
    getSearchField(fieldName: any) {
        /**
         * This function is used to get the Search Field.
         */
        if (fieldName == 'floatingDateFilter'){
            return cy.get('div[data-testid="' + fieldName + '"]');
        }
        else {
            return cy.get('input[data-testid="' + fieldName + '"]');
        }
    }

    getClearFilters(){
        /**
         * This function is used to get the Clear Filters.
         */
        return cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]');
    }
}

export default searchField;