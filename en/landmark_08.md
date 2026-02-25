---
Title: Inappropriate Main Landmark Check
id: landmark_08
type: "fals"
elem: "all"
test: "mainNotTopLevel"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate Main Landmark Check

## Description

The "Inappropriate Main Landmark Check" evaluates whether there is any <code>main</code> landmark nested within another region's landmark.

## Example outcome

I noticed that the <code>main</code> landmark <mark>is</mark> contained within other landmark.

## Impact

- **Visual Impairments:** Screen readers may skip or misidentify the main content, making it harder to understand the page structure.
- **Motor Impairments:** Landmark navigation (like jumping to the main region using keyboard shortcuts) may not work as expected.
- **Cognitive Disabilities:** Users may struggle to understand where core content begins if structural cues are inconsistent.

## Fixes

To address inappropriate <code>main</code> landmarks:

1. Locate the inappropriately placed <code>main</code> landmark.
2. Remove it from within the landmark in which it is nested.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
