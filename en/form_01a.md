---
Title: Form Submit Button Check
id: form_01a
type: "fals"
elem: "form"
test: "formSubmit"
score: 10
level: "A"
trust: "1"
ref: "H32"
scs: "3.2.2"
dis: "21211"
result: "passed"
---

# Form Submit Button Check

## Description

The "Form Submit Button Check" evaluates whether all HTML <code>&lt;form&gt;</code> elements include a control (such as a submit button) that allows users to submit their input.

## Example outcome

I observed that <mark>all</mark> the forms have a button to submit the data to the server.

## Impact

- **Visual Impairments:** Screen readers rely on proper form controls to detect form functionality. Without a submit button, users may not realize how to complete the interaction.
- **Motor Impairments:** Users relying on keyboard navigation or switch devices can't submit forms without a clearly defined submit control.
- **Cognitive Disabilities:** Users may become confused if there's no clear way to proceed. Expecting users to understand that pressing "Enter" submits a form (if it even does) is a cognitive burden.
- **Mobile:** Lack of visible UI elements can make interactions impossible on touch screens.

## Fixes

To address missing submit buttons on forms:

1. Locate the <code>&lt;form&gt;</code> element missing a submit button.
2. Add a valid submit control (e.g., <doce>&lt;button type="submit"&gt;</code> or <code>&lt;input type="submit" value="Send"&gt;</code>).

## Resources

- [WCAG 2.2: Understanding Success Criteria 3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input)
- [WCAG 2.2 Techniques: Technique H32: Providing submit buttons](https://www.w3.org/WAI/WCAG22/Techniques/html/H32)
- [WebAIM: Creating Accessible Forms](https://webaim.org/techniques/forms/)
