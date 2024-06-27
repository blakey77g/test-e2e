const { onLoginPage } = require("../../support/pageObjects/loginPage");
const { onLandingPage } = require("../../support/pageObjects/landingPage");


describe("Login Tests", () => {
     
    beforeEach(() => {
        onLoginPage.goToHomepage();
        onLoginPage.clickSignInHeader();
      });

   
    it("Log into application", () => {
        onLoginPage.enterLoginCredentails();
        onLoginPage.clickSigninButton();
        onLandingPage.checkDetails();
    
    });

    it("attempt login with incorrect credentials", () => {
        onLoginPage.enterInvalidLoginCredentails();
        onLoginPage.clickSigninButton();
        onLoginPage.checkMessageDisplayed();
    })

})