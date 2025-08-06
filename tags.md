---
layout: default
title: "Tags"
---

<h1>All Tags</h1>
<ul>
{% for tag in site.tags %}
  <li><a href="{{ '/tags/' | append: tag[0] | relative_url }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>

<h1> All Posts by Tag </h1>
{% assign tags_list = site.tags | sort %}
{% for tag in tags_list %}
  <h3 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}



