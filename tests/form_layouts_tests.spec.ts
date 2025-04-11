import { test, expect } from '../Test Environment/base';

test.beforeEach(async ({ page,navigationPage }) => {
    await page.goto('/');
    await navigationPage.formLayoutsPage()
});

test('should submit the form using the grid', async ({ page,formLayoutsPage }) => {
    await formLayoutsPage.submitUsingTheGridForm('test@test.com', 'test', 'Option 1');

    const usingTheGridForm = page.locator('nb-card', { hasText: 'Using the Grid' });
    await expect(usingTheGridForm.getByPlaceholder('Email')).toHaveValue('test@test.com');;
    await expect(usingTheGridForm.getByRole('radio', { name: 'Option 1' })).toBeChecked();
});

test('should submit the form using the inline form', async ({ formLayoutsPage,page }) => {
    await formLayoutsPage.submitUsingTheInlineForm('Jane Doe2', 'test@test.com', true)

    const usingTheInlineForm = page.locator('nb-card', { hasText: 'Inline form' });
    await expect(usingTheInlineForm.getByPlaceholder('Jane Doe')).toHaveValue('Jane Doe2');;
    await expect(usingTheInlineForm.getByPlaceholder('Email')).toHaveValue('test@test.com');;
    await expect(usingTheInlineForm.getByRole('checkbox')).toBeChecked();
});