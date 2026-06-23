import { test, expect } from "@playwright/test";

test.describe("inventory feature", () => {
  test.beforeEach("login with vallid creditals", async ({ page }) => {
    // launch url
    await page.goto("https://www.saucedemo.com/");
    // login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    // assertion
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.htmlll");
    await expect(page).toHaveURL(/.*\/inventory/);

    await expect(page.locator('[data-test="primary-header"]')).toContainText(
"Swag Labs",);
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
  });

  test("should conform all prices are non-zero values", async ({ page }) => {
    let productsElms = page.locator(".inventory_item");
    await expect(productsElms).toHaveCount(6);

    // gret product name and prices
    let totalproducts = await productsElms.count();

    let priceArr = [];
    for (let i = 0; i < totalproducts; i++) {
      let eleNode = productsElms.nth(i);

      // product name
      let productName = await eleNode
        .locator(".inventory_item_name")
        .innerText();

      let productPrice = await eleNode
        .locator(".inventory_item_price")
        .innerText();
      console.log(`product:${productName},price: ${productPrice}`);

      priceArr.push(productPrice);

      console.log(`origina price array:${priceArr}`);
    }
    console.log(`origina price array:${priceArr}`);
    let priceArrNum = priceArr.map((item) => parseFloat(item.replace("$", "")));

    console.log(priceArrNum);
    let priceArrWithinvalidVals = priceArrNum.filter((item) => item <= 0);

    if (priceArrWithinvalidVals.length > 0) {
      console.log(`Error:zero values found, ${priceArrWithinvalidVals}`);
    } else {
      console.log(`INFO: ALL prices are non-zero values`);
    }
  });
});
