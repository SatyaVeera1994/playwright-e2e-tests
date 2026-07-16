# Q5. How do you manage multiple environments in Playwright?

## 1. Telugu Concept

### Multiple Environments అంటే ఏమిటి?

Software Projects లో Different Environments ఉంటాయి.

ఉదాహరణ:

```text id="j5k8m2"
DEV
 │
QA
 │
UAT
 │
PROD
```

ప్రతి Environment కి:

* Different URL
* Different Credentials
* Different Configurations

ఉంటాయి.

---

### Problem

Hardcode చేస్తే:

```typescript id="n4v7x1"
await page.goto(
 'https://qa-app.com'
);
```

Environment Change అయితే Code Change చేయాలి.

---

### Solution

Environment Variables ఉపయోగించాలి.

```text id="w3c9r6"
.env.qa

.env.uat

.env.prod
```

---

### Flow

```text id="f6q2k8"
Read ENV
    │
    ▼
Load URL
    │
    ▼
Run Tests
```

---

### Benefits

✅ Reusable Framework

✅ Easy Environment Switching

✅ No Hardcoding

✅ CI/CD Friendly

---

## 2. Easy to Remember

✅ DEV

✅ QA

✅ UAT

✅ PROD

✅ .env Files

✅ No Hardcoded URLs

### One-Line Summary

**Multiple environments are managed using environment variables and configuration files instead of hardcoded values.**

### Selenium vs Playwright

| Selenium            | Playwright            |
| ------------------- | --------------------- |
| Custom Setup Needed | Easy with .env        |
| More Configuration  | Cleaner Configuration |
| Manual Switching    | Dynamic Switching     |

---

## 3. Telugu Interview Answer

Playwright Framework లో Multiple Environments Handle చేయడానికి Environment Variables మరియు .env Files ఉపయోగిస్తాము.

సాధారణంగా DEV, QA, UAT మరియు PROD Environments ఉంటాయి. ప్రతి Environment కి Different URLs, Credentials మరియు Configurations ఉంటాయి.

Hardcoded Values ఉపయోగించకుండా .env Files లో Configuration Store చేస్తాము.

Framework Runtime లో Environment Variable Read చేసి Appropriate Configuration Load చేస్తుంది.

మా Project లో QA, Stage మరియు Production Environments ఉన్నాయి. npm Commands ద్వారా Environment Select చేసి Tests Execute చేసేవాళ్ళం.

దీనివల్ల Code Changes లేకుండా Environment Switching సులభమైంది.

---

## 4. Simple English Answer

In Playwright, multiple environments are managed using environment variables.

Each environment has its own:

* URL
* Credentials
* Configuration

We store these values in `.env` files and load them dynamically.

This avoids hardcoding and makes environment switching easy.

---

## 5. English Interview Answer

In Playwright, I manage multiple environments using environment variables and configuration files.

Different environments such as Development, QA, UAT, and Production usually have different URLs, credentials, and application settings.

Instead of hardcoding these values, I store them in separate `.env` files and load them dynamically at runtime.

The Playwright configuration reads the selected environment and applies the appropriate settings.

In my project, we maintained separate configurations for QA, Staging, and Production environments. The environment was selected through npm scripts and CI/CD pipeline variables.

This approach improved maintainability, reduced configuration errors, and enabled seamless environment switching without code changes.

---

## 6. Real-Time Project Example

In my automation project, we had:

```text id="u2m7r5"
QA
https://qa-app.com

UAT
https://uat-app.com

PROD
https://app.com
```

Instead of modifying code every time:

```typescript id="z8p4c1"
page.goto(
 'https://qa-app.com'
);
```

We used:

```typescript id="t5x9n3"
page.goto(process.env.BASE_URL!);
```

Now environment selection happens automatically.

Example:

```bash
npm run test:qa
npm run test:uat
```

No code changes required.

---

## 7. Code Example (TypeScript)

### .env.qa

```text
BASE_URL=https://qa-app.com
USERNAME=qauser
PASSWORD=qapassword
```

### .env.uat

```text
BASE_URL=https://uat-app.com
USERNAME=uatuser
PASSWORD=uatpassword
```

### playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
 path: `.env.${process.env.ENV}`
});

export default defineConfig({

 use: {
   baseURL: process.env.BASE_URL
 }

});
```

### Test Example

```typescript
import { test } from '@playwright/test';

test('Open Application', async ({ page }) => {

 await page.goto('/');

});
```

### Run Commands

```bash
ENV=qa npx playwright test
```

```bash
ENV=uat npx playwright test
```

```bash
ENV=prod npx playwright test
```

---

✅ **Next: Q6. What is `storageState` and how do you implement authentication in Playwright Frameworks?** (One of the most frequently asked Playwright interview questions.)
