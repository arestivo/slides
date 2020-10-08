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
1. [Input/Output](#input-output)
1. [Control Structures](#control)
1. [Functions](#functions)
1. [Modules](#modules)
1. [Files](#files)
1. [Databases](#databases)
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

# Tuples

* Tuples are **another** type of **ordered** collection of values.
* Unlike lists, tuples are **immutable**.
* A tuple consists of a number of values separated by **commas**.
* If the tuple is a part of a larger expression, parenthesis are necessary:

~~~python
>>> numbers = 1, 2, 3
>>> numbers = (1, 2, 3) # does the same thing
>>> numbers[0]
1
>>> numbers
(1, 2, 3)
~~~

---

# Tuple Assignment

Enables you to **assign more than one** variable at a time using **tuples**:

~~~python
width, height = 10, 5
area = width * height
print(area) # 50
~~~

This is very handy when we want to **swap** two values:

~~~python
a = 10
b = 20
a, b = b , a
print (a, b) # 20 10
~~~

---

# Dictionaries

* A set of <code>key: value</code> **pairs** written inside **braces**.
* Where **keys** are **unique**.
* A pair of **braces** creates an **empty** dictionary: <code>{}</code>.
* The <code>del</code> statement, removes a pair from the dictionary.

~~~python
telephones = { 'john': 1234, 'mary': 5555 }
print(telephones)

telephones['carl'] = 9876
print(telephones)

del telephones['john']
print(telephones)
~~~

This prints:

~~~bash
{'john': 1234, 'mary': 5555}
{'john': 1234, 'mary': 5555, 'carl': 9876}
{'mary': 5555, 'carl': 9876}
~~~

---

template: inverse
name:input-output
# Input / Output

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

# Output

We already have seen that the <code>print</code> statement can be used to **output text** to the **screen**:

~~~python
print('Hello World')
~~~

We can also **concatenate** strings to create dynamic outputs:

~~~python
name = input('What is your name? ')
print('Hello ' + name + '!')
~~~

And even use **cast** anything into a string using <code>str</code>:

~~~python
width = int(input('Width: '))
height = int(input('Height: '))
area = width * height
print('The area is ' + str(area))
~~~

---

# Formatted String Literals

* An easier way to output text containing variables is to use **formatted string literals**.
* These are just strings that **start** with an <code>f</code> **before** the **opening quote**.
* That can contain variables inside **curly brackets**.

~~~python
width = int(input('Width: '))
height = int(input('Height: '))
area = width * height
print(f'The area is {area}')
~~~

---

template: inverse
name:control
# Control Structures

---

# Control Structures

* Until now, we have seen instructions that execute **one after the other**.
* Control structures allow us to **alter** the **flow** of **control**.

---

# Scripts

From now on we will use **scripts** instead of typing our code directly in the editor. For example:

~~~python
number = int(input('Type a number: '))
print ('You have chosen ' + str(number))
~~~

Try writing some code into a file called <code>example.py</code>, and then run:

~~~bash
python3 example.py
~~~

---

# Conditions

Boolean conditions return a <code>bool</code> value (**True** or **False**).
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

We can use the <code>else</code> statement to **execute** code when the **condition** in the <code>if</code> statement is **false**:

~~~python
number = int(input('Write a number: '))
if number > 10: 
  print ('number is larger than 10')
else: 
  print ('number is not larget than 10')
~~~

---

# Else If

If we have **more than one** condition, we can use the <code>elif</code> statement:

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

The <code>while</code> **loop** works just like the <code>if</code> statement, but it executes **until** the **condition** is **false**:

~~~python
number = 10

while number > 0:
  print(number)
  number = number - 1 # or number-- 
~~~

This prints:

~~~python
10
9
8
7
6
5
4
3
2
1
~~~

---

# For Loop

The <code>for</code> loop **iterates** over the **items** of **any** **sequence** (a list or a string):

~~~python
numbers = [1, 2, 4, 8, 16]

for n in numbers:
  print(n)
~~~

This prints <code>1 2 4 8 16</code> in separate lines.

~~~python
text = "Python"

for c in text:
  print(c)
~~~

This prints <code>P y t h o n</code> in separate lines.

---

# Range

* The range function **generates** arithmetic **progressions**.
* It is useful when you want to **iterate** over a **sequence** of **numbers**:

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

---

# Continue

Inside loops, the <code>continue</code> statement allows us to **terminate** the **current iteration** and start the next one.

~~~python
for n in range(0, 10):
  if n % 2 == 0: continue
  print(n)
~~~

In this example, the second line verifies if the variable <code>n</code> is **even**. If it is, it **skips** to the next iteration without printing it:

~~~bash
1
3
5
7
9
~~~

---

# Break

Inside loops, the <code>break</code> statement exits the loop without executing the <code>else</code> statement (if it exists).

~~~python
for n in range(0, 10):
  if n == 5: break
  print(n)
else:
  print('Finished!')
~~~

In this example, the second line verifies if the variable <code>n</code> **equals** <code>5</code>. If it does, it **exits** the loop without executing the <code>else</code> block:

~~~bash
0
1
2
3
4
~~~

---

# Looping Techniques

Looping over **dictionaries** (key and value):

~~~python
telephones = { 'john': 1234, 'mary': 5555 }

for (k, v) in telephones.items():
  print (k, v)
~~~

Looping over **lists** (index and value):

~~~python
colors = ['blue', 'red', 'green']

for (i, v) in enumerate(colors):
  print (i, v)
~~~

---

template: inverse
name:functions
# Functions

---

# Functions

* A function is a **block** of **organized**, **reusable** code that is used to **perform** a **single**, related action.
* In python we define functions using the <code>def</code> statement:

~~~python
def greet(name):
  print(f'Hello {name}') 

name = input('What is your name? ')

greet(name)
~~~

---

# Arguments

* Functions can receive **arguments** (or parameters).
* These act as **variables** that are **automatically assigned** when the function is **called**.

~~~python
def calculate_area(w, h):
  area = w * h
  print(f'Area: {area}') 

width = int(input('Width: '))
height = int(input('Height: '))

calculate_area(width, height)
~~~

* Notice that the name of the received arguments **does not need** to be the **same** as the variables that are passed into the function.
* Of course, we can also call the function using **literals**:

~~~python
calculate_area(5, 8)
~~~

---

# Global Variables

Global variables (*declared outside functions*) can be accessed **everywhere**:

~~~python
def print_s():
  print(s) 

s = input('Write something: ')
print_s()
~~~

* Notice that the function **does not** receive any **arguments**.
* This is **not recommended** as it makes reusing the function **harder**.

---

# Local Variables

Variables created inside a function stay inside the function:

~~~python
def calculate_area(w, h):
  area = w * h

width = int(input('Width: '))
height = int(input('Height: '))

calculate_area(width, height)
print(f'Area: {area}')  # ERROR!!!
~~~

We **cannot** access the <code>area</code> variable as it **only exists inside** the <code>calculate_area</code> function.

---

# Return

* Functions can **return** values.
* The <code>return</code> statement **returns** a value and **stops** the function.

~~~python
def calculate_area(w, h):
  area = w * h
  return area

width = int(input('Width: '))
height = int(input('Height: '))

area = calculate_area(width, height)

print(f'Area: {area}')
~~~

By **default**, python functions return the special value <code>None</code>

---

# Example

A function that calculates the **Fibonacci** sequence up to a **certain value** and **returns** the result as a **list**:

~~~python
def fibonacci(n):
  result = []
  a, b = 0, 1

  while a < n:
    result.append(a)
    a, b = b, a + b
  
  return result

print(fibonacci(100)) # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
~~~

---

# Default Argument Values

Some function **arguments** can have **default** values:

~~~python
def fibonacci(n = 10, a = 0, b = 1):
  result = []

  while a < n:
    result.append(a)
    a, b = b, a+b
  
  return result

print(fibonacci(100))        # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
print(fibonacci(100, 5, 10)) # [5, 10, 15, 25, 40, 65]
print(fibonacci())           # [0, 1, 1, 2, 3, 5, 8]
~~~

Notice that the arguments with default values must be the **last** in the list.

---

template: inverse
name:modules
# Modules

---

# Modules

A module is a file containing Python definitions and statements. The file name is the module name with the suffix *.py* appended.

In file *fib.py*:

~~~python
def fibonacci(n):
  result = []
  a, b = 0, 1

  while a < n:
    result.append(a)
    a, b = b, a+b
  
  return result
~~~

In **another** file:

~~~python
import fib

print(fib.fibonacci(10))
~~~


---

# Common Modules

The [Python Standard Library](https://docs.python.org/3/library/) contains many useful modules. These are some of them:
  
* [math](https://docs.python.org/3/library/math.html) − Very basic mathematics.
* [datetime](https://docs.python.org/3/library/datetime.html) − Basic dates and time manipulation.
* [json](https://docs.python.org/3/library/json.html) − JSON encoder and decoder.
* [csv](https://docs.python.org/3/library/csv.html) - Read and write CSV files.
* [random](https://docs.python.org/3/library/random.html) − Pseudo random variables.

~~~python
import math

def distance(p1, p2):
  return math.sqrt((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)

print(distance((0,0), (1,1))) # 1.4142135623730951
~~~

---

template: inverse
name:files
# Files

---

template: inverse
name:databases
# Databases

---