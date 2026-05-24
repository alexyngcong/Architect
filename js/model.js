// Interactive 3D massing of the Yngcong Residence.
// Procedural Three.js model — industrial-modern: concrete volumes, black steel,
// floor-to-ceiling glass, double-height glazed entertainment penthouse, event garden.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---- dimensions (metres), shared with the drawings ----
const LOT_W = 23.0, LOT_D = 17.5;
const HX = 2.0, HZ = 7.0, HW = 13.5, HD = 10.5;     // house origin + size on lot
const G = 3.6, F2 = 3.2, F3 = 5.5;                  // floor heights
const Y1 = 0, Y2 = G, Y3 = G + F2, YR = G + F2 + F3; // slab levels
const B3X = 4.5, B3Z = 3.0, B3W = 9.0, B3D = 7.5;   // 3rd-floor block (local to house)

const COL = {
  concrete: 0x3c4045, concreteDark: 0x2a2d31, steel: 0x101113,
  glass: 0x9ec7d6, slab: 0x4a4e54, grass: 0x223018, paving: 0x26282c,
  wood: 0x6b4a2f, sky: 0x0d0f12,
};

export function initModel(canvas, statusEl) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (e) {
    if (statusEl) statusEl.style.display = 'flex';
    return null;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(COL.sky);
  scene.fog = new THREE.Fog(COL.sky, 60, 130);

  const camera = new THREE.PerspectiveCamera(45, 2, 0.5, 500);
  camera.position.set(34, 24, 34);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI / 2.05;
  controls.minDistance = 14;
  controls.maxDistance = 90;
  controls.target.set(LOT_W / 2, 4, LOT_D / 2);

  // ---- lights ----
  scene.add(new THREE.HemisphereLight(0xbcd0e0, 0x202018, 0.55));
  const amb = new THREE.AmbientLight(0xffffff, 0.25); scene.add(amb);
  const sun = new THREE.DirectionalLight(0xfff0dd, 2.0);
  sun.position.set(38, 46, 22);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.near = 1; sc.far = 160; sc.left = -45; sc.right = 45; sc.top = 45; sc.bottom = -45;
  sun.shadow.bias = -0.0004;
  scene.add(sun);

  // ---- material factory ----
  const matConcrete = new THREE.MeshStandardMaterial({ color: COL.concrete, roughness: 0.85, metalness: 0.05 });
  const matConcreteDark = new THREE.MeshStandardMaterial({ color: COL.concreteDark, roughness: 0.9, metalness: 0.05 });
  const matSlab = new THREE.MeshStandardMaterial({ color: COL.slab, roughness: 0.8 });
  const matSteel = new THREE.MeshStandardMaterial({ color: COL.steel, roughness: 0.4, metalness: 0.7 });
  const matGlass = new THREE.MeshStandardMaterial({ color: COL.glass, roughness: 0.08, metalness: 0.0, transparent: true, opacity: 0.34, side: THREE.DoubleSide, emissive: 0x16323d, emissiveIntensity: 0.35 });
  const matWood = new THREE.MeshStandardMaterial({ color: COL.wood, roughness: 0.7 });
  const matDoor = new THREE.MeshStandardMaterial({ color: 0x191b1e, roughness: 0.5, metalness: 0.3 });

  const root = new THREE.Group();
  scene.add(root);

  // box by min-corner + size
  function box(w, h, d, x, y, z, mat, opts = {}) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x + w / 2, y + h / 2, z + d / 2);
    if (opts.shadow !== false) { m.castShadow = true; m.receiveShadow = true; }
    root.add(m); return m;
  }
  // glass curtain panel on a facade between two slabs
  function glass(x, y, z, w, h, d) { return box(w, h, d, x, y, z, matGlass, { shadow: false }); }
  // black steel mullion grid over a rectangular facade (vertical plane)
  function mullions(x, y, z, w, h, axis, cols, rows) {
    const t = 0.08, g = new THREE.Group();
    for (let i = 0; i <= cols; i++) {
      const f = i / cols;
      if (axis === 'x') box(t, h, t, x + f * w - t / 2, y, z, matSteel, { shadow: false });
      else box(t, h, t, x, y, z + f * w - t / 2, matSteel, { shadow: false });
    }
    for (let j = 0; j <= rows; j++) {
      const yy = y + (j / rows) * h;
      if (axis === 'x') box(w, t, t, x, yy - t / 2, z, matSteel, { shadow: false });
      else box(t, t, w, x, yy - t / 2, z, matSteel, { shadow: false });
    }
    return g;
  }
  // railing along an edge
  function railing(x, y, z, len, axis) {
    const t = 0.05, h = 1.05;
    if (axis === 'x') { box(len, t, t, x, y + h, z, matSteel, { shadow: false }); for (let i = 0; i <= len; i += 1.2) box(t, h, t, x + i, y, z, matSteel, { shadow: false }); }
    else { box(t, t, len, x, y + h, z, matSteel, { shadow: false }); for (let i = 0; i <= len; i += 1.2) box(t, h, t, x, y, z + i, matSteel, { shadow: false }); }
  }

  // ===================== GROUND (lot) =====================
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(LOT_W + 30, LOT_D + 30), new THREE.MeshStandardMaterial({ color: COL.grass, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(LOT_W / 2, 0, LOT_D / 2);
  ground.receiveShadow = true; root.add(ground);

  // lot pad (slightly raised plinth)
  box(LOT_W, 0.12, LOT_D, 0, -0.12, 0, new THREE.MeshStandardMaterial({ color: 0x1d2a1c, roughness: 1 }));
  // driveway / car court (front-left)
  const dw = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 7.0), new THREE.MeshStandardMaterial({ color: COL.paving, roughness: 0.9 }));
  dw.rotation.x = -Math.PI / 2; dw.position.set(HX + 3.1, 0.02, 3.5); dw.receiveShadow = true; root.add(dw);

  // ===================== HOUSE =====================
  // helper to add a floor: concrete on N (rear) + W (side), glass curtain on S (front) + E
  function floor(yBase, h, opts = {}) {
    const x0 = HX, z0 = HZ, w = HW, d = HD;
    // slab (floor)
    box(w, 0.25, d, x0, yBase, z0, matSlab);
    // rear (north, max z) concrete wall
    box(w, h, 0.3, x0, yBase, z0 + d - 0.3, matConcrete);
    // side (west, min x) concrete wall
    box(0.3, h, d, x0, yBase, z0, matConcrete);
    // front (south, z0) glass curtain + mullions
    if (!opts.garage) {
      glass(x0 + 0.3, yBase + 0.1, z0 + 0.05, w - 0.6, h - 0.2, 0.12);
      mullions(x0 + 0.3, yBase + 0.1, z0 + 0.12, w - 0.6, h - 0.2, 'x', Math.round((w - 0.6) / 1.4), 2);
    }
    // east (max x) glass curtain + mullions
    glass(x0 + w - 0.12, yBase + 0.1, z0 + 0.3, 0.12, h - 0.2, d - 0.6, matGlass);
    box(0.12, h - 0.2, d - 0.6, x0 + w - 0.12, yBase + 0.1, z0 + 0.3, matGlass, { shadow: false });
    mullions(x0 + w - 0.12, yBase + 0.1, z0 + 0.3, d - 0.6, h - 0.2, 'z', Math.round((d - 0.6) / 1.4), 2);
  }

  // GROUND FLOOR — with garage door on front-left, glass living front-right
  box(HW, 0.25, HD, HX, Y1, HZ, matSlab);
  box(0.3, G, HD, HX, Y1, HZ, matConcrete);                          // west wall
  box(HW, G, 0.3, HX, Y1, HZ + HD - 0.3, matConcrete);               // rear wall
  box(6.2, G, 0.3, HX, Y1, HZ, matConcreteDark);                     // garage front wall
  box(5.0, 2.6, 0.18, HX + 0.6, Y1, HZ - 0.05, matDoor);             // garage door
  glass(HX + 6.5, Y1 + 0.1, HZ + 0.05, HW - 6.5 - 0.1, G - 0.2, 0.12); // living glass (front-right)
  mullions(HX + 6.5, Y1 + 0.1, HZ + 0.12, HW - 6.6, G - 0.2, 'x', 4, 2);
  glass(HX + HW - 0.12, Y1 + 0.1, HZ + 0.3, 0.12, G - 0.2, HD - 0.6, matGlass);
  mullions(HX + HW - 0.12, Y1 + 0.1, HZ + 0.3, HD - 0.6, G - 0.2, 'z', 7, 2);

  // SECOND FLOOR
  floor(Y2, F2);
  // master balcony (front, right side) cantilever
  box(4.5, 0.2, 1.6, HX + 9.0, Y2, HZ - 1.6, matSlab);
  railing(HX + 9.0, Y2 + 0.2, HZ - 1.6, 4.5, 'x');
  railing(HX + 13.5, Y2 + 0.2, HZ - 1.6, 1.6, 'z');

  // ROOF of 2nd / 3rd-floor terrace deck
  box(HW, 0.25, HD, HX, Y3 - 0.25, HZ, matSlab);

  // THIRD FLOOR — glazed entertainment block on smaller footprint
  const tx = HX + B3X, tz = HZ + B3Z;
  box(0.3, F3, B3D, tx, Y3, tz, matConcrete);                        // west concrete blade
  box(B3W, F3, 0.3, tx, Y3, tz + B3D - 0.3, matConcrete);            // rear concrete (partial)
  // full-height glass on south, east, north of the block
  glass(tx + 0.3, Y3 + 0.05, tz, B3W - 0.3, F3 - 0.1, 0.12);                    // south
  mullions(tx + 0.3, Y3 + 0.05, tz + 0.12, B3W - 0.3, F3 - 0.1, 'x', 6, 4);
  glass(tx + B3W - 0.12, Y3 + 0.05, tz, 0.12, F3 - 0.1, B3D);                   // east
  mullions(tx + B3W - 0.12, Y3 + 0.05, tz, B3D, F3 - 0.1, 'z', 5, 4);
  // roof slab + parapet
  box(B3W, 0.3, B3D, tx, YR, tz, matConcrete);
  box(B3W + 0.4, 0.5, 0.2, tx - 0.2, YR, tz - 0.2, matSteel, { shadow: false });
  // terrace railing around the open part (front + left of the 2nd-floor roof)
  railing(HX, Y3, HZ, HW, 'x');                      // front edge
  railing(HX, Y3, HZ, B3Z + HZ - HZ, 'z');           // left front-to-block
  railing(HX, Y3, HZ, HD, 'z');                      // west edge

  // ===================== GARDEN FEATURES =====================
  // event pavilion (4 posts + flat roof + bar counter)
  (function pavilion() {
    const px = 17.8, pz = 9.0, pw = 4.5, pd = 4.2, ph = 2.6;
    [[px, pz], [px + pw, pz], [px, pz + pd], [px + pw, pz + pd]].forEach(([cx, cz]) =>
      box(0.2, ph, 0.2, cx - 0.1, 0, cz - 0.1, matSteel));
    box(pw + 0.6, 0.25, pd + 0.6, px - 0.3, ph, pz - 0.3, matConcrete);     // roof
    box(pw, 0.9, 0.6, px, 0, pz + pd - 0.6, matWood);                        // bar counter
    const deck = new THREE.Mesh(new THREE.PlaneGeometry(pw + 1, pd + 1), new THREE.MeshStandardMaterial({ color: 0x2c2a26, roughness: 0.9 }));
    deck.rotation.x = -Math.PI / 2; deck.position.set(px + pw / 2, 0.03, pz + pd / 2); deck.receiveShadow = true; root.add(deck);
  })();

  // lanai deck in front of living
  const lanai = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 2.0), new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 0.9 }));
  lanai.rotation.x = -Math.PI / 2; lanai.position.set(HX + 11.25, 0.03, HZ - 1.0); lanai.receiveShadow = true; root.add(lanai);

  // trees
  function tree(x, z, h = 3) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, h, 6), matWood);
    trunk.position.set(x, h / 2, z); trunk.castShadow = true; root.add(trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), new THREE.MeshStandardMaterial({ color: 0x2c4422, roughness: 1, flatShading: true }));
    crown.position.set(x, h + 0.6, z); crown.castShadow = true; crown.scale.set(1, 0.9, 1); root.add(crown);
  }
  [[20.5, 5.0, 3.2], [16.7, 14.8, 2.8], [21.2, 15.2, 3.4], [12.5, 2.4, 2.6], [6.0, 2.6, 2.4]].forEach(t => tree(...t));

  // perimeter low fence (steel posts)
  for (let x = 0.5; x < LOT_W; x += 2.4) box(0.12, 1.6, 0.12, x, 0, 0.2, matSteel, { shadow: false });

  // ---- render loop ----
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== w || canvas.height !== h) { renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  }
  let raf;
  function loop() { resize(); controls.update(); renderer.render(scene, camera); raf = requestAnimationFrame(loop); }
  loop();
  addEventListener('resize', resize);

  return {
    setView(name) {
      const t = controls.target;
      const views = {
        aerial: [34, 30, 34], street: [HX + HW / 2, 6, -16], garden: [40, 10, 30], rear: [-12, 14, 26],
      };
      const p = views[name] || views.aerial;
      camera.position.set(p[0], p[1], p[2]); controls.update();
    },
    dispose() { cancelAnimationFrame(raf); renderer.dispose(); },
  };
}
