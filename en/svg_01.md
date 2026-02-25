---
Title: SVG Accessible Name Check
id: svg_01
type: "true"
elem: "svg"
test: "svgAName"
score: 10
level: "A"
trust: "1"
ref: "G202"
scs: "1.1.1"
dis: "43353"
result: "passed"
---

# SVG Accessible Name Check

## Description

The "SVG Accessible Name Check" evaluates whether all <code>&lt;svg&gt;</code> elements with an explicit ARIA role (e.g., <code>role="img"</code>) have an accessible name, which is necessary for assistive technologies to convey the purpose or content of the SVG.

## Example outcome

I noticed that <mark>all</mark> <code>&lt;svg&gt;</code> elements with an explicit role have accessible names.

## Impact

- **Visual Impairments:** Individuals with visual impairments rely on screen readers to interpret non-text content like icons, charts, and diagrams. If an SVG lacks an accessible name, its purpose is lost. May zoom in and rely on screen reader support when detail is difficult to perceive visually.
- **Cognitive Disabilities:** Users may benefit from alternative text descriptions that reinforce the meaning of complex visuals.
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
