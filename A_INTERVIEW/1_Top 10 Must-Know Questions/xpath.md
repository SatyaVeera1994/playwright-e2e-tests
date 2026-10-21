ఈ XPath ని భాగాలుగా విడగొట్టి వివరిస్తాను.

**పూర్తి XPath**

# 1-example

```
//table[@id="large-table"]//tr[contains(@class,"row")]/td[@class="column-3"]
```

**భాగాల వారీగా వివరణ**

| భాగం                       | అర్థం                                              |
| -------------------------- | -------------------------------------------------- |
| `//table`                  | పేజీలో ఎక్కడైనా ఉన్న `<table>` ట్యాగ్ ని వెతుకు    |
| `[@id="large-table"]`      | ఆ table కి `id="large-table"` ఉండాలి (కండిషన్)     |
| `//tr`                     | ఆ table లోపల ఎక్కడైనా ఉన్న `<tr>` (row) లను వెతుకు |
| `[contains(@class,"row")]` | `<tr>` యొక్క class లో "row" అనే పదం ఉండాలి         |
| `/td`                      | ఆ `<tr>` కి నేరుగా చైల్డ్ గా ఉన్న `<td>` (cell)    |
| `[@class="column-3"]`      | `<td>` యొక్క class సరిగ్గా `column-3` అయి ఉండాలి   |

**ముఖ్యమైన నియమాలు**

1. **`//` (డబుల్ స్లాష్)**: ఎంత లోతులో ఉన్నా వెతుకుతుంది (descendant).
2. **`/` (సింగిల్ స్లాష్)**: నేరుగా ఉన్న చైల్డ్ ని మాత్రమే తీసుకుంటుంది.
3. **`[ ]` (బ్రాకెట్స్)**: కండిషన్ రాయడానికి వాడతాం.
4. **`@`**: attribute ని సూచిస్తుంది (ఉదా: `@id`, `@class`).
5. **`contains(@class,"row")`**: class లో ఆ పదం కొంత భాగం ఉన్నా సరిపోతుంది. అదే `@class="row"` అయితే పూర్తిగా సమానంగా ఉండాలి.

**ఎలా రాయాలి (స్టెప్ బై స్టెప్)**

HTML ఇలా ఉంటుంది:

```html
<table id="large-table">
  <tr class="row-1">
    <td class="column-1">1.1</td>
    <td class="column-2">2.1</td>
    <td class="column-3">3.1</td>
  </tr>
</table>
```

దీన్ని చూస్తూ ఇలా రాయాలి:

1. **Table ని పట్టుకో**: `//table[@id="large-table"]`
2. **Rows ని పట్టుకో**: దానికి `//tr[contains(@class,"row")]` జోడించు
3. **Column 3 cells ని పట్టుకో**: చివరికి `/td[@class="column-3"]` జోడించు

అన్నీ కలిపితే మీ XPath వస్తుంది.

**త్వరగా XPath కనుక్కునే విధానం**

- పేజీలో F12 నొక్కి, Elements ట్యాబ్ లో element మీద రైట్ క్లిక్ చేసి **Copy → Copy XPath** ఎంచుకోవచ్చు.
- Console లో `$x('మీ XPath')` టైప్ చేస్తే మ్యాచ్ అయ్యే elements కనిపిస్తాయి.

**చిన్న చిట్కా**: డబుల్ కోట్స్ `"` ని స్ట్రింగ్ లోపల వాడినప్పుడు, బయట సింగిల్ కోట్స్ `'` వాడండి (మీ కోడ్ లో చేసినట్లే). లేదంటే error వస్తుంది.

మరిన్ని XPath ఉదాహరణలు కావాలంటే చెప్పండి.

# 2-example

ఇవి **మొదటి row** లోని అన్ని cells విలువలు (1.1, 1.2, 1.3 ... 1.50). కాబట్టి ఇక్కడ column కాదు, **row** ని పట్టుకోవాలి.

**XPath**

```
//table[@id="large-table"]//tr[contains(@class,"row-1")]/td
```

అయితే `contains(@class,"row-1")` వాడితే `row-10`, `row-11`...`row-19` కూడా మ్యాచ్ అవుతాయి. కాబట్టి **ఖచ్చితమైన** XPath ఇది:

```
//table[@id="large-table"]//tr[@class="row-1"]/td
```

**TypeScript కోడ్**

```typescript
import { test, expect, Locator } from "@playwright/test";

test("print row 1 values", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/large");

  const cells: Locator = page.locator(
    '//table[@id="large-table"]//tr[@class="row-1"]/td',
  );

  const values: string[] = await cells.allTextContents();

  console.log(values.join(", ")); // 1.1, 1.2, 1.3, ... 1.50

  expect(values.length).toBe(50);
  expect(values[0]).toBe("1.1");
});
```

**భాగాల వివరణ**

| భాగం                   | అర్థం                                                   |
| ---------------------- | ------------------------------------------------------- |
| `//tr[@class="row-1"]` | class సరిగ్గా `row-1` ఉన్న మొదటి row ని మాత్రమే పట్టుకో |
| `/td`                  | ఆ row లోని అన్ని cells (column-1 నుండి column-50 వరకు)  |

**Column మరియు Row తేడా**

| కావలసినవి         | ఏది                           | XPath                                                |
| ----------------- | ----------------------------- | ---------------------------------------------------- |
| 1.1, 2.1, 3.1 ... | **Column 1** (పైనుండి కిందకు) | `//tr[contains(@class,"row")]/td[@class="column-1"]` |
| 1.1, 1.2, 1.3 ... | **Row 1** (ఎడమ నుండి కుడికి)  | `//tr[@class="row-1"]/td`                            |

**ఏ row అయినా కావాలంటే**

```typescript
const row = 1; // 1, 2, 3... మార్చుకోండి
const cells = page.locator(
  `//table[@id="large-table"]//tr[@class="row-${row}"]/td`,
);
```

**గమనిక**: ఈ table లో `<tr>` కి `class="row-1"` ఉంటుందని నేను ఊహించాను. ఒకవేళ మీకు ఖాళీ ఫలితం వస్తే, F12 లో Elements ట్యాబ్ లో `<tr>` యొక్క class ఏమిటో చెక్ చేయండి. అప్పుడు అది ఇక్కడ చెబితే XPath ని సరి చేస్తాను.
