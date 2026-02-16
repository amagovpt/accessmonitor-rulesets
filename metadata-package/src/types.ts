type Type = "fals" | "prop" | "decr" | "true";
export interface  TestDefinition {
    type: Type;
    elem: string;
    test: TestName;
    score: Score;
    level: Level;
    trust: string;
    ref: string;
    scs: SCSKey[];
    dis: string;
    top?:number;
    steps?:number;
    result: Result;
}

export type TestRegistry = {
    [key in TestKey]: TestDefinition;
}

export type TechsRegistry = {
    [key in TechniqueKey]: string;
};

export type TestColorsRegistry = {
    [key in TestKey]: "G" | "Y" | "R";
};



export type Score = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Level = "A" | "AA" | "AAA";
export type Result = "passed" | "failed" | "warning";

export type TechniqueKey = 
    | "C12" | "C19" | "C21" | "C22" | "C24" | "C9"
    | "F16" | "F17" | "F24" | "F25" | "F30" | "F4" 
    | "F40" | "F41" | "F46" | "F47" | "F49" | "F52" 
    | "F54" | "F55" | "F59" | "F65" | "F68" | "F77" 
    | "F84" | "F88" | "F89" | "G1" | "G102" | "G115"
    | "G123" | "G125" | "G130" | "G134" | "G140" 
    | "G141" | "G145" | "G146" | "G162" | "G88" | "G90"
    | "H2" | "H24" | "H25" | "H27" | "H32" | "H33" | "H35"
     | "H36" | "H37" | "H39" | "H42" | "H43" | "H44" 
     | "H45" | "H46" | "H48" | "H51" | "H57" | "H59" 
     | "H63" | "H64" | "H65" | "H71" | "H73" | "H88" 
     | "SCR20";


export type SCSKey = 
        | "1.1.1" | "1.2.1" | "1.2.2" | "1.2.3" | "1.2.8" 
        | "1.3.1" | "1.3.2" | "1.3.4" | "1.4.3" | "1.4.4" 
        | "1.4.5" | "1.4.6" | "1.4.8" | "1.4.9" | "1.4.12" 
        | "2.1.1" | "2.1.3" | "2.2.1" | "2.2.2" | "2.2.4" 
        | "2.4.1" | "2.4.2" | "2.4.4" | "2.4.5" | "2.4.6" 
        | "2.4.7" | "2.4.8" | "2.4.9" | "2.4.10" | "2.5.3" 
        | "3.1.1" | "3.1.2" | "3.1.3" | "3.1.4" | "3.2.1" 
        | "3.2.2" | "3.2.5" | "3.3.2" | "4.1.1" | "4.1.2";
        


export type SCSDescription = 
            | "non-text-content"
            | "audio-only-and-video-only-prerecorded"
            | "captions-prerecorded"
            | "audio-description-or-media-alternative-prerecorded"
            | "media-alternative-prerecorded"
            | "info-and-relationships"
            | "meaningful-sequence"
            | "orientation"
            | "contrast-minimum"
            | "resize-text"
            | "images-of-text"
            | "contrast-enhanced"
            | "visual-presentation"
            | "images-of-text-no-exception"
            | "text-spacing"
            | "keyboard"
            | "keyboard-no-exception"
            | "timing-adjustable"
            | "pause-stop-hide"
            | "interruptions"
            | "bypass-blocks"
            | "navigation-mechanisms-title"
            | "link-purpose-in-context"
            | "multiple-ways"
            | "headings-and-labels"
            | "focus-visible"
            | "location"
            | "link-purpose-link-only"
            | "section-headings"
            | "label-in-name"
            | "language-of-page"
            | "language-of-parts"
            | "unusual-words"
            | "abbreviations"
            | "on-focus"
            | "on-input"
            | "change-on-request"
            | "labels-or-instructions"
            | "parsing"
            | "name-role-value";


export type SCSMapping = {
        [key in SCSKey]: {
            text: SCSDescription;
            level: Level;
        };
    };

