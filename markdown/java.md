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
# Java
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Basics](#basics)
1. [Classes](#classes)
]

---

template: inverse
name:intro
# Introduction

---

# What is Java?

* Designed by: James **Gosling** (1995)

* Created by Sun Microsystems now owned by **Oracle**.

* Java is **open source** (under the GPL).

* Key **characteristics**:
  
  * General-purpose 
  * Object-oriented (class-based)
  * Automatic memory management
  * Write-once Run-everywhere

---

# Java Editions

* **Java Card** - Smart cards and similar small memory footprint devices. 
* **Java ME** - Micro Edition for embedded and mobile devices (IoT).
* **Java SE** - Standard Edition for regular Java applications. Mainly desktop and command-line apps.
* **Java EE** - Enterprise Edition for enterprise-oriented applications and servlets. Mainly large-scale web-oriented applications.

---

# Compiling and Running

* Compiled into **bytecode** using the command **javac**.
* Bytecode can be run, using the command **java**, in any OS, as long as there is a Java Virtual Machine (**JVM**).
* Compiling and executing can be done using the Java Development Kit (**JDK**).
* The Java Runtime Environment (**JRE**) can be used instead for executing only.
  
![](../assets/java/java-jvm.svg)

---

# Resources

* [Book: Thinking in Java, 4th edition](https://ia800103.us.archive.org/20/items/TIJ4CcR1/TIJ4-cc-R1.pdf)
* [Book: Java Programming](https://en.wikibooks.org/wiki/Java_Programming)
* [JDK 11 Documentation](https://docs.oracle.com/en/java/javase/11/)

---

template: inverse
name:basics
# Basics

---

# Types

* Java is **strongly typed** so every variable must have a type.

* Java is **not a pure OOP language** so variables can have a **primitive** type or be a reference to an **object**.

* In Java, **arrays** are objects.

* There are no pointers but:

  *  Primitive variables are stored as **values**.
  *  Objects are stored as **references**.

---

# Primitive Types

Primitive type are the most basic data types in Java.

.small.simple[
|Types|Size (bits)|Minimum Value|Maximum Value|Precision|
|--- |:---:|:---:|:---:|---:|
|byte|8|-128|127|From +127 to -128|
|char|16|0|2<sup>16</sup>-1|All Unicode characters|
|short|16|-2<sup>15</sup>|2<sup>15</sup>-1|From +32,767 to -32,768|
|int|32|-2<sup>31</sup>|2<sup>31</sup>-1|From +2,147,483,647 to -2,147,483,648|
|long|64|-2<sup>63</sup>|2<sup>63</sup>-1|From +9,223,372,036,854,775,807 to -9,223,372,036,854,775,808|
|float|32|2<sup>-149</sup>|(2-2-23)·2<sup>127</sup>|From 3.402,823,5 E+38 to 1.4 E-45|
|double|64|2<sup>-1074</sup>|(2-2<sup>-52</sup>)·2<sup>1023</sup>|From 1.797,693,134,862,315,7 E+308 to 4.9 E-324|
|boolean|&mdash;|&mdash;|&mdash;|false, true|
|void|&mdash;|&mdash;|&mdash;|&mdash;|
]

---

# Literals

Java Literals are syntactic representations of boolean, character, numeric, or string data. 

* **Boolean**: true or false.
* **Character**: 16-bit characters inside single quotes ('a'). Can be cast to int or long.
* **String**: Inside double quotes ("Java").
* **Integer**: Decimal (1234), Octal with a leading zero (02322), hexadecimal starting with 0x (0x4D2) or binary starting with 0B (0B10011010010). Ending with L if we want a long type integer (1234L).
* **Floating Point**: Ending with F or D for single and double precision (double is the default). Can be a decimal fraction or an exponential notation (0.1234 or 1234E-4). 

---

# Variables

Local variables are created by: 

* giving it a **unique name**; and

* assigning it a **data type**.

```java
int i;
```

Local variables must be given a value explicitly before being used:

```java
int i; i = 10;
```

This can be done in a single statement:

```java
int i = 10; 
```

---

# Conditional Blocks

---

# Loop Blocks

---

# Strings

---

template: inverse
name:classes
# Arrays

---

template: inverse
name:io
# Input and Output

---

# Name Conventions

---

template: inverse
name:classes
# Classes