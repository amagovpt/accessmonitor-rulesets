import { TestKey, TestName } from "../types";

export type Verdict = 'passed' | 'warning' | 'failed' | 'inapplicable';

export interface OutcomeMetadata {
  passed: number;
  warning: number;
  failed: number;
  inapplicable: number;
}

export interface TestResult {
  verdict: Verdict;
  description: string;
  resultCode: string;
  pointer?: string;
  htmlCode?: string;
  attributes?: string | Record<string, any>;
  accessibleName?: string;
}

export interface Assertion {
  name: string;
  code: string;
  mapping?: string;
  description: string;
  metadata: OutcomeMetadata & {
    target: any;
    outcome: Verdict;
    description: string;
    url?: string;
    'success-criteria'?: Array<{
      name: string;
      level: string;
      principle: string;
      url: string;
    }>;
  };
  results: TestResult[];
}
export type ModuleSectionType = 'act-rules' | 'wcag-techniques' | 'best-practices';
export interface ModuleSection {
  type: ModuleSectionType;
  metadata: OutcomeMetadata;
  assertions: Record<QualWebRuleID, Assertion>;
}

export interface QualwebReport {
  type: string;
  system: {
    name: string;
    version: string;
    date: string;
    url: {  
        inputUrl: string,
        protocol: string;
        domainName: string;
        domain: string;
        uri: string;
        completeUrl: string; 
    };
    page: {
      viewport: { 
       mobile: boolean;
       landscape: boolean;
       userAgent: string;
        resolution: { width: number; height: number };      
         };
      dom: { title: string; html: string; elementCount: number };
    };
  };
  metadata: OutcomeMetadata;
  modules: {
    'act-rules'?: ModuleSection;
    'wcag-techniques'?: ModuleSection;
    'best-practices'?: ModuleSection;
    counter?: {
      type: string;
      data: {
        roles: Record<string, number>;
        tags: Record<string, number>;
      };
    };
  };
}

export type ACTRuleID = `QW-ACT-R${number}`;
export type WCAGTechniqueID = `QW-WCAG-T${number}`;
export type BPRuleID = `QW-BP${number}`;
export type FailedResultCode = `F${number}`;
export type PassedResultCode = `P${number}`;
export type WarningResultCode = `W${number}`;
export type ResultCode = FailedResultCode | PassedResultCode | WarningResultCode;
export type QualWebRuleID = ACTRuleID | WCAGTechniqueID | BPRuleID;
export type RecordType = 'occurrence' | 'binary';
export type QualWebKeyTranslator = { key: TestKey; name: TestName, type: RecordType };