---
Title: Menu Item Accessible Name Check
id: menuItem_01
type: "true"
elem: "menuItem"
test: "menuItemAName"
score: 10
level: "A"
trust: "1"
ref: "m6b1q3"
scs: "4.1.2"
dis: "43353"
result: "passed"
---

# Menu Item Accessible Name Check

## Description

The "Menu Item Accessible Name Check" evaluates whether all elements assigned the ARIA role <code>menuitem</code> have an accessible name, which is required to convey their purpose to assistive technologies (AT) such as screen readers.

## Example outcome

I noticed that <mark>all</mark> elements with the <code>menuitem</code> role have an accessible name.

## Impact

- **Visual Impairments:** Visually impaired users rely on screen readers to announce the name of the menu item. Missing names render navigation inaccessible.
- **Motor Impairments:** Users using voice control software may not be able to activate unlabeled menu items via voice.
- **Cognitive Disabilities:** May rely on consistent labeling or screen reader support to understand navigation structure.

## Fixes

To address manu items missing an accessible name:

1. Locate the element with the role <code>menitem</code> and no accessible name.
2. Add to it either a visible text inside the element, the <code>aria-label</code> attribute to provide a textual label or the <code>aria-labelledby</code> attribute to reference another element that provides the label.

## Resources

- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ACT Rules: Menuitem has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/m6b1q3/)
- [WebAIM: Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
