---
title: changelog
layout: base.njk
eleventyNavigation:
  key: changelog
eleventyExcludeFromCollections: true
permalink: false
---

{% assign updates24 = updates | where: "year", 2024 %}
{% if updates24 %}


<div class="size-l">

## 2024

{% for update in updates24 %}<span class="label">{{ update.date | toUTC }} &nbsp;</span> <span>{{ update.update | renderUsingMarkdown }}</span>{% endfor %}

</div>
{% endif %}

## previous years

- [2023](/changelog/2023) {.breadcrumb-item}

{.breadcrumb-list}