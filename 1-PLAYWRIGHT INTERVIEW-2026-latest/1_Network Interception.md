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
Yes — this is a **network mocking** question. In Playwright, you can intercept the payment API and return a **500 response** using `page.route()` + `route.fulfill()`.

Sure 👍 Let's learn the **4 important Playwright network methods** with simple real-time examples.

You already have `page.route()` + `route.fulfill()`. Below are examples for **`continue()`** and **`abort()`**, plus complete examples for all four.

---

## 1. `page.route()` — Intercept request

Think:

> **“API request ni middle lo catch cheyyadam.”**

```ts
import { test } from "@playwright/test";

test("Intercept network request", async ({ page }) => {
  await page.route("**/api/v1/fruits", async (route) => {
    console.log("Request intercepted!");

    await route.continue();
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");
});
```

### What happens?

```text
Browser
   ↓
GET /api/v1/fruits
   ↓
page.route()
   ↓
Intercept
   ↓
route.continue()
   ↓
Real API
```

`route.continue()` means:

> "Nenu request ni intercept chesanu, but modify cheyyanu. Original request ni API ki pampinchu."

---

# 2. `route.fulfill()` — Own response ivvadam

This is the one you already wrote.

```ts
import { test, expect } from "@playwright/test";

test("Mock API response", async ({ page }) => {
  await page.route("**/api/v1/fruits", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: 101,
          name: "Apple",
        },
        {
          id: 102,
          name: "Mango",
        },
      ]),
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  await expect(page.getByText("Apple")).toBeVisible();
  await expect(page.getByText("Mango")).toBeVisible();
});
```

### Flow

```text
Browser
   ↓
API request
   ↓
page.route()
   ↓
route.fulfill()
   ↓
❌ Real API not called
   ↓
✅ Mock response returned
```

### Telugu

**`fulfill()` = "Real API response badulu naa response teesuko."**

---

# 3. `route.continue()` — Real API ki request pampadam

Suppose you want to monitor a request but don't want to change anything.

```ts
import { test } from "@playwright/test";

test("Continue original request", async ({ page }) => {
  await page.route("**/api/v1/fruits", async (route) => {
    console.log("API URL:", route.request().url());
    console.log("Method:", route.request().method());

    await route.continue();
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");
});
```

### Flow

```text
Request
   ↓
route()
   ↓
continue()
   ↓
Real API
   ↓
Real response
```

### Interview answer

> "`route.continue()` allows the intercepted request to continue to the actual server without mocking the response."

### Telugu

> "`route.continue()` use cheste intercepted request ni actual server/API ki continue chestam."

---

# 4. `route.abort()` — Request block cheyyadam

Suppose your application loads images, but you don't want images during your test.

We can block them.

```ts
import { test } from "@playwright/test";

test("Block image requests", async ({ page }) => {
  await page.route("**/*.{png,jpg,jpeg,svg}", async (route) => {
    console.log("Blocking:", route.request().url());

    await route.abort();
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");
});
```

### Flow

```text
Browser
   ↓
Image request
   ↓
page.route()
   ↓
route.abort()
   ↓
❌ Request blocked
```

### Telugu

**`abort()` = "Ee request server ki vellakudadhu."**

---

# 5. Very useful real-time example — block analytics

In real projects, applications may send requests to:

```text
Google Analytics
Facebook tracking
Adobe Analytics
Third-party tracking
```

During automation, we may want to block them.

```ts
import { test } from "@playwright/test";

test("Block analytics request", async ({ page }) => {
  await page.route("**/analytics/**", async (route) => {
    console.log("Analytics request blocked");

    await route.abort();
  });

  await page.goto("https://example.com");
});
```

---

# 6. `continue()` + modify request

This is **very important for interviews**.

You can intercept a request and modify its headers.

```ts
import { test } from "@playwright/test";

test("Modify request headers", async ({ page }) => {
  await page.route("**/api/**", async (route) => {
    const headers = {
      ...route.request().headers(),
      "x-test-environment": "automation",
    };

    await route.continue({
      headers,
    });
  });

  await page.goto("https://example.com");
});
```

### What happened?

Original request:

```text
GET /api/users
```

We add:

```text
x-test-environment: automation
```

Then:

```text
route.continue()
```

sends it to the real API.

---

# 7. `continue()` + modify URL

You can also change the request URL.

```ts
await page.route("**/api/users", async (route) => {
  await route.continue({
    url: "https://example.com/api/test-users",
  });
});
```

So:

```text
Application
     ↓
/api/users
     ↓
Playwright intercepts
     ↓
Changes URL
     ↓
/api/test-users
```

---

# 🧠 Easy way to remember

| Method             | Simple meaning   | Real-time usage |
| ------------------ | ---------------- | --------------- |
| `page.route()`     | Catch request    | Intercept API   |
| `route.fulfill()`  | Give my response | Mock API        |
| `route.continue()` | Let it go        | Real API        |
| `route.abort()`    | Stop it          | Block request   |

### One-line memory trick

```text
route()
   ↓
FULFILL  → "Naa response teesuko"
CONTINUE → "Real API ki vellipo"
ABORT    → "Aagipo / block"
```

