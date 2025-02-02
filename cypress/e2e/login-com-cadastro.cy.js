describe('Login com cadastro no Automation Practice', () => {
    const email = 'nosa246@uorak.com'
    const senha = '123456'

    it('Deve logar com sucesso e levar para a página My Account"', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('contain', 'My account')
    })
})