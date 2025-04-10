import { test, expect } from '../Test Environment/base';

test.beforeEach(async ({ page,navigationPage }) => {
    await page.goto('/');
    await navigationPage.formLayoutsPage()
});

test('should submit the form using the grid', async ({ formLayoutsPage }) => {
    await formLayoutsPage.submitUsingTheGridForm('test@test.com', 'test', 'Option 1');
});

test('should submit the form using the inline form', async ({ formLayoutsPage }) => {
    await formLayoutsPage.submitUsingTheInlineForm('Jane Doe', 'test@test.com', true);
});