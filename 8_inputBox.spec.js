
const {test,expect} = require('@playwright/test');

test('Input Box(Email)', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page.locator('#Email')).toBeVisible();
    await expect(page.locator('#Email')).toBeEmpty();
    await expect(page.locator('#Email')).toBeEnabled();
    await expect(page.locator('#Email')).toBeEditable();

    await page.fill('#Email','test@abc.com');

    //to pause the page for 5 sec after running the script
    await page.waitForTimeout(5000); 

   
});