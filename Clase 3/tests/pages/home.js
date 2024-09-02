const { expect } = require('@playwright/test')

 exports.Home = class Home {

    constructor(page) {
        this.page = page;
        this.logoAutomation = page.getByAltText('Website for automation practice')
        this.btnLogin = page.getByRole('link',{name:'Signup / Login'})
    }
    async navigateToLogin(){
        await expect(this.logoAutomation).toBeVisible()
        await this.btnLogin.click()
    }
 }
