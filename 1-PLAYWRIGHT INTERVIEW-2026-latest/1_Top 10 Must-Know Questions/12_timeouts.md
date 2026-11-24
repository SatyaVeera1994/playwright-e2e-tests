# Q2. What are the different timeout types in Playwright, and how are they configured?

తెలుగులో ప్రశ్న: Playwrightలో ఎన్ని రకాల timeouts ఉంటాయి? వాటిని ఎలా configure చేస్తాము?
Timeout అంటే ఒక పని పూర్తవడానికి ఎంత సమయం వరకు వేచి ఉండాలో నిర్ణయించే గడువు.
Timeout తెలుగులో అర్థం
Test timeout ఒక test మొత్తం పూర్తవడానికి సమయం
Action timeout Click, fill వంటి ఒక్క action కోసం వేచి ఉండే సమయం
Navigation timeout ఒక page load లేదా navigation కోసం వేచి ఉండే సమయం
Assertion timeout Expected condition నిజమవుతుందా అని వేచి ఉండే సమయం
Global timeout మొత్తం test suite run కోసం గరిష్ఠ సమయం
Example:
import { defineConfig } from '@playwright/test';

export default defineConfig({
timeout: 30000,

expect: {
timeout: 5000
},

use: {
actionTimeout: 10000,
navigationTimeout: 30000
},

globalTimeout: 3600000
});

- 30000 = 30 seconds
- 5000 = 5 seconds
- 3600000 = 1 hour
  Real-time example: Login button click చేసినప్పుడు 10 secondsలో action పూర్తి కాకపోతే, action timeout error రావచ్చు.

# Interview English answer:

# Playwright has five timeout types: test timeout, action timeout, navigation timeout, assertion timeout, and global timeout. We can configure them in the Playwright configuration file or set a timeout for a specific operation. They help control how long tests wait before failing.
