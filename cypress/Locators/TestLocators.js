class Locators {

    static SiteTile = '//div[@aria-label="For Nashrah"]'
    static PageTitle = '//h1'
    static ZoneTile = '//div[@id="zoneTile"]'
    static InsideTemp = '//a[@aria-label="Inside Temperature"]'
    static InsideHumidity = '//a[@aria-label="Inside Humidity"]'
    static Mapping = '//label[text()="Mapping"]//following-sibling::div//select'
    static Calibration = '//label[text()="Calibration"]//following-sibling::input'
    static Save = '//button[text()="Save"]'
    static User_Profile = '//a[text()="Maaz Faisal"]'
    static EquipmentName = '(//a[@class="name"])[1]'

    static Channel = {
     ChannelType : '//div[@id="sect1"]//select',
     Name : '//label[text()="Name"]//following-sibling::input',
     Image : '//div[@class="image-popup"]//preceding-sibling::img',
     UploadImage : '//li[@id="fuiImage"]',
     UploadFile : '//button[text()="Upload File"]',
     ImageLocator : '(//div[@class="floatright"])[1]',
    }

    static Add = '//a[text()="add"]'
    static AddNote = '//textarea[@id="/sidebar/growJournal/header/note"]'
    static AddTags = '(//div[@id="tags"])[2]'
    static SendAdd = '//button[text()="send"]'

    static Email = '//input[@id="if-email"]'
    static Password = '//input[@id="if-password"]'
    static LoginButton = '//button[text()="Log In"]'

  
    
}

export default Locators