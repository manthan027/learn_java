import { test } from '@playwright/test';

test('verify the different goto commands', async ({ page }) => {
  await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' });
  await page.goto('https://example.com/', { waitUntil: 'load' });
  await page.goto('https://example.com/', { waitUntil: 'commit' });
  await page.goto('https://example.com/', { waitUntil: 'networkidle' });
  
});