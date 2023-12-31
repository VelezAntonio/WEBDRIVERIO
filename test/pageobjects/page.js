import { browser } from '@wdio/globals'
export let baseUrl = "https://www.nellisauction.com/"
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(baseUrl`${path}`)
    }

}
