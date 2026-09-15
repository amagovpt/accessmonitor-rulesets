# @a12e/accessmonitor-rulesets

## 2.0.0

### Major Changes

- 7c036cf: ### Breaking Changes
  - Overhauled evaluation pipeline and replaced legacy report formats with the new `AuditReport` contract.
  - Implemented an end-to-end processing pipeline to extract metadata, calculate metrics, enrich HTML, and execute scoring.
  - Updated `generateScore` signature to accept `(results, elementCounters)` instead of legacy payload objects.
  - Removed legacy files (`mapper.ts`, `scoring.ts`) in favor of modular domain-driven submodules.

## 1.1.0

### Minor Changes

- bec96a9: feat(engine): core ruleset evaluation mapping engine and CI/CD automation

## 1.0.4

### Patch Changes

- 35ce8b2: Add accessibility check for ambiguous label positioning and related metadata

## 1.0.3

### Patch Changes

- c035230: Remove deprecated test result and associated keyand type and fixed sc…

## 1.0.2

### Patch Changes

- c5cd4ce: Unifies color mapping by generating testColors directly from the ruleset, ensuring data consistency and removing manual maintenance.

## 1.0.1

### Patch Changes

- 8c1cb50: Refactor: migrate to automated OIDC publishing and provenance.
