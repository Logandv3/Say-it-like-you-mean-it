describe('Past Entries View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=title]').type('Facebook')
    cy.get('input[name=content]').type('Facebook is the worst! I wish they would just go away forever!')
    cy.get('.analyze-entry-btn').click()
    cy.wait(7000)
    cy.get('.back-to-main-link').click()

    cy.get('input[name=title]').type('Email to Client')
    cy.get('input[name=content]').type('Our product is so much better than all of our competitors!  Theirs are all crap!')
    cy.get('.analyze-entry-btn').click()
    cy.wait(7000)
    cy.get('.back-to-main-link').click()

    cy.get('input[name=title]').type('Boss')
    cy.get('input[name=content]').type('Am I ever going to get a raise or what!?  I work my ass off!')
    cy.get('.analyze-entry-btn').click()
    cy.wait(7000)
    cy.get('.open-nav-btn').click()
    cy.get('.all-entries-link').click()
  })

  it('User should see all of their entries displayed as cards with the title, primary emotion and perception', () => {
    cy.get('.card-container').children().should('have.length', 3)
    cy.get('h3').contains('Facebook')
    cy.get('p').contains('Primary Emotion: Sadness')
    cy.get('p').contains('Perceived As: Negative')
  })

  it('User should be able to click the flag entry button on a card and it should now appear in the flagged entries list', () => {
    cy.get('h3').contains('Facebook').siblings('.flag-button').click()
    cy.get('.open-nav-btn').click()
    cy.get('.flagged-entries-link').click()
    cy.get('.card-container').children().should('have.length', 1)
  })
})