---
Title: List Items Check
id: list_02
type: "true"
elem: "li"
test: "listCorrectly"
score: 10
level: "AA"
trust: "1"
ref: "H48"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# List Items Check

## Description

The "List Items Check" evaluates whether all elements inside a list container (e.g., <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, or <code>&lt;menu&gt;</code>) are valid list items (i.e., only <code>&lt;li&gt;</code> elements are used as children).

## Example outcome

I noticed that <mark>all</mark> lists only contain list items.

## Impact

- **Visual Impairments:** Screen readers may skip content or read it incorrectly if the list structure breaks.
- **Motor Impairments:** Keyboard navigation may behave unpredictably within broken list structures.
- **Cognitive Disabilities:** Mixed elements in lists may confuse users who rely on patterns for understanding.

## Fixes

To address inappropriate list items:

1. Locate the inappropriate list item.
2. Replace or wrap the item's tag with the <code>&lt;li&gt;</code> tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
