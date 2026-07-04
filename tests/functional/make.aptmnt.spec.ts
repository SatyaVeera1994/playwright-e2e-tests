import { test, expect } from '@playwright/test';

test.describe('Make Appointment', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
  });

  test('Book Appointment', async ({ page }) => {

    await page.getByRole('link', { name: 'Make Appointment' }).click();

    await page.getByRole('textbox', { name: 'Username' })
      .fill('John Doe');

    await page.getByRole('textbox', { name: 'Password' })
      .fill('ThisIsNotAPassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByLabel('Facility')
      .selectOption('Hongkong CURA Healthcare Center');

    await page.getByRole('checkbox', {
      name: 'Apply for hospital readmission'
    }).check();

    await page.getByRole('radio', {
      name: 'Medicaid'
    }).check();

    await page.getByRole('textbox', {
      name: 'Comment'
    }).fill('This is a sample appointment');

    await page.getByRole('button', {
      name: 'Book Appointment'
    }).click();

    await expect(page.locator('h2'))
      .toContainText('Appointment Confirmation');
  });

});