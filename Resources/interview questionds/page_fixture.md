https://m365.cloud.microsoft/chat/conversation/df445686-e1d8-4bb0-bda1-84b9576a73a3?fromCode=cmcv2&redirectId=39DEFC279CFC45B093A9D9398E70C09F&internalredirect=CCM&client-request-id=a4c9d9e2-704d-47a5-a586-e22bb7be6999&origindomain=CCM&login_hint=sathya%40yotta.work


Basic Questions
1. What is Playwright?
👉 Playwright is an automation testing tool used for testing web applications across browsers like Chromium, Firefox, and WebKit.

2. What is a fixture in Playwright?
👉 A fixture is a reusable setup and teardown mechanism used to prepare the test environment.
✅ Example:

Launch browser
Create page
Login setup


3. What is the page fixture?
👉 The page fixture represents a browser tab.
👉 Playwright automatically provides a new page for each test.

4. What are built-in fixtures in Playwright?
👉 Common built-in fixtures:

browser
context
page
request


5. Does each test get a new page?
👉 Yes ✅
Each test gets a fresh page to ensure isolation.

✅ ⚡ Intermediate Questions
6. How do you create a custom fixture?
TypeScriptimport { test as base } from '@playwright/test';export const test = base.extend({  myFixture: async ({ page }, use) => {    await page.goto('https://example.com');    await use(page);  },});Show more lines

7. What is the role of the use() function?
👉 use() passes the fixture value to the test.
👉 Code after use() acts as teardown.

8. Explain fixture lifecycle
👉 Steps:

Setup runs
use() passes control to test
Test executes
Teardown runs


9. Why do we use fixtures?
✅ Code reusability
✅ Cleaner test cases
✅ Centralized setup
✅ Maintainability

10. Difference between browser, context, and page





















ItemDescriptionbrowserFull browser instancecontextIsolated session (like incognito)pageBrowser tab

✅ 🚀 Advanced Questions
11. How do you override the page fixture?
TypeScriptexport const test = base.extend({  page: async ({ page }, use) => {    await page.goto('https://myapp.com');    await use(page);  },});Show more lines

12. How do you handle multiple user roles (admin/user)?
👉 Create separate fixtures:
TypeScriptadminPage: async ({ browser }, use) => {  const context = await browser.newContext();  const page = await context.newPage();  await page.goto('/admin');  await use(page);}Show more lines

13. What is storageState?
👉 It stores logged-in session data and reuses it.
TypeScripttest.use({ storageState: 'auth.json' });Show more lines
✅ Advantage: avoids repeated login → faster tests

14. What are fixture scopes?
👉 Two types:

test scope (default)
worker scope (shared across tests)

TypeScriptmyFixture: [async ({}, use) => {}, { scope: 'worker' }]Show more lines

15. Difference between fixtures and beforeEach





















FixturebeforeEachReusableRepeated setupSupports dependency injectionNo dependency systemCleaner structureBasic setup

✅ 🎯 Scenario-Based Questions
16. How do you avoid logging in every test?
👉 Answer:

Use storageState
Perform login once and reuse session


17. How do you test different roles?
👉 Answer:

Create separate fixtures for each role
Use different browser contexts


18. How do you improve test performance?
👉 Answer:

Use storageState
Avoid repeated setup
Run tests in parallel
Use reusable fixtures


✅ 💻 Coding Question
Explain login fixture example
TypeScriptexport const test = base.extend({  page: async ({ page }, use) => {    await page.goto('/login');    await page.fill('#user', 'test');    await page.fill('#pass', '1234');    await page.click('login');    await use(page);  },});Show more lines
👉 Explanation:

Automates login
Each test starts with authenticated session


✅ ✅ Quick Interview Tips
✔ Fixtures = reusable setup logic
✔ Always use use() properly
✔ Know test.extend()
✔ Use storageState for speed
✔ Understand context isolation
playwright  page fixures
Copilot said:
Copilot
In Playwright, fixtures are a powerful way to set up reusable test context (like pages, contexts, logged-in states, etc.). When you say “page fixtures”, you’re mostly referring to how Playwright provides and lets you customize the built‑in page fixture.

