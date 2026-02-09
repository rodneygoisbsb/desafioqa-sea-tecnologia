import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Cadastro de Funcionários', () => {

    beforeEach(() => {

        cy.viewport(1920, 1080)
        cy.visit('https://analista-teste.seatecnologia.com.br/')
    })

    it('Deve cadastrar um novo funcionário Inativo sem EPI', () => {

        const name = faker.person.fullName();
        const cpf = faker.string.numeric(11);
        const rg = faker.string.numeric(7);

        cy.intercept('POST', '**/employees').as('postCadastro')

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2', 'Adicionar Funcionário')
            .should('be.visible')

        cy.get('input[name="name"] ').type(name)

        cy.contains('span', 'Masculino').click()

        cy.get('input[name="cpf"]').type(cpf)

        cy.get('input[name="birthDay"]').type('1990-01-01')

        cy.get('input[name="rg"]').type(rg)

        cy.contains('label', 'Cargo').parent().find('.ant-select-selector').click()
        cy.contains('.ant-select-item-option-content', 'Cargo 03').click()

        cy.contains('span', 'O trabalhador não usa EPI.').click()

        cy.contains('button', 'Salvar').click()

        cy.wait('@postCadastro').then((intercep) => {
            expect(intercep.response.statusCode).to.eq(201)
        })

        cy.contains('Funcionário(s)')
            .should('be.visible')

    })

    it('Deve cadastrar um novo funcionário Inativo com EPI e Atestado', () => {

        const name = faker.person.fullName();
        const cpf = faker.string.numeric(11);
        const rg = faker.string.numeric(7);

        cy.intercept('POST', '**/employees').as('postCadastro')

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2', 'Adicionar Funcionário')
            .should('be.visible')

        cy.get('button[role="switch"]')
            .should('have.attr', 'aria-checked', 'false')
            .click()
            .should('have.attr', 'aria-checked', 'true')

        cy.get('input[name="name"] ').type(name)

        cy.contains('span', 'Feminino').click()

        cy.get('input[name="cpf"]').type(cpf)

        cy.get('input[name="birthDay"]').type('1990-01-01')

        cy.get('input[name="rg"]').type(rg)

        cy.contains('label', 'Cargo')
            .parent()
            .find('.ant-select-selector').click()

        cy.contains('.ant-select-item-option-content', 'Cargo 03').click()

        cy.contains('label', 'Selecione a atividade:')
            .parent()
            .find('.ant-select-selector').click()

        cy.get('.ant-select-selection-item')
            .first().click()

        cy.contains('label', 'Selecione o EPI:')
            .parent()
            .find('.ant-select-selector').click()

        cy.get('.ant-select-selection-item')
            .first().click()

        cy.get('input[name="caNumber"]').type('3587')

        cy.contains('span', 'Adicionar EPI').click() //Mesmo não fazendo nada está simulando o Click

        cy.get('input[name="file"]').selectFile('cypress/fixtures/atestado.pdf', { force: true })

        cy.contains('button', 'Salvar').click()

        cy.wait('@postCadastro').then((intercep) => {
            expect(intercep.response.statusCode).to.eq(201)
        })

        cy.contains('Funcionário(s)')
            .should('be.visible')

    })

    it('Deve cadastrar um novo funcionário Ativo sem EPI', () => {

        const name = faker.person.fullName();
        const cpf = faker.string.numeric(11);
        const rg = faker.string.numeric(7);
        
        const sexos = ['Masculino', 'Feminino']
        const sexoSorteado = Cypress._.sample(sexos)

        cy.intercept('POST', '**/employees').as('postCadastro')

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2','Adicionar Funcionário')
            .should('be.visible')

        cy.get('button[role="switch"]')
            .should('have.attr', 'aria-checked', 'false')
            .click()
            .should('have.attr', 'aria-checked', 'true')

        cy.get('input[name="name"] ').type(name)

        cy.contains('span', sexoSorteado).click()

        cy.get('input[name="cpf"]').type(cpf)

        cy.get('input[name="birthDay"]').type('1990-01-01')

        cy.get('input[name="rg"]').type(rg)

        cy.contains('label', 'Cargo').parent().find('.ant-select-selector').click()
        cy.contains('.ant-select-item-option-content', 'Cargo 03').click()

        cy.contains('span', 'O trabalhador não usa EPI.').click()

        cy.contains('button', 'Salvar').click()

        cy.wait('@postCadastro').then((intercep) => {
            expect(intercep.response.statusCode).to.eq(201)
        })

        cy.contains('Funcionário(s)')
            .should('be.visible')


    })

    it('Deve cadastrar um novo funcionário Ativo com EPI e Atestado', () => {

        const name = faker.person.fullName();
        const cpf = faker.string.numeric(11);
        const rg = faker.string.numeric(7);

        const sexos = ['Masculino', 'Feminino']
        const sexoSorteado = Cypress._.sample(sexos)

        cy.intercept('POST', '**/employees').as('postCadastro')

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2','Adicionar Funcionário')
            .should('be.visible')

        cy.get('button[role="switch"]')
            .should('have.attr', 'aria-checked', 'false')
            .click()
            .should('have.attr', 'aria-checked', 'true')

        cy.get('input[name="name"]').type(name)

        cy.contains('span', sexoSorteado).click()

        cy.get('input[name="cpf"]').type(cpf)

        cy.get('input[name="birthDay"]').type('1990-01-01')

        cy.get('input[name="rg"]').type(rg)

        cy.contains('label', 'Cargo')
            .parent()
            .find('.ant-select-selector').click()

        cy.contains('.ant-select-item-option-content', 'Cargo 03').click()

        cy.contains('label', 'Selecione a atividade:')
            .parent()
            .find('.ant-select-selector').click()

        cy.get('.ant-select-selection-item')
            .first().click()

        cy.contains('label', 'Selecione o EPI:')
            .parent()
            .find('.ant-select-selector').click()

        cy.get('.ant-select-selection-item')
            .first().click()

        cy.get('input[name="caNumber"]').type('3587')

        cy.contains('span', 'Adicionar EPI').click() //Mesmo não fazendo nada está simulando o Click

        cy.get('input[name="file"]').selectFile('cypress/fixtures/atestado.pdf', { force: true })

        cy.contains('button', 'Salvar').click()

        cy.wait('@postCadastro').then((intercep) => {
            expect(intercep.response.statusCode).to.eq(201)
        })

        cy.contains('Funcionário(s)')
            .should('be.visible')

    })

    it('Não deve cadastrar se faltar campos obrigatórios', () => {

        const name = faker.person.fullName();
        const cpf = faker.string.numeric(11);
        const rg = faker.string.numeric(7);

        cy.contains('button', '+ Adicionar Funcionário').click()

        cy.contains('h2','Adicionar Funcionário')
            .should('be.visible')

        cy.contains('button', 'Salvar').click()

        //NOME OBRIGATÓRIO
        cy.get('input[name="name"]')
            .invoke('prop', 'validity')
            .should('deep.include', { valid: false })

        cy.wait(1000)

        cy.get('input[name="name"]').type(name)

        cy.contains('button', 'Salvar').click()

        //CPF OBTIGATÓRIO
        cy.get('input[name="cpf"]')
            .invoke('prop', 'validity')
            .should('deep.include', { valid: false })

        cy.wait(1000)

        cy.get('input[name="cpf"]').type(cpf)

        cy.contains('button', 'Salvar').click()

        //DATA DE NASCIMENTO OBRIGATÓRIO
        cy.get('input[name="birthDay"]')
            .invoke('prop', 'validity')
            .should('deep.include', { valid: false })

        cy.wait(1000)

        cy.get('input[name="birthDay"]').type('1990-01-01')

        cy.contains('button', 'Salvar').click()

        //RG OBRIGATÓRIO
        cy.get('input[name="rg"]')
            .invoke('prop', 'validity')
            .should('deep.include', { valid: false })

        cy.wait(1000)

        cy.get('input[name="rg"]').type(rg)

        cy.contains('button', 'Salvar').click()

        //NÚMERO CA OBRIGATÓRIO
        cy.get('input[name="caNumber"]')
            .invoke('prop', 'validity')
            .should('deep.include', { valid: false })

        cy.wait(1000)

        cy.get('input[name="caNumber"]').type('3587')

    })

})