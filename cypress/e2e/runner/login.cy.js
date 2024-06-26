const { onLoginPage } = require("../../support/pageObjects/login");


describe("Login Tests", () => {
    it("Log into application", () => {
        onLoginPage.goToHomepage();
        onLoginPage.clickSignInHeader();
        onLoginPage.enterLoginCredentails();
        onLoginPage.clickSigninButton();


    });
});