Let’s break it down clearly with examples 👇

✅ 1. Built-in page fixture
Playwright Test already gives you a ready-to-use page in every test:




TypeScript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
👉 Here:

page = a new browser tab
Automatically created and cleaned up per test
✅ 2. Customizing page with fixtures
If you want to preconfigure the page (e.g., auto-login, navigate to URL), you can override the fixture.

Example: Custom page fixture



TypeScript
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // Custom setup
    await page.goto('https://myapp.com/login');

    await page.fill('#username', 'user');
    await page.fill('#password', 'pass');
    await page.click('button[type=submit]');

    // Use the customized page
    await use(page);

    // Optional teardown
    await page.close();
  },
});

Show more lines
✅ Now every test using this fixture will:

Open login page
Log in automatically
Continue with authenticated session
✅ 3. Using the custom fixture



TypeScript
import { test, expect } from './fixtures';

test('user dashboard', async ({ page }) => {
  await expect(page).toHaveURL(/dashboard/);
});
✅ 4. Creating additional page-like fixtures
You can also create multiple pages or contexts.

Example: Admin & User pages



TypeScript
export const test = base.extend({
  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://myapp.com/admin');
    await page.fill('#user', 'admin');
    await page.fill('#pass', 'admin123');
    await page.click('login');

    await use(page);

    await context.close();
  },

  userPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://myapp.com');

    await use(page);

    await context.close();
  },
});

Show more lines
✅ 5. Using multiple fixtures



TypeScript
test('admin vs user test', async ({ adminPage, userPage }) => {
  await adminPage.goto('/dashboard');
  await userPage.goto('/home');
});
✅ 6. Best practices for page fixtures
✔ Keep fixtures reusable
✔ Avoid heavy logic inside tests—move to fixtures
✔ Use separate fixtures for roles (admin/user)
✔ Use storageState for faster login instead of UI login

✅ 7. Faster alternative: storageState (recommended)
Instead of logging in every time:




TypeScript
test.use({
  storageState: 'auth.json',
});
👉 This loads a pre-authenticated session → much faster tests

✅ Summary
page is a built-in fixture (ready browser tab)
You can override it to:
auto-login
pre-navigate
set cookies/local storage
You can create custom page fixtures (admin/user/etc.)
Use storageState for performance
✅ If you want, I can show:

real project structure for fixtures
TypeScript fixture typing
login fixture with API instead of UI
advanced fixture chaining
Just tell 👍








You said:
in telugu
Copilot said:
Copilot
Playwright లో page fixtures ని తెలుగులో సింపుల్‌గా explain చేస్తాను 👇

✅ 1. Built-in page fixture అంటే ఏమిటి?
Playwright test లో ప్రతి test కి ఆటోమేటిక్‌గా ఒక page (browser tab) ఇస్తుంది.




TypeScript
import { test, expect } from '@playwright/test';

test('simple test', async ({ page }) => {
  await page.goto('https://example.com');
});
👉 ఇక్కడ:

page = browser లో కొత్త tab
ప్రతి test కి కొత్తగా create అవుతుంది
test అయిపోయిన తర్వాత close అవుతుంది
✅ 2. Custom Page Fixture (మనదైన setup)
కొన్నిసార్లు ప్రతి test లో login చేయాలి, same URL open చేయాలి → అప్పుడు fixture create చేస్తాం

👉 Example: auto login page



TypeScript
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {

    await page.goto('https://myapp.com/login');

    await page.fill('#username', 'user');
    await page.fill('#password', 'pass');
    await page.click('button[type=submit]');

    // ఇప్పుడు ఈ page ని test కి pass చేస్తున్నాం
    await use(page);

    // cleanup
    await page.close();
  },
});

Show more lines
✅ 3. Custom fixture ఎలా use చేయాలి?



TypeScript
import { test, expect } from './fixtures';

test('dashboard test', async ({ page }) => {
  await expect(page).toHaveURL(/dashboard/);
});
👉 ఇప్పుడు ప్రతి test:

login అవుతుంది
dashboard లో start అవుతుంది
✅ 4. Multiple Page Fixtures (admin/user)
ఒక app లో admin & normal user ఉంటే ఇలా create చేయచ్చు:




