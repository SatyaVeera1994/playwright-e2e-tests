# Q1. What is Playwright and how does it fundamentally differ from Selenium?

### ✅ English Answer

Playwright is a modern end-to-end automation framework developed by Microsoft. It supports Chromium, Firefox, and WebKit using a single API.

“Playwright uses a persistent WebSocket connection for continuous communication with the browser, whereas Selenium uses HTTP requests for each command.

Because of this persistent connection, Playwright can listen to browser events in real time and provide advanced capabilities such as:

Auto Waiting
Network Interception
Trace Viewer
Video Recording
Faster Test Execution
Browser Event Monitoring

These features make Playwright faster, more reliable, and easier to use for modern web application testing compared to traditional automation tools.

# Q2. What is Auto Waiting and why does it eliminate test flakiness?

Auto Waiting is a built-in synchronization feature in Playwright. Before performing actions like click, fill, or selectOption, Playwright automatically waits until the element becomes visible, enabled, stable, and ready for interaction. This removes the need for most explicit waits and reduces test flakiness caused by timing issues, making tests more reliable and stable.

# Q3. What are Playwright Fixtures and why are they better than beforeEach()?

Playwright fixtures provide reusable setup and dependencies to tests. Playwright has built-in fixtures like page, context, and request, and we can create custom fixtures using base.extend(). Fixtures are useful for common setup such as authentication, page objects, and API clients. They also support different scopes like test and worker.
For UI testing, common built-in fixtures are:

page
context
browser
browserName
request

1. What is a Fixture?
   English
   A fixture is a reusable setup provided to a Playwright test. It creates and manages the resources required by the test.

Telugu=Fixture అంటే test కి కావాల్సిన setup/resources ని automatically create చేసి provide చేసే Playwright feature.

# Q4. What is the difference between Browser, Context, and Page?

తెలుగులో ప్రశ్న: Browser, BrowserContext, Page మధ్య తేడా ఏమిటి?

1. Browser
   ఇది Chrome, Firefox లేదా WebKit వంటి browser instance. Browser launch చేయడానికి ఎక్కువ resources అవసరం కావచ్చు.
2. BrowserContext
   ఇది browser లోపల ఒక ప్రత్యేకమైన, isolated session. దీంట్లో cookies, localStorage వంటి session data వేరుగా ఉంటాయి.3. Page
   ఇది ఒక browser tab. ఒక BrowserContextలో ఒకటి లేదా అంతకంటే ఎక్కువ Pages ఉండవచ్చు.

సులభంగా గుర్తుంచుకోండి: Browser = Browser application, Context = Separate session, Page = Tab.
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

Real-time example: ఒకే browserలో Admin, User అనే ఇద్దరు వేర్వేరు usersతో test చేయాలంటే, ఒక్కొక్కరికి వేర్వేరు BrowserContexts సృష్టించవచ్చు.
Interview English answer:
Browser is the running browser instance. BrowserContext provides an isolated session with separate cookies and local storage. Page represents a single tab inside a context. Playwright reuses the browser while keeping test sessions isolated.

# Q4.. What is storageState() in Playwright?

👨‍💼 Interview Question
What is storageState()? Why do we use it?
✅ Interview Answer (English)
storageState() is a Playwright feature used to save the browser's authenticated session into a JSON file. It stores cookies, local storage, and other session information. Instead of logging in before every test, we log in once, save the storage state, and reuse it across multiple tests. This significantly reduces test execution time.

✅ Interview Answer (Telugu)
storageState() అనేది Playwright లో Browser Login Session ని JSON file లో save చేసే feature.
ఇందులో Cookies, Local Storage మరియు Authentication details save అవుతాయి.
ప్రతి test లో login చేయకుండా, ఒకసారి login చేసి session ని save చేసి, అన్ని tests లో అదే session ని reuse చేస్తాం.
దీని వల్ల execution time తగ్గుతుంది మరియు tests వేగంగా run అవుతాయి.

# Q4. What is Network Interception in Playwright?

👨‍💼 Interview Question
Can you explain Network Interception in Playwright?
✅ Interview Answer (English)
Network Interception is a Playwright feature that allows us to intercept HTTP requests before they reach the server. Using page.route(), we can mock responses, modify requests, block requests, or allow them to continue. It helps us test UI independently of the backend and simulate different server responses like 200, 401, 404, and 500.

