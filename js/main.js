import { renderFloor, populateSpec } from './plans.js';

async function boot() {
  // ---- data ----
  let program;
  try {
    program = await (await fetch('data/program.json')).json();
    populateSpec(program);
    renderFloor(program, 'ground');
  } catch (e) {
    console.error('Could not load program.json', e);
  }

  // ---- floor tabs ----
  const tabs = document.querySelectorAll('#floor-tabs button');
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (program) renderFloor(program, btn.dataset.floor);
  }));

  // ---- 3D model (lazy: only init when WebGL works) ----
  const canvas = document.getElementById('model-canvas');
  const fallback = document.getElementById('model-fallback');
  let api = null;
  try {
    const { initModel } = await import('./model.js');
    api = initModel(canvas, fallback);
    if (!api) fallback.style.display = 'flex';
  } catch (e) {
    console.error('3D model failed to load', e);
    fallback.style.display = 'flex';
  }
  const viewBtns = document.querySelectorAll('.view-btns button');
  viewBtns.forEach(btn => btn.addEventListener('click', () => {
    viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (api) api.setView(btn.dataset.view);
  }));

  // ---- scroll-spy nav ----
  const links = [...document.querySelectorAll('#nav a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        map.get(en.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['hero', 'model', 'site', 'plans', 'drawings', 'spec'].forEach(id => {
    const el = document.getElementById(id); if (el) obs.observe(el);
  });
}

boot();
