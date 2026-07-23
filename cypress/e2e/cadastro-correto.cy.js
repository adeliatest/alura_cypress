describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    // Abrir tela de cadastro
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('del', 'del@gmail.com', 'Senha123')
  })
})