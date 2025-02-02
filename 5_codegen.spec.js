/* npx playwright codegen -> this can be used to generate test script 
npx playwright codegen -h -> to see help
npx playwright codegen -o <output file> -> to create test file automatically
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('Dipjyoti');

  await page.locator('#loginpassword').fill('dipjyoti');

  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('link', { name: 'Log out' }).click();
});