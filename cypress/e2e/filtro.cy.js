describe('Filtros de listagem', () => {

    beforeEach(() => {
        
        cy.viewport(1920, 1080)
        cy.visit('https://analista-teste.seatecnologia.com.br/')
    })

    it('Deve filtrar apenas funcionários ativos', () => {

        cy.intercept('GET', /employees/).as('getFuncionarios')

        cy.contains('button', 'Ver apenas ativos').click()

        cy.wait('@getFuncionarios')
      
        cy.contains('button', 'Ver apenas ativos')
            .parent()
            .next()
            .as('listaFuncionarios')
        
        cy.contains('button', 'Ver apenas ativos')
            .should('have.class', 'isActive')

        cy.get('@listaFuncionarios')
            .should('not.contain', 'Inativo')

    })

    it('Deve limpar o filtro e mostrar todos os funcionários', () => {

        cy.intercept('GET', /employees/).as('getFuncionarios')

        cy.contains('button', 'Ver apenas ativos').click()
        cy.wait('@getFuncionarios')

        cy.contains('button', 'Ver apenas ativos')
            .should('have.class', 'isActive')
      
        cy.contains('button', 'Limpar filtros').click()

        cy.contains('button', 'Ver apenas ativos')
            .should('not.have.class', 'isActive')

    })
})