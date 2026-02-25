---
Title: Viewport Meta Element Check
id: meta_05
type: "true"
elem: "all"
test: "metaViewport"
score: 10
level: "AA"
trust: "1"
ref: "b4f0c3"
scs: "1.4.4"
dis: "43353"
result: "passed"
---

# Viewport Meta Element Check

## Description

The "Viewport Meta Element Check" evaluates whether the <code>&lt;meta name="viewport"&gt;</code> element does not disable user scaling (i.e., pinch-to-zoom). 

## Example outcome

I noticed that the <code>meta</code> element <mark>does not prevent</mark> users from zooming.

## Impact

- **Visual Impairments:** Individuals with visual impairments cannot zoom text or interface elements for better legibility.
- **Motor Impairments:** Small tap targets remain small, increasing interaction difficulty for users with motor impairments.
- **Cognitive Disabilities:** Inability to enlarge content may lead to confusion or reading fatigue.
- **Elderly:** Elder people will face reduced reading comfort due to small, fixed-sized content.

## Fixes

To address <code>&lt;meta&gt;</code> elements that prevent users from zooming:

1. Locate the <code>&lt;meta&gt;</code> element.
2. Replace it with an incluse viewport setting (e.g., <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>).
3. Avoid using the <code>user-scalable=no</code> and the <code>maximum-scale=1.0</code> attributes in the viewport tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [ACT Rules: Meta viewport allows for zoom](https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
