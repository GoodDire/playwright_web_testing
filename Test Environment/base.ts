import { test as base } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { FormLayoutsPage } from '../pages/formLayoutsPage';
import { DatePickerPage } from '../pages/datePickerPage';
import { HomePage } from '../pages/homePage';
import { DialogsPage } from '../pages/dialogsPage';

type TestFixtures = {
    navigationPage: NavigationPage;
    formLayoutsPage: FormLayoutsPage;
    datePickerPage: DatePickerPage;
    homePage: HomePage;
    dialogsPage: DialogsPage;
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
    },
    dialogsPage: async ({ page }, use) => {
        await use(new DialogsPage(page));
    }
});

export { expect } from '@playwright/test';