---
layout: page
title: Projects
permalink: /projects/
---

Portfolio grid goes here.

<ul>
  {% for project in site.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a>
    </li>
  {% endfor %}
</ul>