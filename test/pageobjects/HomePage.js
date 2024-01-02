import { browser } from '@wdio/globals';

let baseUrl = "https://www.nellisauction.com/"
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class HomePage {
    get btnLogin() {
        return $('button=Log In / Sign Up')
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(baseUrl)
    }

}