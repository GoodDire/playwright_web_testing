import { HelperBase } from "../helpers/helperBase";
import { expect } from "../Test Environment/base";
import { Page } from "@playwright/test";

export class FormLayoutsPage extends HelperBase{
    readonly page: Page;

    constructor(page: Page) {
        super(page)
    }


    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByRole('radio', { name: optionText }).check({force: true});
        await usingTheGridForm.getByRole('button', { name: 'Sign In' }).click();
    }

        /**
         * Submit the form using the inline form
         * @param name - The name of the user
         * @param email - The email of the user
         * @param rememberMe - Whether the user wants to remember the login
         */
    async submitUsingTheInlineForm(name: string, email: string, rememberMe: boolean) {
        const usingTheInlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
        await usingTheInlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
        await usingTheInlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        if (rememberMe === true) {
            await usingTheInlineForm.getByRole('checkbox').check({force: true});
        }
        await usingTheInlineForm.getByRole('button').click();
    }
}