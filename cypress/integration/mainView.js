describe('Main View', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see a header with the app title and a button button for the navigation', () => {
    cy.get('h1').contains('Say It Like You Mean It')
    cy.get('.open-nav-btn').contains('Open')
  })

  it('User should be able to click the Open button and the navigation bar will expand from the side of the page', () => {
    cy.get('.navigation-container').should('have.css', 'width', '0px')
    cy.get('.open-nav-btn').click()
    cy.get('.navigation-container').should('have.css', 'width', '150px')
  })

  it('User should see a form with an input for an entry title and entry content and a button to submit', () => {
    cy.get('input[name=title]')
    cy.get('input[name=content]')
    cy.get('button.analyze-entry-btn')
  })

  it('User should be able enter text in both input fields and click the Analyze button which will then give them feedback in the response', () => {
    cy.get('input[name=title]').type('Facebook')
    cy.get('input[name=content]').type('Facebook is the worst!  I wish they would just go away forever!')
    cy.get('.analyze-entry-btn').click()

    cy.intercept('https://textprobe.p.rapidapi.com/feelings', (req) => {
      req.continue((res) => {

      })
    }) 
  })

  it('User should not be able to click on the analyze button unless both input fields contain text' , () => {
    cy.get('button.analyze-entry-btn').click({ force: true }).url().should('eq', 'http://localhost:3000/')
    cy.get('input[name=title]').type('Facebook')
    cy.get('button.analyze-entry-btn').click({ force: true }).url().should('eq', 'http://localhost:3000/')
    cy.get('input[name=title]').clear()
    cy.get('input[name=content]').type('Facebook is the worst!  I wish they would just go away forever!')
    cy.get('button.analyze-entry-btn').click({ force: true }).url().should('eq', 'http://localhost:3000/')
    cy.get('input[name=title]').type('Facebook')
    cy.get('button.analyze-entry-btn').click().url().should('not.eq', 'http://localhost:3000/')
  })
})