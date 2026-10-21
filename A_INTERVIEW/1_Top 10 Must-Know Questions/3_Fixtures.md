Awesome! Let's continue with **Q3**.

# Q3. What are Playwright Fixtures and why are they better than beforeEach()?

Playwright fixtures provide reusable setup and dependencies to tests. Playwright has built-in fixtures like page, context, and request, and we can create custom fixtures using base.extend(). Fixtures are useful for common setup such as authentication, page objects, and API clients. They also support different scopes like test and worker.
#
# import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    await page.goto('https://example.com/login');

    await page.fill('#username', 'admin');

    await page.fill('#password', 'admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await use(page);
  }
});

export { expect };

  # dashboard.spec.ts
  
import { test, expect } from './fixtures';

test('Dashboard Test', async ({ loggedInPage }) => {

  await expect(
    loggedInPage.getByText('Dashboard')
  ).toBeVisible();

});
---

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

1. What is a Fixture?
   English

A fixture is a reusable setup provided to a Playwright test. It creates and manages the resources required by the test.

Telugu

Fixture అంటే test కి కావాల్సిన setup/resources ని automatically create చేసి provide చేసే Playwright feature.

For UI testing, common built-in fixtures are:

page
context
browser
browserName
request

Here is a **simple and interview-friendly** version that is easy to remember.

### English Interview Answer

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

> **Playwright Fixtures are used to provide reusable resources to test cases. They automatically set up the required objects before the test starts and clean them up after the test finishes. This helps reduce duplicate code and makes the framework easier to maintain.**
>
> **In my project, we created custom fixtures using `base.extend()` to store values like `appUrl`, `portalUrl`, and `envName`. We also used fixtures to initialize page objects. This allowed us to use the same test scripts across different environments without changing the test code, making our framework reusable and maintainable.**

### Very Short Answer (30 seconds)

> **Fixtures in Playwright are used to share common setup across tests. They automatically create and clean up resources. In my project, we used custom fixtures with `base.extend()` for URLs, environment configuration, and page objects, which reduced code duplication and improved reusability.**

### Telugu Meaning

**Fixtures అంటే:**

- Common setup ను ఒకసారి create చేయడం.
- అన్ని test cases లో reuse చేయడం.
- Duplicate code తగ్గించడం.
- Framework ను clean & maintainable గా ఉంచడం.

**Real-Time Example:**

> **మా Project లో DEV, QA, PROD environments ఉన్నాయి. ప్రతి test లో URL ని hardcode చేయకుండా, `base.extend()` ద్వారా `appUrl` మరియు `envName` fixtures create చేశాం. కాబట్టి environment మార్చాలంటే `playwright.config.ts` లో మాత్రమే URL మార్చితే సరిపోతుంది. అన్ని test cases అదే code తో run అవుతాయి.**

This is the level of explanation most interviewers expect for a Playwright Automation Engineer role.

## 4. English Interview Answer

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

Instead of writing repetitive setup code inside `beforeEach()`, fixtures allow us to declare only the resources required by a test. Playwright then initializes those resources before the test starts and disposes of them after execution.

Fixtures are composable, meaning one fixture can depend on another. For example, an authenticated page fixture can extend the page fixture, which itself depends on the browser context.

Playwright also supports worker-scoped fixtures, where expensive operations such as authentication are executed only once per worker instead of once per test. This significantly improves execution speed.

In my project, we created custom fixtures for authenticated users and page objects. Tests simply requested the required fixture, which made the framework more modular, reusable, and easier to maintain compared to using `beforeEach()`.

---### ✅ English Answer

“Fixtures provide dependency injection and automatically handle setup and teardown, making tests reusable.”

### One-Line Summary

**Fixtures automatically create, manage, and clean up test dependencies, making tests cleaner, reusable, and easier to maintain than beforeEach().**

## 5. Real-Time Project Example

In my Playwright automation framework, every test required user authentication before validating application functionality.

Initially, we used `beforeEach()` to perform login before every test. This increased execution time because the application logged in repeatedly.

We later implemented a custom authenticated fixture. The fixture handled browser creation, login, and page initialization automatically.

All test files simply requested the authenticated fixture, allowing us to remove duplicate setup code. This reduced execution time, improved code readability, and made the framework easier to maintain.

## 1. Telugu Concept

### Fixtures అంటే ఏమిటి?

Playwright లో **Fixtures** అనేవి **Dependency Injection (DI) System**.

