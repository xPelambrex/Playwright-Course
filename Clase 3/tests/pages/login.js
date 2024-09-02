const { expect } = require('@playwright/test')

exports.Login = class Login {
    constructor(page){
        this.page = page
        this.lblNewUser = page.getByText('New User Signup!')
        this.txtBoxName = page.getByPlaceholder('Name')
        this.txtBoxEmail = page.locator('[data-qa="signup-email"]')
        this.btnSignUp = page.getByRole('button',{name:'Signup'})
    }

    async fillName(name){
        await expect(this.lblNewUser).toBeVisible()
        await this.txtBoxName.fill(name)
    }
    async fillEmail(email){
        await this.txtBoxEmail.fill(email)
    }

    async fillNameAndEmail(name, email){
        await expect(this.lblNewUser).toBeVisible()
        await this.txtBoxName.fill(name)
        await this.txtBoxEmail.fill(email)
        await this.btnSignUp.click()
    }

    async clickSignUpBtn(){
        await this.btnSignUp.click()
    }
}