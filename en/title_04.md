---
Title: Inappropriate Page Title Length Check
id: title_04
type: "decr"
elem: "all"
test: "titleLong"
score: 10
level: "A"
trust: "1"
top: 64
steps: 10
ref: "G88"
scs: "2.4.2"
dis: "42253"
result: "warning"
---

# Inappropriate Page Title Length Check

## Description

The "Inappropriate Page Title Length Check" evaluates whether the page's <code>&lt;title&gt;</code> element text is concise (i.e., not too long).

## Example outcome

It seems to me that the webpage title is too long - it contains <mark>100</mark> characters.

## Impact

- **Visual Impairments:** Screen readers announce the page title when switching between pages or navigating to a new site.
- **Cognitive Disabilities:** Concise titles help users orient themselves and understand the page content quickly.
- **All:** Browser tabs show the page title.

## Fixes

To address inappropriate <code>&lt;title&gt;</code> elements:

1. Locate the <code>&lt;title&gt;</code> element.
2. Provide a meaningful and descriptive text, ensuring it is not longer than 65 characters.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique G88: Providing descriptive titles for web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)

