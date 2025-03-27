import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

const loginPage = new Login();
const dashBoard = new Dashboard();

describe("Missing Required Fields In Create Account", () => {
  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Missing Required Fields In Create Account", () => {
    
    loginPage.goToHomePage();

    dashBoard.clickOnCreateAccount();
    dashBoard.clickOnCreateAnAccountBtn();
    dashBoard.verifyFirstNameRequiredMsg();
    dashBoard.verifyLastNameRequiredMsg();
    dashBoard.verifyEmailRequiredMsg();
    dashBoard.verifyPasswordRequiredMsg();
    dashBoard.verifyPasswordConfirmRequiredMsg();
    
 });
});
