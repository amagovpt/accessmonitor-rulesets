---
Title: Inappropriate List Item Check
id: listitem_02
type: "prop"
elem: "li"
test: "liNotSemantically"
score: 4
level: "AA"
trust: "1"
ref: "H48"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate List Item Check

## Description

The "Inappropriate List Item Check" evaluates whether there is any <code>&lt;li&gt;</code> (list item) element that is not contained within a valid list structure.

## Example outcome

I located <mark>1</mark> <code>&lt;li&gt;</code> element that is not contained within a list.

## Impact

- **Visual Impairments:** Screen readers will not interpret the <code>&lt;li&gt;</code> element correctly if it’s outside a list, leading to loss of context or misinterpretation.
- **Cognitive Disabilities:** Users may fail to recognize that the content is part of a list, reducing comprehension of the structure.
- **Learning Disabilities:** Misplaced list items make it difficult for users to understand the relationship between items, increasing cognitive load.

## Fixes

To address inappropriate <code>&lt;li&gt;</code> elements:

1. Locate the inappropriate <code>&lt;li&gt;</code> element.
2. Wrap it with a list strcture element, if it should be inside a list.
3. Replace the <code>&lt;li&gt;</code> tag with one that correctly serves the purpose, if not.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
