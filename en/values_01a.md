---
Title: Inappropriate Layout Measurement Value Check
id: values_01a
type: "decr"
elem: "all"
test: "valueAbsHtml"
score: 3
level: "AA"
trust: "0.9"
top: 1
steps: 1
ref: "G146"
scs: "1.4.4"
dis: "15222"
result: "warning"
---

# Inappropriate Layout Measurement Value Check

## Description

The "Inappropriate Layout Measurement Value Check" evaluates whether there is any layout measurement (e.g., widths, heights, padding, margins) defined using absolute units like <code>px</code> (pixels), which does not scale well when users resize text.

## Example outcome

I found <mark>1</mark> instance where the measurement units that define the width of content elements are expressed in absolute values.

## Impact

- **Visual Impairments:** Users who enlarge text may see clipped content or overlapping elements.
- **Motor Impairments:** Individuals with motor imairments may need to resize the interface for ease of interaction, and fixed sizes prevent that.
- **Cognitive Disabilities:** Fixed layouts can break flow or cause readability issues when zoomed.
- **Color Blindness:** Users may zoom to compensate color blindness, but absolute units break layout scaling.
- **Elderly:** Absolute sizes don’t respect browser zoom or user preferences, presenting a challenge for elder people.

## Fixes

To address inappropriate layout measurements defined using absolute units:

1. Locate the inappropriate measurement definition.
2. Replace the absolute unit by a relative one (e.g., <code>em</code>, <code>rem</code> and <code>%</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [WCAG 2.2 Techniques: Technique G146: Using liquid layout](https://www.w3.org/WAI/WCAG22/Techniques/general/G146)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
