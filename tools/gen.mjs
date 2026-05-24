// Generator for the Yngcong Residence design package.
// Produces to-scale SVG drawings (site plan, 3 floor plans, elevations, section,
// axonometric) and data/program.json from a single layout definition in metres.
// Run: node tools/gen.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p, s) => { mkdirSync(dirname(join(ROOT, p)), { recursive: true }); writeFileSync(join(ROOT, p), s); };

// ---- palette (industrial modern, dark theme drawings) ----
const C = {
  paper: '#0f1113', ink: '#e8e6e1', wall: '#0a0b0c', wallFill: '#23262b',
  roomA: '#1b1f24', roomB: '#202428', glass: '#5bb6d6', glassFill: 'rgba(91,182,214,0.16)',
  open: '#7a8088', concrete: '#3a3f45', steel: '#0c0d0f', accent: '#d98a3d',
  grass: '#1d2a1c', grassEdge: '#2f4a2c', road: '#15171a', dim: '#8a9099', mut: '#646a72',
};
const f = (n, d = 2) => Number(n.toFixed(d));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ============================================================ LAYOUT (metres)
// House envelope 13.5 (x, width W->E) x 10.5 (y, depth front->rear).
// Plan convention: y=0 is the FRONT (garden side), drawn at the BOTTOM.
const HW = 13.5, HD = 10.5;

const floors = {
  ground: {
    name: 'Ground Floor', level: 0, height: 3.6, gfa: 142,
    blurb: 'Arrival, living and service. Double-height foyer void, full-height glass living opening to the lanai and event garden.',
    rooms: [
      { n: 'Covered Garage', sub: '2 cars', x: 0, y: 0, w: 6.2, h: 6.0 },
      { n: 'Foyer', sub: 'double-height void', x: 6.2, y: 0, w: 2.8, h: 2.5 },
      { n: 'Powder', x: 6.2, y: 2.5, w: 2.8, h: 1.2 },
      { n: 'Stair & Elevator', x: 6.2, y: 3.7, w: 2.8, h: 2.3 },
      { n: 'Living', x: 9.0, y: 0, w: 4.5, h: 6.0, glass: ['S', 'E'] },
      { n: 'Kitchen', sub: 'clean', x: 6.2, y: 6.0, w: 2.8, h: 4.5 },
      { n: 'Dining', x: 9.0, y: 6.0, w: 4.5, h: 4.5, glass: ['E'] },
      { n: "Helper's Room", x: 0, y: 6.0, w: 3.0, h: 2.5 },
      { n: 'Service T&B', x: 0, y: 8.5, w: 3.0, h: 2.0 },
      { n: 'Dirty Kitchen / Laundry', x: 3.0, y: 6.0, w: 3.2, h: 4.5 },
      { n: 'Lanai', sub: 'covered, open to garden', x: 9.0, y: -2.6, w: 4.5, h: 2.6, open: true },
    ],
  },
  second: {
    name: 'Second Floor', level: 1, height: 3.2, gfa: 142,
    blurb: 'Sleeping level. Master suite with ensuite, walk-in and private balcony, plus three bedrooms and a family lounge.',
    rooms: [
      { n: 'Bedroom 2', x: 0, y: 0, w: 4.5, h: 3.5 },
      { n: 'Bedroom 3', x: 0, y: 3.5, w: 4.5, h: 3.5 },
      { n: 'Shared Bath', x: 0, y: 7.0, w: 2.3, h: 3.5 },
      { n: 'Linen', x: 2.3, y: 7.0, w: 2.2, h: 3.5 },
      { n: 'Family Lounge', x: 4.5, y: 0, w: 4.5, h: 4.0 },
      { n: 'Stair, Elevator & Hall', x: 4.5, y: 4.0, w: 4.5, h: 3.0 },
      { n: 'Bedroom 4', x: 4.5, y: 7.0, w: 4.5, h: 3.5 },
      { n: 'Master Bedroom', x: 9.0, y: 0, w: 4.5, h: 6.5, glass: ['S', 'E'] },
      { n: 'Master Ensuite', x: 9.0, y: 6.5, w: 2.2, h: 4.0 },
      { n: 'Walk-in Closet', x: 11.2, y: 6.5, w: 2.3, h: 4.0 },
      { n: 'Master Balcony', x: 9.0, y: -2.2, w: 4.5, h: 2.2, open: true },
    ],
  },
  third: {
    name: 'Third Floor — Entertainment', level: 2, height: 5.5, gfa: 95,
    blurb: 'The entertainment level: a double-height hall (5.5 m) wrapped in floor-to-ceiling glass with black-steel mullions, a bar, and a large roof-terrace balcony over the garden.',
    rooms: [
      { n: 'Stair & Elevator', x: 4.5, y: 3.0, w: 2.0, h: 2.3 },
      { n: 'Powder', x: 4.5, y: 5.3, w: 2.0, h: 1.4 },
      { n: 'Media / Lounge', x: 4.5, y: 6.7, w: 2.0, h: 1.9 },
      { n: 'Bar / Pantry', x: 4.5, y: 8.6, w: 2.0, h: 1.9 },
      { n: 'Entertainment Hall', sub: 'double-height, high glass', x: 6.5, y: 3.0, w: 7.0, h: 7.5, glass: ['S', 'E', 'N'] },
      { n: 'Roof Terrace / Balcony', x: 0, y: 0, w: 13.5, h: 3.0, open: true },
      { n: 'Roof Terrace', x: 0, y: 3.0, w: 4.5, h: 7.5, open: true },
    ],
  },
};

