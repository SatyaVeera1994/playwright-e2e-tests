import { test, expect, Browser, chromium } from "@playwright/test";

test("handle multiplle windows", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto("https://www.amazon.in/");

  await page2.goto("https://www.bing.com");

  await page1.close();
  await context.close();
  await browser.close();
});

test.only("handle multiplle windows2", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto("https://www.hdfc.com/");

  const pagePromise = context.waitForEvent("page");
  await page1.getByText("Blogs").first().click();
  const newpage = await pagePromise;
  await newpage.getByRole("button", { name: "CONTINUE" }).click();
  //<button class="btn btn-default disclaimer-btn" id="close-disclaimer" type="button"> CONTINUE </button>
  //<a href="/blog" target="_blank">Blogs</a>
  await page1.close();
  await context.close();
  await browser.close();
});
