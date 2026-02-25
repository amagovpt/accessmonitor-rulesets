---
Title: Inappropriate Alt Text on Input Element Check
id: input_03
type: "true"
elem: "all"
test: "inputAltNo"
score: 5
level: "A"
trust: "1"
ref: "H36"
scs: "1.1.1"
dis: "54211"
result: "failed"
---

# Inappropriate Alt Text on Input Element Check

## Description

The "Inappropriate Alt Text on Input Element Check" evaluates whether any <code>&lt;input&gt;</code> element that contains an <code>alt</code> attribute is not a graphical button.

## Example outcome

I found <mark>1</mark> <code>&lt;input&gt;</code> element with the <code>alt</code> attribute that is not a graphical button.

## Impact

- **Visual Impairments:** Users with visual impairments may be confused by an unexpected or misleading alt attribute on non-image inputs.
- **Cognitive Disabilities:** Inconsistent UI labeling can create cognitive load and decrease task success.

## Fixes

To address <code>&lt;input&gt;</code> elements that inappropriately contain an <code>alt</code> attribute:

1. Locate the <code>&lt;input&gt;</code> element.
2. Remove the <code>alt</code> attribute from it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2 Techniques: Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG22/Techniques/html/H36)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
