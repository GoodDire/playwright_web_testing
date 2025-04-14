import { pairs } from "rxjs";
import { expect, test } from "../Test Environment/base";

const userId = 61;

test.describe('Smart Table Page Tests', () => {
    test.beforeEach(async ({ page, navigationPage }) => {
        await page.goto('/');
        await navigationPage.smartTablePage();
    });

    test('Add user to table', async ({ page, smartTablePage }) => {
        await smartTablePage.addUserToTable(userId, 'John', 'Doe', 'johndoe', 'john.doe@example.com', 30);

        await page.getByPlaceholder('ID').fill(userId.toString());
        await smartTablePage.validateColumn(1, userId.toString());
        await smartTablePage.validateColumn(2, 'John');
        await smartTablePage.validateColumn(3, 'Doe');
        await smartTablePage.validateColumn(4, 'johndoe');
        await smartTablePage.validateColumn(5, 'john.doe@example.com');
        await smartTablePage.validateColumn(6, '30');

    });

    test('Add and Edit user in table', async ({ page, smartTablePage }) => {
        await smartTablePage.addUserToTable(userId, 'John', 'Doe', 'johndoe', 'john.doe@example.com', 30);
        await smartTablePage.editUserInTable(userId, 'John23', 'Doe23', 'johndoe23', 'john.doe23@example.com', 30);

        await page.getByPlaceholder('ID').fill(userId.toString());
        await smartTablePage.validateColumn(2, 'John23');
        await smartTablePage.validateColumn(3, 'Doe23');
        await smartTablePage.validateColumn(4, 'johndoe23');
        await smartTablePage.validateColumn(5, 'john.doe23@example.com');
        await smartTablePage.validateColumn(6, '30');
    });

    test('Edit existing user in table', async ({ page, smartTablePage }) => {
        const existingUserId = 44;
        await smartTablePage.editUserInTable(existingUserId, 'Eldar', 'Nasirov', 'eldarnasirov', 'e.nasirov@gmail.com', 22);

        await page.getByPlaceholder('ID').fill(existingUserId.toString());
        await smartTablePage.validateColumn(2, 'Eldar');
        await smartTablePage.validateColumn(3, 'Nasirov');
        await smartTablePage.validateColumn(4, 'eldarnasirov');
        await smartTablePage.validateColumn(5, 'e.nasirov@gmail.com');
        await smartTablePage.validateColumn(6, '22');
    });
});