అంటే Test కి ఏ Objects లేదా Resources అవసరమో వాటిని Playwright Automatically Create చేసి, Test పూర్తయిన తర్వాత Automatically Cleanup చేస్తుంది.

Simple గా చెప్పాలంటే,

> **Fixture అంటే Test కి అవసరమైన Setup మరియు Cleanup ని Automatically Handle చేసే Mechanism.**

---

### beforeEach() ఎలా పనిచేస్తుంది?

Suppose ప్రతి Test ముందు Login చేయాలి.

Selenium లేదా Jest లో ఇలా రాస్తాం.

```typescript
test.beforeEach(async ({ page }) => {
  await page.goto("https://example.com");
  await page.fill("#username", "admin");
  await page.fill("#password", "admin123");
  await page.click("#login");
});
```

ప్రతి Test ముందు ఇదే Code Run అవుతుంది.

100 Tests ఉంటే Login 100 సార్లు జరుగుతుంది.

దీనివల్ల

- Duplicate Code
- Slow Execution
- Difficult Maintenance

---

### Fixtures ఎలా పనిచేస్తాయి?

Fixtures లో ఒకసారి Setup చేస్తాం.

ఏ Test కి అవసరమో అది మాత్రమే Declare చేస్తాం.

```typescript
test("Dashboard Test", async ({ authenticatedPage }) => {});
```

Playwright

- Browser Create చేస్తుంది
- Context Create చేస్తుంది
- Login చేస్తుంది
- Dashboard Open చేస్తుంది

అన్నీ Automatically చేస్తుంది.

---

### Fixture Hierarchy

```text
Browser
    │
    ▼
Context
    │
    ▼
Page
    │
    ▼
Authenticated Page
    │
    ▼
Dashboard Page
```

ప్రతి Fixture ఇంకో Fixture మీద ఆధారపడవచ్చు.

దీనిని **Composable Fixtures** అంటారు.

---

### Worker Fixture

Worker Fixture ఒక Worker కి ఒక్కసారి మాత్రమే Run అవుతుంది.

ఉదాహరణకు

100 Tests

↓

1 Login

↓

100 Tests Execute

Login ఒక్కసారి మాత్రమే అవుతుంది.

Execution చాలా Fast అవుతుంది.

---

## 2. Easy to Remember

### Key Points

✅ Fixture = Dependency Injection

✅ Automatic Setup

✅ Automatic Cleanup

✅ Reusable

✅ Less Duplicate Code

✅ Faster Execution using Worker Fixtures

### One-Line Summary

**Fixtures automatically create, manage, and clean up test dependencies, making tests cleaner, reusable, and easier to maintain than beforeEach().**

---

## 3. Telugu Interview Answer

Playwright లో Fixtures అనేవి Dependency Injection System.

మనం Test కి అవసరమైన Browser, Context, Page లేదా Authenticated Session వంటి Resources ను Manually Create చేయాల్సిన అవసరం లేదు.

Fixture ద్వారా Playwright వాటిని Automatically Create చేసి Test పూర్తయిన తర్వాత Automatically Cleanup చేస్తుంది.

beforeEach() ఉపయోగిస్తే ప్రతి Test ముందు అదే Setup Code Execute అవుతుంది. దీని వల్ల Duplicate Code పెరుగుతుంది మరియు Maintenance కష్టమవుతుంది.

Fixtures Composable కావడం వల్ల ఒక Fixture ఇంకో Fixture మీద ఆధారపడవచ్చు.

మా Project లో మేము Authenticated Page Fixture Create చేశాం. Login ఒక్కసారి మాత్రమే జరిగేది. అన్ని Tests అదే Authenticated Session ను ఉపయోగించేవి. దీని వల్ల Execution Time తగ్గింది మరియు Framework చాలా Clean గా మారింది.

---

## 4. English Interview Answer

Playwright Fixtures are a built-in dependency injection mechanism that automatically creates, manages, and cleans up test dependencies.

Instead of writing repetitive setup code inside `beforeEach()`, fixtures allow us to declare only the resources required by a test. Playwright then initializes those resources before the test starts and disposes of them after execution.

Fixtures are composable, meaning one fixture can depend on another. For example, an authenticated page fixture can extend the page fixture, which itself depends on the browser context.

Playwright also supports worker-scoped fixtures, where expensive operations such as authentication are executed only once per worker instead of once per test. This significantly improves execution speed.

