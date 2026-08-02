import {chromium} from 'playwright';

async function multiuserLogin() {
    let browser = await chromium.launch({headless: false});

    // Admin
    let admin1 = await browser.newContext();
    let adminPage1 = await admin1.newPage();
    await adminPage1.goto("https://www.amazon.com/");
    console.log("Admin Page 1 loaded successfully");

   // View
    let view1 = await browser.newContext();
    let viewPage1 = await view1.newPage();
    await viewPage1.goto("https://www.amazon.com/ap/signin/");
    console.log("View Page 1 loaded successfully");
    
};

multiuserLogin();