// site: lot 23.0 (x) x 17.5 (y). SE street = bottom (Road Lot 8). NE street = right (Road Lot 10).
const LOTW = 23.0, LOTD = 17.5;
const HOUSE_X = 2.0, HOUSE_Y = 7.0; // house origin on the lot
const site = {
  lot: { w: LOTW, d: LOTD },
  features: [
    { n: 'EVENT LAWN', x: 0, y: 0, w: 23.0, h: 7.0, kind: 'grass' },
    { n: '', x: 15.5, y: 7.0, w: 7.5, h: 10.5, kind: 'grass' },
    { n: 'House Footprint', x: HOUSE_X, y: HOUSE_Y, w: HW, h: HD, kind: 'house' },
    { n: 'Driveway / Car Court', x: 2.0, y: 0.0, w: 6.2, h: 7.0, kind: 'paving' },
    { n: 'Lanai', x: 11.0, y: 5.0, w: 4.5, h: 2.0, kind: 'deck' },
    { n: 'Event Pavilion + Outdoor Kitchen', x: 17.8, y: 9.0, w: 4.5, h: 4.2, kind: 'pavilion' },
  ],
  gates: [
    { n: 'VEHICULAR GATE', x: 2.0, y: 0, w: 6.2, side: 'S' },
    { n: 'PEDESTRIAN GATE', x: 23.0, y: 11.0, w: 3.0, side: 'E' },
  ],
  trees: [[18.0, 4.0], [20.5, 5.5], [16.7, 14.5], [21.0, 15.5], [6.5, 3.0], [12.5, 2.4]],
  streets: { S: 'ROAD LOT 8  ·  SE  ·  12 m WIDE', E: 'ROAD LOT 10  ·  NE  ·  12 m WIDE', W: 'LOT 15, BLK 8 (adjacent)', N: 'rear boundary (NW)' },
  setbacks: { S: 5.0, E: 3.0, W: 2.0, N: 2.0 },
};

// ================================================================ SVG helpers
const S = 30;          // px per metre for plans
const ML = 70, MT = 60, MR = 40, MB = 92; // margins

