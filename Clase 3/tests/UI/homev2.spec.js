const { test, expect } = require('@playwright/test');
const {Home} = require('./pages/home')
const {Login} = require('./pages/login')
const {SignUp} = require('./pages/signup')
const { Contact } = require ('./pages/contact');
import dotenv from 'dotenv'

dotenv.config()

test.describe('Automation Exercise', () =>{
    //hooks
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Register User', async ({page})=>{
        const home = new Home(page)
        await test.step('Navigate To Login Page', async () =>{
            await home.navigateToLogin()
        })
        await test.step('SignUp Credentials',async () =>{
            const login = new Login(page)
            await login.fillNameAndEmail('Test Name', 'newtest@test.com')
        })
        await test.step('Fill register new user', async () =>{
            const signup = new SignUp(page)
            await signup.fillSignUpForm('Password123', '1', 'January', '1990', 'Test Name','Test LastName', 'Test Company','Test Address 123','India', 'Test State', 'Test City', '12345', '1234567890')
            await home.assertLogout()
        })
    })

    test('Login User', async({page})=>{
        const home = new Home(page)
        await test.step('Navigate To Login Page', async()=>{
            await home.navigateToLogin()
        })
        await test.step('Login with credentials', async()=>{
            const login = new Login(page)
            await login.loginUserWithCredentials(process.env.EMAILTEST,process.env.PASSWORDTEST)
        })

    })
    test('Login User with incorrect credentials', async({page})=>{
        const home = new Home(page)
        await test.step('Navigate To Login Page', async()=>{
            await home.navigateToLogin()
        })
        await test.step('Login with incorrect credentials', async()=>{
            const login = new Login(page)
            await login.loginUserWithCredentials(process.env.WRONGEMAIL,process.env.WRONGPASSWORD)
            await login.assertTextWrongCredentials()
        })
    })

})
test.describe('Test with user login', () => {
    test.beforeEach('Login User', async({page})=>{
        const home = new Home(page)

        await page.goto('/')
        await test.step('Navigate To Login Page', async()=>{
            await home.navigateToLogin()
        })
        await test.step('Login with credentials', async()=>{
            const login = new Login(page)
            await login.loginUserWithCredentials(process.env.EMAILTEST,process.env.PASSWORDTEST)
        })
    })

    test.only('Send email for contact', async({page}) => {
        const home = new Home(page)
        const contact = new Contact(page)
        await test.step('Navigate to Contact Page', async() => {
            await home.navigateToContactUs()
        })
        await test.step('Fill contact form', async() => {
            await contact.fillContactForm(process.env.NAMECONTACT, process.env.EMAILCONTACT, 'Test Subject', 'Test Message')
        })
        await test.step('Upload File', async() => {
            await contact.uploadFile('Clase 3/tests/UI/helpers/exampleText.txt')
        })
        await test.step('Submit Form', async() => {
            await page.pause()
            await contact.submitForm()
            page.once('dialog',(dialog) =>{
                console.log(dialog.message())
                dialog.accept()
            })
        })
    })



})