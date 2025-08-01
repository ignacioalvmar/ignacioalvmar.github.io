// Unified Search Functionality for Publications, Patents, Talks, and Teaching
(function() {
  function initUnifiedSearch() {
    console.log('Initializing unified search...');
    
    // Define search configurations for different pages
    const searchConfigs = [
      {
        inputId: 'publicationSearchInput',
        itemSelector: '.publication-item',
        pageType: 'publications'
      },
      {
        inputId: 'patentSearchInput',
        itemSelector: '.publication-item', // patents page uses this class
        pageType: 'patents'
      },
      {
        inputId: 'talksSearchInput',
        itemSelector: '.list-item',
        pageType: 'talks'
      },
      {
        inputId: 'teachingSearchInput',
        itemSelector: '.list-item',
        pageType: 'teaching'
      }
    ];

    // Initialize search for each configuration
    searchConfigs.forEach(function(config) {
      const searchInput = document.getElementById(config.inputId);
      if (!searchInput) {
        return; // Skip if this search input doesn't exist on this page
      }
      
      console.log('Found search input for:', config.pageType);
      
      const items = document.querySelectorAll(config.itemSelector);
      const yearDetails = document.querySelectorAll('.year-details');
      
      console.log('Found', items.length, 'items and', yearDetails.length, 'year details for', config.pageType);

      function performSearch(query) {
        console.log('Performing search for', config.pageType + ':', query);
        query = query.toLowerCase();
        
        items.forEach(function(item) {
          const textContent = item.textContent || item.innerText;
          const matches = textContent.toLowerCase().includes(query);
          const parentDetails = item.closest('.year-details');

          if (matches) {
            item.classList.remove('hidden-by-search');
            if (parentDetails) {
              parentDetails.open = true;
            }
          } else {
            item.classList.add('hidden-by-search');
          }
        });

        if (query === '') {
          items.forEach(function(item) {
            item.classList.remove('hidden-by-search');
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

      // Initialize search state
      performSearch('');
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUnifiedSearch);
  } else {
    initUnifiedSearch();
  }
})(); 