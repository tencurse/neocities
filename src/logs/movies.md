---
title: movies
layout: base.njk
eleventyNavigation:
  key: movies
  parent: logs
---

<div class="grid two-col-flex">
<div class="grid">
<span class="label">letterboxd</span>
<span><a href="https://letterboxd.com/coil/">coil</a></span>
</div>
</div>
<p></p>

<div class="grid two-col-flex">
  <div>
    <h4>icon key</h4>

    {% lucide "heart" %} - favourite
    {% lucide "refresh-cw" %} - rewatch
  </div>
</div>

## favourites

<ul class="log booklist film">
<li class="log-book">
{% image "/logs/movies/covers/pacific-rim.jpg", "Pacific Rim (2013) dir. Guillermo del Toro", "log-cover" %}
<span class="log-title"><em>Pacific Rim (2013)</em> <span class="log-dir">dir. Guillermo del Toro</span></span>
</li>
<li class="log-book">
{% image "/logs/movies/covers/the-nice-guys.jpg", "The Nice Guys (2016) dir. Shane Black", "log-cover" %}
<span class="log-title"><em>The Nice Guys (2016)</em> <span class="log-dir">dir. Shane Black</span></span>
</li>
<li class="log-book">
{% image "/logs/movies/covers/the-handmaiden.jpg", "The Handmaiden (2016) dir. Park Chan-wook", "log-cover" %}
<span class="log-title"><em>The Handmaiden (2016)</em> <span class="log-dir">dir. Park Chan-wook</span></span>
</li>
<li class="log-book">
{% image "/logs/movies/covers/perfect-blue.jpg", "Perfect Blue (1997) dir. Hayao Miyazaki", "log-cover" %}
<span class="log-title"><em>Perfect Blue (1997)</em> <span class="log-dir">dir. Satoshi Kon</span></span>
</li>
</ul>

{% include 'partials/logmovie.liquid' %}

## previous years

- [2023](/logs/movies/2023) {.breadcrumb-item}

{.breadcrumb-list}