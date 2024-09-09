const { expect } = require('@playwright/test')

exports.Login = class Login {
    constructor(page){
        this.page = page
        this.lblNewUser = page.getByText('New User Signup!')
        this.txtBoxName = page.getByPlaceholder('Name')
        this.txtBoxSignUpEmail = page.locator('[data-qa="signup-email"]')
        this.btnSignUp = page.getByRole('button',{name:'Signup'})
        this.txtBoxLoginEmail = page.locator('[data-qa="login-email"]',{wait: 5000})
        this.password = page.getByRole('textbox',{name: 'Password'})
        this.btnLogin = page.getByRole('button',{name:'Login'})
        this.txtIncorrectCredentials = page.getByText('Your email or password is incorrect!')
    }

    async fillName(name){
        await expect(this.lblNewUser).toBeVisible()
        await this.txtBoxName.fill(name)
    }
    async fillEmail(email){
        await this.txtBoxSignUpEmail.fill(email)
    }

    async fillNameAndEmail(name, email){
        await expect(this.lblNewUser).toBeVisible()
        await this.txtBoxName.fill(name)
        await this.txtBoxSignUpEmail.fill(email)
        await this.btnSignUp.click()
    }
    async clickSignUpBtn(){
        await this.btnSignUp.click()
    }
    
    async loginUserWithCredentials(email, password){
        await this.txtBoxLoginEmail.fill(email)
        await this.password.fill(password)
        await this.btnLogin.click()
    }
    async assertTextWrongCredentials(){
        await expect(this.txtIncorrectCredentials).toBeVisible()
    }

}