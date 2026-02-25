---
Title: Headers Attribute Check
id: headers_01
type: "true"
elem: "headers"
test: "headerAtt"
score: 10
level: "A"
trust: "1"
ref: "H43"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# Headers Attribute Check

## Description

The "Headers Attribute Check" evaluates whether all <code>headers</code> attributes used within table cells correctly reference <code>id</code> attributes of other cells within the same table element.

## Example outcome

I noticed that <mark>all</mark> <code>headers</code> attributes refer to cells in the same table.

## Impact

- **Visual Impairments:** Screen readers rely on correct <code>headers</code> attributes to read out the corresponding column/row header for each data cell. If they’re broken or point to IDs outside the table, the data loses its context, leading to confusion or misinformation.
- **Cognitive Disabilities:** Some assistive tools provide simplified table views. If headers aren't correctly referenced, these tools can’t reconstruct an understandable table view, causing cognitive overload.

## Fixes

To address inappropriate <code>headers</code> attributes:

1. Locate the inappropriate <code>headers</code> attribute.
2. Ensure that the <code>headers</code> attribute only references an <code>id</code> of an element within the same <code>&lt;table&gt;</code>.
3. Verify that the <code>id</code> referenced by the <code>headers</code> attribute exists and is unique within the document.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
