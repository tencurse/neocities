---
title: changelog
layout: base.njk
eleventyNavigation:
  key: changelog
---

{% assign updates24 = updates | where: "year", 2024 %}
{% if updates24 %}
## 2024

<div class="grid">
{% for update in updates24 %}<span class="label">{{ update.date | toUTC }} &nbsp;</span> <span>{{ update.update | renderUsingMarkdown }}</span>{% endfor %}
</div>
{% endif %}

## previous years

- [2023](/changelog/2023)