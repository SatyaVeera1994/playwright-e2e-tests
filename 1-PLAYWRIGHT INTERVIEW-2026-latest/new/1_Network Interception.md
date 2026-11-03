https://chatgpt.com/c/6ac6157b-ef50-83ee-9d4e-f9ef46177c15
https://playwright.dev/docs/network?utm_source=chatgpt.com
https://playwright.dev/docs/mock?utm_source=chatgpt.com

# Q4. How does Network Interception work in Playwright?

## Intercept - to stop or catch somebody/something that is moving from one place to another.

Network Interception in Playwright means capturing and controlling HTTP network requests and responses made by your application.
This is especially useful for API mocking, negative testing, modifying API responses, and testing UI behavior without depending on the real backend.I use page.route() to intercept network requests
page.route()
Whenever a request is made, intercept it.
route.fulfill(); = Don't call the real server. Return my own response
route.continue() = Let the original request go to the server.
route.abort(); = Sometimes we don't want a request to go to the server at all.
✅ page.route() → Intercepts Network Requests
✅ route.continue() → Send Original Request
✅ route.fulfill() → Return Mock Response
✅ route.abort() → Block Request
✅ route.fetch() → Modify Original Response
✅ Used for API Mocking and Error Testing

## Q: What is the difference between API mocking and network interception?

“Network interception means capturing and controlling network requests and responses. API mocking means returning predefined responses instead of depending on the real backend. In Playwright, I use page.route() for both. I use route.continue() to send a request to the actual server and route.fulfill() to return mock data.”

## What is API Mocking in Playwright?

API mocking is a technique used to provide a predefined fake API response without calling the actual backend server.

One more point: Network traffic ni observe only cheyyalante page.on("request") and page.on("response") events kuda use cheyyachu.

## import { test, expect } from "@playwright/test";

test("network interception", async ({ page }) => {

await page.route("\*\*/api/v1/fruits", async (route) => {

    await route.fulfill({
      status: 200,
      contentType: "application/json",

      body: JSON.stringify([
        {
          name: "Strawberry",
          id: 3,
        },
        {
          name: "Banana",
          id: 1,
        },
      ]),
    });

});

await page.goto("https://demo.playwright.dev/api-mocking/");

await expect(page.getByText("Strawberry")).toBeVisible();
await expect(page.getByText("Banana")).toBeVisible();

## });

ఇంటర్‌సెప్ట్ (Intercept): ఒక ప్రదేశం నుండి మరొక ప్రదేశానికి వెళ్తున్న ఎవరినైనా లేదా దేన్నైనా మధ్యలోనే ఆపడం లేదా పట్టుకోవడం.
ప్లేరైట్ (Playwright)లో నెట్‌వర్క్ ఇంటర్‌సెప్షన్ అంటే మీ అప్లికేషన్ చేసే HTTP నెట్‌వర్క్ రిక్వెస్ట్‌లను (requests) మరియు రెస్పాన్స్‌లను (responses) క్యాప్చర్ చేయడం మరియు వాటిని మన నియంత్రణలోకి తెచ్చుకోవడం.
ఇది ముఖ్యంగా API మాకింగ్ (mocking), నెగటివ్ టెస్టింగ్, API రెస్పాన్స్‌లను మార్చడం మరియు అసలైన బ్యాకెండ్‌పై ఆధారపడకుండా UI పనితీరును పరీక్షించడానికి ఉపయోగపడుతుంది.
page.route()
ఏదైనా రిక్వెస్ట్ (request) వచ్చినప్పుడు, దాన్ని మధ్యలోనే అడ్డుకోండి (intercept).
• route.fulfill(); = అసలైన సర్వర్‌ను పిలవద్దు. నా స్వంత రెస్పాన్స్‌ను తిరిగి పంపించు.
• route.continue(); = అసలైన రిక్వెస్ట్‌ను సర్వర్‌కు వెళ్లనివ్వు.
• route.abort(); = కొన్నిసార్లు రిక్వెస్ట్ అస్సలు సర్వర్‌కు వెళ్లడం మనకు ఇష్టం ఉండదు (అలాంటి సమయాల్లో దీన్ని వాడతాం).
