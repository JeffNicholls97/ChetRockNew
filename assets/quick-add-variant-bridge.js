// assets/quick-add-variant-bridge.js

// ← Add this line immediately at the top
console.log('🐾 quick-add-variant-bridge loaded');

document.addEventListener('DOMContentLoaded', () => {
  // 1) Catch any click on a “Choose options” button bearing data-variant-id
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-variant-id]');
    if (!btn) return;
    const id     = btn.dataset.variantId;
    const drawer = document.querySelector('quick-add-drawer');
    console.log('🐾 quick-add bridge got variant id:', id);
    if (drawer && id) drawer.setAttribute('data-initial-variant-id', id);
  });

  // 2) When the drawer opens, shove that ID into the <product-form>
  const drawerEl = document.querySelector('quick-add-drawer');
  if (drawerEl) {
    drawerEl.addEventListener('quick-add:open', (e) => {
      const initial = e.currentTarget.getAttribute('data-initial-variant-id');
      const form    = e.currentTarget.querySelector('product-form');
      console.log('🐾 quick-add bridge initializing form with variant id:', initial);
      if (initial && form) {
        form.setAttribute('data-initial-variant-id', initial);
      }
    });
  }
});
