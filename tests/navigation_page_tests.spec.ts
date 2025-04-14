import { test, expect } from '../Test Environment/base';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('has title', async ({ navigationPage }) => {
    await navigationPage.formLayoutsPage();

    await navigationPage.datePickerPage();

    await navigationPage.smartTablePage();

    await navigationPage.toastrPage();

    await navigationPage.tooltipsPage();

});