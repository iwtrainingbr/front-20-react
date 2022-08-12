describe('Login Facebook', () => {
    beforeEach(() => {
        cy.visit('http://facebook.com');
    });

    it ('Testando login do facebook', () => {
        cy.get('[id="email"]').type('teste@email.com');
        cy.get('[id="pass"]').type('12345678');

        cy.get('[name="login"]').click();
    });
});