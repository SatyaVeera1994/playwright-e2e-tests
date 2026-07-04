import { test, expect } from "@playwright/test";
import CarInsurancePage from "../../page-objects/carInsurance.page";
import registrationData from "../../data/carInsuranceRegistrationdata";

test.describe("Car insurance", () => {
  let carInsurancePage: CarInsurancePage;

  test.beforeEach(async ({ page }) => {
    carInsurancePage = new CarInsurancePage(page);
    await carInsurancePage.navigateTo("https://www.coverfox.com/");
  });

  test("Verify car insurance quotes using registration number", async () => {

    const registration = registrationData[0];

    await test.step("Navigate to Car Insurance page", async () => {
      await carInsurancePage.navigateToCarInsurancePage();
    });

    await test.step("Enter Car Number", async () => {
      await carInsurancePage.enterCarNumber(registration.carNumber);
      await carInsurancePage.clickQuoteButton();
    });

    await test.step("Select Previous Claim", async () => {
      await carInsurancePage.selectPreviousClaim(registration.previousClaim);
    });

    await test.step("Enter Mobile Number", async () => {
      await carInsurancePage.enterMobileNumber(registration.mobileNumber);
    });

    await test.step("Click View Quotes", async () => {
      await carInsurancePage.clickReQuoteButton();
    });

    await test.step("Verify Quotes Count", async () => {
      await expect(carInsurancePage.page).toHaveURL(/results/);

      const quotesCount = await carInsurancePage.getQuotesCount();

      console.log(`Quotes Count: ${quotesCount}`);

      expect(
        quotesCount,
        "Quotes count should be greater than zero"
      ).toBeGreaterThan(0);
    });
   

  });
});