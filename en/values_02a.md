---
Title: Inappropriate Container Measurements Check
id: values_02a
type: "decr"
elem: "all"
test: "valueAbsCss"
score: 5
level: "AAA"
trust: "0.9"
top: 1
steps: 1
ref: "C24"
scs: "1.4.8"
dis: "15113"
result: "warning"
---

# Inappropriate Container Measurements Check

## Description

The "Inappropriate Container Measurements Check" evaluates whether there is any usage of absolute measurement units in CSS styles that define the width of content boxes.

## Example outcome

I identified <mark>1</mark> instance in the CSS where an absolute measurement unit is used to define the width of content boxes.

## Impact

- **Visual Impairments:** Zooming can cause overflow, truncation, or unreadable layouts.
- **Cognitive Disabilities:** Poor layout scaling can introduce distractions or cause confusion.
- **Elderly:** Elder people often rely on increased zoom and may struggle with layouts that don’t scale.
- **Mobile:** Fixed widths break responsive design, which impairs usability for mobile users.

## Fixes

To address inappropriate content boxes width defined using absolute units:

1. Locate the inappropriate CSS.
2. Replace the absolute measurement unit with a relative one.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique C24: Using percentage values in CSS for container sizes](https://www.w3.org/WAI/WCAG22/Techniques/css/C24)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
