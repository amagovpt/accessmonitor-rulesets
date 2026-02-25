---
Title: Inappropriate Iframe Elements With Equal Accessible Name Check
id: iframe_03
type: "prop"
elem: "iframeSame"
test: "iframeSameANameDiferent"
score: 3
level: "A"
trust: "1"
ref: "4b1c6c"
scs: "4.1.2"
dis: "43353"
result: "warning"
---

# Inappropriate Iframe Elements With Equal Accessible Name Check

## Description

The "Inappropriate Iframe Elements With Equal Accessible Name Check" evaluates whether there are any pair of <code>&lt;iframe&gt;</code> elements that share the same accessible name but point to different content.

## Example outcome

I found <mark>1</mark> pair of <code>&lt;iframe&gt;</code> elements with the same accessible name.

## Impact

- **Visual Impairments:** Visually impaired users will navigate two identical "Media Player" titles leading to confusion.
- **Motor Impairments:** People with motor impairments waste time if the same name leads to unexpected destinations.
- **Cognitive Disabilities:** Users with cognitive disabilitites might assume duplicated content is an error, leading to frustration.

## Fixes

To address <code>&lt;iframe&gt;</code> elements with the same accessible name pointing to different content:

1. Locate the <code>&lt;iframe&gt;</code> elements inappropriately sharing the same accessible name.
2. Change one or both the <code>title</code> attributes to ensure that these are different and describe accurately the <code>&lt;iframe&gt;</code> elements content.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Iframe elements with identical accessible names have equivalent purpose](https://www.w3.org/WAI/standards-guidelines/act/rules/4b1c6c/proposed/)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)

