
///<reference types="cypress"/>

const { should } = require("chai");

describe('Funcionalidade: Login', () => {
 
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }); 
    
     afterEach(() => {
        cy.screenshot()
     });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('zaqueu.tabata@gmail.com')
        cy.get('#password').type('Mudar@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, zaqueu.tabata (não é zaqueu.tabata? Sair)')
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('zaqueu@gmail.com')
        cy.get('#password').type('Mudar@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    
    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('zaqueu.tabata@gmail.com')
        cy.get('#password').type('Mudar@12')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail zaqueu.tabata@gmail.com está incorreta. Perdeu a senha?')
    });

});