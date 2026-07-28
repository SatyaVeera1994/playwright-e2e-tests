import { test, expect } from "@playwright/test";

test("should load home page with currect title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator('//h1')).toHaveText("CURA Healthcare Service");
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  
});
test("should demo config file", async ({ page }, testinfo) => {
  console.log(`config at run time : ${JSON.stringify(testinfo.config)}`);
  
console.log(`'Base URL:', testInfo.config.use.baseURL`);

console.log(`'Retries:', testInfo.config.retries`);

console.log(`'Project:', testInfo.project.name`);

console.log(`'OutputDir:', testInfo.config.outputDir`);

});

test.only("should demo fixture", async ({ page,browserName }, testinfo) => {
  console.log(`browserName at run time; ${browserName}`);
 
 
});