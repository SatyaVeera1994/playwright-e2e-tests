**Another cross-platform solution is installing cross-env.**

Update your `package.json`:


```json
"scripts": {
  "debug": "npx playwright test tests/demo/debug_inventory.spec.ts --headed",
    "debug:ui": "npx playwright test tests/demo/debug_inventory.spec.ts --ui --headed",
    "debug:cli": "cross-env PWDEBUG=1 npx playwright test tests/demo/debug_inventory.spec.ts",
    "debug:trace": "npx playwright test tests/demo/debug_inventory.spec.ts --trace on",
  "debug:cli": "cross-env PWDEBUG=1 npx playwright test tests/demo/debug_inventory.spec.ts"
}
```

Install it:

```bash
npm install --save-dev cross-env
```

Then normal command works everywhere:

```bash
npm run debug:cli
```
# Playwright Debugging Options – Simple Notes

## 1. VS Code Test Explorer

* Run and debug tests directly in VS Code
* Easy for beginners
* You can:

  * Run test
  * Debug test
  * See results visually

### Use:

* Install Playwright extension in VS Code
* Click testing icon → Run/Debug

---

## 2. UI Mode (`--ui`)

* Opens Playwright graphical interface
* Helps to:

  * Run tests visually
  * Inspect locators
  * View steps
  * Re-run failed tests

### Command:

```bash
npx playwright test --ui
```

### Best For:

* Learning Playwright
* Easy debugging

---

## 3. Debug Mode (`PWDEBUG=1`)

* Runs test step-by-step
* Browser pauses automatically
* Helps inspect elements and actions

### Windows PowerShell:

```powershell
$env:PWDEBUG=1
npx playwright test
```

### macOS/Linux:

```bash
PWDEBUG=1 npx playwright test
```

### Best For:

* Finding exact failure point
* Locator issues

---

## 4. Trace Viewer

* Records complete test execution
* Shows:

  * Screenshots
  * Network logs
  * Console logs
  * Each test step

### Enable Trace:

```ts
use: {
  trace: 'on'
}
```

### Open Trace:

```bash
npx playwright show-trace trace.zip
```

### Best For:

* Analyzing failed tests later

---

# Quick Interview Point

| Option           | Purpose                  |
| ---------------- | ------------------------ |
| VS Code Explorer | Run/debug inside VS Code |
| UI Mode          | Visual test execution    |
| PWDEBUG          | Step-by-step debugging   |
| Trace Viewer     | Replay failed execution  |
