---
Title: Inappropriate Focus Blur Check
id: focus_01
type: "true"
elem: "all"
test: "focusBlur"
score: 3
level: "A"
trust: "0.8"
ref: "F55"
scs: "2.1.1,2.4.7,3.2.1"
dis: "54142"
result: "failed"
---

# Inappropriate Focus Blur Check

## Description

The "Inappropriate Focus Blur Check" evaluates whether there is any JavaScript code used to remove focus from a field (e.g., using <code>element.blur()</code>) when that field is focused.

## Example outcome

I found <mark>1</mark> case where javascript is used to remove the focus from the field, whenever the field receives the focus.

## Impact

- **Visual Impairments:** The visually impaired user may be unaware that the field even exists or think it is broken, because it loses focus instantly before it can be announced or interacted with.
- **Motor Impairments:** People with motor impairments often rely solely on keyboard navigation. Automatically removing focus makes the field inaccessible.
- **Cognitive Disabilities:** Users may become confused or frustrated when focus seems to "jump away" or when input elements behave inconsistently.

## Fixes

To address inappropriately removed focus from a field by javascript code:

1. Remove any JavaScript code that intentionally triggers <code>element.blur()</code> or similar methods on focus. These scripts violate user expectations and accessibility requirements.
2. Locate the element that had the focus removed from it by the javascript.
3. To obtain a similar behaviour using an accessible variant, try some of these alternatives:
4. Use <code>disabled</code> or <code>readonly</code> for non-editable fields.
5. Explain via ARIA and visible instructions if interaction is limited.
6. Use <code>tabindex="-1"</code> only when you do not want the element in the tab order, not to remove focus once it’s received.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2: Understanding Success Criteria 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
- [WCAG 2.2: Understanding Success Criteria 3.2.1](https://www.w3.org/WAI/WCAG22/Understanding/on-focus)
- [WCAG 2.2 Techniques: Technique F55: Failure of Success Criteria 2.1.1, 2.4.7, 2.4.13, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
