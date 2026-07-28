import { test, expect } from "@playwright/test";

test("Search Laptop", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  await page.getByRole("searchbox").fill("laptop");
  await page.keyboard.press("Enter");

  const firstProduct = page
    .locator("div[data-component-type='s-search-result']")
    .first();

  await expect(firstProduct).toBeVisible();

  await firstProduct.click();
});

test("Select Option 2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  await page.locator("#dropdown").selectOption("2");
  await page.waitForTimeout(2000);
  await expect(page.locator("#dropdown")).toHaveValue("2");
});

test.only("select options 1 and 2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").selectOption("2");
  await page.waitForTimeout(3000);
  await expect(page.locator("#dropdown")).toHaveValue("2");
  await page.locator("#dropdown").selectOption("1");
  await expect(page.locator("#dropdown")).toHaveValue("1");
});

