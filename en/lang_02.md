---
Title: Inappropriate Page Language Check
id: lang_02
type: "true"
elem: "all"
test: "langCodeNo"
score: 1
level: "A"
trust: "1"
ref: "H57"
scs: "3.1.1"
dis: "53112"
result: "failed"
---

# Inappropriate Page Language Check

## Description

The "Inappropriate Page Language Check" evaluates whether the primary language of the webpage is correctly identified using the <code>lang</code> attribute on the <code>&lt;html&gt;</code> element. 

## Example outcome

I verified that the webpage main language is incorrectly marked. Does <mark>\"en-GB\"</mark> exists?

## Impact

- **Visual Impairments:** Users may hear text read in an incorrect accent or with incorrect pronunciation, especially for non-English sites or non-default dialects.
- **Cognitive Disabilities:** Language-specific tools (like simplified vocabulary versions or screen overlays) may not trigger correctly, reducing comprehension.
- **Auditory Disorders:** Mispronunciation can make understanding spoken content more cognitively demanding.

## Fixes

To address inappropriate page language:

1. Determine the language in which the page's content is mainly presented.
2. Verify which is the correct language code for that language.
3. Change the language code in the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [WCAG 2.2 Techniques: Technique H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
