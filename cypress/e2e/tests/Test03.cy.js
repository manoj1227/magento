import { Login } from "../pages/login";

const loginPage = new Login();

describe("check required fields in login page", () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("check required fields in login page", () => {
    const email = "ad12@gmail.com"; 
    const password = "Password@12"; 

    loginPage.goToLoginPage();

    loginPage.clickOnSignInBtn();
    loginPage.verifyEmailRequiredMsg();
    loginPage.verifyPasswordRequiredMsg();

    loginPage.fillInLoginEmailTxtBx(email);
    loginPage.clickOnSignInBtn();
    loginPage.verifyPasswordRequiredMsg();

    loginPage.clearEmailTxtBx();
    loginPage.fillInLoginPasswordTxtBx(password);
    loginPage.clickOnSignInBtn();
    loginPage.verifyEmailRequiredMsg();

  });
});
