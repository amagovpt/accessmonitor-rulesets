---
Title: Inadequate Alternative Text In Image Maps' Area Elements Check
id: area_01b
type: "prop"
elem: "area"
test: "areaAltNo"
score: 1
level: "A"
trust: "1"
ref: "F65"
scs: "1.1.1"
dis: "53322"
result: "failed"
---

# Inadequate Alternative Text In Image Maps' Area Elements Check

## Description

The "Inadequate Alternative Text In Image Maps' Area Elements Check" evaluates whether there are <code>&lt;area&gt;</code> elements in image maps that either don't have the <code>alt</code> attribute, or, have <code>alt=""</code> which provides no description to assistive technologies.

## Example outcome

I found <mark>1</mark> <code>&lt;area&gt;</code> element without the <code>alt</code> attribute or with <code>alt=\"\"</code>.

## Impact

- **Visual Impairments:** Without alt attributes, screen readers will skip over <code>&lt;area&gt;</code> elements or announce them without context, making navigation impossible.
- **Motor Impairments:** People with motor impairments may tab to <code>&lt;area&gt;</code> regions without knowing their purpose, disrupting flow and usability.
- **Cognitive Disabilities:** Users with cognitive disabilities may rely on screen reader output or text-to-speech and will be confused by the lack of descriptive labels for interactive areas.

## Fixes

To address inadequate alternative text:

1. Locate the <code>&lt;area&gt;</code> element with inadequate alternative text.
2. Add or rewrite the alternative text attribute to provide a clear and precise description of the image map function.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2 Techniques: Technique F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG22/Techniques/failures/F65)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
