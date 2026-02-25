---
Title: Inappropriate Fieldset Element Check
id: field_02
type: "decr"
elem: "all"
test: "fieldNoForm"
score: 3
level: "A"
trust: "0.9"
top: 1
steps: 1
ref: "H71"
scs: "1.3.1,3.3.2"
dis: "54152"
result: "failed"
---

# Inappropriate Fieldset Element Check

## Description

The "Inappropriate Fieldset Element Check" evaluates whether there is any <code>&lt;fieldset&gt;</code> element placed outside a <code>&lt;form&gt;</code> element.

## Example outcome

I found <mark>1</mark> <code>&lt;fieldset&gt;</code> element outside the form.

## Impact

- **Visual Impairments:** Screen readers may not associate grouped inputs correctly without a proper form context, resulting in miscommunication of relationships between form controls.
- **Motor Impairments:** Form behavior and validation may be skipped or broken if controls aren't enclosed in a <code>&lt;form&gt;</code>, causing frustration or data loss.
- **Cognitive Disabilities:** Improperly grouped or standalone inputs might cause confusion, especially when context is lacking.

## Fixes

To address inappropriately placed <code>&lt;fieldset&gt;</code> elements:

1. Locate the <code>&lt;fieldset&gt;</code> element.
2. Ensure it is nested within a valid <code>&lt;form&gt;</code> element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [WCAG 2.2 Techniques: Technique H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
