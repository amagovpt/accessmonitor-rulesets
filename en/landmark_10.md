---
Title: Duplicate Banner Landmark Check
id: landmark_10
type: "fals"
elem: "all"
test: "duplicateBanner"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1,2.4.1"
dis: "43353"
result: "failed"
---

# Duplicate Banner Landmark Check

## Description

The "Duplicate Banner Landmark Check" evaluates whether there is more than one <code>banner</code> landmark.

## Example outcome

I found <mark>2</mark> banner landmarks.

## Impact

- **Visual Impairments:** Multiple banner landmarks may lead to confusion as screen readers will read them out as "banner", which might mislead users into thinking the information is repeated.
- **Motor Impairments:** Keyboard navigation might become more cumbersome, requiring the user to navigate through multiple banners, leading to a longer time to find the actual content.
- **Cognitive Disabilities:** Redundant banners could create confusion about the page structure, potentially leading to difficulty in understanding the site's layout.

## Fixes

To address multiple <code>banner</code> landmarks:

1. Locate the different <code>banner</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
