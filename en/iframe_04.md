---
Title: Iframe Negative Tabindex Attribute Check
id: iframe_04
type: "true"
elem: "all"
test: "iframeNegTabIndex"
score: 10
level: "A"
trust: "1"
ref: "G202"
scs: "2.1.1"
dis: "43353"
result: "passed"
---

# Iframe Negative Tabindex Attribute Check

## Description

The "Iframe Negative Tabindex Attribute Check" evaluates whether all <code>&lt;iframe&gt;</code> elements with a <code>tabindex="-1"</code> attribute (which removes it from the tab order) do not contain interactive elements.

## Example outcome

I noticed that there are no interactive elements inside <code>&lt;iframe&gt;</code> elements with a negative <code>tabindex</code> attribute.

## Impact

- **Visual Impairments:** Screen readers may not reach the content if not programmatically reachable.
- **Motor Impairments:** Users can't tab into the iframe to access forms, buttons, etc.
- **Cognitive Disabilities:** Individuals with cognitive disabilities can’t complete tasks (like submitting a form) if navigation is blocked.

## Fixes

To address <code>&lt;iframe&gt;</code> elements with an inappropriate negative <code>tabindex</code> attribute:

1. Locate the <code>&lt;iframe&gt;</code> element with an inappropriate negative <code>tabindex</code> attribute.
2. Remove the negative <code>tabindex</code> from the element.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [WCAG 2.2 Techniques: Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)
- [WebAIM: Creating Accessible Frames and Iframes](https://webaim.org/techniques/frames/)
