export class landingPage {

    checkDetails() {
        cy.get('.sso-nav__button-text').click();
        cy.get('*[class^="sso-nav__list-item-link"]').should('contain', 'My Details');
        cy.get('.js-sso-logout').click();
    }




}

export const onLandingPage = new landingPage(); 