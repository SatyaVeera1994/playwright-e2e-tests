import { test, expect } from "@playwright/test";

test.describe("Rest api Demo", () => {
  const baseURL = "https://drm-kms.yotta-int.yottacloud.net";

  test("should be post the content found", async ({ request }) => {

    const payload = {
      request:
        "eyJjb250ZW50X2lkIjoiZVc5MGRHRmZZMjl1ZEdWdWRGOTNkbDlwYm5aaGJHbGtYM0J5YjNacFpHVnlTV1E9IiwidHJhY2tzIjpbeyJ0eXBlIjoiSEQifSx7InR5cGUiOiJBVURJTyJ9XSwiZHJtX3R5cGVzIjpbIldJREVWSU5FIl19",
      signer: "yotta_pkg_default",
      signature:
        "vlqj2u4NoJuF66/LFQAaEXu0lD2sqk5CaUJXHOHpGSM="
    };

    const postRes = await request.post(
      `${baseURL}/v2/wv/getContentKey`,
      {
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Status:", postRes.status());
    console.log(await postRes.text());

    expect(postRes.ok()).toBeTruthy();
    expect(postRes.status()).toBe(200);
  });
});