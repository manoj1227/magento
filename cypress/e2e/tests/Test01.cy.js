import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Helpers } from "../utils/helpers";

const loginPage = new Login();
const dashBoard = new Dashboard();
const helpers = new Helpers();

describe("Valid Signup", () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });


  it("Valid Signup", () => {
    const email = helpers.getMockEmail();
    const firstName = helpers.getFirstName();
    const lastName = helpers.getLastName();
    const password = helpers.getPassword();
    const fullName = firstName+" "+lastName;

    cy.task("log", `This is the email: ${email}`);
    cy.task("log", `This is the password: ${password}`);

    loginPage.goToHomePage();

    dashBoard.clickOnCreateAccount();
    dashBoard.verifyCreateNewCustomerAccountTitle();

    dashBoard.createAnAccount(firstName, lastName, email, password, password);

    dashBoard.verifyThankYouMsg();
    dashBoard.verifyUserDetails(fullName, email)

    dashBoard.signOut();
    dashBoard.verifyAccountSignedOut();

    //login with created account
    dashBoard.signIn();

    loginPage.fillLoginDetails(email, password);

    loginPage.verifyAccountLoggedSuccessfully();

    dashBoard.signOut();
  });
});
