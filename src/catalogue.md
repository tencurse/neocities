---
title: catalogue
layout: index.njk
eleventyNavigation:
  key: catalogue
  order: 3
---

{% assign blog_posts = collections.posts | reverse %}
{% assign book = collections.books | first %}
{% assign movie = movies_watched | first %}

<section class="cards vertical">
<div class="size-l">

behold... my stuff!

these are stuff i created for fun! the list below contains my media logs, things i’ve written, lists i’ve curated, web pages dedicated to my favourite things, etc. enjoy!

</div>
</section>
<br>
<section class="cards">
<div>
<h2>media logs {% lucide "scroll-text" %}</h2>
<ul class="card-list">
  <li class="card-item">
    <span class="title"><a href="{{ book.url }}"><em>{{ book.data.title }}</em></a></span>
    <span class="date">{{ book.data.dateStarted | toUTC }}</span>
    <span class="category"><a href="/logs/books/">book</a></span>
  </li>
  <li class="card-item">
    <span class="title"><em>{{ movie.Title }}</em> ({{ movie.Year }})</span>
    <span class="date">{{ movie.DateWatched | toUTC }}</span>
    <span class="category"><a href="/logs/movies/">movie</a></span>
  </li>
  <li class="card-item">
    <p><a href="/logs" class="link">see more</a></p>
  </li>
</ul>
</div>
<div>
<h2>blog {% lucide "book-text" %}</h2>
<ul class="card-list">
{% for post in blog_posts limit:2 %}
  <li class="card-item">
    <span class="title"><a href="{{ post.url }}">{{ post.data.title }}</a></span>
    <span class="date">{{ post.data.date | toUTC }}</span>
  </li>
{% endfor %}
  <li class="card-item">
    <p><a href="/blog" class="link">blog archive</a></p>
  </li>
</ul>
</div>
<div>
<h2>resources {% lucide "atom" %}</h2>
<ul class="card-list">
  <li class="card-item">
    <span class="title"><a href="/resources/palestine">Palestine</a></span>
    <span class="date">actions, history, etc</span>
  </li>
  <li class="card-item">
    <span class="title"><a href="/resources/dev">web development</a></span>
    <span class="date">for your webmastery</span>
  </li>
  <li class="card-item">
    <p><a href="/blog" class="link">main page</a></p>
  </li>
</ul>
</div>
<div>
<h2>tools {% lucide "wrench" %}</h2>
<p>A list of tools (mostly software) that I use every day <mark>WIP</mark></p>
<p><a href="/uses" class="link">go to page</a></p>
</div>
</section>
<br>
<section class="cards">
<div class="featured">
<h2>shrines {% lucide "sparkles" %}</h2>
{% image "/assets/img/wyll-shrine.png", "wyll ravengard shrine" %}
<p>A shrine dedicated to my favourite <em>Baldur’s Gate 3</em> character, Wyll Ravengard <mark class="warning">spoiler warning</mark></p>
<p><a href="/shrines/wyll" class="link">Wyll Ravengard (BG3)</a></p>
</div>
<div class="featured">
<h2>fic archive {% lucide "archive" %}</h2>
{% image "/assets/img/symmetra.png", "symmetra's archive" %}
<p>A personal archive of fics I’ve written and published on AO3 <mark class="warning">NSFW warning</mark></p>
<p><a href="https://symmetras.neocities.org/" class="link">go to the archive</a></p>
</div>
</section>