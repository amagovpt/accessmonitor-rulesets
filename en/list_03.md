---
Title: Inappropriate List Items Check
id: list_03
type: "prop"
elem: "li"
test: "listNotCorrectly"
score: 4
level: "AA"
trust: "1"
ref: "H48"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate List Items Check

## Description

The "Inappropriate List Items Check" evaluates whether there is any element inside a list container that is not a <code>&lt;li&gt;</code> element.

## Example outcome

I located <mark>1</mark> list that contains elements that are not list items.

## Impact

- **Visual Impairments:** Screen readers may not announce non-<code>&lt;li&gt;</code> elements as part of the list, or skip them entirely.
- **Motor Impairments:** Keyboard users might encounter confusing navigation or unexpected tab stops.
- **Cognitive Disabilities:** Users may be thrown off by inconsistent or unexpected content formatting in lists.

## Fixes

To address inappropriate list items:

1. Locate the inappropriate list item.
2. Replace or wrap the item's tag with the <code>&lt;li&gt;</code> tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG22/Techniques/html/H48)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
