---
Title: ARIA Attributes Check
id: aria_07
type: "true"
elem: "all"
test: "ariaAtribDefined"
score: 10
level: "A"
trust: "1"
ref: "5f99a7"
scs: "1.3.1,4.1.2"
dis: "43353"
result: "passed"
---

# ARIA Attributes Check

## Description

The "ARIA Attributes Check" evaluates whether all aria-* attributes used in the HTML are valid and defined in the official ARIA specification.

## Example outcome

I noticed that <mark>all</mark> aria-* attributes are defined in the ARIA specfication.

## Impact

- **Visual Impairments:** People with visual impairments might not receive necessary information about roles, states, or properties of elements.
- **Motor Impairments:** Interactive elements may not behave as expected or appear in the tab order incorrectly.
- **Cognitive Disabilities:** Inconsistent behavior of components may cause confusion, affecting users with cognitive disabilities.

## Fixes

To address inappropriate ARIA attributes:

1. Locate the invalid ARIA attributes.
2. Use the ARIA specification to verify the valid attributes.
3. Replace the invalid attributes with valid ones, or remove them if unnecessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [ACT Rules: ARIA attribute is defined in WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/act/rules/5f99a7/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
