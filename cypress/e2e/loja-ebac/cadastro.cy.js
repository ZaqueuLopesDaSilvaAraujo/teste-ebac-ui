///<reference types="cypress"/>

import { gerarUsuario } from '@utils/dadosFake';

describe('Funcionalidade Cadastro', () => {
  before(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  });

  it('Deve completar o cadastro com sucesso', () => {
    const usuario = gerarUsuario(); // <- Cria o usuário

    cy.get('#reg_email').type(usuario.email);
    cy.get('#reg_password').type('Mudar@123');
    cy.get(':nth-child(4) > .button').click();
    cy.get('.woocommerce-MyAccount-content :nth-child(2)').should('exist');
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(usuario.nome);
    cy.get('#account_last_name').type(usuario.sobrenome);
    cy.get('.woocommerce-Button').click();
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
  });
});