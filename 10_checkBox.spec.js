//We can handle multiple checkbox at a time


const {test,expect} = require('@playwright/test');

test('Checkbox', async({page})=>{

    await page.goto('https://formstone.it/components/checkbox/');

    //Handling single checkbox
    await page.locator("//input[@value='1' and @type='checkbox']").check();
    await expect(await page.locator("//input[@value='1' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@value='1' and @type='checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@value='2' and @type='checkbox']").isChecked()).toBeFalsy();
    await page.waitForTimeout(1000);
    await page.locator("//input[@value='1' and @type='checkbox']").uncheck();

    //Handling multiple checkboxes(Using array and for loop)
    const checkboxlocators = [  
        "//input[@value='1' and @type='checkbox']",
        "//input[@value='2' and @type='checkbox']",
        "//input[@value='4' and @type='checkbox']"
                            ];
    
    for(let locator of checkboxlocators){
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000); 

    for(let locator of checkboxlocators){
        if(await page.locator(locator).isChecked()){
        await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(5000); 
   
});