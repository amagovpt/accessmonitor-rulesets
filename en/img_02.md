---
Title: Decorative Image Check
id: img_02
type: "prop"
elem: "img"
test: "imgAltNull"
score: 8
level: "A"
trust: "1"
ref: "C9"
scs: "1.1.1"
dis: "41111"
result: "warning"
---

# Decorative Image Check

## Description

The "Decorative Image Check" evaluates whether decorative images on a webpage are appropriately marked using either an empty alt attribute (alt=""), role="presentation", or role="none".

## Example outcome

I found <mark>1</mark> decorative image on the page (with <code>alt=\"\"</code> (empty alt) or with <code>role=\"presentation\"</code> or <code>role=\"none\"</code>.

## Impact

- **Visual Impairments:** Properly marking decorative images ensures that individuals with visual impairments using screen readers do not receive unnecessary or confusing information, enhancing the clarity and efficiency of their browsing experience.
- **Cognitive and Learning Disabilities:** Clear identification of decorative images aids users with cognitive and learning disabilities by reducing cognitive load and preventing potential confusion or distraction caused by irrelevant visual content.

## Fixes

To mark decorative images appropriately:

1. Identify images that serve a purely decorative purpose and do not convey meaningful content or information.
2. Add an empty alt attribute (alt=""), role="presentation", or role="none" to indicate to assistive technologies that the image is decorative and should be ignored for informational purposes.
3. Ensure that decorative images are not conveying important information that should be provided in an accessible format elsewhere on the webpage.

## Resources

- [WCAG 2.2: Understanding Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2 Techniques: Technique C9: Using CSS to include decorative images](https://www.w3.org/WAI/WCAG22/Techniques/css/C9)
- [ACT Rules: Image not in the accessibility tree is decorative](https://www.w3.org/WAI/standards-guidelines/act/rules/e88epe/proposed/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
