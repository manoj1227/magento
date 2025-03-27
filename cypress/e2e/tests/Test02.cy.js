import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

const loginPage = new Login();
const dashBoard = new Dashboard();

describe("check with wrong creditionals", () => {

  beforeEach(() => {
    // Ensure cookies/local storage are cleared to avoid test interference
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("check with wrong creditionals", () => {
    const email = "ad12@gmail.com"; // correct email
    const password = "Massword@12"; // wrong password

    const emailSecond = "ad11@gmail.com"; // wrong email
    const passwordSecond = "Password@12"; // correct password

    loginPage.goToLoginPage();

    loginPage.fillLoginDetails(email, password);

    loginPage.verifyIncorrectDetailsMsg();

    loginPage.fillLoginDetails(emailSecond, passwordSecond);

    loginPage.verifyIncorrectDetailsMsg();

    
    loginPage.fillLoginDetails(email, passwordSecond);

    loginPage.verifyAccountLoggedSuccessfully();
    
    dashBoard.signOut();
  });
});
