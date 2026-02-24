---
Title: Inappropriate Table Caption Check
id: table_01
type: "prop"
elem: "tableLayout"
test: "tableLayoutCaption"
score: 3
level: "A"
trust: "1"
ref: "F46"
scs: "1.3.1"
dis: "51421"
result: "warning"
---

# Inappropriate Table Caption Check

## Description

The "Inappropriate Table Caption Check" evaluates whether there is any <code>&lt;table&gt;</code> element that includes a <code>&lt;caption&gt;</code> but lacks proper header markups such as <code>&lt;th&gt;</code> elements or associated header attributes like <code>scope</code>, <code>headers</code>, or <code>aria-labelledby</code>.

## Example outcome

I found <mark>1</mark> table without headers but that uses the <code>&lt;caption&gt;</code> element.

## Impact

- **Visual Impairments:** Without headers, data cells are read by screen readers without context, making the table meaningless. The <code>&lt;caption&gt;</code> sets the expectation of meaningful structure, which is then not fulfilled.
- **Cognitive Disabilities:** Tables without headers can increase cognitive load and confusion. Users may struggle to associate data with its meaning without clear labeling.

## Fixes

To address <code>&lt;table&gt;</code> elements that include a <code>&lt;caption&gt;</code> but lack headers:

1. Locate the <code>&lt;table&gt;</code> element.
2. Add headers elements to it (i.e., <code>&lt;th&gt;</code> elements) in the appropriate row(s) and / or column(s).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](https://www.w3.org/WAI/WCAG22/Techniques/failures/F46)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
