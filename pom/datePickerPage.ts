import { expect, Page } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class DatePickerPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async selectCommonDateFromToday(numbersFromToday: number) {
       const calendarInputField = this.page.getByPlaceholder('Form Picker');
       await calendarInputField.click();
    
       const dateToAssert = await this.selectDateInCalendar(numbersFromToday);
       await expect(calendarInputField).toHaveValue(dateToAssert);
    }

    async selectDateWithRangeFromToday(stardDateFromToday: number, endDateFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();

        const dateToAssertStart = await this.selectDateInCalendar(stardDateFromToday);
        const dateToAssertEnd = await this.selectDateInCalendar(endDateFromToday);

        const expectedDate = `${dateToAssertStart} - ${dateToAssertEnd}`;
        await expect(calendarInputField).toHaveValue(expectedDate);
    }

    async selectDateInCalendar(numbersFromToday: number) {
        let today = new Date();
        today.setDate(today.getDate() + numbersFromToday);
        const expectedDate = today.getDate().toString()
        const expectedMonthShort = today.toLocaleString('En-US', { month: 'short' });
        const expectedMonthLong = today.toLocaleString('En-US', { month: 'long' });
        const expectedYear = today.getFullYear()
 
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;
 
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
        while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [dateName="chevron-right"]').click();
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        }
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click();
        return dateToAssert;
    }
}