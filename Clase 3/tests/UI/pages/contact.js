//const { expect } = require('@playwright/test')

exports.Contact = class Contact {
    constructor(page) {
        this.page = page
        this.lblContact = page.getByText('CONTACT US')
        this.txtBoxName = page.getByRole('textbox',{name:'Name'})
        this.txtBoxEmail = page.locator('[data-qa="email"]')
        this.txtBoxSubject = page.locator('[data-qa="subject"]')
        this.txtBoxMessage = page.locator('#message')
        this.btnSelectFile = page.locator('input[name="upload_file"]')
        this.btnSubmit = page.getByText('Submit')
    }
    async fillContactForm(name,email,subject,message){
        await this.txtBoxName.fill(name)
        await this.txtBoxEmail.fill(email)
        await this.txtBoxSubject.fill(subject)
        await this.txtBoxMessage.fill(message)
    }
    async uploadFile(filePath) {
        await this.btnSelectFile.click()
        await this.btnSelectFile.setInputFiles(filePath)
    }
    async submitForm(){
        await this.btnSubmit.click({force:true})
    }
}