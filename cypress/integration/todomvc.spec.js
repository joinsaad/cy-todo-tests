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
   
    




    
   


    // cy.get('.new-todo', {timeout: 6000}).type('Clean Room{Enter}')
    // cy.get('label').should('have.text','Clean Room')
    // cy.get('toggle').should('not.be.checked')

    // cy.get('.toggle').click()
    // cy.get('label').should('have.css','text-decoration-line','line-through')
    // cy.contains('Clear completed').click()
    // cy.get('todo-list').should('not.have.descendants','li')
    //some comments
    //some more comments

})


