---
Title: Inappropriate Description List Elements Order Check
id: list_07
type: "prop"
elem: "dl"
test: "notDescList"
score: 4
level: "AAA"
trust: "1"
ref: "H40"
scs: "3.1.3"
dis: "43353"
result: "failed"
---

# Inappropriate Description List Elements Order Check

## Description

The "Inappropriate Description List Elements Order Check" evaluates whether there is any description list containing elements that are not valid list items where the order of the terms and
definitions is not correct.

## Example outcome

I located <mark>1</mark> description list that contains elements that are not list items or that are not correctly ordered.

## Impact

- **Visual Impairments:** Screen readers may misinterpret the relationships between terms and their definitions or skip content entirely.
- **Cognitive Disabilities:** Users may not understand the structure of term-definition relationships, leading to confusion.
- **Learning Disabilities:** Incorrect ordering and improper elements in lists can make it harder for users to follow and comprehend content.

## Fixes

To address inappropriate description list elements or inappropriately ordered ones:

1. Locate the inappropriate description list element or the inappropriately ordered.
2. If it is an inappropriate description list element, either wrap it or replace it with a <code>&lt;dt&gt;</code> or <code>&lt;dd&gt;</code> element, according to its purpose.
3. If it is inappropriately ordered, ensure that a <code>&lt;dt&gt;</code> and a correspondent <code>&lt;dd&gt;</code> element are always paired and presented in this order.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)
- [WCAG 2.2 Techniques: Technique H40: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
