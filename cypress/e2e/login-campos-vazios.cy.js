describe('Login com campos vazios no Automation Practice', () => {
    it('Deve exibir mensagem de erro ao tentar logar sem preencher e-mail e senha', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'An email address required')
    })
})
