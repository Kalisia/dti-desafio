describe('Login e fazer compra no Automation Practice', () => {
    const email = 'remco3026@uorak.com'
    const senha = '123456'

    it('Deve logar e fazer uma compra', () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        cy.get('#email').type(email)
        cy.get('#passwd').type(senha)
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('contain', 'My account')
        cy.get('#search_query_top').type('Blouses{enter}')
        cy.get('.product_list').should('exist')
        cy.get('.lnk_view > span').dblclick()
        cy.get('#group_1').select('L')
        cy.get('#color_11').click
        cy.get('.exclusive > span').dblclick()
        cy.get('.button-medium > span').dblclick()
        cy.get('.cart_navigation > .button > span').scrollIntoView().should('be.visible').dblclick()
        cy.get('.cart_navigation > .button > span').scrollIntoView().should('be.visible').dblclick()
        cy.get('#cgv').scrollIntoView().check()
        cy.get('.cart_navigation > .button > span').scrollIntoView().should('be.visible').dblclick()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').scrollIntoView().should('be.visible').dblclick()
        cy.get('.alert').should('be.visible')
    })
})


