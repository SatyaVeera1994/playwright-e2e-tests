ఖచ్చితంగా. Playwright లో **`playwright.config.ts`** అనేది మొత్తం టెస్ట్ ఫ్రేమ్‌వర్క్‌కు "కంట్రోల్ సెంటర్" లాంటిది. ఇందులో మీరు టెస్ట్‌లు ఎలా రన్ అవ్వాలి, ఎక్కడ రిపోర్ట్స్ సేవ్ కావాలి, ఎంత టైమ్ వెయిట్ చేయాలి, ఏ బ్రౌజర్‌లో రన్ చేయాలి వంటి సెట్టింగ్స్ ఇస్తారు.

***Simple ga cheppalante 😊

```ts
console.log(`config at run time : ${JSON.stringify(testInfo.config)}`);
```

**Purpose:**
Playwright run avuthunnappudu actual config values emito chudataniki.

### Example

Config:

```ts
export default defineConfig({
  retries: 2,
  timeout: 60000
});
```

Test lo:

```ts
test('sample', async ({ page }, testInfo) => {
  console.log(JSON.stringify(testInfo.config));
});
```

Output:

```text
{
  "retries": 2,
  "timeout": 60000
}
```

### Enduku vadali?

✅ Config correct ga load ayyinda?  
✅ Environment variables vachaya?  
✅ CI lo retries apply ayyaya?  
✅ Debugging kosam

### Real Time Example

```ts
baseURL: process.env.BASE_URL
```

Application open avvatledu.

Appudu:

```ts
console.log(testInfo.config.use.baseURL);
```

Output:

```text
undefined
```

Ante `BASE_URL` load avvaledani telustundi.

### Summary

`testInfo.config` = **runtime lo Playwright actual ga use chestunna configuration details.**

Issue debug cheyyadaniki use chestaru. Normal ga project lo permanent ga uncharu.


# 1. `testDir`

టెస్ట్ ఫైళ్లు ఉన్న ఫోల్డర్.

```ts
testDir: './tests'
```

ఉదాహరణ:

```text
project
 ├── tests
 │    ├── login.spec.ts
 │    └── home.spec.ts
 └── playwright.config.ts
```

Playwright ఈ `tests` ఫోల్డర్‌లో ఉన్న టెస్ట్‌లను మాత్రమే రన్ చేస్తుంది.

***

# 2. `timeout`

ఒక్కో టెస్ట్‌కు గరిష్ట సమయం.

```ts
timeout: 60000
```

అంటే:

```text
60 seconds
```

60 సెకండ్లలో టెస్ట్ పూర్తికాకపోతే Fail అవుతుంది.

***

# 3. `retries`

Fail అయిన టెస్ట్‌ను మళ్లీ రన్ చేయడం.

```ts
retries: 2
```

ఉదాహరణ:

```text
1st Run -> Fail
2nd Run -> Fail
3rd Run -> Pass
```

మొత్తానికి Pass గా పరిగణిస్తుంది.

CI/CD లో చాలా ఉపయోగపడుతుంది.

***

# 4. `workers`

Parallel Execution కోసం.

```ts
workers: 4
```

అంటే 4 టెస్ట్‌లు ఒకేసారి రన్ అవుతాయి.

```text
Test1
Test2
Test3
Test4
```

Execution వేగంగా పూర్తి అవుతుంది.

***

# 5. `reporter`

Report ఎలా Generate చేయాలో చెబుతుంది.

## HTML Report

```ts
reporter: 'html'
```

ఇది:

```text
playwright-report/
```

ఫోల్డర్ సృష్టిస్తుంది.

రిపోర్ట్ ఓపెన్ చేయడానికి:

```bash
npx playwright show-report
```

***

## Allure Report

మీ స్క్రీన్‌షాట్‌లో `allure-results` ఫోల్డర్ కనిపిస్తోంది.

```ts
reporter: [
 ['list'],
 ['allure-playwright']
]
```

ఇది Allure Reports Generate చేస్తుంది.

***

# 6. `outputDir`

మీరు ప్రత్యేకంగా అడిగిన "Output Directory".

