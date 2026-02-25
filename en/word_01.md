---
Title: Word Spacing Check
id: word_01
type: "true"
elem: "all"
test: "wordSpacing"
score: 10
level: "AA"
trust: "1"
ref: "9e45ec"
scs: "1.4.12"
dis: "43353"
result: "passed"
---

# Word Spacing Check

## Description

The "Word Spacing Check" evaluates whether the used CSS styles or code do not prevent users from adjusting word spacing to improve text readability.

## Example outcome

I observed that styles are not used to prevent increasing word spacing.

## Impact

- **Visual Impairments:** Enhanced spacing helps in distinguishing words. Inaccessible styles reduce legibility.
- **Cognitive Disabilities/Dyslexia:** Users may need to increase spacing to parse text more easily. Blocking this can reduce comprehension.
- **Autism:** Unchangeable dense text may overwhelm or distract users needing more visual spacing.
- **Neurological Disorders:** Custom spacing helps with sensory processing - if blocked, reading becomes difficult.

## Fixes

To address inappropriate word spacing:

1. Locate the inappropriate style code.
2. Refactor it ensuring does not prevent the user from overriding word spacing.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [ACT Rules: Important word spacing in style attributes is wide enough](https://www.w3.org/WAI/standards-guidelines/act/rules/9e45ec/)
- [WebAIM: Typefaces and Fonts](https://webaim.org/techniques/fonts/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