function frame(wpx, hpx, title, sub) {
  return {
    head: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${wpx} ${hpx}" font-family="'Segoe UI',Helvetica,Arial,sans-serif">
<rect width="${wpx}" height="${hpx}" fill="${C.paper}"/>
<text x="${ML}" y="32" fill="${C.ink}" font-size="20" font-weight="700" letter-spacing="1.5">${esc(title)}</text>
${sub ? `<text x="${ML}" y="50" fill="${C.mut}" font-size="11.5" letter-spacing="0.5">${esc(sub)}</text>` : ''}`,
    foot: `</svg>`,
  };
}

function scaleBar(x, y, metres = 5, s = S) {
  const len = metres * s;
  let g = `<g stroke="${C.ink}" stroke-width="1.4" fill="${C.ink}" font-size="10">`;
  g += `<line x1="${x}" y1="${y}" x2="${x + len}" y2="${y}"/>`;
  for (let i = 0; i <= metres; i++) {
    const tx = x + i * s, fill = i % 2 ? C.paper : C.ink;
    if (i < metres) g += `<rect x="${tx}" y="${y - 4}" width="${s}" height="8" fill="${fill}" stroke="${C.ink}" stroke-width="0.8"/>`;
  }
  g += `<text x="${x}" y="${y + 18}" stroke="none">0</text>`;
  g += `<text x="${x + len - 4}" y="${y + 18}" stroke="none">${metres} m</text>`;
  return g + `</g>`;
}

function northArrow(cx, cy, rot = 0) {
  return `<g transform="translate(${cx},${cy}) rotate(${rot})">
<polygon points="0,-16 5,8 0,3 -5,8" fill="${C.ink}"/>
<text x="0" y="-20" fill="${C.ink}" font-size="11" font-weight="700" text-anchor="middle">N</text></g>`;
}

// -------- floor plan
function planSVG(key) {
  const fl = floors[key];
  const minY = Math.min(0, ...fl.rooms.map(r => r.y));
  const totD = HD - minY;
  const wpx = ML + HW * S + MR;
  const hpx = MT + totD * S + MB;
  const mx = x => ML + x * S;
  const my = y => MT + (HD - y) * S; // y=0 at bottom of house body

  const fr = frame(wpx, hpx, fl.name, `${fl.gfa} m²  ·  slab-to-slab ${fl.height} m  ·  scale 1:100`);
  let s = fr.head;

  // rooms
  fl.rooms.forEach((r, i) => {
    const px = mx(r.x), py = my(r.y + r.h), w = r.w * S, h = r.h * S;
    if (r.open) {
      s += `<rect x="${px}" y="${py}" width="${w}" height="${h}" fill="rgba(122,128,136,0.10)" stroke="${C.open}" stroke-width="1.6" stroke-dasharray="7 5"/>`;
    } else {
      s += `<rect x="${px}" y="${py}" width="${w}" height="${h}" fill="${i % 2 ? C.roomB : C.roomA}" stroke="${C.wall}" stroke-width="3.2"/>`;
    }
    // glass edges
    (r.glass || []).forEach(side => {
      let x1, y1, x2, y2;
      if (side === 'S') { x1 = px; y1 = py + h; x2 = px + w; y2 = py + h; }
      if (side === 'N') { x1 = px; y1 = py; x2 = px + w; y2 = py; }
      if (side === 'E') { x1 = px + w; y1 = py; x2 = px + w; y2 = py + h; }
      if (side === 'W') { x1 = px; y1 = py; x2 = px; y2 = py + h; }
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.glass}" stroke-width="4.5"/>`;
    });
    // label
    const cx = px + w / 2, cy = py + h / 2;
    const small = (r.w < 2.4 || r.h < 1.6);
    const fs = small ? 8.5 : 11;
    s += `<text x="${cx}" y="${cy - (small ? 1 : 4)}" fill="${r.open ? C.open : C.ink}" font-size="${fs}" font-weight="600" text-anchor="middle">${esc(r.n)}</text>`;
    if (r.sub && !small) s += `<text x="${cx}" y="${cy + 9}" fill="${C.mut}" font-size="8.5" text-anchor="middle" font-style="italic">${esc(r.sub)}</text>`;
    if (!r.open) s += `<text x="${cx}" y="${cy + (r.sub && !small ? 22 : (small ? 9 : 16))}" fill="${C.dim}" font-size="${small ? 7.5 : 9}" text-anchor="middle">${f(r.w * r.h, 1)} m²</text>`;
  });

  // overall dimensions
  const yB = my(minY) + 26;
  s += `<g stroke="${C.dim}" stroke-width="1" fill="${C.dim}" font-size="10">
<line x1="${mx(0)}" y1="${yB}" x2="${mx(HW)}" y2="${yB}"/>
<line x1="${mx(0)}" y1="${yB - 4}" x2="${mx(0)}" y2="${yB + 4}"/>
<line x1="${mx(HW)}" y1="${yB - 4}" x2="${mx(HW)}" y2="${yB + 4}"/>
<text x="${mx(HW / 2)}" y="${yB - 5}" fill="${C.dim}" text-anchor="middle">${f(HW, 1)} m</text></g>`;
  const xL = mx(0) - 22;
  s += `<g stroke="${C.dim}" stroke-width="1" fill="${C.dim}" font-size="10">
<line x1="${xL}" y1="${my(HD)}" x2="${xL}" y2="${my(0)}"/>
<line x1="${xL - 4}" y1="${my(HD)}" x2="${xL + 4}" y2="${my(HD)}"/>
<line x1="${xL - 4}" y1="${my(0)}" x2="${xL + 4}" y2="${my(0)}"/>
<text x="${xL - 6}" y="${my(HD / 2)}" fill="${C.dim}" text-anchor="middle" transform="rotate(-90 ${xL - 6} ${my(HD / 2)})">${f(HD, 1)} m</text></g>`;

  // legend + scale + north
  s += scaleBar(ML, hpx - 30);
  s += northArrow(wpx - 60, hpx - 52);
  s += `<g font-size="10" fill="${C.mut}"><rect x="${wpx - 220}" y="${hpx - 40}" width="16" height="6" fill="none" stroke="${C.glass}" stroke-width="3"/><text x="${wpx - 198}" y="${hpx - 34}">full-height glazing</text></g>`;
  return s + fr.foot;
}

