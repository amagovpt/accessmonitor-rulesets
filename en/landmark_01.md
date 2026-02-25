---
Title: Banner Landmark Check
id: landmark_01
type: "true"
elem: "all"
test: "bannerTopLevel"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1,2.4.1"
dis: "43353"
result: "passed"
---

# Banner Landmark Check

## Description

The "Banner Landmark Check" evaluates whether the <code>banner</code> landmark (typically used for site-wide headers or branding) is placed only at the top level of the page and is not nested within other landmark regions (e.g., <code>main</code>).

## Example outcome

I noticed that the <code>banner</code> landmarks <mark>are not</mark> contained within other landmarks.

## Impact

- **Visual Impairments:** Users relying on screen readers may not be able to navigate properly or even detect the banner.
- **Motor Impairments:** Inconsistent landmark structure can hinder keyboard-only navigation.
- **Cognitive Disabilities:** Confusing structure can cause disorientation and navigation fatigue.

## Fixes

To address <code>banner</code> landmarks inappropriately contained within other landmarks:

1. Locate the inappropriately placed <code>banner</code> landmark.
2. Remove it from within the landmark in which it is nested, tipically placing it on top of the page.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
