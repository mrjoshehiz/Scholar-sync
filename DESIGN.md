---
name: ScholarSync
description: A scholarship workspace inspired by the selected Talboost composition.
colors:
  canvas: "#141512"
  background: "#1e1f1d"
  surface: "#292a26"
  surface-raised: "#33342d"
  workspace-frame: "#30312d"
  working-panel: "#242620"
  navigation-track: "#1c1d19"
  foreground: "#f0eee7"
  secondary-text: "#b7b8ad"
  primary: "#ebc773"
  primary-text: "#27251e"
  focus-panel: "#232621"
  focus-text: "#f0eee7"
  photo-backplate: "#1d201bf5"
  border: "#414239"
  input-border: "#54564b"
  input: "#23241f"
  active-navigation: "#eceee5"
  active-navigation-text: "#26291f"
typography:
  body:
    fontFamily: "Scholar Sans, Arial, Helvetica, sans-serif"
    fontSize: "16px"
    lineHeight: 1.5
  label:
    fontSize: "14px"
  metadata:
    fontSize: "12px"
  display:
    fontFamily: "Scholar Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)"
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: "-0.035em"
rounded:
  control: "8px"
  panel: "16px"
  workspace: "26px"
  capsule: "28px"
spacing:
  tight: "8px"
  frame: "14px"
  group: "16px"
  overview-panel: "18px"
  panel: "24px"
  section: "28px"
components:
  action-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-text}"
    height: "42px"
  focus-application:
    backgroundColor: "{colors.focus-panel}"
    textColor: "{colors.focus-text}"
    rounded: "{rounded.panel}"
    padding: "18px"
---

## Overview
User selected reference 3, Talboost. Operate mode: horizontal navigation and a varied dashboard composition replace the previous sidebar layout. Charcoal and olive working surfaces, warm amber action controls, and a photographic application panel carry the direction. No decorative glow or generic AI visual effects.

## Colors
The dominant field stays dark. Body text uses warm white; secondary text uses light olive gray. The nearest scholarship sits over a library photograph with warm white text on dark backplates. Amber stays on controls and document progress. Semantic status colors are muted and paired with explicit labels. Award amount and checklist data come from saved records.

## Typography
Self-hosted Geist, named Scholar Sans. Display weight 450–500; task labels 14px, body 16px, secondary metadata 12px. Numbers use tabular variants for counts, deadlines and calendar dates. Display tracking never goes below -0.035em.

## Layout
The workspace frame has 14px padding and a maximum width of 1280px. A compact capsule header joins the outlined brand, shared horizontal navigation track, notifications and profile controls. The desktop overview uses four equal grid tracks with 8px gutters: the photographic application panel spans the upper-left two tracks, the monthly deadline calendar sits in the center, and the profile panel sits at the right. Document readiness spans the lower-left half and the application table spans the lower-right half. Greeting, four summary counts and the primary action share a compact row. At 1200px the grid becomes two columns, the profile spans a third row, and summary counts wrap onto their own row. At 980px navigation moves onto a second row. At 700px the dashboard stacks in application, calendar, profile, readiness and table order; navigation scrolls horizontally. At 400px forms use one column. Tables become stacked application rows on phones.

## Elevation & Depth
Working panels are separated by contrasting surface values. The framed workspace uses a thin structural border and a soft offset shadow; dialogs use a stronger offset blurred black shadow. Photographic content uses opaque dark text backplates for contrast. No ambient glows.

## Shapes
Working panels use 16px corners, controls 8px, and primary navigation/actions use capsule shapes inherited from the chosen reference. The outer workspace frame uses 26px corners and disappears at the phone breakpoint.

## Components
Calendar marks represent recorded deadlines; selecting one opens an application, with an accessible label listing all scholarships on that date. Month navigation is keyboard operable. The primary application panel shows the nearest deadline and first unfinished checklist item over a full-bleed library photograph, with readable dark backplates and an amber open action. Checklist completion bars show completed versus total real tasks for each document category across active applications; they are not decorative activity charts. Profile completeness reflects populated fields, including an honest empty profile in the public preview. The compact overview table prioritizes scholarship, deadline and status, while the full applications table retains award and checklist detail. A restrained preview notice labels the public sample workspace as fictional and makes sign-in available without displacing the working composition; preview edits remain ephemeral. Dialog motion is 180ms, drawers 240ms, using ease-out curves. Repeated interactions use 120ms feedback. Reduced motion removes animation and press transforms.

## Do's and Don'ts
Keep student data factual. Label samples as fictional. Use color alongside labels, never as the only eligibility or status indicator. Preserve focus outlines and the skip link. Do not introduce gradients, glows, sparkles, fake activity charts, invented endorsements, or invented outcomes.
