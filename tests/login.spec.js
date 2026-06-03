const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToHomePage();

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    await loginPage.enterEmail('javascript@gmail.com');
    await loginPage.enterPassword('javascript');

    await loginPage.clickLoginButton();

    await loginPage.verifyLoginSuccessful();
});