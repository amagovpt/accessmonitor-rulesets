---
Title: Text Color Contrast Check
id: textC_01
type: "true"
elem: "all"
test: "textContrastH"
score: 10
level: "AAA"
trust: "1"
ref: "G17"
scs: "1.4.6"
dis: "43353"
result: "passed"
---

# Text Color Contrast Check

## Description

The "Text Color Contrast Check" evaluates whether all foreground / background text color combinations on the page meet or exceed the enhanced contrast thresholds defined by WCAG 2.1 Success Criterion 1.4.6 (AAA).

## Example outcome

I observed that <mark>all</mark> color combinations have a contrast ratio above the optimized contrast ratio suggested by the WCAG, which is 4.5 to 1 for larger font text and 7 to 1 for regular font text.

## Impact

- **Visual Impairments:** Insufficient contrast can make text unreadable, especially on light or patterned backgrounds.
- **Cognitive Disabilities:** Low-contrast text increases mental fatigue and strain when reading.
- **Color Blindness:** Certain color pairings (e.g., red/green, blue/purple) may become indistinguishable.
- **Elderly:** Age-related contrast sensitivity reduction can make even mildly low-contrast text difficult to read.

## Fixes

To address inappropriate text and background color contrast ratio:

1. Locate the inappropriate text.
2. Update the color of the element to enhance the contrast against the background.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)
- [WCAG 2.2 Techniques: Technique G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG22/Techniques/general/G17)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
