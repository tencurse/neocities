---
title: logs/books
layout: base.njk
parent: /logs
---

<p></p>

<div class="grid two-col-flex">
<div class="grid">
<span class="label">bookwyrm</span>
<span><a href="https://bookwyrm.social/user/karma">karma</a></span>
<span class="label">goodreads</span>
<span><a href="https://www.goodreads.com/tencurse">tencurse</a></span>
<span class="label">storygraph</span>
<span><a href="https://app.thestorygraph.com/profile/tencurse">tencurse</a></span>
</div>
</div>
<p></p>

<div class="grid two-col-flex">
<div class="grid">
<h4>icon key</h4>

{% lucide "heart" %} - favourite
{% lucide "refresh-cw" %} - reread
{% lucide "users-round" %} - book club ([r/bookclub](https://www.reddit.com/r/bookclub/))
</div>
<div class="grid">
<h4>acronym key</h4>

DNF - did not finish
TBR - to be read
</div>
</div>

{% include "partials/logbook.liquid" %}