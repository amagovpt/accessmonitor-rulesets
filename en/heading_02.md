---
Title: Missing Heading Accessible Name Check
id: heading_02
type: "prop"
elem: "hx"
test: "hxWithoutAName"
score: 1
level: "A"
trust: "1"
ref: "H42"
scs: "1.3.1"
dis: "43353"
result: "failed"
---

# Missing Heading Accessible Name Check

## Description

The "Missing Heading Accessible Name Check" evaluates whether there is any heading element (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) on the page without an accessible, descriptive text that can be programmatically determinable by assistive technologies (like screen readers).

## Example outcome

I have identified <mark>1</mark> heading without an accessible name.

## Impact

- **Visual Impairments:** Headings act like "landmarks" or a table of contents. Screen reader users often navigate pages by heading level (e.g., jump to next H2). If a heading lacks an accessible name, it's announced as “heading blank,” which is disorienting and breaks navigation.
- **Motor Impairments:** Users relying on voice navigation or keyboard shortcuts often use headings to quickly navigate between sections. Headings with no name are skipped or inaccessible via those tools.
- **Cognitive Disabilities:** Clear and labeled headings help organize content visually and semantically, making pages easier to scan and digest. Missing or empty headings remove visual anchors and increase cognitive load.

## Fixes

To address headings missing accessible name:

1. Locate the heading missing an accessible name.
2. Add visible and descriptive text to it.
3. If the heading is visually hidden for design reasons, have an accessible name via ARIA (e.g., <code>&lt;h2 aria-label="Frequently Asked Questions"&gt;&lt;/h2&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
