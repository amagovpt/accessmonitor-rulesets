---
Title: W3C HTML Check
id: w3c_validator_01a
type: "fals"
elem: "w3cValidator"
test: "w3cValidatorErrorsNo"
score: 10
level: "A"
trust: "1"
ref: "G134"
scs: "4.1.1"
dis: "22232"
result: "passed"
---

# W3C HTML Check

## Description

The "W3C HTML Check" evaluates whether the W3C HTML Validator finds no markup errors in the HTML document.

## Example outcome

I asked the W3C HTML validator and I observed that <mark>there are no HTML errors</mark>.

## Impact

- **Visual Impairments:** Misnested or broken HTML may prevent correct interpretation of content hierarchy, ARIA roles, and labels. Semantic issues can break landmark navigation or skip links.
- **Motor Impairments:** Focus order or interactive behavior may break due to incorrect nesting or missing elements.
- **Cognitive Disabilities:** Disrupted flow may confuse users relying on a clear structure.

## Fixes

To address any existing HTML errors:

1. Use the W3C Validator to locate the incorrect HTML.
2. Fix it according to the Validator.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.1](https://www.w3.org/WAI/WCAG22/Understanding/parsing)
- [WCAG 2.2 Techniques: Technique G134: Validating web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G134)
- [W3C Validator Tool](https://validator.w3.org)
