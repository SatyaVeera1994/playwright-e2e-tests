import { test, expect } from "@playwright/test";

test("handle dropdown1", async ({ page }) => {
  await page.goto(
    "https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7G2AAI&nc=701ed00000afbo3AAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+exact_701ed00000ag7G2AAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUml6npJAmOyNWlzKDP_jS0i4&gclid=Cj0KCQjwlsfWBhD4ARIsACL7p1Gb7jFU0cjdkrZB1d5h4C3niIGwAwpfy73eW8gT6iO_6TZ5D6TXM68aArNpEALw_wcB",
  );
  // await page.pause();
  await page.locator('select[name="country"]').selectOption("Aland Islands");
  await page.getByLabel("Country/region").selectOption("Albania");
  await page
    .getByRole("combobox", { name: "Country/region" })
    .selectOption("Zimbabwe");
  await page.locator('select[name="country"]').selectOption({ index: 1 });
  await page.locator('select[name="country"]').selectOption({ value: "VU" });

  await page.close();
});

test("handle dropdown2", async ({ page }) => {
  await page.goto(
    "https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7G2AAI&nc=701ed00000afbo3AAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+exact_701ed00000ag7G2AAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUml6npJAmOyNWlzKDP_jS0i4&gclid=Cj0KCQjwlsfWBhD4ARIsACL7p1Gb7jFU0cjdkrZB1d5h4C3niIGwAwpfy73eW8gT6iO_6TZ5D6TXM68aArNpEALw_wcB",
  );
  // await page.pause();
  const countryOptions = await page
    .locator('select[name="country"]')
    .getByRole("option")
    .allTextContents();
  for (const option of countryOptions) {
    console.log(option);
  }

  await page.close();
});
test("handle dropdown3", async ({ page }) => {
  await page.goto(
    "https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7G2AAI&nc=701ed00000afbo3AAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+exact_701ed00000ag7G2AAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUml6npJAmOyNWlzKDP_jS0i4&gclid=Cj0KCQjwlsfWBhD4ARIsACL7p1Gb7jFU0cjdkrZB1d5h4C3niIGwAwpfy73eW8gT6iO_6TZ5D6TXM68aArNpEALw_wcB",
  );
  // await page.pause();
  await page.waitForTimeout(10000);
  const countryOptions = await page
    .locator('select[name="country"]')
    .getByRole("option")
    .allTextContents();
  await expect(countryOptions.length).toBe(245);
  await expect(countryOptions).toContain("India");

  await page.close();
});
test("handle dropdown4", async ({ page }) => {
  await page.goto(
    "https://www.salesforce.com/in/sales/demos/crm-overview/?d=701ed00000ag7G2AAI&nc=701ed00000afbo3AAA&utm_source=google&utm_medium=sem&utm_campaign=apac_in_all-sales-cloud-apm-l2_cross-industry&utm_content=cross-segment_brand+exact_701ed00000ag7G2AAI_english_crm-overview&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUml6npJAmOyNWlzKDP_jS0i4&gclid=Cj0KCQjwlsfWBhD4ARIsACL7p1Gb7jFU0cjdkrZB1d5h4C3niIGwAwpfy73eW8gT6iO_6TZ5D6TXM68aArNpEALw_wcB",
  );
  // await page.pause();
  await page.waitForTimeout(10000);
  const countryOptions = await page
    .locator('select[name="country"]')
    .getByRole("option");

  await expect(countryOptions).toHaveCount(245);

  for (const option of await countryOptions.allTextContents()) {
    console.log(option);
  }

  await page.close();
});

test("handle dropdown5", async ({ page }) => {
  await page.goto("https://getbootstrap.com/docs/5.3/components/dropdowns/");
  await page.pause();
  await page
    .locator('//button[@class="btn btn-secondary dropdown-toggle"]')
    .getByText("Dropdown button")
    .first()
    .click();
  await page.locator('//a[text()="Another action"]').first().click();

  await page.close();
});
