---
Title: Missing Main Heading Check
id: hx_01c
type: "fals"
elem: "hx"
test: "h1"
score: 4
level: "AAA"
trust: "1"
ref: "G141"
scs: "1.3.1,2.4.10"
dis: "54343"
result: "failed"
---

# Missing Main Heading Check

## Description

The "Missing Main Heading Check" evaluates whether the page contains a single, meaningful main <code>&lt;h1&gt;</code> heading.

## Example outcome

<mark>I didn't find</mark> on this page a main <code>&lt;H1&gt;</code> heading.

## Impact

- **Visual Impairments:** Screen readers often announce the <code>&lt;h1&gt;</code> first. If it's missing, the user may be disoriented about the page's purpose.
- **Motor Impairments:** Users navigating by heading level will lack a top-level landmark to begin with, making navigation more cumbersome.
- **Cognitive Disabilities:** The absence of a clear main heading can make it hard to quickly understand the topic or structure of the page.
- **Neurodivergent Disorders:** Structured entry points help maintain focus and reduce frustration, especially for users with ADHD or autism.

## Fixes

To address missing a main heading:

1. Identify a meaningful page title.
2. Add a single <code>&lt;h1&gt;</code> heading with that title.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.10](https://www.w3.org/WAI/WCAG22/Understanding/section-headings)
- [WCAG 2.2 Techniques: Technique G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G141)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
