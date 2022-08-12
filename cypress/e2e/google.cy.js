describe('Teste da pagina do google', () => {

    beforeEach(() => {
        cy.visit('http://google.com');
    }); 

    it ('Testar se o google encontra a iw', () => {
        cy.contains('Pesquisa Google');

        // cy.get('[name="q"]').click();

        cy.get('[name="q"]').type('iwtraining');
        
        cy.get('[name="q"]').type('{enter}');

        cy.contains('www.iwtraining.com.br').click({
            force: true
        });
    });
})