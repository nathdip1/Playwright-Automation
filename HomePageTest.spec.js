// Imposrting test and expect packages from @playwright/test
// Test is required to write the test
// Expect is required to validate our test

const {test,expect} = require('@playwright/test');

test('Home Page',async({page})=>{

        // goto is used to load the url
        await page.goto('https://demoblaze.com/index.html');

        // page.title() is used to fetch the title of the page
        const pageTitle = await page.title();
        console.log('Title of the page is: ', pageTitle);
        await expect(page).toHaveTitle('STORE');

        // page.url is used to fetch the url of the page. await is not required
        const pageURL = page.url();
        console.log('Page URL is: ',pageURL);
        await expect(page).toHaveURL('https://demoblaze.com/index.html');

        
        await page.close();

});

