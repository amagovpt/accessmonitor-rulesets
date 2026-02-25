---
Title: ARIA Role Completeness Check
id: element_10
type: "true"
elem: "all"
test: "elementRole"
score: 10
level: "A"
trust: "1"
ref: "4e8ab6"
scs: "4.1.2,1.3.1"
dis: "43353"
result: "passed"
---

# ARIA Role Completeness Check

## Description

The "ARIA Role Completeness Check" evaluates whether all elements with an explicitly assigned ARIA semantic role have also included all required ARIA states and properties.

## Example outcome

I observed that <mark>all elements</mark> with an explicit semantic role have specified all the required states and properties.

## Impact

- **Visual Impairments:** Screen readers rely on ARIA roles and their required properties to inform users of the purpose and state of interactive components. Missing attributes mean users might not understand if an element is selected, expanded, or checked.
- **Motor Impairments:** People with motor impairments use voice control or keyboard-only navigation. ARIA roles help these tools determine how to interact with elements.
- **Cognitive Disabilities:** Consistent, predictable UI components (with correct roles and states) help reduce cognitive load. Incorrect or incomplete roles/states may lead to confusion or misuse.

## Fixes

To address elements with an inappropriate or missing a required state or property according to its role:

1. Locate the error-causing element.
2. Verify what ARIA states and/or properties are required for the element's role (e.g., <code>role="checkbox"</code>).
3. Correct or add missing or inappropriately assigned states or properties.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Element with role attribute has required states and properties](https://www.w3.org/WAI/standards-guidelines/act/rules/4e8ab6/proposed/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
