import {test, expect} from '@playwright/test';

test ('verify the login functionality', async ({page}) => {

    await page.goto('https://app.wingify.com/#/login');
    console.log("Navigated to the login page successfully");

    let username = await page.fill('input[id="login-username"]', 'user@example.com');
    console.log("Username filled successfully");
    let password = await page.fill('input[id="login-password"]', 'password123');
    console.log("Password filled successfully");
    let submitButton = await page.click('button[type="submit"]');
    console.log("Submit button clicked successfully");
    const errorMessageLocator = page.locator('div[id="js-notification-box-msg"]');
    await expect(errorMessageLocator).toContainText('Your email, password, IP address or location did not match');
    console.log("Error message displayed:", await errorMessageLocator.textContent());

});