---
Title: Accessible Name Matches Visible Label Check
id: label_01
type: "true"
elem: "all"
test: "labelAName"
score: 10
level: "A"
trust: "1"
ref: "G208"
scs: "2.5.3"
dis: "43353"
result: "passed"
---

# Accessible Name Matches Visible Label Check

## Description

The "Accessible Name Matches Visible Label Check" evaluates whether all interactive elements (like buttons, form fields, links, etc.) have accessible names (read by screen readers and other assistive technologies) that match the visible label shown on the screen.

## Example outcome

I observed that <mark>all</mark> interactive elements have in their accessible names the visible label text.

## Impact

- **Visual Impairments:** If the accessible name differs from the visible label, screen readers may announce something inconsistent, confusing users.
- **Motor Impairments:** Users with motor impairments may say visible labels aloud to activate controls (e.g., using Dragon NaturallySpeaking). If the accessible name is different, the command won’t work.
- **Cognitive Disabilities:** Inconsistencies between visible and announced labels can make the interface harder to predict and understand.

## Fixes

To address interactive elements whose accessible names don't match the visible label:

1. Locate the incorrect interactive element.
2. Change its accessible name to match totally or contain the visible label.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name)
- [WCAG 2.2 Techniques: Technique G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG22/Techniques/general/G208)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
