require('cypress-xpath')
/*****************************************************
 * Command: GoToWebPage
 * Description: Navigates to web page defined at the 
 * Cypres 'env'
 *
 * @param {string} pageName Web Page Name
 *****************************************************/

Cypress.Commands.add('GoToWebPage', (url) => {
    cy.log('------ Go To WebPage : ' + url + ' ------')
    cy.visit(url)
})

/*****************************************************
 * Command: Click
 * Description: Clicks an element
 *
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
})

/*****************************************************
 * Command: EnterText
 * Description: Enters text on an Element
 *
 * @param {string} locator Element Locator
 * @param {string} text Text to be entered
 *****************************************************/
Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).type(text)
})

/*****************************************************
 * Command: SelectDropDownItem
 * Description: Selects a List(Dropdown) Item
 * @param {string} locator Element Locator
 * @param {string} item Item Value in text
 *****************************************************/
Cypress.Commands.add('SelectDropDownItem', (locator, item) => {
    cy.log('------ Select Drop Down Item : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()

    cy.xpath('//option[text()="' + item + '"]').click()
})

/*****************************************************
 * Command: ValidateElementText
 * Description: Validate element text value by supplying
 * an expected text value
 * @param {string} locator Element Locator
 * @param {binary} expectedText Expected Text Value
 *****************************************************/
Cypress.Commands.add('ValidateElementText', (locator, expectedText) => {
    cy.log('------ Validate Element Text : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).should('have.text', expectedText)
})

/*****************************************************
 * Command: UploadFile
 * Description: Uploads a File
 *
 * @param {string} locator Element Locator
 * @param {string} fileName name of the file saved at
 *                          cypress/fixtures/upload
 *****************************************************/
Cypress.Commands.add('UploadFile', (locator, fileName) => {
    cy.log('------ Upload File : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).attachFile(fileName)
   
})