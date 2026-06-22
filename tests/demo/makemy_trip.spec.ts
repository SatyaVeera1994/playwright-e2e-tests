import { test, expect } from '@playwright/test';

test('booking tickets mubai to hyderabad', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/flights/');
  await page.locator('.commonModal__close').click();
  await page.getByRole('link', { name: 'Flights', exact: true }).click();
  await page.getByText('DEL, Delhi Airport India').click();
  await page.getByRole('textbox', { name: 'From', exact: true }).click();
  await page.getByRole('textbox', { name: 'From', exact: true }).fill('mubai');
  await page.getByText('Mumbai, India', { exact: true }).click();
  await page.getByText('To', { exact: true }).click();
  await page.getByRole('textbox', { name: 'To', exact: true }).fill('hyderaba');
  await page.getByText('Rajiv Gandhi International').click();
  await page.getByLabel('Wed Jun 24').getByText('24').click();
  await page.getByText('ReturnTap to add a return').click();
  await page.getByText('8,989').nth(2).click();
  await page.getByText('Regular fares').click();
  await page.getByText('1 Traveller').click();
  await page.getByText('‎').nth(1).click();
  await page.getByText('‎1').nth(1).click();
  await page.getByRole('button', { name: 'APPLY' }).click();
  await page.getByText('Search').click();
  await page.locator('html').click();
})