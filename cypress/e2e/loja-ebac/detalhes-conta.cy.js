///<reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login(perfil.usuario, perfil.senha)
    });

it('Deve completar detalhes da conta com sucesso', () => {

    cy.detalhesConta('Zaqueu', 'Araujo', 'Zaqueu.qa')
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    
});
    
});