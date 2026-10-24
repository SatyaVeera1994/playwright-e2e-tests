import { test, expect } from "@playwright/test";

test("handle mouse clicks on Emirates booking page", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick",
  );
  // await page.pause();
  const frame1 = await page.frameLocator("#iframeResult");
  await frame1.getByRole("button", { name: "Double-click me" }).dblclick();
  await expect(frame1.getByText("Hello World")).toBeVisible();

  await page.close();
});

test("handle mouse clicks", async ({ page }) => {
  await page.goto("https://www.emirates.com/in/english/book/");
  await page.pause();
  await page.getByRole("button", { name: "Accept" }).click();
  await page.getByText("About booking online").first().hover();

  await page.close();
});
// <button id="onetrust-accept-btn-handler">Accept</button>
//<iframe frameborder="0" id="iframeResult" name="iframeResult" allowfullscreen="true"></iframe>
// <button ondblclick="myFunction()">Double-click me</button>
// <p id="demo">Hello World</p>
// Generic click
// await page.getByRole('button').click();

// // Double click
// await page.getByText('Item').dblclick();

// // Right click
// await page.getByText('Item').click({ button: 'right' });

// // Shift + click
// await page.getByText('Item').click({ modifiers: ['Shift'] });

// // Ctrl + click on Windows and Linux
// // Meta + click on macOS
// await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });

// // Hover over element
// await page.getByText('Item').hover();

// // Click the top left corner
// await page.getByText('Item').click({ position: { x: 0, y: 0 } });
