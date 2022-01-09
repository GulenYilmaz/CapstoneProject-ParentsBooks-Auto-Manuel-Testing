// I need to to some require stuff first
//we need selenium --> Builder and Capabilities for our driver
//                 --> By for our selectors and our automation
const { Builder, Capabilities, By } = require("selenium-webdriver") 



// whenever your code want to access to chrome it able to that
const chromedriver= require('chromedriver')

// driver to open the our browser
//we are using Builder class for creating our driver, that driver is baseaxlly be able to use google chrome and it going to be build driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
console.log("this is the driver", driver)


//going to happen before for all test
//beforeEach()

//going to happen  ones before for all test
beforeAll(async() =>{
    await  driver.get('https://capstone-project-booklist.herokuapp.com/')
})
//going to happen  ones after for all test
afterAll(async()=>{
    await driver.quit()
})

describe("Capstone Project- Parent Book List ", ()=>{
    
    it("Click on the book title input field.", async()=>{
        
        
        let bookTitleInputField= await driver.findElement(By.xpath('//*[@id="title"]'))
        await bookTitleInputField.sendKeys("The Connected Parent: Real-Life Strategies for Building Trust and Attachment ")
        await driver.sleep(2000)
    })

    it("Click on the book picture URL input field.", async()=>{
        
        
        let pictureURLInputField= await driver.findElement(By.xpath('//*[@id="img"]'))
        await pictureURLInputField.sendKeys("https://images-na.ssl-images-amazon.com/images/I/410sxwWFEUL._SX322_BO1,204,203,200_.jpg")
        await driver.sleep(2000)
    })

    it("Click on the book rate radio button.", async()=>{
        
        
        let pictureRateRadioButton= await driver.findElement(By.xpath('//*[@id="four"]'))
        await pictureRateRadioButton.click()
        await driver.sleep(2000)
    })

    it("Click on the add book button.", async()=>{
        
        
        let addBookButton= await driver.findElement(By.xpath('/html/body/main/form/button'))
        await addBookButton.click()
        await driver.sleep(2000)
    })

    it("Verify the book name and book picture on the buttom of the page.", async()=>{
        
        
        let verifyBookname= await driver.findElement(By.xpath('//*[@id="books-container"]/div[11]/p'))
     
        let verifyBookNameText =await verifyBookname.getText()
     

        expect(verifyBookNameText).toContain("The Connected Parent: Real-Life Strategies for Building Trust and Attachment")

        await driver.sleep(2000)
    })


})