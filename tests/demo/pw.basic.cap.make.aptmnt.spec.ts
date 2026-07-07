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

//  await page.getByLabel('Username').fill('John Doe');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('ThisIsNotAPassword');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
//   await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
//   await page.getByRole('radio', { name: 'Medicare' }).check();
//   await page.getByRole('radio', { name: 'Medicare' }).check();
//   await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
//   await page.getByRole('cell', { name: '5' }).first().click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.locator('span').click();
//   await page.getByRole('columnheader', { name: '»' }).click();
//   await page.getByRole('columnheader', { name: '»' }).click();
//   await page.getByRole('columnheader', { name: '»' }).dblclick();
//   await page.getByRole('cell', { name: '14' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).fill('book appoinment');
//   await page.getByRole('button', { name: 'Book Appointment' }).click();
//   await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
//   await expect(page.locator('#summary')).toContainText('Go to Homepage');
//   await expect(page.locator('h2')).toContainText('Appointment Confirmation');
// });
