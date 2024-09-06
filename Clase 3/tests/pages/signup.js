const { expect } = require('@playwright/test')

 exports.SignUp = class SignUp {

    constructor(page) {
        this.page = page;
        this.rdGenre = page.getByRole('radio',{name:'Mr.'})
        this.password = page.locator('#password')
        this.day = page.locator('#days')
        this.month = page.locator('#months')
        this.years =  page.locator('#years')
        this.chkNews = page.locator('#newsletter')
        this.firstName = page.locator('#first_name')
        this.lastName = page.locator('#last_name')
        this.company = page.locator('#company')
        this.address = page.locator('#address1')
        this.cmbCountry = page.locator('#country')
        this.txtBoxState =  page.getByRole('textbox',{name:'State *'})
        this.txtBoxCity = page.getByRole('textbox',{name:'City *'})
        this.txtBoxZipCode =  page.locator('#zipcode')      
        this.txtBoxMobile = page.locator('#mobile_number')
        this.btnCreateAccount = page.getByRole('button', { name: 'Create Account' })
        this.lblAccountCreated = page.getByText('Account Created!')
        this.btnContinue = page.getByRole('link',{name:'Continue'}).click()
        }

    async fillSignUpForm(password,day,month,years,firstName,lastName,company,address,country,state,city,zipCode,mobile) {
        await this.rdGenre.check()
        await this.password.fill(password)
        await this.day.selectOption(day)
        await this.month.selectOption(month)
        await this.years.selectOption(years)
        await this.chkNews.check()
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.company.fill(company)
        await this.address.fill(address)
        await this.cmbCountry.selectOption(country)
        await this.txtBoxState.fill(state)
        await this.txtBoxCity.fill(city)
        await this.txtBoxZipCode.fill(zipCode)
        await this.txtBoxMobile.fill(mobile)
        await this.btnCreateAccount.click()
        await expect(this.lblAccountCreated).toBeVisible()
        await this.btnContinue.click()
    }
 }