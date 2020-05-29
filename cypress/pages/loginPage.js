

export class LoginPage {

    visit() {
      cy.visit('https://www.etsy.com/');
    }

    clickSigninButton()
    {
        cy.get("button[class$='select-signin']").click()
    }
  
    VerifyEmailError(value) {
      cy.get("#aria-join_neu_email_field-error").should("have.text",value)
        
    }
  
    getPasswordError() {
      return cy.get(`[data-testid=SignInPasswordError]`)
    }
  
    fillEmail(value) {
      const field = cy.get("#join_neu_email_field");
      field.clear();
      field.type(value);
  
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get("#join_neu_password_field");
      field.clear();
      field.type(value);
  
      return this;
    }
  
    submit() {
      const button = cy.get("button[value='sign-in']");
      button.click();
    }
  }
  