describe('Login sem cadastro no Automation Practice', () => {
    const email = 'patricia5092@uorak.com'
    const senha = '123456'

    it('Deve retornar erro"', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin').click()
        cy.get('#center_column > :nth-child(2)').should('be.visible')
    })
})




