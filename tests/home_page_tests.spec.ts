import { HelperBase } from '../helpers/helperBase';
import { test, expect } from '../Test Environment/base';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": 'rgb(34, 43, 69)',
    "Cosmic": 'rgb(50, 50, 89)',
    "Corporate": 'rgb(255, 255, 255)'
}

test('should change the theme', async ({ page, homePage }) => {
    const header = page.locator('nb-layout-header');

    await homePage.changeTheme('Dark');
    expect(header).toHaveCSS('background-color', colors.Dark);
    
    await homePage.changeTheme('Light');
    expect(header).toHaveCSS('background-color', colors.Light);

    await homePage.changeTheme('Cosmic');
    expect(header).toHaveCSS('background-color', colors.Cosmic);

    await homePage.changeTheme('Corporate');
    expect(header).toHaveCSS('background-color', colors.Corporate);
});

