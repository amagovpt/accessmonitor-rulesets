---
Title: ARIA Required Owned Elements Check
id: aria_02
type: "true"
elem: "all"
test: "ariaReqElem"
score: 10
level: "A"
trust: "1"
ref: "bc4a75"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# ARIA Required Owned Elements Check

## Description

The "ARIA Required Owned Elements Check" evaluates whether elements with specific ARIA roles include the required child (or 'owned') elements defined by the ARIA specification.

## Example outcome

I observed that <mark>all elements</mark> with an explicit semantic role own at least one of their required elements.

## Impact

- **Visual Impairments:** Broken or misrepresented widget semantics lead to missing functionality or confusing navigation. For example, a listbox must contain one or more option elements. Without them, screen readers can't present available choices.
- **Motor Impairments:** Missing expected children can prevent interactive elements (like tab, menuitem, etc.) from being announced correctly or receiving focus as intended, preventing keyboard users from reaching them.
- **Cognitive Disabilities:** Incomplete components (like tabs without tabpanel) reduce clarity and increase cognitive load.

## Fixes

To address missing ARIA required owned elements:

1. Identify the role with missing required owned elements.
2. Refer to the ARIA specification to find what child roles are required.
3. Add the missing child elements and ensure their roles are correctly applied.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [ACT Rules: ARIA required owned elements](https://www.w3.org/WAI/standards-guidelines/act/rules/bc4a75/proposed/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
