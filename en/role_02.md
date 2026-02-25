---
Title: Inappropriate Role Value Check
id: role_02
type: "decr"
elem: "all"
test: "roleValidNot"
score: 3
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "674b10"
scs: "1.3.4"
dis: "43353"
result: "failed"
---

# Inappropriate Role Value Check

## Description

The "Inappropriate Role Value Check" evaluates whether there is any invalid <code>role</code> attribute value on HTML elements.

## Example outcome

I located <mark>1</mark> <code>role</code> attribute with invalid values.

## Impact

- **Visual Impairments:** Elements with invalid roles are ignored or misidentified, affecting context or navigation.
- **Motor Impairments:** Missed landmarks (e.g., <code>main</code>, <code>navigation</code>) break expected keyboard shortcuts.
- **Cognitive Disabilities:** Misleading or missing roles reduce clarity of structure and purpose.

## Fixes

To address <code>role</code> attributes with invalid values:

1. Locate the element where the <code>role</code> attribute has an invalid value.
2. Replace its value with a valid one that suits its purpose, according to WAI-ARIA's specification.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation)
- [ACT Rules: Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
