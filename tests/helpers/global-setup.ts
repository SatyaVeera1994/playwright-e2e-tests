import { type FullConfig } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default async function globalSetup(config: FullConfig) {
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(`[INFO]:Deleting allure results folder before test run`);

    //delete allure results
    const allureresultspath = path.resolve(process.cwd(), "allure-results");
    console.log(allureresultspath);
    if (fs.existsSync(allureresultspath)) {
      fs.rmSync(allureresultspath, { recursive: true, force: true });
    }
  }
  console.log(`[INFO]:Global setup completed`);
}

// const { chromium } = require("@playwright/test");

// async function globalSetup() {
//   const browser = await chromium.launch({ headless: true });
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   const platform = process.env.PLATFORM;
//   let tld = "net";

//   let email;
//   let password;
//   if (platform === "qa") {
//     email = qa1.work";
//     password = "jjnjnj";
//   } else if (platform === "qa2") {
//     email = "qa2.admin@yotta.work";
//     password = "jijijijit";
//

//   try {
//     await page.goto(`https://portal.${platform}.yottacloud.${tld}/login`, {
//       timeout: 60000,
//     });
//     await page.getByLabel("Enter your email").fill(email);
//     await page.getByLabel("Enter your password").fill(password);
//     await page.getByRole("button", { name: "SIGN IN" }).click();

//     // Wait until the home page loads successfully
//     await page.waitForURL(`https://portal.${platform}.yottacloud.${tld}/home`, {
//       timeout: 60000,
//     });
//     await page.context().storageState({ path: "./LoginAuth.json" });
//   } catch (error) {
//     console.error("Error during global setup:", error);
//   } finally {
//     await browser.close();
//   }
// }

// module.exports = globalSetup;
