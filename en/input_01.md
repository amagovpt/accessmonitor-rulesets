---
Title: Missing Form Control Label and Title Check
id: input_01
type: "prop"
elem: "inputLabel"
test: "inputIdTitleNo"
score: 3
level: "A"
trust: "1"
ref: "H65"
scs: "1.1.1,1.3.1,3.3.2,4.1.2"
dis: "53122"
result: "failed"
---

# Missing Label and Title Check

## Description

The "Missing Label and Title Check" evaluates whether any form input elements are missing accessible labels.

## Example outcome

I identified <mark>1</mark> form control without an associated <code>&lt;label&gt;</code> element and without the <code>title</code> attribute.

## Impact

- **Visual Impairments:** Screen readers cannot announce the purpose of the form control, making it unusable.
- **Motor Impairments:** People using voice input software (e.g., Dragon) may not be able to interact with the field without a name.
- **Cognitive Disabilities:** Unlabeled controls increase cognitive load and can make forms unusable.

## Fixes

To address form control elements missing a <code>&lt;label&gt;</code> and a <code>title</code>:

1. Locate the form control element.
2. Add, if possible, a <code>&lt;label&gt;</code> element and properly associate it with the <code>&lt;input&gt;</code> element using the <code>for</code> attribute.
3. If you don't want to have a visible label, use the <code>title</code> attribute in the <code>&lt;input&gt;</code> element, providing a meaningful title.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG22/Techniques/html/H65)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
