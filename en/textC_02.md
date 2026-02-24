---
Title: Inappropriate Text Color Contrast Check
id: textC_02
type: "fals"
elem: "all"
test: "textContrastHNot"
score: 10
level: "AAA"
trust: "1"
ref: "G17"
scs: "1.4.6"
dis: "43353"
result: "warning"
---

# Inappropriate Text Color Contrast Check

## Description

The "Inappropriate Text Color Contrast Check" evaluates whether there is any foreground / background text color combination on the page that does not meet the enhanced contrast thresholds.

## Example outcome

I located <mark>1</mark> color combination for which the contrast ratio is lower than the optimized contrast ratio suggested by the WCAG, which is 4.5 to 1 for larger font text and 7 to 1 for regular font text.

## Impact

- **Visual Impairments:** Hard-to-read text or instructions, especially with gray-on-white or pale color combinations.
- **Cognitive Disabilities:** Visual fatigue leads to slower reading and lower comprehension.
- **Color Blindness:** Users with color blind deficiencies may not see sufficient contrast.
- **Elderly:** Natural aging reduces contrast sensitivity, especially in dim or backlit conditions.

## Fixes

To address inappropriate text and background color contrast ratio:

1. Locate the inappropriate text.
2. Update the color of the element to enhance the contrast against the background.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)
- [WCAG 2.2 Techniques: Technique G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G17)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
