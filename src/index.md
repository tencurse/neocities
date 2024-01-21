---
title: home
layout: base.njk
eleventyNavigation:
  key: home
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

> hello! i’m **[ten](/about) (he/she)**, and welcome to my ever-evolving webspace!

here you can find my [media logs](/logs), pore over some cool and interesting [links](/links) and [resources](/resources) i found from all over the web.

have fun [exploring](/sitemap) and i hope you learn something new!

thanks for visiting and take care {% lucide "heart" %}

[![Resources for Palestine](/assets/img/standwith.png)](/resources/palestine) click the button on the left or go to [this page](/resources/palestine) for more information and resources and what you can do to help.

<p></p>

<div class="grid">
<span class="label">featured page&nbsp;&nbsp;</span>
<span><a href="/resources">resources</a> (updated!) / <a href="/blog">blog</a> (it’s back!)</span>
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
<span><em>the deal</em> by mitski</span>
</div>

<p></p>

last updated: jan 2024

## changelog

<div class="grid">
{% for update in updates limit:4 %}<span class="label">{{ update.date | toUTC }} &nbsp;</span> <span>{{ update.update | renderUsingMarkdown }}</span>{% endfor %}
</div>
<p></p>

[see more updates ->](/changelog)
