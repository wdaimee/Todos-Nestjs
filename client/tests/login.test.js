const faker = require('faker');
const puppeteer = require('puppeteer');


describe('Login Page', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/login')
    })

    it('should display "Login" text on page', async () => {
        await expect(page).toMatch('Login')
    })
})