---
Title: Inappropriate Label Element Check
id: label_02
type: "decr"
elem: "all"
test: "labelPosNo"
score: 3
level: "A"
trust: "0.9"
top: 1
steps: 1
ref: "G162"
scs: "1.3.1,3.3.2"
dis: "43353"
result: "failed"
---

# Inappropriate Label Element Check

## Description

The "Inappropriate Label Element Check" evaluates whether there is any <code>&lt;label&gt;</code> element that is either not visible to users or incorrectly positioned, making it unclear what field it refers to.

## Example outcome

I identified <mark>1</mark> <code>&lt;label&gt;</code> element that is not visible or is incorrectly positioned.

## Impact

- **Visual Impairments:** Users with visual impairments may hear the input field without a meaningful label, making it unclear what they’re filling in (especially in forms with multiple fields like “First name” and “Last name”).
- **Cognitive Disabilities:** Without a clearly visible and positioned label, the form loses critical context. This can increase confusion and cause form abandonment.

## Fixes

To address inappropriate <code>&lt;label&gt;</code> elements:

1. Locate the invisible or is incorrectly positioned <code>&lt;label&gt;</code> element.
2. Verify whether it has the CSS code <code>display: none;</code> or <code>visibility: hidden;</code> and remove it to make it visible.
3. Verify the label placement, making sure to place it before the <code>&lt;input&gt;</code> element it labels.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [WCAG 2.2 Techniques: Technique G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG22/Techniques/general/G162)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
