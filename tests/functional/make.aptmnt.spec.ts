import { test, expect } from '@playwright/test';
import {log } from '../helpers/logger';

test.describe('Make Appointment', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    //get url from configfile
  
   const envConfig = testInfo.project.use as any;

   await log('info', `Navigating to ${envConfig.envNAME}`);   
    // await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.goto(envConfig.appUrl);
  });

  test('Book Appointment', async ({ page }) => {

    await page.getByRole('link', { name: 'Make Appointment' }).click();

    await page.getByLabel('Username').fill(process.env.TEST_USER_NAME);
    await page.getByLabel('Password').fill(process.env.TEST_USER_PASSWORD);
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

  //   await expect(page.locator('h2'))
  //     .toContainText('Appointment Confirmation');

  await log('info','the login is successful');
  await log('error','Appointment is not Confirmation')
  });

});