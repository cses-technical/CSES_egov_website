// Type-safe DOM element selection
const uploadBtn = document.getElementById('upload-btn') as HTMLButtonElement | null;
const searchInput = document.getElementById('search-input') as HTMLInputElement | null;

// Handle Upload Click
uploadBtn?.addEventListener('click', () => {
  alert('Upload clicked!');
});

// Handle Search Input Typing
searchInput?.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  console.log('Searching for:', target.value);
});