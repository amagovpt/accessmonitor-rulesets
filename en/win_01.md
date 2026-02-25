---
Title: Inappropriate Pop-Up Windows Check
id: win_01
type: "true"
elem: "all"
test: "newWinOnLoad"
score: 3
level: "AAA"
trust: "0.9"
ref: "F52"
scs: "3.2.5"
dis: "53454"
result: "warning"
---

# Inappropriate Pop-Up Windows Check

## Description

The "Inappropriate Pop-Up Windows Check" evaluates whether a webpage opens one or more new windows (e.g., via <code>window.open()</code>) automatically when the page loads, without user interaction.

## Example outcome

I found that this webpage has pop-up windows.

## Impact

- **Visual Impairments:** Users relying on screen readers may not realize a new window has opened, or may lose track of where they are.
- **Motor Impairments:** Pop-up windows can be challenging if individuals with motor impairments struggle to quickly switch between windows or dismiss pop-ups.
- **Cognitive Disabilities:** People with cognitive disabilities may face confusion, disorientation, or anxiety due to unexpected context changes.
- **Attention Disorders:** Sudden new content may break concentration or trigger cognitive overload.

## Fixes

To address inappropriate pop-up windows:

1. Locate the element that causes the automatic opening of pop-up windows.
2. Replace it with a triggerable element so users can manually open the new window(s).

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.2.5](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request)
- [WCAG 2.2 Techniques: Technique F52: Failure of Success Criterion 3.2.5 due to opening a new window as soon as a new page is loaded](https://www.w3.org/WAI/WCAG22/Techniques/failures/F52)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
