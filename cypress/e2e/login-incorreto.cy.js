describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400, }).as('stubPost')
    })

    it('Verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    });

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('del@gmail.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
    });
});

// cria um "dublê" da API para testar como o nosso aplicativo reage a um erro específico, sem precisar que a API real retorne esse erro.
// É como criar um "dublê" da API que se comporta exatamente como você precisa para o seu teste.
// Dessa forma, você consegue testar como o seu front-end reage a diferentes cenários de erro da API de forma controlada e consistente, garantindo que as mensagens corretas sejam exibidas para a pessoa usuária.