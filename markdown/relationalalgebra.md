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
1. [Selection](#selection)
1. [Operators](#operators)
]

---

template: inverse
name: intro
# Introduction

---

# Relational Model

* A set of relations defined by their schemas.
* Each relation is composed by attributes and tuples.
* Schema of a relation $R$ with attributes $A_1, A_2, A_3, ..., A_n$:

.box_example[$R(A_1, A_2, A_3, ..., A_n)$]

---

# Relational Model

* A tuple with attribute values $v_1, v_2, v_3, ..., v_n$:

.box_example[$t = &lt;v_1, v_2, v_3, ..., v_n&gt;$]

* Attribute $A_i$ belonging to relation $R$:

.box_example[$R.A_i$]

* The domain of attribute $A_i$:

.box_example[$Dom(A_i)$]

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

The result of a projection is defined as the set that is obtained when all tuples in R are restricted to the set $&lt;A_1, ..., A_n&gt;$

.box_example[$\Pi_{A_1,...,A_n}(R)$]

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
