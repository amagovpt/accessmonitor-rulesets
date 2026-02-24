---
Title: Visual Content Accessible Alternative Check
id: video_02
type: "true"
elem: "all"
test: "videoVisual"
score: 10
level: "A"
trust: "1"
ref: "G8"
scs: "1.2.3"
dis: "43353"
result: "warning"
---

# Visual Content Accessible Alternative Check

## Description

The "Visual Content Accessible Alternative Check" evaluates whether <code>&lt;video&gt;</mark> elements that present visual-only or visually significant content (like action, facial expressions, or charts) include an accessible alternative.

## Example outcome

I noticed that there is <mark>1</mark> <code>&lt;video&gt;</mark> element with visual content that must have an accessible alternative.

## Impact

- **Visual Impairments:** Visually impaired individuals may miss key visual content such as actions, gestures, charts, etc.
- **Cognitive Disabilities:** Users with cognitive disabilities may rely on clear audio description to process visual sequences.

## Fixes

To address missing visual content accessible alternatives:

1. Locate the inappropriate <code>&lt;video&gt;</mark> element.
2. Provide either an audio description or a text transcript.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.2.3](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded)
- [WCAG 2.2 Techniques: Technique G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
