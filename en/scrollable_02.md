---
Title: Inappropriate Scrollable Element Check
id: scrollable_02
type: "prop"
elem: "scrollable"
test: "scrollableAccessNot"
score: 3
level: "A"
trust: "1"
ref: "G202"
scs: "2.1.1"
dis: "43353"
result: "failed"
---

# Inappropriate Scrollable Element Check

## Description

The "Inappropriate Scrollable Element Check" evaluates whether there is any scrollable container on the page that is not accessible via keyboard navigation.

## Example outcome

I found <mark>1</mark> scrollable element that is not keyboard accessible.

## Impact

- **Visual Impairments:** Screen reader users cannot navigate to or explore scrollable content if it’s not keyboard accessible, potentially missing key information.
- **Motor Impairments:** Users who cannot use a mouse (e.g., due to paralysis or amputation) cannot scroll through hidden content using keyboard-only.

## Fixes

To address scrollable elements that are not keyboard accessible:

1. Locate the inappropriate scrollable element.
2. Ensure it is keyboard focusable (i.e., use <code>tabindex="0"</code> if it is not naturally focusable).
3. If possible, use a native HTML element that is naturally focuable and scrollable.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2 Techniques: Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
