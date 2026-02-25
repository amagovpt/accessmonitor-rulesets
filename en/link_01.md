---
Title: Link Elements Check
id: link_01
type: "true"
elem: "all"
test: "linkRel"
score: 10
level: "AA"
trust: "0.9"
ref: "H59"
scs: "2.4.5,2.4.8"
dis: "55554"
result: "passed"
---

# Link Elements Check

## Description

The "Link Elements Check" evaluates whether all relevant <code>&lt;link&gt;</code> elements are in the <code>&lt;head&gt;</code>, and provide additional navigational context for assistive technologies and user agents (e.g., <code>rel="next"</code>, <code>rel="prev"</code>, <code>rel="index"</code>, <code>rel="contents"</code>).

## Example outcome

I located <mark>all</mark> <code>&lt;link&gt;</code> elements that could serve to build a navigation system.

## Impact

- **Visual Impairments:** People with visual impairments may miss context about the document’s position within a larger system (like paginated content, wizards, or multi-step processes).
- **Motor Impairments:** Users with motor impairments can't benefit from browser-native navigation aids based on these <code>&lt;link&gt;</code> relationships.
- **Cognitive Disabilities:** Lack of orientation can lead to confusion, especially in large, multi-page documents or applications.

## Fixes

To address inappropriate <code>&lt;link&gt;</code> elements:

1. Locate the inappropriate <code>&lt;link&gt;</code> element.
2. Make sure it reflects the actual structure of the site, not just arbitrary navigation.
3. Make sure it is inside the <code>&lt;head&gt;</code> region.
4. Provide an appropriate <code>rel</code>, according to its destination.
5. Ensure that the <code>href</code> attribute value is valid.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.5](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways)
- [WCAG 2.2: Understanding Success Criteria 2.4.8](https://www.w3.org/WAI/WCAG22/Understanding/location)
- [WCAG 2.2 Techniques: Technique H59: Using the link element and navigation tools](https://www.w3.org/WAI/WCAG22/Techniques/html/H59)
- [WebAIM: ]()
