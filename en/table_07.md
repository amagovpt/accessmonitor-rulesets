---
Title: Table Header Cells Check
id: table_07
type: "true"
elem: "all"
test: "tableHdr"
score: 10
level: "A"
trust: "1"
ref: "d0f69e"
scs: "1.3.1"
dis: "43353"
result: "passed"

---

# Table Header Cells Check

## Description

The "Table Header Cells Check" evaluates whether all <code>&lt;th&gt;</code> (header cell) elements in a table are functionally connected to at least one <code>&lt;td&gt;</code> (data cell). 

## Example outcome

I noticed that <mark>all</mark> header cells have associated data cells.

## Impact

- **Visual Impairments:** Unused or disconnected headers confuse navigation and output.
- **Motor Impairments:** Misuse of <code>&lt;th&gt;</code> affects focus indicators and keyboard context.
- **Cognitive Disabilities:** Mismatched headers can obscure the meaning of grouped data.

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
