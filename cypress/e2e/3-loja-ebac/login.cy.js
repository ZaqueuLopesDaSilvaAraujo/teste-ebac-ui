
///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
 
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('zaqueu.tabata@gmail.com')
        cy.get('#password').type('Mudar@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, zaqueu.tabata (não é zaqueu.tabata? Sair)')
    });

});