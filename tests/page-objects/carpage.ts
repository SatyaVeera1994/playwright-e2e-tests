import { Locator, Page } from "@playwright/test";


export default class CarInsurancePage  {
  readonly retailInsuranceLocator: Locator;
  readonly carMenuLocator: Locator;
  readonly carInsuranceLink: Locator;
  readonly dontKnowCarNumberButton: Locator;
  readonly seeAllBrandsButton: Locator;
  readonly seeAllCarsButton: Locator;
  readonly brandLocator: Locator;
  readonly modelLocator: Locator;
  readonly fuelLocator: Locator;
  readonly variantDropdown: Locator;
  readonly variantOptions: Locator;
  readonly rtoTextbox: Locator;
  readonly rtoOptionLocator: Locator;

  readonly registrationYearLocator: Locator;
  readonly policyStatusLocator: Locator;
  readonly previousClaimLocator: Locator;
  readonly quoteButton: Locator;
  readonly quotesCountLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.retailInsuranceLocator = page
      .getByText("Retail Insurance", { exact: true })
      .first();
    this.carMenuLocator = page.getByText("Car", { exact: true }).first();
    this.carInsuranceLink = page
      .getByRole("link", { name: "Car Insurance", exact: true })
      .first();
    this.dontKnowCarNumberButton = page.getByText(
      "Don't know your car number?Click here",
    );
    this.seeAllBrandsButton = page.getByText(/See All \d+ Brands/);
    this.brandLocator = page.locator("//div[@class='all-make']");
    this.seeAllCarsButton = page.getByText(/See all \d+ Cars/);
    this.modelLocator = page.locator("//div[@class='wizard-content-wrapper ']");
    this.fuelLocator = page.locator("//ul[@class='fuel-selector__list']");
    this.variantDropdown = page.getByRole("textbox", { name: "Search..." });
    this.variantOptions = page.locator(
      "//div[contains(@class,'w--multi_select_options')]",
    );
    this.rtoTextbox = page.getByRole("textbox", {
      name: "e.g MH 02 or Mumbai",
    });
    this.rtoOptionLocator = page.locator("//ul//li");

    this.registrationYearLocator = page.locator(
      "//div[contains(@class,'year')]//span",
    );
    this.policyStatusLocator = page.getByText("Not ExpiredExpired");

    this.previousClaimLocator = page.getByText("No");
    this.quoteButton = page
      .getByRole("button", { name: "View Quotes" })
      .first();
    this.quotesCountLocator = page
      .locator("div")
      .filter({ hasText: "plans found Price" })
      .nth(3);
  }

  async navigateToCarInsurancePage() {
    await this.retailInsuranceLocator.hover();

    await this.carMenuLocator.hover();

    await this.carInsuranceLink.click();
  }
  async clickDontKnowCarNumberButton() {
    await this.waitForElement(this.dontKnowCarNumberButton);
    await this.dontKnowCarNumberButton.click();
  }

  async selectBrand(brand: string) {
    await this.click(this.seeAllBrandsButton);
    await this.waitForElement(
      this.brandLocator.getByText(brand, { exact: true }),
    );
    await this.click(this.brandLocator.getByText(brand, { exact: true }));
  }

  async selectModel(model: string) {
    await this.waitForElement(this.seeAllCarsButton);
    await this.page.waitForTimeout(2000);
    await this.click(this.seeAllCarsButton);
    await this.click(this.modelLocator.getByText(model, { exact: true }));
  }

  async selectFuel(fuel: string) {
    await this.click(this.fuelLocator.getByText(fuel, { exact: true }));
  }

  async selectVariant(variant: string) {
    await this.click(this.variantDropdown);

    await this.click(
      this.variantOptions.getByText(variant, {
        exact: true,
      }),
    );
  }
  async selectRTO(rto: string, option: string) {
    await this.typeInto(this.rtoTextbox, rto);

    await this.click(
      this.page.getByText(option, {
        exact: true,
      }),
    );
  }

  async selectRegistrationYear(year: string) {
    await this.click(this.registrationYearLocator.getByText(year));
  }

  async selectPolicyStatus(status: string) {
    await this.click(this.policyStatusLocator.getByText(status));
  }

  async selectPreviousClaim(claim: string) {
    await this.click(this.previousClaimLocator.getByText(claim).nth(4));
  }

  async clickQuoteButton() {
    await this.click(this.quoteButton);
  }

  async getQuotesCount(): Promise<number> {
    const text = await this.quotesCountLocator.textContent();
    const count = Number(text?.match(/\d+/)?.[0]);
    return count;
  }
}