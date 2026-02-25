---
Title: Page Title Check
id: title_06
type: "true"
elem: "all"
test: "titleOk"
score: 10
level: "A"
trust: "0.5"
ref: "H25"
scs: "2.4.2"
dis: "52112"
result: "passed"
---

# Page Title Check

## Description

The "Page Title Check" evaluates whether the webpage contains exactly one <code>&lt;title&gt;</code> element in the <code>&lt;head&gt;</code> section and that the title is appropriately descriptive of the page content.

## Example outcome

I found <mark>one title</mark> on the webpage and it seems correct.

## Impact

- **Visual Impairments:** Screen readers rely on the title to identify the page’s context. A missing title causes confusion.
- **Motor Impairments:** Keyboard-only users navigating tabs and windows need clear labels.
- **Cognitive Disabilities:** A missing or non-descriptive title may make it harder to recognize the page’s purpose.
- **Attention Disorders:** Poor titles reduce clarity when multitasking or scanning browser tabs.

## Fixes

To address inappropriate <code>&lt;title&gt;</code> elements:

1. Locate the <code>&lt;title&gt;</code> element.
2. Verify that it is correctly placed inside the <code>&lt;head&gt;</code> section.
3. Ensure it contains plain, descriptive text that clearly states the page’s purpose, with a length of 30 to 65 characters. 
4. If there are multiple <code>&lt;title&gt;</code> elements, make sure to keep only one.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique G88: Providing descriptive titles for web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)
