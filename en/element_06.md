---
Title: Language Attribute Check
id: element_06
type: "true"
elem: "all"
test: "elementLang"
score: 10
level: "AA"
trust: "1"
ref: "H58"
scs: "3.1.2"
dis: "43353"
result: "passed"
---

# Language Attribute Check

## Description

The "Language Attribute Check" evaluates whether all HTML elements using the <code>lang</code> attribute declare a valid BCP 47 language tag.

## Example outcome

I noticed that <mark>all</mark> elements with a lang attribute use a valid language tag.

## Impact

- **Visual Impairments:** Screen readers may mispronounce words, especially in multilingual content. Misinterpretation of tone or meaning (e.g., a French word read with an English voice).
- **Cognitive Disabilities:** Mismatch between expected language and how content is read or displayed can cause confusion, increase cognitive load, or hinder comprehension.

## Fixes

To address inappropriate or missing <code>lang</code> attributes:

1. Locate the HTML element missing or with an inappropriate language attribute.
2. If missing, add a <code>lang</code> attribute to HTML elements that contain text in a language different from the document’s default.
3. Make sure the tag uses a valid language code.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.2](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts)
- [WCAG 2.2 Techniques: Technique H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
