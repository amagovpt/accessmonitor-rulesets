---
Title: List Item Check
id: listitem_01
type: "true"
elem: "li"
test: "liSemantically"
score: 10
level: "AA"
trust: "1"
ref: "H48"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# List Item Check

## Description

The "List Item Check" evaluates whether all <code>&lt;li&gt;</code> (list item) elements are placed within a valid list structure.

## Example outcome

I noticed that <mark>all</mark> <code>&lt;li&gt;</code> elements are contained within a list.

## Impact

- **Visual Impairments:** Screen readers may fail to correctly interpret and announce the list structure if <code>&lt;li&gt;</code> elements are not properly enclosed.
- **Cognitive Disabilities:** Users may struggle to understand the relationship between list items if the structure is broken.
- **Learning Disabilities:** Misplaced list items can confuse users, making it difficult to comprehend the content.

## Fixes

To address inappropriate <code>&lt;li&gt;</code> elements:

1. Locate the inappropriate <code>&lt;li&gt;</code> element.
2. Wrap it with a list strcture element, if it should be inside a list.
3. Replace the <code>&lt;li&gt;</code> tag with one that correctly serves the purpose, if not.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
