import {test, expect} from '@playwright/test';

test('Verify the login functionality', async ({page}) => {
    await page.goto("https://www.amazon.com/");
    console.log("Page loaded successfully");

    await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
    console.log("Title verified successfully");

    await page.getByRole('link', {name: 'Sign in'}).click();
    console.log("Clicked on Sign in link");

});
