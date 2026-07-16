## Different Environment Data Handling

1. Create a config fixture which can be used across different environment

```ts
// tests/helpers/config-fixtures.ts
import { test as base } from "@playwright/test";

export type EnvConfig = {
    envName: string;
    appURL: string;
    dbConfig: {};
};

export const test = base.extend<EnvConfig>({
    // Define options and provide default values.
    // We can later override them in the config.
    envName: ["provide-a-val", { option: true }],
    appURL: ["provide-a-val", { option: true }],
    dbConfig: [{}, { option: true }],
});

```

2. Create a new config file

```ts
// config/test.playwright.config.ts

import { baseConfig } from "../playwright.config.ts";
import { defineConfig, devices } from "@playwright/test";
import type { EnvConfig } from "../tests/helpers/config-fixtures.ts";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EnvConfig>({
    ...baseConfig,
    testDir: "../tests", // Fix path from config folder
    use: {
        ...baseConfig.use, // Required
        envName: "test",
        appURL: "https://katalon-demo-cura.herokuapp.com/",
        dbConfig: {
            dbname: "",
            host: "test",
            port: "1234",
        },
    },
});
```

3. Use the variable in a test 

```ts
// tests/functional/make-apptmnt.spec.ts
    test.beforeEach("Launch Homepage", async ({ page }, testInfo) => {
        // Access the custom env specific value as below
        const envConfig = testInfo.project.use as any; // Note: project and use are just objects ✅ // @ts-ignore
        console.log(`>>> Final Config: ${JSON.stringify(testInfo.config)}`);
        console.log(`>>> Custom Env Config: ${JSON.stringify(envConfig.envName)}`);

        // Launch Home page
        await page.goto(envConfig.appURL);
        // Rest of the steps
    });

```

4. Done! 🎉


## Handling Environment Specific Data - Notes

### What is Environment Specific Data?

Different environments (Dev, QA, Stage, Prod) lo different values untayi.

Example:

```text
DEV  -> https://dev.myapp.com
QA   -> https://qa.myapp.com
PROD -> https://myapp.com
```

Hardcode cheyyakunda environment batti values change avvali.

---

## In this session...

### Create a Config Fixture

#### Step 1

Create a file:

```text
tests/helpers/config-fixtures.ts
```

#### Step 2

Define Environment Config Type

```ts
type EnvConfig = {
  baseUrl: string;
  username: string;
  password: string;
};
```

Purpose:

* Environment variables store cheyyadam.
* Type safety provide cheyyadam.

---

#### Step 3

Provide Default Values

```ts
const defaultConfig = {
  baseUrl: "https://qa.myapp.com",
  username: "qauser",
  password: "password"
};
```

Rule:

* Every option ki default value undali.

---

#### Step 4

Extend Playwright Test

```ts
export const test = base.extend({
  envConfig: defaultConfig
});
```

Result:

```ts
test("sample", async ({ page, envConfig }) => {
});
```

`envConfig` direct ga test lo available untundi.

---

### Create New Config File

#### Step 1

Create:

```text
config/test.playwright.config.ts
```

---

#### Step 2

Root Config Change

Before:

```ts
export default defineConfig({})
```

After:

```ts
export const baseConfig = defineConfig({})
```

Purpose:

* Reuse configuration in multiple environments.

---

#### Step 3

Import Base Config

```ts
import { baseConfig } from "../playwright.config";
```

---

#### Step 4

Extend Config Using Spread Operator

```ts
export default defineConfig({
  ...baseConfig,

  use: {
    baseURL: "https://test.myapp.com"
  }
});
```

Purpose:

* Existing settings preserve avuthayi.
* New settings add cheyyachu.

---

## Flow Diagram

```text
playwright.config.ts
        ↓
    baseConfig
        ↓
test.playwright.config.ts
        ↓
 Environment Settings
        ↓
 config-fixtures.ts
        ↓
   Test Cases
```

---

## Advantages

✅ No hardcoded URLs

✅ Easy environment switching

✅ Reusable configuration

✅ Better maintenance

✅ Scalable framework

---

## Interview Answer (Easy English)

**Q: Why do we use Environment Specific Data?**

**Answer:**

> We use environment-specific data to run the same tests in different environments like Dev, QA, Stage, and Production without changing the test code. Configuration values such as URLs, usernames, and passwords are stored separately and loaded based on the selected environment.

### Easy One-Line Answer

👉 **Environment-specific data helps us run the same Playwright tests across multiple environments using different configurations without modifying the test scripts.**
