import { test, expect } from '@playwright/test';

test('multi-window flow should open multiple windows and navigate back', async ({ page, context }) => {
  const parentPage = page;

  await parentPage.goto('https://the-internet.herokuapp.com/');
  await parentPage.getByRole('link', { name: 'Multiple Windows' }).click();

  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.getByRole('link', { name: 'Click Here' }).click(),
  ]);

  await newWindow.waitForLoadState('domcontentloaded');
  await expect(newWindow).toHaveTitle(/New Window/);

  const [nextWindow] = await Promise.all([
    context.waitForEvent('page'),
    newWindow.getByRole('link', { name: /Elemental Selenium/i }).click(),
  ]);

  await nextWindow.waitForLoadState('domcontentloaded');
  await expect(nextWindow.locator('h1')).toHaveText(/Elemental Selenium/i);

  await parentPage.bringToFront();
  await expect(parentPage).toHaveURL(/\/windows/);
});
