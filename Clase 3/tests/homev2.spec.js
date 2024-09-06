const { test, expect } = require('@playwright/test');
const {Home} = require('../tests/pages/home');
const {Login} = require('../tests/pages/login')
const {SignUp} = require('../tests/pages/signup')
import dotenv from 'dotenv'
dotenv.config()

test.describe('Automation Exercise', () =>{
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })
    // test.afterEach(async ({page})=>{
    //     const home = new Home(page)
    //     await home.clickLogout()
    // })
    // test('Register User', async ({page})=>{
    //     const home = new Home(page)
    //     await test.step('Navigate To Login Page', async () =>{
    //         await home.navigateToLogin()
    //     })
    //     await test.step('SignUp Credentials',async () =>{
    //         const login = new Login(page)
    //         await login.fillNameAndEmail('Test Name', 'newtest@test.com')
    //     })
    //     await test.step('Fill register new user', async () =>{
    //         const signup = new SignUp(page)
    //         await signup.fillSignUpForm('Password123', '1', 'January', '1990', 'Test Name','Test LastName', 'Test Company','Test Address 123','India', 'Test State', 'Test City', '12345', '1234567890')
    //         await home.assertLogout()
    //     })
    // })

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

})