---
Title: Inappropriate Refresh Meta Element Check
id: meta_01
type: "true"
elem: "all"
test: "metaRefresh"
score: 1
level: "A"
trust: "1"
ref: "F41"
scs: "2.2.1,2.2.4,3.2.5"
dis: "43353"
result: "warning"
---

# Inappropriate Refresh Meta Element Check

## Description

The "Inappropriate Refresh Meta Element Check" evaluates whether there is any <code>&lt;meta http-equiv="refresh"&gt;</code> element used to trigger automatic page refresh or redirection after a specified time.

## Example outcome

I observed that the webpage reloads automatically through the <code>&lt;meta http-equiv=\"refresh\"&gt;</code> element.

## Impact

- **Visual Impairments:** Screen reader users may not be able to read or interact with content before it's refreshed. May not hear the full content before the page changes.
- **Motor Impairments:** If navigating with switches, voice, or other AT, users may be unable to act quickly enough before the change occurs.
- **Cognitive Disabilities:** People with cognitive disabilities may lose focus or become disoriented when a page reloads or redirects without warning. They can lose progress on forms or lose track of context.

## Fixes

To address inappropriate auto-refresh <code>&lt;meta&gt;</code> elements:

1. Locate the <code>&lt;meta&gt;</code> element.
2. Replace it by a manual button instead of auto-refreshing.
3. If you wish to keep the auto-refresh, make sure it is immediate (i.e., with no delay) and provide information to users, allowing them to control it.

## Resources

- [WCAG 2.2: Understanding Success Criteria 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable)
- [WCAG 2.2: Understanding Success Criteria 2.2.4](https://www.w3.org/WAI/WCAG22/Understanding/interruptions)
- [WCAG 2.2: Understanding Success Criteria 3.2.5](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request)
- [WCAG 2.2 Techniques: Technique F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page](https://www.w3.org/WAI/WCAG22/Techniques/failures/F41)
- [WebAIM: Accessible JavaScript](https://webaim.org/techniques/javascript/)
