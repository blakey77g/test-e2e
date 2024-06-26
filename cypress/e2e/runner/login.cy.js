const { onLoginPage } = require("../../support/pageObjects/login");
const { onLandingPage } = require("../../support/pageObjects/landingPage");


describe("Login Tests", () => {
    it("Log into application", () => {
        onLoginPage.goToHomepage();
        onLoginPage.clickSignInHeader();
        onLoginPage.enterLoginCredentails();
        onLoginPage.clickSigninButton();
        onLandingPage.checkDetails();


    });
});