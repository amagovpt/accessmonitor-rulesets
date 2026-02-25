---
Title: Missing Data Table Caption Check
id: table_02
type: "prop"
elem: "tableData"
test: "tableDataCaption"
score: 3
level: "A"
trust: "1"
ref: "H39"
scs: "1.3.1"
dis: "52211"
result: "failed"
---

# Missing Data Table Caption Check

## Description

The "Missing Data Table Caption Check" evaluates whether there is any data table withou a <code>&lt;caption&gt;</code> element to describe the purpose or content of the table.

## Example outcome

I located <mark>1</mark> data table without the <code>&lt;caption&gt;</code> element.

## Impact

- **Visual Impairments:** Screen readers will not announce what the table is about unless a caption or an alternative mechanism is provided. This can make the data meaningless or confusing in isolation.
- **Cognitive Disabilities:** Users with cognitive disabilities benefit from extra cues to understand structure and purpose. Captions serve as a simple, consistent way to provide that context.
- **ADHD/Memory Disorders:** A caption serves as an anchor to help ADHD / memory users remember what they’re looking at while navigating the table.

## Fixes

To address data tables without a <code>&lt;caption&gt;</code> element:

1. Locate the data table.
2. Add a <code>&lt;caption&gt;</code> element to it, describing concisely what the table contains.
3. Place the <code>&lt;caption&gt;</code> tag immediately after the <code>&lt;table&gt;</code> opening tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H39: Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H39)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
