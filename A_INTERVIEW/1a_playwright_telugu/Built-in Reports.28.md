# Playwright Built-in Reports Overview – Telugu

Playwright lo Reports ante mana automation tests execute ayyaka, enni tests pass ayyayi, enni fail ayyayi, failure enduku vachindi ane details chudataniki use chestham.

Playwright lo HTML, List, JSON lanti built-in reporters unnayi.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com&sz=32)

GitHub

## 1. Main reports overview

[The Test Drama: Cypress vs Playwright - Control Your Tests (Part 1): ANNOTATIONS & GROUP TESTS - DEV Community](https://images.openai.com/static-rsc-4/U7-6R_77R6cJCpSkltf8gwkAqPn7m-hYc0sZSZYF_d5RcnsxRBeE3XJOm2mpaSzmExwXPaX-sBDvprDHV_WjZ8PY8iiCuY8O_31h4g365SPWqFPyRt1W2qXU3-yZ4BVLwZVor0AkXubI6iV9GBaqNEJH37uvn9SwHj88vJ2yAZQ?purpose=inline)

HTML Report

Visual report

Browser lo open chesi test results, failures, execution details chudachu.

Command: `npx playwright show-report`

[What is Playwright Testing? Complete Guide to the Playwright Test Framework](https://images.openai.com/static-rsc-4/J49V2koOGdjakmEwxWQCojCpYNsjRmMznwPygC5CYo2iin0pJ8ykfT6TnF8KLrI35uJrYyzaM0BaPtDWoK_KhYnWmjEOKsCutIzkEu9S40koucTjWONsCVKA6vaZYnJULky2L3sKbsr64vf3cwdMEtBGHS2igM2-s0H9ump6kck?purpose=inline)

List Report

Terminal output

Test names, pass/fail status, execution progress terminal lo display avutayi.

Command: `npx playwright test --reporter=list`

[Playwright add fields in json test result - Stack Overflow](https://images.openai.com/static-rsc-4/KcgQYE03hhcifX6CqsiekjRgk5mkyGjxcxqphUhXveigPQIGIujJnQO7drue_8okyW5XbyQoXEQrU9pSJj-jbaP0ij5mk3itb0wVVzb5D9QrCQw8aRrNwTouk-_GX2dTVWqNFx5rOsb8pYbPXu5y1KpdlJxB6Vq6dQswbyobwI8?purpose=inline)

JSON Report

Structured data

Test results ni JSON format lo save chesi, vere tools or scripts tho process cheyachu.

Command: `npx playwright test --reporter=json`

## 2. List Reporter – step-by-step

List reporter ante terminal lo test execution results ni line-by-line chupistundi.

```
npx playwright test --reporter=list
```

Example output:

```
Running 3 tests using 2 workers

✓ Login test passed
✓ Dashboard test passed
✘ Invalid login test failed

2 passed
1 failed
```

Idi illustrative output; actual wording and duration mee test results batti marutayi.

Telugu lo:

- `✓` → Test pass ayyindi.
- `✘` → Test fail ayyindi.
- `2 passed` → Rendu tests successful.
- `1 failed` → Oka test lo issue vachindi.

List reporter ni local development lo quick feedback kosam use chestham. Failure details ni kuda terminal lo chudachu.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com&sz=32)

GitHub

## 3. HTML Reporter – detailed report

HTML reporter real-time projects lo chala useful. Test execution ayyaka browser lo report open chesi failures analyze cheyachu.

### Step 1: Configure HTML reporter

`playwright.config.ts` lo:

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html', { open: 'never' }],
  ],
});
```

`open: 'never'` ante test execution ayyaka report automatic ga open avvadu.

### Step 2: Run tests

```
npx playwright test
```

### Step 3: Open report

```
npx playwright show-report
```

By default, HTML report `playwright-report` folder lo generate avutundi.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com&sz=32)

GitHub

### HTML report lo em chudachu?

- Total tests and pass/fail status
- Failed test details
- Error messages and stack traces
- Test execution steps and duration
- Configure chesina screenshots, traces, and other attachments

Example: Login test fail ayithe, report open chesi ye assertion fail ayyindo identify chesi debugging start cheyachu.

## 4. JSON Reporter – results file generate cheyadam

JSON reporter machine-readable format lo test results ni save chestundi.

`playwright.config.ts`:

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['json', { outputFile: 'test-results.json' }],
  ],
});
```

Run:

```
npx playwright test
```

Execution ayyaka project root lo `test-results.json` generate avutundi.

Example JSON structure:

```
{
  "suites": [],
  "stats": {
    "expected": 2,
    "unexpected": 1,
    "skipped": 0,
    "flaky": 0
  }
}
```

Idi simplified example matrame. Actual JSON file lo suites, test cases, results, errors, and additional metadata untayi.

JSON enduku use chestham?

- Test results ni scripts tho analyze cheyadaniki.
- CI/CD pipeline lo results process cheyadaniki.
- Custom dashboards or reporting integrations kosam.

JSON report ni browser lo chuse HTML report laga direct ga use cheyyaru; structured data ni parse chese tools kosam idi useful.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com&sz=32)

GitHub

## 5. HTML + List + JSON reports anni okesari

Real-time automation project lo multiple reporters configure cheyachu.

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results.json' }],
  ],
});
```

Run:

```
npx playwright test
```

List

Execution progress in terminal

HTML

Human-readable report in browser

JSON

Structured results in a JSON file

## 6. Quick comparison

| Feature           | List          | HTML                    | JSON                         |
| ----------------- | ------------- | ----------------------- | ---------------------------- |
| Output            | Terminal      | Browser                 | JSON file                    |
| Human-readable    | Yes           | Yes, visual             | Partly                       |
| Failure analysis  | Basic details | Detailed report         | Parse results and errors     |
| Dashboard view    | No            | Yes                     | No built-in visual dashboard |
| CI/CD integration | Console logs  | Publish report artifact | Process using scripts/tools  |

## 7. Interview questions

Q1. What are built-in reporters in Playwright?

Playwright provides built-in reporters such as List, Line, Dot, HTML, JSON, JUnit, and others. They present test execution results in different formats.

Q2. Which reporter do you use in real-time projects?

I commonly use the List reporter for quick terminal feedback and HTML reporter for detailed failure analysis. JSON or JUnit can be added when the CI/CD pipeline requires machine-readable results.

Q3. How do you generate an HTML report?

I configure `reporter: [['html', { open: 'never' }]]`, execute tests using `npx playwright test`, and open the report using `npx playwright show-report`.

Q4. What is the difference between HTML and JSON reports?

HTML is designed for people to review test results visually. JSON stores structured test execution data for scripts, integrations, and automated analysis.

Q5. Can we use multiple reporters together?

Yes. Playwright supports multiple reporters in the same configuration. For example, I can configure List, HTML, and JSON reporters together.

Official reference: [Playwright Test Reporters](https://playwright.dev/docs/test-reporters?utm_source=chatgpt.com).&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com&sz=32)

GitHub

## Practice task

Practice these steps in your own project.

Configure List reporter

Generate and open HTML report

Generate test-results.json

Configure all three reporters together

0 of 4 completed

My recommendation: first practice List and HTML reports, then add JSON. Ee three reporters difference clear ga telisthe real-time project lo test execution results ni explain cheyadam easy avutundi.
