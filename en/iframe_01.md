---
Title: Missing Iframe Title Check
id: iframe_01
type: "prop"
elem: "iframe"
test: "iframeTitleNo"
score: 3
level: "A"
trust: "1"
ref: "H64"
scs: "2.4.1,4.1.2"
dis: "53222"
result: "failed"
---

# Missing Iframe Title Check

## Description

The "Missing Iframe Title Check" evaluates whether there is any <code>&lt;iframe&gt;</code> element without the <code>title</code> attribute.

## Example outcome

I found <mark>1</mark> <code>&lt;iframe&gt;</code> element without <code>title</code>.

## Impact

- **Visual Impairments:** Screen readers cannot describe iframe content, leading to confusion
- **Motor Impairments:** If using keyboard nav or switch control, they can't decide to skip or enter the iframe content easily
- **Cognitive Disabilities:** Lack of clear labeling makes it harder to understand content structure

## Fixes

To address <code>&lt;iframe&gt;</code> elements without a <code>title</code> attribute:

1. Locate the <code>&lt;iframe&gt;</code> element without a title.
2. Add the <code>title</code> attribute providing an accurate description of the embedded content.
3. Make sure the <code>title</code> is unique among other <code>&lt;iframe&gt;</code> elements in the same page unless both point to the same source.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [WCAG 2.2: Understanding Success Criteria 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WCAG 2.2 Techniques: Technique H64: Using the title attribute of the iframe element](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)
