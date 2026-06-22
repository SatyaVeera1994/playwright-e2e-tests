// pages/FlightBookingPage.ts

import { Page, Locator, expect } from '@playwright/test';

export class FlightBookingPage {

    readonly page: Page;

    // Locators
    readonly closePopupButton: Locator;
    readonly fromCityField: Locator;
    readonly fromCityInput: Locator;

    readonly toCityField: Locator;
    readonly toCityInput: Locator;

    readonly travellerSection: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        this.page = page;

        // Popup
        this.closePopupButton = page.locator('.commonModal__close');

        // From City
        this.fromCityField = page.getByLabel('From');
        this.fromCityInput = page.getByPlaceholder('From');

        // To City
        this.toCityField = page.getByLabel('To');
        this.toCityInput = page.getByPlaceholder('To');

        // Traveller Section
        this.travellerSection = page.getByText('Travellers & Class');

        // Search Button
        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });
    }

    // Navigate to Flights Page
    async navigateToFlightsPage(): Promise<void> {

        await this.page.goto('https://www.makemytrip.com/flights/');

        await this.page.waitForLoadState('domcontentloaded');
    }

    // Close Login Popup
    async closeLoginPopup(): Promise<void> {

        if (await this.closePopupButton.isVisible()) {

            await this.closePopupButton.click();
        }
    }

    // Select From City
    async selectFromCity(cityName: string): Promise<void> {

        await this.fromCityField.click();

        await this.fromCityInput.fill(cityName);

        await this.page
            .locator('p')
            .filter({
                hasText: `${cityName}, India`
            })
            .first()
            .click();
    }

    // Select To City
    async selectToCity(cityName: string): Promise<void> {

        await this.toCityField.click();

        await this.toCityInput.fill(cityName);

        await this.page
            .locator('p')
            .filter({
                hasText: `${cityName}, India`
            })
            .first()
            .click();
    }

    // Select Departure Date
    async selectDepartureDate(): Promise<void> {

        const departureDate = this.page
            .locator('[aria-label]')
            .filter({
                hasText: /^[0-9]+$/
            })
            .nth(10);

        await departureDate.click();
    }

    // Select Return Date
    async selectReturnDate(): Promise<void> {

        const returnDate = this.page
            .locator('[aria-label]')
            .filter({
                hasText: /^[0-9]+$/
            })
            .nth(15);

        await returnDate.click();
    }

    // Select Travellers
    async selectTravellers(
        adults: number,
        children: number
    ): Promise<void> {

        await this.travellerSection.click();

        // Adults
        await this.page
            .locator(`li[data-cy="adults-${adults}"]`)
            .click();

        // Children
        await this.page
            .locator(`li[data-cy="children-${children}"]`)
            .click();

        // Apply
        await this.page
            .getByRole('button', {
                name: 'APPLY'
            })
            .click();
    }

    // Click Search
    async clickSearch(): Promise<void> {

        await this.searchButton.click();
    }

    // Verify Search Result
    async verifyFlightResults(): Promise<void> {

        await expect(this.page)
            .toHaveURL(/flight\/search/);

        await expect(
            this.page.locator('div.fli-list').first()
        ).toBeVisible();
    }
}