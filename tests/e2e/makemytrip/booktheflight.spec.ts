import {expect,test} from '@playwright/test';
import {MakeMyTrip} from '../../page-objects/makemytrip/makemytrip'

test('MMT Flight Search', async ({ page }) => {
  const mmt = new MakeMyTrip(page);

  await page.goto('https://www.makemytrip.com/flights/');

  await mmt.navigateTo("https://www.makemytrip.com/flights/");
  await mmt.closeLoginPopup()
  await mmt.selectFromCity('Delhi Airport India');
});