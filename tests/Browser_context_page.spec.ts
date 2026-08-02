import {chromium, Browser, BrowserContext, Page} from 'playwright';

async function run() {

    let browser : Browser = await chromium.launch({headless: false});
    console.log("Browser launched successfully");

    let context : BrowserContext = await browser.newContext();
    console.log("Browser context created successfully");

    let page : Page = await context.newPage();
    console.log("Page created successfully");

    await page.goto("https://www.amazon.com/");
    console.log("Page loaded successfully");

    await page.close();
    await context.close();
    await browser.close();
    console.log("Browser resources closed successfully");
}