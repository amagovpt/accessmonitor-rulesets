---
Title: Inappropriate Autocomplete Attribute Check
id: autocomplete_02
type: "fals"
elem: "all"
test: "autoCmpltNotValid"
score: 1
level: "A"
trust: "1"
ref: "73f2c2"
scs: "1.3.5"
dis: "43353"
result: "failed"
---

# Inappropriate Autocomplete Attribute Check

## Description

The "Inappropriate Autocomplete Attribute Check" evaluates whether there is any autocomplete attribute used in form fields with an invalid value, according to the HTML specification.

## Example outcome

I located <mark>1</mark> autocomplete attribute with an invalid value.

## Impact

- **Visual Impairments:** Screen readers announce autocomplete values when implemented properly. Invalid or missing values result in inconsistent or no announcements, reducing context and increasing confusion.
- **Motor Impairments:** People with motor impairments may find typing lengthy text fields difficult. Autofill reduces the need for extensive typing or navigation through form fields.
- **Cognitive Disabilities:** Users with cognitive disabilities struggle with repetitive tasks like filling out forms. They may forget or mistype information (e.g., addresses or emails), leading to form errors or frustration. Proper autocomplete helps reduce cognitive load by offering suggested inputs.

## Fixes

To address inappropriate autocomplete attributes:

1. Locate the form input element with the inappropriate autocomplete attribute.
2. Cross-check the value against valid tokens (e.g., <code>name</code>, <code>email</code>, <code>tel</code>, <code>street-address</code>, <code>postal-code</code>, <code>country</code>, <code>organization-title</code>).
3. Fix any typos, custom values, or unsupported combinations.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose)
- [ACT Rules: Autocomplete attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/73f2c2/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
