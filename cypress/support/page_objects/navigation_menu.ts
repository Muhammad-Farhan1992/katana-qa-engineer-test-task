/// <reference types = "Cypress" />

class navigationMenu {
    getMenuTab(menuName: any) {
        /**
         * This function is used to get the Menu Tab.
         */
        return cy.get('a[id="' + menuName + '"]');
    }

    getProfileButton(){
        /**
         * This function is used to get the Profile Button.
         */
        return cy.get('div[class="sc-hKFxyN kksiKu"]');
    }

    getProfileTab(profileTabName: any) {
        /**
         * This function is used to get the Profile Tab.
         */
        return cy.get('li[id="' + profileTabName + '"]');
    }
}

export default navigationMenu;