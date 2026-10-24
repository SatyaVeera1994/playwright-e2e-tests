import { test, expect } from "@playwright/test";

test("handle upload file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.pause();
  // await page
  //   .getByRole("button", { name: "Choose File" })
  //   .setInputFiles("tests/image.png");

  await page.locator("#file-upload").setInputFiles("tests/image.png");
  await page.getByRole("button", { name: "Upload" }).click();

  await page.close();
});

test("handle upload file1 and remove the file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.pause();
  // await page
  //   .getByRole("button", { name: "Choose File" })
  //   .setInputFiles("tests/image.png");

  await page.locator("#file-upload").setInputFiles("tests/image.png");
  await page.locator("#file-upload").setInputFiles([]);
  await page.getByRole("button", { name: "Upload" }).click();

  await page.close();
});

test.only("upload multipe files", async ({ page }) => {
  await page.goto("https://www.file.i2o/");
  // await page.pause();
  await page
    .getByText("Upload Files")
    .setInputFiles(["tests/image.png", "tests/image1.png"]);
  await page.close();
});
