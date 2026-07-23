describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    });
    it('Preenche corretamente os campos do formulário de login e redireciona o usuário para a página home', () => {
        // Abrir tela de login
        cy.get('[data-test="login-button"]').click()
        // Selecionar campo de email
        cy.get('[data-test="input-loginEmail"]').type('del@teste.com');
        // Selecionar campo de senha
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        // Clicar no botão Entrar
        cy.get('[data-test="submit-button"]').click()
    });
});