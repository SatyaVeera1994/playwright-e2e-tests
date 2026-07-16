# Q4. How do you implement Component-Level Page Objects?

## 1. Telugu Concept

Component-Level POM అంటే Page మొత్తాన్ని కాకుండా, Reusable UI Components కి Separate Classes Create చేయడం.

ఉదాహరణలు:

* Tables
* Forms
* Modals
* Header
* Footer
* Pagination

ఒకే Table Logic చాలా Pages లో ఉంటే, ప్రతి Page లో మళ్లీ Code రాయకుండా DataTable Component Create చేస్తాము.

### Without Component POM

```text
Users Page → Table Methods
Orders Page → Table Methods
Audit Page → Table Methods
```

Duplicate Code ఎక్కువ.

### With Component POM

```text
DataTable Component
        ↑
Users Page
Orders Page
Audit Page
```

ఒక Component అన్ని Pages లో Reuse అవుతుంది.

---

## 2. Easy to Remember

✅ Reusable Components

✅ Less Duplicate Code

✅ Better Framework Design

✅ Easy Maintenance

✅ One Component → Multiple Pages

✅ Table, Form, Modal Reuse

### One-Line Summary

**Component POM creates reusable UI components that can be used across multiple pages.**

---

## 3. Telugu Interview Answer

Component-Level Page Objects అనేవి Reusable UI Components కోసం Create చేసే Classes.

ఉదాహరణకు Application లో చాలా Pages లో Tables ఉంటే, ప్రతి Page లో Table Logic రాయకుండా DataTable Component Create చేస్తాను.

ఈ Component Row Count, Row Search, Button Click వంటి Common Methods అందిస్తుంది.

తర్వాత UsersPage, OrdersPage, AuditPage వంటి Pages లో అదే Component ని Reuse చేస్తాను.

దీనివల్ల Duplicate Code తగ్గుతుంది మరియు Maintenance చాలా Easy అవుతుంది.

ఒక Table Behavior Change అయితే DataTable Class లో మాత్రమే Update చేస్తే సరిపోతుంది.

---

## 4. Simple English Answer

Component-level page objects are reusable classes for common UI components like tables, forms, and modals.

Instead of writing the same logic in multiple pages, we create one reusable component and use it everywhere.

This improves reusability and maintainability.

---

## 5. English Interview Answer

I implement component-level page objects by creating reusable classes for common UI elements such as tables, forms, and modals.

These components receive a container locator and scope all interactions within that container.

For example, I create a DataTable component that contains methods for row selection, row count, and action button clicks.

Multiple pages can use the same component by passing different table locators.

This significantly reduces code duplication and improves maintainability because changes need to be made in only one place.

---

## 6. Real-Time Project Example

In my Playwright project, multiple screens contain tables displaying different data.

Instead of creating separate table methods for every page, I create one reusable DataTable component.

For example:

```text
Users Table
Orders Table
Audit Table
```

All of them use the same DataTable class.

If pagination or row selection logic changes, I update only the DataTable component and all pages automatically use the updated behavior.

---

## 7. Code Example (TypeScript)

### DataTable.ts

```typescript
import { Locator } from '@playwright/test';

export class DataTable {

  constructor(
    private readonly container: Locator
  ) {}

  async getRowCount(): Promise<number> {

    return await this.container
      .locator('tbody tr')
      .count();

  }

  async getRowByText(
    text: string
  ): Promise<Locator> {

    return this.container
      .locator('tbody tr')
      .filter({ hasText: text });

  }

  async clickActionInRow(
    rowText: string,
    actionName: string
  ): Promise<void> {

    const row = await this.getRowByText(rowText);

    await row
      .getByRole('button', {
        name: actionName
      })
      .click();

  }

}
```

### UsersPage.ts

```typescript
import { DataTable } from '../components/DataTable';

export class UsersPage {

  readonly usersTable =
    new DataTable(
      this.page.locator('#users-table')
    );

  constructor(
    private readonly page: Page
  ) {}

}
```

### Test File

```typescript
await usersPage.usersTable
  .clickActionInRow(
    'Satya',
    'Edit'
  );

const count =
  await usersPage.usersTable.getRowCount();

console.log(count);
```

---

### Interview Short Answer

> "I use component-level page objects for reusable UI elements such as tables, forms, and modals. For example, I create a DataTable component with common table methods and reuse it across multiple pages. This reduces duplicate code and improves framework maintainability."
