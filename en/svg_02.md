---
Title: Missing SVG Accessible Name Check
id: svg_02
type: "prop"
elem: "svg"
test: "svgNotAName"
score: 3
level: "A"
trust: "1"
ref: "G202"
scs: "1.1.1"
dis: "43353"
result: "failed"
---

# Missing SVG Accessible Name Check

## Description

The "Missing SVG Accessible Name Check" evaluates whether there is any <code>&lt;svg&gt;</code> element with an explicit ARIA role without an accessible name.

## Example outcome

I identified <mark>1</mark> <code>&lt;svg&gt;</code> element with an explicit role without an accessible name.

## Impact

- **Visual Impairments:** Screen readers will not announce the purpose or meaning of the SVG. The content is ignored. Users relying on screen magnifiers and text-to-speech can't get alternative descriptions.
- **Cognitive Disabilities:** Users who need reinforced textual explanation for visual content may not understand its purpose.
- **Color Blindness:** If the SVG conveys data via color (e.g., charts), color blind users can't access a textual equivalent.

## Fixes

To address <code>&lt;svg&gt;</code> elements with an explicit <code>role</code> missing an accessible name:

1. Locate the <code>&lt;svg&gt;</code> element missing an accessible name.
2. Add an accessible name to the element (i.e., add to it one of the attributes <code>aria-label</code> and <code>aria-labelledby</code>), providing a description of the function or content of the image.
3. If it is purely decorative, simply remove the <code>role</code> from it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2 Techniques: Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
