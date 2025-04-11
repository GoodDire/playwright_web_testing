import { test as base } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { FormLayoutsPage } from '../pages/formLayoutsPage';
import { DatePickerPage } from '../pages/datePickerPage';
import { HomePage } from '../pages/homePage';

type TestFixtures = {
    navigationPage: NavigationPage;
    formLayoutsPage: FormLayoutsPage;
    datePickerPage: DatePickerPage;
    homePage: HomePage;
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
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

export { expect } from '@playwright/test';