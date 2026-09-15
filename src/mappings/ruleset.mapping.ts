import { TestKey, TestName } from "../types";
import { QualWebKeyTranslator, ResultCode, QualWebRuleID } from "../types/qualweb";




export type RuleConfig = {
  baseNode?: string;
  passed?: QualWebKeyTranslator ;
  failed?: QualWebKeyTranslator ;
  warning?: QualWebKeyTranslator;
  hasCustomHandler?: boolean;
}

export const DOMAIN_MAPPING: Record<QualWebRuleID, RuleConfig> = {
  // ==========================================
  // ACT RULES
  // ==========================================
  "QW-ACT-R1": {
    hasCustomHandler: true
  },
  "QW-ACT-R2": {
    failed: { key: "lang_03", name: "langNo" , type: 'occurrence'},
    passed: { key: "lang_01", name: "lang" , type: 'occurrence' }
  },
  "QW-ACT-R4": {
    hasCustomHandler: true
    },
  "QW-ACT-R5": { failed: { key: "lang_02", name: "langCodeNo", type:'occurrence'} },
  "QW-ACT-R6": {
    hasCustomHandler: true,
  },
  "QW-ACT-R7": {
    failed: { key: "orientation_02", name: "orientationCSSNot", type : 'occurrence'},
    passed: { key: "orientation_01", name: "orientationCSS", type : 'occurrence'}
  },
  "QW-ACT-R9": { warning: { key: "a_09", name: "aSameText", type: 'occurrence' } },
  "QW-ACT-R10": {
    baseNode: "iframeSame",
    failed: { key: "iframe_03", name: "iframeSameANameDiferent" , type: 'occurrence' },
    passed: { key: "iframe_02", name: "iframeSameAName", type: 'occurrence' }
  },
  "QW-ACT-R11": {
    baseNode: "button",
    failed: { key: "button_02", name: "buttonNotAname" , type: 'occurrence' },
    passed: { key: "button_01", name: "buttonAname", type: 'occurrence' }
  },
  "QW-ACT-R12": {
    baseNode: "a",
    failed: { key: "a_11", name: "linkNotAName", type: 'occurrence' },
    passed: { key: "a_10", name: "linkAName", type: 'occurrence' }
  },
  "QW-ACT-R13": {
    failed: { key: "element_03", name: "elementNotDec", type: 'occurrence' },
    passed: { key: "element_02", name: "elementDec", type: 'occurrence' }
  },
  "QW-ACT-R14": { passed: { key: "meta_05", name: "metaViewport", type: 'occurrence' } },
  "QW-ACT-R15": {
    failed: { key: "audio_video_02", name: "audioAutoPlay" , type: 'occurrence' },
    passed: { key: "audio_video_01", name: "audioAvoidsAutoPlay", type: 'binary' }
  },
  "QW-ACT-R16": {
    failed: { key: "input_02", name: "inputLabelNo", type: 'occurrence' },
    passed: { key: "input_02b", name: "inputLabel", type: 'binary' }
  },
  "QW-ACT-R17": {
    hasCustomHandler: true
  },
  "QW-ACT-R19": { failed: { key: "iframe_01", name: "iframeTitleNo", type: 'occurrence'} },
  "QW-ACT-R20": {
    failed: { key: "role_02", name: "roleValidNot", type: 'occurrence' },
    passed: { key: "role_01", name: "roleValid", type: 'occurrence' }
  },
  "QW-ACT-R21": {
    baseNode: "svg",
    failed: { key: "svg_02", name: "svgNotAName", type: 'occurrence' },
    passed: { key: "svg_01", name: "svgAName" , type: 'occurrence'}
  },
  "QW-ACT-R22": {
    failed: { key: "element_07", name: "elementNotLang" , type: 'occurrence'},
    passed: { key: "element_06", name: "elementLang" , type: 'occurrence'}
  },
  "QW-ACT-R23": { passed: { key: "video_02", name: "videoVisual" , type: 'occurrence' } },
  "QW-ACT-R24": {
    failed: { key: "autocomplete_02", name: "autoCmpltNotValid", type: 'occurrence' },
    passed: { key: "autocomplete_01", name: "autoCmpltValid", type: 'occurrence' }
  },
  "QW-ACT-R25": {
    failed: { key: "aria_06", name: "ariaStNotPermitted", type: 'occurrence' },
    passed: { key: "aria_05", name: "ariaStPermitted", type: 'occurrence' }
  },
  "QW-ACT-R26": { passed: { key: "video_01", name: "videoAudit", type: 'occurrence' } },
  "QW-ACT-R27": {
    failed: { key: "aria_08", name: "ariaAtribNotDefined", type: 'occurrence' },
    passed: { key: "aria_07", name: "ariaAtribDefined", type: 'occurrence' }
  },
  "QW-ACT-R28": { passed: { key: "element_10", name: "elementRole", type: 'occurrence' } },
  "QW-ACT-R30": {
    failed: { key: "label_03", name: "labelANameNot", type: 'occurrence' },
    passed: { key: "label_01", name: "labelAName", type: 'occurrence' }
  },
  "QW-ACT-R33": { passed: { key: "aria_01", name: "ariaCntxRole", type: 'occurrence' } },
  "QW-ACT-R34": {
    failed: { key: "aria_04", name: "ariaStNotValid", type: 'occurrence' },
    passed: { key: "aria_03", name: "ariaStValid", type: 'occurrence' }
  },
  "QW-ACT-R35": {
    failed: { key: "heading_02", name: "hxWithoutAName", type: 'occurrence' },
    passed: { key: "heading_01", name: "hxHasAName", type: 'occurrence' }
  },
  "QW-ACT-R36": {
    baseNode: "headers",
    failed: { key: "headers_02", name: "headerAttNot"  , type: 'occurrence'},
    passed: { key: "headers_01", name: "headerAtt" , type: 'occurrence'}
  },
  "QW-ACT-R37": {
    baseNode: "id",
    failed: { key: "color_02", name: "colorContrast", type: 'occurrence' },
    passed: { key: "color_02b", name: "colorContrastOk", type: 'occurrence' }
  },
  "QW-ACT-R38": { passed: { key: "aria_02", name: "ariaReqElem", type: 'occurrence' } },
  "QW-ACT-R39": {
    failed: { key: "table_08", name: "tableHdrNot", type: 'occurrence' },
    passed: { key: "table_07", name: "tableHdr", type: 'occurrence' }
  },
  "QW-ACT-R40": { passed: { key: "css_02", name: "overflow", type: 'occurrence' } },
  "QW-ACT-R42": {
    failed: { key: "object_02", name: "objectANameNot", type: 'occurrence' },
    passed: { key: "object_01", name: "objectAName", type: 'occurrence' }
  },
  "QW-ACT-R43": {
    baseNode: "scrollable",
    failed: { key: "scrollable_02", name: "scrollableAccessNot", type: 'occurrence' },
    passed: { key: "scrollable_01", name: "scrollableAccess", type: 'occurrence' }
  },
  "QW-ACT-R44": {
    failed: { key: "a_13", name: "linkIdentANameNot", type: 'occurrence' },
    passed: { key: "a_12", name: "linkIdentAName", type: 'occurrence' }
  },
  "QW-ACT-R48": {
    failed: { key: "element_05", name: "elementNotHiddenFocus", type: 'occurrence' },
    passed: { key: "element_04", name: "elementHiddenFocus", type: 'occurrence' }
  },
  "QW-ACT-R62": { passed: { key: "element_01", name: "seqFocus", type: 'occurrence' } },
  "QW-ACT-R65": {
    failed: { key: "element_09", name: "elementPresentChildrenFocus", type: 'occurrence' },
    passed: { key: "element_08", name: "elementPresentChildrenNoFocus", type: 'occurrence' }
  },
  "QW-ACT-R66": {
    baseNode: "menuItem",
    failed: { key: "menuItem_02", name: "menuItemANameNot"  , type: 'occurrence'},
    passed: { key: "menuItem_01", name: "menuItemAName" , type: 'occurrence'}
  },
  "QW-ACT-R67": {
    failed: { key: "letter_02", name: "letterSpacingNot", type: 'occurrence' },
    passed: { key: "letter_01", name: "letterSpacing", type: 'occurrence' }
  },
  "QW-ACT-R68": { failed: { key: "css_01", name: "lineHeightNo", type: 'occurrence' } },
  "QW-ACT-R69": {
    failed: { key: "word_02", name: "wordSpacingNot"  , type: 'occurrence'},
    passed: { key: "word_01", name: "wordSpacing" , type: 'occurrence'}
  },
  "QW-ACT-R70": {
    failed: { key: "iframe_05", name: "iframeNegTabIndexNot", type: 'occurrence' },
    passed: { key: "iframe_04", name: "iframeNegTabIndex", type: 'occurrence' }
  },
  "QW-ACT-R71": {
    failed: { key: "meta_04", name: "metaRefreshNot", type: 'occurrence' },
    passed: { key: "meta_03", name: "metaRefresh", type: 'occurrence' }
  },
  "QW-ACT-R76": {
    failed: { key: "textC_02", name: "textContrastHNot", type: 'occurrence' },
    passed: { key: "textC_01", name: "textContrastH", type: 'occurrence' }
  },
 

  // ==========================================
  // WCAG TECHNIQUES
  // ==========================================
  "QW-WCAG-T1": {
    hasCustomHandler:true
  },
  "QW-WCAG-T2": { failed: { key: "table_02", name: "tableDataCaption" , type: 'occurrence' } },
  "QW-WCAG-T3": {
    hasCustomHandler: true
    },
  "QW-WCAG-T6": {
       hasCustomHandler: true

  },
  "QW-WCAG-T7": { failed: { key: "abbr_01", name: "abbrNo" , type: 'occurrence' } },
  "QW-WCAG-T8": { failed: { key: "img_03", name: "imgAltNot" , type: 'occurrence' } },
  "QW-WCAG-T9": {
    hasCustomHandler: true
  },
  "QW-WCAG-T14": { failed: { key: "table_06", name: "tableComplexError" , type: 'occurrence' } },
  "QW-WCAG-T15": { failed: { key: "link_01", name: "linkRel" , type: 'occurrence' } },

  "QW-WCAG-T17": {
    hasCustomHandler: true
  },
  "QW-WCAG-T18": { failed: { key: "table_05a", name: "tableLayout" , type: 'occurrence' } },
  "QW-WCAG-T19": {
    failed: { key: "form_01b", name: "formSubmitNo" , type: 'occurrence' },
    passed: { key: "form_01a", name: "formSubmit" , type: 'binary' }
  },
  "QW-WCAG-T20": { 
    hasCustomHandler: true
   },
  "QW-WCAG-T21": { failed: { key: "a_03", name: "aImgAltNo", type: 'occurrence' } },
  "QW-WCAG-T22": { failed: { key: "win_01", name: "newWinOnLoad", type: 'occurrence' } },
  "QW-WCAG-T23": {
    failed: { key: "a_01b", name: "aSkipFirstNo", type: 'occurrence' },
    warning: { key: "a_01a", name: "aSkipFirst", type: 'occurrence' }
  },
  "QW-WCAG-T24": { failed: { key: "focus_01", name: "focusBlur" ,type: 'occurrence' } },
  "QW-WCAG-T25": {
    hasCustomHandler: true,
    /*
    custom: { resultCode: { "F2": { key: "scope_01", name: "scopeNo" }, "F3": { key: "scope_01", name: "scopeNo" } } }
    */
  },
  "QW-WCAG-T26": { failed: { key: "ehandler_04", name: "ehandTagNo", type: 'occurrence' } },
  "QW-WCAG-T27": { failed: { key: "justif_txt_01", name: "justifiedTxt", type: 'occurrence' } },
  "QW-WCAG-T29": { failed: { key: "justif_txt_02", name: "justifiedCss", type: 'occurrence' } },
  "QW-WCAG-T30": { failed: { key: "blink_02", name: "cssBlink", type: 'occurrence' } },
  "QW-WCAG-T31": { failed: { key: "color_01", name: "colorFgBgNo", type: 'occurrence' } },
  "QW-WCAG-T33": {
    baseNode: "dd,dt",
    failed: { key: "list_05", name: "notDescListElement", type :'binary'},
    passed: { key: "list_04", name: "descListElement", type: 'occurrence' }
  },
  "QW-WCAG-T34": {
    baseNode: "dl",
    failed: { key: "list_07", name: "notDescList", type: 'binary' },
    passed: { key: "list_06", name: "descList", type: 'occurrence' }
  },

  // ==========================================
  // BEST PRACTICES
  // ==========================================
  "QW-BP1": {
    hasCustomHandler: true
  },
  "QW-BP2": { failed: { key: "img_04", name: "imgAltLong" ,type:'occurrence' } },
  "QW-BP4": { failed: { key: "a_07", name: "aGroupNo", type: 'occurrence' } },
  "QW-BP5": { failed: { key: "table_04", name: "tableNested", type: 'occurrence' } },
  "QW-BP6": { failed: { key: "title_04", name: "titleLong", type: 'occurrence' } },
  "QW-BP7": { failed: { key: "title_05", name: "titleChars", type: 'occurrence' } },
  "QW-BP8": { failed: { key: "hx_02", name: "hxNo", type: 'occurrence' } },
  "QW-BP9": { 
    hasCustomHandler: true
  },
  "QW-BP10": {
    hasCustomHandler: true

  },
  "QW-BP11": { failed: { key: "br_01", name: "brSec" ,type:'occurrence' } },
  "QW-BP13": { failed: { key: "a_06", name: "aAdjacentSame" ,type:'occurrence' } },
  "QW-BP14": { failed: { key: "layout_03", name: "layoutFixed" ,type:'occurrence' } },
  "QW-BP17": {hasCustomHandler: true},
  "QW-BP19": {
    failed: { key: "landmark_02", name: "bannerNotTopLevel", type: 'occurrence' },
    passed: { key: "landmark_01", name: "bannerTopLevel", type: 'occurrence' }
  },
  "QW-BP20": {
    failed: { key: "landmark_10", name: "duplicateBanner", type: 'occurrence' },
    passed: { key: "landmark_09", name: "noDuplicateBanner", type: 'occurrence' }
  },
  "QW-BP21": {
    failed: { key: "landmark_12", name: "duplicateContentinfo", type: 'occurrence' },
    passed: { key: "landmark_11", name: "noDuplicateContentinfo", type: 'occurrence' }
  },
  "QW-BP22": {
    failed: { key: "landmark_14", name: "duplicateMain", type: 'occurrence' },
    passed: { key: "landmark_13", name: "noDuplicateMain", type: 'occurrence' }
  },
  "QW-BP23": {
    baseNode: "li",
    failed: { key: "listitem_02", name: "liNotSemantically", type: 'occurrence' },
    passed: { key: "listitem_01", name: "liSemantically", type: 'occurrence' }
  },
  "QW-BP24": {
    failed: { key: "list_03", name: "listNotCorrectly", type: 'occurrence' },
    passed: { key: "list_02", name: "listCorrectly", type: 'occurrence' }
  },
  "QW-BP25": {
    failed: { key: "landmark_04", name: "complementaryNotTopLevel", type: 'occurrence' },
    passed: { key: "landmark_03", name: "complementaryTopLevel", type: 'occurrence' }
  },
  "QW-BP26": {
    failed: { key: "landmark_06", name: "contentinfoNotTopLevel", type: 'occurrence' },
    passed: { key: "landmark_05", name: "contentinfoTopLevel", type: 'occurrence' }
  },
  "QW-BP27": {
    failed: { key: "landmark_08", name: "mainNotTopLevel", type: 'occurrence' },
    passed: { key: "landmark_07", name: "mainTopLevel", type: 'occurrence' }
  },
  "QW-BP28": {hasCustomHandler: true},
  "QW-BP29": { failed: { key: "lang_04", name: "langMatchNo", type: 'occurrence' } },
  "QW-BP30": {
    failed: { key: "id_02", name: "idAttNot", type: 'occurrence' },
    passed: { key: "id_01", name: "idAtt", type: 'occurrence' }
  }
};




