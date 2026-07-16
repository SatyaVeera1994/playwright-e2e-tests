# Q4. How do you combine API setup with UI verification in tests?

## 1. Telugu Concept

API Setup + UI Verification అనేది చాలా Efficient Testing Pattern.

ఈ Pattern లో:

### Step 1

API ద్వారా Test Data Create చేస్తాము.

### Step 2

UI లో Verify చేస్తాము.

### Step 3

API ద్వారా Cleanup చేస్తాము.

ఇది UI ద్వారా Data Create చేయడం కంటే చాలా Fast మరియు Reliable.

ఉదాహరణకు User Creation Scenario లో:

* API ద్వారా User Create
* UI లో User కనిపిస్తున్నాడా Verify
* API ద్వారా User Delete

ఇలా చేస్తాము.

---

## 2. Easy to Remember

✅ Setup via API

✅ Verify via UI

✅ Cleanup via API

✅ Faster Execution

✅ More Reliable

✅ Less UI Dependency

### One-Line Summary

**Create data using API, verify through UI, and clean up using API.**

---

## 3. Telugu Interview Answer

నా Playwright Framework లో API Setup మరియు UI Verification Pattern ని ఎక్కువగా ఉపయోగిస్తాను.

మొదట API ద్వారా అవసరమైన Test Data Create చేస్తాను.

తర్వాత UI లో Login అయ్యి ఆ Data సరైన విధంగా Display అవుతుందా Verify చేస్తాను.

Test పూర్తయిన తర్వాత API ద్వారా Cleanup చేస్తాను.

దీనివల్ల UI ద్వారా Data Create చేయడానికి అవసరమైన Steps తగ్గిపోతాయి మరియు Execution Time కూడా చాలా తగ్గుతుంది.

ఇది Faster, Stable మరియు Maintainable Approach.

---

## 4. Simple English Answer

I use APIs to create test data before running UI tests.

Then I verify the created data in the UI.

After verification, I delete the test data using APIs.

This makes tests faster and more reliable.

---

## 5. English Interview Answer

I commonly use the API Setup + UI Verification pattern in Playwright integration tests.

Instead of creating data through the UI, I create the required test data using APIs because API calls are much faster and more reliable.

After the data is created, I open the application UI and verify that the data is displayed correctly.

Once the validation is complete, I clean up the test data using API calls.

This approach reduces test execution time, improves stability, and ensures that the test focuses only on UI verification rather than data creation.

---

## 6. Real-Time Project Example

In my Playwright project, if I need to verify a newly created user:

### Traditional Approach

* Open User Form
* Enter User Details
* Submit Form
* Wait for Success Message
* Search User

This may take 20–30 seconds.

### API + UI Approach

* Create User using API
* Open User Management Page
* Verify User Details
* Delete User using API

This completes in a few seconds and is much more stable.

---

## 7. Code Example (TypeScript)

```typescript
import { test, expect } from '@playwright/test';

test('created user appears in user list', async ({ request, page }) => {

  // Create user using API
  const createResponse = await request.post('/api/users', {
    data: {
      name: 'Test User',
      email: 'testuser@example.com',
      role: 'user'
    }
  });

  const user = await createResponse.json();
  const userId = user.id;

  // Verify through UI
  await page.goto('/admin/users');

  const userRow = page
    .locator('tbody tr')
    .filter({ hasText: 'testuser@example.com' });

  await expect(userRow).toBeVisible();

  await expect(
    userRow.locator('.role-badge')
  ).toHaveText('user');

  // Cleanup using API
  await request.delete(`/api/users/${userId}`);

});
```

### API Setup Only

```typescript
const response = await request.post('/api/users', {
  data: {
    name: 'Satya',
    email: 'satya@test.com'
  }
});
```

### Cleanup Using API

```typescript
await request.delete(`/api/users/${userId}`);
```

---

## Interview Short Answer

> "I follow the API Setup + UI Verification pattern in Playwright. I create test data using APIs, verify the data through the UI, and clean up using APIs. This approach makes tests faster, more reliable, and independent of complex UI setup steps."
