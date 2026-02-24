---
Title: Missing Redundant Event Handlers Check
id: ehandler_02
type: "prop"
elem: "ehandler"
test: "ehandBothNo"
score: 1
level: "A"
trust: "1"
ref: "SCR20"
scs: "2.1.1,2.1.3"
dis: "53511"
result: "failed"
---

# Missing Redundant Event Handlers Check

## Description

The "Missing Redundant Event Handlers Check" evaluates whether there is any interactive element with a mouse event handler (like <code>onclick</code>) that does not include the corresponding keyboard event handler (like <code>onkeypress</code>, <code>onkeydown</code>, or <code>onkeyup</code>).

## Example outcome

I identified <mark>1</mark> instance where redundant event handlers are not used.

## Impact

- **Visual Impairments:** Many screen reader users navigate via keyboard. If they can’t trigger mouse-bound actions with the keyboard, they will be locked out of parts of the site.
- **Motor Impairments:** Users who cannot use a mouse (e.g., due to tremors, paralysis, or limb amputation) and rely on keyboards or assistive tech like switch devices will be unable to activate functionality that's mouse-only.

## Fixes

To address missing redundant event handlers:

1. Locate the element that can be triggered by a mouse event but can't be triggered by a keyboard event.
2. Add an attribute (e.g., <code>onkeydown</code>) to allow the triggering with a keyboard event.
3. If applicable, use a semantic HTML button instead which has built-in keyboard accessibility.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2: Understanding Success Criteria 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception)
- [WCAG 2.2 Techniques: Technique SCR20: Using both keyboard and other device-specific functions](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR20)
- [WebAIM: JavaScript Accessibility](https://webaim.org/techniques/javascript/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
