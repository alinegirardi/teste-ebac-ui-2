///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>{
    
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aline.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it ('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('alineteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error > li').should('exist')

    })

    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aline.teste@teste.com.br')
        cy.get('#password').type('teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aline.teste@teste.com.br está incorreta')
    })

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve fazer login com sucesso - Usando fixtures', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });

    it ('Deve fazer login com sucesso - Usando Comandos customizado', () => {
        cy.login ('aline.teste@teste.com.br','teste@123' )
        cy.get('.page-title').should('contain', 'Minha conta')
    })
})