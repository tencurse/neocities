---
title: site info
layout: base.njk
eleventyNavigation:
  key: site_info
eleventyExcludeFromCollections: true
---

> are you telling me a queer coded this?

this [mobile-friendly site](https://kalechips.net/responsive/index) is made with [11ty](https://www.11ty.dev/docs/getting-started/) using [vs code](https://code.visualstudio.com/) for firefox browsers. see the source code on [github](https://github.com/tencurse/neocities).

feel free to copy-paste my code, but if you do, please take the time to learn what you are copy-pasting. arm yourself with knowledge! (this should go without saying, but don’t actually copy the written content.)

## what is {% lang "ja" %}「カルマ・{% endlang %}karuma{% lang %}」{% endlang %}?

{% lang "ja" %}カルマ{% endlang %} <mark>read: karuma</mark> is katakana for the word *karma*, meaning the religious/philosophical concept of actions and consequences. in the context of this website, it comes from my two favourite characters who share the word in their names: Franziska von Karma from *Phoenix Wright: Ace Attorney* and Karma from *League of Legends*.

Franziska’s name in the original Japanese is {% lang "ja" %}{% furi "狩" "かる" %}{% furi "魔" "ま" %}{% furi "冥" "めい" %}{% endlang %} <mark>read: Mei Karuma</mark>.[^1] {% lang "ja" %}{% furi "狩" "かる" %}{% furi "魔" "ま" %}{% endlang %} in this case does not directly translate to the word *karma*, unlike in the localized English version. instead, it means *hunting demon*.[^2] for the sake of consistency, i opted with the katakana version of her name.

[^1]: the individual kanji suggests it should be read as "karima". however in the game, it is “karuma”
[^2]: translated from DeepL

## site credits

### resources

- [deploy-to-neocities](https://deploy-to-neocities.neocities.org/) - github workflow to automatically deploy your changes to neocities
- [moment.js](https://momentjs.com/) - javascript library for easy date formatting
- [transfonter.org](https://transfonter.org/) - online @font-face generator
- [lucide.dev](https://lucide.dev/) - icons
- [utopia.fyi](https://utopia.fyi/) - used this to make the font size, grid, and spacing responsive across devices with minimal use of media queries
- [furigana maker](https://nihongodera.com/tools/furigana-maker) - tool to generate furigana HTML code

### fonts

- [victor mono](https://rubjo.github.io/victor-mono/) - main body and h3 font
- [bianzhidai](https://velvetyne.fr/fonts/bianzhidai/) - title font
- [redaction](https://www.redaction.us/) - h2 font
- [m plus rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) - font used for japanese characters ({% lang %}{% furi "日本語" "にほんご" %}{% endlang %})
- [dotgothic16](https://fonts.google.com/specimen/DotGothic16) - secondary font used for japanese characters
- [ms pgothic](https://eng.m.fontke.com/font/10400069/download/) - ascii art font

### art credit

- [2ch {% lang %}のかわいい AA/{% furi "顔" "かお" %}{% furi "文字" "もじ" %}まとめ{% endlang %}](https://2ch-aa.blogspot.com/) - kaomoji / ascii art credit
- [free palestine buttons](https://hillhouse.neocities.org/journal/notes/palestine) - button credit
- [fool lovers](https://www.foollovers.com/) - button template and favicon credit

### 11ty plugins

- [syntax highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/) - prismjs syntax highlighting
- [lucide icons](https://github.com/GrimLink/eleventy-plugin-lucide-icons) - enables shortcodes for lucide icons
- [external links](https://www.npmjs.com/package/@sardine/eleventy-plugin-external-links) - make external links safer
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) - plugin for [markdown-it](https://github.com/markdown-it/markdown-it)  to add classes and attributes to inline markdown
- [navigation](https://www.11ty.dev/docs/plugins/navigation/) - hierarchical navigation and breadcrumbs
- [image](https://www.11ty.dev/docs/plugins/image/) - automatically process and optimize images
- [rss](https://www.11ty.dev/docs/plugins/rss/) - generate an RSS feed

find more web dev resources [here](/resources/dev)!

## previous versions

previous iterations of the website are saved through archive.org. current iteration is v4, updated on apr 19 2025.

- [v1](https://web.archive.org/web/20230529165943/https://10kph.neocities.org/) - apr 26 2023
- [v2](https://web.archive.org/web/20231210035358/https://10kph.neocities.org/) - may 28 2023, [source code](https://github.com/tencurse/neocities-v2)
- [v3](https://web.archive.org/web/20231218195336/https://10kph.neocities.org/) - dec 17 2023
  - [v3.1](https://web.archive.org/web/20240205181846/https://karuma.me/) - feb 05 2024

## licence

![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png) This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](tp://creativecommons.org/licenses/by-nc-sa/4.0/){rel=license}.

this means you can modify and redistribute the source code (NOT the written content), as long as 1) it is not for commercial use, and 2) you distribute it under the same or similar license.