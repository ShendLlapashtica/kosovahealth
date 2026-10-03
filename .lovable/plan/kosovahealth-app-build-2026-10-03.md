# KosovaHealth app build

## Goal
Recreate the supplied KosovaHealth patient experience as a polished, responsive web app using the reference HTML as the visual and content source.

## What I’ll build
- A branded sign-in screen with patient and clinic access modes, secure-login messaging, password visibility, remember-me, and a demo sign-in path.
- A persistent KosovaHealth application shell with navigation for dashboard, lab input, diagnostics, pharmacy finder, and prescriptions.
- A lab ingestion workspace with upload states, parsed biomarker review, CSV import, manual biomarker/vitals entry, validation states, and save/analyze feedback.
- A diagnostics view with health score, vital summaries, deficiency diagrams, biomarker filtering, intervention protocols, prescriptions, and pharmacy handoff.
- A Prishtina pharmacy finder with zone and availability filters, product inventory, pharmacy selection, prescription matching, reservation/dispatch actions, and pharmacy detail information.
- Responsive layouts matching the desktop references while remaining usable on phones.

## Interaction model
- Demo sign-in transitions into the clinical workspace without requiring a real account.
- Navigation switches between the supplied screen families.
- Upload/import controls use realistic local demo states; values remain editable.
- Analyze actions update the diagnostics experience; reservation and dispatch controls provide clear confirmation.
- Language and filter controls visibly update their selected state.

## Visual direction
- Follow the references closely: clinical teal, pale mint surfaces, restrained coral alerts, white panels, compact radii, Plus Jakarta Sans typography, and dense medical-data layouts.
- Reuse the supplied hotlinked logo and product imagery where present.
- Preserve bilingual Albanian/English terminology and Prishtina-specific content from the references.

## Technical details
- Implement in the existing TanStack Start app with React state and TanStack Router.
- Split major screens and reusable clinical UI into focused components.
- Define all colors, typography, shadows, and state styling as semantic design tokens in the global stylesheet.
- Add unique page metadata and retain accessible labels, keyboard controls, focus states, and reduced-motion support.
- Validate with the live preview at desktop and mobile sizes, then check current diagnostics and tests.
