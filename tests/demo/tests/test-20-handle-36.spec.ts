import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.pause();
  await page.locator("#twotabsearchtextbox").fill("mobile");
  await page.getByRole("button", { name: "Go", exact: true }).click();
  await page.waitForLoadState();
  await page.waitForTimeout(2000);
  const values = await page.locator("a h2 span").allInnerTexts();
  for (let value of values) {
    console.log(value);
  }
});
