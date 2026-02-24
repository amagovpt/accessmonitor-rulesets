---
Title: Alternative Text In Image Maps' Area Elements Check
id: area_01a
type: "fals"
elem: "area"
test: "areaAltYes"
score: 10
level: "A"
trust: "0.5"
ref: "H24"
scs: "1.1.1,2.4.4,2.4.9"
dis: "54222"
result: "passed"
---

# Alternative Text In Image Maps' Area Elements Check

## Description

The "Alternative Text In Image Maps' Area Elements Check" evaluates whether all <code>&lt;area&gt;</code> elements used in image maps include a valid, descriptive alt attribute.

## Example outcome

I noticed that <mark>all</mark> active <code>&lt;area&gt;</code> of the image maps in the webpage use the <code>alt</code> attribute.

## Impact

- **Visual Impairments:** Without alt attributes, screen readers will skip over <code>&lt;area&gt;</code> elements or announce them without context, making navigation impossible.
- **Motor Impairments:** People with motor impairments may tab to <code>&lt;area&gt;</code> regions without knowing their purpose, disrupting flow and usability.
- **Cognitive Disabilities:** Users with cognitive disabilities may rely on screen reader output or text-to-speech and will be confused by the lack of descriptive labels for interactive areas.

## Fixes

To address missing or inadequate alt text:

1. Locate the <code>&lt;area&gt;</code> element with inadequate or missing alternative text.
2. If missing, add an <code>alt</code> attribute describing the function of the image map.
3. If inadequate, rewrite the alternative text to provide a clear and precise description of the image map function.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2: Understanding Success Criteria 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [WCAG 2.2: Understanding Success Criteria 2.4.9](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [WCAG 2.2 Techniques: Technique H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
