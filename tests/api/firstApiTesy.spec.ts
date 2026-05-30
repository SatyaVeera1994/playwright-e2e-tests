import { test, expect, request } from "@playwright/test";
test.describe("Rest Api", () => {
  const baseURL = "https://reqres.in/api";
  test("should get users list", async ({ request }) => {
    const listRes = await request.get(`${baseURL}/users?page=2`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    expect(listRes.status()).toBe(200);
    const listData = await listRes.json();
    console.log("User List (Page 2):", listData);
  });
});
