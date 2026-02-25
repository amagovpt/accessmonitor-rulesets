---
Title: Inappropriate Contentinfo Landmark Check
id: landmark_06
type: "fals"
elem: "all"
test: "contentinfoNotTopLevel"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: ""
dis: "43353"
result: "failed"
---

# Inappropriate Contentinfo Landmark Check

## Description

The "Inappropriate Contentinfo Landmark Check" evaluates whether there is any <code>contentinfo</code> landmark nested within another region's landmark.

## Example outcome

I noticed that the <code>contentinfo</code> landmark <mark>is</mark> contained within other landmark.

## Impact

- **Visual Impairments:** Screen readers may miss or misidentify the contentinfo region, making it harder to access legal, privacy, or support information.
- **Motor Impairments:** Users who depend on landmark-based keyboard shortcuts might not be able to reach the footer efficiently.
- **Cognitive Disabilities:** Structural inconsistencies can create confusion, particularly for users who rely on consistent patterns to navigate and comprehend layout.

## Fixes

To address inappropriate <code>contentinfo</code> landmarks:

1. Locate the inappropriately placed <code>contentinfo</code> landmark.
2. Remove it from within the landmark in which it is nested, tipically placing it on the bottom of the page.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
