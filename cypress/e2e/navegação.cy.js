describe('Navegação', () => {

    beforeEach(() => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')
    })

    it('Deve retornar para a Listagem de Funcionários ao clicar no botão Voltar', () => {

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2', 'Adicionar Funcionário')
            .should('be.visible')

        cy.get('img[src*="left-arrow"]')
            .parent()
            .click()

        cy.contains('h2', 'Funcionário(s)')
            .should('be.visible')

        cy.contains('button', '+ Adicionar Funcionário')
            .should('be.visible')
    })
})