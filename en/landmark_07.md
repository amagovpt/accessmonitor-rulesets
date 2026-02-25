---
Title: Main Landmark Check
id: landmark_07
type: "true"
elem: "all"
test: "mainTopLevel"
score: 10
level: "AA"
trust: "1"
ref: "ARIA11"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Main Landmark Check

## Description

The "Main Landmark Check" evaluates whether the <code>main</code> landmark (which identifies the primary content of a webpage) is not nested within another landmark region.

## Example outcome

I noticed that the <code>main</code> landmarks <mark>are not</mark> contained within other landmarks.

## Impact

- **Visual Impairments:** Screen readers may not identify the main content properly, making page navigation inefficient or misleading.
- **Motor Impairments:** Keyboard-only users who rely on landmark navigation may not be able to quickly jump to the main content.
- **Cognitive Disabilities:** Unclear structure makes it harder to understand where the primary content begins and ends.

## Fixes

To address inappropriate <code>main</code> landmarks:

1. Locate the inappropriately placed <code>main</code> landmark.
2. Remove it from within the landmark in which it is nested.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
