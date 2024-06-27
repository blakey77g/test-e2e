export class loginPage {
    goToHomepage() {
        cy.visit("/unlocked");
    }

    clickSignInHeader() {
        cy.contains("button span", "Sign in").click();
        cy.contains("ul li a", "Sign in").click();
    }

    enterLoginCredentails() {
        cy.get(`[id*="username"]`).type(Cypress.env('user_email'));
        cy.get(`[id*="password"]`).type(Cypress.env('user_password'));
        
    }

    enterInvalidLoginCredentails() {
        cy.get(`[id*="username"]`).type(Cypress.env('user_email'));
        cy.get(`[id*="password"]`).type(Cypress.env('user_passwordinvald'));
    }

    checkMessageDisplayed(){
        cy.get('[class="pf-c-form__helper-text pf-m-error required kc-feedback-text"]').should('contain', 'Invalid username or password.');
    }    

    clickSigninButton() {
        cy.get('[id="kc-login"]').click();
    }

 }

export const onLoginPage = new loginPage(); 