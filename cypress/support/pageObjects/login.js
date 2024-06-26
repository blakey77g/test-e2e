export class loginPage {
    goToHomepage() {
        cy.visit("/unlocked");
    }

    clickSignInHeader() {
        cy.contains("button span", "Sign in").click()
        cy.contains("ul li a", "Sign in").click();
    }

    enterLoginCredentails() {
        // cy.get(`[id*="username"]`).type("pz4jr0lk84@mxscout.com");
        // cy.get(`[id*="password"]`).type("test1234");
        cy.get(`[id*="username"]`).type(Cypress.env('user_name'))
        cy.get(`[id*="password"]`).type(Cypress.env('user_password'))
        
    }

    clickSigninButton() {
        cy.get('[id="kc-login"]').click();
    }
}

export const onLoginPage = new loginPage(); 