---
Title: Singular Banner Landmark Check
id: landmark_09
type: "true"
elem: "all"
test: "noDuplicateBanner"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1,2.4.1"
dis: "43353"
result: "passed"
---

# Singular Banner Landmark Check

## Description

The "Singular Banner Landmark Check" evaluates whether there is only one <code>banner</code> landmark.

## Example outcome

I found <mark>one</mark> banner landmark.

## Impact

- **Visual Impairments:** Users may hear multiple "banner" landmarks read aloud, creating confusion.
- **Motor Impairments:** Users with motor impairments may need extra navigation steps to reach the correct landmark.
- **Cognitive Disabilities:** Redundant structures can lead to misunderstanding or disorientation.

## Fixes

To address multiple <code>banner</code> landmarks:

1. Locate the different <code>banner</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
