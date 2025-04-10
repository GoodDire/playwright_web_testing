import { Page } from "@playwright/test";

export class HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   async waitForNumberOfSeconds(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
   }

   async randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   async randomString(length: number) {
    return Math.random().toString(36).substring(2, 2 + length);
   }

   async randomEmail() {
    
   }
}