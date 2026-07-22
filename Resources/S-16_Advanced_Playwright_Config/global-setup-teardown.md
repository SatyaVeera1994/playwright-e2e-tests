# Global Setup and Teardown setup
https://playwright.dev/docs/test-global-setup-teardown
## Global Set up
Following examples demonstrates deleting allure results for every local run

```ts
import { FullConfig } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default async function globalSetup(config: FullConfig) {
    /* Executed before all the workers start. Good place to keep one-off tasks before all workers start */
    console.log("--- STARTING GLOBAL SETUP ---");
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        const resultsDir = path.resolve(process.cwd(), "allure-results");
        if (fs.existsSync(resultsDir)) {
            fs.rmSync(resultsDir, { recursive: true, force: true });
            console.log(">> Deleted allure-results folder for clean local run.");
        }
    }

    // Add any other global setup logic here:
    // - Database initialization
    // - Test data preparation
    // - Environment configuration
    // - External service setup
    // - Start test servers


    console.log("--- GLOBAL SETUP COMPLETE ---");
}

```

## Global teardown
Following examples demonstrates spining up allure reporter at the end of every local test run

```ts
import { FullConfig } from "@playwright/test";
import { exec } from "child_process";

export default async function globalTeardown(config: FullConfig) {
    /* Executed after all workers complete. Good place for cleanup tasks */
    console.log("--- STARTING TEARDOWN PROCESS ---");

    /**
     * This can be used to:
     * - Release the database connection
     * - Reset application state. e.g. Delete a created record/transaction so you can re-use
     * - Temp folder/files clean up
     * - Generate and open reports
     */

    // Generate Allure report for local runs
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log(" >> Local run detected - starting Allure server...");
        exec("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }

    console.log("--- TEARDOWN PROCESS COMPLETE ---");
}



---

# Global Setup & Teardown అంటే ఏమిటి?

**Global Setup** అంటే

👉 **అన్ని Tests Run అయ్యే ముందు ఒకసారి మాత్రమే చేయాల్సిన పనులు.**

**Global Teardown** అంటే

👉 **అన్ని Tests పూర్తయ్యాక ఒకసారి మాత్రమే చేయాల్సిన పనులు.**

ఇవి మొత్తం Test Suite కోసం ఒక్కసారి మాత్రమే Run అవుతాయి.

---

# Slide లో ఏమి చెబుతోంది?

### "As a Quality Engineer"

అంటే

**QA Engineer గా...**

---

### "I want to define one-off tasks"

**One-off Tasks** అంటే

**ఒక్కసారి మాత్రమే చేయాల్సిన పనులు.**

ఉదాహరణలు:

* Application Start చేయడం
* Database Connection ఏర్పాటు చేయడం
* Test User Create చేయడం
* Login చేసి Authentication Token Generate చేయడం

ఇవి ప్రతి Test ముందు చేయాల్సిన అవసరం లేదు.

ఒక్కసారి చేస్తే సరిపోతుంది.

---

### "Setup and Teardown Activities"

#### Setup అంటే

Test ప్రారంభం కావడానికి ముందు Environment Ready చేయడం.

ఉదాహరణలు

* Browser Launch
* Database Connect
* Login
* API Token Generate
* Test Data Create

---

#### Teardown అంటే

Tests పూర్తయ్యాక Clean చేయడం.

ఉదాహరణలు

* Browser Close
* Database Disconnect
* Test Data Delete
* Logout

---

### "So that I have an ability to perform setup and teardown process in more controlled manner"

అంటే

మనం మొత్తం Project Setup మరియు Cleanup ని **ఒకే చోట నుంచి Control చేయగలుగుతాం.**

దీనివల్ల

* Code Clean అవుతుంది.
* Repeated Code తగ్గుతుంది.
* Execution Fast అవుతుంది.
* Maintenance Easy అవుతుంది.

---

# Hooks vs Global Setup

చాలామందికి ఇక్కడ Confusion వస్తుంది.

| Hooks                       | Global Setup                   |
| --------------------------- | ------------------------------ |
| Test File Level             | Project Level                  |
| beforeEach ప్రతి Test ముందు | మొత్తం Project ముందు ఒక్కసారి  |
| beforeAll ప్రతి File ముందు  | అన్ని Files ముందు ఒక్కసారి     |
| afterAll ప్రతి File తర్వాత  | మొత్తం Project తర్వాత ఒక్కసారి |

---

# Real-Time Example

మన Projectలో **500 Test Cases** ఉన్నాయని అనుకో.

అన్ని Tests Run అయ్యే ముందు

* Website Open
* Login
* Token Generate

ఒక్కసారి చేస్తే సరిపోతుంది.

అదే ప్రతి Testలో చేస్తే

500 సార్లు Login అవుతుంది.

చాలా Time Waste అవుతుంది.

అందుకే

**Global Setup** ఉపయోగిస్తాం.

---

## Example

### global-setup.ts

```typescript
async function globalSetup() {

   Login();

   GenerateToken();

   CreateTestData();

}
```

ఇది ఒక్కసారి మాత్రమే Run అవుతుంది.

---

### అన్ని Tests Run అవుతాయి

```
Test1

