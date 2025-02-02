const {test,expect} = require('@playwright/test');
// import {test,expect} from ('@playwright/test');

test('locators', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    //click on login button - using property
    await page.locator('id=login2').click();
    //await page.click('onclick=logIn()');

    //provide username - using css
    await page.locator('#loginusername').fill('Dipjyoti');
    //await page.fill('#loginusername','Dipjyoti');
    //await page.type('#loginusername','Dipjyoti');

    //provide the password - using css
    await page.locator('input[id="loginpassword"]').fill('dipjyoti');
    //await page.fill('input[id="loginpassword"]','dipjyoti');
    //await page.type('input[id="loginpassword"]','dipjyoti');

    //click on login button - using rlv xpath
    await page.locator("//button[normalize-space()='Log in']");
    //await page.click("//button[normalize-space()='Log in']");

    //verify logout link is visible or not
    // const logoutLink = await page.locator("id=logout2");
    // await expect(logoutLink).toBeVisible();
    const cartLink = await page.locator("id=cartur");
    await expect(cartLink).toBeVisible();

    //closing the browser
    await page.close();

})