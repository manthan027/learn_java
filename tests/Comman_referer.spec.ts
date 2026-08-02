import {test} from '@playwright/test';

test('Set common referer', async ({browser}) => {

let context = await browser.newContext({
  extraHTTPHeaders: {
    'Referer': 'https://thetestingacademy.com'
  }

});

let page = await context.newPage();
await page.goto('https://aap.vmo.com/#login');

await page.goto('https://amazon.com');

});
