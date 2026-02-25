---
Title: Inappropriate Table Header Cells Check
id: table_08
type: "prop"
elem: "tableData"
test: "tableHdrNot"
score: 3
level: "A"
trust: "1"
ref: "d0f69e"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate Table Header Cells Check

## Description

The "Inappropriate Table Header Cells Check" evaluates whether there is any <code>&lt;th&gt;</code> (header cell) in a table not functionally connected to at least one <code>&lt;td&gt;</code> (data cell).

## Example outcome

I found <mark>1</mark> header cell that is not associated with any data cells.

## Impact

- **Visual Impairments:** Screen readers may announce headers with no related data, creating confusion and false expectations.
- **Motor Impairments:** Misuse of <code>&lt;th&gt;</code> affects focus indicators and keyboard context.
- **Cognitive Disabilities:** Misleading headers suggest relationships that don’t exist.

## Fixes

To address inappropriate table header cells:

1. Locate the inappropriate <code>&lt;th&gt;</code> element.
2. Ensure that it is meaningful, being the header of either a row or a column.
3. Associate it to its supposed data cell (i.e., <code>&lt;td&gt;</code> element), or remove it if it does not apply to any data cell.
4. Make proper use of the <code>headers</code> and <code>scope</code> attributes (i.e., use <code>scope="col"</code> or <code>scope="row"</code> for simple tables and <code>id</code> and <code>headers</code> for complex tables).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ACT Rules: Table header cell has assigned cells](https://www.w3.org/WAI/standards-guidelines/act/rules/d0f69e/proposed/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
