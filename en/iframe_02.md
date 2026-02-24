---
Title: Iframe Elements With Equal Accessible Name Check
id: iframe_02
type: "true"
elem: "iframeSame"
test: "iframeSameAName"
score: 10
level: "A"
trust: "1"
ref: "4b1c6c"
scs: "4.1.2"
dis: "43353"
result: "passed"
---

# Iframe Elements With Equal Accessible Name Check

## Description

The "Iframe Elements With Equal Accessible Name Check" evaluates whether multiple <code>&lt;iframe&gt;</code> elements with the same accessible name (typically provided via the <code>title</code> attribute) are pointing to the same source (i.e., the <code>src</code> URL or embedded content).

## Example outcome

I found <mark>2</mark> <code>&lt;iframe&gt;</code> elements with the same accessible name pointing to the same content.

## Impact

- **Visual Impairments:** May assume identical content based on name, resulting in confusion
- **Motor Impairments:** Misidentifying destinations wastes effort navigating between elements
- **Cognitive Disabilities:** Inconsistent naming breaks content predictability and orientation

## Fixes

To address <code>&lt;iframe&gt;</code> elements with the same accessible name pointing to different content:

1. Locate the <code>&lt;iframe&gt;</code> elements inappropriately sharing the same accessible name.
2. Change one or both the <code>title</code> attributes to ensure that these are different and describe accurately the <code>&lt;iframe&gt;</code> elements content.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Iframe elements with identical accessible names have equivalent purpose](https://www.w3.org/WAI/standards-guidelines/act/rules/4b1c6c/proposed/)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)
