---
Title: Inappropriate Banner Landmark Check
id: landmark_02
type: "fals"
elem: "all"
test: "bannerNotTopLevel"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1,2.4.1"
dis: "43353"
result: "failed"
---

# Inappropriate Banner Landmark Check

## Description

The "Inappropriate Banner Landmark Check" evaluates whether the <code>banner</code> landmark is nested in another region's landmark.

## Example outcome

I noticed that the <code>banner</code> landmark <mark>is</mark> contained within other landmark.

## Impact

- **Visual Impairments:** Screen reader users may not recognize or access the banner as expected. It could be skipped or misinterpreted.
- **Motor Impairments:** Improper structure can interrupt keyboard-only navigation, increasing the number of actions needed to reach site-wide navigation or branding.
- **Cognitive Disabilities:** Incorrect landmark nesting can lead to confusion and poor page comprehension.

## Fixes

To address <code>banner</code> landmarks inappropriately contained within other landmarks:

1. Locate the inappropriately placed <code>banner</code> landmark.
2. Removing it from the other landmark region, and place it on top of the page.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
