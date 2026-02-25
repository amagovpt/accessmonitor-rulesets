---
Title: Empty Page Title Check
id: title_03
type: "true"
elem: "all"
test: "titleNull"
score: 1
level: "A"
trust: "1"
ref: "F25"
scs: "2.4.2"
dis: "33151"
result: "failed"
---

# Empty Page Title Check

## Description

The "Empty Page Title Check" evaluates whether the webpage contains one non-empty <code>&lt;title&gt;</code> element, placed inside the <code>&lt;head&gt;</code>, providing a meningful description of the page.

## Example outcome

I checked that this webpage <mark>does not have a title</mark> - the <code>&lt;title&gt;</code><mark> element is empty</mark>.

## Impact

- **Visual Impairments:** A screen reader announces the title when the page is loaded or when switching between open pages.
- **Cognitive Disabilities:** The page title is crucial for orientation and context.
- **All:** Browsers display the title in tabs, bookmarks, and history.

## Fixes

To address inappropriate <code>&lt;title&gt;</code> elements:

1. Locate the <code>&lt;title&gt;</code> element.
2. Add a meaningful and descriptive text to it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)
