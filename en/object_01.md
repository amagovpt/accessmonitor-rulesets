---
Title: Object Accessible Name Check
id: object_01
type: "true"
elem: "object"
test: "objectAName"
score: 10
level: "A"
trust: "1"
ref: "b4f0c3"
scs: "1.1.1"
dis: "43353"
result: "passed"
---

# Object Accessible Name Check

## Description

The "Object Accessible Name Check" evaluates whether all <code>&lt;object&gt;</code> elements contain accessible text alternatives.

## Example outcome

I observed that <mark>all</mark> <code>&lt;object&gt;</code> elements have an alternative text equivalent.

## Impact

- **Visual Impairments:** Visually impaired individuals cannot access non-text content without an alternative. May miss information if zoom or high contrast modes can't render the object content.
- **Cognitive Disabilities:** Lack of context or labels may cause confusion.

## Fixes

To address <code>&lt;object&gt;</code> elements missing an accessible name:

1. Locate the <code>&lt;object&gt;</code> element.
2. Add a fallback text or equivalent content within the element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [ACT Rules: Meta viewport allows for zoom](https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
