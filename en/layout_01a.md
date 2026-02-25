---
Title: Obselete Elements For Visual Presentation Check
id: layout_01a
type: "fals"
elem: "all"
test: "layoutElemNo"
score: 10
level: "A"
trust: "1"
ref: "G115"
scs: "1.3.1"
dis: "34212"
result: "passed"
---

# Obselete Elements For Visual Presentation Check

## Description

The "Obselete Elements For Visual Presentation Check" evaluates whether all obsolete elements (e.g., <code>&lt;b&gt;</code>) are used appropriately and not to control page presentation.

## Example outcome

I observed that <mark>there are no obsolete elements</mark> used to control the visual presentation.

## Impact

- **Visual Impairments:** Screen readers rely on semantic structure to interpret the document. If <code>&lt;table&gt;</code> is used purely for layout, it may be read as a data table, confusing the user.
- **Motor Impairments:** Users navigating via keyboard or voice commands may rely on landmark roles and structure. Improper markup can disrupt navigation order and accessibility APIs.
- **Cognitive Disabilities:** Illogical structure or poor semantics make content harder to follow and mentally process. Proper HTML hierarchy improves reading flow and chunking of information.

## Fixes

To address obselete elements inappropriately used to control visual presentation:

1. Locate the inappropriate obselete elements.
2. Remove the element from the HTML code.
3. Add semantic HTML elements and CSS code to create the same visual appearance.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2 Techniques: Technique G115: Using semantic elements to mark up structure](https://www.w3.org/WAI/WCAG22/Techniques/general/G115)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
