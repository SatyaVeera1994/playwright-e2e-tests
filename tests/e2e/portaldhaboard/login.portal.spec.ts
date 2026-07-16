import { test, expect } from "@playwright/test";
import { log } from "../../helpers/logger";
import { LoginPortalDashboard } from "../../page-objects/portaldhaboard/login.portal";

test("login the Portal Dashboard", async ({ page }, testInfo) => {
  const envConfig = testInfo.project.use as any;
  //create an project
  const login = new LoginPortalDashboard(page);

  await login.loginPortal(
    envConfig.portalUrl,
    process.env.Portal_Email!,
    process.env.Portal_USER_PASSWORD!
  );
  await expect(login.homeLocator).toBeVisible({
    timeout: 30000,});
  });

test.only("login to portal",async({page})=>{

 const login= new LoginPortalDashboard(page)

 await login.loginPortal("https://portal.yotta-int.yottacloud.net/login","sathya@yotta.work","S@tya1994");
 await expect(login.homeLocator).toBeVisible({timeout:3000});

});
