---
Title: Inappropriate Presentational Role Check
id: element_09
type: "fals"
elem: "all"
test: "elementPresentChildrenFocus"
score: 1
level: "A"
trust: "1"
ref: "307n5z"
scs: "4.1.2"
dis: "43353"
result: "failed"
---

# Inappropriate Presentational Role Check

## Description

The "Inappropriate Presentational Role Check" evaluates whether there is any element with a presentational role (e.g., <code>role="presentation"</code> or <code>aria-hidden="true"</code>) containing a focusable content.

## Example outcome

I identified <mark>1</mark> element with presentation children that has focusable content.

## Impact

- **Visual Impairments:** Assistive tech may skip the presentational container but then unexpectedly encounter focusable items inside it, creating a disjointed or broken experience. Focusable children may appear “out of context” or with no meaningful parent or label.
- **Motor Impairments:** The keyboard may tab into elements that don’t appear to have any function or context visually or semantically.
- **Cognitive Disabilities:** Unexpected behavior when navigating can cause disorientation or cognitive overload, especially in complex layouts.

## Fixes

To address children elements with focusable content inside a container with a presentational role:

1. Locate the focusable element.
2. Remove the element from the presentational container.
3. If it must be inside the container, remove or replace the presentational role from the container.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Element with presentational children has no focusable content](https://www.w3.org/WAI/standards-guidelines/act/rules/307n5z/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
