import { TestKey, TestName } from "./types";

export type ACTRuleID = `QW-ACT-R${number}`;
export type WCAGTechniqueID = `QW-WCAG-T${number}`;
export type BPRuleID = `QW-BP${number}`;
export type FailedResultCode = `F${number}`;
export type PassedResultCode = `P${number}`;
export type WarningResultCode = `W${number}`;
export type ResultCode = FailedResultCode | PassedResultCode | WarningResultCode;
export type QualWebRuleID = ACTRuleID | WCAGTechniqueID | BPRuleID;
export type QualWebKeyTranslator = { key: TestKey; name: TestName };
export type RuleConfig = {
  baseNode?: string;
  passed?: QualWebKeyTranslator | { resultCode: Record<ResultCode, QualWebKeyTranslator> };
  failed?: QualWebKeyTranslator | { resultCode: Record<ResultCode, QualWebKeyTranslator> };
  warning?: QualWebKeyTranslator | { resultCode: Record<ResultCode, QualWebKeyTranslator> };
  any?: { resultCode: Record<ResultCode, QualWebKeyTranslator> }; 
};

export const DOMAIN_MAPPING: Record<QualWebRuleID, RuleConfig> = {
  // ==========================================
  // ACT RULES
  // ==========================================
  "QW-ACT-R1": {
    failed: { resultCode: { "F1": { key: "title_02", name: "titleNo" }, "F2": { key: "title_03", name: "titleNull" } } },
    passed: { key: "title_06", name: "titleOk" }
  },
  "QW-ACT-R2": {
    failed: { key: "lang_03", name: "langNo" },
    passed: { key: "lang_01", name: "lang" }
  },
  "QW-ACT-R4": {
    any: { resultCode: { "F1": { key: "meta_01", name: "metaRefresh" }, "F2": { key: "meta_02", name: "metaRedir" } } }
  },
  "QW-ACT-R5": { failed: { key: "lang_02", name: "langCodeNo" } },
  "QW-ACT-R6": {
    failed: { key: "inp_img_01b", name: "inpImgAltNo" },
    passed: { key: "inp_img_01a", name: "inpImgAltYes" }
  },
  "QW-ACT-R7": {
    failed: { key: "orientation_02", name: "orientationCSSNot" },
    passed: { key: "orientation_01", name: "orientationCSS" }
  },
  "QW-ACT-R9": { warning: { key: "a_09", name: "aSameText" } },
  "QW-ACT-R10": {
    baseNode: "iframeSame",
    failed: { key: "iframe_03", name: "iframeSameANameDiferent" },
    passed: { key: "iframe_02", name: "iframeSameAName" }
  },
  "QW-ACT-R11": {
    baseNode: "button",
    failed: { key: "button_02", name: "buttonNotAname" },
    passed: { key: "button_01", name: "buttonAname" }
  },
  "QW-ACT-R12": {
    baseNode: "a",
    failed: { key: "a_11", name: "linkNotAName" },
    passed: { key: "a_10", name: "linkAName" }
  },
  "QW-ACT-R13": {
    failed: { key: "element_03", name: "elementNotDec" },
    passed: { key: "element_02", name: "elementDec" }
  },
  "QW-ACT-R14": { passed: { key: "meta_05", name: "metaViewport" } },
  "QW-ACT-R15": {
    failed: { key: "audio_video_02", name: "audioAutoPlay" },
    passed: { key: "audio_video_01", name: "audioAvoidsAutoPlay" }
  },
  "QW-ACT-R16": {
    failed: { key: "input_02", name: "inputLabelNo" },
    passed: { key: "input_02b", name: "inputLabel" }
  },
  "QW-ACT-R17": {
    baseNode: "img",
    failed: { key: "img_01b", name: "imgAltNo" },
    passed: { key: "img_01a", name: "imgAlt" },
    any: { resultCode: { "P1": { key: "img_02", name: "imgAltNull" } } }
  },
  "QW-ACT-R19": { failed: { key: "iframe_01", name: "iframeTitleNo" } },
  "QW-ACT-R20": {
    failed: { key: "role_02", name: "roleValidNot" },
    passed: { key: "role_01", name: "roleValid" }
  },
  "QW-ACT-R21": {
    baseNode: "svg",
    failed: { key: "svg_02", name: "svgNotAName" },
    passed: { key: "svg_01", name: "svgAName" }
  },
  "QW-ACT-R22": {
    failed: { key: "element_07", name: "elementNotLang" },
    passed: { key: "element_06", name: "elementLang" }
  },
  "QW-ACT-R23": { passed: { key: "video_02", name: "videoVisual" } },
  "QW-ACT-R24": {
    failed: { key: "autocomplete_02", name: "autoCmpltNotValid" },
    passed: { key: "autocomplete_01", name: "autoCmpltValid" }
  },
  "QW-ACT-R25": {
    failed: { key: "aria_06", name: "ariaStNotPermitted" },
    passed: { key: "aria_05", name: "ariaStPermitted" }
  },
  "QW-ACT-R26": { passed: { key: "video_01", name: "videoAudit" } },
  "QW-ACT-R27": {
    failed: { key: "aria_08", name: "ariaAtribNotDefined" },
    passed: { key: "aria_07", name: "ariaAtribDefined" }
  },
  "QW-ACT-R28": { passed: { key: "element_10", name: "elementRole" } },
  "QW-ACT-R30": {
    failed: { key: "label_03", name: "labelANameNot" },
    passed: { key: "label_01", name: "labelAName" }
  },
  "QW-ACT-R33": { passed: { key: "aria_01", name: "ariaCntxRole" } },
  "QW-ACT-R34": {
    failed: { key: "aria_04", name: "ariaStNotValid" },
    passed: { key: "aria_03", name: "ariaStValid" }
  },
  "QW-ACT-R35": {
    failed: { key: "heading_02", name: "hxWithoutAName" },
    passed: { key: "heading_01", name: "hxHasAName" }
  },
  "QW-ACT-R36": {
    baseNode: "headers",
    failed: { key: "headers_02", name: "headerAttNot" },
    passed: { key: "headers_01", name: "headerAtt" }
  },
  "QW-ACT-R37": {
    baseNode: "id",
    failed: { key: "color_02", name: "colorContrast" },
    passed: { key: "color_02b", name: "colorContrastOk" }
  },
  "QW-ACT-R38": { passed: { key: "aria_02", name: "ariaReqElem" } },
  "QW-ACT-R39": {
    failed: { key: "table_08", name: "tableHdrNot" },
    passed: { key: "table_07", name: "tableHdr" }
  },
  "QW-ACT-R40": { passed: { key: "css_02", name: "overflow" } },
  "QW-ACT-R42": {
    failed: { key: "object_02", name: "objectANameNot" },
    passed: { key: "object_01", name: "objectAName" }
  },
  "QW-ACT-R43": {
    baseNode: "scrollable",
    failed: { key: "scrollable_02", name: "scrollableAccessNot" },
    passed: { key: "scrollable_01", name: "scrollableAccess" }
  },
  "QW-ACT-R44": {
    failed: { key: "a_13", name: "linkIdentANameNot" },
    passed: { key: "a_12", name: "linkIdentAName" }
  },
  "QW-ACT-R48": {
    failed: { key: "element_05", name: "elementNotHiddenFocus" },
    passed: { key: "element_04", name: "elementHiddenFocus" }
  },
  "QW-ACT-R62": { passed: { key: "element_01", name: "seqFocus" } },
  "QW-ACT-R65": {
    failed: { key: "element_09", name: "elementPresentChildrenFocus" },
    passed: { key: "element_08", name: "elementPresentChildrenNoFocus" }
  },
  "QW-ACT-R66": {
    baseNode: "menuItem",
    failed: { key: "menuItem_02", name: "menuItemANameNot" },
    passed: { key: "menuItem_01", name: "menuItemAName" }
  },
  "QW-ACT-R67": {
    failed: { key: "letter_02", name: "letterSpacingNot" },
    passed: { key: "letter_01", name: "letterSpacing" }
  },
  "QW-ACT-R68": { failed: { key: "css_01", name: "lineHeightNo" } },
  "QW-ACT-R69": {
    failed: { key: "word_02", name: "wordSpacingNot" },
    passed: { key: "word_01", name: "wordSpacing" }
  },
  "QW-ACT-R70": {
    failed: { key: "iframe_05", name: "iframeNegTabIndexNot" },
    passed: { key: "iframe_04", name: "iframeNegTabIndex" }
  },
  "QW-ACT-R71": {
    failed: { key: "meta_04", name: "metaRefreshNot" },
    passed: { key: "meta_03", name: "metaRefresh" }
  },
  "QW-ACT-R76": {
    failed: { key: "textC_02", name: "textContrastHNot" },
    passed: { key: "textC_01", name: "textContrastH" }
  },

  // ==========================================
  // WCAG TECHNIQUES
  // ==========================================
  "QW-WCAG-T1": {
    failed: { key: "area_01b", name: "areaAltNo" },
    passed: { key: "area_01a", name: "areaAltYes" },
    warning: { key: "area_01a", name: "areaAltYes" }
  },
  "QW-WCAG-T2": { failed: { key: "table_02", name: "tableDataCaption" } },
  "QW-WCAG-T3": {
    any: { resultCode: { "W1": { key: "field_02", name: "fieldNoForm" }, "F1": { key: "field_01", name: "fieldLegNo" }, "F2": { key: "field_01", name: "fieldLegNo" } } }
  },
  "QW-WCAG-T6": {
    failed: { key: "ehandler_02", name: "ehandBothNo" },
    passed: { key: "ehandler_03", name: "ehandBoth" }
  },
  "QW-WCAG-T7": { failed: { key: "abbr_01", name: "abbrNo" } },
  "QW-WCAG-T8": { failed: { key: "img_03", name: "imgAltNot" } },
  "QW-WCAG-T9": {
    any: { resultCode: { "F3": { key: "hx_01c", name: "h1" }, "F1": { key: "hx_03", name: "hxSkip" } } }
  },
  "QW-WCAG-T14": { failed: { key: "table_06", name: "tableComplexError" } },
  "QW-WCAG-T15": { failed: { key: "link_01", name: "linkRel" } },

  "QW-WCAG-T17": {
    failed: { key: "label_02", name: "labelPosNo" },
    warning: { key: "label_02b", name: "labelPosWarn" }
  },
  "QW-WCAG-T18": { failed: { key: "table_05a", name: "tableLayout" } },
  "QW-WCAG-T19": {
    failed: { key: "form_01b", name: "formSubmitNo" },
    passed: { key: "form_01a", name: "formSubmit" }
  },
  "QW-WCAG-T20": { any: { resultCode: { "F2": { key: "a_05", name: "aTitleMatch" } } } },
  "QW-WCAG-T21": { failed: { key: "a_03", name: "aImgAltNo" } },
  "QW-WCAG-T22": { failed: { key: "win_01", name: "newWinOnLoad" } },
  "QW-WCAG-T23": {
    failed: { key: "a_01b", name: "aSkipFirstNo" },
    warning: { key: "a_01a", name: "aSkipFirst" }
  },
  "QW-WCAG-T24": { failed: { key: "focus_01", name: "focusBlur" } },
  "QW-WCAG-T25": {
    any: { resultCode: { "F2": { key: "scope_01", name: "scopeNo" }, "F3": { key: "scope_01", name: "scopeNo" } } }
  },
  "QW-WCAG-T26": { failed: { key: "ehandler_04", name: "ehandTagNo" } },
  "QW-WCAG-T27": { failed: { key: "justif_txt_01", name: "justifiedTxt" } },
  "QW-WCAG-T29": { failed: { key: "justif_txt_02", name: "justifiedCss" } },
  "QW-WCAG-T30": { failed: { key: "blink_02", name: "cssBlink" } },
  "QW-WCAG-T31": { failed: { key: "color_01", name: "colorFgBgNo" } },
  "QW-WCAG-T32": { failed: { key: "list_01", name: "liNoList" } },
  "QW-WCAG-T33": {
    baseNode: "dd,dt",
    failed: { key: "list_05", name: "notDescListElement" },
    passed: { key: "list_04", name: "descListElement" }
  },
  "QW-WCAG-T34": {
    baseNode: "dl",
    failed: { key: "list_07", name: "notDescList" },
    passed: { key: "list_06", name: "descList" }
  },

  // ==========================================
  // BEST PRACTICES
  // ==========================================
  "QW-BP1": {
    failed: { key: "hx_01a", name: "hxNone" },
    warning: { key: "hx_01b", name: "hx" }
  },
  "QW-BP2": { failed: { key: "img_04", name: "imgAltLong" } },
  "QW-BP4": { failed: { key: "a_07", name: "aGroupNo" } },
  "QW-BP5": { failed: { key: "table_04", name: "tableNested" } },
  "QW-BP6": { failed: { key: "title_04", name: "titleLong" } },
  "QW-BP7": { failed: { key: "title_05", name: "titleChars" } },
  "QW-BP8": { failed: { key: "hx_02", name: "hxNo" } },
  "QW-BP9": { passed: { key: "table_01", name: "tableLayoutCaption" } },
  "QW-BP10": {
    failed: { key: "layout_01b", name: "layoutElem" },
    passed: { key: "layout_01a", name: "layoutElemNo" }
  },
  "QW-BP11": { failed: { key: "br_01", name: "brSec" } },
  "QW-BP13": { failed: { key: "a_06", name: "aAdjacentSame" } },
  "QW-BP14": { failed: { key: "layout_03", name: "layoutFixed" } },
  "QW-BP19": {
    failed: { key: "landmark_02", name: "bannerNotTopLevel" },
    passed: { key: "landmark_01", name: "bannerTopLevel" }
  },
  "QW-BP20": {
    failed: { key: "landmark_10", name: "duplicateBanner" },
    passed: { key: "landmark_09", name: "noDuplicateBanner" }
  },
  "QW-BP21": {
    failed: { key: "landmark_12", name: "duplicateContentinfo" },
    passed: { key: "landmark_11", name: "noDuplicateContentinfo" }
  },
  "QW-BP22": {
    failed: { key: "landmark_14", name: "duplicateMain" },
    passed: { key: "landmark_13", name: "noDuplicateMain" }
  },
  "QW-BP23": {
    baseNode: "li",
    failed: { key: "listitem_02", name: "liNotSemantically" },
    passed: { key: "listitem_01", name: "liSemantically" }
  },
  "QW-BP24": {
    failed: { key: "list_03", name: "listNotCorrectly" },
    passed: { key: "list_02", name: "listCorrectly" }
  },
  "QW-BP25": {
    failed: { key: "landmark_04", name: "complementaryNotTopLevel" },
    passed: { key: "landmark_03", name: "complementaryTopLevel" }
  },
  "QW-BP26": {
    failed: { key: "landmark_06", name: "contentinfoNotTopLevel" },
    passed: { key: "landmark_05", name: "contentinfoTopLevel" }
  },
  "QW-BP27": {
    failed: { key: "landmark_08", name: "mainNotTopLevel" },
    passed: { key: "landmark_07", name: "mainTopLevel" }
  },
  "QW-BP29": { failed: { key: "lang_04", name: "langMatchNo" } },
  "QW-BP30": {
    failed: { key: "id_02", name: "idAttNot" },
    passed: { key: "id_01", name: "idAtt" }
  }
};