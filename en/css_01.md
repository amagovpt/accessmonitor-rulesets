---
Title: Inappropriate Line Height Check
id: css_01
type: "decr"
elem: "all"
test: "lineHeightNo"
score: 3
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "C21"
scs: "1.4.8,1.4.12"
dis: "15153"
result: "warning"
---

# Inappropriate Line Height Check

## Description

The "Inappropriate Line Height Check" evaluates whether the CSS <code>line-height</code> for all applicable elements is at least 1.5 times the font size, as required for enhanced readability.

## Example outcome

I identified <mark>1</mark> instance where CSS specifies a spacing between lines smaller than 1.5.

## Impact

- **Visual Impairments:** Users with low vision may use screen magnification, which can make densely spaced text more difficult to track.
- **Motor Impairments:** People relying on assistive tech (e.g. voice control or switches) may have a harder time navigating denser text blocks.
- **Cognitive Disabilities:** Insufficient spacing can reduce focus and reading comprehension, especially in longer content.
- **Dyslexia:** Tight line spacing causes lines of text to visually blend together, increasing cognitive load and reducing reading accuracy.

## Fixes

To address inappropriate line height:

1. Locate the text or readable element where line height is inferior than 1.5 times the text or readable element size.
2. Update the CSS referent to that text or readable element to ensure a minimum <code>line-height</code> of 1.5.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2: Understanding Success Criteria 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [WCAG 2.2 Techniques: Technique C21: Specifying line spacing in CSS](https://www.w3.org/WAI/WCAG22/Techniques/css/C21)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
