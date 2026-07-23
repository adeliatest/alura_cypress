describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  });
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    // Abrir tela de cadastro - procura elemento com texto
    cy.get('[data-test="register-button"]').click();
    // Selecionar campo nome
    cy.get('[data-test="input-name"]').type('Del');
    // Selecionar campo email
    cy.get('[data-test="input-email"]').type('del@teste.com');
    // Selecionar campo senha
    cy.get('[data-test="input-password"]').type('Senha123');
    // Selecionar campo de confirmação de senha
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    // Clicar no botão de cadastro
    cy.get('[data-test="submit-button"]').click();
  })
})