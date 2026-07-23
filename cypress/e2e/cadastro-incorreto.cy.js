describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    // Abrir tela de cadastro - procura elemento com texto
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.cadastrarIncorreto(' ', ' ', ' ')
  })
})