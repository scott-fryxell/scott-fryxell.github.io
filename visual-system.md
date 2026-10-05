# Blog diagram visual system

Rules for the SVGs in `static/diagrams/`. Derived by Intake from
`static/style.css` and the two diagrams already in that folder
(`frontier-zone.svg`, `one-skills-dir.svg`). Read this before drawing a new
diagram.

## Color

- Neutral fill `#c9cfd6`, ink `#1b1f24`, meta `#6b7480`, de-emphasis `#7f93a8`, accent `#d0342c`, knockout `#f7f5f1`.
  why: these are the values the two existing diagrams use, so a new one sits
  beside them without looking foreign.
- The accent marks the one thing the diagram is about - a highlighted path,
  the session, the point - never decoration.
  why: two colors and one accent keeps the diagram readable at a glance.
- Dark mode lives inside the SVG: accent `#e2554c`, accent-bright `#f0776e`,
  neutral `#4a525c`, ink `#e6eaee`, meta `#9aa4b0`, knockout `#1b1a18`.
  why: an SVG opened standalone cannot read the page's CSS variables, and the
  site flips on `prefers-color-scheme`.
- Page tokens (`--blue`, `--red`, `--surface`) are for the page, not the
  diagrams.
  why: `--red` is a muted brick (`hsl(0,35%,38%)`) while the diagrams use a
  brighter red; matching the folder matters more than matching the page.
  Reconcile only by redrawing the two existing diagrams.

## Type

- `font: <weight> <size>px system-ui, sans-serif` inside the SVG.
  why: the existing diagrams use system-ui, not the page's Lato, so an SVG
  renders the same embedded or on its own.
- Sizes: 12 meta, 13 edge, 14 label, 16 caption, 17 name, 19 emphasis, 30 headline. Weight 400 meta, 600 label, 700 emphasis.
  why: this is the scale the existing diagrams already observe.
- Letter-spacing `.02em` to `.1em` on emphasis and small caps.
  why: holds uppercase and short labels apart at diagram sizes.

## Stroke

- 1 hairline rule, 1.5 wire, 2 emphasis, 2.5 graded line. None for fills.
  why: weight carries hierarchy so color does not have to.

## Grid and module

- 8px base unit. Boxes: solid 48-60 tall, panel 76; widths 150-200 in a row, up to 660 for a host bar. Corner `rx="6"`.
  why: keeps rows aligned across diagrams drawn in separate files.
- Left margin 24. Arrow tips `l14 6-14 6z` on a 1.5px wire. Wires are cubic curves, not elbows.
  why: the curved wire is the house connector; it reads as flow rather than
  as a schematic.
- `viewBox` sized to content with matching `width`/`height`.
  why: the page scales it; the file stays honest about its own size.

## Accessibility and output

- `role="img"`, `aria-labelledby`, `<title>`, and a `<desc>` that describes the diagram in prose.
  why: the desc is the diagram for anyone who cannot see it, and it forces the
  diagram to have one describable meaning.
- `print-color-adjust: exact` on the root.
  why: keeps the palette through print and PDF.
- One diagram per file at `static/diagrams/<slug>.svg`, referenced as `/diagrams/<slug>.svg`.
  why: that is the existing convention and what the page resolves.

## Primitive map

- **Module** - rounded rect, `rx 6`, or an outlined accent rect for the subject.
- **Grid** - 8px unit, 24px margin, rows on 48-60px boxes.
- **Repetition** - boxes in a row or column, wires fanned between.
- **Transformation** - cubic wires and translate-only arrow tips.
- **Color** - gray neutral, red the subject, blue-gray de-emphasized.
- **Randomness** - none. These are explanatory diagrams; every position is
  chosen.

## Keepers

The brayness webspaces article set, `static/diagrams/`:

- `one-session-many-doors.svg` - getting in: the doors into a session.
- `two-ways-to-be-seen.svg` - getting seen: served from the session, or published.
- `plans-site.svg` - the worked example: a session builds the plans site.
- `boot-freeze-fork.svg` - start once, freeze, hand out copies.
- `three-sleeps.svg` - what survives a memory sleep and a disk sleep.
- `one-host-many-sessions.svg` - many sessions on one host, and the cost when it sleeps.
