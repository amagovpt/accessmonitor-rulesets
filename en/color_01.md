---
Title: CSS Font And Background Color Check
id: color_01
type: "true"
elem: "all"
test: "colorFgBgNo"
score: 3
level: "AA"
trust: "0.9"
ref: "F24"
scs: "1.4.3,1.4.6,1.4.8"
dis: "13113"
result: "warning"
---

# CSS Font And Background Color Check

## Description

The "CSS Font And Background Color Check" evaluates whether CSS rules explicitly define both the font color and the background color.

## Example outcome

I identified <mark>1</mark> CSS rule that does not specify either the font color or the background color.

## Impact

- **Visual Impairments:** Visually impairmed users may apply custom styles or high-contrast modes — if only one color is defined, the text can blend with the background.
- **Cognitive Disabilities:** Low visual clarity can increase cognitive load and reading difficulty.
- **Color Blindness:** While not directly affected by single-color definitions, poor contrast combinations that result from partial overrides can worsen legibility for color blind.
- **Elderly:** Elder users are often affected due to a combination of vision changes and reliance on accessibility settings.

## Fixes

To address missing font and/or background color:

1. Locate the custom styles missing the font and/or background color.
2. Update the CSS rules to explicitly declare both the <code>color</code> (font) and <code>background-color</code>

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 2.2: Understanding Success Criteria 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)
- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24)
- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
