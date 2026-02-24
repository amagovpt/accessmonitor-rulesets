---
Title: Missing Alternative Text Check
id: img_01b
type: "prop"
elem: "img"
test: "imgAltNo"
score: 3
level: "A"
trust: "1"
ref: "F65"
scs: "1.1.1"
dis: "53322"
result: "failed"
---

# Missing Alternative Text Check

## Description

The "Missing Alternative Text Check" evaluates whether all images on a webpage have an alternative text (alt text) attribute specified.

## Example outcome

I found <mark>1</mark> image on the page without the alternative text equivalent.

## Impact

- **Visual Impairments:** Missing alt text prevents individuals with visual impairments from accessing important visual information, leading to incomplete or inaccessible content.
- **Cognitive and Learning Disabilities:** Absence of alt text hinders comprehension and navigation for users with cognitive and learning disabilities, who rely on textual descriptions for context.

## Fixes

To address missing alternative text:

1. Identify the image lacking alt text.
2. Determine an appropriate alternative description that conveys the image's content or function.
3. Add alt text to the image using descriptive language, ensuring it accurately represents the image's purpose.

## Resources

- [WCAG 2.2: Understanding Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2 Techniques: Technique F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG22/Techniques/failures/F65)
- [ACT Rules: Image has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
