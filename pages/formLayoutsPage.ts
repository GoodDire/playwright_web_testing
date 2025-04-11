import { HelperBase } from "../helpers/helperBase";
import { expect } from "../Test Environment/base";
import { Page, Locator } from "@playwright/test";

export class FormLayoutsPage extends HelperBase{
    readonly page: Page;

    constructor(page: Page) {
        super(page)
        this.page = page;
    }


    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByRole('radio', { name: optionText }).check({force: true});
        await usingTheGridForm.getByRole('button', { name: 'Sign In' }).click();
    }

    async submitBasicForm(email: string, password: string, checkMeOut: boolean) {
        const usingTheBasicForm = this.page.locator('nb-card', { hasText: 'Basic form' });
        await usingTheBasicForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheBasicForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.rememberMeCheck(usingTheBasicForm,checkMeOut);
        await usingTheBasicForm.getByRole('button').click();
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
        await this.rememberMeCheck(usingTheInlineForm,rememberMe);
        await usingTheInlineForm.getByRole('button').click();
    }

    async submitFormWithoutLabels(recipients: string, subject: string, message: string) {
        const usingTheFormWithoutLabels = this.page.locator('nb-card', { hasText: 'Form without labels' });
        await usingTheFormWithoutLabels.getByRole('textbox', { name: 'Recipients' }).fill(recipients);
        await usingTheFormWithoutLabels.getByRole('textbox', { name: 'Subject' }).fill(subject);
        await usingTheFormWithoutLabels.getByRole('textbox', { name: 'Message' }).fill(message);
        await usingTheFormWithoutLabels.getByRole('button').click();
    }

    async submitBlockForm(firstName: string, lastName: string, email: string, website: string) {
        const usingTheBlockForm = this.page.locator('nb-card', { hasText: 'Block form' });
        await usingTheBlockForm.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await usingTheBlockForm.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await usingTheBlockForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheBlockForm.getByRole('textbox', { name: 'Website' }).fill(website);
    }

    async submitHorizontalForm(email: string, password: string, rememberMe: boolean) {
        const usingTheHorizontalForm = this.page.locator('nb-card', { hasText: 'Horizontal form' });
        await usingTheHorizontalForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheHorizontalForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.rememberMeCheck(usingTheHorizontalForm,rememberMe);
        await usingTheHorizontalForm.getByRole('button').click();
    }

    async rememberMeCheck(locator: Locator,rememberMe: boolean) {
        if (rememberMe === true) {
            await locator.getByRole('checkbox').check({force: true});
        }
    }
}
