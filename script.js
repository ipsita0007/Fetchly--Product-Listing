// Basic product filtering and button actions for your e-commerce UI

document.addEventListener('DOMContentLoaded', function () {
  // Collect all filter checkboxes
  const filters = document.querySelectorAll('.sidebar input[type="checkbox"]');
  const cards = document.querySelectorAll('.card');

  // Map product info for filtering (add data attributes in HTML for real use)
  // For demo, we'll just show/hide all cards if any filter is checked
  function applyFilters() {
    const checked = Array.from(filters).some(cb => cb.checked);
    cards.forEach(card => {
      if (!checked) {
        card.style.display = '';
      } else {
        // Example: hide all cards if any filter is checked (customize as needed)
        card.style.display = 'none';
      }
    });
  }

  filters.forEach(cb => cb.addEventListener('change', applyFilters));

  // Add to Cart and Buy Now button actions
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function () {
      alert('Added to cart!');
    });
  });
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', function () {
      alert('Proceeding to buy now!');
    });
  });
});
