Cypress.Commands.add('login', (email, senha) => {
    // Selecionar campo de email
    cy.get('[data-test="input-loginEmail"]').type(email);
    // Selecionar campo de senha
    cy.get('[data-test="input-loginPassword"]').type(senha);
    // Clicar no botão Entrar
    cy.get('[data-test="submit-button"]').click()
})

Cypress.Commands.add('cadastrar', (nome, email, senha) => {
    // Selecionar campo nome
    cy.get('[data-test="input-name"]').type(nome);
    // Selecionar campo email
    cy.get('[data-test="input-email"]').type(email);
    // Selecionar campo senha
    cy.get('[data-test="input-password"]').type(senha);
    // Selecionar campo de confirmação de senha
    cy.get('[data-test="input-confirm-password"]').type(senha);
    // Clicar no botão de cadastro
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('cadastrar-incorreto', (nome, email, senha) => {
    // Selecionar campo nome
    cy.get('[data-test="input-name"]').type(nome);
    // Selecionar campo email
    cy.get('[data-test="input-email"]').type(email);
    // Selecionar campo senha
    cy.get('[data-test="input-password"]').type(senha);
    // Selecionar campo de confirmação de senha
    cy.get('[data-test="input-confirm-password"]').type(senha);
    // Clicar no botão de cadastro
    cy.get('[data-test="submit-button"]').click();
    // Validar mensagens de erro
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })