---
Title: Inappropriate Obselete Elements For Visual Presentation Check
id: layout_01b
type: "decr"
elem: "all"
test: "layoutElem"
score: 1
level: "A"
trust: "1"
top: 2
steps: 2
ref: "G115"
scs: "1.3.1"
dis: "34212"
result: "failed"
---

# Inappropriate Obselete Elements For Visual Presentation Check

## Description

The "Inappropriate Obselete Elements For Visual Presentation Check" evaluates whether there is any obselete element used to control page presentation.

## Example outcome

I found <mark>1</mark> obsolete element used to control the visual presentation.

## Impact

- **Visual Impairments:** Screen readers rely on semantic structure to interpret the document. If <code>&lt;table&gt;</code> is used purely for layout, it may be read as a data table, confusing the user.
- **Motor Impairments:** Obsolete structures often lack keyboard navigability or logical tab order. CSS-based layouts are more predictable and navigable for alternative input devices.
- **Cognitive Disabilities:** Layout inconsistencies and lack of logical structure can increase cognitive load. Non-semantic structures can interfere with reading comprehension tools.

## Fixes

To address obselete elements inappropriately used to control visual presentation:

1. Locate the inappropriate obselete elements.
2. Remove the element from the HTML code.
3. Add semantic HTML elements and CSS code to create the same visual appearance.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique G115: Using semantic elements to mark up structure](https://www.w3.org/WAI/WCAG22/Techniques/general/G115)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
