name: inverse
layout: true
class: center, middle, inverse
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) <a href="#" class="color"><i class="fa fa-tint"></i></a>]

---

name: normal
layout: true
class: left, middle
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) <a href="#" class="color"><i class="fa fa-tint"></i></a>]

---

template: inverse
# HTML
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name: index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Resources](#resources)
1. [Content](#content)
1. [Sections](#sections)
1. [Lists](#lists)
1. [Tables](#tables)
1. [Forms](#forms)
1. [Character Entities](#entities)
1. [Media](#media)
1. [Metadata](#metadata)
1. [Validation](#validation)
]

---

template: inverse
name: intro

# Introduction
and some History

---

# What is it?

* **H**yper **T**ext **M**arkup **L**anguage.
* **Markup** language used to create **web pages**.
* Written using HTML **elements**.
* **Not** for design or presentation.
* All about **structure** and **semantics**.

---


# History
* 1989-92: **HTML 1.0**, Tim Berners-Lee original [proposal](https://www.w3.org/History/1989/proposal.html)
* 1993: **HTML+**, Dave Raggett's [competing standard](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html)
* 1994: **HTML 2.0**, tables, file upload, ... (<abbr title="Internet Engineering Task Force">IETF</abbr>)
* 1995: Non-standard Netscape features
* 1996: Competing Netscape and Internet Explorer features
* 1996: **HTML 3.2**, W3C standard, the Browser Wars end
* 1997: **HTML 4.0**, stylesheets are introduced
* 1999: **HTML 4.01**, we have a winner!
* 2000: **XHTML 1.0**, an XML version of HTML 4.01
* 2001: **XHTML 1.1**, modularization
* 2008: **HTML 5**, reduces the need for proprietary plug-in based apps
* 2019: **W3C** and <abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr> reach an <a href="https://www.w3.org/2019/04/WHATWG-W3C-MOU.html">agreement</a> about future HTML developments.

Learn more: http://en.wikipedia.org/wiki/HTML#History

---

# Browser Wars

**The First War (1995 &ndash; 2001)**:

- **Netscape** and **Internet Explorer** battle for WWW dominance.
- Web standards were still **not well established**.
- New **proprietary features** are introduced into HTML as browsers compete for market share.
- Developers were **forced** to have two versions of their websites.

**Aftermath**:

- Internet Explorer won the war and decided to **stale** any **new developments**.
- From the ashes of Netscape, [Firefox](assets/html5/nytimes-firefox-final.pdf) starts to gain market share.
- Eventually, browsers decided to work together, and we now have a **much better** web landscape!

---

# Browser Share (2007 &ndash; now)

![](assets/html5/browsershare.png)

Source: http://www.w3counter.com/trends

---

# HTML Structure

- An **HTML file** has a **tree-like** structure where each node is an **HTML Element**.
- Elements can contain other elements and/or **text**.
- They are defined using **tags** and can have **attributes**.
- Browsers display each tag using a **predefined** style that can be changed using **CSS**.

**HTML** tells the browser how the document is **structured**.

**CSS** tells the browser how it should be **displayed**!

---

# Tags

- Tags start with a **&lt;** and end with a **&gt;** and always contain a name.
- They are case insensitive, but **lowercase** is **recommended**.

```html
<html>
```

- Most tags come in pairs: an opening tag and a closing tag.
- Closing tags have a **/** after the **&lt;**.

```html
<html> ... </html>
```

---

# Tag Content

The content of a tag is everything between the opening and closing tags:

```html
<p>Some content</p>
```

It can be text, but is can also be other tags:

```html
<article>
  <p>Some content</p>
</article>
```

Some tags never have content and do not need to be closed:

```html
<br>
```

---

# Attributes

Tags can have attributes. Some are optional, and some are mandatory:

```html
<img src="dog.png">
```

Quotes around attribute values are [not mandatory](https://html.spec.whatwg.org/multipage/syntax.html#unquoted) in HTML 5, but they are **recommended**.

 *** 

To set a [boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute) to true, we can either **omit** its value or use the **name of the attribute** as its value.

```html
<input type="checkbox" checked disabled="disabled">
```

This checkbox is both *checked* and *disabled*.

---

# Some Global Attributes

Some attributes ([global](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)) can be used on all HTML elements. These are some of them:
<small>
- **accesskey**: A guide for browsers to create a keyboard shortcut to the element.
- **autofocus**: Automatically focus the element, allowing the user to start typing right away.
- **hidden**: Indicates that the element is not relevant to the current state of the page (should be set using CSS most of the time). 
- **style**: CSS rules to apply to the element. Only use in some very particular cases.
- **lang**: The primary language for the element's content; typically used in **html** tags if the document has only one language.
- **id**: An element *identification* so that CSS and JavaScript can identify the element.
- **class**: An element *class* so that CSS and JavaScript can identify the class of elements.
</small>

There are many more!

---

# Id and Class

The **id** and **class** attributes are used to easily identify a tag for manipulation (using javascript) or styling (using CSS).

An HTML document **cannot** have two elements with the same **id**:

```html
<img id="logo" src="logo.png>
```

An HTML element can have more than one **class** (separated by whitespace).

```html
<p class="first important">Some text</p>
```

You can think of the **id** as the name of the element and the **class** as its type.

---

# The Most Basic Document 

All HTML documents **must** have these elements:

- A document type declaration (DOCTYPE).
- A [&lt;html&gt;](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element) root with two children: [&lt;head&gt;](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element) and [&lt;body&gt;](https://html.spec.whatwg.org/multipage/semantics.html#the-body-element).
- A non-empty [&lt;title&gt;](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element) element inside the &lt;head&gt;.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
  </body>
</html>
```

- The &lt;head&gt; contains **metadata** about the document.
- The &lt;body&gt; contains the actual **structure** and **content**.

---

# Semantics

During this presentation, we will talk about a lot about semantics:

<blockquote>Syntax describes the rules by which words can be combined into sentences, while semantics describes what they mean &mdash; The Cambridge Dictionary</blockquote>

But **why** is semantics **important** when describing a language to markup text?

Most HTML tags could be easily **replaced** by another (together with some CSS) and have the **same final result**.<br><small>At least for the end user</small>.

End users are **not the only** readers of HTML; in fact, they don't read HTML at all:
- But bots do when they index websites.
- And developers when they fix other developers' mistakes.
- And specialized browsers for people with disabilities (*cf.* [accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)).

---

# Whitespace

Except inside a few elements (e.g., **&lt;pre&gt;** and **&lt;textarea&gt;**), whitespace is collapsed into a single space.

So this *haiku*:

```html
"The Old Pond" by Matsuo Bashō

An old silent pond
A frog jumps into the pond—
Splash! Silence again.
```

Renders as:

.example[The Old Pond by Matsuo Bashō An old silent pond A frog jumps into the pond— Splash! Silence again.]

---


template: inverse
name: resources

# Resources

- References:
  - [WHATWG Living Standard](https://html.spec.whatwg.org/multipage/)
  - [Mozilla Developer Network (MDN) Reference](http://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- Books:
  - [Dive into HTML 5](http://diveinto.html5doctor.com/)

- Tutorials:
  - https://webplatform.github.io/docs/html/tutorials/
  - http://www.htmldog.com/guides/html/

---

template: inverse
name: content
# Content

---

# Paragraphs and Line Breaks

- A paragraph is represented by the [&lt;p&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) tag.
- If we want to change lines (but not paragraphs, e.g., in a poem) we can use the [&lt;br&gt;](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element) tag.

```html
<p>"The Old Pond" by Matsuo Bashō</p>

<p>An old silent pond<br>
A frog jumps into the pond—<br>
Splash! Silence again.</p>
```

.example[
<p>"The Old Pond" by Matsuo Bashō</p>

<p style="padding-top: 0.5em">An old silent pond<br>
A frog jumps into the pond—<br>
Splash! Silence again.</p>
]

---

# Text Semantics

Some elements that can be used for [text-level semantics](https://html.spec.whatwg.org/multipage/text-level-semantics.html):

```html
<em>emphasized</em>      <!-- emphasized         -->
<small>small</small>     <!-- smaller            -->
<strong>strong</strong>  <!-- important          -->
<sub>subscripted</sub>   <!-- subscripted        -->
<sup>superscripted</sup> <!-- superscripted      -->
<ins>inserted</ins>      <!-- inserted           -->
<del>deleted</del>       <!-- deleted            -->
<mark>highlighted</mark> <!-- marked/highlighted -->
```
.example[
<em>emphasized</em><small>small</small><strong>strong</strong><sub>subscripted</sub>
<sup>superscripted</sup><ins>inserted</ins><del>deleted</del><mark>highlighted</mark>
]

**Note**: Although [&lt;strong&gt;](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element) is represented by browsers as **bold**, that's not the semantic meaning of the element. The same can be said of all the other elements in this list.

---

# Preformatted Text

Preformatted text ([&lt;pre&gt;](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-pre-element)) can be useful to mark *ascii art*, or used together with other elements to mark, for example, computer code:

```html
<pre>...</pre>   <!-- preformatted text    -->
<code>...</code> <!-- computer code        -->
<kbd>...</kbd>   <!-- keyboard input       -->
<samp>...</samp> <!-- sample computer code -->
<var>...</var>   <!-- a variable           -->
```

```html
<pre><code>
for (i = 0; i < 10; i++)
  print(i)  
</code></pre>
```

.example[<pre><code style="margin: 0">for (i = 0; i < 10; i++)
  print(i)</code></pre>]

---

# More Semantics

Some [text-level semantics](https://html.spec.whatwg.org/multipage/text-level-semantics.html) elements are not even rendered differently by browsers, but they still have importance as they convey meaning to the text.<br><small>HTML is not only for humans.</small>


.small[
```html
<abbr></abbr>              <!-- an abbreviation or acronym      -->
<address></address>        <!-- contact information for someone -->
<time></time>              <!-- a time of the day               -->
<progress></progress>      <!-- a progress of a task            -->
<bdo></bdo>                <!-- the text direction              -->
<blockquote></blockquote>  <!-- quoted from another source      -->
<q></q>                    <!-- an inline (short) quotation     -->
<cite></cite>              <!-- the title of a work             -->
<dfn></dfn>                <!-- a definition                    -->
```

```html
Wikipedia says <abbr title="File Transfer Protocol">FTP</abbr> is 
<q cite="https://en.wikipedia.org/wiki/File_Transfer_Protocol">a 
standard communication protocol used for the transfer of computer 
files from a server to a client on a computer network</q>.
```

.example[
Wikipedia says <abbr title="File Transfer Protocol">FTP</abbr> is <q cite="https://en.wikipedia.org/wiki/File_Transfer_Protocol">a standard communication protocol used for the transfer of computer files from a server to a client on a computer network</q>.
]]

---

# Span

The [&lt;span&gt;](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element) is an incredibly **useful** element for marking text, that means absolutely **nothing at all** (at least semantically).

But, together with the [id and class](https://html.spec.whatwg.org/multipage/dom.html#classes) attributes, we can convey this element *whatever meaning* we desire. And, with **CSS** and **JavaScript**, we can do whatever we want with it.

However, the **&lt;span&gt;** element should only be used if no other, more *semantically correct*, element exists.

```html
One of the boldest colors in the spectrum, 
<span class="color">red</span> stands out 
in any work of art, hence its use to signal 
danger or warning.
```

---

# Anchor

The [&lt;a&gt;](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) tag creates anchor elements that represent hyperlinks to other documents:

- The **href** attribute, if present, represents the URL of the other document.
- URLs can be **relative** (to the current document) or **absolute**.

```html
<a href="anotherpage.html">Another Page</a>
<a href="somewhere/deeper.html">Deeper</a>
<a href="../start.html">Back</a>
<a href="http://www.google.com">Search</a>
```

We can create an anchor to an element with a specific **id** within a page:

```html
<a href="anotherpage.html#introduction">Another page</a>
```

---

# Images

- To represent an image we use the [&lt;img&gt;](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) tag.
- The **src** attribute contains the address of the image.<br><small>A relative or absolute URL.</small>
- The [alt](https://html.spec.whatwg.org/multipage/images.html#alt) attribute is mandatory and represents an alternative image description for browsers incapable of showing images (*cf.* [accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)).

> Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from rendering.

- The **width** and **height** indicate the width and height of the image in pixels. 
- The main idea is for the browser to **allocate** space for the image before downloading it.
- Refrain from overusing this to resize images.

```html
<img src="dog.png" alt="A dog" width="300" height="200">
```

---

# Figure

A [&lt;figure&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element) represents **self-contained content**, potentially with an **optional caption**, which is specified using the [&lt;figcaption&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element) element. The figure, its caption, and its contents are referenced as a *single unit*:

```html
<figure>
  <img src="dog.jpg"
       alt="A dog playing in the garden">
  <figcaption>Fig 1: A dog playing in the garden</figcaption>
</figure>
```

Note: It can be used with **other content** besides images.

---

template: inverse
name: sections

# Sections

---

# Headings

* There are six levels of document headings, from [&lt;h1&gt; to &lt;h6&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).
* A heading element briefly **describes** the topic of the **section** it introduces.

```html
<h1>Title</h1> <!-- only one per document -->
<h2>Subtitle</h2>
<h3>Section</h3>
<h4>Sub-section</h4>
<h5>Each one less important...</h5>
<h6>...than the other</h6>
```

---

# Sectioning Content

- The [&lt;article&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-article-element), [&lt;section&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [&lt;nav&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element), and [&lt;aside&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element) elements are sectioning elements. 
- Sectioning elements are those that are supposed to have **headings**.
- Each one of these has a different semantic meaning:
  - **article**: Represents a complete, or self-contained, element; one that can be independently distributable or reusable, for example, a blog post, a news article, or a comment.
  - **section**: A thematic grouping of content, generally with a heading.
  - **nav**: A section with navigation links.
  - **aside**: For content that is considered separate from the page's main content.

Sectioning content defines the scope of **headings**, **headers**, and **footers**.

---

# Header and Footer

- Sections usually have some **introductory** and **closing** content in the form of a [&lt;header&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-header-element) and a [&lt;footer&gt;](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element).
- Headers normally contain headings (**&lt;h1&gt;** &ndash; **&lt;h6&gt;**), but they can contain anything else.
- The **first** heading of a section represents the heading for that section.

```html
<section id="posts">
  <h1>Posts</h1>
  <article>
    <header>
      <h2>Title of the Post</h2>
      <h3>And the subtitle</h3>
    </header>
    <p>The post content</p>
    <p>More content</p>
    <footer><p>Author of the post</p></footer>
  </article>
</section>
```

---

# Main

- The [&lt;main&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) element represents the dominant content of the document.
- A document must not have more than one main element (unless some are hidden).

```html
<html>
  <head>...</head>
  <body>
    <header>
      <h1>Page Title</h1>
    </header>
    <nav><ul>...navigation links...</ul></nav>
    <main>
      <section id="posts">...</section>
      ...
    </main>
  </body>
</html>
```

---

# Div

The [&lt;div&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) is an incredibly **useful** element for grouping content, that means absolutely **nothing at all** (at least semantically).

But, together with the [id and class](https://html.spec.whatwg.org/multipage/dom.html#classes) attributes, we can convey this element *whatever meaning* we desire. And, with **CSS** and **JavaScript**, we can do whatever we want with it.

However, the **&lt;div&gt;** element should only be used if no other, more *semantically correct*, element exists.

```html
<article class="post">
  <p>...</p>
  <div class="emphasis">
    <p>...</p>
    <p>...</p>
  </div>
  <p>...</p>
</article>
```
---

template: inverse
name: lists
# Lists

---

# Ordered Lists

Ordered lists ([&lt;ol&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)) are lists of items ([&lt;li&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)) that have been **intentionally** ordered; so that if their order changes, it would change the meaning of the document.

```html
<ol>
  <li>An item</li>
  <li>Another item</li>
  <li>And another one</li>
</ol>
```

.example[
<ol>
  <li>An item</li>
  <li>Another item</li>
  <li>And another one</li>
</ol>
]

---

# Ordered List Attributes

The attributes **type** (1, a, A, i, I), **reversed**, and **start** allow us to change the default way the list is presented. The **value** attribute on a list item allows changing the value of that item.

.small[
```html
<ol type="I" start="4" reversed>
  <li>An item</li>
  <li>Another item</li>
  <li value="10">And another one</li>
  <li>And another just for good measure</li>
</ol>
```
]

.example[
<ol type="I" start="4" reversed>
  <li>An item</li>
  <li>Another item</li>
  <li value="10">And another one</li>
  <li>And another just for good measure</li>
</ol>
]

These can also be set in CSS. You should **only** use them in HTML if they convey any meaning (*e.g.,* they are referred to in the text by their values).

---


# Unordered Lists

Unordered lists ([&lt;ul&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)) are lists of items ([&lt;li&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)) where the order of the items is **not important**.


```html
<ul>
  <li>An item</li>
  <li>Another item</li>
  <li>And another one</li>
</ul>
```

.example[
<ul>
  <li>An item</li>
  <li>Another item</li>
  <li>And another one</li>
</ul>
]

---


# Nested Lists

Lists can be nested inside other lists:

.small[
```html
<ul>
  <li>A list:
    <ol>
      <li>Something</li>
      <li>Something else</li>
    </ol>
  </li>
  <li>Another item</li>
  <li>And another one</li>
</ul>
```
]

.example[
<ul>
  <li>A list:
    <ol>
      <li>Something</li>
      <li>Something else</li>
    </ol>
  </li>
  <li>Another item</li>
  <li>And another one</li>
</ul>
]

---

# Definition or Association Lists

* A *definition list* ([&lt;dl&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)) contains terms ([&lt;dt&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element)) and definitions ([&lt;dd&gt;](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element)).<br><small>Definitions call also be called descriptions, or values.</small>
* A term can have several descriptions, and a description can describe several terms.

.small[
```html
<dl>
  <dt>A term</dt>
  <dd>And its definition</dd>
  <dt>This one</dt>
  <dd>Has a different definition</dd>
  <dd>And an alternative definition</dd>
</dl>
```
]

.example[
<dl>
  <dt>A term</dt>
  <dd>And its definition</dd>
  <dt>This one</dt>
  <dd>Has a different definition</dd>
  <dd>And an alternative definition</dd>
</dl>
]


---

template: inverse
name: tables
# Tables

---

# Table

* Tables ([&lt;table&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)) represent **tabular data** (e.g., student grades) and should **not be used** for any kind of design layout.
* In its most simple form, tables are composed of rows ([&lt;tr&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)) of data cells ([&lt;td&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-td-element)):

```html
<table>
  <tr><td>A</td><td>B</td><td>C</td></tr>
  <tr><td>D</td><td>E</td><td>F</td></tr>
</table>
```

.example[
<table>
  <tr><td>A</td><td>B</td><td>C</td></tr>
  <tr><td>D</td><td>E</td><td>F</td></tr>
</table>
]
<small>Note: This table is styled using CSS, and it's not the default table design.</small>

---

# Caption

A table can have an optional **caption**.

```html
<table>
  <caption>Table 1: A table with letters</caption>
  <tr><td>A</td><td>B</td><td>C</td></tr>
  <tr><td>D</td><td>E</td><td>F</td></tr>
</table>
```

.example[
<table>
  <caption>Table 1: A table with letters</caption>
  <tr><td>A</td><td>B</td><td>C</td></tr>
  <tr><td>D</td><td>E</td><td>F</td></tr>
</table>
]

---

# Headers

Some data cells can be headers ([&lt;th&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)):

* **Not** for making text bold (*e.g.*, pointing out an important value).
* Headers can have an optional **scope** attribute that specifies which cells it applies to (*row*, *col*, *rowgroup*, and *colgroup*).

.small[
```html
<table>
  <tr>
    <th scope="col">A</th><th scope="col">B</th><th scope="col">C</th>
  </tr>
  <tr>
    <td>D</td><td>E</td><td>F</td>
  </tr>
</table>
```
]

.example[
<table>
  <tr><th>A</th><th>B</th><th>C</th></tr>
  <tr><td>D</td><td>E</td><td>F</td></tr>
</table>
]


---

# Cell Merging

We can merge cells horizontally or vertically.

.small[
```html
<table>
  <tr>
    <td>A</td><td colspan="2">B</td>
  </tr>
  <tr>
    <td rowspan="2">C</td><td>D</td><td>E</td>
  </tr>
  <tr>
    <td colspan="2">F</td>
  </tr>
  <tr>
    <td colspan="3">G</td>
  </tr>
</table>
```
]

.example[
<table>
  <tr>
    <td>A</td><td colspan="2">B</td>
  </tr>
  <tr>
    <td rowspan="2">C</td><td>D</td><td>E</td>
  </tr>
  <tr>
    <td colspan="2">F</td>
  </tr>
  <tr>
    <td colspan="3">G</td>
  </tr>
</table>
]

---

# Sections

We can divide tables into three logical sections: [thead](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element), [tfoot](https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element), and [tbody](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element):
- The order is not important.
- It allows, for example, a scrollable body with fixed header and footer.

.small[
```html
<table>
  <thead>
    <tr><th>A</th><th>B</th><th>C</th></tr>
  </thead>
  <tfoot>
    <tr><td>100</td><td>200</td><td>300</td></tr>
  </tfoot>
  <tbody>
    <tr>
      <td>a</td><td>b</td><td>c</td>
    </tr>
    <tr>
      <td>d</td><td>e</td><td>f</td>
    </tr>
  </tbody>
</table>
```
]

---

# Column and Row Groups

So that we don't have to repeat the same information for each cell in a column, we can define column groups using the [&lt;colgroup&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element) and [&lt;col&gt;](https://html.spec.whatwg.org/multipage/tables.html#the-col-element) elements. 

```html
<table>
  <colgroup>
    <col span="2" class="firsttwo">
    <col class="middle">
    <col span="2" class="lasttwo">
  </colgroup>
  <tr>
    <td>A</td><td>B</td><td>C</td><td>E</td><td>F</td>
  </tr>
</table>
```

They are very useful to set the *class* of each column without having to do it in each single **&lt;td&gt;**.

---

template:inverse
name:forms
# Forms

---

# Form

A form ([&lt;form&gt;](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)) has form controls that allow users to provide data to be sent to a server for further processing (*e.g.* saving the data, return search results, or perform a calculation).

Forms have two main attributes:

* **action**: the URL of the service that will process the data.
* **method**: either **get** (values are sent in the URL) or **post** (values are sent inside the HTTP header)<br><small>More on HTTP methods later.</small>


```html
<form action="save.php" method="get">
  <!-- form controls go here -->
</form>
```

---

# Form Controls

Four main types of form controls:

* **input**: Several types of user-editable fields.
* **textarea**: A big editable text field.
* **select**: A dropdown list.
* **button**: A generic button.

---

# Input

An [&lt;input&gt;](https://html.spec.whatwg.org/multipage/input.html#the-input-element) field can vary in many ways, depending on the [type](https://html.spec.whatwg.org/multipage/input.html#attr-input-type) attribute.

.small[
```html
Date: <input type="date" name="date" value="2020-10-15">
Password: <input type="password" name="password" value="mysecretpassword">
Number: <input type="number" name="number" value="123">
```
]

Date: <input type="date" name="date" value="2020-10-15">
Password: <input type="password" name="password" value="mysecretpassword">
Number: <input type="number" name="number" value="123">

The **name** attribute is used to identify the field when processed in the server. 

The **value** attribute contains the initial data in the field. 

**Tip**: As always, dates are specified using [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) (<small>[obligatory xkcd](https://xkcd.com/1179/)</small>).
---

# Common Control Attributes

* **placeholder**: hint for the user shown only before text is entered.
* **autocomplete**: allow auto-completion by the browser (on/off).
* **readonly**: input value cannot be modified (boolean).
* **required**: input must be filled out (boolean).
* **disabled**: input is disabled (boolean).

```html
Address: <input type="text" name="address" 
                placeholder="your main address" 
                required="required" disabled>
```

.example[
Address: <input type="text" name="address" placeholder="your main address" required="required" disabled>
]

---

# Text Inputs

There are several different types of inputs just for normal text entry.

.small[
* <a href="https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)">text</a>: text input with no constraints
* <a href="https://html.spec.whatwg.org/multipage/input.html#password-state-(type=password)">password</a>: characters are not shown
* <a href="https://html.spec.whatwg.org/multipage/input.html#telephone-state-(type=tel)">tel</a>: input value is a telephone number
* <a href="https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)">search</a>: input value is used to perform a search
* <a href="https://html.spec.whatwg.org/multipage/input.html#url-state-(type=url)">url</a>: input value is an URL
* <a href="https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)">email</a>: input value is an e-mail address
]

Some browsers may use slightly different controls for each type.

```html
Search: <input type="search" name="search" placeholder="type">
```

.example[
Search: <input type="search" name="search" placeholder="type">
]
---

# Number Inputs

```html
<input name="n" type="number" value="5" min="0" max="10" step="5">
```

There are two **types** for number inputs:
* <a href="https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number)">number</a>: a precise control for setting a number
* <a href="https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)">range</a>: imprecise control for setting a number

Other attributes:
* **value**: the initial value
* **min**: the minimum value
* **max**: the maximum value
* **step**:  limits the increments at which a value can be set

.example[
Number: <input name="n" type="number" value="5" min="0" max="10" step="5">
]

---


# Date/Time Inputs

There are many **types** for date-like inputs. They also have a **min**, **max**, **step** and **value** attributes.

.small[
* <a href="https://html.spec.whatwg.org/multipage/input.html#date-state-(type=date)">date</a>: select a date
* <a href="https://html.spec.whatwg.org/multipage/input.html#time-state-(type=time)">time</a>: control to select a time of the day
* <a href="https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type=datetime-local)">datetime-local</a>: select a time in a certain day
* <a href="https://html.spec.whatwg.org/multipage/input.html#month-state-(type=month)">month</a>: select a month
* <a href="https://html.spec.whatwg.org/multipage/input.html#week-state-(type=week)">week</a>: control to select a week
]

.small[
```html
Date: <input name="date" type="date" value="2020-10-20" min="2020-10-01">
Time: <input name="time" type="time" value="10:00:30">
Date and Time: <input name="datetime" type="datetime-local" value="2020-10-20T10:00">
Month: <input name="month" type="month" value="2020-10">
Week: <input name="week" type="week" value="2020-W09">
```
]

.example[
Date: <input name="date" type="date" value="2020-10-20" min="2020-10-01">
Time: <input name="time" type="time" value="10:00:30">
Date and Time: <input name="datetime" type="datetime-local" value="2020-10-20T10:00">
Month: <input name="month" type="month" value="2020-10">
Week: <input name="week" type="week" value="2020-W09">
]

---

# Color Input

We can also select a color using the <a href="https://html.spec.whatwg.org/multipage/input.html#color-state-(type=color)">color</a> type:

```html
Color: <input name="color" type="color" value="#336699">

```

The **value** attribute contains the initial color in hexadecimal format.

.example[
Color: <input type="color" value="#336699">
]

---

# Checkbox

* A <a href="https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox)">checkbox</a> allows selecting **several** from a limited number of choices.
* If a checkbox is **selected**, its name/value pair is submitted to the server. If a checkbox is **not selected**, nothing is submitted.
* If two checkboxes have the **same name** and **both are selected**, both names/values are sent. In this case "vehicle=Bike&vehicle=Car".
* The boolean attribute **checked** sets the initial checked state of the checkbox.

.small[
```html
<input type="checkbox" name="vehicle" value="Bike">Ride a bike
<input type="checkbox" name="vehicle" value="Car" checked>Drive a car
```
]

.example[
How do you get to school?<br>
<input type="checkbox" name="vehicle" value="Bike">Ride a bike
<input type="checkbox" name="vehicle" value="Car" checked>Drive a car
]

---

# Radio Button

* A <a href="https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)">radio</a> allows the selecting one form several choices.
* If a radio button is **selected**, then its name/value pair is submitted to the server.
* If a radio button is **not selected**, nothing is submitted.
* If two radio buttons have the **same name**, then only one can be selected; they form a selection group.


.small[
```html
How do you get to school?<br>
<input type="radio" name="gender" value="male" checked="checked">Male
<input type="radio" name="gender" value="female">Female
```
]

.example[
<input type="radio" name="gender" value="male" checked="checked">Male
<input type="radio" name="gender" value="female">Female
]

---

# File Upload

The <a href="https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file)">file</a> type allows file uploading for storing or processing:

.small[
```html
Upload: 
<form action="upload_file.php" method="post" enctype="multipart/form-data">
  <input type="file" name="file" accept="image/png,image/jpeg" multiple>
</form>
```
]

**Important**: To use file uploading in a form, *method* must be **post** and *enctype* must be **multipart/form-data**.

The **accept** attribute can be used to **hint** the browser about what *mime-types* can be selected.
<br><small>This is not enforced.</small>

The **multiple** attribute allows the selection of **more than one** file.

.example[
Upload: <form action="upload_file.php" method="post" enctype="multipart/form-data">
  <input type="file" name="file" accept="image/png,image/jpeg" multiple>
</form>
]

---

# Hidden Input

Inputs with type <a href"https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)">hidden</a> are not shown and are not meant to be changed by the user.

```html
<input type="hidden" name="username" value="mightymouse">
```

.box_info[
We will find what's their purpose later...
]

---

# Submit

The <a href="https://html.spec.whatwg.org/multipage/input.html#submit-button-state-(type=submit)">submit</a> input type, allows the user to submit the form for processing.

The **value** contains the text to be used for the submit button. A multilingual default will be used if left blank.

```html
<form action="save.php" method="get">
  <!-- Other form controls go here-->
  <input type="submit" value="Send">
</form>
```

The form will be submitted using the *method* and *action* defined in the **form** tag.

.example[
<form action="save.php" method="get">
  <input type="submit" value="Send">
</form>
]

The button element (next slide) is a more modern way to achieve this behavior.

---

# Button

A different control is the [button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) that can be used as:
- a generic button that has to be controlled with JavaScript (**type** button).
- an alternative way to submit a form (**type** submit, the default) using a different action (**formaction**) and method (**formmethod**).

.small[
```html
<form>
  <button formaction="login.php" formmethod="post" type="submit">
    Login
  </button>
  <button formaction="register.php" formmethod="post" type="submit">
    Register
  </button>
</form>
```
]

This way, you can have different buttons with **different** actions and methods.

.example[
<button formaction="login.php" formmethod="post">Login</button>
<button formaction="register.php" formmethod="post">Register</button>
]

---

# Select

The form control [select](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) allows the selection of one element (or several, with the **multiple** attribute) from a list of options.

.small[
```html
<select name="fruit">
  <option value="orange">Orange</option>
  <option value="banana" selected>Banana</option>
  <option value="tomato">Tomato</option>
  <option value="apple">Apple</option>
</select>
```
]

For the [option](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) element, the **value** is what is sent to the server, the **content** is the value presented to the user, and the **select** attribute allows to set the initially selected option.

.example[
<select name="fruit">
  <option value="orange">Orange</option>
  <option value="banana" selected>Banana</option>
  <option value="tomato">Tomato</option>
  <option value="apple">Apple</option>
</select>
]

---

# Option Groups

Options in select controls can be grouped using the [optgroup](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element) element; this makes selecting them in large lists more manageable.

```html
<select name="food">
  <optgroup label="Fruits">
    <option value="orange">Orange</option>
    <option value="banana" selected>Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="lettuce">Lettuce</option>
    <option value="carrot">Carrot</option>
  </optgroup>
</select>
```

.example[
<select name="food">
  <optgroup label="Fruits">
    <option value="orange">Orange</option>
    <option value="banana" selected>Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="lettuce">Lettuce</option>
    <option value="carrot">Carrot</option>
  </optgroup>
</select>
]

---

# DataList

The form control [datalist](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) is very similar to the **select** element. 

The main difference is that it is connected to an **input** element (using the **list** and **id** attributes) and allows the user to write a value that does not exist in the list.

.small[
```html
<input name="fruit" list="fruits" value="Banana">
<datalist id="fruits">
  <option>Orange</option>
  <option selected>Banana</option>
  <option>Tomato</option>
  <option>Apple</option>
</datalist>
```
]

.example[
<input name="fruit" list="fruits" value="Banana">
<datalist id="fruits">
  <option>Orange</option>
  <option selected>Banana</option>
  <option>Tomato</option>
  <option>Apple</option>
</datalist>
]

---

# Text Area

The [&lt;textarea&gt;](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element) element allows users to write larger, multiline texts.

```html
<textarea name="description" rows="5" cols="60">
  This is an input field that allows
  the user to input several lines of text.
  This is the initial value for that input.
  Be careful about extra white space.
</textarea>
```

The initial value is a content of the tag and whitespace is significant. So be careful with it!

.example[
<textarea name="description" rows="5" cols="60">
  This is an input field that allows
  the user to input several lines of text.
  This is the initial value for that input.
  Be careful about extra white space.
</textarea>
]

---

# Label

The [&lt;label&gt;](https://html.spec.whatwg.org/multipage/forms.html#the-label-element) element allows the association between text (the label) and its corresponding input:

* In most browsers, clicking the **label** focuses the **input**.
* This is of great importance in terms of [accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/).<br><small>For example, it helps browsers for the visually impaired!</small>

Two ways of creating the association:

.small[
```html
<label for="id_name">Name:</label>
<input type="text" name="name" id="id_name">
```

```html
<label>Name:
  <input type="text" name="name">
</label>
```
]

.example[
<label>Name:
  <input type="text" name="name">
</label>
]

---


# Field Set

The [&lt;fieldset&gt;](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) element is useful to group controls in large forms.

The [&lt;legend&gt;](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) element contains the title of the group.

```html
<form>
  <fieldset>
    <legend>Personal data:</legend>
    <label>Name: <input type="text"></label>
    <label>Email: <input type="text"></label>
    <label>Date of birth: <input type="text"></label>
  </fieldset>
</form>
```

.example[
<form>
  <fieldset>
    <legend>Personal data:</legend>
    <label>Name: <input type="text"></label>
    <label>Email: <input type="text"></label>
    <label>Date of birth: <input type="text"></label>
  </fieldset>
</form>
]

---

template: inverse
name: entities
# Character Entities

---

# Character Entities

A given [character encoding](https://html.spec.whatwg.org/multipage/infrastructure.html#encoding-terminology) may not be able to express all characters of the document character set.

Some characters might have some special meaning (<, >, " and &) and be confused by the browser as markup.

In HTML, character entity references may appear in two forms:

* Numeric character references (either decimal or hexadecimal).
* Named character entity references.

---

# Character Entities

Character entities always start with a **&** and end with a **;**

For example, the ampersand (&amp;):

* Decimal character: &amp;#38;
* Hexadecimal character: &amp;#x26;
* Named character entity: &amp;amp;

Most important character entities:

* Less than sign (&lt;): &amp;lt;
* Greater than sign (&gt;): &amp;gt;
* Ampersand (&amp;): &amp;amp;
* Double quote sign (&quot;): &amp;quot;
* Non-breaking space (&nbsp;): &amp;nbsp;

[Other character entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) | [Character entity search](http://www.amp-what.com/unicode/search/arrow) 

---

template: inverse
name: media
# Media

---

# Canvas

A **canvas** is an empty rectangle that can be used to draw on the fly using *JavaScript*.

```html
<canvas width="400px" height="300px"></canvas>
```

Some cool <a href="https://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210">examples</a>.

---

# SVG

**S**calable **V**ector **G**raphics ([&lt;svg&gt;](https://html.spec.whatwg.org/multipage/embedded-content-other.html#svg-0)):

* SVG images can be created and edited with any text editor.
* SVG images can be searched, indexed, scripted, and **compressed**.
* SVG images are **scalable**.
* SVG images can be printed with high quality at **any resolution**.
* SVG images are **zoomable** without degradation.

---

# SVG Example

.small[
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
  <polygon
        points="100,10 40,180 190,60 10,60 160,180"
        style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;"
  >
</svg>
```
]

<center>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200" style="display:block; margin: 0 auto;">
    <polygon
          points="100,10 40,180 190,60 10,60 160,180"
          style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
  </svg>
</center>

---

# Other Media Tags


HTML 5 also includes specific tags for:

* [&lt;audio&gt;](https://html.spec.whatwg.org/multipage/media.html#the-audio-element): defines sound, such as music or other audio streams
* [&lt;video&gt;](https://html.spec.whatwg.org/multipage/media.html#the-video-element): specifies video, such as a movie clip or other video streams
* [&lt;source&gt;](https://html.spec.whatwg.org/multipage/media.html#the-source-element): specify multiple media resources for media elements (*e.g.*, audio, video, and images).
* [&lt;track&gt;](https://html.spec.whatwg.org/multipage/media.html#the-track-element): text tracks for video and audio elements

Learn more: [Using HTML5 Audio and Video](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video)

---

template: inverse
name:metadata
# Metadata

You can define metadata for your document inside the head tag.

---

# Meta Content

The [&lt;meta&gt;](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) element is used to express metadata that cannot be expressed using other metadata elements (*e.g.*, title).

```html
<head>
  <meta name="?" content="?">
</head>
```

Possible values for the **name** attribute:

* **application-name**, defining the name of the web application running in the webpage.
* **author**, defining, in a free format, the name of the author of the document.
* **description**, containing a short and accurate summary of the content of the page.
* **generator**, containing, in a free format, the identifier to the software that generated the page.
* **keywords**, containing, as strings separated by commas, relevant words associated with the content of the page.

---

# Character Set

One of the uses of the **&lt;meta&gt;** element is to specify the [character encoding](https://html.spec.whatwg.org/multipage/semantics.html#charset) of an HTML document.

```html
<head>
  <meta charset="utf-8">
</head>
```
Some encodings:

* **utf-8** Character encoding for Unicode (recommended).
* **iso-8859-1** Character encoding for the Latin alphabet.

Knowing about Unicode and charsets is [important](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) for every software developer.

---

template: inverse
name: validation

# Validation

---

# Validation

* Browsers try to correct mistakes done by developers (*e.g.*, missing closing tag).
* But we cannot rely on all browsers fixing our mistakes in the same way.
* Sometimes mistakes are not present in the rendered version of the page (*e.g.*, using the wrong semantic element or missing a mandatory semantic attribute).
* These are some reasons why you should always validate your HTML code:<br>http://validator.w3.org/
