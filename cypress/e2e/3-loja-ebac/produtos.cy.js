///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        //cy.visit('produtos');
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
                cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
       let produto = 'Augusta Pullover Jacket'
        produtosPage.buscarProduto(produto) 
       cy.get('.product_title').should('contain', produto)
    });

    it.only('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Beaumont Summit Kit')
        produtosPage.addProdutoCarrinho('M', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Beaumont Summit Kit” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)   
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })
    });
});