import { test, expect, Locator } from "@playwright/test";

// test("print column 3 values", async ({ page }) => {
//   await page.goto("https://the-internet.herokuapp.com/large");

//   const cells: Locator = page.locator(
//     '//table[@id="large-table"]//tr[contains(@class,"row")]/td[@class="column-4"]',
//   );

//   const values: string[] = await cells.allTextContents();

//   // All values as an array
//   console.log(values);

//   //   // Comma-separated: 1.3, 2.3, 3.3, ...
//   //   console.log(values.join(", "));

//   //   // One per line
//   //   values.forEach((v) => console.log(v));

//   //   // Optional sanity check
//   //   expect(values.length).toBe(50);
//   //   expect(values[0]).toBe("1.3");
// });
test("print column 3 values", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/large");

  const cells1: Locator = page.locator(
    '//table[@id="large-table"]//tr[@class="row-1"]/td',
  );

  const values1: string[] = await cells1.allTextContents();

  // All values as an array
  console.log(values1);
});
