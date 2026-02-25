---
Title: Missing Object Accessible Name
id: object_02
type: "prop"
elem: "object"
test: "objectANameNot"
score: 3
level: "A"
trust: "1"
ref: "b4f0c3"
scs: "1.1.1"
dis: "43353"
result: "failed"
---

# Missing Object Accessible Name

## Description

The "Missing Object Accessible Name" evaluates whether there is any <code>&lt;object&gt;</code> element that does not include a text alternative.

## Example outcome

I located <mark>1</mark> <code>&lt;object&gt;</code> element without the alternative text equivalent.

## Impact

- **Visual Impairments:** No descriptive content is exposed, therefore, the object becomes invisible to assistive tech. Content may be unreadable if it cannot be enlarged or styled and lacks fallback.
- **Cognitive Disabilities:** Absence of explanatory text increases confusion and cognitive load.

## Fixes

To address <code>&lt;object&gt;</code> elements missing an accessible name:

1. Locate the <code>&lt;object&gt;</code> element.
2. Add a fallback text or equivalent content within the element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [ACT Rules: Meta viewport allows for zoom](https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
