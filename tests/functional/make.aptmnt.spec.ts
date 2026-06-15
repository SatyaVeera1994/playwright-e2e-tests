import { test, expect } from '@playwright/test';

test.describe("Make Appointment", () => {


  test.beforeEach("login with valid crediatials", async({page}) =>{


  })

})

test('test', async ({ page }) => {
  await page.goto('await page.locator('body').click();');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByRole('textbox', { name: 'Username' }).first().click();
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '24' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('thia multiline \nthis is satya');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Appointment Confirmation');
  await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
});