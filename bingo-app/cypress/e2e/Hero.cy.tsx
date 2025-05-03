describe('Página Inicial de Bingo', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearLocalStorage()
  })

  it('deve exibir o logo e o título corretamente', () => {
    cy.get('img[alt="logo bingo"]').should('be.visible')
    cy.contains('Preencha sua cartela com os números sorteados').should('be.visible')
  })

  it('deve impedir início do jogo com valor inválido', () => {
    cy.contains('Iniciar').click()
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Por favor, digite um número válido.')
    })
  })

  it('deve iniciar o jogo ao inserir um número válido', () => {
    cy.get('input[name="maxLength"]').type('50')
    cy.contains('Iniciar').click()
    cy.contains('Número atual:').should('be.visible')
    cy.contains('Sortear Número').should('be.visible')
    cy.contains('Reiniciar Jogo').should('be.visible')
  })

  it('deve voltar à tela inicial após reiniciar o jogo', () => {
    cy.get('input[name="maxLength"]').type('50')
    cy.contains('Iniciar').click()
    cy.contains('Reiniciar Jogo').click()
    cy.get('input[name="maxLength"]').should('exist')
  })

  it('deve expandir e colapsar as regras do jogo', () => {
    cy.contains('Regras do Jogo').click()
    cy.contains('Defina o número máximo para sua cartela').should('be.visible')
    cy.contains('Grite "BINGO!" quando completar o padrão necessário').should('be.visible')

    cy.contains('Regras do Jogo').click()
    cy.contains('Defina o número máximo para sua cartela').should('not.exist')
  })
})
