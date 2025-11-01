// Shuffle gallery items
const gallery = document.getElementById('gallery');
const shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', () => {
  const items = Array.from(gallery.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    gallery.insertBefore(items[j], items[i]);
    // Recompute items after each insert
    items[i] = gallery.children[i];
    items[j] = gallery.children[j];
  }
});

// Toggle global glow
const glowToggleBtn = document.getElementById('glowToggleBtn');
glowToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('glow');
  glowToggleBtn.textContent = document.body.classList.contains('glow')
    ? 'Disable glow'
    : 'Toggle glow';
});

// Simple search filter (matches bios and gallery image data-tags)
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();

  // Filter bios
  document.querySelectorAll('.bio-card').forEach(card => {
    const tags = (card.getAttribute('data-tags') || '').toLowerCase();
    const text = card.textContent.toLowerCase();
    card.style.display = (tags.includes(q) || text.includes(q)) ? '' : 'none';
  });

  // Filter gallery
  document.querySelectorAll('.gallery img').forEach(img => {
    const tags = (img.getAttribute('data-tags') || '').toLowerCase();
    const alt = (img.getAttribute('alt') || '').toLowerCase();
    img.style.display = (tags.includes(q) || alt.includes(q)) ? '' : 'none';
  });
});
