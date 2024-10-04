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
# Relational Model
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Constraints](#constraints)
1. [Operations](#operations)
1. [Conversion](#uml-to-mr)
1. [Example](#example)
]

---

template: inverse
name: intro
# Introduction

---

# Relational Model

* A simple **Database model** based on first-order predicate logic.
* First formulated and proposed in **1970** by Edgar F. **Codd**.
* But still the most used model for databases.
* Other models include *hierarchical* and *network* models.

---

# Principles

* Relational Model:

  * Set of relations: **tables**;
  * Composed by *tuples* (*records*) and *attributes*: **rows** and **columns**.

* Each relation:

  * Has a **name**;
  * Contains **attributes**;
  * Subject to **constraints**.

---

# Relation

![](assets/relationalmodel/relation.png)

---

# Tuples

 * The **lines** of a relation;
 * An **ordered** sequence of values;
 * Tuples do not have a specific order between them;
 * Tuple values are **atomic** (no composite or multi-value).

Example notation for an employee:

.relational_example[
Employee (id, name, address, telephone)
]
---

name: constraints
template: inverse
# Constraints

---

# Domain

* The set of **possible** values for a given **attribute**.
* Can be considered a **constraint** on the value of the attribute.
* Examples:

 * integer values;
 * email addresses;
 * any text under 140 characters;
 * true or false.

---

# Not Null Constraint

For certain attributes, **null** can be a possible value. Others don't allow the null value.

Notation for **not null** attributes [NN]:

.relational_example[
Employee (id, name [NN], address, telephone)
]

---

# Key Constraints

* No two tuples can have the same combination of values for
all their attributes;
* **Superkey**: a set of attributes in a relation *R* such that no 2 different tuples will have the same values for that set of attributes;
* **Key**: a minimal set of attributes in relation *R* such that no 2 tuples have the same values;
* **Candidate key**: any key. 

---

# Primary Key

Key chosen to be used to **identify** tuples in a relation:

* Other candidate keys are **unique** keys;
* Every relation schema **must have** a primary key;
* The attribute values of the primary key **cannot** be *null*.

---

# Table with a Primary Key

![](assets/relationalmodel/primarykey.png)

---

# Notation

Notation for primary keys (underlined):

.relational_example[
Relation (<u>primary key</u>, attribute 1, attribute 2, ..., attribute n)
]

Example for an employee:

.relational_example[
Employee (<u>id</u>, name [NN], address, telephone)
]

---

# Table with a Double Primary Key

![](assets/relationalmodel/doubleprimarykey.png)

---

# Unique Keys

 * Unique keys are **similar to primary keys** but **allow null** values.
 * A relation can have **several** unique keys.

---

# Table with a Unique Key

![](assets/relationalmodel/uniquekey.png)

---

# Notation

Notation for unique keys [UK]:

.relational_example[
Relation (<u>primary</u>, attribute 1 [UK], attribute 2, ..., attribute n)
]

Example for an employee:

.relational_example[
Employee (<u>id</u>, name [NN], address, telephone [UK])
]


---

# Foreign Keys

* An **attribute** (or set of attributes) that uniquely identifies a tuple of another, or the same, relation.
* They can be used to **cross-reference** relations.
* It is possible to use the values of attributes in the referenced relation to restrict the domain of one or more attributes in the referencing relation.

---

## Table with a Foreign Key

![](assets/relationalmodel/foreignkey.png)

The domain of the foreign key (column F) is the set of values of the primary key in the referenced table.

---

## Notation

Notation for foreign keys (# and arrow):

.relational_example[
Relation (<u>primary_key</u>, attribute, #foreign_key &rarr; Referenced Relation)
]


Example for an employee and a department:

.relational_example[
Employee (<u>id</u>, name [NN], telephone [UK], #num &rarr; Department)

Department (<u>num</u>, name [NN])
]

---

# Constraints
## Summary

* **Primary key** values **cannot be null**.
* **Key values** (primary and unique) **cannot have repeated** values.
* **Values** have to belong to the attribute **domain**.
* Attributes with a **not null** constraint **cannot have null** values.
* **Foreign key** attributes can **only** have values that **exist** in the primary key of the **referenced** relation.

---

template: inverse
name: operations
# Operations

---

# List of Operations

* **Insertion**: Inserts a new tuple into a relation.
* **Deletion**: Deletes one or more tuples from a relation.
* **Update**: Updates one or more tuples.

---

template: inverse
name: uml-to-mr

# UML to Relational

---

# Class

![](assets/uml/class.svg)

--

* A **relation** representing the class;
* A **derived** attribute can be omitted and calculated when needed;
* If no good candidate key exists, a **primary key** can be **created**.

.relational_example[
Person (<u>id</u>, birth_date, name, address, salary)
]

---

# Many-to-one Association (partial)

![](assets/uml/many-to-one-partial.svg)

--

* **Foreign key** from the **many** to the **one** side;
* **Can** have **null** values as an employee might not have a department.

.relational_example[
Employee (<u>id</u>, birth_date, name, address, salary, #num &rarr; Department)

Department (<u>num</u>, name)
]

---

# Many-to-one Association (total)

![](assets/uml/many-to-one-total.svg)

--

* **Foreign key** from the **many** to the **one** side;
* **Cannot** have **null** values as an employee must have a department.

.relational_example[
Employee (<u>id</u>, bdate, name, address, salary, #num &rarr; Department [NN])

Department (<u>num</u>, name)
]

---

# One-to-one Association (partial)

![](assets/uml/one-to-one-partial.svg)

--

* **Foreign key** from the **partial** to the **total** side;
* **Cannot** have **null** values as a passport must belong to someone;
* A **unique key** as every passport must belong to a different person.

.relational_example[
Person (<u>id</u>, birth_date, name, address)

Passport (<u>number</u>, date, #id &rarr; Person [UK,NN])
]

---

# One-to-one Association (total)

![](assets/uml/one-to-one-total.svg)

--

* **Foreign key** on **either** side;
* **Cannot** have **null** values as a person must have a passport;
* A **unique** key, as every passport must belong to a different person;
* Relations can be merged; both sides will have the same number of tuples.

.relational_example[
Person (<u>id</u>, birth_date, name, address, #number &rarr; Passport [UK,NN])

Passport (<u>number</u>, date)
]

---

# Many-to-many Association

![](assets/uml/many-to-many.svg)

--

* A **new relation** containing **foreign keys** pointing to **both** relations;
* A **primary key** is formed by **both** foreign keys.

.relational_example[
Book (<u>isbn</u>, title, date)

Author (<u>number</u>, name, nationality)

Wrote (<u>#isbn &rarr; Book</u>, <u>#number &rarr; Author</u>)

]

---

# Association Class

![](assets/uml/association-class.svg)

--

* Normally a **many-to-many** association;
* **Attributes** from the association class go to the **same relation** as the newly created foreign keys.

.relational_example[
Student (<u>number</u>, name)

Course (<u>code</u>, name, year)

Enrolled (<u>#number &rarr; Student</u>, <u>#code &rarr; Course</u>, grade)
]

---

# Aggregation

![](assets/uml/aggregation.svg)

--

* **One-to-many** relationship;
* The *whole* side has an **implicit** 0..1 cardinality (partial).

.relational_example[
Computer (<u>number</u>, location)

Part (<u>code</u>, name, type, #number &rarr; Computer)
]

---

# Composition

![](assets/uml/composition.svg)

--

* **One-to-many** relationship;
* The diamond side has an **implicit** 1 cardinality (total).

.relational_example[
Computer (<u>number</u>, location)

Part (<u>code</u>, name, type, #number &rarr; Computer [NN])
]

---

# Qualified Associations

![](assets/uml/qualified.svg)

--

* **Many-to-many** relationship (table with foreign keys and the attribute);
* The **primary key** ensures that each member can only be once in each club;
* The **unique key** ensures the unicity of the qualifier attribute.

.relational_example[
Club (<u>code</u>, title)

Member (<u>id</u>, name, address, phone)

Joined (<u>#code &rarr; Club</u>, <u>#id &rarr; Member</u>, number [NN]) 
{UK: code, number}
]

---

# Ternary Associations (\* \* \*)

![](assets/uml/ternary.svg)

--

* Similar to a **many-to-many** relationship; **all combinations** are possible.

.small.relational_example[
Team (<u>name</u>)

Season (<u>year</u>)

Player (<u>id</u>, name)

Played (<u>#name &rarr; Team</u>, <u>#year &rarr; Season</u>, <u>#id &rarr; Player</u>, minutes, goals)
]


---

# Ternary Associations (\* \* 1)

![](assets/uml/ternary-one.svg)

--

* The **primary key** ensures players can only play for only one team each season.

.small.relational_example[
Team (<u>name</u>)

Season (<u>year</u>)

Player (<u>id</u>, name)

Played (#name &rarr; Team, <u>#year &rarr; Season</u>, <u>#id &rarr; Player</u>, minutes, goals)
]


---

# Inheritance (method #1)

![](assets/uml/generalization.svg)

--

* **Some queries** will be **more complex** (e.g. name of all heart surgeons);
* No way to ensure **disjoint** generalization;
* Type attribute **optional**.

.small.relational_example[
Person (<u>num</u>, name, type)

Doctor (<u>#num &rarr; Person</u>, specialty)

Patient (<u>#num &rarr; Person</u>, insurance)

Appointment (<u>id</u>, #numd &rarr; Doctor [NN], #nump &rarr; Patient [NN], date)

]

---

# Inheritance (method #2)

![](assets/uml/generalization.svg)

* **Some queries** require **more work** (e.g. person named John);
* No way to ensure **disjoint** generalization;
* Can become **complex**, if the **generic** class has **many** attributes and associations.

.small.relational_example[
Doctor (<u>num</u>, name, specialty)

Patient (<u>num</u>, name, insurance)

Appointment (<u>id</u>, #numd &rarr; Doctor [NN], #nump &rarr; Patient [NN], date)

]

---

# Inheritance (method #3)

![](assets/uml/generalization.svg)

* Needs **extra code** to ensure an appointment is between a doctor and a patient, only doctors have a specialty and patients insurance;
* **Easy** to ensure **disjoint** generalization;
* Can become **complex** if **specialized** classes have **many** attributes and associations.

.small.relational_example[
Person (<u>num</u>, name, specialty, insurance, type)

Appointment (<u>id</u>, #numd &rarr; Person [NN], #nump &rarr; Person [NN], date)

]

---

# Inheritance (method #4)

![](assets/uml/generalization.svg)

* Same as previous but for **overlapping generalizations**.
* One boolean attribute **for each** specialized class.
* A person can be a doctor and a patient at the same time.

.small.relational_example[
Person (<u>num</u>, name, specialty, insurance, isdoctor, ispatient)

Appointment (<u>id</u>, #numd &rarr; Person [NN], #nump &rarr; Person [NN], date)

]

---

template: inverse
name: example

# Example

---

# Example

![](assets/uml/example.svg)

---

# Solution

.relational_example[
Specialty (<u>cod</u>, name)

Person (<u>num</u>, name, address)

Doctor (<u>#num &rarr; Person</u>, phone, #cod &rarr; Specialty)

Patient (<u>#num &rarr; Person</u>, birth_date)

Appointment (<u>id</u>, #numd &rarr; Doctor [NN], #nump &rarr; Patient [NN], date)

Laboratory (<u>name</u>, address)

Drug (<u>ref</u>, name, #lab &rarr; Laboratory [NN])

Prescribed (<u>#id &rarr; Appointment</u>, <u>#ref &rarr; Drug</u>, dosage)

Company (<u>name</u>)

Insurance (<u>#num &rarr; Patient</u>, <u>#company &rarr; Company</u>, number [NN])<br>{UK: company, number}

]


