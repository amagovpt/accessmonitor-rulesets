---
Title: Inappropriate Font Size Check
id: font_02
type: "prop"
elem: "fontValues"
test: "fontAbsVal"
score: 3
level: "AA"
trust: "1"
ref: "C12"
scs: "1.4.4"
dis: "15123"
result: "failed"
---

# Inappropriate Font Size Check

## Description

The "Inappropriate Font Size Check" evaluates whether there is any CSS declaration where an absolute unit (like <code>px</code>, <code>pt</code>, <code>cm</code>, or <code>in</code>) are used to set font sizes.

## Example outcome

I identified <mark>1</mark> instance where the font size is expressed in absolute measurement units.

## Impact

- **Visual Impairments:** Users with visual impairments may need to increase text size to read comfortably. Absolute units don't scale well with browser zoom or user stylesheets.
- **Cognitive Disabilities:** Being unable to enlarge text means reduced readability, especially when line spacing, font style, and size are not adaptable, presenting challenges for users with cognitive disabilities.
- **Elderly:** Age-related vision issues often require larger or adjustable text. Absolute units restrict user control.

## Fixes

To address inappropriate font size declarations:

1. Locate the CSS code where the font size is expressed using absolute units.
2. Replace the absolute units by either relative units (e.g., <code>em</code>, <code>rem</code>, or <code>%</code>) or viewport-based units (e.g., <code>vw</code>, <code>vh</code>)

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [WCAG 2.2 Techniques: Technique C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG22/Techniques/css/C12)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
