---
Title: Missing Form Submit Button Check
id: form_01b
type: "prop"
elem: "form"
test: "formSubmitNo"
score: 3
level: "A"
trust: "0.9"
ref: "H32"
scs: "3.2.2"
dis: "21211"
result: "failed"
---

# Missing Form Submit Button Check

## Description

The "Missing Form's Submit Button Check" evaluates whether there is any <code>&lt;form&gt;</code> element Without a control (such as a submit button) that allows users to submit their input.

## Example outcome

I identified <mark>1</mark> form without the button to submit the data to the server.

## Impact

- **Visual Impairments:** Screen readers will not announce a submit action, leaving users unaware of how to complete the task. They may tab through all fields and reach the end of the form with no actionable element.
- **Motor Impairments:** Users relying on keyboard navigation, voice commands, or switch devices cannot use "Enter key" as a reliable substitute. Forms without a submit button are likely inaccessible to users with motor impairments.
- **Cognitive Disabilities:** Users may not understand how to submit the form, leading to abandonment or confusion. Having no submit button increases frustration for users with memory, attention, or sequencing challenges.
- **Mobile:** Visual cues are essential; the absence of a button may prevent users from discovering how to act on the form, especially on small screens.

## Fixes

To address missing submit buttons on forms:

1. Locate the <code>&lt;form&gt;</code> element missing a submit button.
2. Add a valid submit control (e.g., <doce>&lt;button type="submit"&gt;</code> or <code>&lt;input type="submit" value="Send"&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input)
- [WCAG 2.2 Techniques: Technique H32: Providing submit buttons](https://www.w3.org/WAI/WCAG22/Techniques/html/H32)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)

