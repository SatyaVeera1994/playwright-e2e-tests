import { test, expect } from "@playwright/test";

test("login portal dashboard using globalsetup", async ({ page }) => {
  await page.goto("https://portal.yotta-int.yottacloud.net/home");
  await page.locator('//a[@class="MuiBox-root css-1n9keul"]').click();

  //<a class="MuiBox-root css-1n9keul" href="/"><img class="MuiBox-root css-1xekgry" src="https://public.yotta-int.yottacloud.net/logo-dark.png" alt="yotta"></a>
});
