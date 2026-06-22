import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.good.in/');
  await page.getByRole('textbox', { name: 'Enter your Phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter your Phone number' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your Phone number' }).fill('9898989898');
  await page.getByRole('button', { name: 'Start Now' }).click();
  
  
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('8');
  await page.getByRole('textbox').nth(3).fill('0');
  await page.getByRole('textbox').nth(4).fill('6');
  await page.getByRole('textbox').nth(5).fill('8');
  await page.getByRole('textbox').nth(6).fill('9');
//   await page.locator('input[type="text"]').nth(5).fill('9');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Get Quotes instantly and sell').click();
  
  
});