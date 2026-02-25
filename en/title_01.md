---
Title: Inappropriate Duplicate Page Title Check
id: title_01
type: "true"
elem: "all"
test: "titleVrs"
score: 7
level: "A"
trust: "1"
ref: "H25"
scs: "2.4.2"
dis: "52112"
result: "failed"
---

# Inappropriate Duplicate Page Title Check

## Description

The "Inappropriate Duplicate Page Title Check" evaluates whether the webpage contains two or more <code>&lt;title&gt;</code> elements, placed inside the <code>&lt;head&gt;</code>, as opposed to the supposed one.

## Example outcome

I checked that this webpage does not have only one <code>&lt;title&gt;</code> element, as it was supposed to, it has <mark>2</mark>.

## Impact

- **Visual Impairments:** Screen readers rely on the <code>&lt;title&gt;</code> to announce the page when it loads or switches.
- **Cognitive Disabilities:** Page titles help maintain orientation, especially in multitasking or tab-heavy environments.
- **All:** Browsers display the title in tabs, bookmarks, and history.

## Fixes

To address inappropriately duplicated <code>&lt;title&gt;</code> elements:

1. Locate both <code>&lt;title&gt;</code> elements.
2. Remove the inappropriate one, retaining a meaningful and descriptive one.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)
