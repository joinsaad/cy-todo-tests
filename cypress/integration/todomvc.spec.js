/// <reference types="cypress"/>

it('it should be able to add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout: 6000}).type('Clean Room{Enter}')
    cy.get('label').should('have.text','Clean Room')
    cy.get('toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')
    cy.contains('Clear completed').click()
    cy.get('todo-list').should('not.have.descendants','li')
})


