---
Title: Complementary Landmarks Check
id: landmark_03
type: "true"
elem: "all"
test: "complementaryTopLevel"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Complementary Landmarks Check

## Description

The "Complementary Landmarks Check" evaluates whether all the <code>complementary</code> landmarks are not nested within other landmarks.

## Example outcome

I noticed that the <code>complementary</code> landmarks <mark>are not</mark> contained within other landmarks.

## Impact

- **Visual Impairments:** Screen readers may not announce or provide access to complementary regions, especially if nested inside the <code>main</code> or <code>article</code> landmarks.
- **Motor Impairments:** Navigating directly to complementary content (e.g., via keyboard shortcuts or ARIA landmark navigation) might become impossible if improperly nested.
- **Cognitive Disabilities:** Inconsistencies in page layout can lead to misunderstanding the structure or purpose of side content.

## Fixes

To address inappropriate <code>complementary</code> landmarks:

1. Locate the inappropriately placed <code>complementary</code> landmark.
2. Remove it from within the landmark in which it is nested.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)

