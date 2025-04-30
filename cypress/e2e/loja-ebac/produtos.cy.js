///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    before('', () => {
        cy.visit('produtos')

    });

    it('Deve selecionar um produtoda lista', () => {
        cy.get('.product-block')
        .first()
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });
});