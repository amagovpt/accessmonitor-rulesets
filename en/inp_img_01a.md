---
Title: Graphic Button Alt Text Check
id: inp_img_01a
type: "fals"
elem: "inpImg"
test: "inpImgAltYes"
score: 10
level: "A"
trust: "0.9"
ref: "H36"
scs: "1.1.1,4.1.2"
dis: "54211"
result: "passed"
---

# Graphic Button Alt Text Check

## Description

The "Graphic Button Alt Text Check" evaluates whether all <code>&lt;input type="image"&gt;</code> elements on the page have a non-empty, descriptive <code>alt</code> attribute, which serves as the accessible label for users relying on screen readers or keyboard navigation.

## Example outcome

I noticed that <mark>all</mark> the graphic buttons on the page make use of the <code>alt</code> attribute.

## Impact

- **Visual Impairments:** Screen reader will announce the image as “button” without meaning.
- **Motor Impairments:** Button cannot be located or targeted via assistive tools.
- **Cognitive Disabilities:** Users may not understand button function due to lack of clarity.

## Fixes

To address graphic buttons missing alternative text:

1. Locate the <code>&lt;input type="image"&gt;</code> element missing an alternative text.
2. Add a descriptive <code>alt</code> text, providing information about the action performed by a click.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG22/Techniques/html/H36)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
