---
Title: Hidden Decorative Elements Check
id: element_04
type: "true"
elem: "all"
test: "elementHiddenFocus"
score: 10
level: "A"
trust: "1"
ref: "46ca7f"
scs: "4.1.2"
dis: "43353"
result: "passed"
---

# Hidden Decorative Elements Check

## Description

The "Hidden Decorative Elements Check" evaluates whether all purely decorative elements (e.g., icons, background SVGs, spacer images) are properly hidden from assistive technologies (AT) like screen readers, using <code>aria-hidden="true"</code>, <code>empty alt=""</code>, or role attributes like <code>role="presentation"</code>.

## Example outcome

I haven't found any elements marked as decorative that have been exposed to Assistive Technologies.

## Impact

- **Visual Impairments:** Screen readers may announce meaningless info like “image” or “graphic,” disrupting the user's experience and increasing cognitive load.
- **Motor Impairments:** Users relying on keyboard or voice control will need to tab through or hear content that has no purpose, slowing down navigation.
- **Cognitive Disabilities:** Users with cognitive disabilities may become confused by unnecessary auditory information that doesn’t match visible or expected context.

## Fixes

To address decorative elements that are incorrectly unhidden from assistive technologies:

1. Locate the incorrectly unhidden elements.
2. If it is an <code>&lt;img&gt;</code> element, empty the alternative text to ensure screen readers skip the image, and add <code>role="presentation"</code> to reinforce the intention.
3. If it is an svg or an icon, add <code>aria-hidden="true"</code> to hide the element from AT, and <code>focusable="false"</code> to ensure it doesn’t appear in the tab order.
4. Elsewhere, add <code>aria-hidden="true"</code>.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Element marked as decorative is not exposed](https://www.w3.org/WAI/standards-guidelines/act/rules/46ca7f/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