In my project, we created custom fixtures for authenticated users and page objects. Tests simply requested the required fixture, which made the framework more modular, reusable, and easier to maintain compared to using `beforeEach()`.

---

## 5. Real-Time Project Example

In my Playwright automation framework, every test required user authentication before validating application functionality.

Initially, we used `beforeEach()` to perform login before every test. This increased execution time because the application logged in repeatedly.

We later implemented a custom authenticated fixture. The fixture handled browser creation, login, and page initialization automatically.

All test files simply requested the authenticated fixture, allowing us to remove duplicate setup code. This reduced execution time, improved code readability, and made the framework easier to maintain.

---

## 6. Code Example (TypeScript)

### Custom Fixture

```typescript
import { test as base } from "@playwright/test";

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    await page.goto("https://example.com/login");

    await page.fill("#username", "admin");

    await page.fill("#password", "admin123");

    await page.click("#login");

    await use(page);
  },
});
```

### Using Fixture in Test

```typescript
import { test, expect } from "../fixtures/auth.fixture";

test("Dashboard Test", async ({ authenticatedPage }) => {
  await expect(authenticatedPage.locator("h1")).toHaveText("Dashboard");
});
```

---

c.

# Custom Fixtures in Playwright — UI

## 1. Why do we need Custom Fixtures?

Suppose you have **50 tests** and every test needs to login.

Without a fixture:

```ts
test("Test 1", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#username", "admin");
  await page.fill("#password", "password");
  await page.click("#login");

  // test
});
```

You would repeat the login code in many tests.

With a custom fixture:

```ts
test("Test 1", async ({ loggedInPage }) => {
  // already logged in
});
```

### Telugu

**50 tests కి login అవసరం ఉంటే, ప్రతి test లో login code రాయడం unnecessary.**

Custom fixture ఒకసారి login setup చేసి, test కి **ready-to-use page** ఇస్తుంది.

---

# 2. Simple Custom Fixture

First import:

```ts
import { test as base, expect } from "@playwright/test";
```

Define our fixture type:

```ts
type MyFixtures = {
  loggedInPage: Page;
};
```

Then create fixture:

```ts
export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto("/login");

    await page.fill("#username", "admin");

    await page.fill("#password", "password");

    await page.click("#login");

    await use(page);
  },
});
```

Now test:

```ts
test("Dashboard Test", async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText("Dashboard")).toBeVisible();
});
```

---

# 3. Understand this line carefully

```ts
loggedInPage: async ({ page }, use) => {
```

There are **two important things** here:

### `{ page }`

Playwright gives us the built-in `page` fixture.

### `use`

`use()` sends our prepared fixture to the test.

So:

```ts
await use(page);
```

means:

> "Give this logged-in page to the test."

### Telugu

```ts
async({ page }, use);
```

- `page` → Playwright built-in fixture
- `use` → custom fixture value ని test కి ఇవ్వడానికి

```ts
await use(page);
```

అంటే:

> **"ఈ login చేసిన page ని test కి ఇవ్వు."**

---

# 4. Complete Example

### `fixtures.ts`

```ts
import { test as base, expect, Page } from "@playwright/test";

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://example.com/login");

    await page.fill("#username", "admin");

    await page.fill("#password", "admin123");

    await page.getByRole("button", { name: "Login" }).click();

    await use(page);
  },
});

export { expect };
```

### `dashboard.spec.ts`

```ts
import { test, expect } from "./fixtures";

test("Dashboard Test", async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText("Dashboard")).toBeVisible();
});
```

Notice:

**Test file లో login code లేదు.**

---

# 5. Real Framework Structure

A real project might look like:

```text
tests/
   login.spec.ts
   dashboard.spec.ts
   profile.spec.ts

fixtures/
   fixtures.ts

pages/
   LoginPage.ts
   DashboardPage.ts
   ProfilePage.ts
```

Even better, we can combine **Fixture + POM**.

---

# 6. Custom Fixture with POM

Suppose we have:

```ts
class DashboardPage {
  constructor(private page: Page) {}

  async openProfile() {
    await this.page
      .getByRole("link", {
        name: "Profile",
      })
      .click();
  }
}
```

Fixture:

```ts
type MyFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);

    await use(dashboardPage);
  },
});
```

Test:

```ts
test("Profile Test", async ({ dashboardPage }) => {
  await dashboardPage.openProfile();
});
```

