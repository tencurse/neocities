---
title: karma
layout: index.njk
eleventyNavigation:
  key: home
---

{% assign blog_post = collections.posts | reverse | first %}
{% assign book = collections.books | first %}
{% assign update = updates | first %}
{% assign movie = movies_watched | first %}

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

## featured
    {% image "/assets/img/catalogue.png" "catalogue" %}
    
    <p>The catalogue page has everything: my media logs, the blog, resources, tools, shrines, etc!</p>
    <p><a href="/catalogue" class="link">catalogue</a></p>