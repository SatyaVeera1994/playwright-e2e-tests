# Q3. Walk through a Production-Grade `playwright.config.ts`

## 1. Telugu Concept

### playwright.config.ts అంటే ఏమిటి?

`playwright.config.ts` అనేది Playwright Framework యొక్క Main Configuration File.

Framework ఎలా Run అవ్వాలి అనే అన్ని Settings ఇందులో ఉంటాయి.

ఉదాహరణకు:

✅ Browser Selection

✅ Parallel Execution

✅ Retries

✅ Reports

✅ Screenshots

✅ Videos

✅ Base URL

✅ Global Setup

---

### Framework Flow

```text id="b2m1v7"
playwright.config.ts
          │
          ▼
Browser Setup
          │
          ▼
Test Execution
          │
          ▼
Reports
```

---

### Important Configurations

### testDir

Tests ఎక్కడ ఉన్నాయో చెబుతుంది.

```typescript id="a8n4k2"
testDir: './tests'
```

---

### retries

Failed Test ను Retry చేస్తుంది.

```typescript id="r3x6p1"
retries: 2
```

---

### workers

Parallel Execution.

```typescript id="u7m5c8"
workers: 4
```

---

### reporter

Reports Generate చేస్తుంది.

```typescript id="k9d2j4"
reporter: [['html']]
```

---

### use

Common Settings.

```typescript id="q1w8z6"
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
}
```

---

### projects

Cross Browser Testing.

```typescript id="f4h7y3"
projects: [
  { name: 'chromium' },
  { name: 'firefox' }
]
```

---

### globalSetup

Tests ముందు Run అవుతుంది.

```typescript id="t6v1e9"
globalSetup: './globalSetup.ts'
```

---

## 2. Easy to Remember

✅ testDir → Test Location

✅ retries → Re-run Failed Tests

✅ workers → Parallel Execution

✅ reporter → Reports

✅ use → Common Settings

✅ projects → Cross Browser Testing

### One-Line Summary

**playwright.config.ts is the central configuration file that controls the entire Playwright framework.**

---

## 3. Telugu Interview Answer

playwright.config.ts అనేది Playwright Framework యొక్క Central Configuration File.

Framework Behavior మొత్తం ఈ File ద్వారా Control అవుతుంది.

ఇందులో Test Directory, Retries, Parallel Execution, Browser Configuration, Reporting, Screenshots, Videos మరియు Global Setup వంటి Settings Configure చేస్తాము.

మా Project లో CI Environment కోసం retries: 2 మరియు workers: 4 ఉపయోగించాము.

Trace Files, Screenshots మరియు Videos Failure సమయంలో మాత్రమే Capture అయ్యేలా Configure చేశాము.

అలాగే Cross Browser Testing కోసం Chromium, Firefox మరియు WebKit Projects Configure చేశాము.

playwright.config.ts సరిగ్గా Configure చేయడం వల్ల Framework Scalability, Maintainability మరియు CI/CD Integration Improve అవుతాయి.

---

## 4. Simple English Answer

playwright.config.ts is the main configuration file in Playwright.

It controls:

* Browser Settings
* Retries
* Parallel Execution
* Reports
* Screenshots
* Videos

It helps manage the entire automation framework from one place.

---

## 5. English Interview Answer

The `playwright.config.ts` file is the central configuration file of a Playwright framework.

It defines how tests should execute, including browser settings, retries, parallel execution, reporting, screenshots, videos, and environment-specific configurations.

In production frameworks, I typically configure:

* Parallel execution using workers
* Retry mechanisms for CI stability
* HTML and JUnit reporting
* Trace collection on failures
* Cross-browser testing projects
* Global setup and authentication

One configuration I always highlight is `forbidOnly: true`, which prevents accidental commits of `test.only()` to CI environments.

In my projects, a well-structured configuration file helped improve framework maintainability, execution speed, and debugging capabilities.

---

## 6. Real-Time Project Example

In my Playwright Automation Framework, we configured:

```text id="g4c2n8"
4 Parallel Workers
        │
        ▼
Retries for CI
        │
        ▼
HTML Reports
        │
        ▼
Trace Viewer
```

This reduced regression execution time and helped quickly identify failures through reports and traces.

We also configured multiple browsers:

* Chromium
* Firefox
* WebKit

for cross-browser validation.

---

## 7. Code Example (TypeScript)

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 4 : undefined,

  forbidOnly: !!process.env.CI,

  reporter: [
    ['html'],
    ['junit', { outputFile: 'results.xml' }]
  ],

  use: {

    baseURL: 'https://example.com',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'

  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }

  ],

  globalSetup: './globalSetup.ts'

});
```

---

✅ **Next: Q4. How does Global Setup work and what should you put in it?** (This is especially important because you already worked with `globalSetup`, `storageState`, and login automation in Playwright.)
