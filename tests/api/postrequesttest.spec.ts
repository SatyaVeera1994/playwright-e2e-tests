/* 
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://drm-kms.yotta-int.yottacloud.net/v2/wv/getContentKey',
  'headers': {
  },
  body: '{ \n    "request": "eyJjb250ZW50X2lkIjoiZVc5MGRHRmZZMjl1ZEdWdWRGOTNkbDlwYm5aaGJHbGtYM0J5YjNacFpHVnlTV1E9IiwidHJhY2tzIjpbeyJ0eXBlIjoiSEQifSx7InR5cGUiOiJBVURJTyJ9XSwiZHJtX3R5cGVzIjpbIldJREVWSU5FIl19",\n    "signer": "yotta_pkg_default",\n    "signature": "vlqj2u4NoJuF66/LFQAaEXu0lD2sqk5CaUJXHOHpGSM="\n }'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


postman request POST 'https://drm-kms.yotta-int.yottacloud.net/v2/wv/getContentKey' \
  --body '{ 
    "request": "eyJjb250ZW50X2lkIjoiZVc5MGRHRmZZMjl1ZEdWdWRGOTNkbDlwYm5aaGJHbGtYM0J5YjNacFpHVnlTV1E9IiwidHJhY2tzIjpbeyJ0eXBlIjoiSEQifSx7InR5cGUiOiJBVURJTyJ9XSwiZHJtX3R5cGVzIjpbIldJREVWSU5FIl19",
    "signer": "yotta_pkg_default",
    "signature": "vlqj2u4NoJuF66/LFQAaEXu0lD2sqk5CaUJXHOHpGSM="
 }'


*/

import { test, expect, request } from "@playwright/test";

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
    
    const postres = await request.post(`${baseURL}/v2/wv/getContentKey`, {
        data:payload
        });
        expect(postres.status()).toBe(200);
  });
});
