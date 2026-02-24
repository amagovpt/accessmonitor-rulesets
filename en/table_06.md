---
Title: Missing Data Table Headers Attributes Check
id: table_06
type: "decr"
elem: "tableComplex"
test: "tableComplexError"
score: 4
level: "A"
trust: "0.8"
top: 1
steps: 1
ref: "H43"
scs: "1.3.1"
dis: "53211"
result: "failed"
---

# Missing Data Table Headers Attributes Check

## Description

The "Missing Data Table Headers Attributes Check" evaluates whether there is any complex data table with data cells (<code>&lt;td&gt;</code>) that do not use the <code>headers</code> attribute to establish explicit relationships with header cells (<code>&lt;th&gt;</code>).

## Example outcome

I found <mark>1</mark> complex data table where there are data cells without the <code>headers</code> attribute.

## Impact

- **Visual Impairments:** Screen readers cannot convey the meaning or context of data without knowing which header(s) apply. Data relationships may become misaligned visually when zoomed or reflowed.
- **Cognitive Disabilities:** Users with cognitive disabilities may rely on auditory structure to understand data.

## Fixes

To address complex data tables with data cells that do not have the <code>headers</code> attribute:

1. Locate the data table.
2. Add the <code>headers</code> attribute to all data cells that are lacking it, referencing the appropriate header cell.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
