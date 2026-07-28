import { expect, type Locator, type Page } from '@playwright/test';
import { default as BasePage } from "../../page-objects/base-page";
import { log } from '../../helpers/logger';

export class MakeAppointment extends BasePage{
  readonly makeAppointmentlocator:Locator
  readonly facilityOptionlocator:Locator
  constructor(page:Page){
    super(page);
    //locators
    this.makeAppointmentlocator=page.getByRole('link', { name: 'Make Appointment' });
    this.facilityOptionlocator=page.getByLabel('Facility');
    

  }
}

// test('test', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/');
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
//   await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
//   await page.getByRole('radio', { name: 'Medicare' }).check();
//   await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
//   await page.getByRole('cell', { name: '29' }).nth(1).click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).fill('generalpecition');
//   await page.getByRole('button', { name: 'Book Appointment' }).click();
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
//   await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
//   await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
//   await page.getByRole('radio', { name: 'Medicare' }).check();
//   await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
//   await page.getByRole('cell', { name: '15' }).click();
//   await page.getByRole('cell', { name: '31' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).fill('hhkk');
//   await page.getByRole('button', { name: 'Book Appointment' }).click();
// });