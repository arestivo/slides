name: inverse
layout: true
class: center, middle, inverse
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) [<i class="fa fa-tint"></i>](../change-color.php)]

---

name: normal
layout: true
class: left, middle
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) [<i class="fa fa-tint"></i>](../change-color.php)]

---

template:inverse
# Relational Algebra
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Unary Operators](#operators)
1. [Set Operators](#set)
1. [Joins](#join)
]

---

template: inverse
name: intro
# Introduction

---

# Relational Model

* A set of relations defined by their schemas.
* Each relation is composed by attributes and tuples.
* Schema of a relation $R$ with attributes $a_1, a_2, a_3, ..., a_n$:

.box_example[$R(a_1, a_2, a_3, ..., a_n)$]

---

# Relational Model

* A tuple with attribute values $v_1, v_2, v_3, ..., v_n$:

.box_example[$t = &lt;v_1, v_2, v_3, ..., v_n&gt;$]

* Attribute $a_i$ belonging to relation $R$:

.box_example[$R.a_i$]

* The domain of attribute $a_i$:

.box_example[$Dom(a_i)$]

* The *null* value:

.box_example[$\perp$]

---

# Example


.box_example[
Relation: $Employee(id, name, salary, taxes, department)$

Tuple: $t = &lt;1234, John, 1200, 200, 3&gt;$

Attribute: $Employee.name$

Domain: $Dom(Employee.name) = text$
]

---

# Example

$Employee(id, name, salary, taxes, department)$

.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

---

template: inverse
name: operators
# Unary Operators

---

# Projection

The result of a projection is defined as the set that is obtained when all tuples in R are restricted to the set $&lt;a_1, ..., a_n&gt;$

.box_example[$\Pi_{a_1,...,a_n}(R)$]

Consider $L$ as a list containing attributes from $R$:

.box_example[$S = \Pi_{L}(R)$]

Relation $S$ will only have the attributes from that list.

.box_info[If $L$ does not contain a key from $R$, repeated tuples are eliminated.]

---

# Example

.box_example[$S = \Pi_{name, salary}(Employee)$]

.sqltable[
|name|salary
|-|-|
|John Doe    | 1000 
|Jane Doe    | 800
|John Smith  | 1200 
|Jane Roe    | 1000 
]

.box_info[Notice that one line was eliminated.]

---

# Projection
## Renaming and Arithmetic Operators

The projection operator can also be used to rename attributes:

.box_example[$S = \Pi_{name, wages = salary}(Employee)$]

And calculate simple arithmetic expressions:

.box_example[$S = \Pi_{name, wages = salary - taxes}(Employee)$]

For simplicity the result should be renamed.

---

# Example

.box_example[$S = \Pi_{name, wages = salary - taxes}(Employee)$]

.small[
.pull-left[
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]]]

.pull-right[
.sqltable[
|name|wages
|-|-|
|John Doe    | 800 
|Jane Doe    | 700
|John Smith  | 850 
|Jane Roe    | 800 
|John Doe    | 1000
]]

---

# Rename

Renaming the relation $R$ to $S$:

.box_example[$\rho_S(R)$]

Renaming attribute $a_i$ to aatribute $B_i$ in relation $R(a,b,c)$:

.box_example[$\rho_{c/x}(R) \Rightarrow R(a,b,x)$]

Renaming several attributes in relation $R(a,b,c)$ using the original order:

.box_example[$\rho_{a,x}(R) \Rightarrow R(a,x,c)$]

---

# Selection

Select a set of tuples where a certain condition $c$ holds:

.box_example[$S = \delta_c(R)$]

* $c$ is a condition involving attributes from $R$.
* The condition can contain arithmetic ($+ - \times \div$), conditional ($< > \leq \geq \neq$) and logical ($\vee \wedge \neg$) operators.
* $S$ has the same attributes as $R$.

---

# Example

.box_example[$S = \delta_{salary < 1000 \vee department = 3}(Employee)$]

Employees with a salary smaller than 1000 or that work at department 3.

.small[
.pull-left[
.sqltable[
|id|name|salary|departament
|-|-|
|1 | John Doe    | 1000 | 1
|2 | Jane Doe    | 800  | 2
|3 | John Smith  | 1200 | 2
|4 | Jane Roe    | 1000 | 3
|5 | John Doe    | 1000 | $\perp$
]]]

.pull-right[
.sqltable[
|id|name|salary|departament
|-|-|
|2 | Jane Doe    | 800  | 2
|4 | Jane Roe    | 1000 | 3
]]

---

template: inverse
name: set
# Set Operators

---

# Union, Intersection and Difference

![](../assets/sql/setoperators.png)

---

# Union, Intersection and Difference

The two relations involved must be union-compatible: 

* they have the same number of attributes
* the domain of each attribute, in column order, is the same in both R and S

.box_example[
$R \cup S$

$R \cap S$

$R - S$
]

---

# Union Example

.small[
.pull-left[
Employee
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

Manager
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|6 | Big Boss    | 5000 | 0   | $\perp$
]
]]

.pull-right[
$Employee \cup Manager$
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
|6 | Big Boss    | 5000 | 0   | $\perp$
]
]

---

# Intersection Example

.small[
.pull-left[
Employee
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

Manager
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|6 | Big Boss    | 5000 | 0   | $\perp$
]
]]

.pull-right[
$Employee \cap Manager$
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
]
]

---

# Difference Example

.small[
.pull-left[
Employee
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

Manager
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|6 | Big Boss    | 5000 | 0   | $\perp$
]
]]

.pull-right[
$Employee - Manager$
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]
]

---

template: inverse
name: join
# Joins
