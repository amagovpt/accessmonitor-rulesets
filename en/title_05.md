---
Title: Inappropriate Page Title Characters Check
id: title_05
type: "true"
elem: "all"
test: "titleChars"
score: 1
level: "A"
trust: "0.5"
ref: "G88"
scs: "2.4.2"
dis: "42253"
result: "failed"
---

# Inappropriate Page Title Characters Check

## Description

The "Inappropriate Page Title Characters Check" evaluates whether the page <code>&lt;title&gt;</code> element avoids using ASCII art, character patterns, or decorative text that may interfere with readability or comprehension.

## Example outcome

I found that the webpage title has <mark>2</mark> characters next to each other that seems like ASCII-Art.

## Impact

- **Visual Impairments:** Symbols may be read out literally or incorrectly, reducing clarity or usability. Decorative or patterned characters can make it harder to skim and identify content.
- **Cognitive Disabilities:** ASCII art or symbols can cause confusion, misinterpretation, or cognitive overload.
- **ADHD/Autism:** Non-standard characters may reduce focus or impair understanding of page context.

## Fixes

To address inappropriate <code>&lt;title&gt;</code> elements:

1. Locate the <code>&lt;title&gt;</code> element.
2. Ensure it contains plain, descriptive text that clearly states the page’s purpose. Avoid symbols, repeated punctuation, or decorative patterns.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [WCAG 2.2 Techniques: Technique G88: Providing descriptive titles for web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [WebAIM: Page Titles](https://webaim.org/techniques/pagetitle/)
