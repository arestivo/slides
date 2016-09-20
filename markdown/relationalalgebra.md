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
1. [Division](#division)
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

.small[

The cardinality (number of tuples) in relation $R$:

.box_example[$|R|$]

A tuple with attribute values $v_1, v_2, v_3, ..., v_n$:

.box_example[$t = &lt;v_1, v_2, v_3, ..., v_n&gt;$]

Attribute $a_i$ belonging to relation $R$:

.box_example[$R.a_i$]

The domain (possible values) of attribute $a_i$:

.box_example[$Dom(a_i)$]

The *null* value:

.box_example[$\perp$]
]
---

# Example


.box_example[
Relation: $Employee(id, name, salary, taxes, department)$

Tuple: $t = &lt;1234, John, 1200, 200, \perp&gt;$

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

$|Employee| = 5$

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

Renaming attribute $a$ to atribute $x$ in relation $R(a,b,c)$:

.box_example[$\rho_{a/x}(R) \Rightarrow R(x,b,c)$]

Renaming attribute $a$ to atribute $x$ and $c$ to atribute $y$ in relation $R(a,b,c)$:

.box_example[$\rho_{a/x, c/y}(R) \Rightarrow R(x,b,y)$]

---

# Selection

Select a set of tuples where a certain condition $c$ holds:

.box_example[$S = \sigma_c(R)$]

* $c$ is a condition involving attributes from $R$.
* The condition can contain arithmetic ($+ - \times \div$), conditional ($< > \leq \geq \neq$) and logical ($\vee \wedge \neg$) operators.
* $S$ has the same attributes as $R$.

---

# Example

.box_example[$S = \sigma_{salary < 1000 \vee department = 3}(Employee)$]

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

* they must have the same number of attributes
* the domain of each attribute must be the same in both R and S

.box_example[
$R \cup S = \\{x: x \in R \vee x \in S\\}$

$R \cap S = \\{x: x \in R \wedge x \in S\\}$

$R - S = \\{x: x \in R \wedge x \notin S\\}$
]

---

# Union Example

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

$Manager$
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
$Employee$
.sqltable[
|id|name|salary|taxes|departament
|-|-|javascript/#46
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

$Manager$
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
$Employee$
.sqltable[
|id|name|salary|taxes|departament
|-|-|
|1 | John Doe    | 1000 | 200 | 1
|2 | Jane Doe    | 800  | 100 | 2
|3 | John Smith  | 1200 | 350 | 2
|4 | Jane Roe    | 1000 | 200 | 3
|5 | John Doe    | 1000 | 0   | $\perp$
]

$Manager$
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

---

# Cartesian Product


The cartesian product $R \times S$ is the set of all ordered pairs $(r, s)$ where $r \in R$ and $s \in S$. 

$R \times S = \\{ &lt; r,s &gt; : r \in R, s \in S \\}$

The cartesian product between relations $R(a_1,...,a_n)$ and $S(b_1,...,b_m)$ is a relation with $n+m$ attributes $(a_1, ..., a_n, b_1, ..., b_m)$ where there is a tuple for each possible combination of tuples from $R$ and $S$.

The cardinality of the resulting relation is equal to the product between the cardinalities of the original relations:

.box_example[ $ |R \times S| = |R| \times |S| $ ]

---

# Example

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|departament
|-|-|
|1 | John Doe    | 1
|2 | Jane Doe    | 2
|3 | John Smith  | 2
|4 | John Doe    | $\perp$
]

$Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
]]]

.small[
.pull-right[
$Employee \times Department$
.sqltable[
|id|name|department|number|designation
|-|-|
|1 | John Doe    | 1       | 1 | Marketing
|2 | Jane Doe    | 2       | 1 | Marketing
|3 | John Smith  | 2       | 1 | Marketing
|4 | John Doe    | $\perp$ | 1 | Marketing
|1 | John Doe    | 1       | 2 | Accounting
|2 | Jane Doe    | 2       | 2 | Accounting
|3 | John Smith  | 2       | 2 | Accounting
|4 | John Doe    | $\perp$ | 2 | Accounting
]]]

