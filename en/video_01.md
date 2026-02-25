---
Title: Audio Accessible Alternative Check
id: video_01
type: "true"
elem: "all"
test: "videoAudit"
score: 10
level: "A"
trust: "1"
ref: "G87"
scs: "1.2.2"
dis: "43353"
result: "warning"
---

# Audio Accessible Alternative Check

## Description

The "Audio Accessible Alternative Check" evaluates whether there are <code>&lt;video&gt;</mark> elements containing audio content (e.g., speech or meaningful sounds) and whether they provide an accessible text alternative, typically in the form of captions.

## Example outcome

I noticed that there is <mark>1</mark> <code>&lt;video&gt;</mark> element with audio content that must have an accessible alternative.

## Impact

- **Auditory Disorders:** Without captions, users with auditory disorders cannot access spoken content or key sounds.
- **Non-Native Speakers:** Captions support language comprehension and clarity.

## Fixes

To address missing audio accessible alternatives:

1. Locate the inappropriate <code>&lt;video&gt;</mark> element.
2. Provide captions for the audio (e.g., adding a <code>&lt;track&gt;</mark> element within the <code>&lt;video&gt;</mark> tag).

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.2.2](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [WCAG 2.2 Techniques: Technique G87: Providing closed captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
