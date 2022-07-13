/// <reference types = "Cypress" />

import addQuote from "../page_objects/add_quotes";

const add_quote = new addQuote();

class addressCommonFunctions {
    enterAddress(data: any) {
        /**
         * This function is used to Enter Addresses.
         */
         add_quote.getField('firstName').clear().type(data.firstName);
         add_quote.getField('lastName').clear().type(data.lastName);
         add_quote.getField('company').clear().type(data.company);
         add_quote.getField('phone').clear().type(data.phone);
         add_quote.getField('line1').clear().type(data.line1);
         cy.wait(2000);
         add_quote.getField('line1').type('{esc}');
         add_quote.getField('line2').clear().type(data.line2);
         cy.wait(2000);
         add_quote.getField('line2').type('{esc}');
         add_quote.getField('city').clear().type(data.city);
         add_quote.getField('state').clear().type(data.state);
         add_quote.getField('zip').clear().type(data.zip);
         add_quote.getField('country').clear().type(data.country);
         add_quote.getButton('submitButton').click();
    }
}

export default addressCommonFunctions;