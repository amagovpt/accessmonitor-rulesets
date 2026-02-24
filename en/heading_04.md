---
Title: Inappropriate H1 Check
id: heading_04
type: "fals"
elem: "h1"
test: "notOneh1"
score: 1
level: "A"
trust: "1"
ref: "H42"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Inappropriate H1 Check

## Description

The "Inappropriate H1 Check" evaluates whether there are multiple <code>&lt;h1&gt;</code> elements.

## Example outcome

I have identified <mark>2</mark> level 1 headings. There should be one.

## Impact

- **Visual Impairments:** Screen readers often treat the first <code>&lt;h1&gt;</code> as the title of the page. Multiple <code>&lt;h1&gt;</code>s can confuse the user about the primary topic, especially when navigating by headings or using a heading outline. Missing an <code>&lt;h1&gt;</code> altogether may cause users to think the page lacks structure or content.
- **Cognitive Disabilities:** Heading hierarchy aids comprehension and orientation. Without a clear top-level heading (<code>&lt;h1&gt;</code>), users may struggle to determine what the page is about, especially if the structure is otherwise inconsistent.

## Fixes

To address an inappropriate number of <code>&lt;h1&gt;</code> elements:

1. Verify whether there are multiple or no <code>&lt;h1&gt;</code> elements.
2. If there are multiple <code>&lt;h1&gt;</code> elements, replace some of them by other heading levels (e.g., <code>&lt;h2&gt;</code>), until there is only 1 <code>&lt;h1&gt;</code> heading corresponding to the page title.
3. If there is no <code>&lt;h1&gt;</code> element, add one describing the page purpose.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
