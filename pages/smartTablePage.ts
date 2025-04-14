import { Page, expect } from "@playwright/test";    
import { HelperBase } from "../helpers/helperBase";

export class SmartTablePage extends HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async addUserToTable(id: number, firstName: string, lastName: string, username: string, email: string, age: number) {
        await this.page.locator('.nb-plus').click();

        const emptyRow = this.page.getByRole('row')
        .filter({has: this.page.locator('.nb-checkmark') })

        await emptyRow.getByPlaceholder('ID').fill(id.toString());
        await emptyRow.getByPlaceholder('First Name').fill(firstName);
        await emptyRow.getByPlaceholder('Last Name').fill(lastName);
        await emptyRow.getByPlaceholder('Username').fill(username);
        await emptyRow.getByPlaceholder('E-mail').fill(email);
        await emptyRow.getByPlaceholder('Age').fill(age.toString());
        await emptyRow.locator('.nb-checkmark').click();
    }

    /**
     * Edit user in table
     * @param id - The ID of the user to edit
     * @param firstName - The first name of the user
     * @param lastName - The last name of the user
     * @param username - The username of the user
     * @param email - The email of the user
     * @param age - The age of the user
     */
    async editUserInTable(id: number, firstName: string, lastName: string, username: string, email: string, age: number){
        const targetRow = await this.findTheRowByUniqueId(id);
        await targetRow.locator('.nb-edit').click();
        await this.editField('First Name', firstName);
        await this.editField('Last Name', lastName);
        await this.editField('Username', username);
        await this.editField('E-mail', email);
        await this.editField('Age', age.toString());
        await this.page.locator('.nb-checkmark').click();
    }

    async deleteUserFromTable(id: number) {
    const targetRow = await this.findTheRowByUniqueId(id);
    await targetRow.locator('.nb-trash').click();
    }

    private async findTheRowByUniqueId(id: number) {
        let targetRow = this.page.getByRole('row')
            .filter({ has: this.page.locator('td').nth(1).getByText(id.toString())});
        
        let rowCount = await targetRow.count();
        while (rowCount === 0) {
            await this.page.getByLabel('Next').click();
            targetRow = this.page.getByRole('row')
                .filter({ has: this.page.locator('td').nth(1).getByText(id.toString())});
            rowCount = await targetRow.count();
        }
        
        if (rowCount === 0) {
            throw new Error(`Row with ID ${id} not found in the table`);
        }
        
        return targetRow;
    }

    async validateColumn(columnNumber: number, value: string) {
         const expectedRow = await expect(this.page.locator('td').nth(columnNumber)).toHaveText(value);
    }

    private async editField(fieldName: string, value: string): Promise<void> {
    const inputSelector = await this.page.locator('input-editor').getByPlaceholder(fieldName);
    await inputSelector.clear();
    await inputSelector.fill(value);
    }
}
