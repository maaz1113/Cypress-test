import PageObject from "../PageObjects/PageObject"

describe('Interview Test', function () {

    it('Test Case', function () {

       cy.visit('http://c2.link4cloud.com/usa/c18/sites')
       //wait for 5 sec
       cy.wait(5000)

       // Login to the site
       PageObject.Login("", "")

       // Verify Page title
       PageObject.VerifyAndSelectSite('Sites')

       //Click on Site
       PageObject.SelectZone()

       //Click and update Inside Temperature
       PageObject.SelectAndUpdateInsideTemp('Software', '75.')

       //Click on user profile 
       PageObject.ClickOnUserProfile()

       // Click and update Inside Humidity
       PageObject.SelectAndUpdateInsideHunidity('Software', '48.')

       //Click on user profile 
       PageObject.ClickOnUserProfile()

       //Click and update Equipment
       PageObject.ClickAndUpdateEquipment('On Off','Test-01')

       //Upload Image
       PageObject.UploadImage('test.jpeg')

       //Add tags and notes
       PageObject.AddTagsAndNotes('This is test note', 'equipment')

       //Click on user profile 
       PageObject.ClickOnUserProfile()

       //Verify Updated data
       PageObject.VerifyUpdatedData('Test-01')




    })
})


