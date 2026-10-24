import { test, expect } from "@playwright/test";

test("mobile Emulator", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(8000);
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await page.close();
});

test("mobile Emulator1", async ({ page }, testInfo) => {
  if (testInfo.project.name === "Mobile") {
  }
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(8000);
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await page.close();
});
