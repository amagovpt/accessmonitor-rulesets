---
Title: Refresh Meta Element Check
id: meta_03
type: "true"
elem: "all"
test: "metaRefresh"
score: 10
level: "AAA"
trust: "1"
ref: "G110"
scs: "2.2.4"
dis: "43353"
result: "passed"
---

# Refresh Meta Element Check

## Description

The "Refresh Meta Element Check" evaluates whether all <code>&lt;meta http-equiv="refresh"&gt;</code> elements that automatically refresh the page do it without a set time delay.

## Example outcome

I observed that <mark>no</mark> <code>meta</code> refresh creates a delayed page reload.

## Impact

- **Visual Impairments:** Mid-action refreshes may interrupt screen readers.
- **Motor Impairments:** Users with motor impairments face difficulties re-navigating after automatic refresh due to slow interaction speed.
- **Cognitive Disabilities:** Unexpected refresh may leed to confusion or frustration. Individuals with cognitive disabilities may lose place or context.
- **Seizure Disorders:** Rapid changes on auto-refresh could trigger neurological responses.

## Fixes

To address inappropriate auto-refresh <code>&lt;meta&gt;</code> elements:

1. Locate the <code>&lt;meta&gt;</code> element.
2. Replace it by a manual button instead of auto-refreshing.
3. If you wish to keep the auto-refresh, make sure it is immediate (i.e., with no delay) and provide information to users, allowing them to control it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.2.4](https://www.w3.org/WAI/WCAG22/Understanding/interruptions)
- [WCAG 2.2 Techniques: Technique G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG22/Techniques/general/G110)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
