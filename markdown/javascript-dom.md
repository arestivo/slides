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

template:inverse
# JavaScript / DOM
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Elements](#elements)
1. [Traversing](#traversing)
1. [Events](#events)
1. [Ajax](#ajax)
1. [Timers](#timers)
1. [Advanced](#advanced)
]

---

template: inverse
name: intro
# Introduction

---

# DOM

* The **Document Object Model** (DOM) is a fully object-oriented representation of a web page as a logical tree of *nodes*.

* It allow programmatic access to the tree, allowing programs to **read** and **change** the document **structure**, **style** and **content**.

* Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

* It can be manipulated from the browser using **JavaScript**.

---
# Document

The [Document](https://developer.mozilla.org/en/docs/Web/API/Document) object represents an HTML document.

You can access the current document in *JavaScript* using the **global** variable **document**.

Some Document **properties**:

  * [URL](https://developer.mozilla.org/en-US/docs/Web/API/Document/URL) &ndash; Read-only location of the document.
  * [title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) &ndash; The document title.
  * [location](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) &ndash; A [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) object that can be assigned in order to navigate to another document.

```javascript
document.location.assign('https://www.google.com/')
```

Another **global** variable represents the browser called [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window).

---

# Location

A [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) allows us to separate the URL into its many components.

If the current URL is:

```url
https://www.example.com:8080/path?key=value#somewhere
```

Then:

```javascript
console.log(document.location.protocol)    // https:
console.log(document.location.host)        // www.example.com:8080
console.log(document.location.hostname)    // www.example.com
console.log(document.location.port ?? 80)  // 8080
console.log(document.location.pathname)    // /path
console.log(document.location.search)      // ?key=vale
console.log(document.location.hash)        // #somewhere
```


---

# DOM UML Diagram

A **partial** representation of the DOM:

![](assets/javascript-dom/uml.svg)

---

# Script Element

The HTML [&lt;script&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element is used to associate *JavaScript* code with an *HTML* page (either **embedded** or using a **reference** to a separate document containing the code):

```html
<html>
  <head>
    <script src="...url of javascript script..."></script>
    <script>...javascript code goes here...</script>
  </head>
</html>
```

.box_warning[
Either way, the &lt;script&gt; tag must be closed.
]

---

# Defer and Async

By default, when the browser encounters a [&lt;script&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element, it **pauses** rendering HTML, **fetches** the JavaScript script (if not embedded), and **runs** the corresponding code.

However, as most JavaScript code interacts with the page's HTML, normally we need to have all HTML code parsed and rendered before running it. A common way to solve this problem was to only use the [&lt;script&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) in the end of the HTML document.

A more modern way is to use one of two special attributes of the [&lt;script&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag: **defer** and **async**. 

```html
<script src="...url of javascript script..." defer></script>
<script src="...url of javascript script..." async></script>
```

Both don't pause the HTML loading and rendering process, but **defer** only executes the code when the page finishes loading.

---

template: inverse
# Resources


* Reference:
  * [WHATWG DOM Specification](https://dom.spec.whatwg.org/)
  * [W3C DOM Specification](https://www.w3.org/TR/DOM-Level-3-Core/)
  * [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

* Tutorials:
  * [The Modern JavaScript Tutorial](http://javascript.info)
  * [JavaScript Style Guide](https://github.com/airbnb/javascript)


---

template: inverse
name: elements
# Elements

---

# Selecting Elements

The following [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) **methods** can be used to access specific HTML elements:

* [getElementById(id)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) that returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
  <br><small>returns the element with the specified id.</small>
* [getElementsByClassName(class)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName) that returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList). 
  <br><small>returns all elements with the specified class.</small>
* [getElementsByTagName(name)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) that returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
  <br><small>returns all elements with the specified tag name.</small>
* [querySelector(selector)](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) that returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
  <br><small>returns the **first** element selected by the specified CSS selector.</small>
* [querySelectorAll(selector)](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) that returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
  <br><small>returns all elements selected by the specified CSS selector.</small>

```javascript
const menu = document.getElementById('menu')
const paragraphs = document.getElementsByTagName('p')  
const intros = document.querySelectorAll('article p:first-child')  
const links = menu.querySelectorAll('a')  
```

---

# Element

An [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object represents an element in a [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document). 

More specific elements, like the [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), will have more specific properties.

Some common Element **properties**:

* [id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)  &ndash; The element's identifier.
* [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) &ndash; The tag name.
* [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) &ndash; The markup code of the element's content.
* [outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML) &ndash; The markup code describing the element, including its descendants.
* [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) &ndash; The text content of an Element. <small>Inherited from [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node).</small>

```javascript
const article = document.querySelector('#posts article:first-child')
article.innerHTML = '<p>Changed the content of the article</p>'
```

In most cases, using innerHTML to add new elements is [not a good idea](https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml).

---

# Element Attributes

[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) attributes can be accessed and modified using the following methods:

* [getAttribute(name)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) &ndash; **returns** the value for the attribute with the given name (or null).
* [setAttribute(name, value)](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) &ndash; **modifies** the attribute with the given name to value.
* [removeAttribute(name)](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) &ndash; **removes** the attribute with the given name from the element.
* [hasAttribute(name)](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute) &ndash; returns true if the element **has** an attribute with the given name.

```javascript
const link = document.querySelector('#posts a:first-child')
console.log(link.getAttribute('href'))
link.setAttribute('href', 'http://www.example.com/'))
```

---

# Element Class List

To modify the class attribute of an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element), we should use the [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)  property that returns a live collection of classes.

This property can then be used to manipulate the class list:

* [add(class, ...)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) &ndash; **adds** one or more classes to the class list.
* [remove(class, ...)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove) &ndash; **removes** one or more classes from the class list.
* [replace(oldClass, newClass)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace) &ndash; **replaces** *oldClass* with *newClass*.<br><small>But only if the *oldClass* is present. Returns true if the class was replaced.</small>
* [toggle(class)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) &ndash; **toggles** class from the class list.<br> <small>Returns true if the class was added, false if it was removed.</small>

```javascript
const article = document.querySelector('#posts article:first-child')
article.classList.add('selected')
```

---

# Creating Elements

The [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method of the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object is the preferred method for creating new elements:

```javascript
const text = 'The quick brown fox jumps over the lazy dog'
const paragraph = document.createElement('p')

paragraph.textContent = text

console.log(paragraph.outerHTML)
```

The **paragraph** variable is a subclass of the [HTMLParagraphElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement) class.

```html
<p>The quick brown fox jumps over the lazy dog</p>
```

The paragraph still **has not been inserted** anywhere in the *document*.

---

# HTMLElement

The [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) inherits from the [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object. 

For each HTML tag, a different class implements (directly or indirectly) this interface. These are some of their **properties**:

* [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) &ndash; The CSS style of the element.
* [hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) &ndash; Is the element hidden.

And **methods**:


* [focus()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) &ndash; Sets keyboard focus on the element.
* [blur()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) &ndash; Removes keyboard focus on the element.
* [click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) &ndash; Simulates a mouse click on the element.

---

# HTML*Element

For each *HTML tag*, there is a class implementing the [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface.

These are some of them and some of their *attributes* and *methods*:

* [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) &ndash; name, type, value, checked, autocomplete, autofocus, defaultChecked, defaultValue, disabled, min, max, readOnly, required, [select()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select).
* [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) &ndash; name, multiple, required, size, length, [add(item, before)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add), [item(index)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/item), [remove(index)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/remove).
* [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement) &ndash; disabled, selected, defaultSelected, text, value.
* [HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement) &ndash; href, host, hostname, port, hash, pathname, protocol, text, username, password.
* [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)  &ndash; alt, src, width, height.

---

# HTMLInputElement

Notice the difference between using the **value** attribute, and the **getAttribute** method to get the value of an [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement):


```html
<form id="register">
  <input type="text" name="username" value="johndoe">
</form>
```

.example[
<form id="register">
  <input type="text" name="username" value="johndoe">
</form>
]

If the user changes the value to '*johndoe123*':

```javascript
const input = document.querySelector('#register input')
console.log(input.getAttribute('value'))  // still johndoe
console.log(input.value)                  // changes to johndoe123
```

---

# Node

The [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object represents a node in the document tree. 

The *Element* and *HTMLElement* objects inherit these methods from the *Node* object:


* [appendChild(child)](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) &ndash; **adds** a node to the end of a parent's node list of children.
* [replaceChild(newChild, oldChild)](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild) &ndash; **replaces** a child of this node with another one.
* [removeChild(child)](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) &ndash; **removes a child** from this node.
* [insertBefore(newNode, referenceNode)](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) &ndash;  **inserts** a new child **before** the reference child.
* [remove()](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) &ndash; **removes the element** from its parent.<br><small>From the [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface</small>.

When adding nodes, if the node already has a parent, it is **first removed** from its current location.

---

# HTMLElement Style

To change the inline style of an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), we can use the [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) object.

Either changing the **whole inline style** at once:

```javascript
const article = document.querySelector('#posts article:first-child')
article.style = 'color: red'
```

Or just **one property**:

```javascript
article.style.color = 'red'
```

To **reset** all inline styles we can set the style object to *null* or to an *empty string*:

```javascript
article.style = ''
article.style = null
```

---

# Element and Node

A simple example:

```javascript
// gets the first article
const article = document.querySelector('#posts article:first-child')

article.style.color = 'blue'  // changes the text color to blue
article.style.padding = '2em' // and the padding to 2em

// creates a new paragraph
const paragraph = document.createElement("p") 
// inserts text in the paragraph
paragraph.textContent = 'Some text'

article.appendChild(paragraph) // adds the paragraph to the article
```

See this example in [action](https://jsfiddle.net/52nawdou/2/).

---

# NodeList

* A [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) is an object that behaves like an array of elements.
* Functions like [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) and [getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) return a *NodeList*.
* In some cases, the NodeList is live. <small>DOM changes automatically update it.</small>

Items in a *NodeList* can be accessed **by index** like in an array:

```javascript
const paragraphs = document.querySelectorAll('p')
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i]
  // do something with the paragraph
}
```

Or using a **for..of** loop:

```javascript
const paragraphs = document.querySelectorAll('p')
for (const paragraph of paragraphs) {
  // do something with the paragraph
}
```

---

template: inverse
name: traversing
# Traversing

---

# Traversing the DOM tree (Node)

The *Node* object has the following properties that allow traversing the DOM tree:

* [firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild) and [lastChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild) &ndash; first and last node children of this node.
* [childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) &ndash; all children nodes as a **live** [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
* [previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling) and [nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) &ndash; previous and next siblings to this node.
* [parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) &ndash; parent of this node.
* [nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType) &ndash; the type of this node.

.box_warning[
Be careful, as all these functions return nodes that might not be HTMLElements (*e.g.*, text and comment nodes).
]

See the complete [node type list](https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType).
---

# Traversing Example

Consider the following HTML:

```html
<section id="posts">
  <h1>Title</h1>
  <p>Some text</p>
</section>
```

And the following *JavaScript*:

```javascript
const posts = document.querySelector('#posts')
console.log(posts.firstChild)                         // #text
console.log(posts.firstChild.textContent)             // '\n '
console.log(posts.firstChild.nextSibling)             // <h1>
console.log(posts.firstChild.nextSibling.textContent) // 'Title'
```

---

# Traversing the DOM tree (Element)

To simplify traversing HTML documents, the following properties have been added to the [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface: <small>they always return Elements; not text or comments.</small>

* [firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild) and [lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild) &ndash; first and last element children of this node.
* [children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children) &ndash; all children elements as a NodeList.
* [previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling) and [nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling) &ndash; previous and next element siblings of this node.

```html
<section id="posts">
  <h1>Title</h1>
  <p>Some text</p>
</section>
```

```javascript
const posts = document.querySelector('#posts')
console.log(posts.firstElementChild)              // <h1>
console.log(posts.firstElementChild.textContent)  // 'Title'
```

---

template: inverse
name: events
# Events

---

# Event-driven Architecture

The DOM follows an [event-driven](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) architecture (an architecture built on top of the publish-subscribe or observer pattern):

* Events are occurrences that happen in the system.<br><small>*e.g.*, the user clicks on a button.</small>
* Specific events in specific objects can have event handlers attached to them.
* When the event happens, the attached handler is called.

**Some** possible events:

* Mouse ([MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)) &ndash; [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), [dblclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event), [mouseup](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event), [mousenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event), [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event), [mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event).
* Forms ([InputEvent](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent), [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent), [FormDataEvent](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEvent) and [SubmitEvent](https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent)) &ndash; [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event), [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event), [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event), [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event), [formdata](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event), [submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event).
* Keyboard ([KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)) &ndash; [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event), [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event), [keypress](https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event).

---

# Events in HTML

A possible way to get notified of events of a particular type (such as click) for a given object is to specify an event handler using an HTML attribute named on{eventtype} on an element.

For example:

```html
<button onclick="console.log('User clicked button')">
  Click me
</button>
```

Or:

```html
<button onclick="return handleClick(event)">
  Click me
</button>
```

.box_warning[
  But, you should [not use this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%E2%80%94_dont_use_these)!
]

---

# Events on Element Properties

Another way of attaching an event handler would be by setting the corresponding property.

For example:

```javascript
document.querySelector("button").onclick = function(event) {
  console.log('User clicked button')
}
```

Or:


```javascript
function handleEvent(event) {
  console.log('User clicked button')
}

document.querySelector("button").onclick = handleEvent
```

---

# Add Event Handler

On modern browsers, the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) function is the most common way to attach event handlers.

For example:

```javascript
const button = document.querySelector("button")

button.addEventListener('click', function(event){
  console.log('User clicked button')
})
```

Or:

```javascript
function handleEvent() {
  console.log('User clicked button')
}

const button = document.querySelector("button")
button.addEventListener('click', handleEvent)
```

---

# The Event Object

A function that handles an event can receive a parameter representing the event:

* Depending on its type, the event can have different [properties and methods](https://developer.mozilla.org/en/docs/Web/API/Event#DOM_Event_interface).

* We can use the [preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method to ensure that the default behavior is suppressed (*e.g.*, a link isn't followed or a form isn't submitted).

```javascript
function handleEvent(event) {
  console.log('You shall not pass!')
  event.preventDefault()
}

const button = document.querySelector("button")
button.addEventListener('click', handleEvent)
```

See this example in [action](https://jsfiddle.net/wxcmd387/11/).

---


# Bubbling

When an event happens on an element, it first runs any handlers attached to it, then on its parent, then up to the root.

In each step, the handler can know the current target ([event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) or *this*) and also the initial target ([event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)).

.small[

Example where we add some events on all elements and print **this** and **event.target** [tag names](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName):

```html
<section> <article> <p>Text</p> </article> </section>
```

```javascript
document.querySelector('section').addEventListener('click', function(event){
  console.log('Bubble: ' + this.tagName + " - " + event.target.tagName)})
document.querySelector('article').addEventListener('click', function(event){
  console.log('Bubble: ' + this.tagName + " - " + event.target.tagName)})
document.querySelector('p').addEventListener('click', function(event){
  console.log('Bubble: ' + this.tagName + " - " + event.target.tagName)})
```
]

.small[
Clicking on the paragraph:
```html
Bubble: P - P
Bubble: ARTICLE - P
Bubble: SECTION - P
```
]

To stop bubbling, we can use the [event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) method.

---

# Capturing

Event processing has [two phases](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture):

  * Capturing: goes down to the element.
  * Bubbling: the event bubbles up from the element.

Although rarely used, the **useCapture** parameter of the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method allows us to set the event handler on the capturing phase.

Adding capture events to the previous example:

.small[
```javascript
document.querySelector('section').addEventListener('click', function(event){
  console.log('Capture: ' + this.tagName + " - " + event.target.tagName)}, true)
document.querySelector('article').addEventListener('click', function(event){
  console.log('Capture: ' + this.tagName + " - " + event.target.tagName)}, true)
document.querySelector('p').addEventListener('click', function(event){
  console.log('Capture: ' + this.tagName + " - " + event.target.tagName)}, true)
```

```html
Capture: SECTION - P
Capture: ARTICLE - P
Capture: P - P
Bubble: P - P
Bubble: ARTICLE - P
Bubble: SECTION - P
```
]

---

# On Load Event

Besides placing the [&lt;script&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) at the end of the HTML code, another common way of waiting for the DOM to be completely loaded before adding events to any elements is to add any initialization code to the *load* event of the *window* element:

```javascript
window.addEventListener('load', function() {
  // initialization code goes here.
})
```

This is no longer needed as we can now use the [defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) attribute.

---

name:ajax
template: inverse
# AJAX

---

# AJAX

* Asynchronous JavaScript + XML (JSON is more common now).
* Not a technology in itself, but a term coined in 2005 by **Jesse James Garrett** that describes an
  approach to using several existing technologies: namely the **XMLHttpRequest** object.

![](assets/javascript-dom/ajax.svg)

---

# XMLHttpRequest

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) makes sending HTTP requests from JavaScript very easy.

```javascript
void open(method, url, async)
```

  * method: **get** or **post** <small>(or others to be seen later)</small>.
  * url: The URL to fetch.
  * async: if false, execution will stop while waiting for response.<br><small>Default is true.</small>

Example:

```javascript
function requestListener () {
  console.log(this.responseText)
}

const request = new XMLHttpRequest()
request.addEventListener('load', requestListener)
// or request.onload = requestListener
request.open("get", "getdata.php", true)
request.send()
```

---

# Monitoring Progress

Different events let us monitor progress of the request:

.small[
```javascript
const request = new XMLHttpRequest()

request.addEventListener("progress", updateProgress)
request.addEventListener("load", transferComplete)
request.addEventListener("error", transferFailed)
request.addEventListener("abort", transferCanceled)

request.open("get", "getdata.php", true)
request.send()

function updateProgress (event) {
  if (event.lengthComputable)
    const percentComplete = event.loaded / event.total
}

function transferComplete(event) {
  console.log("The transfer is complete.")
}

function transferFailed(event) {
  console.log("An error occurred while transferring the file.")
}

function transferCanceled(event) {
  console.log("The transfer has been canceled by the user.")
}
```
]

---

# Sending data

To send data to the server, we first must encode it properly:<br><small>We are simplifying, there are [other ways](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#using_nothing_but_xmlhttprequest) of doing this.</small>

```javascript
function encodeForAjax(data) {
  return Object.keys(data).map(function(k){
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
}
```

Sending it using **get**:

```javascript
request.open("get", 
  "getdata.php?" + encodeForAjax({id: 1, name: 'John'}), true)
request.send()
```

Sending it using **post**:

```javascript
request.open("post", "getdata.php", true)
request.setRequestHeader('Content-Type', 
  'application/x-www-form-urlencoded')
request.send(encodeForAjax({id: 1, name: 'John'}))
```

---

# Analyzing the Response

If the server responds in **XML** format, the [responseXML](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML) property will be a DOM Object containing a parsed XML document, which can be hard to manipulate and analyze.

If the server responds in **JSON**, it is straightforward to parse the [responseText](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText) property:

```javascript
const request = new XMLHttpRequest()
request.addEventListener("load", transferComplete)
request.open("get", "getdata.php", true)
request.send()

function transferComplete() {
  const response = JSON.parse(this.responseText)
}
```

---

# AJAX with Promises

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a more modern interface for fetching remote resources:

* The global [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) can be used to fetch a remote resource.
* It returns a *Promise* that will eventually be **fulfilled** as a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).
* It will only get **rejected** if there was a network or permission error (*i.e.*, any response from the server is fulfilled).

```javascript
async function getData() {
    return fetch('https://example.com/')
}

getData().then(response => {
  console.log(response)
}).catch(() => {
  console.error('Network Error')
})
```

---

# Response

Because only failed requests get rejected, the response must be checked:

* [ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) &ndash; Boolean indicating if the response was successful (*i.e.*, the status is in the 200&ndash;299 interval).
* [status](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) &ndash; The status code of the response (*e.g.*, 200, 404).
* [redirected](https://developer.mozilla.org/en-US/docs/Web/API/Response/redirected) &ndash; Indicates if the request was redirected to another URL.
* [url](https://developer.mozilla.org/en-US/docs/Web/API/Response/url) &ndash; Final URL after redirects.
* [body](https://developer.mozilla.org/en-US/docs/Web/API/Response/body) &ndash; The body of the response (*i.e.*, the data).

```javascript
getData().then(response => {
  if (response.ok)
    console.log(response.body)
  else
    console.error(`Error: code ${request.status}`)
}).catch(() => {
  console.error('Network Error')
})
```

---

# JSON Response

To parse a JSON [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) we use the [json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method that also returns a promise:

```javascript
getData()
  .catch(() => console.error('Network Error'))
  .then(response => response.json())
  .catch(() => console.error('Error parsing JSON'))
  .then(json => console.log(json))
```

If the [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) is text, then we use the [text()](https://developer.mozilla.org/en-US/docs/Web/API/Response/text) method that also returns a promise:

```javascript
getData()
  .catch(() => console.error('Network Error'))
  .then(response => response.text())
  .then(text => console.log(text))
```

---

# Using Await

This can all be simplified by using the async/await mechanism:

```javascript
async function getJsonData() {
  const response = await getData()
  const content = await response.json()
}
```

Or for text:

```javascript
async function getTextData() {
  const response = await getData()
  const content = await response.text()
}
```

---

# Request

For more complicated requests, the [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method can receive an object with extra parameters:

```javascript
async function postData(data) {
  return fetch('https://example.com/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeForAjax(data)
  })
}

postData({id: 100, name: 'John'})
  .catch(() => console.error('Network Error'))
  .then(response => response.json())
  .catch(() => console.error('Error parsing JSON'))
  .then(json => console.log(json))
```

More on this will be discussed when we study the **HTTP** protocol in depth.

---

name:timers
template: inverse
#Timers

---

# Set Timeout

The [window.setTimeout(funtion, delay)](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) fuction sets a timer which executes a function once after a certain delay:

```javascript
const id = window.setTimeout(function() {
  console.log('5 seconds later!')
}, 5000)
```

The return value is an *id* that can be used to cancel the timer:

```javascript
window.clearTimeout(id)
```

---

# Set Interval

The [window.setInterval(function, interval)](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) is similar but executes the function until it is stopped with a fixed time delay between calls.

```javascript
let counter = 1
const id = window.setInterval(function() {
  console.log(`${counter++}s later!`)
}, 1000)
```

The return value is an *id* that can be used to cancel the timer:

```javascript
window.clearInterval(id)
```

---

name: advanced
template: inverse
# Advanced DOM

---

# Closures and Events

Let's start by thinking if this code should work...

```JavaScript
const paragraphs = document.querySelectorAll('p')
for (let i = 0; i < paragraphs.length; i++)
  paragraphs[i].addEventListener('click', function() {
      console.log('I am paragraph #' + i)
  })
```

--

When we click a paragraph, what will be the value of the *i* variable? Let's [test it](https://jsfiddle.net/205byurL/1/).

--

The only reason why this code works as intended is that each time an event handler is added, a new function is created with a **different closure** (and a different *i* variable in that closure with a **different value**).

> "When a function is created, it **retains** the lexical environment in which it was **created**."<br>&mdash; [Closures](?s=javascript#closures), JavaScript Slides.

---

# Bind and Events

Sometimes we **lose** our *this*:

```javascript
class Foo {
  setup() {
    document.querySelector('h1').addEventListener('click', this.bar)
  }

  bar(event) {
    // we want to get the Foo object, but:
    console.log(this)         // the h1 element
    console.log(event.target) // the h1 element
  }
}

new Foo().setup()
```

We can **fix** it using *bind*:

```javascript
setup() {
  document.querySelector('h1')
    .addEventListener('click', this.bar.bind(this))
}
```

---

# Partial Functions

We might want to call a function with parameters that depend on the element:

.small[
```javascript
document.querySelector('p.blue').addEventListener('click', changeColor('blue'))
document.querySelector('p.red').addEventListener('click', changeColor('red'))

function changeColor(color) {
  this.style.color = color
}
```
]

But it obviously doesn't work. 

A solution would be to create **anonymous functions**:

.small[
```javascript
document.querySelector('p.blue').addEventListener('click', function(event) {
  changeColor('blue', event)}
)
document.querySelector('p.red').addEventListener('click', function(event) {
  changeColor('red', event)}
)

function changeColor(color, event) {
  event.target.style.color = color
}
```
]

---

# Partial Functions

Another, more elegant solution, would be to create **partial functions** using *bind*:

```javascript
const blue = document.querySelector('p.blue')
blue.addEventListener('click', changeColor.bind(blue, 'blue'))

const red = document.querySelector('p.red')
red.addEventListener('click', changeColor.bind(red, 'red'))

function changeColor(color) {
  this.style.color = color
}
```

---

# Mapping Selectors

We already saw how we could use the [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function with *non-array* iterables (like a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)).

One way we can use this feature:

```javascript
const inputs = document.querySelectorAll('input[type=number]')
const values = [].map.call(inputs, input => input.value)
console.log(values) // an array with all the number input values
```

See this example in [action](https://jsfiddle.net/8sLhp915/3/).

---

# Selectors to Arrays

Other times we just want to **convert** a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) to an **array**, so we can use functions like [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter):

```javascript
const paragraphs = document.querySelectorAll('p')
```

There are several ways to achieve this:

```javascript
const array1 = Array.apply(null, paragraphs)
const array2 = Array.prototype.slice.call(paragraphs)
const array3 = [].slice.call(paragraphs)
const array4 = [...paragraphs]
```

---

# HTML5 Data Attributes

<small>This is not really JavaScript!</small>

HTML5 data-* attributes allow us to store extra information on standard, semantic HTML elements without using hacks.

This can be useful, for example, to store the id of a certain database tuple to be used in an Ajax call.

```html
  <ul>
    <li data-id="1">Apple</li>
    <li data-id="2">Banana</li>
    <li data-id="3">Pear</li>
  </ul>
```
