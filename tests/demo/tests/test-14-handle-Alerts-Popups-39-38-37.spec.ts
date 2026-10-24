import { test, expect } from "@playwright/test";

test("alerts and popups1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.pause();

  //Dailog handler
  page.on("dialog", async (dialog) => {
    await dialog.accept();
    console.log(await dialog.message());
    console.log(await dialog.type());
    expect(await dialog.message()).toBe("I am a JS Alert");
    expect(await dialog.type()).toBe("alert");
  });

  await page.getByRole("button", { name: "Click for JS Alert" }).click();
  // await page.locator('//button{text()="Click for JS Confirm"}').click();

  await page.close();
});

test("alerts and popups2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.pause();

  //Dailog handler
  page.on("dialog", async (dialog) => {
    // await dialog.accept();
    await dialog.dismiss();
    console.log(await dialog.message());
  });

  await page.locator('//button[text()="Click for JS Confirm"]').click();

  await page.close();
});

test.only("alerts and popups3", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.pause();

  //Dailog handler
  page.on("dialog", async (dialog) => {
    // await dialog.accept("satya");
    await dialog.dismiss();
    console.log(dialog.message());
  });

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
  const value = await page.locator("#result").textContent();
  console.log(value);
  // expect(value).toBe("You entered: satya");

  await page.close();
});
// <button onclick="jsPrompt()">Click for JS Prompt</button>
//<p id="result" style="color:green">You entered: satya</p>
