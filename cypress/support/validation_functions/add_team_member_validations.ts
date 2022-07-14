/// <reference types = "Cypress" />

class addTeamMemberValidations {
    verifyTeamMemberAdded(){
        /**
         * This function is used to verify the Addition of Team Member.
         */
        cy.get('span[class="MuiTypography-root MuiTypography-caption"').should('have.length.greaterThan', 1);
    }

    verifyTeamMemberRemoved(){
        /**
         * This function is used to verify the Removal of Team Member.
         */
        cy.get('span[class="MuiTypography-root MuiTypography-caption"').should('have.length', 1);
    }
}

export default addTeamMemberValidations;