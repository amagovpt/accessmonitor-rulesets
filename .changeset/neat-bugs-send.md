---
"@a12e/accessmonitor-rulesets": major
---

### Breaking Changes
- Overhauled evaluation pipeline and replaced legacy report formats with the new `AuditReport` contract.
- Implemented an end-to-end processing pipeline to extract metadata, calculate metrics, enrich HTML, and execute scoring.
- Updated `generateScore` signature to accept `(results, elementCounters)` instead of legacy payload objects.
- Removed legacy files (`mapper.ts`, `scoring.ts`) in favor of modular domain-driven submodules.
