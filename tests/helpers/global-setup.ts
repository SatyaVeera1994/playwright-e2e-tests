import { type FullConfig } from '@playwright/test';
import * as fs from "fs";
import * as path from "path";


export default async function globalSetup(config: FullConfig){
  if (process.env.RUNNER?.toUpperCase()==="LOCAL"){
 console.log(`[INFO]:Deleting allure results folder before test run`);
    
//delete allure results
    const allureresultspath=path.resolve(process.cwd(),'allure-results');
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
//   if (platform === "yotta-int") {
//     email = "yotta-int.admin@yotta.work";
//     password = "YH6GPHv@/TCPM";
//   } else if (platform === "priya-qa") {
//     email = "priya-qa.admin@yotta.work";
//     password = "5$YzH2Hl252Ut";
//   } else if (platform === "yotta-qa2") {
//     email = "yotta-qa2.admin@yotta.work";
//     password = "/SG6jGEDUE52K";
//   } else if (platform === "dvb-i") {
//     email = "dvb-i.admin@yotta.work";
//     password = "5J@6ciRuIYY7T";
//   } else if (platform === "yotta-dev") {
//     email = "dev2-user2@yotta.work";
//     password = "Umar@9501";
//   } else if (platform === "ops") {
//     email = "yotta-ops.admin@yotta.work";
//     password = "6$0lo$F$hLqbH";
//   } else if (platform === "a3sa-test") {
//     email = "a3fa-test.admin@yottamedialabs.com";
//     password = "V9z/hQ4aUw2Dt";
//     tld = "tv";
//   } else if (platform === "a3sa") {
//     email = "a3sa.admin@yottamedialabs.com";
//     password = "Y2bekSn5O/0hQ";
//     tld = "tv";
//   }

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










