describe('Tela de perfil', () => {
    beforeEach(() => {
        // cy.viewport(400, 1024);
        cy.viewport('iphone-6');
        cy.visit('http://localhost:3000');
    });

    it('Teste de listagem de perfil', () => {
        cy.contains('Bem vindo');

        cy.get('[data-cy="menu"]').click();

        cy.contains('MENU');

        cy.contains('Perfis').click();

        cy.wait(3000);

        cy.contains('Administrador');
    });
});