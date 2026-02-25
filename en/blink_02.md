---
Title: Blinking Content Check
id: blink_02
type: "true"
elem: "all"
test: "cssBlink"
score: 1
level: "A"
trust: "0.9"
ref: "F4"
scs: "2.2.2"
dis: "15152"
result: "failed"
---

# Blinking Content Check

## Description

The "Blinking Content Check" evaluates whether there is any blinking visual effects, caused by the deprecated <code>&lt;blink&gt;</code> HTML tag or the CSS code <code>text-decoration: blink</code>.

## Example outcome

I found <mark>1</mark> <code>&lt;blink&gt;</code> value in the CSS which causes the blinking of parts of the content.

## Impact

- **Cognitive Disabilities:** Blinking distracts from comprehension, making the experience mentally taxing or confusing for people with cognitive disabilities.
- **ADHD/Attention-Related Disorders:** Blinking draws visual focus away from primary content. Persistent animation can make it difficult to concentrate or read surrounding content.
- **Autism/Sensory Processig Disorders:** Rapid or unexpected visual changes can be overwhelming or cause sensory discomfort. It can trigger anxiety or a strong adverse reaction.
- **Seizure Disorders:** Blinking or flashing content, even at low frequencies, can pose a risk to users with seizure disorders if it crosses thresholds. Even at sub-threshold frequencies, blinking can cause discomfort or anxiety.

## Fixes

To address blinking content:

1. Locate any <code>&lt;blink&gt;</code> tags.
2. Remove them.
3. Locate any <code>text-decoration: blink</code> in CSS.
4. Remove or replace the code.
5. If animation is necessary, use subtle transitions and provide a mechanism to pause or stop the animation.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
- [WCAG 2.2 Techniques: Technique F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds](https://www.w3.org/WAI/WCAG22/Techniques/failures/F4)
- [WebAIM: Creating Accessible Flash Content](https://webaim.org/techniques/flash/)