// -------- site plan
function siteSVG() {
  const s0 = 26; // px/m (lot is bigger)
  const wpx = ML + LOTW * s0 + MR + 30;
  const hpx = MT + LOTD * s0 + MB;
  const mx = x => ML + x * s0;
  const my = y => MT + (LOTD - y) * s0;
  const fr = frame(wpx, hpx, 'Site Development Plan', `Lot 1-A, Blk 8 · 402 m² corner lot · Brgy. Tangub, Roxas City · scale 1:150`);
  let s = fr.head;

  // road tarmac
  s += `<rect x="${mx(0) - 22}" y="${my(0)}" width="${LOTW * s0 + 22}" height="22" fill="${C.road}"/>`;
  s += `<rect x="${mx(LOTW)}" y="${my(LOTD) - 22}" width="22" height="${LOTD * s0 + 22}" fill="${C.road}"/>`;

  // lot boundary
  s += `<rect x="${mx(0)}" y="${my(LOTD)}" width="${LOTW * s0}" height="${LOTD * s0}" fill="${C.grass}" stroke="${C.grassEdge}" stroke-width="2"/>`;

  // features
  for (const ft of site.features) {
    const px = mx(ft.x), py = my(ft.y + ft.h), w = ft.w * s0, h = ft.h * s0;
    if (ft.kind === 'grass') continue;
    const styles = {
      house: `fill="${C.wallFill}" stroke="${C.ink}" stroke-width="2.4"`,
      paving: `fill="#26292e" stroke="${C.mut}" stroke-width="1" stroke-dasharray="4 4"`,
      deck: `fill="#2a2622" stroke="${C.accent}" stroke-width="1.4"`,
      pavilion: `fill="#241f1a" stroke="${C.accent}" stroke-width="2"`,
    };
    s += `<rect x="${px}" y="${py}" width="${w}" height="${h}" ${styles[ft.kind] || ''}/>`;
    if (ft.n) {
      const cx = px + w / 2, cy = py + h / 2;
      s += `<text x="${cx}" y="${cy}" fill="${ft.kind === 'house' ? C.ink : C.accent}" font-size="${ft.kind === 'grass' ? 12 : 9.5}" font-weight="600" text-anchor="middle">${esc(ft.n)}</text>`;
    }
  }
  // house interior hint: floor count
  const hpx0 = mx(HOUSE_X), hpy0 = my(HOUSE_Y + HD);
  s += `<text x="${hpx0 + HW * s0 / 2}" y="${hpy0 + HW * s0 / 2 - 4}" fill="${C.mut}" font-size="9" text-anchor="middle">3 storeys · garage at front-left</text>`;

  // event lawn label
  s += `<text x="${mx(11.5)}" y="${my(3.3)}" fill="${C.grassEdge}" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="2">EVENT LAWN</text>`;

  // trees
  for (const [tx, ty] of site.trees) s += `<circle cx="${mx(tx)}" cy="${my(ty)}" r="9" fill="#24351f" stroke="${C.grassEdge}" stroke-width="1.5"/>`;

  // gates
  for (const g of site.gates) {
    if (g.side === 'S') s += `<line x1="${mx(g.x)}" y1="${my(0)}" x2="${mx(g.x + g.w)}" y2="${my(0)}" stroke="${C.accent}" stroke-width="4"/><text x="${mx(g.x + g.w / 2)}" y="${my(0) + 16}" fill="${C.accent}" font-size="8.5" text-anchor="middle">${esc(g.n)}</text>`;
    if (g.side === 'E') s += `<line x1="${mx(LOTW)}" y1="${my(g.x)}" x2="${mx(LOTW)}" y2="${my(g.x + g.w)}" stroke="${C.accent}" stroke-width="4"/><text x="${mx(LOTW) - 6}" y="${my(g.x + g.w / 2)}" fill="${C.accent}" font-size="8.5" text-anchor="end">${esc(g.n)}</text>`;
  }

  // street labels
  s += `<text x="${mx(LOTW / 2)}" y="${my(0) + 32}" fill="${C.mut}" font-size="10" text-anchor="middle" letter-spacing="1">${esc(site.streets.S)}</text>`;
  s += `<text x="${mx(LOTW) + 16}" y="${my(LOTD / 2)}" fill="${C.mut}" font-size="10" text-anchor="middle" letter-spacing="1" transform="rotate(90 ${mx(LOTW) + 16} ${my(LOTD / 2)})">${esc(site.streets.E)}</text>`;
  s += `<text x="${mx(0) - 14}" y="${my(LOTD / 2)}" fill="${C.mut}" font-size="9" text-anchor="middle" transform="rotate(-90 ${mx(0) - 14} ${my(LOTD / 2)})">${esc(site.streets.W)}</text>`;
  s += `<text x="${mx(LOTW / 2)}" y="${my(LOTD) + 15}" fill="${C.mut}" font-size="9" text-anchor="middle">${esc(site.streets.N)}</text>`;

  s += scaleBar(ML, hpx - 28, 5, s0);
  s += northArrow(wpx - 54, hpx - 50, 18);
  return s + fr.foot;
}

