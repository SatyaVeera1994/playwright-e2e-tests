# Q7. How do you debug Playwright test failures?
### ✅ English Answer

“I use Playwright Inspector for local debugging and Trace Viewer for CI failures.”


### One-Line Summary

**Playwright provides Inspector, Trace Viewer, Screenshots, Videos, and Console Logs to quickly identify and fix test failures.**

---

## 3. Telugu Interview Answer

Playwright లో Test Failures Debug చేయడానికి Multiple Tools ఉన్నాయి.

Local Debugging కోసం నేను `--debug` Mode మరియు `page.pause()` ఉపయోగిస్తాను. Inspector ద్వారా Step-by-Step Execution చూడవచ్చు.

CI Failures కోసం Trace Viewer చాలా Useful Tool. ఇది ప్రతి Action కి సంబంధించిన Screenshot, DOM Snapshot, Network Activity మరియు Console Logs ను Store చేస్తుంది.

Failure వచ్చినప్పుడు Trace File Download చేసి Open చేస్తే Exact Failure Point కనిపిస్తుంది.

మా Project లో CI లో మాత్రమే వచ్చే Failures ఉండేవి. వాటిని Local గా Reproduce చేయడం కష్టంగా ఉండేది. Trace Viewer ఉపయోగించి కొన్ని నిమిషాల్లో Root Cause Identify చేశాము.

అదనంగా Screenshots, Videos మరియు Browser Console Logs కూడా Debugging కోసం ఉపయోగించాము.

---

## 4. English Interview Answer

Playwright provides multiple debugging capabilities that help identify and resolve test failures efficiently.

For local debugging, I commonly use the `--debug` flag and `page.pause()`. The Playwright Inspector allows step-by-step execution, locator inspection, and action monitoring.

For CI failures, Trace Viewer is the most valuable tool. It records screenshots, DOM snapshots, network activity, console logs, and action timelines for every test step.

When a test fails in CI, I download the trace artifact and open it using Trace Viewer. This allows me to visually inspect exactly what happened during execution without reproducing the issue locally.

I also use screenshots, videos, and browser console logs to capture additional failure details.

In my project, Trace Viewer significantly reduced debugging time by helping us quickly identify synchronization issues, network failures, and UI rendering problems that occurred only in CI environments.

---

## 5. Real-Time Project Example

In my Playwright automation project, some tests passed locally but occasionally failed in the CI pipeline.

Initially, identifying the root cause was difficult because the issue could not be reproduced consistently.

We enabled:

* Trace Viewer
* Screenshots on Failure
* Video Recording
* Console Logging

When a test failed, we downloaded the trace artifact and inspected the timeline.

We discovered that a backend API response was delayed, causing a button to remain disabled longer than expected.

Using Trace Viewer, we identified the issue within minutes and updated the test accordingly.

This significantly reduced investigation time and improved framework stability.


## 1. Telugu Concept

### Debugging అంటే ఏమిటి?

Automation Test Fail అయినప్పుడు Failure కి కారణం ఏమిటో తెలుసుకునే Process ను Debugging అంటారు.

Playwright లో Debugging కోసం చాలా Powerful Tools ఉన్నాయి.

### Playwright Debugging Levels

#### 1. Playwright Inspector

Test ను Step-by-Step Execute చేయడానికి ఉపయోగిస్తారు.

```bash
npx playwright test --debug
```

దీనివల్ల:

* Step Execution
* Locator Inspection
* Action Monitoring
* Live Browser View

చూడవచ్చు.

---

#### 2. page.pause()

Test Execution ను మధ్యలో Pause చేస్తుంది.

```typescript
await page.pause();
```

Execution అక్కడే ఆగిపోతుంది.

Developer Browser ను Manually Inspect చేయవచ్చు.

---

#### 3. Trace Viewer

Playwright లో Most Powerful Debugging Tool.

Failed Test యొక్క

* Screenshot
* DOM Snapshot
* Network Requests
* Console Logs
* Actions Timeline

అన్నీ Store చేస్తుంది.

```text
Click Login
      │
      ▼
API Failed
      │
      ▼
Button Disabled
      │
      ▼
Test Failed
```

అన్నీ Trace Viewer లో కనిపిస్తాయి.

---

#### 4. Screenshots

Failure సమయంలో Screenshot Capture చేయవచ్చు.

```typescript
await page.screenshot({
  path: 'failure.png'
});
```

---

#### 5. Video Recording

Entire Test Execution Video Record చేయవచ్చు.

