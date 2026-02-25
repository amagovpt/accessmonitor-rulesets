---
Title: Container Measurements Check
id: values_02b
type: "true"
elem: "all"
test: "valueRelCss"
score: 10
level: "AAA"
trust: "1"
ref: "C24"
scs: "1.4.8"
dis: "15113"
result: "passed"
---

# Container Measurements Check

## Description

The "Container Measurements Check" evaluates whether all CSS rules defining the width of content boxes use relative measurement units rather than fixed absolute units.

## Example outcome

I identified <mark>all</mark> instances in the CSS where relative measurement units are used to define the width of the content boxes.

## Impact

- **Visual Impairments:** Content may not resize well when zooming to 200%.
- **Cognitive Disabilities:** Fixed layouts may impair navigation and comprehension.
- **Elderly:** Elder people needing larger text may face clipped layouts.
- **Mobile:** Mobile users will face poor responsiveness due to fixed pixel widths.

## Fixes

To address inappropriate content boxes width defined using absolute units:

1. Locate the inappropriate CSS.
2. Replace the absolute measurement unit with a relative one.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique C24: Using percentage values in CSS for container sizes](https://www.w3.org/WAI/WCAG22/Techniques/css/C24)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
