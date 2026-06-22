import { test, expect } from '@playwright/test';

test('Coverfox quote count', async ({ page }) => {

  test.setTimeout(60000);

  // Open website
  await page.goto('https://www.coverfox.com/');

  // Close popup if visible
  const popupClose = page.locator('.cf-modal__close');

  if (await popupClose.isVisible()) {
    await popupClose.click();
  }

  // Click Don't know Car number
  await page.locator("//div[@class='flow-links']//div[1]").click();
// await page.getByText("Don't know your car number?").click();
  // Select Maruti
  await page.getByText('Maruti', { exact: true }).click();

  // Select Fronx
  await page.getByText('Fronx', { exact: true }).click();

  // Select Petrol
  await page.getByText('Petrol', { exact: true }).click();

  // Select Delta AMT
  await page.getByText('Delta AMT').click();

  // Enter KA-03
  await page
    .getByRole('textbox', { name: 'e.g MH 02 or Mumbai' })
    .fill('KA-03');
  
await page.getByText('KA-03 Bangalore Indiranagar', { exact: true }).click();
  // await page.getByRole('textbox').fill('KA-03');

  // // Select RTO
  // await page.getByText("KA-03 Bangalore Indiranagar").first().click();

  // Select 2020
  await page.getByText('2020', { exact: true }).click();

  // Select Not Expired
  await page.getByText(/Not Expired/i).click();

  // Select No claim
  await page.getByText('No', { exact: true }).last().click();

  // Click View Quotes
  await page.getByRole('button', { name: /View Quotes/i }).click();

  // Wait for plans
  await expect(page.locator('text=plans found')).toBeVisible();

  // Get plans text
  const plansText = await page.locator('text=plans found').textContent();

  // Extract number
  const count = plansText?.match(/\d+/)?.[0];

  console.log(`Total Quotes Loaded: ${count}`);

});