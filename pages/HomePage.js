class HomePage {

    constructor(page) {
        this.page = page;
        this.myAccount = page.locator("//span[text()='My Account']");
        this.loginLink = page.locator("//a[text()='Login']");
    }

    async navigateToHomePage() {
        await this.page.goto('https://tutorialsninja.com/demo/');
    }

    async clickMyAccount() {
        await this.myAccount.click();
    }

    async clickLogin() {
        await this.loginLink.click();
    }
}

module.exports = HomePage;