---

# Conditional Join

A cartesian product between relations $R$ and $S$ followed by a selection on condition $c$:

.box_example[$R \bowtie_c S$]

The same as a cartesian product followed by a selection:

.box_example[$R \bowtie_c S = \sigma_c(R \times S) $]

Allows the combination of relations that are associated by a foreign key.

---

# Example

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|departament
|-|-|
|1 | John Doe    | 1
|2 | Jane Doe    | 2
|3 | John Smith  | 2
|4 | John Doe    | $\perp$
]

$Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
]]]

.small[
.pull-right[
$Employee \bowtie_{department=number} Department$
.sqltable[
|id|name|department|number|designation
|-|-|
|1 | John Doe    | 1       | 1 | Marketing
|2 | Jane Doe    | 2       | 2 | Accounting
|3 | John Smith  | 2       | 2 | Accounting
]]]

---

# Natural Join

A particular case of a join where the condition is the equality of attributes on both relations having the same name.

.box_example[$R \bowtie S$]

Attributes used in the condition are merged together.

---

# Example

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|number
|-|-|
|1 | John Doe    | 1
|2 | Jane Doe    | 2
|3 | John Smith  | 2
|4 | John Doe    | $\perp$
]

$Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
]]]

.small[
.pull-right[
$Employee \bowtie Department$
.sqltable[
|id|name|number|designation
|-|-|
|1 | John Doe    | 1 | Marketing
|2 | Jane Doe    | 2 | Accounting
|3 | John Smith  | 2 | Accounting
]]]

---

# Semijoin

A join where only attributes from one of the relations is kept.

.box_example[$R \ltimes S = \Pi_R (R \bowtie S)$]
.box_example[$R \rtimes S = \Pi_S (R \bowtie S)$]

---


# Examplejavascript/#46

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|number
|-|-|
|1 | John Doe    | 1
|2 | Jane Doe    | 2
|3 | John Smith  | 2
|4 | John Doe    | $\perp$
]

$Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
|3 | Transports
]]]

.small[
.pull-right[
$Employee \ltimes Department$
.sqltable[
|id|name|number
|-|-|
|1 | John Doe    | 1 
|2 | Jane Doe    | 2
|3 | John Smith  | 2
]

$Employee \rtimes Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
]]]

---

# Outer Join

A join operation where unmatched tuples are part of the result set. This tuples can come from the $R$ relation (left), the $S$ relation (right) or from both (full).

Left outer join:

.box_example[$R ⟕ _c S$]

Right outer join:

.box_example[$R ⟖_c S$]

Full outer join:

.box_example[$R ⟗_c S$]

---

# Example

.small[
.pull-left[
$Employee$
.sqltable[
|id|name|number
|-|-|
|1 | John Doe    | 1
|2 | Jane Doe    | 2
|3 | John Smith  | 2
|4 | John Doe    | $\perp$
]

$Department$
.sqltable[
|number|designation
|-|-|
|1 | Marketing
|2 | Accounting
|3 | Transports
]]]

.small[
.pull-right[
$Employee ⟕  Department$
.sqltable[
|id|name|number|designation
|-|-|
|1 | John Doe    | 1 | Marketing
|2 | Jane Doe    | 2 | Accounting
|3 | John Smith  | 2 | Accounting
|4 | John Doe    | $\perp$ | $\perp$ 
]

$Employee ⟖  Department$
.sqltable[
|id|name|number|designation
|-|-|
|1 | John Doe    | 1 | Marketing
|2 | Jane Doe    | 2 | Accounting
|3 | John Smith  | 2 | Accounting
|$\perp$| $\perp$ |3 | Transports

]]]

---
template: inverse
name: division
# Division

---

#Division

The restrictions of tuples in $R$ to the attribute names unique to $R$ for which it holds that all their combinations with tuples in $S$ are present in $R$.

