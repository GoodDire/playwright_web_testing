import { Page } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class NavigationPage extends HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        super(page)
    }

    private async selectGroupMenuItem(groupItemtTitle: string) {
        const groupItem = this.page.getByTitle(groupItemtTitle);
        const expandedState = await groupItem.getAttribute('aria-expanded');
        if (expandedState === 'false') {
            await groupItem.click();
        }
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Form Layouts').click();
    }
    
    async datePickerPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Datepicker').click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data');
        await this.page.getByText('Smart Table').click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Toastr').click();
    }

    async tooltipsPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Tooltip').click();
    }

    async dialogPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Dialog').click();
    }
}