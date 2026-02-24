---
Title: Duplicate Main Landmark Check
id: landmark_14
type: "fals"
elem: "all"
test: "duplicateMain"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: ""
dis: "43353"
result: "failed"
---

# Duplicate Main Landmark Check

## Description

The "Duplicate Main Landmark Check" evaluates whether there is more than one <code>main</code> landmark.

## Example outcome

I found <mark>2</mark> main landmarks.

## Impact

- **Visual Impairments:** Screen readers may announce multiple <code>main</code> landmarks, confusing the user and making navigation harder.
- **Motor Impairments:** Keyboard navigation might become more cumbersome as users may need to skip over redundant <code>main</code> landmarks, leading to a less efficient browsing experience.
- **Cognitive Disabilities:** The page structure may be unclear, leading to difficulty in identifying the main content or distinguishing it from other sections.

## Fixes

To address multiple <code>main</code> landmarks:

1. Locate the different <code>main</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
