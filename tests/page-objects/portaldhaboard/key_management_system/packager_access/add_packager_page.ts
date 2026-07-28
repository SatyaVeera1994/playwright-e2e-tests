import { expect, type Locator, type Page } from "@playwright/test";
import { default as BasePage } from "../../../../page-objects/base-page";

export class AddPackager extends BasePage {
  readonly orgLocator: Locator;
  readonly packagerIdLocator: Locator;
  readonly aliasIdLocator: Locator;
  readonly descriptionLocator: Locator;
  readonly packagerVendorLocator: Locator;
  readonly signerIvLocator: Locator;
  readonly signerKeyLocator: Locator;
  readonly notesLocator: Locator;
  readonly disabledCheckboxLocator: Locator;
  readonly enableFullLoggingCheckboxLocator: Locator;
  readonly packagerMenuLocator: Locator;
  readonly addMenuLocator: Locator;
  readonly detailsMenuLocator: Locator;
  readonly successMessageLocator: Locator;
  readonly existsMessageLocator: Locator;
  readonly cancelButtonLocator: Locator;
  readonly saveButtonLocator: Locator;
  readonly nextButtonLocator: Locator;
  readonly backButtonLocator: Locator;
  readonly createButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.packagerMenuLocator = page
      .locator("(//div[@class='MuiBox-root css-lutvhz'])")
      .getByText("layers_outlinedPackager");

    this.addMenuLocator = page.locator("//span[normalize-space()='Add']");
    this.detailsMenuLocator = page.locator(
      "//span[normalize-space()='Details']",
    );
    this.orgLocator = page.getByLabel("Organisation");
    this.packagerIdLocator = page.getByLabel("Packager ID");
    this.aliasIdLocator = page.getByLabel("Alias ID");
    this.descriptionLocator = page.getByLabel("Description");
    this.packagerVendorLocator = page.getByLabel("Packager Vendor");
    this.signerIvLocator = page.getByLabel("Signer IV");
    this.signerKeyLocator = page.getByLabel("Signer Key");
    this.notesLocator = page.getByLabel("Notes");
    this.disabledCheckboxLocator = page.locator('input[name="disabled"]');
    this.enableFullLoggingCheckboxLocator = page.locator(
      'input[name="enableFullLogging"]',
    );
    this.successMessageLocator = page.locator(
      "//div[contains(text(),'Packager Access added Successfully!')]",
    );
    this.existsMessageLocator = page.locator(
      "//div[contains(text(),'Packager Id already exists')]",
    );

    this.cancelButtonLocator = page.getByRole("button", { name: "Cancel" });
    this.saveButtonLocator = page.getByRole("button", { name: "Save changes" });
    this.nextButtonLocator = page.getByRole("button", { name: "Next" });
    this.backButtonLocator = page.getByRole("button", { name: "Back" });
    this.createButtonLocator = page.getByRole("button", { name: "Create" });
  }
  async scrollToElement(element) {
    await element.evaluate((el) =>
      el.scrollIntoView({ behavior: "smooth", block: "center" }),
    );
  }
  async selectDropdownOption(dropdown: Locator, optionName: string) {
    await dropdown.click();
    await this.page.getByRole("option", { name: optionName }).click();
  }

  async addPackgerdata(
    packager:
      | {
          aliasId: string;
          description: string;
          disabled: boolean;
          enableFullLogging: boolean;
          id: string;
          iv: string;
          key: string;
          orgName: string;
          packagerVendor: string;
          notes: string;
        }
      | {
          aliasId: string;
          description: string;
          disabled: boolean;
          enableFullLogging: boolean;
          id: string;
          iv: string;
          key: string;
          orgName: string;
          packagerVendor: string;
          notes?: undefined;
        },
  ) {
    await this.scrollToElement(this.packagerMenuLocator);
    await this.packagerMenuLocator.waitFor({ state: "visible" });
    await this.packagerMenuLocator.click();
    await this.addMenuLocator.click();

    await this.selectDropdownOption(this.orgLocator, packager.orgName);
    await this.fill(this.packagerIdLocator, packager.id);

    await this.fill(this.aliasIdLocator, packager.aliasId);
    await this.fill(this.descriptionLocator, packager.description);
    await this.click(this.nextButtonLocator);

    await this.selectDropdownOption(
      this.packagerVendorLocator,
      packager.packagerVendor,
    );
    await this.click(this.nextButtonLocator);
    await this.fill(this.signerIvLocator, packager.iv);
    await this.fill(this.signerKeyLocator, packager.key);
    await this.click(this.nextButtonLocator);
    await this.fill(this.notesLocator, packager.notes);
    await this.click(this.createButtonLocator);
  }
  async handlePackagerSaveMessage(packager: { id: any }) {
    if (await this.successMessageLocator.isVisible()) {
      console.log(`Packager Id: '${packager.id}' added successfully!`);
    } else if (await this.existsMessageLocator.isVisible()) {
      console.log(`Packager Id: '${packager.id}' already exists.`);
      await this.cancelButtonLocator.click();
    } else {
      console.warn(
        ` No success or exists message appeared for Packager Id: '${packager.id}'.`,
      );
    }
  }
}
