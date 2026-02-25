---
Title: Missing Button Accessible Name Check
id: button_02
type: "prop"
elem: "button"
test: "buttonNotAname"
score: 1
level: "A"
trust: "1"
ref: "97a4e1"
scs: "4.1.2"
dis: "43353"
result: "failed"
---

# Missing Button Accessible Name Check

## Description

The "Missing Button Accessible Name Check" evaluates whether there is any <code>&lt;button&gt;</code> elements without an accessible name.

## Example outcome

I found <mark>1</mark> <code>&lt;button&gt;</code> element without accessible name.

## Impact

- **Visual Impairments:** A button with no label might be announced as simply "button," "unlabeled button," or not announced at all. This makes it impossible to know what the button does (e.g., "Submit", "Close", "Next Page"), making navigation frustrating or impossible.
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