// -------- elevation / section
const FH = { g: 3.6, f2: 3.2, f3: 5.5 };
const TOTH = FH.g + FH.f2 + FH.f3;
function mullions(x, y, w, h, cols, rows, s) {
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.glassFill}" stroke="${C.steel}" stroke-width="2"/>`;
  for (let i = 1; i < cols; i++) out += `<line x1="${x + (w / cols) * i}" y1="${y}" x2="${x + (w / cols) * i}" y2="${y + h}" stroke="${C.steel}" stroke-width="1.6"/>`;
  for (let j = 1; j < rows; j++) out += `<line x1="${x}" y1="${y + (h / rows) * j}" x2="${x + w}" y2="${y + (h / rows) * j}" stroke="${C.steel}" stroke-width="1.6"/>`;
  return out;
}
function elevationSVG() {
  const s = 34, w = HW;
  const wpx = ML + w * s + MR, hpx = MT + TOTH * s + MB + 16;
  const gl = MT + TOTH * s; // ground line y
  const mx = x => ML + x * s;
  const yOf = zTop => gl - zTop * s;
  const fr = frame(wpx, hpx, 'Front Elevation (Garden / South-East)', 'Industrial modern · exposed concrete + black steel + high glass · scale 1:100');
  let out = fr.head;
  // sky/ground
  out += `<line x1="${ML - 20}" y1="${gl}" x2="${mx(w) + 20}" y2="${gl}" stroke="${C.ink}" stroke-width="2.5"/>`;
  // GROUND FLOOR: garage door (left) + glazed living (right) + concrete
  const g0 = yOf(0), g1 = yOf(FH.g);
  out += `<rect x="${mx(0)}" y="${g1}" width="${6.2 * s}" height="${FH.g * s}" fill="${C.concrete}" stroke="${C.steel}" stroke-width="1.5"/>`;
  out += `<rect x="${mx(0.5)}" y="${yOf(2.6)}" width="${5.2 * s}" height="${2.4 * s}" fill="#191b1e" stroke="${C.steel}" stroke-width="1.5"/>`; // garage door
  for (let i = 1; i < 6; i++) out += `<line x1="${mx(0.5) + (5.2 * s / 6) * i}" y1="${yOf(2.6)}" x2="${mx(0.5) + (5.2 * s / 6) * i}" y2="${g0}" stroke="${C.steel}" stroke-width="1"/>`;
  out += mullions(mx(6.4), g1, (HW - 6.4) * s, FH.g * s, 5, 2, s); // living glass
  // SECOND FLOOR: concrete band + glazing + cantilever shadow
  const s1 = yOf(FH.g), s2 = yOf(FH.g + FH.f2);
  out += `<rect x="${mx(0)}" y="${s2}" width="${w * s}" height="${FH.f2 * s}" fill="${C.concrete}" stroke="${C.steel}" stroke-width="1.5"/>`;
  out += mullions(mx(0.6), s2 + 12, 4.0 * s, FH.f2 * s - 24, 3, 1, s); // bedroom windows
  out += mullions(mx(8.6), s2 + 12, 4.4 * s, FH.f2 * s - 24, 4, 1, s); // master windows
  // master balcony railing (front)
  out += `<line x1="${mx(8.6)}" y1="${s1 - 2}" x2="${mx(HW)}" y2="${s1 - 2}" stroke="${C.steel}" stroke-width="2.5"/>`;
  for (let i = 0; i <= 9; i++) out += `<line x1="${mx(8.6) + (4.9 * s / 9) * i}" y1="${s1 - 2}" x2="${mx(8.6) + (4.9 * s / 9) * i}" y2="${s1 - 22}" stroke="${C.steel}" stroke-width="1.2"/>`;
  // THIRD FLOOR: full-height glass box (double height) + concrete blade left + parapet
  const t1 = yOf(FH.g + FH.f2), t2 = yOf(TOTH);
  out += `<rect x="${mx(0)}" y="${t2}" width="${4.5 * s}" height="${FH.f3 * s}" fill="${C.concrete}" stroke="${C.steel}" stroke-width="1.5"/>`; // concrete blade
  out += mullions(mx(4.5), t2, (HW - 4.5) * s, FH.f3 * s, 6, 4, s); // big entertainment glass
  out += `<rect x="${mx(0)}" y="${t2 - 10}" width="${w * s}" height="10" fill="${C.steel}"/>`; // parapet
  // terrace railing across front of 3rd-floor terrace (over 2nd roof, left part)
  out += `<line x1="${mx(0)}" y1="${t1 - 2}" x2="${mx(4.5)}" y2="${t1 - 2}" stroke="${C.steel}" stroke-width="2.5"/>`;
  // dimension of total height
  const dx = mx(w) + 22;
  out += `<g stroke="${C.dim}" stroke-width="1" fill="${C.dim}" font-size="10">
<line x1="${dx}" y1="${g0}" x2="${dx}" y2="${t2}"/>
<line x1="${dx - 4}" y1="${g0}" x2="${dx + 4}" y2="${g0}"/><line x1="${dx - 4}" y1="${t2}" x2="${dx + 4}" y2="${t2}"/>
<text x="${dx + 4}" y="${(g0 + t2) / 2}" transform="rotate(90 ${dx + 4} ${(g0 + t2) / 2})" text-anchor="middle">${f(TOTH, 1)} m overall</text></g>`;
  // floor tags
  const tag = (yA, yB, t) => `<text x="${ML - 10}" y="${(yA + yB) / 2}" fill="${C.mut}" font-size="9.5" text-anchor="end">${t}</text>`;
  out += tag(g0, g1, 'GF 3.6') + tag(s1, s2, '2F 3.2') + tag(t1, t2, '3F 5.5');
  out += scaleBar(ML, hpx - 26, 5, s);
  return out + fr.foot;
}