.box_example[$R(a,b,c) \div S(b,c)$] 

In this example, the result of the division will have one attribute $a$ (the one that does not exist in $S$), containing the values of $a$ that are combined with all values of $S$.

---

# Example

.small[
.pull-left[
$Works$
.sqltable[
|id|name|number|designation
|-|-|
|1 | John Doe    | 1 | Big Rocket
|1 | John Doe    | 2 | Thingamabob
|1 | John Doe    | 3 | Take a Nap
|2 | Jane Doe    | 2 | Thingamabob
|2 | Jane Doe    | 3 | Take a Nap
|3 | Jack Doe    | 1 | Big Rocket
|3 | Jack Doe    | 2 | Thingamabob
]

$Project$
.sqltable[
|number|designation
|-|-|
|1 | Big Rocket
|2 | Thingamabob
|3 | Take a Nap
]]]

.pull-right[
$Works \div  Project$
.sqltable[
|id|name
|-|-|
|1 | John Doe
]]

---

#Division without Division

.box_example[$R(a_1,...,a_n,b_1,...,b_m) \div S(b_1, ..., b_m)$]

.box_example[
$R \div S = \Pi\_{a\_1,...,a\_n}(R) - \Pi\_{a\_1,...,a\_n} ( \Pi\_{a\_1,...,a\_n}(R) \times S - R)$
]

---

# Explanation

All tuples from the first $n$ attributes of $R$:
.box_example[
$ \Pi\_{a\_1,...,a\_n}(R) $
]
.box_example[
$ \Pi\_{id,name}(Works) $
]

.centered[.sqltable[
|id|name
|-|-|
|1 | John Doe
|2 | Jane Doe
|3 | Jack Doe
]]

---

# Explanation

Cartesian product with S gives all possible combinations of those attributes with the tuples of $S$:
.box_example[
$ \Pi\_{a\_1,...,a\_n}(R) \times S$
]
.box_example[
$ \Pi\_{id,name}(Works) \times Project$
]

.centered[.small[.sqltable[
|id|name|number|designation
|-|-|
|1 | John Doe|1 | Big Rocket
|2 | Jane Doe|1 | Big Rocket
|3 | Jack Doe|1 | Big Rocket
|1 | John Doe|2 | Thingamabob
|2 | Jane Doe|2 | Thingamabob
|3 | Jack Doe|2 | Thingamabob
|1 | John Doe|3 | Take a Nap
|2 | Jane Doe|3 | Take a Nap
|3 | Jack Doe|3 | Take a Nap
]]]


---

# Explanation

Removing the original $R$ tuples we get the tuples that are not present in the original $R$ relation:
.box_example[
$\Pi\_{a\_1,...,a\_n}(R) \times S - R$
]
.box_example[
$ \Pi\_{id,name}(Works) \times Project - Works$
]

.centered[.sqltable[
|id|name|number|designation
|-|-|
|2 | Jane Doe|1 | Big Rocket
|3 | Jack Doe|3 | Take a Nap
]]

---

# Explanation

Projecting again we get the first $n$ attributes of those tuples:
.box_example[
$\Pi\_{a\_1,...,a\_n} ( \Pi\_{a\_1,...,a\_n}(R) \times S - R)$
]

.box_example[
$ \Pi\_{id,name} (\Pi\_{id,name}(Works) \times Project - Works)$
]

.centered[.sqltable[
|id|name
|-|-|
|2 | Jane Doe|
|3 | Jack Doe|
]]

---

#Explanation

.box_example[
$\Pi\_{a\_1,...,a\_n}(R) - \Pi\_{a\_1,...,a\_n} ( \Pi\_{a\_1,...,a\_n}(R) \times S - R)$
]

.box_example[
$\Pi\_{id,name}(Works) - \Pi\_{id,name} (\Pi\_{id,name}(Works) \times Project - Works)$
]

.centered[.sqltable[
|id|name
|-|-|
|1 | John Doe
]]

