---
Title: Inappropriate Word Spacing Check
id: word_02
type: "fals"
elem: "all"
test: "wordSpacingNot"
score: 4
level: "AA"
trust: "1"
ref: "9e45ec"
scs: "1.4.12"
dis: "43353"
result: "failed"
---

# Inappropriate Word Spacing Check

## Description

The "Inappropriate Word Spacing Check" evaluates whether there is any element that explicitly prevents the user from increasing word spacing due to its style.

## Example outcome

I identified <mark>1</mark> element whose style prevent increasing word spacing to at least 0.16 times the font size.

## Impact

- **Visual Impairments:** Blocking spacing adjustments can reduce legibility and tracking across lines for users with visual impairments.
- **Cognitive Disabilities/Dyslexia:** Users who rely on adjusted word spacing to reduce cognitive load may struggle to read the content.
- **Autism:** Unchangeable dense text may overwhelm or distract users needing more visual spacing.
- **Neurological Disorders:** May experience increased reading fatigue and reduced comprehension.

## Fixes

To address inappropriate word spacing:

1. Locate the inappropriate style code.
2. Refactor it ensuring does not prevent the user from overriding word spacing.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [ACT Rules: Important word spacing in style attributes is wide enough](https://www.w3.org/WAI/standards-guidelines/act/rules/9e45ec/)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
