describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  });
  it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    // Abrir tela de cadastro - procura elemento com texto
    cy.get('[data-test="register-button"]').click();
    // Clicar no botão de cadastro
    cy.get('[data-test="submit-button"]').click();
    // Validar mensagens de erro - Campos vazios
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
  })
})