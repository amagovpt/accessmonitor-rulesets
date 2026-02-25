---
Title: Inappropriate or Missing Frame Title
id: frame_01
type: "prop"
elem: "frame"
test: "frameTitleNo"
score: 3
level: "A"
trust: "1"
ref: "H64"
scs: "2.4.1,4.1.2"
dis: "53222"
result: "failed"
---

# Inappropriate or Missing Frame Title

## Description

The "Inappropriate or Missing Frame Title" evaluates whether there is any <code>&lt;frame&gt;</code> or <code>&lt;iframe&gt;</code> element without or with an empty <code>title</code> attribute.

## Example outcome

I identified <mark>1</mark> frame element without the <code>title</code> attribute or with a null one.

## Impact

- **Visual Impairments:** Screen readers will announce a generic label like “frame” or “unknown,” making it unclear what the frame contains. This confusion can severely impact navigation, especially when multiple frames exist.
- **Motor Impairments:** Keyboard users navigating through frame-based layouts rely on correct labeling to make decisions without visual context.
- **Cognitive Disabilities:** If using an assistive tool with audible or visual overlays, vague or missing labels can increase cognitive load. Disorientation increases when content is nested and unlabeled.

## Fixes

To address inappropriate or missing frame titles:

1. Locate the frame element without or with the inappropriate <code>title</code> attribute.
2. Add the <code>title</code> attribute to the frame element, providing a meaningful and concise title, if missing.
3. Edit the <code>title</code> attribute of the frame, providing a meaningful and concise title, if inappropriately defined.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique H64: Using the title attribute of the iframe element](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
