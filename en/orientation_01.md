---
Title: Orientation Restriction Check
id: orientation_01
type: "true"
elem: "all"
test: "orientationCSS"
score: 10
level: "AA"
trust: "1"
ref: "b33eff"
scs: "1.3.4"
dis: "43353"
result: "passed"
---

# Orientation Restriction Check

## Description

The "Orientation Restriction Check" evaluates whether all CSS does not restrict the page or its content to a specific display orientation (i.e., portrait or landscape). 

## Example outcome

I noticed that the orientation of the elements in this page <mark>is not</mark> restricted through CSS properties.

## Impact

- **Visual Impairments:** Screen magnifiers may work better in specific orientations.
- **Motor Impairments:** Users with motor impairments may rely on fixed mounts (wheelchairs, assistive stands) that lock orientation.

## Fixes

To address elements with CSS properties inappropriately restricting its orientation:

1. Locate the CSS code that restricts the orientation.
2. Remove the orientation restrictive CSS properties.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation)
- [ACT Rules: Orientation of the page is not restricted using CSS transforms](https://www.w3.org/WAI/standards-guidelines/act/rules/b33eff/proposed/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
