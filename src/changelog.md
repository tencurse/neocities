---
title: changelog
layout: base.njk
parent: /
---

{% assign updates23 = updates | where: "year", 2023 %}
{% if updates23 %}
## 2023

<div class="grid">
{% for update in updates23 %}<span class="label">{{ update.date | toUTC }} &nbsp;</span> <span>{{ update.update | renderUsingMarkdown }}</span>{% endfor %}
</div>
{% endif %}
