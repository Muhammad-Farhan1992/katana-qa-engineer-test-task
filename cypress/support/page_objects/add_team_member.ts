/// <reference types = "Cypress" />

class addTeamMember {
    getAddMember() {
        /**
         * This function is used to get the Add Member Button.
         */
        return cy.get('input[value="admin"]');
    }
}

export default addTeamMember;