//We can handle multiple checkbox at a time


const {test,expect} = require('@playwright/test');

test('Checkbox', async({page})=>{

    await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');

    //Handling single checkbox
    await page.locator("//input[@value='cb1']").check();
    await expect(await page.locator("//input[@value='cb1']")).toBeChecked();
    await expect(await page.locator("//input[@value='cb1']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@value='cb2']").isChecked()).toBeFalsy();

    //Handling multiple checkboxes(Using array and for loop)
    const checkboxlocators = [  
        "//input[@value='cb1']",
        "//input[@value='cb2']",
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