---
Title: Description List Elements Order Check
id: list_06
type: "true"
elem: "dl"
test: "descList"
score: 10
level: "AAA"
trust: "1"
ref: "H40"
scs: "3.1.3"
dis: "43353"
result: "passed"
---

# Description List Elements Order Check

## Description

The "Description List Elements Order Check" evaluates whether all <code>&lt;dl&gt;</code> elements contain only description list elements in the correct order (i.e., a <code>&lt;dt&gt;</code> paired with and followed by a <code>&lt;dd&gt;</code> element).

## Example outcome

I noticed that <mark>all</mark> description lists only contain correctly ordered list items.

## Impact

- **Visual Impairments:** Screen readers may not interpret the term-definition relationship correctly.
- **Cognitive Disabilities:** Users may not understand that terms and their definitions belong together in a structured way.
- **Learning Disabilities:** Lack of correct ordering and structure could confuse users, making the content less comprehensible.

## Fixes

To address inappropriately ordered description list elements:

1. Locate the inappropriately ordered description list element.
2. If it is a <code>&lt;dd&gt;</code> element, make sure to include a correspondent <code>&lt;dt&gt;</code> element prior to it.
3. If it is a <code>&lt;dt&gt;</code> element, make sure to include a correspondent <code>&lt;dd&gt;</code> element after it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)
- [WCAG 2.2 Techniques: Technique H40: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
