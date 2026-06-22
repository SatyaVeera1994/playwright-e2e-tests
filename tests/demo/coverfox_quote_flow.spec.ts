import { test, expect } from '@playwright/test';

test('Coverfox quote count', async ({ page }) => {

  test.setTimeout(60000);

  // Open website
  await page.goto('https://www.coverfox.com/');

  // Click Don't know car number
  // await page.getByText(/Don't know your car number/i).click();
 await page.locator("//div[@class='flow-links']//div[1]").click();
 
  // Select Brand
  await page.getByText('Maruti', { exact: true }).click();

  // Select Model
  await page.getByText('Fronx').click();

  // Select Fuel
  await page.getByText('Petrol', { exact: true }).click();

  // Select Variant
  await page.getByText('Delta AMT').click();

  // Enter RTO
  await page
    .getByRole('textbox', { name: 'e.g MH 02 or Mumbai' })
    .fill('KA-03');

  // Select RTO option
  await page.getByText('KA-03 Bangalore Indiranagar').click();

  // Registration year
  await page.getByText('2020').click();

  // Policy expiry
  await page.getByText('Not Expired').click();

  // Previous claim
  await page.getByText('No').nth(3).click();

  // View Quotes
  await page.getByRole('button', { name: 'View Quotes' }).click();

  // Wait for result page
  await expect(page.locator('text=plans found')).toBeVisible();

  // Get plans text
  const plansText = await page.locator('text=plans found').textContent();

  console.log('Plans Text:', plansText);

  // Extract only number
  const plansCount = plansText?.match(/\d+/)?.[0];

  console.log(`Total Quotes Loaded: ${plansCount}`);

});