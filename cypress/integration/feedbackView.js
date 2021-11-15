describe('Feedback View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=title]').type('Facebook')
    cy.get('input[name=content]').type('Facebook is the worst! I wish they would just go away forever!')
    cy.get('.analyze-entry-btn').click()
    cy.wait(7000)
  })

  it('User should see the title of their entry, the content and an evaluation of the emotions and perception', () => {
    cy.get('.entry-title').contains('Facebook')
    cy.get('.entry-content').contains('Facebook is the worst! I wish they would just go away forever!')
    cy.get('.primary-emotion').contains('Primary Emotion: Sadness')
    cy.get('.message-undertone').contains('Message Undertone: Negative')
    cy.get('p').contains('Anger: 26.3%')
    cy.get('p').contains('Fear: 10.3%')
    cy.get('p').contains('Joy: 0.5%')
    cy.get('p').contains('Neutral: 1.4%')
    cy.get('p').contains('Sadness: 61.5%')
    cy.get('p').contains('Negativity: 1')
    cy.get('p').contains('Positivity: 0')
  })

  it('User should be able to click Back to Main Page link and be taken back to the main page', () => {
    cy.get('.back-to-main-link').click().url().should('eq', 'http://localhost:3000/')
  })
})