---
Title: Inappropriate Nested Table Element Check
id: table_04
type: "prop"
elem: "table"
test: "tableNested"
score: 3
level: "A"
trust: "0.9"
ref: "F49"
scs: "1.3.2"
dis: "53311"
result: "failed"
---

# Inappropriate Nested Table Element Check

## Description

The "Inappropriate Nested Table Element Check" evaluates whether any a <code>&lt;table&gt;</code> element inside another <code>&lt;table&gt;</code>.

## Example outcome

I found <mark>1</mark> table inside another table.

## Impact

- **Visual Impairments:** Screen readers may not accurately announce relationships between rows and columns in nested structures. Navigation within deeply nested structures can become unpredictable and non-linear.
- **Motor Impairments:** Nested tables often create inconsistent focus order. Keyboard users may face erratic tabbing or reading sequences.
- **Cognitive Disabilities:** The visual complexity of nested tables can make it hard to understand or mentally model the data relationships. Nested layouts often lack consistent visual cues, increasing cognitive load and frustration.

## Fixes

To address <code>&lt;table&gt;</code> elements nested inside other <code>&lt;table&gt;</code> elements:

1. Locate the inapprorpriate <code>&lt;table&gt;</code> elements.
2. Replace one of them by appropriate and valid HTML elements to create the same visual appearance.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence)
- [WCAG 2.2 Techniques: Technique F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized](https://www.w3.org/WAI/WCAG22/Techniques/failures/F49)
- [WebAIM: Creating Accessible Tables](https://webaim.org/techniques/tables/)
