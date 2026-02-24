---
Title: Alternative Text Check
id: img_01a
type: "fals"
elem: "img"
test: "imgAlt"
score: 10
level: "A"
trust: "0.9"
ref: "H37"
scs: "1.1.1"
dis: "53322"
result: "passed"
---

# Alternative Text Check

## Description

The "Alternative Text Check" evaluates whether all images on a webpage have an alternative text (alt text) attribute specified.

## Example outcome 

I noticed that <mark>all</mark> the images on the page have an alternative text equivalent.

## Impact

- **Visual Impairments:** Alt text is crucial for individuals with visual impairments as it provides a textual description of images, enabling screen readers to convey the content to users who cannot see the images.
- **Cognitive and Learning Disabilities:** Alt text aids users with cognitive and learning disabilities by providing textual context for visual elements, facilitating comprehension and navigation.

## Fixes

To address missing or inadequate alt text:

1. Review each image on the webpage and determine appropriate alternative descriptions based on their content and context.
2. Add alt text to each image using descriptive and concise language that conveys the purpose or function of the image.
3. For decorative images, use empty alt text (alt="") to indicate their decorative nature to assistive technologies.

## Resources

- [WCAG 2.2: Understanding Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2 Techniques: Technique H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H37)
- [ACT Rules: Image has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