TypeScript
export const test = base.extend({

  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://myapp.com/admin');
    await page.fill('#user', 'admin');
    await page.fill('#pass', 'admin123');
    await page.click('login');

    await use(page);

    await context.close();
  },

  userPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://myapp.com');

    await use(page);

    await context.close();
  },

});

Show more lines
✅ 5. ఇలా use చేయాలి



TypeScript
test('admin vs user', async ({ adminPage, userPage }) => {
  await adminPage.goto('/dashboard');
  await userPage.goto('/home');
});
✅ 6. Best Practices ✅
✔ login logic → fixtures లో పెట్టు
✔ tests ని clean గా ఉంచు
✔ reuse చేసుకునేలా fixtures design చేయు
✔ admin/user separate fixtures ఉంచు

✅ 7. Faster तरीका (storageState)
ప్రతి test login చేయకూడదంటే:




TypeScript
test.use({
  storageState: 'auth.json',
});
👉 ముందే login చేసిన session ని use చేస్తుంది → test fast అవుతుంది 🚀

✅ Summary (short)
page = built-in fixture (browser tab)
custom fixture → login, setup automate చేయచ్చు
multiple fixtures → admin/user use చేయచ్చు
storageState → fast execution
✅ కావాలంటే నేను ఇంకా explain చేయగలను:

real project structure
TypeScript typings
API login fixture
interview questions
చెప్పండి 👍








Today
You said:
interview questions
Copilot said:
Copilot
Playwright page fixtures interview questions ని తెలుగులో clearగా ఇస్తాను ✅ (basic → advanced వరకు)

✅ 🔰 Basic Questions
1. Playwright లో fixture అంటే ఏమిటి?
👉 Fixture అనేది test కి అవసరమైన setup & teardown logic ని reusable గా define చేసే method
👉 Example: page, browser, context

2. page fixture అంటే ఏమిటి?
👉 page అనేది browser లో ఒక tab
👉 Playwright automatically ప్రతి test కి new page ఇస్తుంది

3. browser, context, page మధ్య difference ఏమిటి?
Item	Meaning
browser	full browser instance
context	isolated session (like incognito)
page	browser tab
4. ప్రతి test కి కొత్త page వస్తుందా?
👉 అవును ✅
👉 isolation కోసం ప్రతి test కి new page create అవుతుంది

✅ ⚡ Intermediate Questions
5. Custom fixture ఎలా create చేయాలి?



TypeScript
import { test as base } from '@playwright/test';

export const test = base.extend({
  myFixture: async ({ page }, use) => {
    await page.goto('https://example.com');
    await use(page);
  },
});
6. use() అంటే ఏమిటి?
👉 use() ద్వారా fixture value ని test కి pass చేస్తాం
👉 use() తర్వాత code → teardown

7. Fixture lifecycle ఎలా ఉంటుంది?
setup run అవుతుంది
use() call అవుతుంది
test run
teardown execute అవుతుంది
8. ఎందుకు fixtures ఉపయోగిస్తారు?
👉 Code reuse
👉 Clean tests
👉 Centralized setup
👉 Login handling

9. Built-in fixtures ఏమేమి ఉన్నాయి?
page
browser
context
request
✅ 🚀 Advanced Questions
10. Page fixture ని override చేయడం ఎలా?



TypeScript
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://myapp.com');
    await use(page);
  }
});
11. Multiple user roles ఎలా handle చేయాలి?
👉 separate fixtures create చేయాలి




TypeScript
adminPage, userPage
12. storageState అంటే ఏమిటి?
👉 ముందే login చేసిన session ని save చేసి reuse చేయడం
👉 test fast అవుతుంది




TypeScript
test.use({ storageState: 'auth.json' });
13. Fixture dependencies అంటే ఏమిటి?
👉 ఒక fixture ఇంకొక fixture మీద depend అవుతుంది




