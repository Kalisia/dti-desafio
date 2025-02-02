describe('Cadastro de usuário no Automation Practice', () => {
  it('Deve realizar o cadastro com sucesso e retornar usuário logado na página My Account', () => {
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
      const randomEmail = `teste_${Date.now()}@email.com`
      cy.get('#email_create').type(randomEmail)
      cy.get('#SubmitCreate').click()
      cy.get('#account-creation_form', { timeout: 10000 }).should('be.visible')
      cy.get('#id_gender2').click()
      cy.get('#customer_firstname').type('Joana')
      cy.get('#customer_lastname').type('Silva')
      cy.get('#passwd').type('Senha1234')
      cy.get('#days').select('10')
      cy.get('#months').select('January')
      cy.get('#years').select('1995')
      cy.get('#submitAccount').click()
      cy.get('.page-heading').should('contain', 'My account')
  })
})
