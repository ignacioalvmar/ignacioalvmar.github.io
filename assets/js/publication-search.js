// Publication Search Functionality
(function() {
  function initPublicationSearch() {
    console.log('Initializing publication search...');
    const searchInput = document.getElementById('publicationSearchInput');
    if (!searchInput) {
      console.log('Search input not found');
      return;
    }
    
    const publications = document.querySelectorAll('.publication-item');
    const yearDetails = document.querySelectorAll('.year-details');
    
    console.log('Found', publications.length, 'publications and', yearDetails.length, 'year details');

    function performSearch(query) {
      console.log('Performing search for:', query);
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

      if (query === '') {
        publications.forEach(function(pub) {
          pub.classList.remove('hidden-by-search');
        });
        yearDetails.forEach(function(detail, index) {
          if (index === 0) {
            detail.open = true;
          }
        });
      }
    }

    searchInput.addEventListener('keyup', function(event) {
      performSearch(event.target.value);
    });

    searchInput.addEventListener('input', function(event) {
      performSearch(event.target.value);
    });

    performSearch('');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationSearch);
  } else {
    initPublicationSearch();
  }
})(); 