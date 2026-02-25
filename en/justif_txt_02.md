---
Title: Inappropriate CSS Justified Text Check
id: justif_txt_02
type: "decr"
elem: "all"
test: "justifiedCss"
score: 5
level: "AAA"
trust: "0.9"
top: 1
steps: 1
ref: "C19"
scs: "1.4.8"
dis: "14142"
result: "warning"
---

# Inappropriate CSS Justified Text Check

## Description

The "Inappropriate CSS Justified Text Check" evaluates whether there is any instance where text justification is applied using CSS rules such as <code>text-align: justify;</code>.

## Example outcome

I found <mark>1</mark> instance using justified text via CSS.

## Impact

- **Visual Impairments:** Users with visual impairment may depend on consistent visual cues to track lines, and uneven spacing breaks those cues.
- **Cognitive Disabilities:** People with attention, processing, or learning difficulties find it harder to scan and understand text when spacing is inconsistent.
- **Dyslexia:** Justification produces uneven spacing, causing “rivers” of white space that distort word boundaries.
- **Elderly:** Age-related reading difficulty is increased by justification-induced text distortion.

## Fixes

To address text inappropriately justified:

1. Locate the inappropriately justified block of text.
2. Replace the <code>text-align: justify;</code> styling code by <code>text-align: left;</code>.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique C19: Specifying alignment either to the left or right in CSS](https://www.w3.org/WAI/WCAG22/Techniques/css/C19)
- [WebAIM: Text/Typographical Layout](https://webaim.org/techniques/textlayout/)