function sectionSVG() {
  const s = 34, w = HD; // section cut along depth
  const wpx = ML + w * s + MR + 130, hpx = MT + TOTH * s + MB + 16;
  const gl = MT + TOTH * s;
  const mx = x => ML + x * s;
  const yOf = z => gl - z * s;
  const fr = frame(wpx, hpx, 'Section A–A (through stair & entertainment hall)', 'Double-height 3rd-floor hall · scale 1:100');
  let out = fr.head;
  out += `<line x1="${ML - 10}" y1="${gl}" x2="${mx(w) + 10}" y2="${gl}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const slab = (z) => `<rect x="${mx(0)}" y="${yOf(z) - 4}" width="${w * s}" height="8" fill="${C.concrete}"/>`;
  // outer walls
  out += `<rect x="${mx(0)}" y="${yOf(TOTH)}" width="${w * s}" height="${TOTH * s}" fill="none" stroke="${C.ink}" stroke-width="2.4"/>`;
  out += slab(0) + slab(FH.g) + slab(FH.g + FH.f2);
  // double-height: NO slab between 3F top — show open volume with glass on right (garden) side
  out += mullions(mx(0) + 4, yOf(TOTH) + 4, 6, FH.f3 * s - 8, 1, 4, s); // glass strip left (illustrative)
  out += `<rect x="${mx(w) - 10}" y="${yOf(TOTH) + 4}" width="6" height="${FH.f3 * s - 8}" fill="${C.glassFill}" stroke="${C.steel}" stroke-width="1.5"/>`;
  // room labels
  const lab = (z0, z1, t) => `<text x="${mx(w / 2)}" y="${(yOf(z0) + yOf(z1)) / 2}" fill="${C.mut}" font-size="10" text-anchor="middle">${t}</text>`;
  out += lab(0, FH.g, 'Living / Foyer void');
  out += lab(FH.g, FH.g + FH.f2, 'Bedrooms');
  out += `<text x="${mx(w / 2)}" y="${yOf(FH.g + FH.f2 + FH.f3 / 2)}" fill="${C.ink}" font-size="12" font-weight="700" text-anchor="middle">ENTERTAINMENT HALL · 5.5 m</text>`;
  // stair zig-zag (illustrative) at left
  let sx = mx(0.4), sy = gl;
  out += `<polyline fill="none" stroke="${C.mut}" stroke-width="1.6" points="`;
  let pts = '';
  const steps = 30, run = (3.0 * s) / steps;
  for (let i = 0; i < steps; i++) { pts += `${sx},${sy} ${sx + run},${sy} `; sx += run; sy -= (TOTH * s) / steps; }
  out += pts + `"/>`;
  out += scaleBar(ML, hpx - 26, 5, s);
  return out + fr.foot;
}

