---
Title: Inappropriate Complementary Landmarks Check
id: landmark_04
type: "fals"
elem: "all"
test: "complementaryNotTopLevel"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate Complementary Landmarks Check

## Description

The "Inappropriate Complementary Landmarks Check" evaluates whether there is any <code>complementary</code> landmark nested within another region's landmark.

## Example outcome

I noticed that the <code>complementary</code> landmark <mark>is</mark> contained within other landmark.

## Impact

- **Visual Impairments:** Screen readers may not recognize or expose the complementary region, or they may misrepresent its relationship to the main content.
- **Motor Impairments:** Users who depend on keyboard shortcuts to jump between landmark regions may not be able to access the complementary section efficiently.
- **Cognitive Disabilities:** Page layout may seem illogical or inconsistent, especially if multiple sections are indistinct or repeated.

## Fixes

To address inappropriate <code>complementary</code> landmarks:

1. Locate the inappropriately placed <code>complementary</code> landmark.
2. Remove it from within the landmark in which it is nested.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
