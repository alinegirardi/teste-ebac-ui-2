/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
beforeEach(() => {
    cy.visit('minha-conta/edit-account/')
    cy.login('aline.teste@teste.com.br', 'teste@123')
});

it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta ('Aline', 'Girardi', 'aline.qa')
    cy.get('.woocommerce-message').should ('contain', 'Detalhes da conta modificados com sucesso')
});

});