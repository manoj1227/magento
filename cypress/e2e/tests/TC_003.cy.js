import { Login } from "../pages/login";

const loginPage = new Login();

describe("Missing Required Fields in Login", () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Missing Required Fields in Login", () => {
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
