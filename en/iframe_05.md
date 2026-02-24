---
Title: Inappropriate Iframe Negative Tabindex Attribute Check
id: iframe_05
type: "fals"
elem: "all"
test: "iframeNegTabIndexNot"
score: 4
level: "A"
trust: "1"
top: 1
steps: 1
ref: "G202"
scs: "2.1.1"
dis: "43353"
result: "failed"
---

# Inappropriate Iframe Negative Tabindex Attribute Check

## Description

The "Inappropriate Iframe Negative Tabindex Attribute Check" evaluates whether any <code>&lt;iframe&gt;</code> element with a <code>tabindex="-1"</code> attribute (which removes it from the tab order) contains an interactive element.

## Example outcome

I identified <mark>1</mark> <code>&lt;iframe&gt;</code> element with a negative <code>tabindex</code> that includes interactive elements.

## Impact

- **Visual Impairments:** Screen reader users may not be able to access iframe content.
- **Motor Impairments:** Users can’t tab into the iframe to interact with buttons/forms.

## Fixes

To address <code>&lt;iframe&gt;</code> elements with an inappropriate negative <code>tabindex</code> attribute:

1. Locate the <code>&lt;iframe&gt;</code> element with an inappropriate negative <code>tabindex</code> attribute.
2. Remove the negative <code>tabindex</code> from the element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2 Techniques: Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)
