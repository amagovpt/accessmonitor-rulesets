---
Title: Inappropriate HTML Justified Text Check
id: justif_txt_01
type: "decr"
elem: "all"
test: "justifiedTxt"
score: 5
level: "AAA"
trust: "1"
top: 1
steps: 1
ref: "F88"
scs: "1.4.8"
dis: "15152"
result: "failed"
---

# Inappropriate HTML Justified Text Check

## Description

The "Inappropriate HTML Justified Text Check" evaluates whether there is any block of text aligned using full justification (i.e., flush with both left and right margins).

## Example outcome

I found <mark>1</mark> instance using justified text via HTML.

## Impact

- **Visual Impairments:** People with visual impairments may rely on consistent spacing for readability, and irregular justification can reduce effectiveness of assistive tech.
- **Cognitive Disabilities:** Users with learning or attention challenges may struggle to track text due to uneven word spacing.
- **Dyslexia:** Irregular spacing between words can cause visual distortion and "rivers" of white space, making reading much more difficult.
- **Elderly:** Age-related visual impairments can compound the challenges of reading justified text.

## Fixes

To address text inappropriately justified:

1. Locate the inappropriately justified block of text.
2. Replace both inline attributes <code>align="justify"</code> or <code>style="text-align: justify;"</code> by <code>style="text-align: left;"</code>.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)
- [WCAG 2.2 Techniques: Technique F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F88)
- [WebAIM: Text/Typographical Layout](https://webaim.org/techniques/textlayout/)
