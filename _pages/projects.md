---
layout: page
title: projects
permalink: /projects/
description: "Here’s a collection of my projects."
nav: true
nav_order: 3
display_categories: [current, research, hackathons, coursework]
horizontal: false
project_topics:
  - id: machine-learning
    label: Machine Learning
  - id: language-models
    label: Language Models
  - id: computer-vision
    label: Computer Vision
  - id: robotics
    label: Robotics
  - id: systems
    label: Systems
  - id: embedded-hardware
    label: Embedded Hardware
  - id: data-analysis
    label: Data Analysis
---

<!-- pages/projects.md -->
<div class="projects">
<div class="project-filters" role="group" aria-label="Filter projects by topic" hidden>
  <button type="button" class="project-filter" data-topic="all" aria-pressed="true">All</button>
  {% for topic in page.project_topics %}
    <button type="button" class="project-filter" data-topic="{{ topic.id }}" aria-pressed="false">{{ topic.label }}</button>
  {% endfor %}
</div>
<p class="sr-only project-filter-status" role="status" aria-live="polite"></p>
<p class="project-filter-empty" hidden>No projects match this topic.</p>
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <section class="project-section" data-project-section aria-labelledby="{{ category }}-heading">
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category" id="{{ category }}-heading">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% include project_cards.liquid projects=categorized_projects %}
  </section>
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% include project_cards.liquid projects=site.projects %}
{% endif %}

</div>
<script type="module" src="{{ '/assets/js/project-filters.js' | relative_url | bust_file_cache }}"></script>
