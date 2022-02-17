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
# Normalization
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Functional Dependencies](#fds)
1. [1NF](#1nf)
1. [2NF](#2nf)
1. [3NF](#3nf)
1. [BCNF](#bcnf)
]

---

template:inverse
name:intro
# Introduction

---

# Normalization

The process of organizing attributes and relations of a relational database to reduce data redundancy and improve data integrity.

A simplification of the design so that the database achieves its optimum structure.

![](assets/normalization/normalization.svg)

---

# Denormalization

A strategy used on a normalized database in order to increase performance. Often by joining tables and/or introducing redudancy.

But we must ensure that it does not become inconsistent.

![](assets/normalization/denormalization.svg)

---

# Redundancy

Having the same fact more than once in the database.

![](assets/normalization/redundancy.svg)

In this example we have several redundant facts:

* The fact that employee number one is John.
* The fact that John is a technician.
* The fact that he earns 500€.
* The fact project 1 is named X. 
* ...

---

# Anomalies

Redundancy leads to several types of anomalies:

* **Update anomaly**: If we update the name of project 1, we must update its name in all rows that mention that project.

* **Insert anomaly**: If we insert a new project, we must assign an employee to that project.

* **Delete anomaly**: If delete employees John and Carl, we will 
also delete project Y.

---

template:inverse
name:fds
# Functional Dependencies

---

# Functional Dependency

In a relation R, a set of attributes X is said to functionally determine another set of attributes Y if, and only if, each X value is associated with precisely one Y value.

Written as: X &rarr; Y.

---

# Examples

Some functional dependency examples:

![](assets/normalization/redundancy.svg)

* e_num &rarr; e_name, job

* e_num, job &rarr; salary

* p_num, hours &rarr; p_name

* e_num, p_num &rarr; hours

---

# Axioms

Armstrong's axioms:

* **Reflexivity**: If Y is a subset of X, then X &rarr; Y
* **Augmentation**: If X &rarr; Y, then XZ &rarr; YZ
* **Transitivity**: If X &rarr; Y and Y &rarr; Z, then X &rarr; Z

Secondary rules:

* **Union**: If X &rarr; Y and X &rarr; Z, then X &rarr; YZ
* **Decomposition**: If X &rarr; YZ, then X &rarr; Y and X &rarr; Z
* **Pseudotransitivity**: If X &rarr; Y and WY &rarr; Z, then WX &rarr; Z

---

# Minimal Cover

The simplest way that we can write the dependencies, while still
preserving the same information.

The minimal cover for all functional dependencies of the example:

* e_num &rarr; e_name, job

* job &rarr; salary

* p_num &rarr; p_name

* e_num, p_num &rarr; hours

---

# Closure

The full set of values that can be determined from a set of known values for a given relationship using its functional dependencies.

For example, the **closure of A** knowing the following functional dependencies:

* A &rarr; B
* B &rarr; C
* AB &rarr; D

Is **A &rarr; ABCD**. This can be calculated using Armstrong's axioms.

---

# Super key

A **super key** is a set of attributes whose closure is the set of all atributes.

Example:

![](assets/normalization/redundancy.svg)

**e_num, p_num** &rarr; e_num, e_name, job, salary, p_num, p_name, hours

But **{e_num, p_num, salary}**, and many others, are also super keys.

---

# Candidate Key

A minimal super key. 

A super key where no attributes can be removed without it stop being a super key.

* **e_num, p_num** is a candidate key.
* **e_num, p_num, salary** is not a candidate key.

---

template:inverse
name:1nf
# First Normal Form (1NF)

---

# First Normal Form (1NF)

A database is said to be in the first normal form if:

* All attributes are atomic.
* The primary key has been identified.

![](assets/normalization/1nf.svg)

---

template:inverse
name:2nf
# Second Normal Form (2NF)

---

# Second Normal Form (2NF)


A database is said to be in the second normal form if:

* The database is in the first normal form.
* Every attribute not belonging to a candidate key is dependent on the whole of every candidate key (i.e. no partial dependencies from part of a candidate key).

![](assets/normalization/2nf.svg)

---

template:inverse
name:3nf
# Third Normal Form (3NF)

---

# Third Normal Form (3NF)

A database is said to be in the third normal form if:

* The database is in the second normal form.
* If X &rarr; Y then X is a super key or Y is part of a candidate key. 

![](assets/normalization/3nf.svg)

---

template:inverse
name:bcnf
# Boyce-Codd Normal Form (BCNF)

---

# Boyce-Codd Normal Form (BCNF)

* A slightly stronger version of the third normal form.
* Developed by Raymond F. **Boyce** and Edgar F. **Codd** in 1974.

A database is said to be in the third normal form if:

* The database is in the second normal form.
* If X &rarr; Y then X is a super key. 

The following example is in the third normal form but is not BCNF:

![](assets/normalization/bcnf.svg)
 



