---
Title: Singular Contentinfo Landmark Check
id: landmark_11
type: "true"
elem: "all"
test: "noDuplicateContentinfo"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Singular Contentinfo Landmark Check

## Description

The "Singular Contentinfo Landmark Check" evaluates whether there is only one <code>contentinfo</code> landmark.

## Example outcome

I found <mark>one</mark> contentinfo landmark.

## Impact

- **Visual Impairments:** Users might hear redundant "contentinfo" landmarks read aloud, leading to confusion about the page’s structure.
- **Motor Impairments:** Extra navigation points may make it more difficult to navigate to the relevant footer or contentinfo region, increasing the time to locate important site information.
- **Cognitive Disabilities:** The structure of the page may be confusing, as redundant content regions may mislead users about the primary footer or informational content.

## Fixes

To address multiple <code>contentinfo</code> landmarks:

1. Locate the different <code>contentinfo</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
