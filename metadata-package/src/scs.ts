import { Level, SCSDescription, SCSKey, SCSMapping } from "src/types";

export const CSS_MAPPING:SCSMapping = {
  "1.1.1": {
    text: "non-text-content",
    level: "A"
  },
  "1.2.1": {
    text: "audio-only-and-video-only-prerecorded",
    level: "A"
  },
  "1.2.2": {
    text: "captions-prerecorded",
    level: "A"
  },
  "1.2.3": {
    text: "audio-description-or-media-alternative-prerecorded",
    level: "A"
  },
  "1.2.8": {
    text: "media-alternative-prerecorded",
    level: "AAA"
  },
  "1.3.1": {
    text: "info-and-relationships",
    level: "A"
  },
  "1.3.2": {
    text: "meaningful-sequence",
    level: "A"
  },
  "1.3.4": {
    text: "orientation",
    level: "AA"
  },
  "1.4.3": {
    text: "contrast-minimum",
    level: "AA"
  },
  "1.4.4": {
    text: "resize-text",
    level: "AA"
  },
  "1.4.5": {
    text: "images-of-text",
    level: "AA"
  },
  "1.4.6": {
    text: "contrast-enhanced",
    level: "AAA"
  },
  "1.4.8": {
    text: "visual-presentation",
    level: "AAA"
  },
  "1.4.9": {
    text: "images-of-text-no-exception",
    level: "AAA"
  },
  "1.4.12": {
    text: "text-spacing",
    level: "AA"
  },
  "2.1.1": {
    text: "keyboard",
    level: "A"
  },
  "2.1.3": {
    text: "keyboard-no-exception",
    level: "AAA"
  },
  "2.2.1": {
    text: "timing-adjustable",
    level: "A"
  },
  "2.2.2": {
    text: "pause-stop-hide",
    level: "A"
  },
  "2.2.4": {
    text: "interruptions",
    level: "AAA"
  },
  "2.4.1": {
    text: "bypass-blocks",
    level: "A"
  },
  "2.4.2": {
    text: "navigation-mechanisms-title",
    level: "A"
  },
  "2.4.4": {
    text: "link-purpose-in-context",
    level: "A"
  },
  "2.4.5": {
    text: "multiple-ways",
    level: "AA"
  },
  "2.4.6": {
    text: "headings-and-labels",
    level: "AA"
  },
  "2.4.7": {
    text: "focus-visible",
    level: "AA"
  },
  "2.4.8": {
    text: "location",
    level: "AAA"
  },
  "2.4.9": {
    text: "link-purpose-link-only",
    level: "AAA"
  },
  "2.4.10": {
    text: "section-headings",
    level: "AAA"
  },
  "2.5.3": {
    text: "label-in-name",
    level: "AAA"
  },
  "3.1.1": {
    text: "language-of-page",
    level: "A"
  },
  "3.1.2": {
    text: "language-of-parts",
    level: "A"
  },
  "3.1.3": {
    text: "unusual-words",
    level: "AAA"
  },
  "3.1.4": {
    text: "abbreviations",
    level: "AAA"
  },
  "3.2.1": {
    text: "on-focus",
    level: "A"
  },
  "3.2.2": {
    text: "on-input",
    level: "A"
  },
  "3.2.5": {
    text: "change-on-request",
    level: "AAA"
  },
  "3.3.2": {
    text: "labels-or-instructions",
    level: "A"
  },
  "4.1.1": {
    text: "parsing",
    level: "A"
  },
  "4.1.2": {
    text: "name-role-value",
    level: "A"
  },
} as const;



export const SCSKeyMapping: { [key in SCSDescription]: SCSKey } = {
  "non-text-content": "1.1.1",
  "audio-only-and-video-only-prerecorded": "1.2.1",
  "captions-prerecorded": "1.2.2",
  "audio-description-or-media-alternative-prerecorded": "1.2.3",
  "media-alternative-prerecorded": "1.2.8",
  "info-and-relationships": "1.3.1",
  "meaningful-sequence": "1.3.2",
  "orientation": "1.3.4",
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
