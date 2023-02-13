
import Locators  from "../Locators/TestLocators"

class PageObject {

    /*****************************************************
     * Method: VerifyAndSelectSite
     * Description: This function verify and selects the site 
     * @param {string} PageTitle
     *****************************************************/
        VerifyAndSelectSite(PageTitle) {

            cy.ValidateElementText(Locators.PageTitle, PageTitle)
            cy.Click(Locators.SiteTile)
            cy.wait(5000)
            
    
        }

    /*****************************************************
     * Method: SelectZone
     * Description: This function selects the zone 
     *****************************************************/
        SelectZone() {

            cy.Click(Locators.ZoneTile)
            cy.wait(5000)
            
    
        }

    /*****************************************************
     * Method: SelectAndUpdateInsideTemp
     * Description: This function selects and update the Inside Temperature 
     * @param {string} Mapping
     * @param {string} Calibration
     *****************************************************/
        SelectAndUpdateInsideTemp(Mapping, Calibration) {

            cy.Click(Locators.InsideTemp)
            cy.xpath(Locators.Mapping).select(Mapping)
            cy.xpath(Locators.Calibration).clear()
            cy.EnterText(Locators.Calibration, Calibration)
            cy.Click(Locators.Save)
            cy.wait(3000)
            
    
        }

        /*****************************************************
         * Method: ClickOnUserProfile
         * Description: This function Clicks on User Profile
         *****************************************************/
            ClickOnUserProfile() {

                cy.Click(Locators.User_Profile)
                cy.wait(5000)
        
            }

        /*****************************************************
         * Method: SelectAndUpdateInsideHunidity
         * Description: This function selects and update the Inside Humidity 
         * @param {string} Mapping
         * @param {string} Calibration
         *****************************************************/
        SelectAndUpdateInsideHunidity(Mapping, Calibration) {

            cy.Click(Locators.InsideHumidity)
            cy.xpath(Locators.Mapping).select(Mapping)
            cy.xpath(Locators.Calibration).clear()
            cy.EnterText(Locators.Calibration, Calibration)
            cy.Click(Locators.Save)
            cy.wait(3000)
            
    
        }

        /*****************************************************
         * Method: ClickAndUpdateEquipment
         * Description: This function Click And Update Equipment
         * @param {string} ChannelType
         * @param {string} ChannelName
         *****************************************************/
        ClickAndUpdateEquipment(ChannelType, ChannelName) {

            cy.Click(Locators.EquipmentName)
            cy.wait(5000)
            cy.xpath(Locators.Channel.ChannelType).select(ChannelType)
            cy.EnterText(Locators.Channel.Name, ChannelName)
            cy.Click(Locators.Save)
            cy.wait(5000)
            
    
        }

        /*****************************************************
         * Method: UploadImage
         * Description: This function will upload image
         * @param {string} Image
         *****************************************************/
        UploadImage(Image) {

            cy.xpath(Locators.Channel.ImageLocator).rightclick()
            cy.Click(Locators.Channel.UploadImage)
            cy.UploadFile(Locators.Channel.UploadFile, Image)
            cy.wait(5000)
            cy.Click(Locators.Save)
            cy.wait(3000)
            
    
        }

        /*****************************************************
         * Method: AddTagsAndNotes
         * Description: This function will add tags and Notes
         * @param {string} Tags
         * @param {string} Note
         *****************************************************/
        AddTagsAndNotes(Tags, Note) {

            cy.Click(Locators.Add)
            cy.EnterText(Locators.AddNote,Note)
            cy.xpath(Locators.AddTags).select(Tags)
            cy.Click(Locators.SendAdd)
            
        }

         /*****************************************************
         * Method: VerifyUpdatedData
         * Description: This function will Verify the updated data
         * @param {string} EquipmentName
         *****************************************************/
         VerifyUpdatedData(EquipmentName) {

            cy.xpath(`(//a[@class="name" and contains(.,"${EquipmentName}")])[1]`)

            
        }
         /*****************************************************
         * Method: Login
         * Description: This function will login the user
         * @param {string} Email
         * @param {string} Password
         *****************************************************/
         Login(Email, Password) {

            cy.EnterText(Locators.Email, Email)
            cy.EnterText(Locators.Password, Password)
            cy.Click(Locators.LoginButton)
            cy.wait(8000)


            
        }
        

}

export default new PageObject