---

## ⭐ Interview question

**Q: What is network interception in Playwright?**

**English:**

> Network interception in Playwright allows us to intercept browser network requests and either mock the response, modify the request, allow it to continue to the server, or block it completely.

**Telugu:**

> Playwright network interception dwara browser requests ni intercept chesi, response ni mock cheyyachu, request ni modify cheyyachu, actual server ki continue cheyyachu, leka request ni completely block cheyyachu.

### Most important code to remember

```ts
await page.route("**/api/users", async (route) => {
  // Mock
  await route.fulfill({
    status: 200,
    body: JSON.stringify({ message: "Mock response" }),
  });

  // OR real API
  // await route.continue();

  // OR block
  // await route.abort();
});
```

**For your Playwright interview, remember these three words:**  
**Mock → `fulfill()` | Real → `continue()` | Block → `abort()`**.

### Interview answer

> "For a payment failure scenario where the backend is expected to return HTTP 500, I would mock the payment API instead of depending on the real backend to produce an error. In Playwright, I can use `page.route()` to intercept the payment endpoint and `route.fulfill()` to return a 500 response with a mocked error payload."

### Example

```ts
import { test, expect } from "@playwright/test";

test("Payment API returns 500 error", async ({ page }) => {
  await page.route("**/api/payment", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({
        error: "Internal Server Error",
        message: "Payment service is temporarily unavailable",
      }),
    });
  });

  await page.goto("https://example.com/checkout");

  await page.getByRole("button", { name: "Pay Now" }).click();

  await expect(
    page.getByText("Payment service is temporarily unavailable"),
  ).toBeVisible();
});
```

### Telugu lo

Flow:

```text
User clicks "Pay Now"
        ↓
POST /api/payment
        ↓
Playwright intercepts
        ↓
route.fulfill()
        ↓
Status = 500
        ↓
Mock error response
        ↓
UI error message verify
```

So real payment backend ni call cheyyakunda, maname:

```ts
status: 500;
```

and:

```json
{
  "error": "Internal Server Error"
}
```

return chestunnam.

### If you want to modify the real response

Sometimes you don't want to completely replace the backend response. You can first get the original response and modify it:

```ts
await page.route("**/api/payment", async (route) => {
  const response = await route.fetch();

  await route.fulfill({
    response,
    status: 500,
    body: JSON.stringify({
      error: "Internal Server Error",
    }),
  });
});
```

### ⭐ Strong interview distinction

**Mocking:**

> We completely provide our own response using `route.fulfill()`.

**Stubbing/intercepting:**

> We intercept the request and control or modify how it behaves. Depending on the requirement, we can use `route.fulfill()`, `route.continue()`, or `route.fetch()` + `route.fulfill()`.

### Easy memory

```text
500 error scenario
       ↓
page.route()
       ↓
route.fulfill()
       ↓
status: 500
       ↓
Verify UI error handling
```

This is a very good **negative API testing + UI integration** example to give in a Playwright SDET interview.

## 2

Correct! 😊 Ippudu `route.continue()` ni real-time example tho easy ga ardham chesukundam.

## **Real-time example: Fruits website 🍎**

Manam oka website lo fruits list test chestunnam anukondi.

Website open chesinappudu backend API ki request pampistundi:

`GET /api/v1/fruits`

Backend response ila untundi:

```
[
  { "id": 1, "name": "Apple" },
  { "id": 2, "name": "Banana" }
]
```

Manam test chesetappudu **request ni observe cheyyali, kani real backend nunchi data ravali**. Appudu `route.continue()` use chestam.

## **Code**

```
import { test, expect } from "@playwright/test";

test("Check fruits API request", async ({ page }) => {

  await page.route("**/api/v1/fruits", async (route) => {
    console.log("Fruits API request intercepted!");

    await route.continue();
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  await expect(page.getByText("Apple")).toBeVisible();
});
```

### **Ee code lo em jaruguthundi?**

**1. Website open chestam**

**2.&#x20;**`page.route()`**&#x20;request ni catch chestundi**

**3.&#x20;**`route.continue()`**&#x20;real backend ki pampistundi**

**4. Real response tho website fruits display chestundi**

`console.log()` terminal lo request intercept ayindani chupistundi. `expect()` page lo Apple kanipistundo verify chestundi.

_Note:_ Ee assertion actual page lo Apple display ayithe pass avuthundi. Website response lo Apple lekapothe test fail avuthundi.

## **Mee real project lo ekkada use chestaru?**

Suppose mee Widevine application lo credentials API call avuthundi.

- Request ni intercept chesi observe cheyyali.
- Request ni modify cheyyakunda real backend ki pampali.
- Application actual response ni ela handle chestundo test cheyyali.

Appudu `route.continue()` use cheyyachu.

**Interview lo one-line answer:**

“I use `route.continue()` when I want to intercept a network request for inspection or monitoring and then allow it to reach the real backend without mocking the response.”

**Gurthupettukondi:**

- `route.continue()` → Real backend ki pampu.
- `route.fulfill()` → Maname mock response ivvu.
- `route.abort()` → Request ni block cheyyi.
