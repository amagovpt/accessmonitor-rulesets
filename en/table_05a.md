---
Title: Missing Table Headers Check
id: table_05a
type: "decr"
elem: "all"
test: "tableLayout"
score: 4
level: "A"
trust: "1"
top: 1
steps: 1
ref: "H51"
scs: "1.3.1"
dis: "53352"
result: "failed"
---

# Missing Table Headers Check

## Description

The "Missing Table Headers Check" evaluates whether there is any <code>&lt;table&gt;</code> element used to present data with no appropriate header markups (<code>&lt;th&gt;</code>, <code>scope</code>, or <code>headers</code> attributes).

## Example outcome

I found <mark>1</mark> table without headers.

## Impact

- **Visual Impairments:** Screen readers rely on <code>&lt;th&gt;</code> and their attributes (<code>scope</code>, <code>headers</code>) to convey context.
- **Motor Impairments:** Users navigating by keyboard or assistive tech may not be able to skim through tabular data meaningfully.
- **Cognitive Disabilities:** Lack of visual or auditory anchors for data relationships.

## Fixes

To address <code>&lt;table&gt;</code> elements with no headers:

1. Locate the <code>&lt;table&gt;</code> element.
2. Add headers elements to it (i.e., <code>&lt;th&gt;</code> elements) in the appropriate row(s) and / or column(s).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H51: Using table markup to present tabular information](https://www.w3.org/WAI/WCAG22/Techniques/html/H51)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
