///<reference types="cypress"/>

import { gerarUsuario } from '@utils/dadosFake';

describe('Funcionalidade Cadastro', () => {
  before(() => {
    cy.visit('minha-conta');
  });

  it('Deve completar o cadastro com sucesso', () => {
    const usuario = gerarUsuario(); // <- Cria o usuário
    
    cy.preCadastro(usuario.email, 'Mudar@123', usuario.nome, usuario.sobrenome)
    cy.get('.woocommerce-MyAccount-content :nth-child(2)').should('exist');
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');

  });
});