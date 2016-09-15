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
Relation: $Employee(number, name, salary, superior, department)$

Tuple: $t = &lt;1234, John, 1200, 123, 3&gt;$

Attribute: $Employee.name$

Domain: $Dom(Employee.name) = text$
]
