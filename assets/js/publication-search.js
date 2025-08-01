// Publication Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('publicationSearchInput');
  
  // Check if search input exists (in case this script is loaded on other pages)
  if (!searchInput) {
    return;
  }
  
  const publications = document.querySelectorAll('.publication-item');
  const yearDetails = document.querySelectorAll('.year-details');

  function performSearch(query) {
    query = query.toLowerCase();
    
    publications.forEach(function(pub) {
      const textContent = pub.textContent || pub.innerText;
      const matches = textContent.toLowerCase().includes(query);
      const parentDetails = pub.closest('.year-details');

      if (matches) {
        pub.classList.remove('hidden-by-search');
        if (parentDetails) {
          parentDetails.open = true;
        }
      } else {
        pub.classList.add('hidden-by-search');
      }
    });

    // If search query is empty, show all and close all non-default-open details
    if (query === '') {
      publications.forEach(function(pub) {
        pub.classList.remove('hidden-by-search');
      });
      yearDetails.forEach(function(detail, index) {
        if (index === 0) {
          detail.open = true; // Ensure first is open if query is empty
        }
      });
    }
  }

  // Add event listener for search input
  searchInput.addEventListener('keyup', function(event) {
    performSearch(event.target.value);
  });

  // Also listen for input event for better compatibility
  searchInput.addEventListener('input', function(event) {
    performSearch(event.target.value);
  });

  // Initialize search state
  performSearch('');
}); 