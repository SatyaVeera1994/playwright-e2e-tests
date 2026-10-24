import { test, expect } from "@playwright/test";

test("Capture Screenshots", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `tests/images/screenshot ${Date.now()}.png`,
  });
  await page.pause();
  await page.close();
});

test("Capture Screenshots full page", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `tests/images/screenshot ${Date.now()}.png`,
    fullPage: true,
  });

  await page.pause();
  await page.close();
});

test.only("Capture Screenshots full pagexxx", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  const searchBox = page.locator(
    'input[placeholder="Search for Products, Brands and More"]',
  );

  await searchBox.waitFor({ state: "visible" });

  await searchBox.screenshot({
    path: `tests/images/screenshot-${Date.now()}.png`,
  });

  await page.pause();
});
