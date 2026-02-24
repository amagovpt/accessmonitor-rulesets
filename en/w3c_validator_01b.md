---
Title: W3C Inappropriate HTML Check
id: w3c_validator_01b
type: "decr"
elem: "w3cValidator"
test: "w3cValidatorErrors"
score: 1
level: "A"
trust: "1"
top: 10
steps: 10
ref: "G134"
scs: "4.1.1"
dis: "22232"
result: "warning"
---

# W3C Inappropriate HTML Check

## Description

The "W3C Inappropriate HTML Check" evaluates whether the W3C HTML Validator finds any markup errors in the HTML document.

## Example outcome

I asked the W3C HTML validator and I observed that there is <mark>1 HTML error</mark>.

## Impact

- **Visual Impairments:** Structural errors may break ARIA roles, labels, and hierarchy. Landmarks and headings may be skipped or misinterpreted.
- **Motor Impairments:** Broken nesting can misplace focus order and navigation logic.
- **Cognitive Disabilities:** Confusing layout or skipped content due to parser failures.

## Fixes

To address any existing HTML errors:

1. Use the W3C Validator to locate the incorrect HTML.
2. Fix it according to the Validator.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.1](https://www.w3.org/WAI/WCAG22/Understanding/parsing)
- [WCAG 2.2 Techniques: Technique G134: Validating web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G134)
- [W3C Validator Tool](https://validator.w3.org)
