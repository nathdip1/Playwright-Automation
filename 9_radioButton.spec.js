//We can check or uncheck one radio button at a time


const {test,expect} = require('@playwright/test');

test('Radio Button', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    //male radio button
    await page.check("//input[@id='gender-male']");
    await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();

    //Female radio button
    await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();


    //to pause the page for 5 sec after running the script
    await page.waitForTimeout(5000); 

   
});