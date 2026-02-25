---
Title: Redundant Event Handlers Check
id: ehandler_03
type: "true"
elem: "ehandler"
test: "ehandBoth"
score: 10
level: "A"
trust: "0.9"
ref: "G90"
scs: "2.1.1,2.1.3"
dis: "52522"
result: "passed"
---

# Redundant Event Handlers Check

## Description

The "Redundant Event Handlers Check" evaluates whether all interactive elements on the page with mouse event handlers also include corresponding keyboard event handlers or are implemented using semantic HTML elements that already provide built-in keyboard support (like <code>&lt;button&gt;</code> or <code>&lt;a href&gt;</code>).

## Example outcome

I identified <mark>all</mark> instances where redundant event handlers are used.

## Impact

- **Visual Impairments:** Many rely on screen readers, which are navigated via keyboard — mouse-only interaction creates a barrier.
- **Motor Impairments:** Individuals who use keyboards, switch devices, or eye-tracking tools instead of a mouse won't be able to activate or interact with components missing keyboard support.

## Fixes

To address missing redundant event handlers:

1. Locate the element that can be triggered by a mouse event but can't be triggered by a keyboard event.
2. Add an attribute (e.g., <code>onkeydown</code>) to allow the triggering with a keyboard event.
3. If applicable, use an HTML element instead containing built-in keyboard accessibility (e.g., <code>&lt;button&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2: Understanding Success Criteria 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception)
- [WCAG 2.2 Techniques: Technique G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG22/Techniques/general/G90)
- [WebAIM: JavaScript Accessibility](https://webaim.org/techniques/javascript/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
