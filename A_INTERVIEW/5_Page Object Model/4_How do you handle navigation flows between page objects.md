# Q5. How do you handle navigation flows between page objects?

## 1. Telugu Concept

ఒక Page నుంచి ఇంకో Page కి Navigate అయినప్పుడు, Current Page Method Next Page Object ని Return చేయడం Navigation Flow Pattern.

ఉదాహరణ:

```text
Login Page
    ↓
Dashboard Page
    ↓
Users Page
```

User Login చేసిన తర్వాత Dashboard కి వెళ్తాడు.

కాబట్టి Login Method DashboardPage Object ని Return చేయాలి.

### Traditional Approach

```typescript
await loginPage.login();

const dashboardPage =
  new DashboardPage(page);
```

ప్రతి Test లో Object Create చేయాలి.

---

### Better Approach

```typescript
const dashboard =
  await loginPage.login();
```

Method Next Page Object ని Return చేస్తుంది.

ఇది Clean Code.

---

## 2. Easy to Remember

✅ Login → DashboardPage

✅ Dashboard → UsersPage

✅ Return Next Page Object

✅ Tests Read Like User Journey

✅ Less Object Creation

✅ Better Maintainability

### One-Line Summary

**When navigation happens, return the next page object from the page method.**

---

## 3. Telugu Interview Answer

Navigation Flow Handling కోసం నేను Page Methods నుంచి Next Page Object ని Return చేస్తాను.

ఉదాహరణకు Login Successful అయిన తర్వాత Dashboard Page Open అవుతుంది.

అందువల్ల login() Method DashboardPage Object ని Return చేస్తుంది.

దీనివల్ల Tests User Journey లాగా Read అవుతాయి.

Test లో Page Objects ని Manually Create చేయాల్సిన అవసరం ఉండదు.

Page Object URL Verification మరియు Navigation Logic Handle చేస్తుంది.

Framework Clean గా మరియు Maintainable గా ఉంటుంది.

---

## 4. Simple English Answer

When navigation happens, I return the next page object from the page method.

For example, after successful login, the login method returns a DashboardPage object.

This makes tests cleaner and easier to read.

---

## 5. English Interview Answer

I handle navigation flows by returning the next page object whenever a page transition occurs.

For example, after a successful login, the login method returns a DashboardPage object.

This creates a fluent and type-safe navigation flow that mirrors the user journey.

Tests become more readable because they focus on business actions rather than page object creation.

The page object itself handles navigation validation and URL verification.

This improves maintainability because navigation-related changes are centralized in one place.

---

## 6. Real-Time Project Example

In my Playwright project, after logging into the application, users are redirected to the Dashboard page.

Instead of creating a DashboardPage object inside every test, I return it directly from the login method.

Example flow:

```text
Login Page
    ↓
Dashboard Page
    ↓
Car Insurance Page
```

This makes tests easy to understand and reduces duplicate code.

---

## 7. Code Example (TypeScript)

### LoginPage.ts

```typescript
import { DashboardPage } from './DashboardPage';

export class LoginPage extends BasePage {

  async loginAs(
    email: string,
    password: string
  ): Promise<DashboardPage> {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

    await this.page.waitForURL('/dashboard');

    return new DashboardPage(this.page);

  }

}
```

### DashboardPage.ts

```typescript
import { UsersPage } from './UsersPage';

export class DashboardPage extends BasePage {

  async navigateToUsers(): Promise<UsersPage> {

    await this.page
      .getByRole('link', {
        name: 'Users'
      })
      .click();

    await this.page.waitForURL('/users');

    return new UsersPage(this.page);

  }

}
```

### Test File

```typescript
test(
  'Admin can view users',
  async ({ loginPage }) => {

    const dashboard =
      await loginPage.loginAs(
        'admin@test.com',
        'Admin@123'
      );

    const usersPage =
      await dashboard.navigateToUsers();

    const count =
      await usersPage.usersTable.getRowCount();

    expect(count).toBeGreaterThan(0);

  }
);
```

---

### Interview Short Answer

> "I handle navigation flows by returning the next page object whenever navigation occurs. For example, after login I return a DashboardPage object. This makes tests read like user journeys, improves readability, and keeps navigation logic centralized inside page objects."
