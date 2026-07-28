import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../helpers/logger";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //navigateTo()

  async navigateTo(url: string) {
    await log("log", `Navigate to URL: ${url}`);
    await this.page.goto(url);
  }

  //click()

  async click(element: Locator) {
    try {
      await expect(element).toBeVisible({ timeout: 5000 });
      await log("log", "clicking on element:${element}");
      await element.click();
    } catch (error) {
      await log(
        "error",
        "element not found:${element.toString()} , error:${error}",
      );
      throw error;
    }
  }

  //typeInto()

  async typeInto(element: Locator, text: string): Promise<void> {
    try {
      await expect(element).toBeVisible({ timeout: 5000 });
      await log("log", `Typing text: ${text}`);

      await element.fill(text);
    } catch (error) {
      await log(
        "error",
        `Element not found: ${element.toString()}, error: ${error}`,
      );
      throw error;
    }
  }
  //fill

  async fill(element: Locator, text: string): Promise<void> {
    try {
      await expect(element).toBeVisible({ timeout: 5000 });

      await log("log", `Filling text: ${text}`);

      await element.fill(text);
    } catch (error) {
      await log(
        "error",
        `Unable to fill element: ${element.toString()}, error: ${error}`,
      );
      throw error;
    }
  }
  // Scroll to an element--->scrollToElement()
  async scrollToElement(element: Locator): Promise<void> {
    await element.scrollIntoViewIfNeeded();
  }

  // Select an option from a Material UI/custom dropdown-->selectDropdownOption()

  async selectDropdownOption(
    dropdown: Locator,
    optionName: string,
  ): Promise<void> {
    await dropdown.click();
    await this.page.getByRole("option", { name: optionName }).click();
  }
  // Common expect method-->verifyVisible()
  async verifyVisible(element: Locator): Promise<void> {
    await expect(element).toBeVisible();
  }

  //waitForPageLoad()
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }
  // Checkbox helper-->checkCheckbox()
  async checkCheckbox(element: Locator): Promise<void> {
    if (!(await element.isChecked())) {
      await element.check();
    }
  }
}
