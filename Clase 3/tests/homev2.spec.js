const { test, expect } = require('@playwright/test');
const {Home} = require('../tests/pages/home');
const {Login} = require('../tests/pages/login')


test.describe('Automation Exercise', () =>{
    test('Register User', async ({page})=>{
        await page.goto('https://automationexercise.com/')
        await test.step('Navigate To Login Page', async () =>{
            const home = new Home(page)
            await home.navigateToLogin()
        })
        await test.step('SignUp Credentials',async () =>{
            const login = new Login(page)
            await login.fillNameAndEmail('Test Name', 'newtest@test.com')
        })
    })
})