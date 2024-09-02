const { test, expect } = require('@playwright/test');


test.describe('Automation Exercise',()=>{
    test('Register user', async ({page}) => {
        //Dirigirse a la pagina
        await page.goto('https://automationexercise.com/')
        //Validar que la pagina se cargue correctamente
        await expect(page.getByAltText('Website for automation practice')).toBeVisible()
        //Click en el link de signup
        await page.getByRole('link',{name:'Signup / Login'}).click()
        //Validar que se cargue la pagina de signup
        await expect(page.getByText('New User Signup!')).toBeVisible()
        //Escribir datos en los campos
        await page.getByPlaceholder('Name').fill('pepelota')
        await page.locator('[data-qa="signup-email"]').fill('pepelota@yopmail.com')
        //Click en boton signup
        await page.getByRole('button',{name:'Signup'}).click()
        //Click en MR. o MRs.
        await page.getByRole('radio',{name:'Mr.'}).click()
        //Rellenar password
        await page.locator('#password').fill('pepelota')
        //Seleccionar fecha de nacimiento
        await page.locator('#days').selectOption('14')
        await page.locator('#months').selectOption('December')
        await page.locator('#years').selectOption('1994')
        //Otra opcion  de rellenar los dias
        //const days = page.locator('#days')
        //await days.selectOption('14')
        await page.locator('#newsletter').check()
        await page.locator('#first_name').fill('Pepe')
        await page.locator('#last_name').fill('Lota')
        await page.locator('#company').fill('Arroyo Consulting')
        await page.locator('#address1').fill('Fake St. 123')
        await page.locator('#country').selectOption('India')
        await page.getByRole('textbox',{name:'State *'}).fill('Delhi')
        await page.getByRole('textbox',{name:'City *'}).fill('Delhi')
        await page.locator('#zipcode').fill('1234')       
        await page.locator('#mobile_number').fill('999999999')
        await page.getByRole('button', { name: 'Create Account' }).click()
        await expect(page.getByText('Account Created!')).toBeVisible()
        await page.getByRole('link',{name:'Continue'}).click()
    })
})