టెస్ట్ సమయంలో వచ్చిన అన్ని artifacts ఇక్కడ సేవ్ అవుతాయి.

```ts
outputDir: './test-results'
```

ఉదాహరణ:

```text
test-results/
 ├── screenshots
 ├── traces
 └── videos
```

లేదా

```ts
outputDir: './artifacts'
```

అంటే:

```text
artifacts/
```

ఫోల్డర్‌లో సేవ్ అవుతాయి.

***

# 7. `preserveOutput`

పాత Output ని ఉంచాలా లేదా Delete చేయాలా.

### ఎప్పుడూ Delete

```ts
preserveOutput: 'never'
```

***

### Fail అయినవి మాత్రమే ఉంచు

```ts
preserveOutput: 'failures-only'
```

***

### అన్నీ ఉంచు

```ts
preserveOutput: 'always'
```

***

# 8. `baseURL`

అన్ని URLs కి Common Base URL.

```ts
use: {
  baseURL: 'https://demo.com'
}
```

టెస్ట్‌లో:

```ts
await page.goto('/login');
```

అది Internal‌గా:

```text
https://demo.com/login
```

అవుతుంది.

***

# 9. `headless`

Browser కనిపించాలా లేదా?

### Browser కనిపించదు

```ts
headless: true
```

***

### Browser Open అవుతుంది

```ts
headless: false
```

Debugging సమయంలో ఉపయోగపడుతుంది.

***

# 10. `screenshot`

Fail అయినప్పుడు Screenshot తీయడం.

```ts
screenshot: 'only-on-failure'
```

Options:

```ts
'off'
'on'
'only-on-failure'
```

***

# 11. `video`

Test Execution వీడియో Record చేయడం.

```ts
video: 'retain-on-failure'
```

Fail అయిన Tests కి మాత్రమే వీడియో సేవ్ అవుతుంది.

***

# 12. `trace`

Playwright యొక్క Powerful Feature.

```ts
trace: 'on-first-retry'
```

Fail అయిన టెస్ట్‌ను Replay చేసి చూడవచ్చు.

ఉదాహరణ:

```bash
npx playwright show-trace trace.zip
```

అందులో:

* Clicks
* API Calls
* Screenshots
* DOM Changes

అన్నీ Step-by-Step గా చూడొచ్చు.

***

# 13. `ignoreHTTPSErrors`

SSL Certificate Issues Ignore చేయడానికి.

```ts
ignoreHTTPSErrors: true
```

QA లేదా Internal Environments లో ఉపయోగిస్తారు.

***

# 14. `grep`

కొన్ని Tests మాత్రమే Run చేయడానికి.

```ts
grep: /smoke/
```

టెస్ట్ పేరు:

```ts
test('smoke login', async () => {})
```

అయితే ఆ టెస్ట్ మాత్రమే Run అవుతుంది.

***

# 15. `maxFailures`

ఎన్ని Failures తర్వాత Execution ఆగాలో.

```ts
maxFailures: 5
```

5 టెస్ట్‌లు Fail అయితే Remaining Tests Run కావు.

***

# 16. `projects`

Multiple Browsers లో Run చేయడానికి.

```ts
projects: [
 {
   name: 'Chromium',
   use: { browserName: 'chromium' }
 },
 {
   name: 'Firefox',
   use: { browserName: 'firefox' }
 }
]
```

ఒకే టెస్ట్ రెండు బ్రౌజర్లలో Run అవుతుంది.

***

# Real-Time Project Example

```ts
export default defineConfig({
  testDir: './tests',

  retries: 2,
  workers: 4,
  timeout: 60000,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  outputDir: './test-results',

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});
```

### DevOps / CI-CD లో ఎక్కువగా ఉపయోగించే Configs

✅ `testDir`  
✅ `timeout`  
✅ `retries`  
✅ `workers`  
✅ `reporter`  
✅ `outputDir`  
✅ `baseURL`  
✅ `screenshot`  
✅ `video`  
✅ `trace`  
✅ `projects`

ఇవే సాధారణంగా Playwright Framework లో 90% ప్రాజెక్ట్‌లలో ఉపయోగించే ముఖ్యమైన configuration settings.
