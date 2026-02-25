---
Title: Singular Main Landmark Check
id: landmark_13
type: "true"
elem: "all"
test: "noDuplicateMain"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Singular Main Landmark Check

## Description

The "Singular Main Landmark Check" evaluates whether there is only one <code>main</code> landmark.

## Example outcome

I found <mark>one</mark> main landmark.

## Impact

- **Visual Impairments:** Screen readers may announce multiple <code>main</code> landmarks, leading to confusion about which content is primary.
- **Motor Impairments:** Navigating through multiple <code>main</code> landmarks could result in longer navigation times, complicating the user experience.
- **Cognitive Disabilities:** The redundancy may cause confusion, making it harder for users to focus on the primary content of the page.

## Fixes

To address multiple <code>main</code> landmarks:

1. Locate the different <code>main</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
