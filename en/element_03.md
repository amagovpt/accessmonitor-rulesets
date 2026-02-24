---
Title: Inappropriately ARIA Hidden Focusable Content Check
id: element_03
type: "fals"
elem: "all"
test: "elementNotDec"
score: 1
level: "A"
trust: "1"
ref: "6cfa84"
scs: "4.1.2"
dis: "43353"
result: "failed"
---

# Inappropriately ARIA Hidden Focusable Content Check

## Description

The "Inappropriately ARIA Hidden Focusable Content Check" whether there is any element with <code>aria-hidden="true"</code> containing focusable or interactive content.

## Example outcome

I found <mark>1</mark> element with the aria-hidden attribute that has focusable content.

## Impact

- **Visual Impairments:** A user may tab into a button or link that screen readers don’t announce, leaving them stuck or unaware of what’s happening.
- **Motor Impairments:** People with motor impairments could land on a control that seems broken or unresponsive.
- **Cognitive Disabilities:** Inconsistent or "ghost" interactions (that appear but aren’t announced) can confuse and frustrate.

## Fixes

To address inappropriately focusable hidden content:

1. Locate the element that contains <code>aria-hidden="true"</code>.
2. If that's appropriate, remove focusable children from hidden containers.
3. If the children element(s) are interactable, remove the <code>aria-hidden="true"</code> attribute.
4. Finally, is most suitable, you can also disable the focusable element while it is hidden from assistive tech.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Element with aria-hidden has no content in sequential focus navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
