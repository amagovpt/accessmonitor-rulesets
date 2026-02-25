---
Title: Inappropriate or Missing Li Element Check
id: list_01
type: "decr"
elem: "all"
test: "liNoList"
score: 3
level: "A"
trust: "1"
top: 3
steps: 3
ref: "H48"
scs: "1.3.1"
dis: "53342"
result: "failed"
---

# Inappropriate or Missing Li Element Check

## Description

The "Inappropriate or Missing Li Element Check" evaluates whether there is any <code>&lt;li&gt;</code> (list item) element that is not contained within a parent list structure (e.g., <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, or <code>&lt;menu&gt;</code>), or any list structure element without any <code>&lt;li&gt;</code> element.

## Example outcome

I found <mark>1</mark> occurrence of an empty list or an <code>&lt;li&gt;</code> outside of the list.

## Impact

- **Visual Impairments:** Screen readers may skip or misinterpret the item because it lacks context.
- **Motor Impairments:** Incorrect semantics may disrupt keyboard navigation patterns.
- **Cognitive Disabilities:** Users may not understand that the item is part of a list, causing confusion.

## Fixes

To address inappropriate or missing <code>&lt;li&gt;</code> elements:

1. Locate the inappropriate <code>&lt;li&gt;</code> element or the list structure element with no <code>&lt;li&gt;</code> element.
2. If it is an <code>&lt;li&gt;</code> element outside a parent list structure, replace the <code>&lt;li&gt;</code> tag by another HTML tag that correctly serves the purpose.
3. Otherwise, either remove the list structure element or populate it with meaningful <code>&lt;li&gt;</code> elements.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
