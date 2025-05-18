---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  .year-summary {
    list-style: none; /* Hide default marker for Firefox */
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .year-summary::-webkit-details-marker {
    display: none; /* Hide default marker for Chrome, Safari, Edge */
  }
  .year-summary h2 {
    display: inline;
    margin: 0.5em 0; /* Replicate some default h2 margin if needed, adjust as desired */
    margin-right: 10px; /* Space between year and arrow */
  }
  .year-summary::after {
    content: '\25B6'; /* Unicode for right-pointing triangle (▶) */
    font-size: 0.8em;
    transition: transform 0.2s ease-in-out;
  }
  details[open] > .year-summary::after {
    transform: rotate(90deg);
  }
  .publications-list-indent {
    margin-left: 20px;
  }
  .publication-entry {
    /* Add a common class to each publication item if archive-single.html doesn't already have one */
    /* This helps the search script identify them. Assuming archive-single.html creates an <article> or <div> for each. */
  }
  .hidden-by-search {
    display: none !important;
  }
</style>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

<input type="text" id="publicationSearchInput" placeholder="Search publications..." style="margin-bottom: 20px; padding: 10px; width: 100%; box-sizing: border-box;">

{% include base_path %}

{% assign postsByYear = site.publications | group_by_exp:"post", "post.date | date: '%Y'" | reverse %}

{% for year_group in postsByYear %}
  <details class="year-details" {% if forloop.first %}open{% endif %}>
    <summary class="year-summary">
      <h2>{{ year_group.name }}</h2>
    </summary>
    <div class="publications-list-indent">
      {% for post in year_group.items reversed %}
        <div class="publication-item">
          {% include archive-single.html %}
        </div>
      {% endfor %}
    </div>
  </details>
{% endfor %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('publicationSearchInput');
  const publications = document.querySelectorAll('.publication-item'); // Target the new wrapper div
  const yearDetails = document.querySelectorAll('.year-details');

  searchInput.addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();

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
        if (index !== 0) { // Keep the first one open if it was by default
          // detail.open = false; // Optionally close all others
        } else {
            detail.open = true; // Ensure first is open if query is empty
        }
      });
    } else {
        // Check if any item within a year group is visible, if not, the year group itself could be marked or styled
        // For now, just opening if there's a match is handled above.
    }
  });
});
</script>
