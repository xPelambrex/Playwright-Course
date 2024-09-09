const { expect } = require('@playwright/test')

 exports.Home = class Home {

    constructor(page) {
        this.page = page;
        this.logoAutomation = page.getByAltText('Website for automation practice')
        this.btnLogin = page.getByRole('link',{name:'Signup / Login'})
        this.btnLogout = page.getByRole('link',{name:'Logout'})
        this.btnContact = page.getByRole('link',{name:'Contact us'})
    }
    async navigateToLogin(){
        await expect(this.logoAutomation).toBeVisible()
        await this.btnLogin.click()
    }
    async assertLogout() {
        await expect(this.btnLogout).toBeVisible()
    }
    async clickLogout() {
        await this.btnLogout.click()
    }
    async navigateToContactUs(){
        await this.btnContact.click()
    }
 }
