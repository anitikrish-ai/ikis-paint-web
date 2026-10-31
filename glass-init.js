/* Ikis Paint: glass wiring and accessibility enhancements.
   Editor logic stays in index.html; this file only decorates the chrome. */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;

  /* ---- Glass ---------------------------------------------------------- */
  const solidPreferred =
    matchMedia('(prefers-reduced-transparency: reduce)').matches ||
    matchMedia('(prefers-contrast: more)').matches;

  // Light paper under glass would wash out icons, so trim brightness after
  // the module sets its own filter chain (refraction first, then the trim).
  function mount(el, opts) {
    if (!el || solidPreferred || typeof window.liquidGlass !== 'function') return;
    const g = window.liquidGlass(el, opts);
    const chain = el.style.backdropFilter;
    if (chain) {
      const trimmed = chain + ' brightness(.9)';
      el.style.backdropFilter = trimmed;
      el.style.webkitBackdropFilter = trimmed;
    }
    return g;
  }

  const small = { scale: -78, chroma: 4, border: 0.14, mapBlur: 7, blur: 2, saturate: 1.5, fallbackBlur: 18 };
  const large = { scale: -60, chroma: 3, border: 0.06, mapBlur: 14, blur: 10, saturate: 1.4, fallbackBlur: 24 };

  function mountAll() {
    $$('#top-island > .glass').forEach(el => mount(el, small));
    mount($('#tools-capsule'), small);
    mount($('#hud-pill'), small);
    mount($('#studio-island'), large);
    mount($('#studio-toggle-btn'), small);
    mount($('#modal-box'), large);
  }

  /* ---- Layout hooks --------------------------------------------------- */
  const dock = $('#tools-capsule');
  if (dock && 'ResizeObserver' in window) {
    new ResizeObserver(() => root.style.setProperty('--dock-h', dock.offsetHeight + 'px')).observe(dock);
  }
  // On phones the panel is a bottom sheet; start with the canvas unobstructed.
  if (matchMedia('(max-width: 760px)').matches) $('#studio-island')?.classList.add('collapsed');

  /* ---- Accessible names ----------------------------------------------- */
  $$('button[data-tip]').forEach(b => {
    if (!b.hasAttribute('aria-label') && !b.textContent.trim()) b.setAttribute('aria-label', b.dataset.tip);
  });
  $('#btn-zoom-val')?.setAttribute('aria-label', 'Reset zoom to 100 percent');
  $('#studio-island')?.setAttribute('aria-label', 'Studio panel');
  $('#tools-capsule')?.setAttribute('aria-label', 'Tools');
  $('#top-island')?.setAttribute('role', 'toolbar');
  $('#top-island')?.setAttribute('aria-label', 'Canvas actions');
  $('#toast-notify')?.setAttribute('role', 'status');
  $('#toast-notify')?.setAttribute('aria-live', 'polite');
  [['#brush-selector', 'Brush preset'], ['#shape-kind', 'Shape'], ['#layer-blend', 'Layer blend mode'],
   ['#layer-opacity', 'Layer opacity'], ['#brush-size', 'Brush size'], ['#brush-opacity', 'Brush opacity'],
   ['#brush-stabilizer', 'Stroke smoothing'], ['#hue', 'Hue'], ['#hex-input', 'Hex color']]
    .forEach(([s, l]) => $(s)?.setAttribute('aria-label', l));

  /* ---- Pressed and selected state, mirrored from the .active class ---- */
  const tabs = $$('.segmented__tab');
  tabs.forEach(t => {
    t.setAttribute('role', 'tab');
    t.setAttribute('aria-controls', t.dataset.tab);
    const panel = document.getElementById(t.dataset.tab);
    if (panel) { panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-label', t.textContent.trim()); }
  });
  $('.segmented')?.setAttribute('role', 'tablist');

  const sync = el => {
    const on = el.classList.contains('active');
    if (el.classList.contains('segmented__tab')) {
      el.setAttribute('aria-selected', on);
      el.tabIndex = on ? 0 : -1;
    } else {
      el.setAttribute('aria-pressed', on);
    }
  };
  const stateful = $$('.tool-capsule-btn, #btn-layer-clip, #btn-layer-alock, .segmented__tab');
  const mo = new MutationObserver(list => list.forEach(m => sync(m.target)));
  stateful.forEach(el => { sync(el); mo.observe(el, { attributes: true, attributeFilter: ['class'] }); });

  // Arrow keys move between tabs, as in a native tab bar.
  $('.segmented')?.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const i = tabs.findIndex(t => t.classList.contains('active'));
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    next.click();
    next.focus();
    e.preventDefault();
  });

  /* ---- Layer rows: keyboard reachable --------------------------------- */
  const list = $('#layer-list');
  if (list) {
    const decorate = () => $$('.layer-item', list).forEach(row => {
      if (row.dataset.a11y) return;
      row.dataset.a11y = '1';
      row.tabIndex = 0;
      row.setAttribute('role', 'button');
      row.setAttribute('aria-label', 'Select layer ' + (row.querySelector('.layer-title')?.textContent || ''));
      row.querySelector('.v-toggle')?.setAttribute('aria-label', 'Toggle layer visibility');
      row.querySelector('.l-toggle')?.setAttribute('aria-label', 'Toggle layer lock');
    });
    new MutationObserver(decorate).observe(list, { childList: true });
    list.addEventListener('keydown', e => {
      const row = e.target.closest?.('.layer-item');
      if (row && e.target === row && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); row.click(); }
    });
    decorate();
  }

  /* ---- Modal: dialog semantics, Escape, focus trap, focus return ------ */
  const backdrop = $('#modal-backdrop');
  const box = $('#modal-box');
  if (backdrop && box) {
    let opener = null;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    const isOpen = () => backdrop.style.display && backdrop.style.display !== 'none';
    const focusables = () => $$('button:not(:disabled), input, select, [tabindex="0"]', box).filter(n => n.offsetParent !== null);

    new MutationObserver(() => {
      if (isOpen()) {
        opener = opener || document.activeElement;
        const title = $('.modal-title', box);
        if (title) { title.id = 'modal-title'; box.setAttribute('aria-labelledby', 'modal-title'); }
        (focusables().find(n => n.matches('input, select')) || focusables()[0])?.focus();
      } else if (opener) {
        opener.focus?.();
        opener = null;
      }
    }).observe(backdrop, { attributes: true, attributeFilter: ['style'] });

    document.addEventListener('keydown', e => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); $('#modal-cancel')?.click(); return; }
      if (e.key === 'Tab') {
        const f = focusables();
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }, true);
    backdrop.addEventListener('pointerdown', e => { if (e.target === backdrop) $('#modal-cancel')?.click(); });
  }

  mountAll();
})();
