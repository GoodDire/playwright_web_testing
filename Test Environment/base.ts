import { test as base } from '@playwright/test';
import { NavigationPage } from '../pom/navigationPage';
import { FormLayoutsPage } from '../pom/formLayoutsPage';
import { DatePickerPage } from '../pom/datePickerPage';

type TestFixtures = {
    navigationPage: NavigationPage;
    formLayoutsPage: FormLayoutsPage;
    datePickerPage: DatePickerPage;
}

export const test = base.extend<TestFixtures>({
    navigationPage: async ({ page }, use) => {
        await use(new NavigationPage(page));
    },
    formLayoutsPage: async ({ page }, use) => {
        await use(new FormLayoutsPage(page));
    },
    datePickerPage: async ({ page }, use) => {
        await use(new DatePickerPage(page));
    }
});

export { expect } from '@playwright/test';