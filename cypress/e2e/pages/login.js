export class Login {
 
  emailLoginTxtBx = '#email';
  passwordLoginTxtBx = '#pass';
  signInBtn = '//span[text()="Sign In"]//ancestor::button';
  emailErrorTxt = '#email-error';
  passwordErrorTxt = '#pass-error';


  goToHomePage() {
    cy.visit(`${Cypress.config("baseUrl")}`);
  }

  goToLoginPage() {
    cy.visit(`${Cypress.config("baseUrl")}/customer/account/login`);
  }

  fillLoginDetails(email, password){
    this.fillInLoginEmailTxtBx(email);
    this.fillInLoginPasswordTxtBx(password);
    this.clickOnSignInBtn();
  }

  verifyAccountLoggedSuccessfully(){
    cy.get('h1 span').contains("My Account").should("exist");
  }

  verifyEmailRequiredMsg(error = "This is a required field."){
    cy.get(this.emailErrorTxt).should("contain.text", error);
  }

  verifyPasswordRequiredMsg(error = "This is a required field."){
    cy.get(this.passwordErrorTxt).should("contain.text", error);
  }

  verifyIncorrectDetailsMsg(){
    cy.get('div').contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.").should("exist");
  }

  fillInLoginEmailTxtBx(email){
   cy.get(this.emailLoginTxtBx).clear().type(email);
  }

  clearEmailTxtBx(){
    cy.get(this.emailLoginTxtBx).clear();
   }

  fillInLoginPasswordTxtBx(password){
    cy.get(this.passwordLoginTxtBx).clear().type(password);
  }

  clickOnSignInBtn(){
    cy.xpath(this.signInBtn).first().click();
  }
}
