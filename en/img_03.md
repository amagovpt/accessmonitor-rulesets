---
Title: Inappropriate Alternative Text Check
id: img_03
type: "decr"
elem: "img"
test: "imgAltNot"
score: 3
level: "A"
trust: "1"
top: 1
steps: 1
ref: "F30"
scs: "1.1.1,1.2.1"
dis: "53211"
result: "failed"
---

# Inappropriate Alternative Text Check

## Description

The "Inappropriate Alternative Text Check" evaluates whether the alternative text (alt text) provided for images on a webpage accurately represents their content or function.

## Example outcome

I found <mark>1</mark> image on the page with an <code>alt</code> that does not serve as an alternative equivalent.

## Impact

- **Visual Impairments:** Inaccurate or misleading alt text prevents individuals with visual impairments from accessing relevant visual information, leading to confusion or misunderstanding of the webpage's content.
- **Cognitive and Learning Disabilities:** Incorrect alt text can hinder comprehension and navigation for users with cognitive and learning disabilities, who rely on accurate descriptions to understand the purpose and context of images.

## Fixes

To correct inappropriate alternative text:

1. Review each image and its corresponding alt text to ensure accuracy and relevance.
2. Replace inaccurate or misleading alt text with descriptions that accurately represent the content or function of the image.
3. Consider the context and purpose of the image when crafting alternative text to provide meaningful information to all users.

## Resources

- [WCAG 2.2: Understanding Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2 Techniques: Technique F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)
- [ACT Rules: Image accessible name is descriptive](https://www.w3.org/WAI/standards-guidelines/act/rules/qt1vmo/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
