---
Title: Letter Spacing Check
id: letter_01
type: "true"
elem: "all"
test: "letterSpacing"
score: 10
level: "AA"
trust: "1"
ref: "24afc2"
scs: "1.4.12"
dis: "43353"
result: "passed"
---

# Letter Spacing Check

## Description

The "Letter Spacing Check" evaluates whether all content does not use CSS or other techniques to prevent users from adjusting text spacing, particularly letter spacing.

## Example outcome

I observed that styles are not used to prevent increasing letter spacing.

## Impact

- **Visual Impairments:** Custom spacing helps users distinguish words and letters more clearly.
- **Cognitive Disabilities:** Improved spacing reduces visual clutter and makes reading less overwhelming.
- **Dyslexia:** Increased letter spacing can help reduce the visual crowding effect, improving character recognition and reading speed.

## Fixes

To address inappropriate letter spacing:

1. Locate the style code used to inappropriately forbid increasing letter spacing.
2. Remove or change the code, ensuring that it allows the increase of letter spacing.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [ACT Rules: Important letter spacing in style attributes is wide enough](https://www.w3.org/WAI/standards-guidelines/act/rules/24afc2/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
