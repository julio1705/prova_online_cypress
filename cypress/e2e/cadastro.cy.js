describe('Cadastro de usuários', () => {
  it('Deve permitir cadastro com campos válidos', () => {
    cy.visit('/cadastro');
    cy.get('#nome').type('Usuário Teste');
    cy.get('#email').type('teste@teste.com');
    cy.get('#senha').type('SenhaForte123');
    cy.get('#confirmarSenha').type('SenhaForte123');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });

  it('Deve mostrar erro ao tentar cadastrar com campos inválidos', () => {
    cy.visit('/cadastro');
    cy.get('#email').type('email_invalido');
    cy.get('#senha').type('123');
    cy.get('#confirmarSenha').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('Por favor, corrija os erros no formulário').should('be.visible');
  });
});