### Telugu

ఇక్కడ fixture:

1. `page` తీసుకుంటుంది
2. `DashboardPage` object create చేస్తుంది
3. Test కి `dashboardPage` ఇస్తుంది

అందువల్ల test లో:

```ts
new DashboardPage(page);
```

రాయాల్సిన అవసరం లేదు.

---

# ⭐ Interview Question

### "Why do you use custom fixtures?"

### English

> I use custom fixtures to centralize reusable setup and dependencies. For example, I can create an authenticated page or Page Object once and inject it directly into my tests. This reduces duplicate code and makes the framework more maintainable.

### Telugu

> **Reusable setup మరియు dependencies ని ఒకే చోట maintain చేయడానికి custom fixtures ఉపయోగిస్తాను. ఉదాహరణకు authenticated page లేదా Page Object ని fixture లో create చేసి tests కి directly inject చేయవచ్చు. దీనివల్ల duplicate code తగ్గుతుంది మరియు framework maintain చేయడం easy అవుతుంది.**

---

# ⭐ Most Important `use()` Concept

Remember this:

```ts
await use(value);
```

### Meaning:

**English:**

> Pass the prepared fixture value to the test.

**Telugu:**

> **Prepared fixture value ని test కి provide చేయడం.**

---

# ⭐ Custom Fixture Flow

```text
Test
  ↓
loggedInPage
  ↓
Custom Fixture
  ↓
page
  ↓
Login
  ↓
use(page)
  ↓
Test receives loggedInPage
```

### Easy Telugu

**Test → Fixture → Login → Ready Page → Test**

---

# 🎯 Interview One-Minute Answer

> **"In my Playwright framework, I use custom fixtures to handle reusable setup. For example, I created an `authenticatedPage` fixture that uses the built-in `page` fixture, performs login, and then passes the logged-in page using `use()`. Tests simply request `authenticatedPage`, so they don't need to repeat login logic. I also use custom fixtures to inject Page Objects, which keeps the tests clean and maintainable."**

### Telugu

> **"నా Playwright framework లో reusable setup కోసం custom fixtures ఉపయోగిస్తాను. ఉదాహరణకు `authenticatedPage` fixture లో built-in `page` fixture తీసుకుని login perform చేసి, `use()` ద్వారా logged-in page ని test కి ఇస్తాను. Tests లో login logic repeat చేయాల్సిన అవసరం ఉండదు. Page Objects ని కూడా fixtures ద్వారా inject చేస్తాను. దీని వల్ల tests clean మరియు maintainable గా ఉంటాయి."**

### ⭐ Remember these 4 words:

**`base.extend()` → Create fixture**  
**`page` → Built-in UI fixture**  
**`use()` → Give fixture to test**  
**`scope` → Control fixture lifetime**

# Playwright Fixtures — UI Testing

Fixtures are **very important for Playwright interviews**. Let's learn them simply.

## 1. What is a Fixture?

### English

> A fixture is a reusable setup provided to a Playwright test. It creates and manages the resources required by the test.

### Telugu

> **Fixture అంటే test కి కావాల్సిన setup/resources ని automatically create చేసి provide చేసే Playwright feature.**

For UI testing, common built-in fixtures are:

```text
page
context
browser
browserName
request
```

---

# 2. `page` Fixture

This is the most commonly used UI fixture.

### English

> `page` represents a browser tab or page where we perform UI actions.

### Telugu

> **`page` అంటే browser లో ఒక tab/page. దానిపై click, fill, navigation, assertions చేస్తాము.**

Example:

```typescript
import { test, expect } from "@playwright/test";

test("Login test", async ({ page }) => {
  await page.goto("https://example.com");

  await page.getByLabel("Username").fill("admin");

  await page.getByLabel("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Dashboard")).toBeVisible();
});
```

Here:

```typescript
async ({ page }) =>
```

Playwright automatically provides the `page` fixture.

---

# 3. `context` Fixture

### English

> Browser context is an isolated browser session containing its own cookies, local storage, and session data.

### Telugu

> **Browser Context అంటే separate browser session. దానికి separate cookies, local storage, session data ఉంటాయి.**

Example:

```typescript
test("Context example", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("https://example.com");
});
```

---

# 4. Why Fixtures are Better Than `beforeEach`?

### Without Fixture

We may repeatedly write:

