import { expect, test } from "../Test Environment/base";

test.describe('Dialogs Page Tests', () => {
    test.beforeEach(async ({ page,navigationPage }) => {
        await page.goto('/');
        await navigationPage.dialogPage();
    });

    test('should open dialog with component', async ({ page,dialogsPage }) => {
        await dialogsPage.openSpecificDialogForm('with component');
        const dialogWindow = await page.locator('nb-dialog-container');
        const dialogHeader = await dialogWindow.locator('nb-card-header');
        const dialogTitle = await dialogWindow.locator('nb-card-body');
        
        await expect(dialogWindow).toBeVisible();
        await expect(dialogHeader).toContainText('This is a title passed to the dialog component');
        await expect(dialogTitle).toContainText('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
    });

    test('should return result from dialog', async ({ page,dialogsPage }) => {
        await dialogsPage.returnResultFromDialog('qwerty123');
        const namesList= await page.locator('nb-card', { hasText: 'Return Result From Dialog' });
        const expectedName = await namesList.getByRole('list').getByText('qwerty123');
        await expect(expectedName).toBeVisible();
    });
});