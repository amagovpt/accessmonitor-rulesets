---
Title: Not Permmitted ARIA State and Property Check
id: aria_06
type: "fals"
elem: "all"
test: "ariaStNotPermitted"
score: 1
level: "A"
trust: "1"
ref: "5c01ea"
scs: "1.3.1,4.1.2"
dis: "43353"
result: "failed"
---

# Not Permmitted ARIA State and Property Check

## Description

The "Not Permmitted ARIA State and Property Check" evaluates whether there is one ARIA state or property used on a page that is not allowed for the element or role to which it is applied.

## Example outcome

I found <mark>1</mark> not allowed ARIA state or property.

## Impact

- **Visual Impairments:** ARIA attributes applied to the wrong role may be ignored by screen readers, meaning critical state info (e.g., expanded, required) is lost.
- **Motor Impairments:** A misrepresented UI can block interactions or cause unexpected behavior with AT software that parses ARIA for focus/order/state info, preventing keyboard users from reaching it.
- **Cognitive Disabilities:** Missed or broken semantic cues can confuse users who depend on accessible structure or dynamic state updates.

## Fixes

To address not permitted aria state and propery values:

1. Locate the ARIA attribute(s) applied to disallowed roles or elements.
2. Consult the ARIA spec or mapping tables to see which roles the attribute is permitted on.
3. Remove or relocate the ARIA attribute to a compatible role or use a native HTML element that supports the desired behavior.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [ACT Rules: ARIA state or property is permitted](https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/proposed/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
