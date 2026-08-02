// Open https://katalon-demo-cura.herokuapp.com/
// Click on Make appointment >> enter all details >> Click on login button.

import {test, expect} from '@playwright/test';

test ('test to verify the login functionality', async ({page}) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.locator('[id="btn-make-appointment"]').click();
    const title = await page.title();
    expect(title).toBe('CURA Healthcare Service');

   let username =  await page.fill('input[id="txt-username"]', 'John Doe');
   console.log("Username filled successfully");

   let password = await page.fill('input[id="txt-password"]', 'ThisIsNotAPassword');
   console.log("Password filled successfully");

   let sbtbutton = await page.click('button[id="btn-login"]');
   console.log("Submit button clicked successfully");

   let url = await page.url();
   await expect(url).toBe('https://katalon-demo-cura.herokuapp.com/#appointment');



});
