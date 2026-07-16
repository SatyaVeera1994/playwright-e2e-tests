import { test, expect } from "@playwright/test";
import { log } from "../../helpers/logger";
import { LoginPage } from "../../page-objects/cura.healthcare.service/loginpage.cura";

test("login to the cura healthcare service", async ({ page }, testInfo) => {
  //envConfig

  const envConfig = testInfo.project.use as any;
  //create an project
  const loginpage = new LoginPage(page);

  await loginpage.loginCura(
    envConfig.appUrl,
    process.env.TEST_USER_NAME,
    process.env.TEST_USER_PASSWORD,
  );
});
