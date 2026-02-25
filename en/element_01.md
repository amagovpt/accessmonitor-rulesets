---
Title: Sequential Focus Order Check
id: element_01
type: "true"
elem: "all"
test: "seqFocus"
score: 10
level: "AA"
trust: "1"
ref: "oj04fd"
scs: "2.4.7"
dis: "43353"
result: "warning"
---

# Sequential Focus Order Check

## Description

The "Sequential Focus Order Check" evaluates whether elements in the DOM follow a logical, meaningful focus sequence when navigated via the keyboard.

## Example outcome

I found <mark>1</mark> element in the sequential focus order.

## Impact

- **Visual Impairments:** Users with visual impairments rely on screen readers and keyboard navigation. If focus skips around or doesn’t follow visual flow, it’s hard to understand context.
- **Motor Impairments:** Tab-based navigation is essential for people using alternative input devices like switches or on-screen keyboards.
- **Cognitive Disabilities:** Unpredictable focus order can be disorienting, leading to confusion and frustration.

## Fixes

To address inappropriate sequential focus order:

1. Locate the elements that are focused in an incorrect order.
2. Rearrange them in the source code so that their order in the DOM matches how they appear on the screen.
3. Additionally, don’t manually assign <code>tabindex</code> values unless you must. Using <code>tabindex="1"</code> overrides natural focus order and can cause major confusion.
4. Use <code>tabindex="0"</code> sparingly for custom elements. This allows the custom element to be focusable while maintaining the natural flow.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
- [ACT Rules: Element in sequential focus order has visible focus](https://www.w3.org/WAI/standards-guidelines/act/rules/oj04fd/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
