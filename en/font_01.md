---
Title: Inappropriate HTML Text Formatting Check
id: font_01
type: "decr"
elem: "all"
test: "fontHtml"
score: 3
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "C22"
scs: "1.3.1,1.4.4,1.4.5,1.4.9"
dis: "33111"
result: "failed"
---

# Inappropriate HTML Text Formatting Check

## Description

The "Inappropriate HTML Text Formatting Check" evaluates whether there is any HTML element or attribute being used to control the visual presentation of text.

## Example outcome

I located <mark>1</mark> HTML element or attribute that is being used to control the visual presentation of text.

## Impact

- **Visual Impairments:** HTML presentation tags don't convey semantic meaning. Screen readers may not interpret visual styling accurately, leading to confusing or missing context.
- **Cognitive Disabilities:** Inconsistent or misused formatting can impair readability and comprehension.
- **Color Blindness:** Using outdated HTML formatting limits the ability to customize styles via user stylesheets or browser settings (e.g., increasing font size, changing contrast).

## Fixes

To address inappropriate presentational HTML:

1. Locate the inappropriate element or attribute.
2. Replace it by semantic HTML and CSS.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [WCAG 2.2: Understanding Success Criteria 1.4.5](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text)
- [WCAG 2.2: Understanding Success Criteria 1.4.9](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception)
- [WCAG 2.2 Techniques: Technique C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG22/Techniques/css/C22)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
