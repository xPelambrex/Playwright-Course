const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
import Ajv from 'ajv';

//SCHEMAS
const schemaLoginUser = require('./schemas/loginUser.json')
const schemaRegisterUser = require('./schemas/registerUser.json')

test.describe('API With Data', async()=>{
    const ajv = new Ajv();
    const nameUser = faker.internet.userName()
    const emailUser = faker.internet.email().toLowerCase()
    const passwordUser = faker.internet.password()
    const companyName = faker.company.name()
    var token = ''

    test.beforeEach(async ({request}) => {
        const response = await request.post('https://practice.expandtesting.com/notes/api/users/login',{
            data:{
                "email": emailUser,
                "password": passwordUser
            }
        })
        test.step('Verify the response status code is 200', async () => {
            expect(response.status()).toBe(200)
        })
        const responseBody = await response.json()
        token = responseBody.data.token
    })
    test('1 - Register new user', async ({ request }) =>{
        const response = await request.post('https://practice.expandtesting.com/notes/api/users/register',{
            data:{
                "name": nameUser,
                "email": emailUser,
                "password": passwordUser
            }

        })
        test.step('Verify the response status code is 201', async () => {
            expect(response.status()).toBe(201)
        })
        const responseBody =  await response.json()
        console.log(responseBody)
        console.log(responseBody.data.name)
        console.log(responseBody.data.email)

        test.step('Verify the response body contains the expected data', async () => {

            const valid = ajv.validate(require('./schemas/registerUser.json'), responseBody);
            if (!valid) {
                console.error('AJV Validation Errors:', ajv.errorsText());
            }
            expect(valid).toBe(true);
            expect(responseBody.data.name).toEqual(nameUser)
            expect(responseBody.data.email).toEqual(emailUser)
            console.log(responseBody.message)
        })
    })

    test('3 - Get user profile', async ({request})=>{
        console.log('TOKEN ',token)
        const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile',{
            headers: {
                'x-auth-token': token
            }
        })
        test.step('Verify the response status code is 200', async () => {
            expect(response.status()).toBe(200)
        })
        const responseBody = await response.json()
        console.log('TEST 3',responseBody)
    })
})