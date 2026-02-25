---
Title: Layout Measurement Value Check
id: values_01b
type: "true"
elem: "all"
test: "valueRelHtml"
score: 10
level: "AA"
trust: "0.9"
ref: "G146"
scs: "1.4.4"
dis: "15222"
result: "passed"
---

# Layout Measurement Value Check

## Description

The "Layout Measurement Value Check" evaluates whether all layout-related measurement units (e.g., for width, padding, font size) are defined using relative units such as <code>%</code> and <code>em</code>.

## Example outcome

I found <mark>all</mark> instances where the measurement units that define the width of content elements are expressed in relative values.

## Impact

- **Visual Impairments:** Zooming may cause text to overflow or become clipped.
- **Motor Impairments:** Individuals with motor imairments may need to resize the interface for ease of interaction, and fixed sizes prevent that.
- **Cognitive Disabilities:** Layout issues from fixed sizes create distractions or confusion.
- **Color Blindness:** Users may zoom to compensate color blindness, but absolute units break layout scaling.
- **Elderly:** Poor text scaling breaks page layout.

## Fixes

To address inappropriate layout measurements defined using absolute units:

1. Locate the inappropriate measurement definition.
2. Replace the absolute unit by a relative one (e.g., <code>em</code>, <code>rem</code> and <code>%</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [WCAG 2.2 Techniques: Technique G146: Using liquid layout](https://www.w3.org/WAI/WCAG22/Techniques/general/G146)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
