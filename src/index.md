---
title: カルマ
layout: index.njk
eleventyNavigation:
  key: home
---

{% assign blog_post = collections.posts | reverse | first %}
{% assign book = collections.books | first %}
{% assign update = updates | first %}
{% assign movie = movies_watched | first %}

<section class="cards">
  <div class="size-m welcome">
    <h2>welcome!</h2>
<pre class="ascii">
　　　 　  ∧,,∧
　　　　） (´･ω･) 　 　 　 　Hello!
　　　 (　 ( つ /￣￣￣/　
　　(´[_]　＼/＿＿＿/)
　　 [i＝========＝i]
　　　 _｡_　 　
　 Ｃ(＿ｱ

</pre>
    
hello! i’m **[ten](/about) (he/she)**, and welcome to my ever-evolving webspace!

here you can find my [media logs](/logs), pore over some cool and interesting [links](/links) and [resources](/resources) i found from all over the web.

have fun [exploring](/sitemap) and i hope you learn something new!

thanks for visiting and take care {% lucide "heart" %}

  </div>
  <div class="featured">
    <h2>featured</h2>
    {% image "/assets/img/dum.png" "placeholder" %}
    <p><a href="/resources" class="link">resources</a></p>
  </div>
  <div class="latest">
    <h2>latest</h2>
    <ul class="card-list">
      <li class="card-item">
        <span class="title"><a href="{{ blog_post.url }}">{{ blog_post.data.title }}</a></span>
        <span class="date">{{ blog_post.data.date | toUTC }}</span>
        <span class="category"><a href="/blog">blog</a></span>
      </li>
      <li class="card-item">
        <span class="title"><a href="{{ book.url }}">{{ book.data.title }}</a></span>
        <span class="date">{{ book.data.dateStarted | toUTC }}</span>
        <span class="category"><a href="/logs/books/">book</a></span>
      </li>
      <li class="card-item">
        <span class="title"><a href="/logs/movies">{{ movie.Title }} ({{ movie.Year }})</a></span>
        <span class="date">{{ movie.DateWatched | toUTC }}</span>
        <span class="category"><a href="/logs/movies/">movie</a></span>
      </li>
      <li class="card-item">
        <span class="title update">{{ update.update | renderUsingMarkdown }}</span>
        <span class="date">{{ update.date | toUTC }}</span>
        <span class="category"><a href="/changelog">changelog</a></span>
      </li>
    </ul>
  </div>
  <div class="webring-container">
  {% include 'partials/webrings.njk' %}
  </div>
</section>