export type TestKey = 
        | "a_01a" | "a_01b" | "a_02a" | "a_02b" | "a_03" | "a_04" | "a_05" | "a_06"
        | "a_07" | "a_09" | "a_10" | "a_11" | "a_12" | "a_13" | "abbr_01" 
        | "area_01a" | "area_01b" | "aria_01" | "aria_02" | "aria_03"
        | "aria_04" | "aria_05" | "aria_06" | "aria_07" | "aria_08" | "audio_video_01"
        | "audio_video_02" | "autocomplete_01" | "autocomplete_02" 
        | "blink_02" | "br_01" | "button_01" | "button_02" | "color_01" | "color_02" | "color_02_b"
        | "css_01" | "css_02" | "ehandler_02" | "ehandler_03"
        | "ehandler_04" | "element_01" | "element_02" | "element_03"
        | "element_04" | "element_05" | "element_06" | "element_07" | "element_08"
        | "element_09" | "element_10" | "field_01" | "field_02" | "focus_01" | "font_01"
        | "font_02" | "form_01a" | "form_01b" | "frame_01"  | "heading_01"
        | "heading_02" | "heading_03" | "heading_04" | "headers_01" | "headers_02"
        | "hx_01a" | "hx_01b" | "hx_01c" | "hx_02" | "hx_03" | "id_01" | "id_02"
        | "iframe_01" | "iframe_02" | "iframe_03" | "iframe_04" | "iframe_05" | "img_01a"
        | "img_01b" | "img_02" | "img_03" | "img_04" | "inp_img_01a" | "inp_img_01b"
        | "input_01" | "input_02" | "input_02b" | "input_03" | "justif_txt_01"
        | "justif_txt_02" | "label_01" | "label_02" | "label_03" | "landmark_01"
        | "landmark_02" | "landmark_03" | "landmark_04" | "landmark_05" | "landmark_06"
        | "landmark_07" | "landmark_08" | "landmark_09" | "landmark_10" | "landmark_11"
        | "landmark_12" | "landmark_13" | "landmark_14" | "lang_01" | "lang_02"
        | "lang_03" | "lang_04" | "layout_01a" | "layout_01b" 
        | "layout_03" | "letter_01" | "letter_02" | "link_01" | "list_01"
        | "list_02" | "list_03" | "list_04" | "list_05" | "list_06" | "list_07"
        | "listitem_01" | "listitem_02"  | "menuItem_01"
        | "menuItem_02" | "meta_01" | "meta_02" | "meta_03" | "meta_04" | "meta_05"
        | "object_01" | "object_02" | "orientation_01" | "orientation_02" | "role_01"
        | "role_02" | "scope_01" | "scrollable_01" | "scrollable_02" | "svg_01" | "svg_02"
        | "table_01" | "table_02" | "table_03" | "table_04" | "table_05a" | "table_06"
        | "table_07" | "table_08" | "textC_01" | "textC_02" | "title_01" | "title_02"
        | "title_03" | "title_04" | "title_05" | "title_06" | "values_01a"
        | "values_01b" | "values_02a" | "values_02b" | "video_01" | "video_02"
        | "w3c_validator_01a" | "w3c_validator_01b" | "win_01" | "word_01" | "word_02"
        

        //desativated | "ehandler_01"
        // missing tests
    /* | "dtd_01" | "embed_01" | "frame_02" | "lang_05" | "layout_02a" | "layout_02b"
     | "long_01" | "marquee_01" | "title_07" | "akey_01" | "applet_01" | "blink_01" */
     ;
        


        export type TestName = 
            | "imgAlt" | "imgAltNo" | "imgAltNull" | "imgAltNot" | "imgAltLong"
            | "areaAltYes" | "areaAltNo" | "inpImgAltYes" | "inpImgAltNo"
            | "a" | "aImgAltNo" | "aTitleMatch" | "aSameText" | "aAdjacentSame" | "aGroupNo"
            | "aSkipFirst" | "aSkipFirstNo" | "aSkipNo" | "aSkip" | "linkAName" | "linkNotAName"
            | "linkIdentAName" | "linkIdentANameNot"
            | "hxNone" | "hx" | "h1" | "hxSkip" | "hxNo"
            | "liNoList" | "brSec" | "fieldNoForm" | "fieldLegNo" | "labelPosNo"
            | "inputLabel" | "inputLabelNo" | "inputIdTitleNo" | "focusBlur" | "inputAltNo"
            | "formSubmit" | "formSubmitNo"
            | "tableDataCaption" | "tableCaptionSummary" | "tableLayoutCaption" 
            | "tableComplexError" | "scopeNo" | "tableLayout" | "tableNested" 
            | "iframeTitleNo" | "frameTitleNo" | "newWinOnLoad"
            | "abbrNo" | "lineHeightNo" | "justifiedTxt" | "justifiedCss" 
            | "fontAbsVal" | "layoutFixed" | "valueAbsCss" | "valueRelCss" 
            | "valueAbsHtml" | "valueRelHtml" | "colorContrast" | "colorContrastOk" | "colorFgBgNo"
            | "cssBlink" | "ehandBoth" | "ehandBothNo" | "ehandTagNo"
            | "w3cValidatorErrorsNo" | "w3cValidatorErrors"
            | "fontHtml" | "layoutElemNo" | "layoutElem"
            | "lang" | "langNo" | "langCodeNo" | "langMatchNo"
            | "titleNo" | "titleNull" | "titleOk" | "titleLong" | "titleChars" | "titleVrs"
            | "linkRel" | "metaRefresh" | "metaRedir"
            | "hxHasAName" | "hxWithoutAName" | "onlyOneh1" | "notOneh1"
            | "ariaCntxRole" | "ariaReqElem" | "ariaStValid" | "ariaStNotValid" 
            | "ariaStPermitted" | "ariaStNotPermitted" | "ariaAtribDefined" | "ariaAtribNotDefined"
            | "audioAvoidsAutoPlay" | "audioAutoPlay" | "autoCmpltValid" | "autoCmpltNotValid"
            | "buttonAname" | "buttonNotAname" | "seqFocus" | "elementDec" | "elementNotDec"
            | "elementHiddenFocus" | "elementNotHiddenFocus" | "elementLang" | "elementNotLang"
            | "elementPresentChildrenNoFocus" | "elementPresentChildrenFocus" | "elementRole"
            | "headerAtt" | "headerAttNot" | "idAtt" | "idAttNot"
            | "iframeSameAName" | "iframeSameANameDiferent" | "iframeNegTabIndex" | "iframeNegTabIndexNot"
            | "letterSpacing" | "letterSpacingNot"
            | "menuItemAName" | "menuItemANameNot" | "metaRefreshNot" | "metaViewport"
            | "objectAName" | "objectANameNot" | "orientationCSS" | "orientationCSSNot"
            | "roleValid" | "roleValidNot" | "scrollableAccess" | "scrollableAccessNot"
            | "svgAName" | "svgNotAName" | "tableHdr" | "tableHdrNot"
            | "textContrastH" | "textContrastHNot" | "videoAudit" | "videoVisual"
            | "labelAName" | "labelANameNot" | "wordSpacing" | "wordSpacingNot"
            | "overflow" | "bannerTopLevel" | "bannerNotTopLevel" | "complementaryTopLevel"
            | "complementaryNotTopLevel" | "contentinfoTopLevel" | "contentinfoNotTopLevel"
            | "mainTopLevel" | "mainNotTopLevel" | "noDuplicateBanner" | "duplicateBanner"
            | "noDuplicateContentinfo" | "duplicateContentinfo" | "noDuplicateMain" | "duplicateMain"
            | "liSemantically" | "liNotSemantically" | "listCorrectly" | "listNotCorrectly"
            | "descListElement" | "notDescListElement" | "descList" | "notDescList";