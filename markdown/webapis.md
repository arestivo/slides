name: inverse
layout: true
class: center, middle, inverse
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) [<i class="fa fa-tint"></i>](../change-color.php)[<i class="fa fa-file-pdf-o"></i>](download)]

---

name: normal
layout: true
class: left, middle
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) [<i class="fa fa-tint"></i>](../change-color.php)[<i class="fa fa-file-pdf-o"></i>](download)]

---

template:inverse
# HTML 5 APIs
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Promises](#promises)
1. [Permissions](#permissions)
1. [Clipboard](#clipboard)
1. [Geo Location](#geo-location)
1. [Web Storage](#web-storage)
1. [Web Sockets](#web-sockets)
]

---

template: inverse
name:intro
# Introduction

---

# HTML5 Web APIs

In addition to describing HTML5 elements, the HTML 5 specification also introduces a set of *application programming interfaces* (APIs), that can be used by developers in their websites.

Most of these APIs are still under **heavy development**. Some have been discontinued, might be discontinued in the future, or heavily changed or never even see the light of day.

[MDN List of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

But first we must talk about *Promises*...

---

template: inverse
name: clipboard
# Promises

---

# Promises

A *promise* represents the eventual result of an asynchronous operation. 

A *promise* may be in one of 3 possible states: **fulfilled**, **rejected**, or **pending**.

A promise can be used to return asynchronously from an synchronous function. This can save us from [Callback Hell](http://callbackhell.com/).

```javascript
let promise = new Promise(function(resolve, reject) {
  /* Very long operation */
  if (ok)
    resolve(result)
  else
    reject(error)
})
```

---

# Consuming

When the promise *resolves*, or is *rejected*, we can use *then* and *catch* to consume it:

```javascript
promise.then(function(result){
  alert('Ok')
}).catch(function(error)){
  alert('Error')
}
```

---

# Example

Transforming a **synchronous** *XMLHttpRequest* into a promise:

```javascript
function getSomeData() {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest()
    request.open("get", "getdata.php", false) // synchronous
    request.send()
    if (request.status === 200) resolve(request.response)
    else reject(request.statusText)
  })
}
```

```javascript
getSomeData().then(alert).catch(alert)
```

---

# Chaining

Promises can be chained, making successive calls to asynchronous functions much easier:

```javascript
getSomeData()
  .then(function(result){
    return getMoreDataBasedOn(result) // also returns a promise
  })
  .then(function(result){
    return getEvenMoreDataBasedOn(result)
  })
  .then(function(result){
    alert(result)
  })
  .catch(alert) // catches any error in the chain
```

---

# Async Functions

An **async** function is a function which operates asynchronously, using an **implicit** Promise to return its result.

An **async** function always returns a promise. If the code returns a *non-promise*, then JavaScript automatically wraps it into a resolved promise with that value.

```javascript
async function getSomeData() {
  let request = new XMLHttpRequest()
  request.open("get", "getdata.php", false) // synchronous
  request.send()
  if (request.status === 200) 
    return request.response
  else
    throw(new Error('Error getting data'))
}
```

---

# Await

The keyword *await* makes JavaScript wait until a promise settles and returns its result.

```javascript
async function doSomething() {
  let result = await getSomeData() // returns a promise
  console.log(result)
}
```

The keyword *await* can only be used inside *async* functions.

---

# Promise.all

The *Promise.all(&lt;promises&gt;)* method returns a single Promise that resolves when all of the promises in the argument have resolved. It rejects with the reason of the first promise that rejects.

```javascript
async function doSomething() {
  let promise1 = getSomeData()
  let promise2 = getEvenMoreData()
  Promise.all([promise1, promise2]).then(function(results) {
    console.log(values)
  })
}
```

The result is an array with the results of each one of the promises

---

template: inverse
name: clipboard
# Permissions

---

template: inverse
name: clipboard
# Clipboard

---

# Clipboard API

The Clipboard API allows developers to:

* **Read** data from the clipboard
* **Change** the clipboard data
* **Detect** when the clipboard data changed
* **Intercept** clipboard actions and modify them

[W3 Specification](https://www.w3.org/TR/clipboard-apis/) | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

# Examples

Reading from the clipboard:

```javascript
navigator.clipboard.readText().then(
  function (copiedText) {
    /* ... */
  }
)
```

Writing to the clipboard:

```javascript
navigator.clipboard.writeText(someValue)
```

Intercepting and changing copy events:

```javascript
document.addEventListener('copy', (e) => {
  e.preventDefault();
  e.clipboardData.setData('text/plain', 'Something else!')
})
```
