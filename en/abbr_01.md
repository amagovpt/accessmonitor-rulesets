---
Title: Missing Abbreviation Extension Check
id: abbr_01
type: "true"
elem: "all"
test: "abbrNo"
score: 5
level: "AAA"
trust: "1"
ref: "G102"
scs: "3.1.4"
dis: "42153"
result: "failed"
---

# Missing Abbreviation Extension Check

## Description

The "Missing Abbreviation Extension Check" evaluates whether all abbreviations, acronyms, or initialisms used in the content include their expanded or full form upon first use.

## Example outcome

I found <mark>1</mark> abbreviation in which the expansion was forgotten.

## Impact

- **Visual Impairments:** Users with visual impairments using a screen reader, will just hear the abbreviation as-is (e.g., "HTML" as "H-T-M-L") without clarification of the meaning.
- **Motor Impairments:** People with motor impairments might not recall what a previously stated abbreviation means.
- **Cognitive Disabilities:** A person with cognitive disabilities may struggle to interpret abbreviations, especially in academic or technical contexts.

## Fixes

To address missing abbreviation expansion:

1. Identify the abbreviation that is missing an expansion.
2. Add the expansion using the <code>&lt;abbr&gt;</code> element with a title attribute (e.g., <code>&lt;abbr title="World Health Organization"&gt;WHO&lt;/abbr&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.1.4](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html)
- [WCAG 2.2 Techniques: Technique G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG22/Techniques/general/G102)
- [WebAIM: Writing Clearly and Simply](https://webaim.org/techniques/writing/)