// -------- axonometric (hero, guaranteed visual)
function axonSVG() {
  const wpx = 980, hpx = 660;
  const s = 16;                 // px/m
  const ox = 452, oy = 215;     // origin (lot corner) on screen
  const cos = Math.cos(Math.PI / 6), sin = Math.sin(Math.PI / 6);
  const iso = (x, y, z) => [ox + (x - y) * cos * s, oy + (x + y) * sin * s - z * s];
  const P = (pts) => pts.map(p => p.join(',')).join(' ');
  const fr = frame(wpx, hpx, 'Yngcong Residence — Axonometric', '3-storey industrial-modern home · 402 m² corner lot · Roxas City, Capiz');
  let out = fr.head;

  // ground / lot plane
  const A = iso(0, 0, 0), B = iso(LOTW, 0, 0), Cc = iso(LOTW, LOTD, 0), D = iso(0, LOTD, 0);
  out += `<polygon points="${P([A, B, Cc, D])}" fill="${C.grass}" stroke="${C.grassEdge}" stroke-width="1.5"/>`;
  // event lawn band + driveway
  const dv = [iso(2, 0, 0), iso(8.2, 0, 0), iso(8.2, 7, 0), iso(2, 7, 0)];
  out += `<polygon points="${P(dv)}" fill="#26292e"/>`;
  // pavilion (simple box)
  box(17.8, 9.0, 4.5, 4.2, 2.6, '#2a241d', '#1c1812');
  // trees
  for (const [tx, ty] of [[20.5, 5.0], [16.7, 14.5], [21.0, 15.0], [12.5, 2.4]]) {
    const tp = iso(tx, ty, 0), tt = iso(tx, ty, 2.6);
    out += `<line x1="${tp[0]}" y1="${tp[1]}" x2="${tt[0]}" y2="${tt[1]}" stroke="#3a4a33" stroke-width="3"/><circle cx="${tt[0]}" cy="${tt[1]}" r="11" fill="#26381f" stroke="${C.grassEdge}"/>`;
  }

  // helper to draw an extruded box with top + 2 visible faces, optional glass faces
  function box(x, y, w, d, h, top, sideShade, glassSides = [], z0 = 0) {
    const p000 = iso(x, y, z0), p100 = iso(x + w, y, z0), p110 = iso(x + w, y + d, z0), p010 = iso(x, y + d, z0);
    const t000 = iso(x, y, z0 + h), t100 = iso(x + w, y, z0 + h), t110 = iso(x + w, y + d, z0 + h), t010 = iso(x, y + d, z0 + h);
    // right face (x+w) — faces viewer-right (garden/NE)
    const rightGlass = glassSides.includes('E');
    out += `<polygon points="${P([p100, p110, t110, t100])}" fill="${rightGlass ? 'rgba(91,182,214,0.22)' : sideShade}" stroke="${C.steel}" stroke-width="1.3"/>`;
    if (rightGlass) out += glassGrid([p100, p110, t110, t100], 5, 4);
    // front face (y) — faces viewer (south/garden)
    const frontGlass = glassSides.includes('S');
    out += `<polygon points="${P([p000, p100, t100, t000])}" fill="${frontGlass ? 'rgba(91,182,214,0.22)' : adjust(sideShade, 14)}" stroke="${C.steel}" stroke-width="1.3"/>`;
    if (frontGlass) out += glassGrid([p000, p100, t100, t000], 5, 4);
    // top
    out += `<polygon points="${P([t000, t100, t110, t010])}" fill="${top}" stroke="${C.steel}" stroke-width="1.3"/>`;
    return { t000, t100, t110, t010 };
  }
  function glassGrid(quad, cols, rows) {
    const [a, b, , d] = quad; let g = '';
    for (let i = 1; i < cols; i++) { const x1 = lerp(a, b, i / cols), x2 = lerp(d, quad[2], i / cols); g += `<line x1="${x1[0]}" y1="${x1[1]}" x2="${x2[0]}" y2="${x2[1]}" stroke="${C.steel}" stroke-width="1"/>`; }
    for (let j = 1; j < rows; j++) { const y1 = lerp(a, d, j / rows), y2 = lerp(b, quad[2], j / rows); g += `<line x1="${y1[0]}" y1="${y1[1]}" x2="${y2[0]}" y2="${y2[1]}" stroke="${C.steel}" stroke-width="1"/>`; }
    return g;
  }
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  function adjust(hex, d) { return hex; }

  // House: stack three volumes (drawn back-to-front already ok since house is single tower)
  const hx = HOUSE_X, hy = HOUSE_Y;
  box(hx, hy, HW, HD, FH.g, '#2c3036', '#1c1f23', ['S', 'E'], 0);                      // ground
  box(hx, hy, HW, HD, FH.f2, '#33373d', '#232730', ['S', 'E'], FH.g);                  // second
  // third: smaller footprint (entertainment block) + glass; terrace on the rest
  const tz = FH.g + FH.f2;
  // terrace deck (top of 2nd, front-left area)
  const d0 = iso(hx, hy, tz), d1 = iso(hx + HW, hy, tz), d2 = iso(hx + HW, hy + HD, tz), d3 = iso(hx, hy + HD, tz);
  out += `<polygon points="${P([d0, d1, d2, d3])}" fill="#3a3f45" stroke="${C.steel}" stroke-width="1"/>`;
  // entertainment glass box
  box(hx + 4.5, hy + 3.0, 9.0, 7.5, FH.f3, '#2b2f34', '#202329', ['S', 'E', 'N'], tz);
  // terrace railing (front + left edge)
  const r0 = iso(hx, hy, tz), r1 = iso(hx + HW, hy, tz), r3 = iso(hx, hy + HD, tz);
  out += `<line x1="${r0[0]}" y1="${r0[1]}" x2="${r1[0]}" y2="${r1[1]}" stroke="${C.steel}" stroke-width="2"/>`;
  out += `<line x1="${r0[0]}" y1="${r0[1] - 18}" x2="${r1[0]}" y2="${r1[1] - 18}" stroke="${C.steel}" stroke-width="2"/>`;

  // labels with leader lines
  function tag(x, y, z, text, color = C.ink, dx = 12, dy = -6, anchor = 'start') {
    const p = iso(x, y, z);
    out += `<circle cx="${p[0]}" cy="${p[1]}" r="2.5" fill="${C.accent}"/>`;
    out += `<line x1="${p[0]}" y1="${p[1]}" x2="${p[0] + dx}" y2="${p[1] + dy}" stroke="${C.mut}" stroke-width="0.7"/>`;
    out += `<text x="${p[0] + dx + (anchor === 'end' ? -4 : 4)}" y="${p[1] + dy + 3}" fill="${color}" font-size="11" font-weight="600" text-anchor="${anchor}">${esc(text)}</text>`;
  }
  tag(hx + 9, hy + 6.7, tz + FH.f3, '3F · Entertainment — high glass, double height', C.glass, 18, -14);
  tag(hx + HW, hy + 1.5, tz, 'Roof-terrace balcony', C.ink, 36, -6);
  tag(hx + HW, hy + 2.5, FH.g + 1, 'Bedrooms', C.mut, 36, 4);
  tag(hx + HW, hy, 0.8, 'Living — full-height glass', C.mut, 30, 10);
  tag(18.5, 11.5, 2.6, 'Event pavilion', C.accent, 16, -10);
  tag(12, 4.5, 0, 'Event lawn', C.grassEdge, 0, 16, 'middle');

  // sun
  out += `<circle cx="120" cy="110" r="26" fill="none" stroke="${C.accent}" stroke-width="1.5"/>`;
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; out += `<line x1="${120 + 30 * Math.cos(a)}" y1="${110 + 30 * Math.sin(a)}" x2="${120 + 38 * Math.cos(a)}" y2="${110 + 38 * Math.sin(a)}" stroke="${C.accent}" stroke-width="1.2"/>`; }
  return out + fr.foot;
}

