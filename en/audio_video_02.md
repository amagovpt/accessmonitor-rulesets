---
Title: Automatic Audio Content Check
id: audio_video_02
type: "fals"
elem: "all"
test: "audioAutoPlay"
score: 1
level: "A"
trust: "1"
ref: "80f0bf"
scs: "1.4.2"
dis: "43353"
result: "failed"
---

# Automatic Audio Content Check

## Description

The "Automatic Audio Content Check" evaluates whether any audio or video elements on a web page are set to start playing automatically without user initiation.

## Example outcome

I found <mark>1</mark> <code>&lt;audio&gt;</code> or <code>&lt;video&gt;</code> element that plays automatically.

## Impact

- **Visual Impairments:** For blind users relying on screen readers, auto-playing media can override important screen reader feedback or instructions.
- **Motor Impairments:** People who rely on keyboard navigation or assistive devices may find it difficult to stop auto-playing media if controls are not easily accessible.
- **Cognitive Disabilities:** Auto-play media can be disorienting and confusing, particularly for those with attention deficits or memory impairments. It can make it harder for these users to focus on the content they are trying to consume, especially if it interrupts other cognitive tasks.
- **Auditory Disorders:** Auto-play media may overwhelm screen readers and assistive technologies, especially when the user is relying on captions or audio descriptions.

## Fixes

To address automatically starting audio or video content:

1. Locate the audio/video element.
2. Remove the <code>autoplay</code> attribute from the element.
3. Ensure that all audio and video elements have proper controls like play, pause, and volume.
4. If the auto-play behavior is necessary for some reason (e.g., a feature or marketing), ensure that users can easily disable it or that it doesn’t interfere with other interactions. For example, use a muted autoplay where applicable, but always allow user control to resume or unmute.

## Resources

- [WCAG 2.2: Understanding Success Criteria 1.4.2](https://www.w3.org/WAI/WCAG22/Understanding/audio-control)
- [ACT Rules: Audio or video element avoids automatically playing audio](https://www.w3.org/WAI/standards-guidelines/act/rules/80f0bf/proposed/)
