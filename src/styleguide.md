---
title: style guide
layout: base.njk
eleventyNavigation:
  key: style guide
  parent: catalogue
---

Based off of [Poor Man's Styleguide](https://github.com/bryanbraun/poor-mans-styleguide)

## h2 Heading

### h3 Heading

#### h4 Heading

---

## Headings with text

Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.

### Headings with text

Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.

#### Headings with text

Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.

---

## Block elements

### Paragraphs and images

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.

![Test image](./assets/img/wyll-shrine.png)

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.

## Blockquote

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

> "This is a blockquote. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

_Note: the [Figure-Figcaption](http://html5doctor.com/the-figure-figcaption-elements/) and [Details-Summary](http://html5doctor.com/the-details-and-summary-elements/) elements are not currently supported in markdown._

---

## Text Elements

The [a element](#), [external a element](https://example.com), and [a element with title](# "Example Title") examples

The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples

The <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element example

The **b element** example

The <cite>cite element</cite> example

The `code element` example

The <data value="3967381398">data element</data> example

The ~~del element~~ example

The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples

The _em element_ example

The _i element_ example

The <ins>ins element</ins> example

The <kbd>kbd element</kbd> example

The <mark>mark element</mark> example

The <q>q element</q> example

The <q>q element <q>inside</q> a q element</q> example

The <s>s element</s> example

The <samp>samp element</samp> example

The <small>small element</small> example

The <span>span element</span> example

The **strong element** example

The <sub>sub element</sub> example

The <sup>sup element</sup> example

The <time datetime="2005-05-15 19:00">time element</time> example

The <u>u element</u> example

The <var>var element</var> example

---

## Monospace / Preformatted

Code block wrapped in "pre" and "code" tags:

```javascript
// Loop through Divs using Javascript.
var divs = document.querySelectorAll("div"),
  i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}

function testLigatures(value) {
  if (value <= 500 && value >= 300) {
    return () => "middle";
  } else if (typeof value === "number") {
    return (value) => value.toString();
  } else if (typeof value === "undefined") {
    return () => {};
  }
}
```

Monospace Text wrapped in "pre" tags:

<pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</pre>

---

## List Types

### Ordered List

1. List Item 1
2. List Item 2
3. List Item 3
   1. List Item 3.1
   2. List Item 3.2
      1. List Item 3.2.1
      2. List Item 3.2 2
   3. List Item 3.3
4. List Item 4

### Unordered List

- List Item 1
- List Item 2
- List Item 3
  - List Item 3.1
  - List Item 3.2
    - List Item 3.2.1
    - List Item 3.2 2
  - List Item 3.3
- List Item 4

### Definition List

<dl>
  <dt>Definition Term 1</dt>
  <dd>Definition Description 1</dd>
  <dt>Definition Term 2</dt>
  <dd>Definition Description 2</dd>
</dl>

---

## Tables

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