✅ Interview Answer (Telugu)
Network Interception అంటే, Browser నుండి Server కి వెళ్లే HTTP Request ని మధ్యలో Playwright intercept (ఆపడం) చేయడం.
page.route() ఉపయోగించి Request ని modify చేయవచ్చు, mock response ఇవ్వవచ్చు, block చేయవచ్చు లేదా server కి continue చేయవచ్చు.
దీని వల్ల Backend అందుబాటులో లేకపోయినా UI Testing చేయవచ్చు. అలాగే 401 Unauthorized, 404 Not Found, 500 Internal Server Error వంటి scenarios ని కూడా సులభంగా test చేయవచ్చు.

మీరు పంపిన Playwright interview questions ఫైల్‌లో ఉన్న ప్రతి ప్రశ్నను తెలుగులో సులభంగా అర్థమయ్యేలా వివరిస్తాను. ప్రతి ప్రశ్నకు ఈ విధంగా నేర్చుకుందాం:

1. Question in English
2. తెలుగులో ప్రశ్న అర్థం
3. సులభమైన వివరణ
4. Interviewలో చెప్పాల్సిన English answer
5. Real-time example / code అవసరమైన చోట

మొత్తం 22 ప్రశ్నలు ఉన్నాయి. Q22లో Workers, Parallel Execution, Fixtures గురించి అదనపు వివరాలు కూడా ఉన్నాయి. ముందుగా Q1–Q10 చూద్దాం.

# Playwright Interview Questions — తెలుగులో

## Q1. What is the difference between Browser, Context, and Page?

తెలుగులో ప్రశ్న: Browser, BrowserContext, Page మధ్య తేడా ఏమిటి?

