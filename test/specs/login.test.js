import { expect } from 'chai';
import { username, password } from '../../MyTests/data/loginCredentials.js';
import HomePage from '../pageobjects/HomePage.js';
import LoginPage from '../pageobjects/LoginPage.js';
// test

describe('Navigate to login page', () => {
    var usernameInput;
    var loginPage;
    before(async () => {
        let homePage = new HomePage();
        await homePage.open();
        await homePage.btnLogin.click();

        loginPage = new LoginPage();
        usernameInput = await loginPage.inputUsername;

    })
    it('should show the login page', async () => {
        await usernameInput.waitForDisplayed({ timeout: 5000 });
        expect(await usernameInput.isDisplayed()).to.be.true;
    })

    describe('Sucessfully Log in', () => {
        var accountBtn;

        before(async () => {
            await loginPage.login(username,password);

            accountBtn = await loginPage.btnAccount;
        })
        it('should show the account button', async () => {
            await accountBtn.waitForDisplayed({ timeout: 5000 })
            expect(await accountBtn.isDisplayed()).to.be.true;
        })
    
    }) 

})
