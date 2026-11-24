# Q10. How do you integrate Playwright with CI/CD?

### ✅ English Answer

“I integrate Playwright with CI pipelines to run tests automatically, generate reports, and upload artifacts.”

## 1. Telugu Concept
"When developers push application code changes to the repository, the CI/CD pipeline automatically triggers and executes Playwright test suites. I then review the reports and analyze any failures."

Telugu lo:

"Developer application lo change chesi code push chesthe, CI/CD automatic ga start ayi Playwright tests run chestundi. Nenu reports check chesi failures ni analyze chestanu.

### CI/CD అంటే ఏమిటి?

**CI (Continuous Integration)** మరియు **CD (Continuous Delivery/Deployment)** అనేవి Software Development Process ను Automate చేయడానికి 
ఉపయోగించే Practices.

Developer Code Commit చేసిన వెంటనే:

```text
Code Commit
      │
      ▼
Build
      │
      ▼
Automation Tests
      │
      ▼
Reports
      │
      ▼
Deployment
```

ఈ Process మొత్తం Automatically Run అవుతుంది.

---

### Playwright CI/CD లో ఎలా ఉపయోగిస్తారు?

Playwright Tests ను:

* GitHub Actions
* Jenkins
* Azure DevOps
* GitLab CI

లో Run చేయవచ్చు.

---

### CI Pipeline Stages

#### Stage 1: Install Dependencies

```bash id="b7h9f1"
npm install
```

---

#### Stage 2: Install Browsers

```bash id="q5r2a8"
npx playwright install
```

---

#### Stage 3: Run Tests

```bash id="m3k8w4"
npx playwright test
```

---

#### Stage 4: Generate Reports

```bash id="n6v1p7"
npx playwright show-report
```

---

### Important CI Features

#### HTML Reports

Test Results View చేయవచ్చు.

---

#### Trace Viewer

Failed Test Analysis చేయవచ్చు.

---

#### Screenshots

Failure సమయంలో Capture అవుతాయి.

---

#### Videos

Entire Test Execution Record అవుతుంది.

---

#### Sharding

Large Test Suites ను Multiple Machines లో Run చేయవచ్చు.

---

### forbidOnly

Production CI లో చాలా Important.

```typescript id="k4x9z2"
forbidOnly: true
```

Suppose Developer

```typescript id="c8t5m3"
test.only(...)
```

Commit చేస్తే

CI Pipeline Fail అవుతుంది.

ఇది Accidental Commits ను Prevent చేస్తుంది.

---

### Benefits

✅ Automated Testing

✅ Faster Feedback

✅ Better Quality

✅ Early Bug Detection

✅ Continuous Delivery

---

## 2. Easy to Remember

### Key Points

✅ Code Commit → Pipeline Starts

✅ Install → Test → Report

✅ HTML Reports

✅ Trace Viewer

✅ Sharding Support

✅ forbidOnly Prevents Mistakes

### One-Line Summary

**Playwright integrates seamlessly with CI/CD pipelines by automatically executing tests, generating reports, and providing debugging artifacts after every code change.**

---

## 3. Telugu Interview Answer

Playwright CI/CD Integration చాలా Simple మరియు Powerful.

Developer Code Commit చేసిన వెంటనే CI Pipeline Trigger అవుతుంది.

Pipeline లో మొదట Dependencies Install చేస్తాము. తర్వాత Playwright Browsers Install చేసి Automation Tests Execute చేస్తాము.

Test Execution తర్వాత HTML Reports, Screenshots, Videos మరియు Trace Files Generate చేస్తాము.

Large Regression Suites కోసం Parallel Execution మరియు Sharding ఉపయోగిస్తాము.

మా Project లో GitHub Actions ఉపయోగించి CI Pipeline Configure చేశాము. ప్రతి Pull Request పై Playwright Tests Run అయ్యేవి. Failed Tests కోసం Trace Files మరియు Screenshots Upload చేసేవాళ్ళం.

అదనంగా `forbidOnly: true` Enable చేసి Accidental `test.only()` Commits ను Prevent చేశాము.

దీనివల్ల Code Quality Improve అయింది మరియు Deployment ముందు Issues త్వరగా Identify చేయగలిగాము.

---

## 4. English Interview Answer

Playwright provides excellent support for CI/CD integration and works seamlessly with platforms such as GitHub Actions, Jenkins, Azure DevOps, and GitLab CI.

In a typical CI pipeline, the process starts when a developer commits code or creates a pull request. The pipeline installs project dependencies, installs Playwright browsers, executes automated tests, and generates reports.

Playwright also provides valuable debugging artifacts such as HTML reports, screenshots, videos, and trace files. These artifacts make it much easier to investigate failures occurring in CI environments.

For large regression suites, I use parallel execution and sharding to reduce execution time. I also enable `forbidOnly: true` to prevent accidental commits of `test.only()`.

In my project, Playwright tests were executed automatically on every pull request. Reports and trace artifacts were uploaded for failed runs, enabling faster root cause analysis and improving release confidence.

---

## 5. Real-Time Project Example

In my Playwright automation project, we integrated our framework with GitHub Actions.

Pipeline Flow:

```text id="fdj7r2"
Developer Commit
        │
        ▼
GitHub Actions Triggered
        │
        ▼
Install Dependencies
        │
        ▼
Install Browsers
        │
        ▼
Run Playwright Tests
        │
        ▼
Generate Reports
        │
        ▼
Upload Trace Files
```

We configured:

* Parallel Execution
* HTML Reports
* Trace Viewer
* Screenshots on Failure
* Video Recording
* Sharding

This reduced regression execution time and allowed the team to identify failures quickly.

---

## 6. Code Example (TypeScript)

### Playwright Configuration

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({

  forbidOnly: true,

  retries: 2,

  workers: 4,

  use: {

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'

  }

});
```

### GitHub Actions Workflow

```yaml
name: Playwright Tests

on:
  push:
  pull_request:

jobs:

  test:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

        with:
          node-version: 20

      - run: npm ci

      - run: npx playwright install --with-deps

      - run: npx playwright test

      - uses: actions/upload-artifact@v4

        if: always()

        with:
          name: playwright-report
          path: playwright-report/
```

### Run Tests in CI

```bash
npx playwright test
```

### Run Tests with Sharding

```bash
npx playwright test --shard=1/4
```

---

🎉 **Congratulations!**

You now have the **Top 10 Must-Know Playwright Interview Questions**:

✅ Q1. Playwright vs Selenium
✅ Q2. Auto Waiting
✅ Q3. Fixtures
✅ Q4. Network Interception
✅ Q5. storageState
✅ Q6. Parallel Execution & Sharding
✅ Q7. Debugging
✅ Q8. Locator API
✅ Q9. POM (Page Object Model)
✅ Q10. CI/CD Integration

These are exactly the kind of questions frequently asked for **QA Automation / SDET interviews with 3–6+ years of experience**.
