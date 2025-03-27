export class Dashboard {
  createAccountBtn =
    '//a[text()="Create an Account"]';
  firstNameTxtBx = '#firstname';
  lastNameTxtBx = '#lastname';
  emailTxtBX = '#email_address';
  passwordTxtBx = '#password';
  passwordConfirmTxtBx = '#password-confirmation';
  createAnAccountBtn = '//button[@type="submit"]//span[text()="Create an Account"]';
  signOutBtn = '//li[@class="authorization-link"]//a';
  signOutChevronBtn = '//button[@class="action switch"]';
  errorTxt = "This is a required field.";
  firstNameErrorTxt = '#firstname-error';
  lastNameErrorTxt = '#lastname-error';
  emailErrorTxt = '#email_address-error';
  passwordErrorTxt = '#password-error';
  passwordConfirmErrorTxt = '#password-confirmation-error';

  clickOnCreateAccount() {
    cy.get("a")
      .contains("Create an Account", { timeout: 120000 })
      .should("exist");
    cy.xpath(this.createAccountBtn).first().click();
  }

  verifyCreateNewCustomerAccountTitle() {
    cy.get("h1 span").contains("Create New Customer Account").should("exist");
  }
  

  createAnAccount(firstName, lastName, email, password, passwordConfirm) {
    this.fillInFirstNameTxtBx(firstName);
    this.fillInLastNameTxtBx(lastName);
    this.fillInEmailTxtBx(email);
    this.fillInPasswordTxtBx(password);
    this.fillInPasswordConfirmTxtBx(passwordConfirm);
    this.clickOnCreateAnAccountBtn();
   }

  verifyThankYouMsg(){
    cy.get('div').contains('Thank you for registering with Main Website Store.').should("exist");
  }

  verifyUserDetails(name, email){
  cy.get('p').contains(name).should('exist');
  cy.get('p').contains(email).should('exist');
  }
  fillInFirstNameTxtBx(firstName) {
    cy.get(this.firstNameTxtBx)
      .scrollIntoView()
      .should('be.visible')
      .invoke('click');
    cy.wait(500);
    // Type in the first name text box.
    cy.get(this.firstNameTxtBx).clear().type(firstName);
    cy.get(this.firstNameTxtBx).should("have.value", firstName);
  }

  fillInLastNameTxtBx(lastName) {
    cy.get(this.lastNameTxtBx)
      .scrollIntoView()
      .should('be.visible')
      .invoke('click');
    cy.wait(500);
    // Type in the first name text box.
    cy.get(this.lastNameTxtBx).clear().type(lastName);
    cy.get(this.lastNameTxtBx).should("have.value", lastName);
  }

  fillInEmailTxtBx(email) {
    cy.get(this.emailTxtBX)
      .scrollIntoView()
      .should('be.visible')
      .invoke('click');
    cy.wait(500);
    // Type in the first name text box.
    cy.get(this.emailTxtBX).clear().type(email);
    cy.get(this.emailTxtBX).should("have.value", email);
  }

  fillInPasswordTxtBx(password) {
    cy.get(this.passwordTxtBx)
      .scrollIntoView()
      .should('be.visible')
      .invoke('click');
    cy.wait(500);
    // Type in the first name text box.
    cy.get(this.passwordTxtBx).clear().type(password);
    cy.get(this.passwordTxtBx).should("have.value", password);
  }

  fillInPasswordConfirmTxtBx(passwordConfirm) {
    cy.get(this.passwordConfirmTxtBx)
      .scrollIntoView()
      .should('be.visible')
      .invoke('click');
    cy.wait(500);
    // Type in the first name text box.
    cy.get(this.passwordConfirmTxtBx).clear().type(passwordConfirm);
    cy.get(this.passwordConfirmTxtBx).should("have.value", passwordConfirm);
  }

  clickOnCreateAnAccountBtn() {
    cy.xpath(this.createAnAccountBtn).click();
  }

  signOut() {
    cy.wait(4000);
    cy.xpath(this.signOutChevronBtn).first().click();
    cy.wait(2000);
    cy.xpath(this.signOutBtn).first().click();
  }

  verifyAccountSignedOut(){
    cy.get('h1 span').contains("You are signed out").should("exist");
  }

  signIn(){
    cy.xpath(this.signOutBtn).first().click();
    cy.get("h1 span").contains("Customer Login").should("exist");
  }

  verifyFirstNameRequiredMsg(error = this.errorTxt){
    cy.get(this.firstNameErrorTxt).should("contain.text", error);
  }

  verifyLastNameRequiredMsg(error = this.errorTxt){
    cy.get(this.lastNameErrorTxt).should("contain.text", error);
  }

  verifyEmailRequiredMsg(error = this.errorTxt){
    cy.get(this.emailErrorTxt).should("contain.text", error);
  }

  verifyPasswordRequiredMsg(error = this.errorTxt){
    cy.get(this.passwordErrorTxt).should("contain.text", error);
  }

  verifyPasswordConfirmRequiredMsg(error = this.errorTxt){
    cy.get(this.passwordConfirmErrorTxt).should("contain.text", error);
  }

  verifyEmailAlreadyExist(){
   cy.get('div').contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.').should('exist');
  }
}
