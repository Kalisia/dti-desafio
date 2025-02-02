describe('Login e busca por "Blouses" no Automation Practice', () => {
    const email = 'nosa246@uorak.com'
    const senha = '123456'

    it('Deve logar e buscar por "Blouses" e retornar o mesmo produto buscado', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('contain', 'My account')
        cy.get('#search_query_top').type('Blouses{enter}')
        cy.get('.product_list').should('exist')
    })
})


