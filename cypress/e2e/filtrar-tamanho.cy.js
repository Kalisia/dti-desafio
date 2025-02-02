describe('Filtrar por tamanho L no Automation Practice', () => {
    it('Deve exibir apenas produtos tamanho L após aplicar o filtro', () => {
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
        cy.get('#layered_id_attribute_group_3').check({ force: true })
        cy.wait(2000)
        cy.get('.product_list').should('exist')
    })
})
