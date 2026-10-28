import { test, expect } from "@playwright/test";

test("handle frames1", async ({ page }) => {
  await page.goto("https://jqueryui.com/tooltip/");

  await page.pause();
  const frame1 = page.frameLocator(".demo-frame");
  await frame1.locator("#age").fill("25");

  await page.close();
});

test("handle frames2", async ({ page }) => {
  await page.goto("https://jqueryui.com/tooltip/");

  await page.pause();
  const frame1 = await page.frame({
    url: "https://jqueryui.com/resources/demos/tooltip/default.html",
  });
  await frame1!.locator("#age").fill("25");

  await page.close();
});

test.only("handle multipleframes3", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // await page.pause();
  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3",
  });
  const childframe = await frame3!.childFrames();
  await childframe.at(0)?.locator("#i9").click();
  await childframe
    .at(0)
    ?.locator("label")
    .filter({ hasText: "Other:" })
    .getByRole("radio")
    .click();
  await childframe
    .at(0)
    ?.getByRole("radio", { name: "Hi, I am the UI.Vision IDE" })
    .click();
  await page.close();
});
