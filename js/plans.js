// Renders floor-plan room lists and the spec sheet from data/program.json.

export function renderFloor(program, key) {
  const fl = program.floors.find(f => f.key === key);
  if (!fl) return;
  document.getElementById('plan-img').src = `svg/${key === 'ground' ? 'ground' : key === 'second' ? 'second' : 'third'}.svg`;
  document.getElementById('floor-title').textContent = `${fl.name} · ${fl.gfa_sqm} m²`;
  document.getElementById('floor-blurb').textContent = fl.blurb;
  const ul = document.getElementById('room-ul');
  ul.innerHTML = '';
  for (const r of fl.rooms) {
    const li = document.createElement('li');
    if (r.glass) li.classList.add('glass');
    if (r.open) li.classList.add('open');
    li.innerHTML =
      `<span class="nm">${r.name}${r.sub ? `<small>${r.sub}</small>` : ''}</span>` +
      `<span class="ar">${r.open ? 'open' : r.area_sqm + ' m²'}</span>`;
    ul.appendChild(li);
  }
}

export function populateSpec(program) {
  const p = program.project;
  // hero
  document.getElementById('hero-lede').textContent =
    `A 3-storey industrial-modern home on a ${p.lot_area_sqm} m² corner lot in ${p.location.split(',').slice(-3, -1).join(',').trim() || 'Roxas City'}. ` +
    `Four bedrooms below a glass-wrapped entertainment penthouse, opening onto an event garden.`;
  const stats = [
    ['Lot area', p.lot_area_sqm + ' m²'], ['Total floor area', p.total_gfa_sqm + ' m²'],
    ['Storeys', p.storeys], ['Building height', p.height_m + ' m'],
  ];
  document.getElementById('hero-stats').innerHTML =
    stats.map(([s, b]) => `<div><b>${b}</b><span>${s}</span></div>`).join('');

  // project dl
  const rows = [
    ['Owner', p.owner], ['Title', p.title_no], ['Lot', p.lot], ['Location', p.location],
    ['Lot dimensions', p.lot_dims], ['Style', p.style], ['Open / garden area', program.site.open_area_sqm + ' m²'],
  ];
  document.getElementById('spec-project').innerHTML =
    rows.map(([d, v]) => `<dt>${d}</dt><dd>${v}</dd>`).join('');
  document.getElementById('spec-materials').innerHTML = program.materials.map(m => `<li>${m}</li>`).join('');
  document.getElementById('spec-features').innerHTML = program.features.map(m => `<li>${m}</li>`).join('');
  document.getElementById('spec-climate').textContent = program.climate;
  document.getElementById('spec-floors').innerHTML = program.floors.map(fl => `
    <div class="floor-row">
      <div class="fh"><b>${fl.name}</b><span>${fl.gfa_sqm} m² · ceiling ${fl.height_m} m</span></div>
      <div class="rooms">${fl.rooms.map(r => r.name).join(' · ')}</div>
    </div>`).join('');
}
