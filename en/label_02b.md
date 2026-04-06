---
Title: Inappropriate Label Element Check (Manual Verification Required)
id: label_02b
type: "decr"
elem: "all"
test: "labelPosWarn"
score: 7
level: "A"
trust: "0.7"
top: 1
steps: 1
ref: "G162"
scs: "1.3.1,3.3.2"
dis: "43353"
result: "warning"
---

# Inappropriate Label Element Check

## Description

Web accessibility best practices recommend that a `<label>` be placed predictably—either before or after the `<input>` field, depending on the field type. Layout constructions where the positioning is ambiguous or where the `<label>` is placed visually inside the `<input>` are highly discouraged.

## Example outcome
I found <mark>1</mark> `<label>` element whose positioning raises doubts. I could not determine if it is placed before or after the `<input>`.

## Impact

- **Visual Obscurity:** If a label is visually overlapped by other elements, sighted users cannot read the instructions, even if the element is technically "visible" in the DOM.
- **Context Fragmentation:** Unconventional layouts can break the "proximity principle," where the label is technically linked but visually detached, causing confusion for users with cognitive disabilities.
- **Automation Blind Spots:** Over-engineered CSS can bypass standard accessibility checkers while still failing real-world users.

## Fixes

To resolve this warning, a manual audit is required:

1. **Visual Audit:** Inspect the form in multiple viewport sizes to ensure the `<label>` is not being clipped or overlapped by adjacent elements.
2. **Review Layout Logic:** If using `position: absolute` or `transform`, ensure the label remains predictably placed before or above the input.
3. **Simplify Styling:** Where possible, replace complex overlap hacks with modern layout engines like Flexbox or Grid to ensure the label remains in the visual and semantic flow.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique G162: Positioning labels to maximize predictability](https://www.w3.org/WAI/WCAG22/Techniques/general/G162)
- [MDN: Accessibility of CSS Layouts](https://developer.mozilla.org/en-US/docs/Web/Accessibility/CSS_and_JavaScript)