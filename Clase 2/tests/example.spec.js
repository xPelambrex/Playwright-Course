// @ts-check
const { test, expect } = require('@playwright/test');

test('1 - Example Domain', async ({page}) =>{
  await page.goto('https://example.com')
  await expect (page.getByRole('heading',{name:'Example Domain'})).toBeVisible()
})

test('2 - Click More Information', async ({page}) =>{
  await page.goto('https://example.com')
  await expect (page.getByRole('heading',{name:'Example Domain'})).toBeVisible()
  await page.getByRole('link',{name:'More information...'}).click()
  await expect (page.getByAltText('Homepage')).toBeVisible()
})