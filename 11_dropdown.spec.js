
const {test,expect} = require('@playwright/test');

test('Handle Dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Country dropdown:
    // for select tag we have special function in playwright
    // Multiple ways to select option from the dropdown:
    
    //using label and visible text(recommended)
    // await page.locator('#country').selectOption({label: 'India'})
    
    //using visible text(recommended)
    // await page.locator('#country').selectOption('India')
    
    //using value
    // await page.locator('#country').selectOption({value:'uk'})
    
    //using index
    // await page.locator('#country').selectOption({index:1})
    
     //direct select
    // await page.selectOption('#country',"India")

    //select option from dropdown using loop
    //Beneficial when select tag is not available
    
    // const options=await page.$$('#country option')//$$ will create an array
    
    // for(const option of options){
    // //console.log(await option.textContent());
    // let value = await option.textContent(); //textContent() will create a string
    // if(value.includes('France')){
    // await page.selectOption('#country',value);
    // break;
    // }
    // }
    
    // //Assertions
    // //1)check number of options in the dropdown-Approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);
    
    // //2)check number of options in the dropdown-Approach 2
    // const options=await page.$$('#country option')
    // console.log(options, options.length)
    // await expect(options.length).toBe(10)
    
    // //3)check presence of value in the dropdown-Approach 1
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();
    
    // //4)check presence of value in the dropdown-Approach 2
    const options=await page.$$('#country option')
    let status = false;
    
    for(const option of options){
    //console.log(await option.textContent());
    let value = await option.textContent();
    if(value.includes('France')){
    status = true;
    break;
    }
    }
    expect(status).toBeTruthy();
    
    
   await page.waitForTimeout(5000);
});