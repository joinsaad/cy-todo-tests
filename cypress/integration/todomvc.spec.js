/// <reference types="cypress"/>






it('it should test the required fields on registering the user on etsy', () => {
    cy.visit('https://www.etsy.com/')
    cy.get("button[class$='select-signin']").click()
    cy.get("button[class$='select-register']").click()
    cy.get("button[value='register']").click()

    cy.get("#aria-join_neu_email_field-error").should("have.text","Can't be blank.")
    cy.get('#aria-join_neu_first_name_field-error').should("have.text","Can't be blank.")
    cy.get('#aria-join_neu_password_field-error').should("have.text","Can't be blank.")


    // cy.get("#join_neu_email_field").type("joinsaad@gmail.com")
    // cy.get("#join_neu_first_name_field").type("saad")
    // cy.get("#join_neu_password_field").type("saad123")
   


})


it('it should test the failed login', () => {
    cy.visit('https://www.etsy.com/')
    cy.get("button[class$='select-signin']").click()
    cy.get("#join_neu_email_field").type("joinsaad@gmail.com")
    cy.get("#join_neu_password_field").type("saad123")  
    cy.get("button[value='sign-in']").click()
    cy.get("#aria-join_neu_email_field-error").should("have.text","Email address is invalid.")
})



const emails = ['joinsaad@gmal.com', 'joinsaad+1@gmail.com','joinsaad+2@gmail.com']


emails.forEach((email) => {
it('data driven it should test the failed login with ${email}`', () => {
    cy.visit('https://www.etsy.com/')
    cy.get("button[class$='select-signin']").click()
    cy.get("#join_neu_email_field").type(email)
    cy.get("#join_neu_password_field").type("saad123")  
    cy.get("button[value='sign-in']").click()
    cy.get("#aria-join_neu_email_field-error").should("have.text","Email address is invalid.")
})
})








