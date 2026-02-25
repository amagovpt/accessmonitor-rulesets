---
Title: Inappropriate Event Handlers Check
id: ehandler_04
type: "prop"
elem: "ehandler"
test: "ehandTagNo"
score: 1
level: "A"
trust: "0.8"
ref: "F59"
scs: "4.1.2"
dis: "43411"
result: "failed"
---

# Inappropriate Event Handlers Check

## Description

The "Inappropriate Event Handlers Check" evaluates whether there is any event handler on elements that are not inherently interactive (e.g., <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>).

## Example outcome

I identified <mark>1</mark> instance where event handlers are associated with non-interactive elements.

## Impact

- **Visual Impairments:** Relying on screen readers, these users cannot detect that a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> has interactive behavior unless it's correctly marked up.
- **Motor Impairments:** Users who navigate using a keyboard won't be able to interact with elements that aren't focusable (<code>tabindex="0"</code>) or that lack keyboard event support.
- **Cognitive Disabilities:** Inconsistent interaction patterns may confuse users who rely on predictable UI structures and behavior.

## Fixes

To address inappropriate event handlers:

1. Locate the element that is not interective but contains an event handler.
2. Replace the element by an inherently interactive, keyboard-accessible, and has the correct role element (e.g., <code>&lt;button&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control](https://www.w3.org/WAI/WCAG22/Techniques/failures/F59)
- [WebAIM: JavaScript Accessibility](https://webaim.org/techniques/javascript/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
