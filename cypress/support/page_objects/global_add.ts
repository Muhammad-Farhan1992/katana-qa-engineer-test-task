/// <reference types = "Cypress" />

class globalAdd {
    getGlobalAdd() {
        /**
         * This function is used to do Global Add.
         */
        return cy.get('button[id="globalAdd"]');
    }

    getGlobalType(type: any) {
        /**
         * This function is used to select type for Global Add.
         */
        return cy.get('a[id="' + type + '"]');
    }
}

export default globalAdd;