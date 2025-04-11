import { Page, expect} from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class HomePage extends HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        super(page)
        this.page = page;
    }

    async changeTheme(theme: string) {
        const themeDropdown = this.page.locator('ngx-header nb-select');
        await themeDropdown.click();
        switch (theme) {
            case 'Light':
                await this.page.locator('.option-list').getByText('Light').click();
                break;
            case 'Dark':
                await this.page.locator('.option-list').getByText('Dark').click();
                break;
            case 'Cosmic':
                await this.page.locator('.option-list').getByText('Cosmic').click();
                break;
            case 'Corporate':
                await this.page.locator('.option-list').getByText('Corporate').click();
                break;
        }
    }
}
