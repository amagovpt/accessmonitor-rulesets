---
Title: Inappropriate Scope Attribute Check
id: scope_01
type: "decr"
elem: "table"
test: "scopeNo"
score: 3
level: "A"
trust: "1"
top: 1
steps: 1
ref: "H63"
scs: "1.3.1"
dis: "53353"
result: "failed"
---

# Inappropriate Scope Attribute Check

## Description

The "Inappropriate Scope Attribute Check" evaluates whether there is any element in data tables that have an invalid value for the <code>scope</code> attribute.

## Example outcome

I found that there is <mark>1</mark> case where the <code>scope</code> attribute of a data table is invalid.

## Impact

- **Visual Impairments:** Visually impaired users cannot determine which header applies to which data cell, especially in complex tables.
- **Motor Impairments:** Navigating tabular data may be confusing or context-less without proper scoping.
- **Cognitive Disabilities:** Misinterpreting or misunderstanding data relationships due to lack of structure.

## Fixes

To address inappropriate <code>scope</code> attributes:

1. Locate the element with an invalid <code>scope</code> attribute.
2. Replace its value by a valid one (e.g., <code>row</code> or <code>col</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H63: Using the scope attribute to associate header cells with data cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H63)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
