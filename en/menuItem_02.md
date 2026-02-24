---
Title: Missing Menu Item Accessible Name Check
id: menuItem_02
type: "prop"
elem: "menuItem"
test: "menuItemANameNot"
score: 3
level: "A"
trust: "1"
ref: "m6b1q3"
scs: "4.1.2"
dis: "43353"
result: "failed"
---

# Missing Menu Item Accessible Name Check

## Description

The "Missing Menu Item Accessible Name Check" evaluates whether there is any element with the role <code>menuitem</code> without an accessible name.

## Example outcome

I found <mark>1</mark> element with the <code>menuitem</code> role without accessible name.

## Impact

- **Visual Impairments:** Screen readers won't announce the purpose of the menu item. This can prevent users from navigating menus or taking actions like submitting forms or opening submenus.
- **Motor Impairments:** If the accessible name is missing, users relying on speech input (like Dragon) won’t be able to activate the menu item using voice commands.
- **Cognitive Disabilities:** Without clear labeling, users may become disoriented or confused, especially if the interface contains many options.

## Fixes

To address manu items missing an accessible name:

1. Locate the element with the role <code>menitem</code> and no accessible name.
2. Add to it either a visible text inside the element, the <code>aria-label</code> attribute to provide a textual label or the <code>aria-labelledby</code> attribute to reference another element that provides the label.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Menuitem has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/m6b1q3/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
