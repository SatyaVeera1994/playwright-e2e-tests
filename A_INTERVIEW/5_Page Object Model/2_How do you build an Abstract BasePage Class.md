# Q3. How do you build an Abstract BasePage Class?

## 1. Telugu Concept

BasePage అనేది అన్ని Page Classes కి Parent Class.

Common Methods అన్నింటినీ BasePage లో ఉంచుతాము.

ఉదాహరణకు:

* navigate()
* click()
* fill()
* selectOption()
* waitForPageLoad()

వంటి Methods ప్రతి Page లో మళ్లీ మళ్లీ రాయకుండా BasePage లో ఒకసారి రాస్తాము.

### Inheritance Flow

```text
BasePage
   ↑
LoginPage
   ↑
DashboardPage
   ↑
UsersPage
```

ఇలా అన్ని Pages BasePage ని Extend చేస్తాయి.

### Abstract Class అంటే?

Abstract Class ను Direct గా Object Create చేయలేము.

❌ Wrong

```typescript
const page = new BasePage();
```

✅ Correct

```typescript
const loginPage = new LoginPage(page);
```

---

## 2. Easy to Remember

✅ Common Methods in One Place

✅ Reusable Code

✅ Less Duplication

✅ Easy Maintenance

✅ Parent Class for All Pages

✅ Uses Inheritance

### One-Line Summary

**BasePage contains common functionality shared by all page objects.**

---

## 3. Telugu Interview Answer

Playwright Framework లో నేను Abstract BasePage Class ఉపయోగిస్తాను.

అన్ని Common Methods BasePage లో ఉంచుతాను.

ఉదాహరణకు navigate(), click(), selectOption() వంటి Methods.

LoginPage, DashboardPage, UsersPage వంటి Classes BasePage ని Extend చేస్తాయి.

దీనివల్ల Duplicate Code తగ్గుతుంది.

ఏదైనా Common Logic Change అయితే BasePage లో మాత్రమే Update చేస్తే అన్ని Pages కి Apply అవుతుంది.

Abstract Keyword ఉపయోగించడం వల్ల BasePage ని Direct గా Instantiate చేయలేము.

ఇది Framework Structure ని Clean మరియు Maintainable గా ఉంచుతుంది.

---

## 4. Simple English Answer

BasePage is a parent class that contains common methods shared by all page objects.

Other page classes extend BasePage and reuse its functionality.

This reduces code duplication and improves maintainability.

---

## 5. English Interview Answer

I use an Abstract BasePage class to store common functionality shared across multiple page objects.

Methods such as navigation, dropdown selection, waiting for page load, and common actions are implemented once in the BasePage.

Other page classes like LoginPage and DashboardPage extend this class and inherit its functionality.

This reduces duplication, improves maintainability, and provides a consistent framework structure.

Using the abstract keyword also prevents accidental instantiation of the BasePage directly.

---

## 6. Real-Time Project Example

In my Playwright automation framework, multiple pages require navigation and common utility methods.

Instead of implementing the same methods in every page class, I keep them inside BasePage.

For example:

```text
LoginPage
DashboardPage
CarInsurancePage
```

All these pages inherit common methods from BasePage.

When I update a common method, all page classes automatically receive the change.

---

## 7. Code Example (TypeScript)

### BasePage.ts

```typescript
import { Page, Locator } from '@playwright/test';

export abstract class BasePage {

  constructor(
    protected readonly page: Page
  ) {}

  async navigate(
    path: string
  ): Promise<void> {

    await this.page.goto(path);

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

  }

  protected async selectOption(
    dropdown: Locator,
    option: string
  ): Promise<void> {

    await dropdown.click();

    await this.page
      .getByRole('option', {
        name: option
      })
      .click();

  }

}
```

### LoginPage.ts

```typescript
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  async openLoginPage() {

    await this.navigate('/login');

  }

}
```

### Test File

```typescript
const loginPage =
  new LoginPage(page);

await loginPage.openLoginPage();
```

---

### Interview Short Answer

> "I use an Abstract BasePage class to store common functionality such as navigation and reusable actions. All page objects extend BasePage and inherit these methods, reducing code duplication and improving framework maintainability."