```typescript
use: {
  video: 'retain-on-failure'
}
```

---

#### 6. Console Logs

Browser Console Errors Capture చేయవచ్చు.

```typescript
page.on('console', msg => {
  console.log(msg.text());
});
```

---

### Why Debugging Important?

✅ Faster Root Cause Analysis

✅ CI Failures Investigation

✅ Network Issue Detection

✅ UI Issue Detection

✅ Better Test Maintenance

---

## 2. Easy to Remember

### Key Points

✅ `--debug` → Playwright Inspector

✅ `page.pause()` → Pause Execution

✅ Trace Viewer → Complete Failure Analysis

✅ Screenshots → UI State Capture

✅ Videos → Execution Recording

✅ Console Logs → Browser Errors

### One-Line Summary

**Playwright provides Inspector, Trace Viewer, Screenshots, Videos, and Console Logs to quickly identify and fix test failures.**

---

## 3. Telugu Interview Answer

Playwright లో Test Failures Debug చేయడానికి Multiple Tools ఉన్నాయి.

Local Debugging కోసం నేను `--debug` Mode మరియు `page.pause()` ఉపయోగిస్తాను. Inspector ద్వారా Step-by-Step Execution చూడవచ్చు.

CI Failures కోసం Trace Viewer చాలా Useful Tool. ఇది ప్రతి Action కి సంబంధించిన Screenshot, DOM Snapshot, Network Activity మరియు Console Logs ను Store చేస్తుంది.

Failure వచ్చినప్పుడు Trace File Download చేసి Open చేస్తే Exact Failure Point కనిపిస్తుంది.

మా Project లో CI లో మాత్రమే వచ్చే Failures ఉండేవి. వాటిని Local గా Reproduce చేయడం కష్టంగా ఉండేది. Trace Viewer ఉపయోగించి కొన్ని నిమిషాల్లో Root Cause Identify చేశాము.

అదనంగా Screenshots, Videos మరియు Browser Console Logs కూడా Debugging కోసం ఉపయోగించాము.

---

## 4. English Interview Answer

Playwright provides multiple debugging capabilities that help identify and resolve test failures efficiently.

For local debugging, I commonly use the `--debug` flag and `page.pause()`. The Playwright Inspector allows step-by-step execution, locator inspection, and action monitoring.

For CI failures, Trace Viewer is the most valuable tool. It records screenshots, DOM snapshots, network activity, console logs, and action timelines for every test step.

When a test fails in CI, I download the trace artifact and open it using Trace Viewer. This allows me to visually inspect exactly what happened during execution without reproducing the issue locally.

I also use screenshots, videos, and browser console logs to capture additional failure details.

In my project, Trace Viewer significantly reduced debugging time by helping us quickly identify synchronization issues, network failures, and UI rendering problems that occurred only in CI environments.

---

## 5. Real-Time Project Example

In my Playwright automation project, some tests passed locally but occasionally failed in the CI pipeline.

Initially, identifying the root cause was difficult because the issue could not be reproduced consistently.

We enabled:

* Trace Viewer
* Screenshots on Failure
* Video Recording
* Console Logging

When a test failed, we downloaded the trace artifact and inspected the timeline.

We discovered that a backend API response was delayed, causing a button to remain disabled longer than expected.

Using Trace Viewer, we identified the issue within minutes and updated the test accordingly.

This significantly reduced investigation time and improved framework stability.

---

## 6. Code Example (TypeScript)

### Debug Mode

```bash
npx playwright test --debug
```

### Pause Execution

```typescript
import { test } from '@playwright/test';

test('Pause Example', async ({ page }) => {

  await page.goto('https://example.com');

  await page.pause();

});
```

### Enable Trace Viewer

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {
    trace: 'on-first-retry'
  }

});
```

### Open Trace Viewer

```bash
npx playwright show-trace trace.zip
```

### Screenshot on Failure

```typescript
await page.screenshot({
  path: 'failure.png',
  fullPage: true
});
```

### Capture Browser Console Logs

```typescript
page.on('console', message => {
  console.log(message.text());
});
```

### Enable Video Recording

```typescript
export default defineConfig({

  use: {
    video: 'retain-on-failure'
  }

});
```

---

✅ **Next: Q8. What is the Locator API and why is it better than Selenium's `findElement()`?**

This is one of the most frequently asked Playwright interview questions because it covers:

* Locator Internals
* Auto Retry
* Lazy Evaluation
* Strict Mode
* Stale Element Problems
* Selenium vs Playwright Comparison
