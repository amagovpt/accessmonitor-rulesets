---
Title: Inappropriate Letter Spacing Check
id: letter_02
type: "decr"
elem: "all"
test: "letterSpacingNot"
score: 4
level: "AA"
trust: "1"
top: 1
steps: 1
ref: "24afc2"
scs: "1.4.12"
dis: "43353"
result: "failed"
---

# Inappropriate Letter Spacing Check

## Description

The "Inappropriate Letter Spacing Check" evaluates whether there is any content containing styling code that prevents users from adjusting text spacing, particularly letter spacing.

## Example outcome

I identified <mark>1</mark> element whose style prevent increasing letter spacing to at least 0.12 times the font size.

## Impact

- **Visual Impairments:** Individuals with visual impairments rely on extra spacing to clearly distinguish between letters and words.
- **Cognitive Disabilities:** Readability is significantly improved by increasing spacing, helping reduce mental fatigue.
- **Dyslexia:** They may struggle with tightly spaced text due to visual crowding, which can lead to skipping words or misreading.

## Fixes

To address inappropriate letter spacing:

1. Locate the style code used to inappropriately forbid increasing letter spacing.
2. Remove or change the code, ensuring that it allows the increase of letter spacing.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [ACT Rules: Important letter spacing in style attributes is wide enough](https://www.w3.org/WAI/standards-guidelines/act/rules/24afc2/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
