import { Login } from "../pages/login";

const loginPage = new Login();

describe("check email input field in login page", () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("check email input field in login page", () => {
    const text = "aabdsfgab";
    const textSecond = "@awsdfghjkl"
    const digit = 123456789;

    loginPage.goToLoginPage();

    loginPage.fillInLoginEmailTxtBx(text);
    loginPage.clickOnSignInBtn();
    loginPage.verifyEmailRequiredMsg("Please enter a valid email address (Ex: johndoe@domain.com).");

    loginPage.clearEmailTxtBx();
    loginPage.fillInLoginEmailTxtBx(textSecond);
    loginPage.clickOnSignInBtn();
    loginPage.verifyEmailRequiredMsg("Please enter a valid email address (Ex: johndoe@domain.com).");

    loginPage.clearEmailTxtBx();
    loginPage.fillInLoginEmailTxtBx(digit);
    loginPage.clickOnSignInBtn();
    loginPage.verifyEmailRequiredMsg("Please enter a valid email address (Ex: johndoe@domain.com).");
  });
});
