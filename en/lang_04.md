---
Title: Incorrect Page Language Check
id: lang_04
type: "true"
elem: "all"
test: "langMatchNo"
score: 1
level: "A"
trust: "1"
ref: "H57"
scs: "3.1.1"
dis: "53112"
result: "failed"
---

# Incorrect Page Language Check

## Description

The "Incorrect Page Language Check" evaluates whether the <code>lang</code> and / or <code>xml:lang</code> attributes are applied correctly and consistently on the <code>&lt;html&gt;</code> element, matching the page language.

## Example outcome

I observed that the <code>lang</code> and / or <code>xml:lang</code> attributes are being used <mark>incorrectly</mark>.

## Impact

- **Visual Impairments:** Screen readers may not use the correct pronunciation engine if the language attribute doesn't match the actual content. If conflicting values are present, the tech may fall back to a default or choose unpredictably.
- **Cognitive Disabilities:** Comprehension tools or overlays may not activate correctly or use the wrong rules for parsing or presenting text.
- **Auditory Disorders:** If content is read in the wrong language or voice, understanding can become significantly harder.

## Fixes

To address incorrect page language:

1. Determine the language in which the page's content is mainly presented.
2. Verify which is the correct language code for that language.
3. Change the language code in the <code>lang</code> and / or <code>xml:lang</code> attribute of the <code>&lt;html&gt;</code> tag.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [WCAG 2.2 Techniques: Technique H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
