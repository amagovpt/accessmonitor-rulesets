---
Title: Inappropriate ARIA State and Property Value Check
id: aria_04
type: "fals"
elem: "all"
test: "ariaStNotValid"
score: 1
level: "A"
trust: "1"
ref: "6a7281"
scs: "1.3.1,4.1.2"
dis: "43353"
result: "failed"
---

# Inappropriate ARIA State and Property Value Check

## Description

The "Inappropriate ARIA State and Property Value Check" evaluates whether there is at least one ARIA attribute with a value that does not match the expected type.

## Example outcome

I found <mark>1</mark> ARIA state or property with a value of the incorrect type.

## Impact

- **Visual Impairments:** Invalid ARIA values are ignored or misinterpreted, so interactive elements may not be announced or acted upon correctly (e.g., <code>aria-expanded="yes"</code> instead of "true" or "false"). Screen readers may ignore them entirely.
- **Motor Impairments:** If roles like switch, checkbox, or button don’t reflect their correct state (because the value is invalid), it leads to broken interaction patterns, affecting people with motor impairments.
- **Cognitive Disabilities:** Relying on ARIA to clarify structure and functionality, users with cognitive disabilities may miss cues that should aid orientation or understanding.

## Fixes

To address inappropriate aria state and property values:

1. Identify the incorrect ARIA attribute.
2. Look up the attribute in the ARIA specification to understand its required value type.
3. Update the value to match the correct format (e.g., true/false, ID reference, number, or specific token).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [ACT Rules: ARIA state or property has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
