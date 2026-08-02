import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {

    // Browser launch successfully
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser launched successfully", browser);

    let context: BrowserContext = await browser.newContext();
    console.log("New context created successfully", context);

    let page : Page = await context.newPage();
    console.log("New page created successfully", page);


}