---
Title: Inappropriate Text-Background Contrast Check
id: color_02
type: "decr"
elem: "all"
test: "colorContrast"
score: 1
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "G145"
scs: "1.4.3"
dis: "15113"
result: "failed"
---

# Inappropriate Text-Background Contrast Check

## Description

The "Inappropriate Text-Background Contrast Check" evaluates whether there is any text that has insufficient contrast against its background.

## Example outcome

I located <mark>1</mark> color combination for which the contrast ratio is lower than the minimum contrast ratio allowed by the WCAG, which is 3 to 1 for larger font text and 4.5 to 1 for regular font text.

## Impact

- **Visual Impairments:** Low contrast can make text unreadable for visually impaired users.
- **Cognitive Disabilities:** Increased effort required to read low-contrast content may cause cognitive overload.
- **Color Blindness:** For people with color blindness, ome color combinations (e.g., red/green, blue/purple) can be indistinguishable.
- **Elderly:** Natural vision degradation makes high contrast essential.

## Fixes

To address inappropriate contrast between text and background:

1. Locate the text that doesn't have sufficient contrast against its background.
2. Update the color pair (font and background) to meet or exceed the minimum contrast ratios as per WCAG.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 2.2 Techniques: Technique G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
