---
Title: Inappropriate Description List Elements Check
id: list_05
type: "prop"
elem: "dd,dt"
test: "notDescListElement"
score: 4
level: "AAA"
trust: "1"
ref: "H40"
scs: "3.1.3"
dis: "43353"
result: "failed"
---

# Inappropriate Description List Elements Check

## Description

The "Inappropriate Description List Elements Check" evaluates whether there is any <code>&lt;dt&gt;</code> or <code>&lt;dd&gt;</code> element placed outside a description list. 

## Example outcome

I located <mark>1</mark> <code>&lt;dd&gt;</code> or <code>&lt;dt&gt;</code> element that is not contained within a list.

## Impact

- **Visual Impairments:** Screen readers will not announce <code>&lt;dt&gt;</code> or <code>&lt;dd&gt;</code> correctly outside a list, breaking meaning.
- **Cognitive Disabilities:** Users may lose the ability to understand the logical connection between terms and their meanings.
- **Learning Disabilities:** Lack of structure can increase cognitive load and cause misinterpretation.

## Fixes

To address inappropriate description list elements:

1. Locate the inappropriate description list element.
2. Wrap it in a <code>&lt;dl&gt;</code> element.
3. Ensure that a <code>&lt;dt&gt;</code> and a <code>&lt;dd&gt;</code> element are always paired and in this order.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)
- [WCAG 2.2 Techniques: Technique H40: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
