///<reference types="cypress"/>


describe('Funcionalidade: Login', () =>{
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aline.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it ('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('alineteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aline.teste@teste.com.br')
        cy.get('#password').type('teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aline.teste@teste.com.br está incorreta')
    })
})