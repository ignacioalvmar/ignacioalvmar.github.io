---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

<style>
  /* CSS from patents.md - can be centralized in main CSS later if preferred */
  .year-summary {
    list-style: none; 
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .year-summary::-webkit-details-marker {
    display: none; 
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
  .list-indent { /* Renamed for generality */
    margin-left: 20px;
  }
  .list-item { /* Renamed for generality */
    /* Styles for individual items if needed */
  }
  .hidden-by-search {
    display: none !important;
  }
</style>

<input type="text" id="teachingSearchInput" placeholder="Search teaching activities..." style="margin-bottom: 20px; padding: 10px; width: 100%; box-sizing: border-box;">

{% include base_path %}

{% assign postsByYear = site.teaching | group_by_exp:"post", "post.date | date: '%Y'" | reverse %}

{% for year_group in postsByYear %}
  <details class="year-details" {% if forloop.first %}open{% endif %}>
    <summary class="year-summary">
      <h2>{{ year_group.name }}</h2>
    </summary>
    <div class="list-indent">
      {% for post in year_group.items reversed %}
        <div class="list-item">
          {% include archive-single-teaching.html type='teaching' %}
        </div>
      {% endfor %}
    </div>
  </details>
{% endfor %}

 