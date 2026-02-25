---
Title: Missing Fieldset Description Check
id: field_01
type: "true"
elem: "all"
test: "fieldLegNo"
score: 4
level: "A"
trust: "1"
ref: "H71"
scs: "1.3.1,3.3.2"
dis: "54152"
result: "failed"
---

# Missing Fieldset Description Check

## Description

The "Missing Fieldset Description Check" evaluates whether there is any <code>&lt;fieldset&gt;</code> element without a description (i.e., a <code>&lt;legend&gt;</code> element within).

## Example outcome

I found <mark>1</mark> <code>&lt;fieldset&gt;</code> element without any description.

## Impact

- **Visual Impairments:** Screen readers use <code>&lt;legend&gt;</code> to provide context for grouped form elements. Without it, the user may not understand the purpose of the fields.
- **Motor Impairments:** Assistive tech users navigating forms with voice or switch input benefit from semantic structure; a missing legend impairs navigation.
- **Cognitive Disabilities:** Users may be confused without proper grouping and labeling, leading to input errors or form abandonment.

## Fixes

To address <code>&lt;fieldset&gt;</code> elements missing description:

1. Locate the <code>&lt;fieldset&gt;</code> element without a description.
2. Add a clear, concise <code>&lt;legend&gt;</code> element that describes the group’s purpose inside the fieldset.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [WCAG 2.2 Techniques: Technique H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
