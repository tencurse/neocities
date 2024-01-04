---
title: home
layout: base.njk
---

<pre class="ascii">
　　　 　  ∧,,∧
　　　　） (´･ω･) 　 　 　 　Hello!
　　　 (　 ( つ /￣￣￣/　
　　(´[_]　＼/＿＿＿/)
　　 [i＝========＝i]
　　　 _｡_　 　
　 Ｃ(＿ｱ
</pre>

<p></p>

hello! i’m **[ten](/about) (he/she)**, and welcome to my webspace!

i made this site to share little pieces of myself--my interests, my thoughts, my projects, etc. i hope you have fun, learn something new, or both!

here’s a [map](/sitemap), go forth and explore!

thanks for visiting and take care!

[![Resources for Palestine](/assets/img/standwith.png)](/resources/palestine) click the button on the left or go to [this page](/resources/palestine) for more information and resources and what you can do to help.

<p></p>

<div class="grid">
<span class="label">featured page&nbsp;&nbsp;</span>
<span><a href="/shrines/wyll">wyll ravengard shrine</a> / <a href="/logs/bookbug">bookbug club</a></span>
</div>

## currently

<div class="grid">
<span class="label">reading</span>
<span><em><a href="/logs/books/the-priory-of-the-orange-tree">the priory of the orange tree</a></em> by samantha shannon</span>
<span class="label">watching</span>
<span>house m.d., season 5</span>
<span class="label">playing</span>
<span>baldur’s gate 3</span>
<span class="label">listening</span>
<span><em>murder on  the dance floor</em> by sophie ellis-bextor</span>
</div>

<p></p>

last updated: jan 2024

## updates

<div class="grid">
{% for update in updates limit:4 %}<span class="label">{{ update.date | toUTC }} &nbsp;</span> <span>{{ update.update | renderUsingMarkdown }}</span>{% endfor %}
</div>
<p></p>

[see more updates →](/changelog)
