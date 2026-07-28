import { test, expect } from "@playwright/test";
import { LoginPortalDashboard } from "../../page-objects/portaldhaboard/login.portal";
import { AddPackager } from "../../page-objects/portaldhaboard/key_management_system/packager_access/add_packager_page";
import { packager } from "../../../data/data/packgers";
test("Add Multiple Automation Packager Access ", async ({ page }) => {
  const login = new LoginPortalDashboard(page);
  const addpackger = new AddPackager(page);

  await login.loginPortal(
    "https://portal.yotta-int.yottacloud.net/login",
    "sathya@yotta.work",
    "S@tya1994",
  );
  await expect(login.homeLocator).toBeVisible({ timeout: 3000 });

  await addpackger.addPackgerdata(packager[0]);
});
