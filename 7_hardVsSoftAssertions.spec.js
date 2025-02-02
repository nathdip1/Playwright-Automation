/* Hard Assertion: This will terminate the remaining script if one hard assertion gets failed
Soft Assertions: This will contribue remaining assertions even one soft assertions gets failed*/


const {test,expect} = require('@playwright/test');

test('Hard Vs Soft Assertions', async({page})=>{

    await page.goto('https://demoblaze.com/');

    //Hard Assertions
    // await expect(page).toHaveTitle('Store');
    // await expect(page).toHaveURL('https://demoblaze.com/');
    // await expect(page.locator("//div[@id='contcont']//a[2]")).toBeVisible();

    //Soft Assertions
    await expect.soft(page).toHaveTitle('Store');
    await expect.soft(page).toHaveURL('https://demoblaze.com/');
    await expect.soft(page.locator("//div[@id='contcont']//a[2]")).toBeVisible();

})