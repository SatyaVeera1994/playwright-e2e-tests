import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/flights/');
  await page.locator('.commonModal__close').click();
  await page.getByText('Flights Flights').click();
  await page.getByText('FromDEL, Delhi Airport India').click();
  await page.getByRole('textbox', { name: 'From', exact: true }).fill('mubai');
  await page.getByText('Mumbai, IndiaChhatrapati').click();
  await page.getByText('ToBLR, Bengaluru').click();
  await page.getByRole('textbox', { name: 'To', exact: true }).fill('h');
  await page.getByText('Hyderabad, IndiaRajiv Gandhi').click();
  await page.getByLabel('Fri Jul 17').getByText('17').click();
  await page.getByText('Tap to add a return date for').click();
  await page.getByText('2010,468').click();
  await page.locator('.tp-dt-header > div:nth-child(3)').click();
  await page.getByText('Travellers & Class1').click();
  await page.getByText('‎').nth(1).click();
  await page.getByText('‎1').nth(1).click();
  await page.getByRole('button', { name: 'APPLY' }).click();
  await page.getByText('Search').click();
});