import { incrementElement, addResult, registerNode, markPresent, incrementMetric, markPresentMetric } from "../assertion.handler";
import { QualWebRuleID,Assertion } from "../types/qualweb";

export interface ProcessingContext {
  elements: Record<string, number>;
  results: Record<string, string>;
  nodes: Record<string, unknown[]>;
  metrics: Record<string, number>;
}

export type CustomRuleHandler = (assertion: Assertion, ctx: ProcessingContext) => void;


export const CUSTOM_HANDLERS: Partial<Record<QualWebRuleID, CustomRuleHandler>> = {
  // ACT Rules - Custom Handlers
  "QW-ACT-R1": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: ruleResults = [] } = assertion;

    if (metadata.outcome === "failed") {
      const noTitle = ruleResults.filter((r) => r.resultCode === "F1");
      if (noTitle.length !== 0) {
        incrementElement(elements, "titleNo", noTitle.length);
        incrementMetric(metrics, "title_02", noTitle.length);
        addResult(results, "title_02");
        registerNode(nodes, "titleNo");
      }

      const titleEmpty = ruleResults.filter((r) => r.resultCode === "F2");
      if (titleEmpty.length !== 0) {
        incrementElement(elements, "titleNull", titleEmpty.length);
        incrementMetric(metrics, "title_03", titleEmpty.length);
        addResult(results, "title_03");
        registerNode(nodes, "titleNull", titleEmpty);
      }
    } else if (metadata.outcome === "passed") {
      incrementElement(elements, "titleOk", metadata.passed);
      incrementMetric(metrics, "title_06", metadata.passed);
      addResult(results, "title_06");
      const passedItems = ruleResults.filter((r) => r.verdict === "passed");
      registerNode(nodes, "titleOk", passedItems);
    }
  },

  "QW-ACT-R4": (assertion, { elements, results, nodes, metrics }) => {
    const { results: ruleResults = [] } = assertion;

    const failRefresh = ruleResults.filter((r) => r.resultCode === "F1");
    if (failRefresh.length !== 0) {
      incrementElement(elements, "metaRefresh", failRefresh.length);
      incrementMetric(metrics, "meta_01", failRefresh.length);
      addResult(results, "meta_01");
      registerNode(nodes, "metaRefresh", failRefresh);
    }

    const failRedirect = ruleResults.filter((r) => r.resultCode === "F2");
    if (failRedirect.length !== 0) {
      incrementElement(elements, "metaRedir", failRedirect.length);
      incrementMetric(metrics, "meta_02", failRedirect.length);
      addResult(results, "meta_02");
      registerNode(nodes, "metaRedir", failRedirect);
    }
  },

  "QW-ACT-R6": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: ruleResults = [] } = assertion;

    if (metadata.outcome === "passed") {
      markPresent(elements, "inpImgAltYes");
      markPresentMetric(metrics, "inp_img_01a");
      addResult(results, "inp_img_01a");
      const passedItems = ruleResults.filter((r) => r.verdict === "passed");
      registerNode(nodes, "inpImgAltYes", passedItems);
    } else if (metadata.outcome === "failed") {
      incrementElement(elements, "inpImgAltNo", metadata.failed);
      incrementMetric(metrics, "inp_img_01b", metadata.failed);
      addResult(results, "inp_img_01b");

      const failedItems = ruleResults.filter((r) => r.verdict === "failed");
      registerNode(nodes, "inpImgAltNo", failedItems);

      const applicableCount = ruleResults.filter((r) => r.verdict !== "inapplicable").length;
      elements["inp_img_01b"] = applicableCount;
    }
  },
  "QW-ACT-R17": (assertion, { elements, results, nodes,metrics}) => {
    const { metadata, results: ruleResults = [] } = assertion;

    incrementElement(elements, "img", ruleResults.length);

    if (metadata.outcome === "passed") {
      markPresentMetric(metrics, "img_01a");
      markPresent(elements, "imgAlt");
      addResult(results, "img_01a");

      const passedItems = ruleResults.filter((r) => r.verdict === "passed");
      registerNode(nodes, "imgAlt", passedItems);
    } else if (metadata.outcome === "failed") {
      incrementElement(elements, "imgAltNo", metadata.failed);
      incrementMetric(metrics, "img_01b", metadata.failed);
      addResult(results, "img_01b");

      const failedItems = ruleResults.filter((r) => r.verdict === "failed");
      registerNode(nodes, "imgAltNo", failedItems);
    }

    const imgEmptyAlt = ruleResults.filter((r) => r.resultCode === "P1");
    if (imgEmptyAlt.length > 0) {
      incrementElement(elements, "imgAltNull", imgEmptyAlt.length);
      incrementMetric(metrics, "img_02", imgEmptyAlt.length);
      addResult(results, "img_02");
      registerNode(nodes, "imgAltNull", imgEmptyAlt);
    }
  },
  /// WCAG TECHNIQUES - Custom Handlers
  "QW-WCAG-T1": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: techniqueResults = [] } = assertion;

    if (metadata.outcome === "failed") {
      incrementElement(elements, "areaAltNo", metadata.failed);
      incrementMetric(metrics, "area_01b", metadata.failed);
      addResult(results, "area_01b");
      registerNode(
        nodes,
        "areaAltNo",
        techniqueResults.filter((r) => r.verdict === "failed")
      );
    } else if (
      metadata.outcome === "passed" ||
      metadata.outcome === "warning"
    ) {
      markPresentMetric(metrics, "area_01a");
      markPresent(elements, "areaAltYes");
      addResult(results, "area_01a");
      registerNode(
        nodes,
        "areaAltYes",
        techniqueResults.filter(
          (r) => r.verdict === "passed" || r.verdict === "warning"
        )
      );
    }
  },

  "QW-WCAG-T3": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const outsideFieldset = techniqueResults.filter(
      (r) => r.resultCode === "W1"
    );
    if (outsideFieldset.length !== 0) {
      incrementMetric(metrics, "field_02", outsideFieldset.length);
      incrementElement(elements, "fieldNoForm", outsideFieldset.length);
      addResult(results, "field_02");
      registerNode(nodes, "fieldNoForm", outsideFieldset);
    }

    const fieldsetNoLegend = techniqueResults.filter(
      (r) => r.resultCode === "F1" || r.resultCode === "F2"
    );
    if (fieldsetNoLegend.length !== 0) {
      incrementMetric(metrics, "field_01", fieldsetNoLegend.length);
      incrementElement(elements, "fieldLegNo", fieldsetNoLegend.length);
      addResult(results, "field_01");
      registerNode(nodes, "fieldLegNo", fieldsetNoLegend);
    }
  },

  "QW-WCAG-T6": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const passed = techniqueResults.filter((r) => r.verdict === "passed");
    if (passed.length > 0) {
      incrementElement(elements, "ehandBoth", passed.length);
      incrementMetric(metrics, "ehandler_03", passed.length);
      addResult(results, "ehandler_03");
      registerNode(nodes, "ehandBoth", passed);
    }

    const failed = techniqueResults.filter((r) => r.verdict === "failed");
    if (failed.length > 0) {
      incrementElement(elements, "ehandBothNo", failed.length);
      incrementMetric(metrics, "ehandler_02", failed.length);
      addResult(results, "ehandler_02");
      registerNode(nodes, "ehandBothNo", failed);
    }
  },
  "QW-WCAG-T9": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const failsH1Results = techniqueResults.filter(
      (r) => r.resultCode === "F3"
    );
    if (failsH1Results.length > 0) {
      markPresent(elements, "h1");
      markPresentMetric(metrics, "hx_01c");
      addResult(results, "hx_01c");
      registerNode(nodes, "h1", failsH1Results);
    }

    const incorrectOrderResults = techniqueResults.filter(
      (r) => r.resultCode === "F1"
    );
    if (incorrectOrderResults.length > 0) {
      incrementElement(elements, "hxSkip", incorrectOrderResults.length);
      incrementMetric(metrics, "hx_03", incorrectOrderResults.length);
      addResult(results, "hx_03");
      registerNode(nodes, "hxSkip", incorrectOrderResults);
    }
  },

  "QW-WCAG-T17": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const incorrectLabelResults = techniqueResults.filter(
      (r) => r.verdict === "failed"
    );
    const warningLabelResults = techniqueResults.filter(
      (r) => r.verdict === "warning"
    );

    if (incorrectLabelResults.length > 0) {
      incrementElement(elements, "labelPosNo", incorrectLabelResults.length);
      incrementMetric(metrics, "label_02", incorrectLabelResults.length);
      addResult(results, "label_02");
      registerNode(nodes, "labelPosNo", incorrectLabelResults);
    }

    if (warningLabelResults.length > 0) {
      incrementElement(elements, "labelPosWarn", warningLabelResults.length);
      incrementMetric(metrics, "label_02b", warningLabelResults.length);
      addResult(results, "label_02b");
      registerNode(nodes, "labelPosWarn", warningLabelResults);
    }
  },
  "QW-WCAG-T20": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const titleMatchResults = techniqueResults.filter(
      (r) => r.resultCode === "F2"
    );
    if (titleMatchResults.length > 0) {
      incrementElement(elements, "aTitleMatch", titleMatchResults.length);
      incrementMetric(metrics, "a_05", titleMatchResults.length);
      addResult(results, "a_05");
      registerNode(nodes, "aTitleMatch", titleMatchResults);
    }
  },
  "QW-WCAG-T25": (assertion, { elements, results, nodes, metrics }) => {
    const { results: techniqueResults = [] } = assertion;

    const incorrectScope = techniqueResults.filter(
      (r) => r.resultCode === "F2" || r.resultCode === "F3"
    );
    if (incorrectScope.length > 0) {
      incrementElement(elements, "scopeNo", incorrectScope.length);
      incrementMetric(metrics, "scope_01", incorrectScope.length);
      addResult(results, "scope_01");
      registerNode(nodes, "scopeNo", incorrectScope);
    }
  },

  // BEST PRACTICES: Custom Handlers
  "QW-BP1": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: techniqueResults = [] } = assertion;

    if (metadata.outcome === "failed") {
      markPresent(elements, "hxNone");
      markPresentMetric(metrics, "hx_01a");
      addResult(results, "hx_01a");
      registerNode(
        nodes,
        "hxNone",
        techniqueResults.filter((r) => r.verdict === "failed")
      );
    } else if (metadata.outcome === "warning") {
      incrementElement(elements, "hx", metadata.warning);
      incrementMetric(metrics, "hx_01b", metadata.warning);
      addResult(results, "hx_01b");
      registerNode(
        nodes,
        "hx",
        techniqueResults.filter((r) => r.verdict === "warning")
      );
    }
  },

  "QW-BP9": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: techniqueResults = [] } = assertion;

    if (metadata.passed > 0) {
      incrementElement(elements, "tableLayoutCaption", metadata.passed);
      incrementMetric(metrics, "table_01", metadata.passed);
      addResult(results, "table_01");
      registerNode(
        nodes,
        "tableLayoutCaption",
        techniqueResults.filter((r) => r.verdict === "passed")
      );
    }
  },
  "QW-BP10": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: techniqueResults = [] } = assertion;

    if (metadata.outcome === "failed") {
      incrementElement(elements, "layoutElem", metadata.failed);
      incrementMetric(metrics, "layout_01b", metadata.failed);
      addResult(results, "layout_01b");
      registerNode(
        nodes,
        "layoutElem",
        techniqueResults.filter((r) => r.verdict === "failed")
      );
    } else if (metadata.outcome === "passed") {
      markPresent(elements, "layoutElemNo");
      markPresentMetric(metrics, "layout_01a");
      addResult(results, "layout_01a");
      registerNode(
        nodes,
        "layoutElemNo"
      );
    }
  },
  "QW-BP17": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: ruleResults } = assertion;

    incrementElement(elements, "a", ruleResults.length);

    if (metadata.outcome === "failed") {
      addResult(results, "a_04");
      markPresentMetric(metrics, "a_04");
      registerNode(nodes, "a", []);

      incrementElement(elements, "aSkipNo", metadata.failed);
      incrementMetric(metrics, "a_02a", metadata.failed);
      addResult(results, "a_02a");
      registerNode(
        nodes,
        "aSkipNo",
        ruleResults.filter((r) => r.verdict === "failed"),
      );
      return;
    }

    registerNode(nodes, "a", ruleResults);

    if (metadata.outcome === "warning") {
      incrementElement(elements, "aSkip", metadata.warning);
      incrementMetric(metrics, "a_02b", metadata.warning);
      addResult(results, "a_02b");
      registerNode(
        nodes,
        "aSkip",
        ruleResults.filter((r) => r.verdict === "warning"),
      );
    }
  },
  "QW-BP28": (assertion, { elements, results, nodes, metrics }) => {
    const { metadata, results: techniqueResults = [] } = assertion;

    if (metadata.outcome === "passed") {
      incrementElement(elements, "h1", metadata.passed);
      incrementMetric(metrics, "heading_03", metadata.passed);
      incrementElement(elements, "onlyOneh1", metadata.passed);
      addResult(results, "heading_03");
      registerNode(
        nodes,
        "onlyOneh1",
        techniqueResults.filter((r) => r.verdict === "passed")
      );
    } else if (metadata.outcome === "failed") {
      const hasMissingH1 = techniqueResults.filter((r) => r.resultCode === "F1");
      if (hasMissingH1.length !== 0) {
        incrementElement(elements, "h1", 0);
        incrementElement(elements, "notOneh1", 0);
        markPresentMetric(metrics, "heading_04");
        addResult(results, "heading_04");
      }

      const multipleH1 = techniqueResults.filter((r) => r.resultCode === "F2");
      if (multipleH1.length !== 0) {
        incrementElement(
          elements,
          "h1",
          metadata.passed + metadata.failed
        );
        incrementElement(elements, "notOneh1", metadata.failed);
        markPresentMetric(metrics, "heading_04");
        addResult(results, "heading_04");
        registerNode(
          nodes,
          "notOneh1",
          multipleH1
        );
      }
    }
  }
};