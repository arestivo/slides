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
# Python 3
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Basics](#basics)
1. [Strings](#strings)
1. [Lists](#lists)
]

---

template: inverse
name:introduction
# Introduction

---

# Python

Python, first released in 1991, is an:

* **interpreted**; 
* **high-level**;
* **general-purpose** programming language. 

---

# Python

Key **characteristics**:

* significant whitespace;
* dynamically typed;
* garbage-collected.

Supported **paradigms**:

* procedural; 
* object-oriented; 
* functional programming.

---

# Hello World

The infamous *Hello World* example:

~~~python
>>> print("Hello World")
Hello World
~~~

---

template: inverse
name:basics
# Basics

---

# The Interpreter

Starting the python **interpreter** depends on your operating system. After starting it, you will be greeted by something similar to:

~~~python
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
~~~

To exit just type "*exit()*" or press "*Ctrl-D*".

---

# A Calculator

You can use the python interpreter as a **calculator** by using the <code>+</code>, <code>-</code>, <code>*</code> , and <code>/</code> operators:

~~~python
>>> 2 + 2
4
>>> 50 - 5 * 6
20
>>> (50 - 5 * 6) / 4
5.0
>>> 8 / 5
1.6
~~~

---

# Numerical Types

* Integer numbers (*e.g.*, 2, 4) have type ```int```.
* Real numbers (*e.g.*, 1.6) have type ```float```.

Division **always** returns a ```float```. For **floor division** use ```//```.

~~~python
>>> 8/4
2.0
>>> 8//4
2
~~~

The <code>**</code> operator is used to calculate **powers**:

~~~python
>>> 2**4
16
~~~

---

# Variables

* A variable is a **storage location** paired with an associated **symbolic name**.
* You can think about a variable as a **box** with a **name** where you can **store** values.
* To assign a value to a variable, we use the assignment operator <code>=</code>.

~~~python
>>> width = 10
>>> height = 20
>>> width * height
200
>>> area = width * height
>>> print(area)
200
~~~

---

template: inverse
name:strings
# Strings

---

# Strings

* Besides numbers, we can also manipulate **text** (in the form of **string** literals).
* Strings can be enclosed in **single** or **double** quotes.
* Strings can be **concatenated** using the <code>+</code> operator.

~~~python
>>> hello = "Hello"
>>> world = 'World'
>>> print (hello + ' ' + world)
Hello World
~~~

* The <code>len(string)</code> built-in function return the **length** of a string.

~~~python
>>> print (len('Python'))
6
~~~

---

# Multi-line Strings

* Strings can span **multiple lines** when using <code>"""</code> or <code>'''</code>.
* This can be useful when writing **lots of text**.
* Line **breaks are included** in the final string, but this can be **avoided** by adding a <code>/</code> at the end of the line.

~~~python
>>> message = '''Hello World. \
This is a lot of text!'''
>>> print(message)
Hello World. This is a lot of text!
~~~

---

# Extracting Text

We can **extract part** of a string (*slicing* and *indexing*) using:
* <code>[i]</code> Extracts character at position <code>i</code>.
* <code>[-i]</code> Extracts character at position <code>i</code> starting at the end of the string.
* <code>[i:j]</code> Extracts characters from position <code>i</code> (included) to position <code>j</code> (excluded).
* <code>[i:]</code> Extracts characters from position <code>i</code> (included) until the end of the string.
* <code>[:j]</code> Extracts characters from the beginning of the string to position <code>j</code> (excluded).

---

# Examples

~~~txt
 P  y   t   h   o   n
 0  1   2   3   4   5
-6 -5  -4  -3  -2  -1
~~~

~~~python
>>> p = 'Python'
>>> p[0]
'P'
>>> p[5]
'n'
>>> p[-2]
'o'
>>> p[1:4]
'yth'
>>> p[1:]
'ython'
>>> p[:4]
'Pyth'
~~~

---

# Casting

You can **cast** values from one type to another (if they are compatible):

~~~python
>>> number = 10
>>> text = str(number)
>>> text
'10'
~~~

~~~python
>>> text = '10'
>>> number = int(number)
>>> number
10
~~~

---

template: inverse
name:lists
# Lists

---

# Lists

* A **list** is a **compound** data (used to **group** together values).
* A list can **store** items of **different** types (not common).
* Just like strings, lists are a **sequence** type and can be **sliced** and **indexed**.
* The <code>len()</code> function can also be used with lists.

~~~python
>>> l = [1, 2, 3, 10, 15]
>>> l[0]
1
>>> l[2:4]
[3, 10]
>>> l[-2]
10
>>> len(l)
5
~~~

---

# Mutating Lists

Unlike **strings**, which are **immutable**, strings **can be changed**:

~~~python
>>> squares = [1, 4, 10, 16, 25]
>>> squares[2] = 9
>>> squares
[1, 4, 9, 16, 25]
>>> squares.append(36)
>>> squares
[1, 4, 9, 16, 25, 36]
~~~

---

# Replacing Slices

We can also **replace** entire **slices**:

~~~python
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> numbers[2:5] = [10, 11]
>>> numbers
[1, 2, 10, 11, 6]
>>> numbers[2:] = []
>>> numbers
[1, 2]
~~~

---

# Nested Lists

It is also possible to have lists of **other data types**: 

~~~python
>>> colors
['red', 'green', 'blue']
~~~

Including **lists of lists**:

~~~python
>>> odds = [1, 3, 5]
>>> evens = [2, 4, 6]
>>> numbers = [odds, evens]
>>> numbers
[[1, 3, 5], [2, 4, 6]]
>>> numbers[0]
[1, 3, 5]
>>> numbers[1][2]
6
~~~

---

template: inverse
name:control
# Control Structures

---

# Control Structures

* We have seen how Python instructions execute **one after the other**.
* Control structures allow us to **alter** the **flow** of **control**.

---

# Input

* The <code>input(prompt)</code> **pauses** the program flow and **asks** the **user** for some **text**.
* The **prompt** argument is **optional**.
* This function **always** **returns** a **string**, but we can **cast** it to **another** type.

~~~python
>>> text = input('Write some text: ')
Write some text: text
>>> a = int(input('First number: '))
First number: 5
>>> b = int(input('Second number: '))
Second number: 8
>>> a + b
13
~~~

---

# Scripts

* From now on we will use **scripts** instead of typing our code directly in the editor. For example:

~~~python
number = int(input('Type a number: '))
print ('You have chosen ' + str(number))
~~~

* Try writing some code into a file called <code>example.py</code>, and then run:

~~~bash
python3 example.py
~~~

---

# Conditions

* Boolean conditions return a <code>bool</code> value (**True** or **False**).
* Conditions can be **simple**:
  
~~~python
>>> 1 == 1 # Equality
True
>>> 1 > 2  # Greater than
False
>>> 2 >= 3 # Greater or equal
False
>>> 1 != 2 # Different
True
>>> len('Python') == 6
True
~~~

* Or **complex** using the <code>and</code>, <code>or</code>, and <code>not</code> logical operators:

~~~python
>>> 1 == 1 and 2 > 5
False
>>> not(1 == 1) or 4 < 5
True
~~~

---


# If Statement

The <code>if</code> statement **only executes** its code if the **condition** evaluates to **True**:

~~~python
number = int(input('Write a number: '))
if number > 10: print ('number is larger than 10')
~~~

* You can use a **code block** to execute **more than one** instruction inside an <code>if</code>.
* Python uses **indentation** for blocks, instead of curly braces.
* You can use **spaces** or **tabs**, but do **not mix** them.

~~~python
number = int(input('Write a number: '))

if number > 10: print ('number is larger than 10')

if number < 10: print ('number is lower than 10')

if number == 10:
  print ('number is exactly')
  print ('TEN!!!')
~~~

---

# Else

We can use the <code>else</code> statement to execute code when the condition in the <code>if</code> statement is false:

~~~python
number = int(input('Write a number: '))
if number > 10: 
  print ('number is larger than 10')
else: 
  print ('number is not larget than 10')
~~~

---

# Else If

If we have more than one condition, we can use the <code>elif</code> statement:

~~~python
number = int(input('Write a number: '))

if number > 10: 
  print ('number is larger than 10')
elif number < 10: 
  print ('number is lower than 10')
else:
  print ('number is exactly')
  print ('TEN!!!')
~~~

---

# While Loop

The <code>while</code> loop works just like the <code>if</code> statement, but it executes until the condition is false:

~~~python
number = 10

while number > 0:
  print(number)
  number = number - 1 # or number-- 
~~~

---

# For Loop

The <code>for</code> loop iterates over the items of any sequence (a list or a string):

~~~python
numbers = [1, 2, 4, 8, 16]

for n in numbers:
  print(n)
~~~

~~~python
text = "Python"

for c in text:
  print(c)
~~~

---

# Range

* The range function generates arithmetic progressions.
* It is useful when you want to iterate over a sequence of numbers:

~~~python
for n in range(5):
  print(n) # 0 1 2 3 4

for n in range(5, 10):
  print(n) # 5 6 7 8 9

for n in range(10, 20, 3):
  print(n) # 10 13 16 19
~~~

---

# Else in Loops

* Loop statements may **also** have an <code>else</code> clause.
* It is executed when the loop **terminates**: through exhaustion (for), or when the condition becomes false (while).

~~~python
for n in range(0, 5):
  print(n)
else: 
  print ('Finished')
~~~

~~~python
number = 0

while number < 10:
  print(number)
  number = number + 1 # or number++
else: 
  print ('Finished')
~~~