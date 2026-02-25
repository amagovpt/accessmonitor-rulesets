---
Title: Missing Graphic Button Alt Text Check
id: inp_img_01b
type: "prop"
elem: "inpImg"
test: "inpImgAltNo"
score: 1
level: "A"
trust: "1"
ref: "F65"
scs: "1.1.1,4.1.2"
dis: "53322"
result: "failed"
---

# Missing Graphic Button Alt Text Check

## Description

The "Missing Graphic Button Alt Text Check" evaluates whether there is any <code>&lt;input type="image"&gt;</code> element on the page without an <code>alt</code> attribute.

## Example outcome

I found <mark>1</mark> graphic button on the page that does not have the <code>alt</code> attribute.

## Impact

- **Visual Impairments:** Button appears as unlabeled or silent, offering no function.
- **Motor Impairments:** Button cannot be located or targeted via assistive tools.
- **Cognitive Disabilities:** Button purpose is unclear, increasing user confusion.

## Fixes

To address graphic buttons missing alternative text:

1. Locate the <code>&lt;input type="image"&gt;</code> element missing an alternative text.
2. Add a descriptive <code>alt</code> text, providing information about the action performed by a click.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG22/Techniques/failures/F65)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
