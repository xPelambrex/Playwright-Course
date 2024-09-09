const { test, expect } = require('@playwright/test');
import dotenv from 'dotenv'
dotenv.config()

test.describe('API List', () => {
    test('1 - GET All Products List', async ({ request }) => {
        const response = await request.get(process.env.BASEURL,'products/list');
        expect(response.status()).toBe(200)
        
        console.log('RESPONSE CODE:', response.status())
        console.log('DATA:',  response.products)
        console.log('DATA 2:', responseBody)
        console.log(response)
    })
    test('2 - POST All Products list', async ({request})=>{
        const response = await request.post(process.env.BASEURL,'products/list')
        expect(response.status()).toBe(403)
        
    })
    test ('3 - PUT To All Brands List', async ({request})=>{
        const response = await request.put(process.env.BASEURL,'api/brandsList',{
            data: {
                brands:[
                    {
                        id: '1',
                        brand:'Test'
                    }
                ]
            }
        })
        expect(response.status()).toBe(403)
    })
    test ('4 - DELETE verifyLogin', async({request})=>{
        const response = await request.delete(process.env.BASEURL,'api/verifyLogin')
        expect(response.status()).toBe(403)
    })

})

test.describe.only('API With Data', async()=>{
    test('1 - Register new user', async ({ request }) =>{
        const response = await request.post('https://practice.expandtesting.com/notes/api/users/register',{
            data:{
                "name": "testAutomation",
                "email":"prueba2@testautomation.com",
                "password":"test1234*"
            }

        })
        expect(response.status()).toBe(201)
        const responseBody =  await response.json()
        console.log(responseBody)
    })
})