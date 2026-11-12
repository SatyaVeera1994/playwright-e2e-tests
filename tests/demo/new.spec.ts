// import { test, expect } from "@playwright/test";
// test("example test", async ({ page }) => {
//   await page.goto("https://portal.yotta-int.yottacloud.net/");
//   await page
//     .getByRole("textbox", { name: "Enter your email" })
//     .fill("yotta-int.admin@yotta.work");
//   await page
//     .getByRole("textbox", { name: "Enter your password" })
//     .fill("YH6GPHv@/TCPM");
//   await page.getByRole("button", { name: "SIGN IN" }).click();
//   await page.waitForURL("https://portal.yotta-int.yottacloud.net/home");
//   await expect(page.getByText("home").nth(3)).toBeVisible();
//   await expect(page.getByText("home").nth(3)).toBeVisible();
// });

import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  const username = process.env.TEST_USER_NAME;
  const password = process.env.TEST_PASSWORD;

  if (!username || !password) {
    throw new Error("Username or Password is missing");
  }

  await page.goto("https://portal.yotta-int.yottacloud.net/");

  await page.getByRole("textbox", { name: "Enter your email" }).fill(username);

  await page
    .getByRole("textbox", { name: "Enter your password" })
    .fill(password);

  await page.getByRole("button", { name: "SIGN IN" }).click();

  await page.waitForURL("https://portal.yotta-int.yottacloud.net/home");

  await expect(page.getByText("home").nth(3)).toBeVisible();
});
