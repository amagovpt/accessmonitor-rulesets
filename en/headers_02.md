---
Title: Inappropriate Headers Attribute Check
id: headers_02
type: "prop"
elem: "headers"
test: "headerAttNot"
score: 3
level: "A"
trust: "1"
ref: "H43"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate Headers Attribute Check

## Description

The "Inappropriate Headers Attribute Check" evaluates whether there is any <code>headers</code> attribute used within table cells references an element from outside the table.

## Example outcome

I found <mark>1</mark> <code>headers</code> attribute that refers to cells outside its table.

## Impact

- **Visual Impairments:** Screen readers use the <code>headers</code> attribute to read the corresponding header for a data cell. If that reference leads to an element outside the table, the screen reader either doesn't find the header, or, reads irrelevant or misleading information.
- **Cognitive Disabilities:** Complex tables already demand mental focus. Without correct header relationships, data loses context, increasing cognitive load and confusion.

## Fixes

To address inappropriate <code>headers</code> attributes:

1. Locate the inappropriate <code>headers</code> attribute.
2. Ensure that the <code>headers</code> attribute only references <code>id</code>s of elements within the same <code>&lt;table&gt;</code>.
3. Verify that the <code>id</code> referenced by the <code>headers</code> attribute exists and is unique within the document.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
