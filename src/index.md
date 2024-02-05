---
title: カルマ・karuma
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
　　　　） (´･ω･) 　 　 　 　
　　　 (　 ( つ /￣￣￣/　
　　(´[_]　＼/＿＿＿/)
　　 [i＝========＝i]
　　　 _｡_　 　
　 Ｃ(＿ｱ

</pre>
    
hello! i’m **[ten](/about) (he/she)**, and welcome to my ever-evolving webspace!

here you can find my [media logs](/logs), pore over some cool and interesting [links](/links) and [resources](/resources) i found from all over the web.

have fun [exploring](/sitemap) and i hope you learn something new!

thanks for visiting and take care!

  </div>

<div class="clear vertical">
  <div class="featured">
    <h2 class="border">featured {% lucide "flame" %}</h2>
    {% image "/assets/img/catalogue.png" "catalogue" %}
    <p>The catalogue page has everything: my media logs, the blog, resources, tools, shrines, etc!</p>
    <p><a href="/catalogue" class="link">catalogue</a></p>
  </div>
  <div>
  <center>

  [![Resources for Palestine](/assets/img/standwith.png)](/resources/palestine) ![Bisexual flag](/assets/img/bisexual.png) ![Trans Rights Now](/assets/img/trn.png)

  </center>
  </div>
</div>


  <div class="latest">
    <h2>latest {% lucide "hourglass" %}</h2>
    <ul class="card-list">
      <li class="card-item">
        <span class="title"><a href="{{ blog_post.url }}">{{ blog_post.data.title }}</a></span>
        <span class="date">{{ blog_post.data.date | toUTC }}</span>
        <span class="category"><a href="/blog">blog</a></span>
      </li>
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
        <span class="title update">{{ update.update | renderUsingMarkdown }}</span>
        <span class="date">{{ update.date | toUTC }}</span>
        <span class="category"><a href="/changelog">changelog</a></span>
      </li>
    </ul>
  </div>
  <div>
  {% include 'partials/webrings.njk' %}
  </div>
</section>