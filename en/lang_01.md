---
Title: Page Language Check
id: lang_01
type: "true"
elem: "all"
test: "lang"
score: 10
level: "A"
trust: "0.8"
ref: "H57"
scs: "3.1.1"
dis: "53112"
result: "warning"
---

# Page Language Check

## Description

The "Page Language Check" evaluates whether the language of the page is marked correctly with the appropriate <code>lang</code> attribute in the <code>&lt;html&gt;</code> tag.

## Example outcome

I observed that the webpage’s main language <mark>is marked as \"en\"</mark>.

## Impact

- **Visual Impairments:** Screen readers may misinterpret the content or pronounce words incorrectly if the language is not set properly.
- **Cognitive Disabilities:** Text-to-speech tools may speak in the wrong language, which could lead to confusion or difficulty understanding the content.
- **Non-Native Speakers:** Users who are not fluent in the default language of the page may struggle to understand content or experience improper pronunciation.

## Fixes

To address inappropriate page language:

1. Determine the language in which the page's content is mainly presented.
2. Verify which is the correct language code for that language.
3. Add or change the language code in the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag.
4. If there are some page parts in another language, specify the language for those using the <code>lang</code> attribute in the specific elements.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [WCAG 2.2 Techniques: Technique H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
