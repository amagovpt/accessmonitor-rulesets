---
Title: Role Value Check
id: role_01
type: "true"
elem: "all"
test: "roleValid"
score: 10
level: "AA"
trust: "1"
ref: "674b10"
scs: "1.3.4"
dis: "43353"
result: "passed"
---

# Role Value Check

## Description

The "Role Value Check" evaluates whether all HTML elements using the <code>role</code> attribute contains a valid ARIA role, as defined by the WAI-ARIA specification.

## Example outcome

I observed that <mark>all</mark> <code>role</code> attributes have valid values.

## Impact

- **Visual Impairments:** Invalid roles may be ignored by assistive technologies, making content or controls invisible or misidentified.
- **Motor Impairments:** Individuals with motor imparments may lose meaningful navigation if landmark roles (e.g., <code>banner</code>, <code>main</code>) are invalid.
- **Cognitive Disabilities:** Misuse may result in missing context for content or controls.

## Fixes

To address <code>role</code> attributes with invalid values:

1. Locate the element where the <code>role</code> attribute has an invalid value.
2. Replace its value with a valid one that suits its purpose, according to WAI-ARIA's specification.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation)
- [ACT Rules: Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
