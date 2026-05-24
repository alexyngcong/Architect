# Yngcong Residence — 3-Storey Industrial-Modern Home

An interactive schematic design for a **3-storey industrial-modern house** with a
glass-wrapped **entertainment penthouse** and an **event garden**, designed for the real
402 m² corner lot on **TCT No. 097-2022002243** (Lot 1-A, Blk 8, Brgy. Tangub, Roxas City,
Capiz — owner Anna Lynn V. Yngcong).

This repo is a self-contained website: to-scale 2D drawings **plus a navigable 3D model**,
all working **offline** (Three.js is vendored locally in `vendor/`).

## View it

It must be served over HTTP (ES-module import maps don't work from `file://`):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(or any static server, e.g. `npx serve`).

The page has six sections: **Overview · 3D Model · Site · Floor Plans · Elevation/Section · Spec**.
In the 3D model, drag to orbit, scroll to zoom, right-drag to pan, and use the corner buttons
to jump to Aerial / Garden / Street / Rear views. If a browser lacks WebGL, the model falls
back to the axonometric drawing.

## The design

- **Lot:** 402 m² corner lot (~23 × 17.5 m), two 12 m road frontages (Road Lot 8 SE, Road Lot 10 NE).
  House pushed to the rear-left → an **L-shaped event garden (~200 m², lawn ~120 m²)** along both streets.
- **Ground floor** — 2-car covered garage, double-height foyer, full-height-glass living to the lanai,
  dining, clean + dirty kitchen, **helper's quarters** + service area, powder, stair/elevator.
- **Second floor** — **master suite** (ensuite + walk-in + private balcony) and **three bedrooms**,
  family lounge.
- **Third floor — entertainment** — a **double-height hall (5.5 m)** wrapped in floor-to-ceiling
  glass with black-steel mullions, bar/pantry, media lounge, and a **~45 m² roof-terrace balcony**
  over the garden.
- **Garden** — open event lawn + **outdoor event pavilion / outdoor kitchen**, vehicular gate (SE)
  and pedestrian gate (NE).
- **Style:** industrial modern — board-formed/exposed concrete, black structural steel, high glass,
  microcement floors. Deep concrete eaves temper the glass for Roxas City's hot, humid,
  typhoon-prone coastal climate.

≈ **379 m²** total floor area · **~13 m** tall.

## Layout

```
index.html            entry page
css/styles.css         styling (dark industrial theme)
js/main.js             page wiring (data, tabs, 3D, scroll-spy)
js/plans.js            floor-plan room lists + spec, from program.json
js/model.js            procedural Three.js 3D massing
data/program.json      single source of truth: room schedule / areas / spec
svg/*.svg              to-scale drawings (site, 3 floor plans, elevation, section, axonometric)
vendor/                Three.js + OrbitControls (vendored for offline use)
tools/gen.mjs          regenerates every SVG + program.json
```

## Regenerating the drawings

All SVGs and `data/program.json` come from one layout definition (in metres):

```bash
node tools/gen.mjs
```

Edit the `floors` / `site` objects in `tools/gen.mjs` to change rooms or dimensions, then re-run.

---

*Schematic design only — indicative dimensions and areas, not construction documents. Verify with a
licensed architect/engineer and the National Building Code (setbacks, structural, fire egress)
before building.*
