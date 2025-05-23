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
# Web Security
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Path Traversal](#path)
1. [SQL Injection](#sql)
1. [Cross-site Scripting](#xss)
1. [Cross-site Request Forgery](#csrf)
1. [Man-in-the-Middle](#maninthemiddle)
1. [Credential Storage](#credential)
1. [Passwords](#passwordright)
]

---

name:intro
template:inverse

# Introduction

---

# Attacks and Vulnerabilities

* A **vulnerability** is a **flaw** or **weakness** in an application &mdash; whether in its design or implementation &mdash; that **can be exploited** by an attacker to compromise the security or functionality of the system, potentially causing harm to its stakeholders.

* An **attack** is a **technique** or **method** used by an attacker to **exploit** a vulnerability in order to gain unauthorized access, disrupt operations, or otherwise compromise the system.

Reference: [Open Web Application Security Project](https://www.owasp.org/)

---

# OWASP Top 10 (2013)

* Injection
* Broken Authentication and Session Management
* Cross-Site Scripting (XSS)
* Insecure Direct Object References
* Security Misconfiguration
* Sensitive Data Exposure
* Missing Function Level Access Control
* Cross-Site Request Forgery (CSRF)
* Using Components with Known Vulnerabilities
* Unvalidated Redirects and Forwards

[OWASP Top 10 - 2013](https://owasp.org/www-pdf-archive/OWASP_Top_10_-_2013.pdf)

---

# OWASP Top 10 (2017)

* Injection
* Broken Authentication
* Sensitive Data Exposure
* XML External Entities
* Broken Access Control
* Security Misconfiguration
* Cross-Site Scripting (XSS)
* Insecure Deserialization
* Using Components with Known Vulnerabilities
* Insufficient Logging & Monitoring

[OWASP Top 10 - 2017](https://owasp.org/www-project-top-ten/2017/)

---

# OWASP Top 10 (2021)

* Broken Access Control <br><small>including **CSRF**</small>
* Cryptographic Failures <br><small>including **no HTTPS**</small>
* Injection <br><small>including **SQL Injection** and **XSS**</small>
* Insecure Design
* Security Misconfiguration
* Vulnerable and Outdated Components
* Identification and Authentication Failures <br><small>including bad **password management**</small>
* Software and Data Integrity Failures
* Security Logging and Monitoring Failures
* Server-Side Request Forgery (SSRF)

[OWASP Top 10 - 2021](https://owasp.org/Top10/)

---

# Security Impact

* Financial losses
* Theft of intellectual property
* Damage to brand reputation
* Fraudulent activities
* Legal liability and regulatory exposure
* Extortion and ransom demands

---

template: inverse
name: path
# Path Traversal Attack

---

# Path Traversal Attack

An attacker exploits **file path manipulation** &mdash; typically using the <code>..</code> (parent directory) and <code>/</code> (directory separator) symbols &mdash; to **gain access** to files and directories outside the intended scope.


```http
http://www.foo.com/../../database.db
```

Normally, web servers are well protected against serving files **outside** the designated **root** directory, but the application itself can also be targeted:

```http
http://www.foo.com/page.php?page=../../database.db
```

```http
http://www.foo.com/viewimage.php?path=viewimage.php
```

Such attacks can expose sensitive files such as **configuration files**, **source code**, or **credentials** if proper input validation is not enforced.

---

# Preventing

A common example is attempting to access version control metadata such as the .git directory:

```http
http://www.foo.com/.git/config
```

To prevent this, ensure that the web server is configured to serve **only the necessary files and directories**. Sensitive files and folders &mdash; such as <code>.git</code>, configuration files, environment variables (<code>.env</code>), sqlite database, and other sensitive files &mdash; should never be exposed over HTTP.

If you are using PHP, **serve only a specific public folder** (*e.g.*, <code>/public</code>) that contains the pages, action handlers, and API entry points. All other application files &mdash; including logic, configuration, and version control &mdash; should reside outside the web root and be inaccessible via HTTP.

---

# Preventing

A common vulnerable pattern is including **user-controlled** input directly in file paths:

```http
http://www.foo.com/index.php?page=news
```

Vulnerable code:

```php
  include('header.php');
  include($_GET['page']);
  include('footer.php');
```

Secure alternative using a fixed allowlist:

```php
  include('header.php');
  if ($page == 'news') include('news.php');
  if ($page == 'login') include('login.php');
  include('footer.php');
```

---

template: inverse
name: sql
# SQL Injection

---

# SQL Injection

SQL Injection is the **manipulation** of SQL queries through **input data** sent from the client to the application.

SQL injection **attacks** can allow an attacker to:

* Spoof **identities** (e.g., impersonate other users).
* Tamper with existing **data** (insert, update, or delete records).
* Extract sensitive **information** (full disclosure of database contents).
* Gain **administrative** access to the database server.
* Execute arbitrary **commands**, in some cases, depending on database configuration.

---

# Disclosure of data

```php
// $username has the name of the logged in user
$dbh->query("SELECT * FROM items 
             WHERE owner = '" . $username . "'");
```

Create an account with username: <span class="inline-code">johndoe' OR 1 = 1--</span>

```sql
SELECT * FROM items WHERE owner = 'johndoe' OR 1 = 1--'
```

---

# Spoof identity

```php
// verifies if username and password are correct
$dbh->query("SELECT * FROM users WHERE " .
      "username = '" . $username . "' " . 
      "AND password ='" . $password . "'");
```

Use these credentials to login: 

<span class="inline-code">username: "johndoe" and password: "' OR 1 = 1; --"</span>

```sql
SELECT * users 
WHERE username = 'johndoe' 
AND password = '' OR 1 = 1; --'
```

---

# Gain privileges

```php
// searches for specific item
$dbh->query("SELECT * FROM items WHERE title = '" . $title . "'");
```

Navigate to URL:

```http
http://foo.com/search.php?title='; INSERT INTO users VALUES
('johndoe', 'password', true); --
```

Third parameter has admin status of user:

```sql
SELECT * FROM items WHERE title = ''; INSERT INTO users VALUES
('johndoe', 'password', true); --'
```

---

# Preventing

To prevent SQL injection, consider the following best practices:

* Use **Prepared Statements** (Parameterized Queries): This ensures that user input is treated as data, not executable code.
* Escape all user-supplied input: While parameterized queries are **preferred**, escaping input can be an **additional layer** of defense.

```php
$stmt = $dbh->prepare('SELECT * FROM items WHERE title = ?');
$stmt->execute(array($title));
$items = $stmt->fetchAll();
```

[SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

---

template: inverse
name: xss
# Cross-site Scripting (XSS)

---

# Cross-site Scripting (XSS)

Cross-Site Scripting (XSS) attacks are a type of **injection**, in which **malicious scripts** are injected into otherwise benign and trusted websites.

---

# Types

There are several types of XSS attacks:

* **Stored** XSS: The malicious script is stored on the server (e.g., in a database) and is served to users when they access the compromised page.
* **Reflected** XSS: The malicious script is reflected off a web server, typically via user input in URLs, form submissions, or query strings.
* **DOM-based** XSS: The vulnerability is in the client-side code, where the DOM (Document Object Model) is manipulated by malicious input.

---

# XSS : Stored

```php
<?php
 $stmt = $dbh->prepare("INSERT INTO comment 
                        VALUES (DEFAULT, ?, ?, ?)");
 $stmt->execute(array($_POST['postid'], $_POST['text'], 
                      $_SESSION['username']));
?>
```

```php
<?php
 $stmt = $dbh->prepare("SELECT * FROM comment WHERE postid = ?");
 $stmt->execute(array($_POST['postid']));
 $comments = $stmt->fetchAll();
?>

<?php foreach($comments as $comment) {?>
  <div class="comment"><?=$comment['text']?></div>
<?php } ?>
```

Comments can contain malicious code that is stored and shown to all users:

```http
comment.php?postid=10&text=<script>alert("hacked")</script>
```

---

# XSS : Reflected

Reflected XSS occurs when malicious scripts are **reflected off the web server**, typically via user input in URLs, form submissions, or query strings. The script is executed **immediately** after being included in the server's response, affecting **users who click the link**.

```php
<?php
echo "You searched for: " . $_GET["query"];
// List search results
?> 
```

In this code, the user’s search query is directly echoed into the response without any sanitization or escaping.


```http
http://foo.com/search.php?query=<script>alert("hacked")</script>
```

---

# XSS : DOM-based

DOM-based XSS occurs when a vulnerability in the client-side code allows malicious input to be executed in the browser. The attack is typically triggered by manipulating the Document Object Model (DOM), where user input is inserted directly into the page without proper sanitization or escaping.

```javascript
  const query = new URLSearchParams(window.location.search).get('q')
  document.getElementById('searchResult').innerHTML = query
```

In this code, the user’s search query is directly echoed into the response without any sanitization or escaping.


```http
http://foo.com/search.php?query=<script>alert("hacked")</script>
```

---

# Preventing

Never put untrusted data:

* directly in a **script**
* inside an **HTML comment**
* in an **attribute name**
* in a **tag name**
* directly in **CSS**
* inside **non-safe attribute** values

---

# Preventing

**Validation** ensures that user input matches an expected pattern, rejecting any unexpected characters or formats.

```php
if ( !preg_match ("/^[a-zA-Z\s]+$/", $_GET['name'])) {
  // ERROR: Name can only contain letters and spaces
}
```

**Filtering** removes unwanted characters, sanitizing the input before processing it.

```php
$name = preg_replace ("/[^a-zA-Z\s]/", '', $_GET['name']);
```

---

# Preventing

When **displaying** untrusted data on the web page, always **encode** it to prevent malicious scripts from being executed using functions like [htmlspecialchars()](http://php.net/manual/en/function.htmlspecialchars.php) or [htmlentities()](http://php.net/manual/en/function.htmlentities.php):

```php
<?=htmlentities($post['text'])?>     // encodes all characters
<?=htmlspecialchars($post['text'])?> // encodes only special chars
```

So that this:

```html
<script>alert("hacked")</script>
```

Becomes this:

```html
&#x3C;script&#x3E;alert(&#x22;hacked&#x22;)&#x3C;/script&#x3E;
```

---

# Preventing

When using untrusted data to **create URLs**, always **encode** the data to prevent malicious content from being executed using [urlencode()](http://php.net/manual/en/function.urlencode.php):

```php
<a href="search.php?q=<?=urlencode($_GET['q'])?>">
```

So that this:

```http
search.php?q=<script>alert("hacked")</script>
```

Becomes this:

```http
search.php?q%3D%3Cscript%3Ealert(%22hacked%22)%3C%2Fscript%3E
```

---

# Preventing : Advanced Techniques


Context-aware Encoding:

 * When writing untrusted data in various **locations** (attributes, tag names, comments, etc.), use context-aware encoders like [PHP-ESAPI](https://github.com/OWASP/PHP-ESAPI).

Allowing HTML?:

 * [strip_tags()](https://www.php.net/manual/en/function.strip-tags.php) **isn't enough**. 
 * Use libraries like [HTML Purifier](http://htmlpurifier.org/) to properly **filter** and **sanitize** user-generated HTML.
 * HTML Purifier ensures only safe HTML is allowed, removing malicious tags or attributes while keeping valid content.

---

# Preventing in Javascript

HTML Escape Before Inserting Untrusted Data into HTML Element Content

```javascript
const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}
```

Not enough in all locations; use **context-aware encoders**. For example [OWASP ESAPI for Javascript](https://github.com/ESAPI/owasp-esapi-js).

---

# Cookies

* Preventing all XSS flaws is **difficult**, but you can **mitigate the impact** by securing your session cookies.
* Set the [HTTPOnly](https://owasp.org/www-community/HttpOnly) flag on your **session cookie** to **prevent** client-side scripts from **accessing** the cookie. 
* This is a key defense against XSS attacks **targeting session cookies**.

Use [session-set-cookie-params](http://php.net/manual/en/function.session-set-cookie-params.php) before starting your session:

```php
session_set_cookie_params(0, '/', 'www.fe.up.pt', true, true);
```

If the HttpOnly flag is included in the HTTP response header, the cookie **cannot be accessed** through a client-side script.

---

# XSS Mantra

.center[
## "filter input, encode output"
]

Read more:

* [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
* [OWASP DOM Based XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)
* [OWASP XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)
* [A comprehensive tutorial on cross-site scripting](https://excess-xss.com/)

---

template:inverse
name: csrf
# Cross-site Request Forgery (CSRF)

---

# Cross-site Request Forgery (CSRF)

CSRF occurs when an attacker tricks a user into submitting a state-changing request without their knowledge or consent.

**Example**: The application allows state-changing requests that don’t require any secret (e.g., an authentication token).

```http
http://foo.com/transfer.php?amount=1500&destination=4673243
```

**Example**: The attacker constructs a malicious request that performs a state-changing action (e.g., transferring money) and embeds it in a hidden image request:


```html
<img
  src="http://foo.com/transfer.php?amount=1500&destination=4673243"
  width="0" height="0" />
```

If the victim is already authenticated to <code>foo.com</code>, this request will automatically be sent with the victim’s session information, performing the action without the victim’s knowledge.

---

# Things that do NOT WORK

Common techniques like secret cookies, POST-only restrictions, and multi-step transactions **are not sufficient** to prevent CSRF.

* Using a Secret Cookie
* Only Accepting POST Requests
* Multi-Step transactions

These methods **DO NOT WORK**

---

# Preventing

Effective prevention requires using **anti-CSRF tokens** and ensuring proper request validation.

* **Generate** a random token per session
* **Store** this token as a session variable
* **Send** this token as part of every (sensitive) request
* **Verify** the token is correct on every page

[OWASP CSRF](https://owasp.org/www-community/attacks/csrf)

---

# Preventing

```php
function generate_random_token() {
  return bin2hex(openssl_random_pseudo_bytes(32));
}
```

```php
session_start();
if (!isset($_SESSION['csrf'])) {
  $_SESSION['csrf'] = generate_random_token();
}
```

```php
<form action="transfer.php">
  <input type="hidden" name="csrf" value="<?=$_SESSION['csrf'])?>">
</form>
```

```php
session_start();
\\...
if ($_SESSION['csrf'] !== $_POST['csrf']) {
  // ERROR: Request does not appear to be legitimate
}
```

---

template: inverse
name:maninthemiddle
# Man-in-the-middle Attack

---

# Man-in-the-middle Attack

* **Intercept** a communication between two systems.
* Using different techniques, the attacker **splits** the original TCP connection into 2 new connections, one between the client and the attacker and the other between the attacker and the server
* Once the TCP connection is intercepted, the attacker acts as a **proxy**, being able to read, insert and modify the data in the intercepted communication.

.smaller[
  ![](assets/security/maninthemiddle.png)
]

---

# Public-key Cryptography

Also known as **asymmetric** cryptography, is a class of cryptographic algorithms that requires two separate keys, one of which is private and one of which is public.

* If the sender **signs** a message with his private key, any receiver can **verify** that the message was sent by him.
* If a sender **encrypts** a message with a public key, **only** the receiver having the private key can read that message.
* Let's see how this works without going too deep into the [math](https://www.onebigfluke.com/2013/11/public-key-crypto-math-explained.html) behind it.

---

# Public-key Cryptography

.smaller[
  ![](assets/security/publickey.png)
]

---

# Man-in-the-middle (again)

* Using encryption is **not enough** because every encryption method requires an additional exchange or transmission of information over a secure channel (e.g. the public key).

.smaller[
  ![](assets/security/maninthemiddle2.png)
]

* The solution is to use public keys that have been signed by a **certificate authority** (CA).

---

# Digital Signature

* Digital signatures are a scheme that allows the demonstration of a message's **authenticity**.
* For efficiency reasons, **normally only a hash** of the original message is signed.

.smaller[
  ![](assets/security/signature.png)
]

---

# Certificates

* Certificates are small data files that digitally **bind** a **cryptographic key** to an **organization**.
* By signing a certificate, a **Certificate Authority (CA)** states that it **verified** the organization's information.

.smaller[
  ![](assets/security/certificate.png)
]

---

# Certificate Authority

* Web browsers **trust** websites based on CAs that come **pre-installed** (Verisign/Comodo/Microsoft/...).
* The user trusts the CA to **vouch** only for **legitimate websites**.
* The website **provides** a **valid** certificate, which means it was signed by a trusted authority.
* The certificate **correctly identifies** the website.
* The user trusts that the protocol's encryption layer (TLS/SSL) is sufficiently **secure** against eavesdroppers.

---

# Chain of Thrust

* A **certificate chain** is an **ordered list** of certificates, where each one certifies the next until a root certificate is reached.
* This allows browsers to only **pre-install a few** root certificates.

.smaller[
  ![](assets/security/authorities.png)
]

---

# HTTPS

* **H**yper**t**ext **T**ransfer **P**rotocol **S**ecure (HTTPS) is just HTTP on top of the **SSL/TLS** protocol.
* The browser uses the **pre-installed CAs certificates** to verify the authenticity of the **server's public key**.

.smaller[
  ![](assets/security/https.png)
]

.center[
For **efficiency** reasons, public-key cryptography is used to exchange a **symmetric key** that is used for the rest of the session (SSL handshake).
]

---

template: inverse
name: credential
# Credential Storage

---

# Password Transmission

Passwords have to be sent from the browser to the server. But they should **never**:

* Be sent over **HTTP** (only HTTPS) to prevent man-in-the-middle attacks or eavesdropping.
* Be sent using **GET** parameters as they will be displayed in the URL.
* Be encrypted in the browser. <small>Being able to capture the encrypted password would be the same as capturing the plain text password.</small>

---

# Hashing

In the case of a database breach, having passwords stored in **clear text**, allows the attacker to have **instant** access to **all** user passwords.

So passwords should be stored as hashes:

* Hash algorithms are **one-way** functions. They turn any amount of data into a **fixed-length** *fingerprint* that **cannot** be reversed.
* Small changes in the original text produce **completely different hashes**.

---

# Hashing Workflow

* The user **creates** an account by entering a username and password.
* Their password is **hashed** and **stored** in the database.
* When the user attempts to login, the **hash** of the password they entered is **checked** against the **hash** of their real password.
* If the hashes **match**, the user is granted **access**. If not, the user is told they entered invalid login credentials.

```php
$stmt = $db->prepare(INSERT INTO users VALUES (?, ?))';
$stmt->execute(array($username, md5($password)));
```

```php
$stmt = $db->prepare('SELECT * FROM users 
                      WHERE username = ? AND password = ?');

$stmt->execute(array($username, md5($password)));

if ($stmt->fetch() !== false) {
  $_SESSION['username'] = $username;
}  
```

---

# Cracking Hashes

* **Brute Force Attacks** - Try every possible combination of characters up to a given length.
* **Dictionary Attack** - Try every password and variants from a file. These files come from dictionaries and real password databases.
* **Lookup Tables** - Pre-computed tables containing passwords hashes in a password dictionary.
* **Rainbow Tables** - Rainbow tables are a time-memory trade-off technique. Slower but can store more hashes. [Examples](https://freerainbowtables.com/).

---

# Using Salt

* Lookup tables and rainbow tables only work because each password is hashed the **exact same way**.
* We can prevent this by **appending** a string to each password making pre-existing rainbow tables useless.
* This is called adding **salt** to a password. <small>"Everything is better with salt."</small>

---

# Salt Reuse

Using the same salt for every user is **ineffective**:

* Two users with the **same password** will still have the same hash.
* The attacker can generate a **rainbow table** for that specific salt.
* Finding the salt is relatively easy (especially if the salt is short).

---

# Double Hashing

Double hashing passwords, sometimes with different hashing algorithms, can make hashes **less secure**.

---

# Hashing Algorithm

* There are several hashing algorithms available. Some of them are currently considered **weaker** ([MD5](https://www.mscs.dal.ca/~selinger/md5collision/), [SHA1](https://shattered.io/)).
* More secure hashing functions should be used like SHA256, SHA512 or bcrypt (blowfish).

---

# Slow Hash Functions

* High-end graphics cards (GPUs) and custom hardware can compute **billions of hashes per second** making brute force attacks still very effective.
* The goal is to make the hash function **slow enough** to impede attacks, but still **fast enough** to not cause a noticeable delay for the user.
* Key stretching is implemented using a special type of **CPU-intensive** hash function (e.g. **bcrypt**).
* These algorithms take a **security factor** or iteration count as an argument. This value determines how slow the hash function will be.

---

# Secret Key

* By adding a **secret fixed key** to all passwords, we prevent an attacker that only gained access to the database, to even try to crack the passwords.
* This key has to be **kept secret** from an attacker even in the event of a breach.
* The key must be stored in an **external system**, such as a physically separate server dedicated to password validation.
* One can even use special **dedicated hardware** to store this secret key.

---

template:inverse
name: passwordright
# Passwords Done Right

---

# Salt

* Salt should be generated using a Cryptographically Secure Pseudo-Random Number Generator (**CSPRNG**).
* The salt needs to be **unique** per user.
* The salt needs to be **long**.

---

# Generating

* Prepend the **salt** to the **password** and **hash** it with a standard cryptographic hash function such as **bcrypt**.
* Save both the salt and the hash in the **user's database record**.

---

# Validating

* Retrieve the user's **salt** and **hash** from the database.
* Prepend the **salt** to the given **password** and **hash** it using the same hash function.
* Compare the **hash** of the given password with the **hash** from the database.

Read more: [Hashing Security](https://crackstation.net/hashing-security.htm)

---

# Passwords in PHP

The recommended method to hash and validate passwords in PHP is by using the [password-hash](http://php.net/manual/en/function.password-hash.php) and [password-verify](http://php.net/manual/en/function.password-verify.php) functions.

```php
string password_hash (string $pwd , integer $algo [, array $opts])
```

```php
boolean password_verify ( string $pwd , string $hash )
```

* These functions generate their own salt.
* The **hash** function returns the used algorithm, cost and salt as part of the hash. Therefore, all information that's needed to verify the hash is included in it.
* This allows the **verify** function to verify the hash without needing separate storage for the salt or algorithm.

.smaller[
![](assets/security/password_hash.svg)
]

---

# PHP Example

```php
<?php
  $options = ['cost' => 12];
  $stmt = $db->prepare(INSERT INTO users VALUES (?, ?))';
  $stmt->execute(array(
    $username,
    password_hash($password, PASSWORD_DEFAULT, $options))
  );
```

```php
<?php
  $stmt = $db->prepare('SELECT * FROM users WHERE username = ?');
  $stmt->execute(array($username));
  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password'])) {
    $_SESSION['username'] = $username;
  }  
```

The current default algorithm is **bcrypt**.

---

# More on Passwords

* Make sure your usernames/userids are case **insensitive** (even emails).
* Implement proper **password strength** controls.
* Do **not** apply short or no length, character set, or encoding restrictions on the entry or storage of credentials.
* Design password storage **assuming** eventual compromise.

[OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)


[OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)