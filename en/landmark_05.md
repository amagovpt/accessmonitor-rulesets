---
Title: Contentinfo Landmark Check
id: landmark_05
type: "true"
elem: "all"
test: "contentinfoTopLevel"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Contentinfo Landmark Check

## Description

The "Contentinfo Landmark Check" evaluates whether the <code>contentinfo</code> landmark (typically representing a site's footer or metadata) is not nested within other landmark regions.

## Example outcome

I noticed that the <code>contentinfo</code> landmarks <mark>are not</mark> contained within other landmarks.

## Impact

- **Visual Impairments:** Screen reader users might not be able to locate the footer or understand its relation to the rest of the content.
- **Motor Impairments:** Inefficient or blocked keyboard landmark navigation can make reaching the footer difficult.
- **Cognitive Disabilities:** Poor structure can impair the ability to predict or recognize site-wide patterns.

## Fixes

To address inappropriate <code>contentinfo</code> landmarks:

1. Locate the inappropriately placed <code>contentinfo</code> landmark.
2. Remove it from within the landmark in which it is nested, tipically placing it on the bottom of the page.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
