import { QualwebReport } from "../types/qualweb";


export interface PageMetadata {
  title: string;
  url: string;
  evaluatedAt: string;
}
export interface DomTelemetry {
  totalHtmlTags: number;
  tagCounter: Record<string, number>;
  elementCounters: Record<string, number>;
  roles: Record<string, number>;
}
export interface ExtractedEvaluationContext {
  metadata: PageMetadata;
  telemetry: DomTelemetry;
}

/*
 * Utility functions for extracting and calculating count metadata from Qualweb reports
*/
export function calculateTotalElements(dictionary: Record<string, number>): number {
  if (!dictionary || typeof dictionary !== "object") {
    return 0;
  }
  
  return Object.values(dictionary).reduce((sum, count) => sum + (count ?? 0), 0);
}

/*
 * Parses a raw date string safely into an ISO 8601 UTC string.
 * Falls back to the current date if the input is invalid or missing.
*/
function parseSafeIsoDate(rawDate?: string): string {
  if (!rawDate) return new Date().toISOString();
  const parsed = new Date(rawDate);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

/**
 * Calculates the total sum of instances from a frequency map.
 */
function calculateFrequencySum(frequencies: Record<string, number>): number {
  return Object.values(frequencies).reduce((acc, count) => acc + count, 0);
}
/**
 * Extracts evaluation context including page metadata and DOM telemetry from a Qualweb report.
 */
export function extractEvaluationContext(report: QualwebReport): ExtractedEvaluationContext {
  const system = report?.system;
  const pageDom = system?.page?.dom;
  const counterData = report?.modules?.counter?.data;

  const tags = counterData?.tags ?? {};
  const roles = counterData?.roles ?? {};

  const totalHtmlTags = Object.keys(tags).length > 0 
    ? calculateFrequencySum(tags) 
    : (pageDom?.elementCount ?? 0);

  const metadata: PageMetadata = {
    title: pageDom?.title ?? '',
    url: system?.url?.completeUrl ?? system?.url?.inputUrl ?? '',
    evaluatedAt: parseSafeIsoDate(system?.date),
  };

  const telemetry: DomTelemetry = {
    totalHtmlTags,
    tagCounter: tags,
    elementCounters: {
      totalElements: pageDom?.elementCount ?? totalHtmlTags,
    },
    roles,
  };

  return { metadata, telemetry };
}