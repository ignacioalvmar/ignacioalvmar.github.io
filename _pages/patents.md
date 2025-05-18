---
layout: archive
title: "Patents"
permalink: /patents/
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
    margin: 0.5em 0; 
    margin-right: 10px; 
  }
  .year-summary::after {
    content: '\25B6'; 
    font-size: 0.8em;
    transition: transform 0.2s ease-in-out;
  }
  details[open] > .year-summary::after {
    transform: rotate(90deg);
  }
  .publications-list-indent { /* Keep class name generic for potential reuse or make specific if desired */
    margin-left: 20px;
  }
  .publication-item { /* Keep class name generic */
    /* Styles for individual items if needed */
  }
  .hidden-by-search {
    display: none !important;
  }
</style>

<input type="text" id="patentSearchInput" placeholder="Search patents..." style="margin-bottom: 20px; padding: 10px; width: 100%; box-sizing: border-box;">

{% include base_path %}

{% assign postsByYear = site.patents | group_by_exp:"post", "post.date | date: '%Y'" | reverse %}

{% for year_group in postsByYear %}
  <details class="year-details" {% if forloop.first %}open{% endif %}>
    <summary class="year-summary">
      <h2>{{ year_group.name }}</h2>
    </summary>
    <div class="publications-list-indent"> {%- comment -%} Using 'publications-list-indent' for consistency, can be renamed {%- endcomment -%}
      {% for post in year_group.items reversed %}
        <div class="publication-item"> {%- comment -%} Using 'publication-item' for consistency, can be renamed {%- endcomment -%}
          {% include archive-single.html %}
        </div>
      {% endfor %}
    </div>
  </details>
{% endfor %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('patentSearchInput'); // Changed ID for clarity if ever on same page, though not current case
  const items = document.querySelectorAll('.publication-item'); // Querying for items to search
  const yearDetails = document.querySelectorAll('.year-details');

  searchInput.addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();

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
        if (index !== 0) {
          // detail.open = false; // Optionally close others not matching default
        } else {
            detail.open = true; // Ensure first is open by default when query is empty
        }
      });
    }
  });
});
</script> 