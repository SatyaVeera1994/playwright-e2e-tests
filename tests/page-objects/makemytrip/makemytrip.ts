import { expect, type Locator, type Page } from "@playwright/test";
import { default as BasePage } from "../../page-objects/base-page";
import { log } from "../../helpers/logger";

export class MakeMyTrip extends BasePage {
  readonly commonmodelLocator: Locator;
  readonly flightsLocator: Locator;
  readonly closePopup: Locator;
  readonly fromTextbox: Locator;
  readonly searchButton: Locator;
  readonly toTextbox: Locator;
  readonly fromTextboxLocator: Locator;

  constructor(page: Page) {
    super(page);
    
    this.flightsLocator = page.getByText("Flights Flights");

    this.fromTextboxLocator = page.getByRole("textbox", {
      name: "From",
    });

    this.closePopup = page.locator(".commonModal__close");
    this.fromTextbox = page.getByRole("textbox", { name: "From", exact: true });
    this.toTextbox = page.getByRole("textbox", { name: "To", exact: true });
    this.searchButton = page.getByRole("button", { name: "Search" });
  }

  async navigateToApp(url): Promise<void> {
    await this.page.goto(url);
  }

  async closeLoginPopup(): Promise<void> {
    await this.closePopup.click();
  }

  async selectFromCity(city: string): Promise<void> {
    await this.fromTextbox.click();
    await this.fromTextbox.fill(city);
    await this.page.getByText(`${city}, India`, { exact: true }).selectOption;
  }

  async selectToCity(city: string): Promise<void> {
    await this.toTextbox.fill(city);
    await this.page.getByText(`${city}, India`, { exact: true }).click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }
}

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.makemytrip.com/flights/');
//   await page.locator('.commonModal__close').click();
//   await page.getByText('Flights Flights').click();
//   await page.getByRole('textbox', { name: 'From DEL, Delhi Airport India' }).click();
//   await page.getByRole('textbox', { name: 'From', exact: true }).fill('hy');
//   await page.getByText('Rajiv Gandhi International').click();
//   await page.getByRole('textbox', { name: 'To BLR, Bengaluru' }).click();
//   await page.getByRole('textbox', { name: 'To', exact: true }).fill('be');
//   await page.getByText('Bengaluru, India').click();
//   await page.getByLabel('Fri Jul 17').getByText('17').click();
//   await page.getByText('Tap to add a return date for').click();
//   await page.getByLabel('Sun Jul 19').getByText('19').click();
//   await page.getByText('Search').click();
//   await page.locator('div').click();
// });
