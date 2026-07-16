import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
  });

  test("Book Appointment", async ({ page },testInfo) => {
    await page.getByRole("link", { name: "Make Appointment" }).click();

    await page.getByLabel("Username").fill("John Doe");

    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

    await page.getByRole("checkbox", {name: "Apply for hospital readmission",}).check();

    await page.getByRole("radio", {name: "Medicaid",}).check();
    // await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    // await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill('05/12/2027');
    // await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
    await page.getByRole("textbox", {name: "Comment", }).click
    await page.getByRole("textbox", {name: "Comment", }).fill("This is a sample appointment");
      


    await page
      .getByRole("button", {
        name: "Book Appointment",
      })
      .click();

    let screenshotBookAppointment = await page.screenshot({fullPage:true});
    await testInfo.attach("Book Appointment",{
      body: screenshotBookAppointment,
      contentType: "image/png"
    });

    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
  });
});


