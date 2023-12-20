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

i made this site to share little pieces of myself--my interests, my thoughts, my projects, among other things. i hope you have fun, learn something, or both!

here’s a [map](/sitemap), go forth and explore!

thanks for visiting and take care!

[<img src="assets/img/standwith.png" alt="Resources for Palestinian liberation">](/resources) click the button on the left or go to [this page](/resources) for more information and resources and what you can do to help.

## currently

<div class="grid">
<span class="label">reading</span>
<span><em><a href="/logs/books/the-monster-baru-cormorant">the monster baru cormorant</a></em> by seth dickinson</span>
<span class="label">watching</span>
<span>house m.d., season 5</span>
<span class="label">playing</span>
<span>baldur’s gate 3</span>
<span class="label">listening</span>
<span><em>obsession</em> by sir chloe</span>
</div>

<p></p>

last updated: dec 2023

## site updates

{% assign update = updates | first %}

<div class="grid">
<span class="label">{{ update.date | toUTC }}</span>
<span>{{ update.update | renderUsingMarkdown }}</span>
</div>
<p></p>

[see more updates →](/changelog)