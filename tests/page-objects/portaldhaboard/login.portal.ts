import { expect, type Locator, type Page } from "@playwright/test";
import { default as BasePage } from "../../page-objects/base-page";
import { log } from "../../helpers/logger";

export class LoginPortalDashboard extends BasePage {
  readonly emailLocator: Locator;
  readonly passwordLocator: Locator;
  readonly signInButtonLocator: Locator;
  readonly homeLocator: Locator;

  // constructor
  constructor(page: Page) {
    super(page);
    this.emailLocator =page.getByLabel("Enter your email");
    this.passwordLocator =page.getByLabel("Enter your password");
    // this.emailLocator = page.getByRole("textbox", { name: "Enter your email" });
    // this.passwordLocator = page.getByRole("textbox", {
    //   name: "Enter your password",
    // });
    this.signInButtonLocator = page.getByRole("button", { name: "SIGN IN" });
  this.homeLocator = page.getByRole('link', { name: 'Home' });
    
  }

  //page actions

  async loginPortal(url: string, email: string, password: string) {
  await this.navigateTo(url);
  await this.fill(this.emailLocator, email);
  await this.fill(this.passwordLocator, password);
  await this.click(this.signInButtonLocator);

  // await expect(this.page).toHaveURL(/.*home/);
  // await expect(this.homeLocator).toBeVisible();
  await expect(this.homeLocator).toBeVisible({
  timeout: 30000,
});

  }
}
