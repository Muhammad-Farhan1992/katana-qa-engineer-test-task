/// <reference types = "Cypress" />

class addQuote {
    getCustomerField() {
        /**
         * This function is used to get the Customer Field.
         */
        return cy.get('input[placeholder="Search or create customer"');
    }

    getField(fieldName: any){
        /**
         *  This function is used to get Fields.
         */
        return cy.get('input[name="' + fieldName + '"]');
    }

    getDeliveryDeadline(){
        /**
         * This function is used to select the Delivery Date
         */
        return cy.get(':nth-child(6) > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root');
    }

    getCreatedDate(){
        /**
         * This function is used to select the Created Date
         */
        return cy.get(':nth-child(4) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root');
    }

    getAddress(fieldName: any){
        /**
         * This function is used to get Address Field
         */
        return cy.get('p[data-testid="' + fieldName +'"]');
    }

    getButton(buttonName: any){
        /**
         * This function is used to get Button for Address Pop-Up.
         */
        return cy.get('button[id="' + buttonName + '"');
    }

    getItemFields(fieldName: any){
        /**
         * This function is used to get Item Fields.
         */
        return cy.get('div[data-testid="' + fieldName + '"]');
    }

    getExisitngName(name: any){
        /**
         * This function is used to select the Create New Name
         */
        return cy.contains(name);
    }

    getCloseButton(){
        /**
         * This function is used to get CLose Button
         */
        return cy.get('button[class="MuiButtonBase-root MuiIconButton-root print-hide"]');
    }

    getDeleteCheckbox(){
        /**
         * This function is used to get checkbox for Deletion
         */
        return cy.get('input[class="ag-input-field-input ag-checkbox-input"]').eq(0);
    }

    getDeleteButton(){
        /**
         * This function is used to get Delete Button
         */
        return cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label');
    }
}

export default addQuote;