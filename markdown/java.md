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
2. [Arrays](#arrays)
3. [Classes](#classes)
4. [Strings](#strings)
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

* **Java Card** - Smart **cards** and similar small memory footprint devices. 
* **Java ME** - Micro Edition for **embedded** and **mobile** devices (IoT).
* **Java SE** - Standard Edition for regular Java applications. Mainly **desktop** and command-line apps.
* **Java EE** - Enterprise Edition for enterprise-oriented applications and servlets. Mainly large-scale **web**-oriented applications.

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

Java has all the conditional blocks you would expect from a [C-family](https://en.wikipedia.org/wiki/List_of_C-family_programming_languages) programming language:

```java
if (condition) {      // Curly brackets when more than one statement
  doSomething();      
  doSomethingElse();
} else 
  doAnotherThing();
```

And also:

```java
switch (variable) {                 // variable must be of the correct type 
  case 1: doSomething();
    break;                          // don't forget the break
  case 2: doSomethingElse();
    break;
  default: doSomethingDefault();
    break;
}
```

---

# Loop Blocks

Loop blocks are also the expected ones. The **while-loop**:

```java
while (condition) {
  doSomething();
}
```

Also a **do-while** variant:
```java
do {
  doSomething();          // executed at leat once
} while (condition);
```

And, of course, the **for-loop**:
```java
for (int i = 0; i < 10; i++) {
  doSomething(i);         // i from 0 to 9
}
```

---

# Operators

Arithmetic and boolean operators are also very similar to other C-family languages:

* Assignment: <code>= += -= *=  /=</code>
* Numerical: <code> + - * / % ++ -- </code>
* Relational: <code>== != < > <=  >=</code>
* Boolean: <code>&& || !</code>
* Bitwise: <code>& | ^ ~ << >> >>></code>
* Tertiary: <code>?:</code>
* Type casting: <code>(type) </code>

Be careful with the <code>==</code> operator. It compares primitive types by value; but **compares objects by reference**.

---

# Standard Input and Output

Writing to the screen can be accomplished using one of two methods: 

```java
System.out.print("Hello world");
System.out.println("Hello world");  // also changes line
```

Reading from the keyboard can be done using the **Scanner** class from *java.util* package:

```java
Scanner scanner = new Scanner(System.in); // Instantiating a new Scanner object
String line = scanner.nextLine();         // Reading a line
System.out.println(line);                 // Printing out the line
int number = scanner.nextInt();           // We can also read primitive types
```

---

# Naming Convention

Names should follow the standard naming convention:

.simple[
| Type | Form | Capitalization | Example |
|------|------|----------------|---------|
| Class or Interface | Noun | First word letter capitalized | PoliceCar |
| Methods | Verb | First word letter capitalized (except first one) | turnSirenOn() |
| Variables | &mdash; | First word letter capitalized (except first one) | carPlate |
| Constants | &mdash; | Uppercase with underscores separating words | MAX_SPEED |
| Packages | &mdash; | Starting with top-level domain, lowercase separated by periods | com.lpoo.util |
]

---

# Strings

* In Java Strings are immutable, so they cannot be modified once created.
* String are a class defined in the *java.lang* package (more on that later):

The <code>+</code> operator concatenates strings:

```java
String hello = "Hello";
String world = "World";
String sentence = hello + " " + world;
```

To compare strings we must use the equals method:

```java
if (hello.equals(world)) {  // hello == world would compare the references
  doSomething(i); 
}
```

---

# Hello World

In Java, everything must belong to a class.

That means our customary Hello World example looks like this:

```java
public class HelloWorld {
  public static void main(String[] args) { // when we run a class this method
    System.out.println("Hello, World");    // runs first
  }
}
```

Don't worry too much about the syntax for now.

---

template: inverse
name:classes
# Arrays

---

# Arrays

In Java, an **array** is an **object**. This object has a given type for the contained primitive types or objects (int, char, String, ...). 

An array can be declared in several ways: 

```java
int[] array;  // recommended
int array[];  // identical but less used
```

These arrays have been declared but haven't been instantiated yet. We can do it in a few different ways:

```java
array = new int[10];                              // 10 default elements 
array = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // works anywhere
int[] other = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};    // only works in the declaration
```

The default value depends on the data type. For objects it's **null**, for numeric types it's **0**, for booleans is **false** and for chars it's **'\u0000'** (whose decimal equivalent is 0).

---

# Using Arrays

The size of an array can be obtained by using the **length** attribute:

```java
for (int i = 0; i < array.lenght; i++)
  System.out.println(array[i]);  // getting the value at index i
```

A simpler way of looping over an array is:

```java
for (int element : array)       // element must be the same type
{                               // as the array internal values
  System.out.println(element);
}
```

---

# Multidimensional Arrays

Arrays can have more than one dimension:

```java
int[][] array = {{  0,  1,  2,  3,  4 },
                 {  5,  6,  7,  8,  9 },
                 { 10, 11, 12, 13, 14 }};
System.out.println(array[0][3]); // 3
System.out.println(array[1][4]); // 9
```

Sub-arrays can even have different lengths:

```java
int[][] array = {{       0       },
                 {    1, 2, 3    },
                 { 4, 5, 6, 7, 8 }};
System.out.println(array[0].length); // 1
System.out.println(array[1].length); // 3
```

---

template: inverse
name:classes
# Classes

---

template: inverse
name:packages
# Packages

---

template: inverse
name:bignum
# Large Numbers

---

template: inverse
name:strings
# Strings

---

template: inverse
name:exceptions
# Exceptions

---

template: inverse
name:io
# Input and Output

---

template: inverse
name:collections
# Collections

---

template: inverse
name:threads
# Multi Threading

---

template: inverse
name:generics
# Generics

---

template: inverse
name:annotations
# Annotations

---

template: inverse
name:reflection
# Reflection

---

template: inverse
name:javafx
# Java FX