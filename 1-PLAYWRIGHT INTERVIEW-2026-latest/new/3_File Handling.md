# File Handling in Playwright — JavaScript

Playwright lo file handling ante mainly file upload, file download, and file content read/write cheyadam.

Interview preparation kosam important concepts ni simple examples tho chuddam.

## 1. File Upload

Website lo file upload cheyadaniki `setInputFiles()` use chestam.

```
import { test, expect } from '@playwright/test';

test('File upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload')
    .setInputFiles('tests/files/sample.pdf');

  await page.locator('#file-submit').click();

  await expect(page.locator('#uploaded-files'))
    .toContainText('sample.pdf');
});
```

Simple explanation:

- `setInputFiles()` — file ni upload input ki attach chestundi.
- `click()` — Upload button ni click chestundi.
- `toContainText()` — upload ayina file name verify chestundi.

## 2. File Download

Download event ni wait chesi, file ni save chestam.

```
test('File download', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');

  await page.getByText('some-file.txt').click();

  const download = await downloadPromise;

  await download.saveAs(
    `downloads/${download.suggestedFilename()}`
  );
});
```

Important methods:

- `waitForEvent('download')` — download start ayye varaku wait chestundi.
- `suggestedFilename()` — suggested file name istundi.
- `saveAs()` — file ni specified location lo save chestundi.

Note: `downloads` folder munduga create cheyyali.

## 3. Read a File Using Node.js

Test data ni JSON file nunchi read cheyadaniki Node.js `readFileSync()` use cheyochu.

`tests/data/user.json`

```
{
  "username": "standard_user",
  "password": "secret_sauce"
}
```

Test file:

```
import { test, expect } from '@playwright/test';
import fs from 'node:fs';

test('Read test data', async ({ page }) => {
  const data = JSON.parse(
    fs.readFileSync('tests/data/user.json', 'utf-8')
  );

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill(data.username);
  await page.locator('#password').fill(data.password);
  await page.locator('#login-button').click();

  await expect(page.locator('.inventory_list')).toBeVisible();
});
```

Easy meaning:

- `readFileSync()` — file content ni read chestundi.
- `'utf-8'` — content ni readable text ga istundi.
- `JSON.parse()` — JSON text ni JavaScript object ga convert chestundi.
- `data.username` — JSON file nunchi username access chestundi.

## 4. Write Data to a File

Test result or data ni text file lo write cheyadaniki `writeFileSync()` use cheyochu.

```
import fs from 'node:fs';

fs.writeFileSync(
  'test-results/result.txt',
  'Login test passed',
  'utf-8'
);
```

Idi `result.txt` file lo `Login test passed` ani write chestundi. `test-results` folder munduga exist avvali.

## 5. Interview Questions

| Question                         | Simple English answer                                                          |
| -------------------------------- | ------------------------------------------------------------------------------ |
| How do you upload a file?        | I use `setInputFiles()`.                                                       |
| How do you handle downloads?     | I wait for the `download` event and save the file using `saveAs()`.            |
| How do you read a file?          | I use Node.js `readFileSync()` or `readFile()`.                                |
| How do you read JSON test data?  | I read the file and use `JSON.parse()` to convert it into a JavaScript object. |
| How do you write data to a file? | I use `writeFileSync()` or `writeFile()`.                                      |

### Quick revision

- Upload: `setInputFiles()`
- Download: `waitForEvent('download')`
- Save download: `saveAs()`
- Read file: `readFileSync()`
- Parse JSON: `JSON.parse()`
- Write file: `writeFileSync()`

Interview lo first ee three Playwright scenarios — upload, download, and reading test data from a file — practice cheyyadam useful.
