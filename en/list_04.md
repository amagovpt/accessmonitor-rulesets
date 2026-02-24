---
Title: Description List Elements Check
id: list_04
type: "true"
elem: "dd,dt"
test: "descListElement"
score: 10
level: "AAA"
trust: "1"
ref: "H40"
scs: "3.1.3"
dis: "43353"
result: "passed"
---

# Description List Elements Check

## Description

The "Description List Elements Check" evaluates whether all <code>&lt;dt&gt;</code> (definition terms) and <code>&lt;dd&gt;</code> (definition descriptions) are properly nested inside a <code>&lt;dl&gt;</code> (description list). 

## Example outcome

I noticed that <mark>all</mark> <code>&lt;dd&gt;</code> and <code>&lt;dt&gt;</code> elements are contained within a list.

## Impact

- **Visual Impairments:** Screen readers may not correctly associate terms with their definitions.
- **Cognitive Disabilities:** Users may struggle to understand relationships between terms and explanations.
- **Learning Disabilities:** Glossaries become ineffective if term-definition structure isn't preserved.

## Fixes

To address inappropriate description list elements:

1. Locate the inappropriate description list element.
2. If it is placed outside a description list, either wrap it in a <code>&lt;dl&gt;</code> element or replace the tag by one that correctly serves its purpose.
3. Ensure that a <code>&lt;dt&gt;</code> and a <code>&lt;dd&gt;</code> element are always paired and in this order.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)
- [WCAG 2.2 Techniques: Technique H40: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
