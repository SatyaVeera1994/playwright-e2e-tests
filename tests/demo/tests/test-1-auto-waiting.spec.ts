import { test, expect } from "@playwright/test";

test("test for auto-waiting", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator("#ajaxButton").click();
  // await page.locator("p.bg-success").click();/
  const value = await page.locator("p.bg-success").textContent();
  console.log(value);
  await page.close();
});

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await page.close();
});
