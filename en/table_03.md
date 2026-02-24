---
Title: Inappropriate Equal Table Caption And Summary Check
id: table_03
type: "prop"
elem: "table"
test: "tableCaptionSummary"
score: 4
level: "A"
trust: "1"
ref: "H73"
scs: "1.3.1"
dis: "33152"
result: "failed"
---

# Inappropriate Equal Table Caption And Summary Check

## Description

The "Inappropriate Equal Table Caption And Summary Check" evaluates whether there is any table where the <code>&lt;caption&gt;</code> element and the <code>summary</code> attribute contain identical or near-identical text.

## Example outcome

I located <mark>1</mark> table where the text from the <code>&lt;caption&gt;</code> and <code>summary</code> is the same.

## Impact

- **Visual Impairments:** Visually impaired users will hear the same text twice, which wastes time and can cause confusion. The redundancy fails to provide structural guidance (such as row/column relationships or use of headers).
- **Cognitive Disabilities:** While the visual UI is unaffected, people using screen readers with cognitive disabilities may become overwhelmed or distracted by repetitive, unhelpful information.

## Fixes

To address tables with inappropriately equal <code>&lt;caption&gt;</code> and <code>summary</code>:

1. Locate the <code>&lt;table&gt;</code>.
2. Replace the text from one or both the <code>&lt;caption&gt;</code> element and the <code>summary</code> attribute. The <code>&lt;caption&gt;</code> should be a short visible label and the <code>summary</code> attribute should be distinct and informative, describing layout or usage.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H73: Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H73)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
