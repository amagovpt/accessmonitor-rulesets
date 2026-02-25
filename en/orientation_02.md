---
Title: Inappropriate Orientation Restriction Check
id: orientation_02
type: "fals"
elem: "all"
test: "orientationCSSNot"
score: 4
level: "AA"
trust: "1"
ref: "b33eff"
scs: "1.3.4"
dis: "43353"
result: "failed"
---

# Inappropriate Orientation Restriction Check

## Description

The "Inappropriate Orientation Restriction Check" evaluates whether there is any CSS that restricts the page or its content to a specific display orientation (i.e., portrait or landscape). 

## Example outcome

I found <mark>1</mark> element with CSS properties that restrict its orientation.

## Impact

- **Visual Impairments:** Some screen magnifiers function better in a specific orientation.
- **Motor Impairments:** People with motor impairments may use devices mounted in a fixed orientation (e.g., wheelchair, hospital bed).

## Fixes

To address elements with CSS properties inappropriately restricting its orientation:

1. Locate the CSS code that restricts the orientation.
2. Remove the orientation restrictive CSS properties.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation)
- [ACT Rules: Orientation of the page is not restricted using CSS transforms](https://www.w3.org/WAI/standards-guidelines/act/rules/b33eff/proposed/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
