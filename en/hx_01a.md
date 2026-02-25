---
Title: Missing Headings Check
id: hx_01a
type: "fals"
elem: "all"
test: "hxNone"
score: 3
level: "A"
trust: "1"
ref: "H42"
scs: "1.3.1"
dis: "54322"
result: "failed"
---

# Missing Headings Check

## Description

The "Missing Headings Check" evaluates whether the page contains at least one semantic heading (e.g., <code>&lt;h1&gt;</code>).

## Example outcome

I noticed that this page <mark>has no</mark> headings.

## Impact

- **Visual Impairments:** Users rely on screen readers to announce headings as navigation landmarks. Missing headings means more effort to scan or jump between content sections.
- **Motor Impairments:** Keyboard-only users often rely on heading navigation (e.g., using keyboard shortcuts to jump to next/previous heading).
- **Cognitive Disabilities:** Clear headings provide cues that help users understand page hierarchy and flow, reducing cognitive overload.
- **Neurodivergent Disorders:** Structured headings support focus and reduce confusion for users with ADHD or autism.

## Fixes

To address missing headings:

1. Add a <code>&lt;h1&gt;</code> heading with the main title of the page.
2. Add other headings, from <code>&lt;h2&gt;</code> to <code>&lt;h6&gt;</code> to denote sub-sections in a logical, hierarchical manner.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
