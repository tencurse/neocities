---
title: bookbug
layout: base.njk
eleventyNavigation:
  key: bookbug
  parent: logs
---

[bookbug](https://bookbug.neocities.org/) is an online book club created by [vashti](https://vashti.neocities.org/) and [maple](https://maplebear.neocities.org/)!

[![Bookbug](https://i.imgur.com/YdMxqsC.gif)](https://bookbug.neocities.org/){.outlink} {.outlink-group}

## 2024 reads

<div class="grid normal-case">
<span class="label">january</span> <span><a href="/logs/books/convenience-store-woman">Convenience Store Woman</a> by Sayaka Murata</span>
<span class="label">february</span> <span><a href="/logs/books/giovanni-s-room">Giovanni's Room</a> by James Baldwin</span>
<span class="label">march</span> <span><a href="/logs/books/the-left-hand-of-darkness">The Left Hand of Darkness</a> by Ursula K. Le Guin</span>
</div>

<p></p>

peruse my [book log](/logs/books) for other reads!

## members

read the other members’ book reviews:

{% for button in button_bookbug %}[![{{ button.title }}]({{ button.img }})]({{ button.url }}){.outlink}{% endfor %} {.outlink-group}