```typescript
test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await page.fill("#username", "admin");
  await page.fill("#password", "password");
  await page.click("#login");
});
```

### With Custom Fixture

We can create:

```typescript
authenticatedPage;
```

Then test:

```typescript
test("Dashboard test", async ({ authenticatedPage }) => {
  await authenticatedPage.getByText("Dashboard").click();
});
```

### English

> Fixtures provide reusable setup and dependency injection, making tests cleaner and reducing duplicate code.

### Telugu

> **Fixtures reusable setup మరియు dependency injection ఇస్తాయి. దీని వల్ల duplicate code తగ్గి tests clean గా ఉంటాయి.**

---

# 5. What is Custom Fixture?

Suppose every test needs a logged-in user.

We can create:

```typescript
import { test as base } from "@playwright/test";

type MyFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto("/login");

    await page.getByLabel("Username").fill("admin");

    await page.getByLabel("Password").fill("admin123");

    await page.getByRole("button", { name: "Login" }).click();

    await use(page);
  },
});
```

Then:

```typescript
test("Dashboard", async ({ authenticatedPage }) => {
  await authenticatedPage.getByText("Dashboard").click();
});
```

### Telugu

ఇక్కడ:

```text
test
 ↓
authenticatedPage fixture
 ↓
Login automatically
 ↓
Test starts
```

అంటే ప్రతి test లో login code మళ్లీ రాయాల్సిన అవసరం లేదు.

---

# 6. Fixture Dependency Injection

This is a **very important interview point**.

If you write:

```typescript
test('Test', async ({ page }) => {
```

Playwright automatically gives you the `page`.

If you write:

```typescript
test('Test', async ({ context }) => {
```

Playwright automatically gives you the `context`.

### English

> Playwright uses dependency injection to provide the fixtures requested by the test.

### Telugu

> **Test ఏ fixture కావాలో parameter లో declare చేస్తే Playwright దాన్ని automatically provide చేస్తుంది. దీనినే Dependency Injection అంటారు.**

---

# 7. Fixture Scope

Two important scopes:

### Test Scope

```typescript
{
  scope: "test";
}
```

### English

> Created separately for each test.

### Telugu

> **ప్రతి test కి కొత్త fixture create అవుతుంది.**

---

### Worker Scope

```typescript
{
  scope: "worker";
}
```

### English

> Created once per worker and reused by tests in that worker.

### Telugu

> **ఒక worker కి ఒకసారి create చేసి, ఆ worker లోని tests కి reuse చేస్తుంది.**

---

# ⭐ Interview Question

### Q: Why do you use worker-scoped fixtures?

### English

> I use worker-scoped fixtures for expensive setup that can be safely shared across tests, such as authentication or test data setup.

### Telugu

> **Authentication లాంటి expensive setup ని ఒక worker కి ఒకసారి చేసి, అదే worker లోని tests కి reuse చేయడానికి worker-scoped fixture ఉపయోగిస్తాను.**

---

# ⭐ Most Important Difference

| `beforeEach`               | Fixture                               |
| -------------------------- | ------------------------------------- |
| Setup hook                 | Reusable dependency                   |
| Runs before each test      | Lifecycle managed by Playwright       |
| Can lead to repeated setup | Better reuse                          |
| Less composable            | Fixtures can depend on other fixtures |
| Shared setup logic         | Dependency injection                  |

---

# 🎯 Interview Answer: "Explain Fixtures"

### English

> **Playwright fixtures provide reusable setup and dependencies to tests. Playwright has built-in fixtures like `page`, `context`, and `request`, and we can create custom fixtures using `base.extend()`. Fixtures are useful for common setup such as authentication, page objects, and API clients. They also support different scopes like test and worker.**

### Telugu

> **Playwright fixtures tests కి reusable setup మరియు dependencies provide చేస్తాయి. `page`, `context`, `request` వంటి built-in fixtures ఉన్నాయి. `base.extend()` ఉపయోగించి custom fixtures కూడా create చేయవచ్చు. Authentication, Page Objects, API clients వంటి common setup కోసం fixtures ఉపయోగిస్తాము. Test scope మరియు worker scope కూడా support చేస్తాయి.**

## ⭐ One-line answer to remember

> **"Fixtures are reusable dependencies that manage test setup and cleanup automatically."**

**Telugu:**

> **"Fixtures అంటే test కి కావాల్సిన reusable setup/dependencies ని automatically manage చేసే Playwright feature."**
