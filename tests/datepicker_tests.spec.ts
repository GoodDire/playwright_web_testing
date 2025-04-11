import { test, expect } from '../Test Environment/base';

test.beforeEach(async ({ page, navigationPage }) => {
    await page.goto('/');
    await navigationPage.datePickerPage();
});

test('should select date from today', async ({ datePickerPage }) => {
    await datePickerPage.selectCommonDateFromToday(2);
});

test('should select date with range from today', async ({ datePickerPage }) => {
    await datePickerPage.selectDateWithRangeFromToday(2, 4);
});