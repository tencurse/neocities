---
layout: base.njk
title: resources/dev
parent: /resources
---

## documentation

- [MDN Web Docs](https://developer.mozilla.org/en-US/) – docs for HTML/CSS/JavaScript. I keep coming back to this because it has great examples to follow–along.
- [DevDocs](https://devdocs.io/) – API docs for just about any language/framework/etc. It has a search function so you can search through all of the docs, and you can also download it offline.
- [11ty](https://www.11ty.dev/docs/) – Docs for the static site generator I used to build this website. There’s a tutorial below on how to create your site with 11ty!

## tutorials

- **[The Odin Project](https://www.theodinproject.com/)** – The ultimate web development online course. It’s free and extensive. Teaches the basics of the basics. Highly recommend!
  - The biggest hurdle here is that it asks you to dual–boot Linux if you’re on Windows. You can [install WSL instead](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview), but it’s not officially supported by the Project’s community.
- [Interneting is Hard](https://internetingishard.netlify.app/) - web development tutorials with visual aids for the visual learner and interactive examples for the hands-on learner
- **[Create a static site using 11ty and deploy to neocities](https://flamedfury.com/guides/11ty-homepage-neocities/)** – The holy grail tutorial that helped me so I never have to use `<iframe>`s for navigation menus, and now you don’t have to, too.
  - [Whiona’s 11ty Neocities workflow](https://whiona.weblog.lol/2023/10/my-neocities-workflow:-using-eleventy-and-the-cli-to-speed-up-development) - [Whiona](https://whiona.me) also has a great writeup that may be easier to follow for beginners/non-coders
- [The Modern JavaScript Tutorial](https://javascript.info/) – Great for both beginners and advanced users, though some of it may be _too_ advanced.
- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web) – CSS Tricks tutorial on implementing dark mode on your website
  - [Simple dark mode with CSS variables](https://lukelowrey.com/css-variable-theme-switcher/) – A quick and easy tutorial on implementing dark mode if you don’t have time for the fundamentals
- [Responsive Images](https://internetingishard.netlify.app/html-and-css/responsive-images/) - a tutorial on making your images responsive

## git

If you write code, you _must_ use version control of some kind. [Git](https://git-scm.com/) is the most common one, but [there are others as well](https://en.wikipedia.org/wiki/List_of_version-control_software).

{% aside "" "<p><strong>Note:</strong> Git is not the same thing as GitHub. Git is the version control system, while GitHub is where you may remotely host your repository. There are other options, like GitLab or Codeberg. Using GitHub/GitLab/Codeberg is completely optional.</p>" %}

- [git - the simple guide](https://rogerdudler.github.io/git-guide/) - a simple reference guide to get started with git
- [Git Tutorial from W3 Schools](https://www.w3schools.com/git/git_intro.asp?remote=github) – I haven’t personally used this tutorial, but it might be helpful if you have no idea what Git version control is.
- [Learn Git Branching](https://learngitbranching.js.org/) – Interactive tutorial for Git branching. Fun to use, but not for you if you don’t already have initial knowledge about Git.
- [Git commit message conventions](https://cbea.ms/git-commit/#seven-rules) – a blog post on writing better commit messages
  - [Atomic commits](https://www.freshconsulting.com/insights/blog/atomic-commits/) – a blog post on keeping commits related to one change only, a.k.a. atomic
- **[deploy-to-neocities](https://deploy-to-neocities.neocities.org/)** – Quick setup to automatically deploy your changes to Neocities using a GitHub workflow
- [Gitmoji](https://gitmoji.dev/) - emoji guide for commit messages (just for fun!)

## css

- **[The CSS Cascade](https://2019.wattenberger.com/blog/css-cascade)** – Learn about the cascade of CSS, i.e., why you don’t need to use `!important` to make your CSS work
- [Vanilla CSS](https://vanillacss.com/) - a minimal baseline stylesheet
- [Specialized CSS frameworks](https://github.com/troxler/awesome-css-frameworks#specialized) – Cool CSS stylesheets/libraries! Some of these emulate interfaces (Windows 98, XP, 7, BIOS / MS–DOS, NES, etc.)
  - Personal pick: [Tufte CSS](https://edwardtufte.github.io/tufte-css/)
- **[Common Layouts using CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)** – MDN Docs takes you step by step on how to build some common website layouts using CSS Grid
- [CSS Layout collection](https://phuoc.ng/collection/css-layout/) – Pre–made CSS layouts for common web components
- [Responsive Templates (w3.css)](https://www.w3schools.com/w3css/w3css_templates.asp) – Free responsive CSS templates from ol’ reliable W3 Schools
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - CSS Tricks’ comprehensive guide to Flexbox layout
- [Flexbox Tutorial](https://internetingishard.netlify.app/html-and-css/flexbox/) - tutorial on flexbox from Interneting is Hard
- [Codrops Playground](https://tympanus.net/codrops/category/playground/) – Demos of some cool web designs and animations
- [SmolCSS](https://smolcss.dev/) – minimal snippets for modern CSS layouts and components
- [Modern CSS Solutions for Old CSS Problems](https://moderncss.dev/)
- [Useful :nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/)
- [`aspect-ratio`](https://jakearchibald.com/2022/img-aspect-ratio/) - Avoiding `<img>` layout shifts: aspect-ratio vs width & height attributes

## html
- [&what;](https://www.amp-what.com/unicode/search/%2F%26%5Cw%2F) - HTML entities unicode characters
- [URL encoder for SVG](https://yoksel.github.io/url-encoder/)
- [Broken Link Checker](https://www.deadlinkchecker.com/website-dead-link-checker.asp) - scans your website for any dead links

## javascript
- [Animate on scroll](https://michalsnik.github.io/aos/)
- [Plyr](https://plyr.io/#audio) - a simple, accessible and customisable media player

## accessibility

- **[Solaria’s Web Accessibility Guide](https://solaria.neocities.org/accessibility)**
- [A Field Guide to Accessibility](https://theultimatemotherfuckingwebsite.com/)
- [WAVE Web Accessibility Tool](https://wave.webaim.org/) – This scans your website for any accessibility problems and how to fix them
- [WebAIM’s Contrast Checker](https://webaim.org/resources/contrastchecker/) - Check your text/background colour contrast
- [Colour Contrast Checker](https://colourcontrast.cc/) - a more visual tool to checking colour contrast
- [Randoma11y](https://randoma11y.com) – Generate accessible colour schemes
- [caniuse.com](https://caniuse.com/) – Check browser compatibility for HTML/CSS/JS features
- [whocanuse.com](https://www.whocanuse.com/) – caniuse but for accessible colours
- [HTML5 Please](https://html5please.com/) - Check browser compatibility for HTML5, CSS3, etc features
- [CSS Font Stack](https://www.cssfontstack.com/) - a collection of web safe font stacks

## typography
- [Go Mono](https://go.dev/blog/go-fonts) - main typeface used in this site
- [Bunny Fonts](https://fonts.bunny.net/) - faster & GPDR friendly fonts, good alternative to Google Fonts
- [Redaction](https://www.redaction.us/) - free serif typeface inspired by *The Redaction*
- [UNCUT.wtf](https://uncut.wtf/) - a collection of free fonts
- [Old School PC Font Resource](https://int10h.org/oldschool-pc-fonts/fontlist/)
  - Personal pick: [Cordata PPC-400](https://int10h.org/oldschool-pc-fonts/fontlist/font?cordata_ppc-400)
- [Velvetyne](https://velvetyne.fr/) - free and open source fonts
- [Cava’s Pixel Resources](https://caveras.net/) - video game pixel fonts
- [Pixel Font Gallery](https://www.pentacom.jp/pentacom/bitfontmaker2/gallery/) - pixel fonts created from [bitfontmaker2](https://www.pentacom.jp/pentacom/bitfontmaker2/)

## code editors

- [VS Code](https://code.visualstudio.com/) – free open source IDE with lots of useful extensions
- [VSCodium](https://vscodium.com/) – a community–driven, free–licensed distribution of VS Code for the Microsoft haters
- [neovim](https://neovim.io/) – hyperextensible vim–based text editor

## best practices

These aren’t exclusive to web development in particular, and it might have terms you are not familiar with, but they are still worth a read:

- [Coding Without Comments](https://blog.codinghorror.com/coding-without-comments/) – Short blog post about writing code that doesn’t need comments to be readable
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID) – These are more for object–oriented systems, but really, the most important here (imo) is the Single Responsibility Principle. If you don’t have time or can’t understand anything, read just that principle.
  - [SOLID Principles in JavaScript](http://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/) – What SOLID looks like in JavaScript, with examples
  - Related: [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [Summary of ‘Clean Code’ by Robert C. Martin](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) – Bullet–point summary on writing and maintaining clean code
