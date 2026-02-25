---
Title: Accessible Name Mismatches Visible Label Check
id: label_03
type: "fals"
elem: "all"
test: "labelANameNot"
score: 4
level: "A"
trust: "1"
ref: "G208"
scs: "2.5.3"
dis: "43353"
result: "failed"
---

# Accessible Name Mismatches Visible Label Check

## Description

The "Accessible Name Mismatches Visible Label Check" evaluates whether there is any interactive element that does not contain the visible label text in its accessible name.

## Example outcome

I identified <mark>1</mark> interactive element which does not have its visible label text in its accessible name.

## Impact

- **Visual Impairments:** Hear an element labeled differently than what they visually see, leading to confusion or incorrect assumptions.
- **Motor Impairments:** Commands like “Click ‘Save’” won't work if the accessible name is “Submit Form” while the button says “Save.”
- **Cognitive Disabilities:** Inconsistent labels increase cognitive load, making interaction less predictable and more error-prone.

## Fixes

To address interactive elements whose accessible names don't match the visible label:

1. Locate the incorrect interactive element.
2. Change its accessible name to match totally or contain the visible label.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name)
- [WCAG 2.2 Techniques: Technique G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG22/Techniques/general/G208)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
