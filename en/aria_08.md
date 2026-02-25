---
Title: Inappropriate ARIA Attributes Check
id: aria_08
type: "fals"
elem: "all"
test: "ariaAtribNotDefined"
score: 1
level: "A"
trust: "1"
ref: "5f99a7"
scs: "1.3.1,4.1.2"
dis: "43353"
result: "failed"
---

# Inappropriate ARIA Attributes Check

## Description

The "Inappropriate ARIA Attributes Check" evaluates whether there is one aria-* attribute used in the HTML that isn't valid or defined in the official ARIA specification.

## Example outcome

I found <mark>1</mark> aria-* attribute that is not defined in the ARIA specification.

## Impact

- **Visual Impairments:** Screen readers may ignore invalid ARIA attributes. Resulting behavior may be missing context, wrong element roles, or confusing user experience.
- **Motor Impairments:** Inaccessible widgets may not expose correct keyboard support, preventing navigation or action.
- **Cognitive Disabilities:** If elements don’t behave as expected (e.g. menus not expanding), it leads to confusion or task failure.

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
