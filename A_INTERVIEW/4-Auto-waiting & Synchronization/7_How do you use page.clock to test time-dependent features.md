# Q7. How do you use page.clock to test time-dependent features?

## 1. Telugu Concept

`page.clock` అనేది Playwright లో Time-based Features Test చేయడానికి ఉపయోగించే Advanced Feature.

సాధారణంగా Session Timeout, Token Expiry, Countdown Timer, Scheduled Notifications వంటి Features Time మీద ఆధారపడి ఉంటాయి.

Normal గా 24 గంటల Session Timeout Test చేయాలంటే 24 గంటలు Wait చేయాలి.

కానీ Playwright `page.clock` ద్వారా Time ని Fast Forward చేయవచ్చు.

అంటే Real Time Wait చేయకుండా Seconds లో Test Complete చేయవచ్చు.

### Main Methods

### Install Fake Clock

```typescript
await page.clock.install();
```

Browser Time APIs ని Control చేస్తుంది.

---

### Fast Forward Time

```typescript
await page.clock.fastForward(60000);
```

1 Minute Time Skip అవుతుంది.

---

### Fixed Time

```typescript
await page.clock.setFixedTime(
  new Date('2026-01-01')
);
```

Specific Date ని Set చేస్తుంది.

---

## 2. Easy to Remember

✅ Install Fake Clock

✅ Fast Forward Time

✅ No Real Waiting

✅ Test Session Timeout

✅ Test Token Expiry

✅ Test Countdown Timers

### One-Line Summary

**page.clock lets us simulate time instantly without waiting in real life.**

---

## 3. Telugu Interview Answer

Playwright లో page.clock అనేది Time-dependent Features Testing కోసం ఉపయోగించే Advanced Feature.

దీని ద్వారా Browser Time APIs అయిన Date, setTimeout, setInterval వంటి వాటిని Control చేయవచ్చు.

ఉదాహరణకు Session Timeout 24 గంటల తర్వాత Trigger అవుతుందనుకుందాం.

Normal గా Test చేయాలంటే 24 గంటలు Wait చేయాలి.

కానీ page.clock.install() చేసి fastForward() ఉపయోగిస్తే 24 గంటల Time ని వెంటనే Simulate చేయవచ్చు.

నా Project లో Session Expiry మరియు Token Refresh Scenarios ఉంటే page.clock చాలా Useful అవుతుంది.

ఇది Test Execution Time ని భారీగా తగ్గిస్తుంది మరియు Tests ని Deterministic గా చేస్తుంది.

---

## 4. Simple English Answer

Playwright's page.clock allows us to control browser time during testing.

We can simulate hours, days, or weeks instantly without actually waiting.

It is useful for testing session timeouts, token expiry, countdown timers, and scheduled events.

---

## 5. English Interview Answer

page.clock is a Playwright feature that allows us to control and simulate time inside the browser.

It replaces native browser timing APIs such as Date, setTimeout, and setInterval.

Using page.clock.fastForward(), we can instantly move time forward without waiting in real life.

This is especially useful for testing session timeouts, authentication token expiry, countdown timers, and scheduled UI updates.

In automation projects, page.clock helps reduce execution time and makes time-dependent tests reliable and repeatable.

---

## 6. Real-Time Project Example

Suppose an application automatically logs out users after 24 hours of inactivity.

Instead of waiting 24 hours, we can:

1. Install the fake clock.
2. Login to the application.
3. Fast forward 24 hours.
4. Verify the session expired message.

This allows a 24-hour test to complete in a few seconds.

---

## 7. Code Example (TypeScript)

### Session Timeout Test

```typescript
import { test, expect } from '@playwright/test';

test('Session expires after 24 hours', async ({ page }) => {

  await page.clock.install();

  await page.goto('/dashboard');

  await expect(
    page.locator('#welcome-banner')
  ).toBeVisible();

  await page.clock.fastForward(
    24 * 60 * 60 * 1000
  );

  await expect(
    page.locator('#session-expired-modal')
  ).toBeVisible();

});
```

---

### Countdown Timer Test

```typescript
import { test, expect } from '@playwright/test';

test('Countdown Timer', async ({ page }) => {

  await page.clock.install();

  await page.goto('/launch');

  await page.clock.fastForward(
    60 * 1000
  );

  await expect(
    page.locator('#countdown')
  ).toHaveText('00:00');

});
```

---

### Fixed Date Test

```typescript
await page.clock.setFixedTime(
  new Date('2026-01-01T10:00:00Z')
);

await page.goto('/dashboard');
```

---

### Interview Short Answer

> "page.clock allows us to simulate time inside the browser without waiting in real life. I use it for testing session timeouts, token expiry, countdown timers, and scheduled events. Using fastForward(), a 24-hour timeout scenario can be tested in seconds, making automation faster and more reliable."

⚠️ For your Infosys interview, this is an **advanced Playwright feature**. Even if you haven't used it in a real project, it's good to know the concept and one example (session timeout), because senior interviewers may ask about it.
Great. You're building a very good Playwright interview notes document.

So far you have:

✅ Q1 - Auto-Waiting

✅ Q2 - Timeout Levels

✅ Q3 - Explicit Waits

✅ Q4 - waitForResponse() vs page.route()

✅ Q5 - waitForLoadState()

✅ Q6 - expect() Retry Mechanism

Quick Revision (1 Minute)
Question	Keyword
Auto-Waiting	Visible, Stable, Enabled
Timeouts	Test, Action, Navigation, Expect
Explicit Waits	URL, Spinner, Response, Function
waitForResponse	Observe Real API
page.route	Mock/Control API
waitForLoadState	domcontentloaded, load, networkidle
expect()	Auto Retry
isVisible()	One-Time Check
Important Interview Line

"In my Playwright framework, I avoid hard waits like waitForTimeout(). Instead, I use Playwright's auto-waiting, web-first assertions, waitForResponse(), waitForURL(), and locator-based synchronization to make tests reliable and less flaky."

This single statement creates a strong impression in Playwright interviews.

Next advanced topics usually asked in Infosys Playwright interviews are:

Fixtures
storageState
Global Setup & Global Teardown
POM Framework Design
Parallel Execution & Sharding
Network Interception
Trace Viewer
CI/CD Integration

These are the most important topics after synchronization.