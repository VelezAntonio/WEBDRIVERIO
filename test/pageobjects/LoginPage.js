import { $ } from '@wdio/globals'
import HomePage from './HomePage.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage extends HomePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button=LOGIN');
    }
    get btnAccount() {
        return $('.__account-menu-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
