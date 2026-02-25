---
Title: Inappropriate Delaying Refresh Meta Element Check
id: meta_04
type: "fals"
elem: "all"
test: "metaRefreshNot"
score: 3
level: "AAA"
trust: "1"
ref: "G110"
scs: "2.2.4"
dis: "43353"
result: "failed"
---

# Inappropriate Delaying Refresh Meta Element Check

## Description

The "Inappropriate Delaying Refresh Meta Element Check" evaluates whether there is any <code>&lt;meta http-equiv="refresh"&gt;</code> tag that triggers an automatic page reload after a delay (e.g., after 5 or 10 seconds).

## Example outcome

I identified <mark>1</mark> <code>meta</code> refresh that creates a delayed page reload.

## Impact

- **Visual Impairments:** Page reloads can interrupt navigation or content being read aloud.
- **Motor Impairments:** Insufficient time to interact or respond before page reloads may prevent users with motor impairments from navigatng as desired.
- **Cognitive Disabilities:** Sudden page changes can disorient or interrupt comprehension.
- **Seizure Disorders:** Flashing content changes or unexpected behavior may act as a trigger for people with seizure disorders.

## Fixes

To address inappropriate auto-refresh <code>&lt;meta&gt;</code> elements:

1. Locate the <code>&lt;meta&gt;</code> element.
2. Replace it by a manual button instead of auto-refreshing.
3. If you wish to keep the auto-refresh, make sure it is immediate (i.e., with no delay) and provide information to users, allowing them to control it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.2.4](https://www.w3.org/WAI/WCAG22/Understanding/interruptions)
- [WCAG 2.2 Techniques: Technique G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG22/Techniques/general/G110)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
