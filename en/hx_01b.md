---
Title: Inappropriate Headings Check
id: hx_01b
type: "true"
elem: "all"
test: "hx"
score: 10
level: "AAA"
trust: "0.9"
ref: "G141"
scs: "1.3.1,2.4.10"
dis: "54343"
result: "warning"
---

# Inappropriate Headings Check

## Description

The "Inappropriate Headings Check" evaluates whether the number of headings on a page is sufficient to represent the page’s content structure. 

## Example outcome

I found <mark>1</mark> heading on the page.

## Impact

- **Visual Impairments:** Screen reader users may struggle to understand the page's layout or jump to key sections without multiple semantic headings.
- **Motor Impairments:** Users relying on keyboard shortcuts to jump between headings will have only one anchor point, making navigation inefficient.
- **Cognitive Disabilities:** A single heading may not break the content into manageable parts, leading to confusion or overwhelm.
- **Neurodivergent Disorders:** Poorly segmented content increases mental effort and reduces readability for users with ADHD or processing difficulties.

## Fixes

To address inappropriate headings:

1. Review the page content to determine natural divisions (e.g., different sections).
2. Create a heading for each of the divisions you managed to identify.
3. Ensure a clear and hierarchical use of heading levels.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [WCAG 2.2: Understanding Success Criteria 2.4.10](https://www.w3.org/WAI/WCAG22/Understanding/section-headings)
- [WCAG 2.2 Techniques: Technique G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G141)
- [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
