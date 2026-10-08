import { test, expect } from "@playwright/test";
// test("network inteception", async ({ page }) => {
//   await page.route("**/api/v1/fruits", async (route) => {
//     await route.fulfill({
//       status: 200,
//       contentType: "application/json",
//       body: JSON.stringify([
//         {
//           name: "Strawberry",
//           id: 3,
//         },
//         {
//           name: "Banana",
//           id: 1,
//         },
//       ]),
//     });
//   });
//   await page.goto("https://demo.playwright.dev/api-mocking/");
//   await expect(page.locator("text=Strawberry")).toBeVisible();
//   await expect(page.locator("text=Banana")).toBeVisible();
//   await page.waitForTimeout(5000);
// });
test("Intercept network request", async ({ page }) => {
  await page.route("**/api/v1/fruits", async (route) => {
    console.log("Request intercepted!");

    await route.continue();
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");
  await page.waitForTimeout(5000);
});
