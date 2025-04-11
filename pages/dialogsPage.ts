import { expect, Page } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class DialogsPage extends HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async openSpecificDialogForm(option: string) {
        const dialogForm = await this.page.locator('nb-card', { hasText: 'Open dialog' })
        await dialogForm.getByRole('button', { name: `Open Dialog ${option}` }).click();
        
    }    

    async returnResultFromDialog(option: string) {
        const dialogForm = await this.page.locator('nb-card', { hasText: 'Return Result From Dialog' })
        await dialogForm.getByRole('button', { name: `Enter Name` }).click();
        const nameInput = await this.page.getByPlaceholder('Name');
        await nameInput.fill(option);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
}
