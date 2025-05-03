describe('Página de Bingo', () => {
  beforeEach(() => {
    cy.visit('/') 
    cy.clearLocalStorage()
  })

  it('deve renderizar a interface corretamente', () => {
    cy.get('input[name="maxLength"]').type("10")
    cy.contains('Iniciar').click()
    cy.contains('Número atual:')
    cy.contains('Nenhum número sorteado ainda')
    cy.contains('Sortear Número')
    cy.contains('Reiniciar Jogo')
  })

  it('deve sortear um número e exibir corretamente', () => {
    cy.get('input[name="maxLength"]').type("10")
    cy.contains('Iniciar').click()
    cy.contains('Sortear Número').click()
    cy.get('span[id="lastNumber"]').should('not.be.empty')
    cy.get('.number').should('have.length', 1)
  })

  it('deve acumular múltiplos números sorteados', () => {
    cy.get('input[name="maxLength"]').type("10")
    cy.contains('Iniciar').click()
    cy.contains('Sortear Número').click()
    cy.contains('Sortear Número').click()
    cy.contains('Sortear Número').click()
    cy.get('.number').should('have.length', 3)
  })

  it('deve reiniciar o jogo e limpar os números', () => {
    cy.get('input[name="maxLength"]').type("10")
    cy.contains('Iniciar').click()
    cy.contains('Sortear Número').click()
    cy.contains('Reiniciar Jogo').click()
    cy.get('.number').should('not.exist')
  })

  it('deve mostrar alerta se todos os números foram sorteados', () => {
    const maxNumber = 10
    cy.get('input[name="maxLength"]').type(maxNumber.toString())
    cy.contains('Iniciar').click()
    for (let i = 0; i < maxNumber; i++) {
      cy.contains('Sortear Número').click()
    }
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Todos os números já foram sorteados')
    })
  })
})