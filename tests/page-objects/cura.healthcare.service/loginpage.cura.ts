import { expect, type Locator , type Page} from "@playwright/test";
import { log } from "../../helpers/logger";
import { default as BasePage } from "../base-page";

export class LoginPage extends BasePage {
  readonly usernamelocator: Locator;
  readonly passwordLocator: Locator;
  readonly loginButtonLocator: Locator;
  readonly makeAppointmentLinkLocator: Locator;

  // constructor

  constructor(page: Page) {
    super(page);
    // locators
    this.usernamelocator = page.getByLabel("Username" );
    this.passwordLocator = page.getByLabel("Password");
    this.loginButtonLocator = page.getByRole("button", { name: "Login" });
    this.makeAppointmentLinkLocator = page.getByRole('link', { name: 'Make Appointment' });
  }

  //page actions
  async loginCura(url: string, username: string, password: string) {
    await log("info", `navigate to ${url}`);
    await this.navigateTo(url);
    await this.click(this.makeAppointmentLinkLocator);
    await this.typeinto(this.usernamelocator, username);
    await this.typeinto(this.passwordLocator, password);
    await this.click(this.loginButtonLocator);
    await expect(this.page).toHaveURL(
      "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    );
  }
}
