 Waiting period validation
* Policy holder validation
* Hospital details validation
* ICU and Non-ICU validation
* Claimed amount validation
* Claim submission workflow
* Edge case scenarios


1. Home / Intimation
2. Policy Holder Information
3. Hospital Details
4. Claim Details
5. ICU / Non-ICU Details
6. Claim Submission


* Policy Start Date: January 1
* Claim eligibility starts only after 30 days
* Hospitalization before 30 days should not be eligible for claim



Field, valus

Policy Holder -->Policy Holder 
Policy Number ---> 30583 
Policy Start Date-->Jan 1
Waiting Period    | 30 Days 


Test Scenarios

1. Waiting Period Validation

* Verify claim rejection before 30 days
* Verify claim acceptance after 30 days
* Verify exact 30th-day validation

 2. Policy Validation

* Verify correct policy selection
* Verify invalid policy handling
* Verify inactive/expired policy validation


 3. Hospital Details Validation

* Mandatory field validation
* Future admission date validation
* Discharge date validation
* Same-day admission/discharge validation

4. ICU / Non-ICU Validation

* ICU days calculation
* ICU days exceeding hospitalization days
* Negative value validation


5. Claimed Amount Validation

* Zero amount validation
* Maximum claim limit validation
* Decimal amount validation



6. Submission Workflow

* Successful claim submission
* Duplicate claim validation
* Session timeout handling
* Network interruption handling

Edge Cases

* Leap year validation
* Invalid characters
* SQL Injection
* XSS validation
* Policy expiry validation
* Multiple policy holders


The application should:

* Prevent invalid claims
* Validate hospitalization dates correctly
* Restrict claims within waiting period
* Ensure correct ICU/non-ICU calculations
* Generate claim ID successfully for valid claims