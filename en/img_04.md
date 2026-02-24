---
Title: Alt Text Length Check
id: img_04
type: "prop"
elem: "img"
test: "imgAltLong"
score: 5
level: "A"
trust: "0.9"
ref: "H45"
scs: "1.1.1"
dis: "54153"
result: "warning"
---

# Alt Text Length Check

## Description

The "Alt Text Length Check" evaluates whether the alternative text (alt text) provided for images on a webpage exceeds a specified character limit, namely 100 characters.

## Example outcome

I found <mark>1</mark> image on the page with an <code>alt</code> with more than 100 characters.

## Impact

- **Visual Impairments:** Excessive alt text can overwhelm individuals with visual impairments, making it difficult for screen readers to efficiently convey the content and purpose of the image, potentially leading to frustration or disorientation.
- **Cognitive and Learning Disabilities:** Lengthy alt text may pose challenges for users with cognitive and learning disabilities, who may experience difficulty processing or retaining large amounts of textual information, impeding comprehension and navigation.

## Fixes

To address alt text length exceeding 100 characters:

1. Review the alt text for each image and identify instances where it exceeds the recommended character limit.
2. Condense the alt text to convey the essential content and purpose of the image succinctly within the specified character limit.
3. Prioritize key information and avoid unnecessary details or verbose descriptions to optimize accessibility and usability.

## Resources

- [WCAG 2.2: Understanding Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.1 Techniques: Technique H45: Using longdesc](https://www.w3.org/WAI/WCAG22/Techniques/html/H45)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
