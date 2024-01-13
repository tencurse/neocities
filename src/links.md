---
title: links
layout: base.njk
parent: /
---

here are some buttons for my site if you want to link back! :~) please do not [hotlink](https://simple.wikipedia.org/wiki/Hotlinking)!

![](/assets/img/10kph-01.png) ![](/assets/img/10kph-02.png) ![](/assets/img/10kph-03.png) 
 
## personal sites

{% for button in button_wall %}[![{{ button.title }}]({{ button.img }})]({{ button.url }}){.outlink}{% endfor %} {.outlink-group}

<p></p>

<button class="button" id="randomLink">i’m feeling lucky {% lucide "mouse-pointer-click" %}</button>

if you’ve updated your site button, have a new one (or you already have a site button and i just couldn’t find it), or you want to get your site removed from above, let me know via email [10kph (at) proton (dot) me](mailto:10kph@proton.me)

## etc

- [crouton.net](http://crouton.net/)
- [henry from online](https://henry.codes/)
  - [computer crimes](https://crime.computer/)
  - [strange websites](https://strange.website/)
- [Gwern.net](https://gwern.net/)

i’m still in progress of adding more links here :~)

in the mean time, find more fun and cool sites in my [resources page](/resources)

or browse more random sites in the [marginalia](https://search.marginalia.nu/explore/random)