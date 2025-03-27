import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Helpers } from "../utils/helpers";

const loginPage = new Login();
const dashBoard = new Dashboard();
const helpers = new Helpers();

describe('Enter an incorrectly formatted email and verify error message.', () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Enter an incorrectly formatted email and verify error message.", () => {
    const email = helpers.getMockEmail();
    const emailOne = "user@com";
    const emailSecond = "user.com"
    const firstName = helpers.getFirstName();
    const lastName = helpers.getLastName();
    const password = helpers.getPassword();
    const passwordSecond = helpers.getPassword();
    const existingEmail = "ad@gmail.com";
    const weakPassword  = "abcd123456";

    loginPage.goToHomePage();

    dashBoard.clickOnCreateAccount();
    dashBoard.verifyCreateNewCustomerAccountTitle();

    dashBoard.createAnAccount(firstName, lastName, emailOne, password, password);
    dashBoard.verifyEmailRequiredMsg("Please enter a valid email address (Ex: johndoe@domain.com).");

    dashBoard.createAnAccount(firstName, lastName, emailSecond, password, password);
    dashBoard.verifyEmailRequiredMsg("Please enter a valid email address (Ex: johndoe@domain.com).");

    //Try to sign up with an email already registered and check for the appropriate error.
    dashBoard.createAnAccount(firstName, lastName, existingEmail, password, password);
    dashBoard.verifyEmailAlreadyExist();

    // Enter a password that does not meet complexity requirements and verify the error.
    dashBoard.createAnAccount(firstName, lastName, email, weakPassword, weakPassword);
    dashBoard.verifyPasswordRequiredMsg("Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.")

    //Enter different values in both fields and check for validation errors.
    dashBoard.createAnAccount(firstName, lastName, email, password, passwordSecond);
    dashBoard.verifyPasswordConfirmRequiredMsg("Please enter the same value again.");
   
});
});
