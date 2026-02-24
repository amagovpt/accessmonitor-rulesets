import {  SCSName, SCSKey, SCSRegistry } from "src/types";

export const successCriteria:SCSRegistry = {
  "1.1.1": {
    name: "non-text-content",
    level: "A"
  },
  "1.2.1": {
    name: "audio-only-and-video-only-prerecorded",
    level: "A"
  },
  "1.2.2": {
    name: "captions-prerecorded",
    level: "A"
  },
  "1.2.3": {
    name: "audio-description-or-media-alternative-prerecorded",
    level: "A"
  },
  "1.2.8": {
    name: "media-alternative-prerecorded",
    level: "AAA"
  },
  "1.3.1": {
    name: "info-and-relationships",
    level: "A"
  },
  "1.3.2": {
    name: "meaningful-sequence",
    level: "A"
  },
  "1.3.4": {
    name: "orientation",
    level: "AA"
  },
  "1.3.5": {
    name: "identify-input-purpose",
    level: "AAA"
  },
  "1.4.2": {
    name: "audio-control",
    level: "A"
  },
  "1.4.3": {
    name: "contrast-minimum",
    level: "AA"
  },
  "1.4.4": {
    name: "resize-text",
    level: "AA"
  },
  "1.4.5": {
    name: "images-of-text",
    level: "AA"
  },
  "1.4.6": {
    name: "contrast-enhanced",
    level: "AAA"
  },
  "1.4.8": {
    name: "visual-presentation",
    level: "AAA"
  },
  "1.4.9": {
    name: "images-of-text-no-exception",
    level: "AAA"
  },
  "1.4.10": {
    name: "reflow",
    level: "AA"
  },
  "1.4.11": {
    name: "non-text-contrast",
    level: "AA"
  },
  "1.4.12": {
    name: "text-spacing",
    level: "AA"
  },
  "2.1.1": {
    name: "keyboard",
    level: "A"
  },
  "2.1.3": {
    name: "keyboard-no-exception",
    level: "AAA"
  },
  "2.2.1": {
    name: "timing-adjustable",
    level: "A"
  },
  "2.2.2": {
    name: "pause-stop-hide",
    level: "A"
  },
  "2.2.4": {
    name: "interruptions",
    level: "AAA"
  },
  "2.4.1": {
    name: "bypass-blocks",
    level: "A"
  },
  "2.4.2": {
    name: "navigation-mechanisms-title",
    level: "A"
  },
  "2.4.4": {
    name: "link-purpose-in-context",
    level: "A"
  },
  "2.4.5": {
    name: "multiple-ways",
    level: "AA"
  },
  "2.4.6": {
    name: "headings-and-labels",
    level: "AA"
  },
  "2.4.7": {
    name: "focus-visible",
    level: "AA"
  },
  "2.4.8": {
    name: "location",
    level: "AAA"
  },
  "2.4.9": {
    name: "link-purpose-link-only",
    level: "AAA"
  },
  "2.4.10": {
    name: "section-headings",
    level: "AAA"
  },
  "2.5.3": {
    name: "label-in-name",
    level: "AAA"
  },
  "3.1.1": {
    name: "language-of-page",
    level: "A"
  },
  "3.1.2": {
    name: "language-of-parts",
    level: "A"
  },
  "3.1.3": {
    name: "unusual-words",
    level: "AAA"
  },
  "3.1.4": {
    name: "abbreviations",
    level: "AAA"
  },
  "3.2.1": {
    name: "on-focus",
    level: "A"
  },
  "3.2.2": {
    name: "on-input",
    level: "A"
  },
  "3.2.5": {
    name: "change-on-request",
    level: "AAA"
  },
  "3.3.2": {
    name: "labels-or-instructions",
    level: "A"
  },
  "4.1.1": {
    name: "parsing",
    level: "A"
  },
  "4.1.2": {
    name: "name-role-value",
    level: "A"
  },
} as const;



export const SCSKeyMapping: { [key in SCSName]: SCSKey } = {
  "reflow": "1.4.10",
  "non-text-contrast": "1.4.11",
  "audio-control": "1.4.2",
  "non-text-content": "1.1.1",
  "audio-only-and-video-only-prerecorded": "1.2.1",
  "captions-prerecorded": "1.2.2",
  "audio-description-or-media-alternative-prerecorded": "1.2.3",
  "media-alternative-prerecorded": "1.2.8",
  "info-and-relationships": "1.3.1",
  "meaningful-sequence": "1.3.2",
  "orientation": "1.3.4",
  "identify-input-purpose": "1.3.5",
  "contrast-minimum": "1.4.3",
  "resize-text": "1.4.4",
  "images-of-text": "1.4.5",
  "contrast-enhanced": "1.4.6",
  "visual-presentation": "1.4.8",
  "images-of-text-no-exception": "1.4.9",
  "text-spacing": "1.4.12",
  "keyboard": "2.1.1",
  "keyboard-no-exception": "2.1.3",
  "timing-adjustable": "2.2.1",
  "pause-stop-hide": "2.2.2",
  "interruptions": "2.2.4",
  "bypass-blocks": "2.4.1",
  "navigation-mechanisms-title": "2.4.2",
  "link-purpose-in-context": "2.4.4",
  "multiple-ways": "2.4.5",
  "headings-and-labels": "2.4.6",
  "focus-visible": "2.4.7",
  "location": "2.4.8",
  "link-purpose-link-only": "2.4.9",
  "section-headings": "2.4.10",
  "label-in-name": "2.5.3",
  "language-of-page": "3.1.1",
  "language-of-parts": "3.1.2",
  "unusual-words": "3.1.3",
  "abbreviations": "3.1.4",
  "on-focus": "3.2.1",
  "on-input": "3.2.2",
  "change-on-request": "3.2.5",

  "labels-or-instructions": "3.3.2",

  "parsing": "4.1.1",
  "name-role-value": "4.1.2",
} as const;
