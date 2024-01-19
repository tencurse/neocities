---
title: blog
layout: base.njk
eleventyNavigation:
  key: blog
---

welcome to my blog, where i talk to the void and use copious amounts of footnotes.

{% if collections.posts %}
{% assign posts = collections.posts | reverse %}

<ul class="blog-list">
{% for post in posts %}

{% include 'partials/bloglist.njk' %}

{% endfor %}

</ul>
{% endif %}