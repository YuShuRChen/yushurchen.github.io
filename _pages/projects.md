---
layout: page
title: projects
permalink: /projects/
description: "Here’s a collection of my projects."
nav: true
nav_order: 3
display_categories: [current, research, hackathons, coursework]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% include project_cards.liquid projects=categorized_projects %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% include project_cards.liquid projects=site.projects %}
{% endif %}

</div>
