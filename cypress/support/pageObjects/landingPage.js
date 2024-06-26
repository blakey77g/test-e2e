export class landingPage {

    checkDetails() {
        cy.get('.sso-nav__button-text').click()
    }




}

export const onLandingPage = new landingPage(); 