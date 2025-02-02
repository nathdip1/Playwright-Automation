/*Playwright includes test assertions in the form of expect function.
Reference: https://playwright.dev/docs/test-asse...
*/

const {test,expect} = require('@playwright/test');

test('AssertionsTest', async ({page})=>{

    //Open the URL
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible()  Element is visible
    //using Xpath
    const logoElement = await page.locator("//img[@alt='nopCommerce demo store']");
    //using CSS: . is for Class
    //const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // 4) expect(locator).toBeEnabled()  Control is enabled
    // using CSS: # is for id
    const searchBox = await page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();
    // Similarly expect(locator).toBeDisabled is use to check control is disabled
    
    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    //radio button check
    const genderRadioButton = await page.locator('#gender-male');
    await genderRadioButton.click();
    await expect(genderRadioButton).toBeChecked();
    //checkbox button check
    const newsLetterCheckbox = await page.locator('#Newsletter');
    await expect(newsLetterCheckbox).toBeChecked();

    // 6) expect(locator).toHaveAttribute() Element has attribute
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');
    await expect(regButton).toHaveAttribute('name','register-button');

    // 7) expect(locator).toHaveText()  Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register'); //to check full text
    // 8) expect(locator).toContainText()  Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg'); //to check partial text

    // 9) expect(locator).toHaveValue(value) Input has a value
    const firstName = await page.locator('#FirstName');
    await firstName.fill('Dipjyoti');
    await expect(firstName).toHaveValue('Dipjyoti');

    // 10) expect(locator).toHaveCount()  List of elements has given length
    const dateofBirthCOunt = await page.locator("select[name='DateOfBirthDay'] option");
    await expect(dateofBirthCOunt).toHaveCount(32);

    /*
    Negative Assertion:

    expect(page).not.toHaveURL()
    expect(locator).not.toHaveCount()
    and so on...
    */



})