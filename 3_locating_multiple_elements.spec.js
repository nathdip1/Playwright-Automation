
    //Locate multiple web elements
    //$$ is used to capture maltiple locators
 

const {test,expect} = require('@playwright/test');

test('locaatingAllLinks', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    //printing all the link text
    // a is for anchor link
    const links = await page.$$('a');
    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

    //printing all the product

    //use this command to let the web page load all the elements based on the 
    //specified locators
    await page.waitForSelector('//div[@id="tbodyid"]//div/h4/a');
    //locator is used = xpath
    const products = await page.$$('//div[@id="tbodyid"]//div/h4/a');
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
        
    }


})