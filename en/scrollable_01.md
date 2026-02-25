---
Title: Scrollable Element Check
id: scrollable_01
type: "true"
elem: "scrollable"
test: "scrollableAccess"
score: 10
level: "A"
trust: "1"
ref: "G202"
scs: "2.1.1"
dis: "43353"
result: "passed"
---

# Scrollable Element Check

## Description

The "Scrollable Element Check" evaluates whether all scrollable elements on the page are accessible via the keyboard.

## Example outcome

I noticed that <mark>all</mark> scrollable elements are keyboard accessible.

## Impact

- **Visual Impairments:** Screen reader users rely on keyboard navigation to interact with content. If scrollable areas can’t be accessed, important content may be hidden.
- **Motor Impairments:** Users with limited or no ability to use a mouse can't access content if it’s not reachable via keyboard.

## Fixes

To address scrollable elements that are not keyboard accessible:

1. Locate the inappropriate scrollable element.
2. Ensure it is keyboard focusable (i.e., use <code>tabindex="0"</code> if it is not naturally focusable).
3. If possible, use a native HTML element that is naturally focuable and scrollable.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2 Techniques: Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