[ファイル:Chromium Logo.svg - ウィキニュース](https://images.openai.com/static-rsc-4/FM_wWpDjT9FQNlEtKQ9Xt52mo25ct-0dCgE5qR89xqM2BaJAgRHNIXB4yoGkDJJflh7I0KVAPbndSTPEU7CpvysmUPaM4lzo23YJgNHGPbwOQ8iQGWKWy6MfiCO6APIq9yl05gOYhgw03-V_sLujnkIQqb-nwv6nrMJkV7nfwak?purpose=inline)

1\. Browser

ఇది Chrome, Firefox లేదా WebKit వంటి browser instance. Browser launch చేయడానికి ఎక్కువ resources అవసరం కావచ్చు.

[Private browser window flat icon, vector sign, browser incognito window colorful pictogram isolated on white. Symbol, logo illustration. Flat style design](https://images.openai.com/static-rsc-4/7fOjlpt4Nbrlq4g5-8yxp1fPRMWbqkWQK5wCHPMBGJ5YagT9oD2M7F6BTzJZCwQ2tcd939o9aK4YeuVzn8oEo1rRrBklvbzccLp9sC3-VO5x1_YCqZDj7RuJeCl46wIjJVhrjoXPiHVcxxqS-SZTzSxdVyE1ZZa2Onkhze2UmKUAiO4QvRDVWBEyJqbYad93?purpose=inline)

2\. BrowserContext

ఇది browser లోపల ఒక ప్రత్యేకమైన, isolated session. దీంట్లో cookies, localStorage వంటి session data వేరుగా ఉంటాయి.

[Tabs - Free web icons](https://images.openai.com/static-rsc-4/uk6YWBKkgnjhm4fLAzdjo3I637DEhEeMlIkUGFcJL-LabHEX19OUr6XNbrQ5cvRuD8yXWTbD0mn22CZgit0Ntyzsh7RU_l2v31P87Yffa7gYHw7tbp3P6c2AWBDXDkt88VNbZ3SK4A0L_zX-i0WW-QeCiFGmZzFr4lfx9cUO-Lw?purpose=inline)

3\. Page

ఇది ఒక browser tab. ఒక BrowserContextలో ఒకటి లేదా అంతకంటే ఎక్కువ Pages ఉండవచ్చు.

సులభంగా గుర్తుంచుకోండి: Browser = Browser application, Context = Separate session, Page = Tab.

```
const browser = await chromium.launch();

const context = await browser.newContext();

const page = await context.newPage();
```

Real-time example: ఒకే browserలో Admin, User అనే ఇద్దరు వేర్వేరు usersతో test చేయాలంటే, ఒక్కొక్కరికి వేర్వేరు BrowserContexts సృష్టించవచ్చు.

Interview English answer:

Browser is the running browser instance. BrowserContext provides an isolated session with separate cookies and local storage. Page represents a single tab inside a context. Playwright reuses the browser while keeping test sessions isolated.

## Q2. What are the different timeout types in Playwright, and how are they configured?

తెలుగులో ప్రశ్న: Playwrightలో ఎన్ని రకాల timeouts ఉంటాయి? వాటిని ఎలా configure చేస్తాము?

Timeout అంటే ఒక పని పూర్తవడానికి ఎంత సమయం వరకు వేచి ఉండాలో నిర్ణయించే గడువు.

| Timeout            | తెలుగులో అర్థం                                    |
| ------------------ | ------------------------------------------------- |
| Test timeout       | ఒక test మొత్తం పూర్తవడానికి సమయం                  |
| Action timeout     | Click, fill వంటి ఒక్క action కోసం వేచి ఉండే సమయం  |
| Navigation timeout | ఒక page load లేదా navigation కోసం వేచి ఉండే సమయం  |
| Assertion timeout  | Expected condition నిజమవుతుందా అని వేచి ఉండే సమయం |
| Global timeout     | మొత్తం test suite run కోసం గరిష్ఠ సమయం            |

Example:

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,

  expect: {
    timeout: 5000
  },

  use: {
    actionTimeout: 10000,
    navigationTimeout: 30000
  },

  globalTimeout: 3600000
});
```

- `30000` = 30 seconds
- `5000` = 5 seconds
- `3600000` = 1 hour

Real-time example: Login button click చేసినప్పుడు 10 secondsలో action పూర్తి కాకపోతే, action timeout error రావచ్చు.

Interview English answer:

Playwright has five timeout types: test timeout, action timeout, navigation timeout, assertion timeout, and global timeout. We can configure them in the Playwright configuration file or set a timeout for a specific operation. They help control how long tests wait before failing.

## Q3. How does Playwright achieve auto-waiting, and what makes locators resilient?

తెలుగులో ప్రశ్న: Playwrightలో Auto-waiting ఎలా పనిచేస్తుంది? Locators ఎందుకు reliableగా ఉంటాయి?

Auto-waiting అంటే: ప్రతి action ముందు element ఉపయోగించడానికి సిద్ధంగా ఉందో Playwright స్వయంగా వేచి చూస్తుంది.

ఉదాహరణకు, button:

- DOMలో ఉండాలి.
- Visibleగా ఉండాలి.
- కదలకుండా stableగా ఉండాలి.
- Enabledగా ఉండాలి.
- Click eventను స్వీకరించగలగాలి.

```
await page.getByRole('button', { name: 'Submit' }).click();
```

ఇక్కడ button click చేయడానికి సిద్ధంగా లేకపోతే Playwright తగినంత సమయం వేచి చూస్తుంది. కాబట్టి ప్రతి చోట `waitForTimeout()` పెట్టాల్సిన అవసరం ఉండదు.

Resilient locator అంటే: UI మళ్లీ render అయినప్పుడు locator elementను తిరిగి కనుగొనడానికి ప్రయత్నిస్తుంది. పాత element referenceపై ఆధారపడటం తగ్గుతుంది.

Real-time example: React applicationలో Submit button మళ్లీ render అయినా, సరైన locator ద్వారా Playwright buttonను మళ్లీ గుర్తించగలదు.

Interview English answer:

Playwright provides auto-waiting before actions. It checks whether an element is attached, visible, stable, enabled, and able to receive events. Locators are resilient because they locate elements when actions are performed and can handle DOM re-renders more reliably.

## Q4. How do you run tests in parallel, and how do you control the number of workers?

తెలుగులో ప్రశ్న: Testsను parallelగా ఎలా run చేస్తాము? Workers సంఖ్యను ఎలా control చేస్తాము?

Parallel execution అంటే: అనేక test filesను ఒకేసారి run చేయడం.

Worker అంటే: Testsను execute చేసే ప్రత్యేక Node.js process.

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 4
});
```

Terminalలో:

```
npx playwright test --workers=4
```

- `--workers=4` — గరిష్ఠంగా 4 workersతో run చేస్తుంది.
- `--workers=1` — ఒక్క workerతో run చేస్తుంది.
- `--workers=50%` — అందుబాటులో ఉన్న logical CPU coresలో 50% ఆధారంగా workersను నిర్ణయిస్తుంది.

Default configurationలో సాధారణంగా వేర్వేరు test files వేర్వేరు workersలో run అవుతాయి. ఒకే fileలో tests సాధారణంగా వరుసగా run అవుతాయి, `fullyParallel` లేదా ప్రత్యేక parallel mode configure చేయకపోతే.

Real-time example: 20 independent test files ఉంటే, 4 workers వాటిని విభజించుకుని run చేయగలవు. అయితే ఒకేసారి ఎన్ని files run అవుతాయో workers సంఖ్యపై ఆధారపడి ఉంటుంది.

Interview English answer:

Playwright runs test files in parallel using worker processes by default. We can control the number of workers using the workers option in the configuration file or the --workers command-line option. Parallel execution can reduce test execution time, provided the tests are independent.

## Q5. How do you handle multiple tabs or popup windows?
Interview English answer:

I handle multiple tabs using the page event on BrowserContext and popup windows using the popup event on the current page. I wait for the event and capture the new Page object, then perform actions and assertions on the new page.


తెలుగులో ప్రశ్న: ఒకేసారి అనేక browser tabs లేదా popup windowsను ఎలా handle చేస్తాము?

ఒక applicationలో button click చేసినప్పుడు కొత్త tab open అయితే, ఆ tabను Playwrightలో capture చేయాలి.

Code:

```
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('#open-new-tab')
]);

await newPage.waitForLoadState();
```

Code అర్థం:

- `context.waitForEvent('page')` — కొత్త tab కోసం వేచి ఉంటుంది.
- `page.click()` — కొత్త tab open చేసే buttonను click చేస్తుంది.
- `Promise.all()` — రెండింటినీ కలిపి నిర్వహిస్తుంది.
- `newPage` — కొత్త tabకు సంబంధించిన Page object.

Real-time example: మీ applicationలో “View Invoice” button click చేస్తే invoice కొత్త tabలో open అవుతుంది. ఆ tabలో invoice details verify చేయవచ్చు.

Interview English answer:

I handle multiple tabs using the page event on BrowserContext and popup windows using the popup event on the current page. I wait for the event and capture the new Page object, then perform actions and assertions on the new page.

## Q6. How do you interact with elements inside an iframe?

తెలుగులో ప్రశ్న: Iframe లోపల ఉన్న elementsతో ఎలా interact చేస్తాము?

Iframe అంటే ఒక webpageలో మరో webpageను చూపించే ప్రాంతం.

ఉదాహరణకు, payment gateway లేదా embedded login form iframeలో ఉండవచ్చు.

Code:

```
await page
  .frameLocator('#paymentFrame')
  .getByRole('button', { name: 'Pay Now' })
  .click();
```

సులభమైన వివరణ:

- `frameLocator('#paymentFrame')` — iframeను గుర్తిస్తుంది.
- `getByRole()` — iframeలోని buttonను గుర్తిస్తుంది.
- `click()` — ఆ buttonను click చేస్తుంది.

Seleniumలో సాధారణంగా `switchTo().frame()` ఉపయోగిస్తారు. Playwrightలో `frameLocator()` ద్వారా నేరుగా iframeలోని elementను target చేయవచ్చు.

Interview English answer:

I use frameLocator() to interact with elements inside an iframe. It allows me to locate and perform actions on elements within the frame without manually switching the frame context.

## Q7. What is the difference between `toBeAttached()` and `toBeVisible()`?

తెలుగులో ప్రశ్న: `toBeAttached()` మరియు `toBeVisible()` మధ్య తేడా ఏమిటి?

| `toBeAttached()`                     | `toBeVisible()`                            |
| ------------------------------------ | ------------------------------------------ |
| Element DOMలో ఉందో చూస్తుంది.        | Element కనిపిస్తోందో చూస్తుంది.            |
| Element hiddenగా ఉన్నా pass కావచ్చు. | Element visibleగా ఉండాలి.                  |
| DOM presenceను verify చేస్తుంది.     | Userకు కనిపించే స్థితిని verify చేస్తుంది. |

Code:

```
await expect(locator).toBeAttached();

await expect(locator).toBeVisible();
```

Real-time example: ఒక accordion panel DOMలో ఉంది కానీ ప్రస్తుతం closedగా ఉంది అనుకుందాం.

- `toBeAttached()` pass కావచ్చు.
- `toBeVisible()` fail అవుతుంది, ఎందుకంటే panel కనిపించడం లేదు.

Interview English answer:

toBeAttached() checks whether an element exists in the DOM. toBeVisible() checks whether the element is visible to the user. An element can be attached to the DOM but still be hidden.

## Q8. How does Playwright support API testing and network interception?

తెలుగులో ప్రశ్న: Playwrightలో API testing మరియు network interception ఎలా చేస్తాము?

ఇందులో రెండు ముఖ్యమైన concepts ఉన్నాయి.

1\. APIRequestContext

Browser UIను open చేయకుండా నేరుగా API requests పంపి response verify చేయవచ్చు.

```
const response = await request.get(
  'https://api.example.com/users/1'
);

console.log(response.status());
```

2\. `page.route()`

UI test సమయంలో browser పంపే network requestsను intercept చేయవచ్చు. వాటిని mock చేయవచ్చు, మార్చవచ్చు లేదా block చేయవచ్చు.

```
await page.route('**/api/users', route =>
  route.fulfill({
    json: [{ id: 1, name: 'Rahul' }]
  })
);
```

ఇక్కడ నిజమైన API responseకు బదులుగా mock response ఇస్తున్నాము.

Real-time example: Backend API అందుబాటులో లేకపోయినా, mock users dataతో Users page సరిగ్గా render అవుతుందో test చేయవచ్చు.

Interview English answer:

Playwright supports API testing through APIRequestContext, which allows us to send HTTP requests and validate responses without opening a browser. We use page.route() to intercept, modify, or mock network requests during UI testing.

## Q9. What is the Page Object Model (POM), and why is it recommended?

తెలుగులో ప్రశ్న: Page Object Model అంటే ఏమిటి? దీన్ని ఎందుకు ఉపయోగిస్తాము?

POM అనేది automation frameworkలో ప్రతి pageకు సంబంధించిన locators, actionsను ఒక classలో ఉంచే design pattern.

ఉదాహరణకు, Login pageకు సంబంధించిన email, password, login buttonలను `LoginPage` classలో ఉంచవచ్చు.

Code:

```
import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page
      .getByLabel('Username')
      .fill(username);

    await this.page
      .getByLabel('Password')
      .fill(password);

    await this.page
      .getByRole('button', { name: 'Login' })
      .click();
  }
}
```

POM ప్రయోజనాలు:

- Code reuse పెరుగుతుంది.
- Code maintenance సులభమవుతుంది.
- Locators ఒకే చోట నిర్వహించవచ్చు.
- Test cases చదవడానికి సులభంగా ఉంటాయి.

Real-time example: Login button locator మారితే, ప్రతి test fileలో మార్పులు చేయకుండా `LoginPage` classలో ఒక్కసారి మార్చవచ్చు.

Interview English answer:

Page Object Model is a design pattern in which page locators and actions are encapsulated inside classes. It improves code reusability, readability, and maintainability. If a locator changes, we can update it in one place instead of modifying multiple test files.

## Q10. How do you run a specific test file, test, or tag from the command line?

తెలుగులో ప్రశ్న: ఒక నిర్దిష్ట test file, test name లేదా tagను మాత్రమే ఎలా run చేస్తాము?

Playwrightలో command line options ద్వారా కావలసిన testsను మాత్రమే run చేయవచ్చు.

| అవసరం                                | Command                                              |
| ------------------------------------ | ---------------------------------------------------- |
| ఒక test file run చేయడం               | `npx playwright test tests/login.spec.js`            |
| Test name ఆధారంగా run చేయడం          | `npx playwright test -g "should login successfully"` |
| `@smoke` tag ఉన్న tests              | `npx playwright test --grep @smoke`                  |
| `@slow` tag ఉన్న testsను మినహాయించడం | `npx playwright test --grep-invert @slow`            |
| Chromiumలో మాత్రమే run చేయడం         | `npx playwright test --project=chromium`             |

Tag example:

```
import { test } from '@playwright/test';

test('login works @smoke', async ({ page }) => {
  await page.goto('/login');
});
```

ఇక్కడ `@smoke` అనేది test titleలో పెట్టిన tag. `--grep @smoke` ఉపయోగించినప్పుడు ఆ tagకు match అయ్యే testsను run చేయవచ్చు.

Interview English answer:

I use command-line options to execute specific tests. I can specify a test file, use -g to filter by test name, use --grep to run tagged tests, and use --project to run tests on a specific browser.

## ఈ రోజు నేర్చుకున్న ముఖ్యమైన points

మీరు స్వయంగా గుర్తు చేసుకుంటున్నప్పుడు సమాధానాలను తెరవండి.

Q1. Browser, Context, Page

Q2. Timeouts

Q3. Auto-waiting

Q4. Workers

Q5. Multiple tabs

Q6. Iframe

Q7. Attached vs Visible

Q8. API testing

Q9. POM

Q10. Specific tests

తర్వాతి భాగంలో Q11–Q21 వరకు Debug mode, HTML reports, retries, browser projects, authentication, assertions, visual testing, fixtures, file upload/download, JavaScript dialogs గురించి ఇదే విధంగా తెలుగులో నేర్చుకోవచ్చు. Q22లో Workers, Parallel Execution, Fixture Scopes గురించి లోతుగా వివరిస్తాం.
