## 5. What are locator strategies in Playwright and which is recommended?

Answer:
Playwright supports multiple locator strategies:
• page.getByRole() - Recommended (accessibility-focused)
• page.getByText() - For visible text
• page.getByLabel() - For form fields with labelsHere is the direct text transcript from the provided image
• page.getByPlaceholder() - For input placeholders
• page.getByTestId() - For data-testid attributes
• page.locator() - CSS/XPath selectors (last resort)
⭐ Recommended priority: Role ➔ Label ➔ Placeholder ➔ Text ➔ TestId ➔ CSS/XPath

## 6. How do you handle file uploads in Playwright?

In Playwright, we handle file uploads using the setInputFiles() method.
It allows us to upload files such as PDF, images, Excel sheets, and documents into an application.

Method Purpose
setInputFiles() -->Upload a file
setFiles() Upload through FileChooser
waitForEvent('filechooser') Handle custom upload button
setInputFiles([]) Clear uploaded files
toHaveValue() Verify file input value

## Answer:

typescript
// Method 1: Using setInputFiles()
await page.locator('input[type="file"]').setInputFiles('path/to/file.pdf');

// Method 2: Multiple files
await page.locator('input[type="file"]').setInputFiles(['file1.pdf', 'file2.pdf']);

// Method 3: Using file chooser event
const fileChooser = await Promise.all([
page.waitForEvent('filechooser'),
page.locator('button').click()
]);
await fileChooser.setFiles('path/to/file.pdf');

// Method 4: Buffer upload
await page.locator('input[type="file"]').setInputFiles({
name: 'file.txt',
mimeType: 'text/plain',
buffer: Buffer.from('file content')
});
Use code with caution.

## Q7. How do you handle file downloads in Playwright?

"In Playwright, I handle file downloads using the download event. First, I wait for the download event using `page.waitForEvent('download')`. Then I click the download button, capture the downloaded file, and use `download.saveAs()` to save it to a specific location. Finally, I verify the file name and download status."

### 4. Important Methods

| Method                     | Purpose                            |
| -------------------------- | ---------------------------------- |
| `waitForEvent('download')` | Wait for download event            |
| `suggestedFilename()`      | Get downloaded file name           |
| `saveAs()`                 | Save file to specified location    |
| `failure()`                | Check download failure             |
| `path()`                   | Get temporary downloaded file path |

### 2. Telugu Explanation

Mana application lo Download Report button undhi anukundham.

Manam aa button click chesinappudu PDF or Excel file download avuthundhi.

Playwright lo:

1. Download event kosam wait chestham.
2. Download button click chestham.
3. Downloaded file ni capture chestham.
4. `saveAs()` use chesi required location lo save chestham.
5. File download ayyindho verify chestham.

### 3. TypeScript Code – File Download

```
import { test, expect } from '@playwright/test';

test('File download test', async ({ page }) => {

  await page.goto('https://example.com');

  // Wait for download event
  const downloadPromise = page.waitForEvent('download');

  // Click download button
  await page.getByRole('button', { name: 'Download' }).click();

  // Capture downloaded file
  const download = await downloadPromise;

  // Save file
  await download.saveAs('downloads/report.pdf');

  // Verify file name
  expect(download.suggestedFilename()).toBe('report.pdf');

});
```

### 7. Interview Memory Trick

File Upload

setInputFiles()

File Download

waitForEvent('download')

Save Downloaded File

saveAs()

## Q8. How do you handle alerts and popups in Playwright?

"In Playwright, I handle JavaScript alerts, confirms, and prompts using the dialog event. I use `dialog.accept()` to click OK, `dialog.dismiss()` to click Cancel, and `dialog.accept('text')` to enter text in prompt dialogs. For new browser tabs or popups, I use `page.waitForEvent('popup')` to capture and handle the new page."

| Method                       | Purpose                   |
| ---------------------------- | ------------------------- |
| `page.on('dialog')`          | Handle JavaScript dialogs |
| `dialog.accept()`            | Click OK                  |
| `dialog.dismiss()`           | Click Cancel              |
| `dialog.message()`           | Read alert message        |
| `page.waitForEvent('popup')` | Handle new tab            |
| `popup.title()`              | Get popup page title      |

Remember
Alert = `dialog`, New Tab = `popup`.

### 3. Alert Handling – TypeScript Code

```
test('handle dialogs', async ({ page }) => {
  // 1. Alert
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept(); // or dialog.dismiss()
  });

  // 2. Confirm dialog
  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept(); // or dialog.dismiss()
  });

  // 3. Prompt dialog
  page.on('dialog', async dialog => {
    await dialog.accept('My input text');
  });

  // 4. New window/tab popup
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[target="_blank"]')
  ]);
  await popup.waitForLoadState();
  await popup.locator('h1').textContent();
});



Explanation:

- `page.on('dialog')` → Alert event ni listen chesthundhi.
- `dialog.message()` → Alert message read chesthundhi.
- `dialog.accept()` → OK button click chesthundhi.

### 4. Confirm Popup – OK and Cancel

OK click cheyyali ante:

```

page.on('dialog', async dialog => {
await dialog.accept();
});

```

Cancel click cheyyali ante:

```

page.on('dialog', async dialog => {
await dialog.dismiss();
});

```

Telugu: `accept()` ante OK click cheyadam. `dismiss()` ante Cancel click cheyadam.

### 5. Prompt Popup – Enter Text

```

page.on('dialog', async dialog => {
await dialog.accept('Satya');
});

```

Telugu: Prompt popup lo text enter cheyadaniki `accept('Satya')` use chestham.

### 6. Browser Popup / New Tab Handling

Suppose button click chesthe new tab open avuthundhi.

```

test('Handle new popup', async ({ page }) => {

await page.goto('https://example.com');

const popupPromise = page.waitForEvent('popup');

await page.getByText('Open New Tab').click();

const popup = await popupPromise;

await popup.waitForLoadState();

console.log(await popup.title());

});

```

Telugu:

- New tab open avvadaniki wait chestham.
- Button click chestham.
- New tab ni `popup` variable lo capture chestham.
- Aa tab title verify chestham.

### 1. Concept – Simple English

In Playwright, we handle JavaScript alerts and popups using events and page methods.

There are three types of JavaScript dialogs:

1. Alert – Displays an information message.
2. Confirm – Displays OK and Cancel buttons.
3. Prompt – Accepts user input.

Playwright handles these dialogs using the `dialog` event.

### 2. Telugu Explanation

Mana application lo oka button click chesthe alert message vasthundhi anukundham.

Example: "Are you sure you want to delete this record?"

Playwright lo `dialog` event use chesi:

- Alert ni accept cheyochu.
- Confirm popup lo OK or Cancel click cheyochu.
- Prompt popup lo text enter cheyochu

Key Points:

• Use page.on('dialog') to handle alerts, confirms, and prompts.
• Always accept() or dismiss() to avoid test blocking.
• Use Promise.all() to handle new page/tab popups.
• Wait for popup to load and then interact.
• Validate popup content before closing if needed.
```
