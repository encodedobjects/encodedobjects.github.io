---
layout: page
title: Blog
permalink: /blog/
---

Blog posts go here.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>