TypeScript
myFixture: async ({ page, context }, use) => {}
14. Parallel execution లో fixtures ఎలాఇక్కడ Playwright (Page Fixtures / Fixtures) మీద ముఖ్యమైన Interview Questions & Answers తెలుగులో ఇస్తున్నాను 👇
✅ Basic Questions
1. Playwright అంటే ఏమిటి?
👉 Playwright ఒక automation testing tool
👉 Web applications ని browsers (Chrome, Firefox, Safari) లో test చేయడానికి ఉపయోగిస్తారు

2. Fixture అంటే ఏమిటి?
👉 Fixture అంటే test ముందు setup & తరువాత cleanup చేయడానికి ఉపయోగించే mechanism

✅ Example:

browser open చేయడం
page create చేయడం
login చేయడం
3. Playwright లో built-in fixtures ఏమేమి ఉన్నాయి?
👉 Common fixtures:

browser
context
page
request
4. page fixture అంటే ఏమిటి?
👉 page = browser లో ఒక tab
👉 ప్రతి test కి కొత్త page create అవుతుంది

✅ Intermediate Questions
5. Custom fixture ఎలా create చేస్తారు?



TypeScript
import { test as base } from '@playwright/test';

export const test = base.extend({
  myFixture: async ({ page }, use) => {
    await page.goto('https://example.com');
    await use(page);
  },
});
6. use function role ఏమిటి?
👉 use() అంటే

fixture value ని test కి pass చేస్తుంది
setup తర్వాత control test కి ఇస్తుంది
7. setup & teardown ఎలా handle చేస్తారు?



TypeScript
myFixture: async ({ page }, use) => {
  // setup
  await page.goto('url');

  await use(page);

  // teardown
  await page.close();
}
8. test.extend() ఎందుకు వాడుతారు?
👉 కొత్త fixtures create చేయడానికి లేదా existing fixtures override చేయడానికి

9. browser, context, page మధ్య difference ఏమిటి?
👉 browser

entire browser instance
👉 context

incognito session లాంటిది
👉 page

browser tab
✅ Advanced Questions
10. Multiple fixtures ఎలా use చేస్తారు?



TypeScript
test('multi fixture', async ({ page, request }) => {
  // use both
});
11. Admin & User fixtures ఎలా create చేస్తారు?
👉 different contexts create చేస్తారు:




TypeScript
adminPage: async ({ browser }, use) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await use(page);
}
12. Storage state అంటే ఏమిటి?
👉 logged-in session ని file లో store చేయడం




TypeScript
test.use({ storageState: 'auth.json' });
✅ Advantage: login repeatedly చేయాల్సిన పనిలేదు

13. Fixture scopes ఏమిటి?
👉 రెండు types:

test scope (default)
worker scope (multiple tests share)



TypeScript
test.extend({
  myFixture: [async ({}, use) => {}, { scope: 'worker' }]
});
14. ఎందుకు fixtures use చేస్తారు?
✅ code reuse
✅ clean tests
✅ maintainability
✅ setup duplication avoid

15. Fixture vs beforeEach difference?
Fixture	beforeEach
reusable	repeated
structured	simple
dependency injection	manual
✅ Scenario-Based Questions
16. ప్రతి test login చేయాలి, ఎలా optimize చేస్తారు?
👉 Answer:

storageState use చేస్తాను
login ఒక్కసారి చేసి session reuse చేస్తాను
17. Different roles (admin/user) test చేయాలి ఎలా?
👉 Answer:

separate fixtures create చేస్తాను
different contexts use చేస్తాను
18. Test speed improve ఎలా చేస్తారు?
👉 Answer:

storageState
parallel execution
unnecessary login avoid
reuse fixtures
✅ Coding Question
Login Fixture example explain చేయండి
👉 Answer:




TypeScript
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('/login');
    await page.fill('#user', 'test');
    await page.fill('#pass', '1234');
    await page.click('login');

    await use(page);
  },
});
👉 Explanation:

login automate అవుతుంది
every test authenticated state లో start అవుతుంది
✅ Quick Tips (Interview)
✔ Fixtures = reusable setup
✔ use() must
✔ test.extend() important
✔ storageState = performance boost
✔ context isolation important

✅ కావాలంటే నేను next గా ఇస్తాను:

Real-time interview scenarios (QA job)
Playwright coding questions
Mock interview practice
చెప్పండి 👍








