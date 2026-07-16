import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../helpers/logger";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await log("log", "navigateto url: ${url}");
    await this.page.goto(url);
  }

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

  async typeinto(element: Locator, text: string): Promise<void> {
    try {
      await expect(element).toBeVisible({ timeout: 5000 });
      await log("log", "typing in to element;${element}, text:${text}");
    } catch (error) {
      await log(
        "error",
        "element not found:${element.toString()} , error:${error}",
      );
      throw error;
    }
  }
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
}
   