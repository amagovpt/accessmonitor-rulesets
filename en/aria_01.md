---
Title: ARIA Role Check
id: aria_01
type: "true"
elem: "all"
test: "ariaCntxRole"
score: 10
level: "A"
trust: "1"
ref: "ff89c9"
scs: "1.3.1"
dis: "43353"
result: "passed"
---

# ARIA Role Check

## Description

The "ARIA Role Check" evaluates whether all elements using ARIA roles are placed in the correct semantic context.

## Example outcome

I noticed that <mark>all elements</mark> with an explicit semantic role exist inside their required contexts.

## Impact

- **Visual Impairments:** Improper role nesting can confuse screen readers or prevent them from correctly interpreting the page structure. For example, a menuitem outside of a menu context might not behave as expected.
- **Motor Impairments:** Some roles (like menuitem, tab, etc.) come with expected keyboard interactions. If they're out of context, these interactions might break or behave inconsistently.
- **Cognitive Disabilities:** Misleading semantic structures can disrupt the user's mental model of the interface, making navigation and comprehension more difficult.

## Fixes

To address inapropriate or missing ARIA roles:

1. Identify the element with the inapropriate or missing ARIA role.
2. Check the ARIA specification for valid parent or ancestor roles required by that role (e.g., a menuitem must be inside a menu, menubar, or group).
3. Correct the hierarchy by placing the role-bearing element within the required context.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [ACT Rules: ARIA required context role](https://www.w3.org/WAI/standards-guidelines/act/rules/ff89c9/proposed/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
