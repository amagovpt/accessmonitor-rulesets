---
Title: Missing Form Control Accessible Name Check
id: input_02
type: "prop"
elem: "label"
test: "inputLabelNo"
score: 3
level: "A"
trust: "0.8"
ref: "H44"
scs: "1.1.1,1.3.1,3.3.2,4.1.2"
dis: "54532"
result: "warning"
---

# Missing Form Control Accessible Name Check

## Description

The "Missing Form Control Accessible Name Check" evaluates whether all form controls on the page have an accessible name.

## Example outcome

I found <mark>1</mark> form control without accessible name.

## Impact

- **Visual Impairments:** Screen readers will announce the input only as “edit field” or similar, giving no context.
- **Motor Impairments:** Users relying on voice input can’t refer to the field by name to interact with it.
- **Cognitive Disabilities:** A lack of guidance increases cognitive effort and task failure.

## Fixes

To address <code>&lt;input&gt;</code> elements missing an accessible name:

1. Locate the problematic <code>&lt;input&gt;</code> element.
2. Add a <code>&lt;label&gt;</code> element correctly referencing the <code>&lt;input&gt;</code> element with the <code>for</code> attribute.
3. If prefered, add an <code>aria-label</code> attribute and provide an informative accessible name.
4. Upon preference, use the <code>aria-labelledby</code> attribute, pointing to the <code>id</code> of the element that provides the <code>&lt;input&gt;</code> element's accessible name.
5. Finally, you can also provide an accessible name by including the <code>title</code> attribute in the <code>&lt;input&gt;</code> element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
