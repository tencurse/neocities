---
title: karma
layout: index.njk
eleventyNavigation:
  key: home
  order: 1
---

{% assign update = updates | first %}

<pre class="ascii">
　　　 　   ∧,,∧
　　　　） (´･ω･) 　 　 　 　
　　　 (　 ( つ /￣￣￣/　
　　(´[_]　＼/＿＿＿/)
　　 [i＝========＝i]
　　　 _｡_　 　
　 Ｃ(＿ｱ
</pre>

> *you know what they say: karma always catches up to you.*
    
hello! i’m **[ten](/about)** — welcome to my ever-evolving webspace: part [digital garden](/notes), part [playground](/catalogue) to all the things i like and make and forget about.

have fun [exploring](/sitemap) and thanks for stopping by. feel free to click around, and don’t forget to take your shoes off.

## featured

[ [catalogue](/catalogue) ]
[ [wyll shrine](/shrines/wyll) ]
[ [free palestine](/resources/palestine) ]

## changelog

[<span class="label"> {{ update.date | toUTC }} </span>] {{ update.update | renderUsingMarkdown }}


{% include "partials/webrings.njk"%}