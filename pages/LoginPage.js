const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailTextbox = page.locator('#input-email');
        this.passwordTextbox = page.locator('#input-password');
        this.loginButton = page.locator("input[value='Login']");
        this.myAccountHeader = page.locator("//h2[text()='My Account']");
    }

    async enterEmail(email) {
        await this.emailTextbox.fill(email);
    }

    async enterPassword(password) {
        await this.passwordTextbox.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(this.myAccountHeader).toBeVisible();
    }
}

module.exports = LoginPage;