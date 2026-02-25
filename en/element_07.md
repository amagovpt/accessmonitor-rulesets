---
Title: Inappropriate Language Attribute Check
id: element_07
type: "fals"
elem: "all"
test: "elementNotLang"
score: 3
level: "AA"
trust: "1"
ref: "H58"
scs: "3.1.2"
dis: "43353"
result: "failed"
---

# Inappropriate Language Attribute Check

## Description

The "Inappropriate Language Attribute Check" evaluates whether there is any element with an invalid <code>lang</code> tag.

## Example outcome

I found <mark>1</mark> element with a lang attribute that uses an invalid language tag.

## Impact

- **Visual Impairments:** Screen readers will ignore invalid lang tags and fall back to the default document language, resulting in incorrect pronunciation (especially in multilingual content). Mispronunciation can hinder understanding, especially with foreign names, phrases, or entire sections.
- **Cognitive Disabilities:** Unexpected reading behavior (e.g., wrong language pronunciation) can be distracting or confusing, increasing cognitive load.

## Fixes

To address inappropriate language attributes:

1. Locate the HTML element with an inappropriate language attribute.
2. Replace the language code by a valid one.

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.2](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts)
- [WCAG 2.2 Techniques: Technique H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG22/Techniques/html/H58)
- [WebAIM: Document and Content Language](https://webaim.org/techniques/language/)
