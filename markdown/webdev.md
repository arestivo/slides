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
# Web Development
## Beyond the Basics
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [MPA vs. SPA](#models)
1. [Web APIs](#apis)
1. [Web Frameworks](#frameworks)
]

---

template: inverse
name: models
# MPA vs. SPA

---

# Multiple Page Application: <small>Classic Web</small>

<img src="assets/webdev/classic.svg" style="float: right" width="50%">

* Each interaction renders a **different page**; a different HTTP request. 
* The HTML can mention other **resources** prompting more HTTP requests (*e.g.*, images, CSS, scripts).
* Actions change the server state and **tell the browser** where to go next.
* **Not easy** to **reuse the backend** for different purposes (*e.g.*, as an API).
* **Easy** to understand but can be **slow**; pages are heavy and contain **repeated code**.

---

# Enter AJAX: <small>The Hybrid Model</small>

<img src="assets/webdev/ajax.svg" style="float: right" width="50%">

* Pages can request **more information** from the server.
* Some interactions **do not reload** the entire page (*e.g.*, login and logout, load more items).
* API calls can return **different types** of data:
  * JSON / XML with **client-side** rendering.
  * HTML with **server-side** rendering.
* Faster, as we do not need to transfer so much data, but might require **duplicated rendering code** (client/server).

---

# The Single Page Application (SPA)

<img src="assets/webdev/spa.svg" style="float: right" width="50%">

* The **first interaction** returns an HTML page, and the application **never leaves** that page during its **entire lifecycle**.
* All the remaining interactions are the result of AJAX calls to **fetch more data** and **client-side rendering**.
* Users **do not need to wait** for interactions to finish before performing the next.
* Slower first load, **fast** afterward; feels like a **desktop application**.
* But...

---

# Do Not Break the Web

Users have some **expectations** regarding how web pages work:

* The **back button** will take them to the previous page.
* **Copying/Bookmarking/Sending** the current URL allows them to **resume** their session later, **save** a specific page location, or **send** someone a link to a particular web page.

Break these, and **users won't be happy**!

---

# Fragment

Using the **URL fragment** to store the **current state**:

<img src="assets/webdev/hashes.svg" width="80%">

---

# Fragment Example

Using the **URL fragment** and **regular expressions** to call functions that **load the current state**:

```javascript
function parse_fragment() {
  const hash = window.location.hash

  if (hash) {
    const category = /#category\/(\d+)/.exec(hash)
    if (category) return load_category(category[1])

    const article = /#article\/(\d+)/.exec(hash)
    if (article) return load_article(article[1])

  } 

  load_articles()    
}
```

---

# SPA vs. MPA

Single Page Applications (SPA) have several advantages:

* **Speed**: Most pages load faster.
* **Network**: Less network intensive.
* **Decoupling**: The backend and Frontend are decoupled.
* **UX**: Better user experience.

But Multiple Page Applications (MPA) also have some strong points:

* **SEO**: Easier search engine optimization.
* **First Load**: The speed of the first load is usually better.
* **JavaScript Dependency**: Works without JS.
* **Navigation**: Simpler and standard navigation (*e.g.*, link, back button).

---

# CSR vs. SSR

A second dichotomy is **where to render** the **HTML** code:

* Client-side Rendering (**CSR**): The browser receives data in a different format (*e.g.*, JSON or XML) and renders that data as HTML.
* Server-side Rendering (**SSR**): The server already sends data as HTML.

<img src="assets/webdev/csrssr.svg" width="30%">

We can use the **HTTP Accept header** to allow a single server-side script to work both ways.

---

# Progressive Web Apps (PWA)

[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps): Apps that have the [capabilities](https://whatwebcando.today/) of **native** apps with the **reach** of **web** apps:

* **Installable**: Just like native apps.
* **Cached Content**: Using web workers and local storage.
* **Web APIs**: Uses web APIs to do more.
* **Responsive**: Works on several devices.

Progressive comes from **progressive enhancement**, starting with a basic level of user experience and using more advanced functionality that will automatically be available to browsers that can use it.

As opposed to **graceful degradation**: starting with all bells and whistles, and degrading to a lower level of user experience on older browsers.

---

template: inverse
name: apis
# Web APIs

---

# Web APIs

Modern browsers can take advantage of several [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

These allow the creation of **web apps** with capabilities similar to **native apps** (PWAs).

---

# Web Workers

Web Workers make it possible to run a script in a **background thread**:

* **Dedicated Workers**: When used by a single script.
* [**Shared Workers**](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker): Can be used by multiple scripts, possibly running on different windows, and communicating using an active port.
* [**Service Workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API): Act as a proxy that sits between web applications and the network.

Web workers **can't** directly **manipulate the DOM**.

---

# Service Workers

* Intercepts resource requests acting as a **network proxy**.
* Typically used to cache resources and provide an **offline experience**.
* An **enhancement** to existing websites. **No** baseline **functionality is broken** if the browser does not support them.
* After a service worker is installed and activated, it controls the page to offer **improved reliability** and **speed**.

```javascript
navigator.serviceWorker.register("/serviceworker.js");
```

On the service worker:

```javascript
self.addEventListener("install", event => {
   console.log("Service worker installed");
})
self.addEventListener("activate", event => {
   console.log("Service worker activated");
})
```

---

# Cache 

To manage the cache, **service workers** interact with the Cache Storage API.

The [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) is a storage mechanism for Request / Response pairs cached in long-lived memory.

```javascript
const urls = ["/", "style.css", "script.js"]
// self is a service worker
self.addEventListener("install", event => { 
  event.waitUntil(
    // assets is the name of the cache
    caches.open("assets").then(cache =>
        cache.addAll(urlsToCache)
    )
  )
})
```

---

# Web Storage

Allows browsers to store **key/value pairs** much more intuitively than with cookies.

* sessionStorage: separate storage for each origin.
* localStorage: the same but persists browser restarts.

```javascript
localStorage.setItem('color', 'blue')
const color = localStorage.getItem('color') // blue
```

---

# IndexedDB

A low-level API for **client-side** storage of **significant amounts** of structured data:

* **Object store** paradigm: data as objects.
* **Primary Keys** and **Indexes**.
* **CRUD** operations: create, read, update, and delete.
* **Versioning**: dealing with different database versions.

---

# Other APIs

* [Contact Picker](https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API): access to contact lists.
* [Image Capture](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API): taking pictures.
* [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API): drawing pictures in canvas elements.
* [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API): read and write from the system clipboard.
* [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API): get the current location.
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API): open two-way communication channels with a server.
* [History](https://developer.mozilla.org/en-US/docs/Web/API/History_API): change the browser history.
* [Many More](https://developer.mozilla.org/en-US/docs/Web/API).
---

template: inverse
name: frameworks
# Frameworks

---

# Frameworks

Until now, we have been dealing with **low-level(-ish)** web development. 

But most **modern web development** is done with the support of several **frameworks**.

---

# Full-stack Frameworks

A framework that supports development of front-end user interfaces, back-end logic, and database communication:

* [Laravel](https://laravel.com/) (PHP).
* [Django](https://www.djangoproject.com/) (Python).
* [CakePHP](https://cakephp.org/) (PHP).
* [Meteor](https://www.meteor.com/) (JavaScript / NodeJS).

Typically, they include several services:

* **Authentication** and permission management. 
* **Routing**: Mapping URLs to resources.
* **Object Relational Mapping** (ORM): Almost no need to write SQL.
* **Templating**: Easy HTML rendering.

They can also be used to create just the backend.

---

# Client-side Frameworks

Several reactive client-side frameworks that can be easily coupled with an API:

* [React](https://reactjs.org/).
* [Vue](https://vuejs.org/).
* [Angular](https://angular.io/).
* [Svelte](https://svelte.dev/).

Svelte example:

```html
<script>
	let count = 0

	function handleClick() {
		count += 1
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

---

# CSS Frameworks

CSS is complicated; CSS frameworks can be a **good start** for a great design:

* [Bootstrap](https://getbootstrap.com/).
* [Foundation](https://get.foundation/).

More **semantically** (*[class-less](https://dohliam.github.io/dropin-minimal-css/)*) friendly ones:

* [Pico CSS](https://picocss.com/).
* [Milligram](https://milligram.io/).