Test2

Test3

Test4

Test5
```

---

### చివరగా Global Teardown

```typescript
async function globalTeardown() {

   DeleteTestData();

   Logout();

   CloseConnection();

}
```

ఇది కూడా ఒక్కసారి మాత్రమే Run అవుతుంది.

---

# Execution Flow

```text
Global Setup

↓

Test1

↓

Test2

↓

Test3

↓

Test4

↓

Global Teardown
```

---

# ఎప్పుడు ఉపయోగిస్తాం?

ఉదాహరణకు

* Login Token Generate చేయాలి.
* Database Connect చేయాలి.
* Test User Create చేయాలి.
* Environment Ready చేయాలి.
* చివర్లో అన్ని Test Data Delete చేయాలి.

ఇలాంటి పనులు **Global Setup & Global Teardown**లో చేస్తాం.

---

# Interview Answer (English)

> **Global Setup and Global Teardown in Playwright are used to perform one-time setup and cleanup activities for the entire test suite. Global Setup runs once before all tests to prepare the environment, while Global Teardown runs once after all tests to clean up resources such as test data, database connections, or authentication tokens.**

---

# Interview Answer (తెలుగులో)

> **Playwrightలో Global Setup మరియు Global Teardown అనేవి మొత్తం Project కోసం ఒక్కసారి మాత్రమే Run అయ్యే Methods. Global Setup అన్ని Tests ప్రారంభమయ్యే ముందు Environment Ready చేస్తుంది. Global Teardown అన్ని Tests పూర్తయ్యాక Cleanup చేస్తుంది. వీటిని Login Token Create చేయడం, Database Connection ఏర్పాటు చేయడం, Test Data Create/Delete చేయడం వంటి పనులకు ఉపయోగిస్తాం.**

---

## గుర్తుంచుకోవడానికి చిన్న ట్రిక్

**🏠 ఇల్లు కట్టే ఉదాహరణ:**

* **Global Setup** = అతిథులు రాకముందు ఇంటిని ఒకసారి సిద్ధం చేయడం.
* **Tests** = అతిథులు ఇంట్లో ఉండే సమయం.
* **Global Teardown** = అతిథులు వెళ్లిపోయాక ఇంటిని ఒకసారి శుభ్రం చేయడం.

అంటే **Global Setup & Teardown** మొత్తం ప్రాజెక్ట్‌కి వర్తిస్తాయి, కానీ **Hooks (`beforeEach`, `afterEach`)** ప్రతి Test లేదా ప్రతి Test File స్థాయిలో పనిచేస్తాయి. ఇది ఇంటర్వ్యూలో తరచుగా అడిగే తేడా.
