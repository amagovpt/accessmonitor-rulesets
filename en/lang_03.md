---
Title: Missing Page Language Check
id: lang_03
type: "true"
elem: "all"
test: "langNo"
score: 1
level: "A"
trust: "1"
ref: "H57"
scs: "3.1.1"
dis: "53112"
result: "failed"
---

# Missing Page Language Check

## Description

The "Missing Page Language Check" evaluates whether the <code>lang</code> attribute is present on the <code>&lt;html&gt;</code> element.

## Example outcome

I noticed that the <mark>lang attribute is missing</mark>.

## Impact

- **Visual Impairments:** Screen readers won't know which language to use, leading to incorrect pronunciation, jarring or unintelligible speech, or wrong voice packs (e.g., using English TTS for a Spanish page).
- **Cognitive Disabilities:** Tools like text simplifiers or reading aids often rely on knowing the page language. Lack of a language tag can lead to cognitive overload or misinterpretation.
- **Auditory Disorders:** Incorrect pronunciation increases the cognitive load required to understand spoken content.

## Fixes

To address missing page language:

1. Determine the language in which the page's content is mainly presented.
2. Verify which is the correct language code for that language.
3. Add the language code in the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [WCAG 2.2 Techniques: Technique H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
