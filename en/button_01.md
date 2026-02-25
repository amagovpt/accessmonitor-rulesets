---
Title: Button Accessible Name Check
id: button_01
type: "true"
elem: "button"
test: "buttonAname"
score: 10
level: "A"
trust: "1"
ref: "97a4e1"
scs: "4.1.2"
dis: "43353"
result: "passed"
---

# Button Accessible Name Check

## Description

The "Button Accessible Name Check" evaluates whether all <code>&lt;button&gt;</code> elements in the interface have an accessible name — a label or text that screen readers and other assistive technologies can recognize and announce.

## Example outcome

I noticed that <mark>all</mark> <code>&lt;button&gt;</code> elements have accessible name.

## Impact

- **Visual Impairments:** A button with no label might be announced as simply "button", "unlabeled button" or not announced at all. This makes it impossible to know what the button does (e.g., "Submit", "Close", "Next Page"), making navigation frustrating or impossible.
- **Motor Impairments:** Voice commands depend on element names like “Click Submit” or “Press Save.” Buttons without names can’t be targeted or activated by voice.
- **Cogntive Impairments:** If there's no visible label or the button is represented by an icon without accessible text, the function might be unclear. This increases confusion and reduces trust in the interface.

## Fixes

To address missing button accessible names:

1. Locate the button missing an accessible name.
2. Add visible text inside the button (e.g., <code>&lt;button&gt;Submit&lt;/button&gt;</code>).
3. Use <code>aria-label</code> for icon-only buttons.
4. Use <code>aria-labelledby</code> to point to a visible label elsewhere.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Button has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
