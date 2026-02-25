---
Title: Inappropriate Measurement Unit Check
id: layout_03
type: "decr"
elem: "all"
test: "layoutFixed"
score: 3
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "G146"
scs: "1.4.4,1.4.8"
dis: "15222"
result: "failed"
---

# Inappropriate Measurement Unit Check

## Description

The "Inappropriate Measurement Unit Check" evaluates whether there is any usage of fixed units (e.g., <code>px</code>) for defining the width of text containers.

## Example outcome

I identified <mark>1</mark> instance in the CSS where <code>px</code> measurement unit is used to define the width of text boxes.

## Impact

- **Visual Impairments:** Visually impaired users often zoom in up to 200% to read comfortably. Fixed-width containers break layout or cause text to overflow, clip, or be hidden.
- **Cognitive Disabilities:** Disruption of content flow or overlapping elements can cause confusion and reduce comprehension. Layouts that don’t adapt cause additional mental processing effort.
- **Mobile:** On small screens, fixed widths prevent responsive reflow, making content unreadable or requiring excessive horizontal scrolling.

## Fixes

To address inappropriate measurement units:

1. Locate the CSS code where the fixed unit is used.
2. Replace the fixed unit by a relative one (e.g., <code>%</code>)

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique G146: Using liquid layout](https://www.w3.org/WAI/WCAG22/Techniques/general/G146)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
