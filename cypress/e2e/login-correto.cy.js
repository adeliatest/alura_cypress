describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        // Abrir tela de login
        cy.get('[data-test="login-button"]').click()
    });

    it('Preenche corretamente os campos do formulário de login e redireciona o usuário para a página home', () => {
        cy.login('del@gmail.com', 'Senha123')
    });
});