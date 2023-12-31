import { expect } from 'chai';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import {baseUrl} from '../pageobjects/page.js';
import { username, password } from '../../MyTests/data/loginCredentials.js';
import loginPage from '../pageobjects/login.page.js';
// test

describe('My Login application', async () => {
    it('should login with valid credentials', async () => {
        await browser.url(baseUrl);
        let btnLogin = $('button=Log In / Sign Up');
        (await btnLogin).click();
        await loginPage.login(username,password);
        await browser.pause(2000);
        let btnAccount = $('.__account-menu-button')

        expect(await btnAccount.isDisplayed()).to.be.true;
    })
})

