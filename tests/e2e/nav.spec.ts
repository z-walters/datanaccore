import {test, expect} from '@playwright/test'

const url = 'http://localhost:3000/'

test('Navigate pages', async ({ page }) => {
    // Setup
    await page.goto(url)

    // Test About
    await page.click('text=About')
    await expect(page).toHaveURL(url+'about')

    // Test Blog
    await page.click('text=Blog')
    await expect(page).toHaveURL(url+'blog')

    // Test Confirm TODO
    // await page.click('text=About')
    // await expect(page).toHaveURL(url+'confirm')

    // Test Contact
    await page.click('text=Contact Us')
    await expect(page).toHaveURL(url+'contact-us')

    // Test Login
    await page.click('text=Login')
    await expect(page).toHaveURL(url+'login')

    // Test Register
    await page.click('text=Register')
    await expect(page).toHaveURL(url+'register')

    // Test User TODO
    // await page.click('text=About')
    // await expect(page).toHaveURL(url+'about')

    // Return to Home *{Always Last}*
    await page.click('text=Home')
    await expect(page).toHaveURL(url)
}) 