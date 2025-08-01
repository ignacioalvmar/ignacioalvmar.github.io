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

 