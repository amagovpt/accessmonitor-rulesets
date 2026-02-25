---
Title: Inappropriate Zoomed Text Visibility Check
id: css_02
type: "true"
elem: "all"
test: "overflow"
score: 10
level: "AA"
trust: "1"
ref: "59br37"
scs: "1.4.4"
dis: "43353"
result: "warning"
---

# Inappropriate Zoomed Text Visibility Check

## Description

The "Inappropriate Zoomed Text Visibility Check" evaluates whether any elements using CSS overflow properties (e.g., hidden, scroll, auto) do not cause essential text to be clipped or hidden when the page is zoomed up to 200%.

## Example outcome

I found <mark>1</mark> text node with a CSS <code>overflow</code> property that might prevent a user from seeing the text when the page is zoomed.

## Impact

- **Visual Impairments:** Visually impaired users often zoom pages to read text clearly. If overflow clips content, it may become unreadable.
- **Motor Impairments:** Users with motor impairments, who cannot pan precisely with a mouse or touch, may miss content if it’s hidden off-screen.
- **Elderly:** Elder people may have reduced contrast sensitivity and rely on magnification to interpret content.

## Fixes

To address inappropriate text visibility on zoom:

1. Avoid using <code>overflow</code>: <code>hidden</code> on containers with readable content, especially when widths/heights are fixed.
2. Instead of clipping content, let it adapt or wrap.
3. Allow content to grow as needed to accommodate zoom.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [ACT Rules: Zoomed text node is not clipped with CSS overflow](https://www.w3.org/WAI/standards-guidelines/act/rules/59br37/)
- [WebAIM: Accessible CSS](https://webaim.org/techniques/css/)
