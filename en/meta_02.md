---
Title: Inappropriate Redirect Meta Element Check
id: meta_02
type: "true"
elem: "all"
test: "metaRedir"
score: 1
level: "A"
trust: "1"
ref: "F40"
scs: "2.2.1,2.2.4"
dis: "43353"
result: "warning"
---

# Inappropriate Redirect Meta Element Check

## Description

The "Inappropriate Redirect Meta Element Check" evaluates whether there is any usage of a <code>&lt;meta http-equiv="refresh"&gt;</code> tag configured to immediately redirect the user to another page.

## Example outcome

I observed that the webpage is redirected automatically through the <code>&lt;meta http-equiv=\"redirect\"&gt;</code> element.

## Impact

- **Visual Impairments:** Screen readers may not even start reading the page before the redirection happens. Users lose access to contextual content or page announcements.
- **Motor Impairments:** Delays in physical input may prevent interaction before the redirect. Users may not be able to navigate away from the destination page once redirected.
- **Cognitive Disabilities:** Sudden, unexplained redirection causes disorientation and confusion. This may create the perception of a broken or unreliable interface.

## Fixes

To address inappropriate auto-redirect <code>&lt;meta&gt;</code> elements:

1. Locate the <code>&lt;meta&gt;</code> element.
2. Replace it by a manual button instead of auto-redirecting.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable)
- [WCAG 2.2: Understanding Success Criteria 2.2.4](https://www.w3.org/WAI/WCAG22/Understanding/interruptions)
- [WCAG 2.2 Techniques: Technique F40: Failure due to using meta redirect with a time limit](https://www.w3.org/WAI/WCAG22/Techniques/failures/F40)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
