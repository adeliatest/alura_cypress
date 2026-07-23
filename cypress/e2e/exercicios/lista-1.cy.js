describe('Verificar texto na pagina inicial', () => {
    before(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    });
    it('Verificar o título da página inicial', () => {
        cy.title().should('eq', 'AdoPet')
    });
    it('Verificar frase da página inicial', () => {
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    });
    it('Verificar frase maior da página inicial', () => {
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    });
});