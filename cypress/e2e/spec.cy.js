describe('template spec', () => {
  it('passes', () => {
    // Visita o site Adopet
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // Abre tela de cadastro - procura elemento com texto
    cy.contains('a', 'Cadastrar').click();
    // Seleciona campo nome
    cy.get('[data-test="input-name"]').type('Del');
    // Seleciona campo email
    cy.get('[data-test="input-email"]').type('del@teste.com');
    // Seleciona campo senha
    cy.get('[data-test="input-password"]').type('Senha123');
    // Seleciona campo de confirmação de senha
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    // Clica no botão de cadastro
    cy.contains('button', 'Cadastrar').click();
  })
})