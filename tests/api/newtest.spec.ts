import { test, expect, request } from "@playwright/test";

test.describe("REST API Demo", () => {
  const baseURL = "https://reqres.in/api";

  test("Should get a list of students", async ({ request }) => {
    const listRes = await request.get(`${baseURL}/users?page=2`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    expect(listRes.status()).toBe(200);

    // Get the data
    const listData = await listRes.json();
    console.log("User List (Page 2):", listData);
  });
});
