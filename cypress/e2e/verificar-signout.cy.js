describe('Verificar o sign out', () => {
    const email = 'nosa246@uorak.com'
    const senha = '123456'

    it('Deve deslogar com sucesso retornando para a tela de login', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('contain', 'My account')
        cy.get('.logout').click()
        cy.get('.page-heading').should('be.visible')
    })
})