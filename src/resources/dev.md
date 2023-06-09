---
title: Web development esources
layout: mainpage.njk
dir: resources/dev
---

## Documentation

- [MDN Web Docs](https://developer.mozilla.org/en-US/) – docs for HTML/CSS/JavaScript. I keep coming back to this because it has great examples to follow–along.
- [DevDocs](https://devdocs.io/) – API docs for just about any language/framework/etc. It has a search function so you can search through all of the docs, and you can also download it offline.
- [11ty](https://www.11ty.dev/docs/) – Docs for the static site generator I used to build this website. There’s a tutorial below on how to create your site with 11ty!

## Tutorials

- [**The Odin Project**](https://www.theodinproject.com/) – The ultimate web development online course. It’s free and extensive. Teaches the basics of the basics. Highly recommend!
  - The biggest hurdle here is that it asks you to dual–boot Linux if you’re on Windows.{% footnoteNum %}{% footnote "I promise it’s worth it. Once you start using Linux for coding, you’ll never go back. Also, you don’t have to use Ubuntu, but it’s a good beginner distro." %} You can [install WSL instead](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview), but it’s not officially supported by the Project’s community.
- [**Create a static site using 11ty and deploy to neocities**](https://flamedfury.com/guides/11ty-homepage-neocities/) – The holy grail tutorial that helped me so I never have to use `<iframe>`s for navigation menus, and now you don’t have to, too.
- [The Modern JavaScript Tutorial](https://javascript.info/) – Great for both beginners and advanced users, though some of it may be _too_ advanced.
- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web) – CSS Tricks tutorial on implementing dark mode on your website
  - [Simple dark mode with CSS variables](https://lukelowrey.com/css-variable-theme-switcher/) – A quick and easy tutorial on implementing dark mode if you don’t have time for the fundamentals

## Git / GitHub

If you write code, you _must_ use version control of some kind. [Git](https://git-scm.com/) is the most common one, but [there are others as well](https://en.wikipedia.org/wiki/List_of_version-control_software).

{% aside "" "<p><strong>Note:</strong> Git is not the same thing as GitHub. Git is the version control system, while GitHub is where you may remotely host your repository. There are other options, like GitLab or Codeberg. Using GitHub/GitLab/Codeberg is completely optional.</p>" %}

- [Git Tutorial from W3 Schools](https://www.w3schools.com/git/git_intro.asp?remote=github) – I haven’t personally used this tutorial, but it might be helpful if you have no idea what Git version control is.
- [Learn Git Branching](https://learngitbranching.js.org/) – Interactive tutorial for Git branching. Fun to use, but not for you if you don’t already have initial knowledge about Git.
- [Git commit message conventions](https://cbea.ms/git-commit/#seven-rules) – a blog post on writing better commit messages
  - [Atomic commits](https://www.freshconsulting.com/insights/blog/atomic-commits/) – a blog post on keeping commits related to one change only, a.k.a. atomic
- [**deploy-to-neocities**](https://deploy-to-neocities.neocities.org/) – Quick setup to automatically deploy your changes to Neocities using a GitHub workflow

## CSS

- [**The CSS Cascade**](https://2019.wattenberger.com/blog/css-cascade) – Learn about the cascade of CSS, i.e., why you don’t need to use `!important` to make your CSS work
- [Specialized CSS frameworks](https://github.com/troxler/awesome-css-frameworks#specialized) – Cool CSS stylesheets/libraries! Some of these emulate interfaces (Windows 98, XP, 7, BIOS / MS–DOS, NES, etc.)
  - I use [Tufte CSS](https://edwardtufte.github.io/tufte-css/) as a base for this website
  - Related: [athena](https://github.com/apas/athena/tree/master) – minimalist static blog generator based on Flask, Pandoc, and Tufte CSS
- [**Common Layouts using CSS Grid**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout) – MDN Docs takes you step by step on how to build some common website layouts using CSS Grid
- [csslayouts.io](https://csslayout.io/) – Pre–made CSS layouts for common web components
- [Responsive Templates (w3.css)](https://www.w3schools.com/w3css/w3css_templates.asp) – Free responsive CSS templates from ol’ reliable W3 Schools
- [Codrops Playground](https://tympanus.net/codrops/category/playground/) – Demos of some cool web designs and animations
- [SmolCSS](https://smolcss.dev/) – minimal snippets for modern CSS layouts and components

## Accessibility

- [A Field Guide to Accessibility](https://theultimatemotherfuckingwebsite.com/) – A great guide on accessibility
- [WAVE Web Accessibility Tool](https://wave.webaim.org/) – This scans your website for any accessibility problems and how to fix them
- [Randoma11y](https://randoma11y.com) – Generate accessible colour schemes
- [caniuse.com](https://caniuse.com/) – Check browser compatibility for HTML/CSS/JS features
- [whocanuse.com](https://www.whocanuse.com/) – caniuse but for accessible colours

## Code editors

- [VS Code](https://code.visualstudio.com/) – free open source IDE with lots of useful extensions
- [VSCodium](https://vscodium.com/) – a community–driven, free–licensed distribution of VS Code for the Microsoft haters
- [neovim](https://neovim.io/) – hyperextensible vim–based text editor
- [Brackets](https://brackets.io/) – text editor built for web designers and front–end developers

## Best practices

These aren’t exclusive to web development in particular, and it might have terms you are not familiar with, but they are still worth a read:

- [Coding Without Comments](https://blog.codinghorror.com/coding-without-comments/) – Short blog post about writing code that doesn’t need comments to be readable
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID) – These are more for object–oriented systems, but really, the most important here (imo) is the Single Responsibility Principle. If you don’t have time or can’t understand anything, read just that principle.
  - [SOLID Principles in JavaScript](http://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/) – What SOLID looks like in JavaScript, with examples
  - Related: [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [Summary of ‘Clean Code’ by Robert C. Martin](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) – Bullet–point summary on writing and maintaining clean code
