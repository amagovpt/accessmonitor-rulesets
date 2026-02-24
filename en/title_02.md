---
Title: Missing Page Title Check
id: title_02
type: "true"
elem: "all"
test: "titleNo"
score: 1
level: "A"
trust: "1"
ref: "H25"
scs: "2.4.2"
dis: "52112 "
result: "failed"
---

# Missing Page Title Check

## Description

The "Missing Page Title Check" evaluates whether the webpage contains no <code>&lt;title&gt;</code> element as opposed to the supposed one.

## Example outcome

I noticed that this webpage <mark>does not have a title</mark> - it is missing the <code>&lt;title&gt;</code> element.

## Impact

- **Visual Impairments:** The title is typically the first thing announced by assistive tech.
- **Cognitive Disabilities:** Page titles help maintain orientation, especially in multitasking or tab-heavy environments.
- **All:** Browsers display the title in tabs, bookmarks, and history.

## Fixes

To address missing <code>&lt;title&gt;</code> elements:

1. Locate the <code>&lt;head&gt;</code> element.
2. Add a <code>&lt;title&gt;</code> with meaningful and descriptive text.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)
