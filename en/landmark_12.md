---
Title: Duplicate Contentinfo Landmark Check
id: landmark_12
type: "fals"
elem: "all"
test: "duplicateContentinfo"
score: 4
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Duplicate Contentinfo Landmark Check

## Description

The "Duplicate Contentinfo Landmark Check" evaluates whether there is more than one <code>contentinfo</code> landmark.

## Example outcome

I found <mark>2</mark> contentinfo landmarks.

## Impact

- **Visual Impairments:** Screen readers may announce redundant "contentinfo" landmarks, making it unclear which footer or informational section is primary.
- **Motor Impairments:** Multiple navigation points for footers may increase the time it takes for users to reach relevant content, affecting browsing efficiency.
- **Cognitive Disabilities:** Redundant footers can confuse users and make it harder to focus on the correct site-wide content, increasing cognitive load.

## Fixes

To address multiple <code>contentinfo</code> landmarks:

1. Locate the different <code>contentinfo</code> landmarks.
2. Remove the ones that aren't correctly assigned, moving the content to the correct one if necessary.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