// =================================================================== program.json
function programJSON() {
  const totalGFA = floors.ground.gfa + floors.second.gfa + floors.third.gfa;
  return JSON.stringify({
    project: {
      title: 'Yngcong Residence',
      subtitle: '3-Storey Industrial-Modern Home with Entertainment Penthouse',
      owner: 'Anna Lynn V. Yngcong',
      location: 'Tangub Street, Brgy. Tiza / Brgy. Tangub, Roxas City, Capiz, Western Visayas',
      title_no: 'TCT No. 097-2022002243',
      lot: 'Lot 1-A, Block 8 (subdivision survey)',
      lot_area_sqm: 402,
      lot_dims: '≈ 23.0 m × 17.5 m corner lot (two 12 m road frontages: Road Lot 8 SE, Road Lot 10 NE)',
      style: 'Industrial Modern',
      total_gfa_sqm: totalGFA,
      height_m: f(TOTH, 1),
      storeys: 3,
    },
    materials: [
      'Board-formed / exposed concrete', 'Black structural steel frame',
      'Floor-to-ceiling glazing with black-steel mullions', 'Microcement / polished-concrete floors',
      'Steel-and-glass railings', 'Flat roofs + roof terrace', 'Deep concrete eaves / brise-soleil for sun + rain',
      'Corten & black-metal accents',
    ],
    climate: 'Hot, humid, typhoon-prone coastal site (Roxas City). High glass is paired with deep concrete eaves, cross-ventilation and shaded terraces.',
    features: ['2-car covered garage', "Helper's quarters + service area", 'Outdoor event pavilion & outdoor kitchen', 'Elevator-shaft provision', 'Event garden lawn (~120 m²)'],
    floors: Object.entries(floors).map(([key, fl]) => ({
      key, name: fl.name, level: fl.level, height_m: fl.height, gfa_sqm: fl.gfa, blurb: fl.blurb,
      rooms: fl.rooms.map(r => ({ name: r.n, sub: r.sub || null, area_sqm: f(r.w * r.h, 1), open: !!r.open, glass: !!r.glass })),
    })),
    site: {
      lot_w: LOTW, lot_d: LOTD, house: { x: HOUSE_X, y: HOUSE_Y, w: HW, d: HD },
      setbacks_m: site.setbacks, streets: site.streets,
      open_area_sqm: f(LOTW * LOTD - HW * HD, 0),
    },
  }, null, 2);
}

// =================================================================== write all
out('svg/site-plan.svg', siteSVG());
out('svg/ground.svg', planSVG('ground'));
out('svg/second.svg', planSVG('second'));
out('svg/third.svg', planSVG('third'));
out('svg/elevations.svg', elevationSVG());
out('svg/section.svg', sectionSVG());
out('svg/axon.svg', axonSVG());
out('data/program.json', programJSON());
console.log('Generated 7 SVGs + data/program.json');
