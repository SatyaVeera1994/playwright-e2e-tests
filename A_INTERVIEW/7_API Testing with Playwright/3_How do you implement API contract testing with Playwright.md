# Q3. How do you implement API Contract Testing with Playwright?

## 1. Telugu Concept

API Contract Testing అంటే API Response Expected Structure (Schema) కి Match అవుతుందా లేదా Verify చేయడం.

Frontend Team మరియు Backend Team మధ్య ఒక Agreement ఉంటుంది.

ఉదాహరణ:

```json
{
  "id": 1,
  "name": "Satya",
  "email": "satya@test.com",
  "role": "admin"
}
```

Backend Team `email` ని `emailAddress` గా మార్చితే Frontend Break అయ్యే అవకాశం ఉంది.

Contract Testing ద్వారా ఇలాంటి Changes వెంటనే Detect చేయవచ్చు.

మనము Validate చేసేవి:

✅ Field Names

✅ Data Types

✅ Required Fields

✅ Business Rules

✅ API Schema

---

## 2. Easy to Remember

✅ Validate Response Schema

✅ Validate Data Types

✅ Validate Required Fields

✅ Validate Business Rules

✅ Detect Backend Changes Early

✅ Protect Frontend-Backend Integration

### One-Line Summary

**API Contract Testing ensures that API responses always follow the agreed schema and structure.**

---

## 3. Telugu Interview Answer

Playwright లో API Contract Testing ద్వారా API Response Expected Schema కి Match అవుతుందా Verify చేస్తాను.

Response Status మాత్రమే Check చేయకుండా Field Names, Data Types మరియు Required Properties కూడా Validate చేస్తాను.

ఉదాహరణకు User API లో id Number గా ఉందా, email String గా ఉందా, role Valid Value గా ఉందా Verify చేస్తాను.

దీనివల్ల Backend Team ఏదైనా Breaking Change చేస్తే వెంటనే CI Pipeline లో Failure వస్తుంది.

అందువల్ల Frontend మరియు Backend Integration Stability Maintain అవుతుంది.

---

## 4. Simple English Answer

API Contract Testing verifies that the API response follows the expected schema.

I validate response fields, data types, required properties, and business rules.

This helps detect backend changes before they impact the frontend application.

---

## 5. English Interview Answer

API Contract Testing ensures that API responses conform to the expected structure and schema.

In Playwright, I validate not only the status code but also field names, data types, required properties, and business rules.

For example, I verify that id is a number, email is a string, and role contains only valid values.

These tests act as a safety net between frontend and backend teams because any breaking API change is detected immediately during CI execution.

I usually run API contract tests before UI tests because they execute faster and catch issues earlier.

---

## 6. Real-Time Project Example

In my Playwright project, if the User API returns:

```json
{
  "id": 1,
  "name": "Satya",
  "email": "satya@test.com",
  "role": "admin"
}
```

and the backend accidentally changes:

```json
{
  "id": 1,
  "name": "Satya",
  "emailAddress": "satya@test.com"
}
```

the contract test fails immediately.

This helps identify API breaking changes before UI automation starts failing.

---

## 7. Code Example (TypeScript)

### Contract Validation Using Interface

```typescript
import { test, expect } from '@playwright/test';

interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  createdAt: string;
}

test('Validate User API Contract', async ({ request }) => {

  const response = await request.get('/api/users/1');

  expect(response.status()).toBe(200);

  const user: UserResponse = await response.json();

  expect(typeof user.id).toBe('number');

  expect(typeof user.name).toBe('string');

  expect(typeof user.email).toBe('string');

  expect(['admin', 'user', 'viewer'])
    .toContain(user.role);

  expect(
    new Date(user.createdAt).toString()
  ).not.toBe('Invalid Date');

});
```

### Business Rule Validation

```typescript
expect(user.email)
  .toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
```

### Required Field Validation

```typescript
expect(user.id).toBeDefined();

expect(user.name).toBeDefined();

expect(user.email).toBeDefined();
```

---

## Interview Short Answer

> "I use Playwright API Contract Tests to validate response schema, field names, data types, and business rules. These tests help detect backend breaking changes early and act as a safety net between frontend and backend teams. I usually execute contract tests before UI tests because they are faster and provide quick feedback."
