# Adding Screenshots in Playwright

## Option 1: Auto-Capture via Config

Add the following setting in the `use` section of your `playwright.config.ts`:

```ts
use: {
  screenshot: 'on', // Captures screenshot after each test
  // OR
  screenshot: 'only-on-failure', // Captures only when tests fail
}
```

## Option 2: Manual Screenshot Capture

### Basic Manual Screenshot

```ts  
  // Capture the screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  
  // Attach it to the report
  await test.info().attach("Full Page Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });

```
ఈ కోడ్ **Screenshot తీసి Allure/Playwright Report కి attach చేయడానికి** ఉపయోగిస్తారు.

```ts
let screenshotBookAppointment = await page.screenshot({ fullPage: true });

await testInfo.attach("Book Appointment", {
  body: screenshotBookAppointment,
  contentType: "image/png"
});
```

### Step-by-Step

#### 1. Screenshot తీయడం

```ts
await page.screenshot({ fullPage: true });
```

* మొత్తం webpage screenshot తీస్తుంది.
* `fullPage: true` వల్ల page మొత్తం capture అవుతుంది.

```ts
let screenshotBookAppointment
```

లో screenshot binary data store అవుతుంది.

***

#### 2. Report కి Attach చేయడం

```ts
await testInfo.attach("Book Appointment", {
```

ఇక్కడ:

```ts
"Book Appointment"
```

అనేది attachment పేరు.

***

#### 3. Screenshot Data ఇవ్వడం

```ts
body: screenshotBookAppointment
```

ఇది actual image data.

***

#### 4. Content Type

```ts
contentType: "image/png"
```

ఇది PNG image అని Playwright కి చెప్తుంది.

***

### Real-Time Example

```ts
test('Book Appointment', async ({ page }, testInfo) => {

  // Steps...

  let screenshot = await page.screenshot({
    fullPage: true
  });

  await testInfo.attach("Appointment Confirmation", {
    body: screenshot,
    contentType: "image/png"
  });
});
```

Report లో:

```text
Test
 └── Attachments
      └── Appointment Confirmation.png
```

అని కనిపిస్తుంది.

***

### Benefit

Test fail అయినప్పుడు లేదా debugging సమయంలో:

✅ Screen ఎలా ఉందో చూడొచ్చు  
✅ Allure Report లో image open చేయొచ్చు  
✅ Evidence గా ఉపయోగించొచ్చు  
✅ CI/CD Reports లో screenshot save అవుతుంది

### Short Answer

```ts
testInfo.attach()
```

\= Report కి file/image attach చేయడానికి.

```ts
page.screenshot()
```

\= Screenshot తీసుకోవడానికి.

రెండూ కలిపి **"Screenshot ని Test Report లో attach చేయడానికి"** ఉపయోగిస్తారు.
