import { test, expect } from "@playwright/test";

test("handle radio buttons", async ({ page }) => {
  await page.goto("https://www.bing.com/account/general?ru");
  // await page.pause();
  await page.locator("#adlt_set_strict").check();
  await page.getByLabel("Moderate").check();
  await page.getByRole("radio", { name: "Off" }).first().check();

  await page.close();
});
// <input type="radio" id="adlt_set_strict" name="adlt_set" value="strict">
// Moderate
// Off

test.only("handle radio buttons2", async ({ page }) => {
  await page.goto("https://www.bing.com/account/general?ru");
  // await page.pause();
  await page.locator("#adlt_set_strict").check();
  await expect(await page.locator("#adlt_set_strict")).toBeChecked();
  await expect(await page.locator("#adlt_set_strict").isChecked()).toBeTruthy();
  await expect(await page.getByLabel("Moderate").isChecked()).toBeFalsy();
  await expect(
    await page.getByRole("radio", { name: "Off" }).isChecked(),
  ).toBeFalsy();

  await page.close();
});
