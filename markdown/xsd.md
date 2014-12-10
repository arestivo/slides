name: inverse
layout: true
class: center, middle, inverse
.indexlink[[<i class="fa fa-home"></i>](#) [<i class="fa fa-list"></i>](#index)]

---

name: normal
layout: true
class: left, middle
.indexlink[[<i class="fa fa-home"></i>](#) [<i class="fa fa-list"></i>](#index)]

---

template:inverse
# XSD
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Elements](#elements)
1. [Simple Types](#simple)
1. [Complex Types](#complex)
1. [References](#references)
1. [Keys](#keys)
1. [Namespaces](#namespaces)
]

---

template: inverse
name:intro
# Introduction

---

# XSD

**X**ML **S**chema **D**efinition (XSD)

* W3C's recommendation to replace DTD.
* An XML based annotation language to **formally** describe the elements in an XML document.

---

# Schema Location

The ```xsi:schemaLocation``` and ```xsi:noNamespaceSchemaLocation``` attributes can be used 
in a document to provide **hints** as to the **physical** location of schema documents which can 
be used for **assessment**.

An example XSD:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema
  xmlns:xs="http://www.w3.org/2001/XMLSchema" >
  <xs:element name="person" type="xs:string"/>
</xs:schema>
```

An example XML conforming to the XSD:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<person xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="person.xsd">John Doe</person>
```

---

template:inverse
# Resources

* W3 Specification:
  * Structures: http://www.w3.org/TR/xmlschema11-1/
  * Data Types: http://www.w3.org/TR/xmlschema11-2/

---

template:inverse
name:elements
#Elements

---

#Elements

* The ```<element>``` declaration contains the definition of an XML element.
* Elements have a **name** and a **type**.
* The **name** defines the **tag** used to represent the element.
* The **type** defines the possible values, children and attributes.
* Types can be either **simple** or **complex**.

```xml
<xs:element name="name" type="xs:string"/>
```

---

template:inverse
name:simple
#Simple Types

---

#Simple Types

* Simple types describe values not structured by XML markup.
* They can be used as content or in attributes.
* XSD has a library of [built-in](http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/datatypes.html#built-in-datatypes) simple types.

```xml
<xs:element name="name" type="xs:string"/>
```

```xml
<name>John Doe</name>
```

---

# Restrictions

* Simple types can be **derived** by **restriction**.
* The **base** type must be a simple type.
* The **derived** type will be a simple type.
* All simple types form a **tree**, rooted at the ```anySimpleType```.

---

# Facets

* Restrictions are based on **facets**.
* Each restriction can have **zero or more** facets.
* The specification defines 12 different facets: ```length```, ```minLength```, ```maxLength```, ```pattern```, ```enumeration```, ```whiteSpace```, ```maxInclusive```, ```maxExclusive```, ```minExclusive```, ```minInclusive```, ```totalDigits```, ```fractionDigits```.
* Each built-in simple type allows only [some facets](http://www.w3.org/TR/xmlschema-0/#SimpleTypeFacets).

```xml
<xs:simpleType name="personName">
  <xs:restriction base="xs:string">
    <xs:pattern value="[a-zA-Z ]+"/>
  </xs:restriction>
</xs:simpleType>

<xs:element name="name" type="personName"/>
```

```xml
<name>John Doe</name>
```

---

# Union

The union element defines a simple type as a collection of values from specified simple data types.


```xml
<xs:simpleType name="size">
  <xs:union memberTypes="sizebynumber sizebyname" />
</xs:simpleType>

<xs:simpleType name="sizebynumber">
  <xs:restriction base="xs:positiveInteger">
    <xs:maxInclusive value="20"/>
  </xs:restriction>
</xs:simpleType>

<xs:simpleType name="sizebyname">
  <xs:restriction base="xs:string">
    <xs:enumeration value="small"/>
    <xs:enumeration value="medium"/>
    <xs:enumeration value="large"/>
  </xs:restriction>
</xs:simpleType>

<xs:element name="size" type="size"/>
```

---

# List 

List types define a whitespace-separated list of values.

```xml
<xs:simpleType name="sizeList">
  <xs:list itemType="size"/>
</xs:simpleType>

<xs:simpleType name="threeSizes">
  <xs:restriction base="sizeList">
    <xs:length value="3"/>
  </xs:restriction>
</xs:simpleType>

<xs:element name="sizes" type="threeSizes"/>

```

```xml
<sizes>12 small 15</sizes>
```

---

# Anonymous Types

The type of an element can be directly defined inside the element declaration.

```xml
<xs:element name="size"/>
  <xs:simpleType>
    <xs:union memberTypes="sizebynumber sizebyname" />
  </xs:simpleType>
</xs:element>
```

```xml
<size>15</size>
```

```xml
<size>small</size>
```


---

template:inverse
name:complex
#Complex Types

---

# Complex Types

* The definition of a complex type starts with the element ```<complexType>```.
* Complex types can **contain** other **elements** and **attributes**.
* To define the way those child elements are allowed to appear we use the ```<sequence>```, ```<all>``` and ```<choice>``` group elements.

```xml
<xs:element name="person">
    <xs:complexType>
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:sequence>
    </xs:complexType>
</xs:element>
```

```xml
<person>
  <name>John Doe</name>
  <email>john.doe@gmail.com</email>
</person>
```

---

# Sequence

The ```<sequence>``` element specifies that the child elements **must** appear in a specific sequence.

```xml
<xs:element name="person">
    <xs:complexType>
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:sequence>
    </xs:complexType>
</xs:element>
```

Not valid:

```xml
<person>
  <email>john.doe@gmail.com</email>
  <name>John Doe</name>
</person>
```

---

# All

The ```<all>``` element specifies that the child elements **can** appear in any order.

```xml
<xs:element name="person">
    <xs:complexType>
    <xs:all>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:all>
  </xs:complexType>
</xs:element>
```

Valid:

```xml
<person>
  <email>john.doe@gmail.com</email>
  <name>John Doe</name>
</person>
```

---

# Choice

The ```<choice>``` element specifies that only **one** child element can occur:

```xml
<xs:element name="person">
    <xs:complexType>
    <xs:choice>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:choice>
    </xs:complexType>
</xs:element>
```

Valid:

```xml
<person>
  <name>John Doe</name>
</person>
```

```xml
<person>
  <email>john.doe@gmail.com</email>
</person>
```

---

# Occurrence Indicators

* The **minOccurs** and **maxOccurs** attributes specify the number of times each element can appear.
* The **default** value for both attributes is **1**.
* The **maxOccurs** attribute can have a value of **unbounded** (unlimited).
* The **minOccurs** attribute can have a value of **0** (optional).
* These attributes can be applied to ```<elements>```, ```<sequence>```, ```<all>``` and ```<choice>``` elements.

.box_info[In XSD 1.0 the maxOccurs attribute of elements inside an all group was always 1. This restriction was lifted in XSD 1.1]

---

# Example

```xml
<xs:element name="group">
    <xs:complexType>
    <xs:sequence maxOccurs="unbounded">
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string" maxOccurs="unbounded"/>
    </xs:sequence>
    </xs:complexType>
</xs:element>
```

```xml
<group>
  <name>John Doe</name>
  <email>john.doe@gmail.com</email>
  <email>john.doe@example.com</email>
  <name>Jane Doe</name>
  <email>jane.doe@gmail.com</email>
</group>
```

---

# Group Element Nesting

Group elements can be nested to create more complex groupings.

```xml
<xs:element name="group">
    <xs:complexType>
    <xs:sequence>
      <xs:element name="person" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:choice>
              <xs:element name="phone" type="xs:string"/>
              <xs:element name="email" type="xs:string"/>
            </xs:choice>
            </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
    </xs:complexType>
</xs:element>
```

---

# Named Types

Complex types can be reused by giving them a **name** and **referencing** them from elements.

```xml
<xs:element name="group" type="groupType"/>

<xs:complexType name="groupType">
  <xs:sequence>
    <xs:element name="person" type="personType" maxOccurs="unbounded"/>
  </xs:sequence>
</xs:complexType>

<xs:complexType name="personType">
  <xs:sequence>
    <xs:element name="name" type="xs:string"/>
    <xs:choice>
      <xs:element name="phone" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:choice>
  </xs:sequence>
</xs:complexType>
```

---

# Mixed

By **default**, complex elements **cannot** contain **text** (only other elements).

A mixed complex type element can contain attributes, elements, and **text**.

```xml
<xs:element name="person" type="personType"/>

<xs:complexType name="personType" mixed="true">
  <xs:sequence>
    <xs:element name="name" type="xs:string"/>
    <xs:choice>
      <xs:element name="phone" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
    </xs:choice>
  </xs:sequence>
</xs:complexType>
```

```xml
<person>
  My name is <name>John Doe</name> and my email 
  is <email>john.doe@gmail.com</email>.
</person>
```

---

# Attributes

Complex Types can have attributes. The type of an attribute is always a simple type.

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:attribute name="id" type="xs:integer"/>
    <xs:attribute name="name" type="personName"/>
  </xs:complexType>
</xs:element>
```

Attributes can have default or fixed values.

```xml
<xs:attribute name="lang" type="xs:string" default="en"/>
```

By default they are optional but can be made mandatory.

```xml
<xs:attribute name="lang" type="xs:string" use="required"/>
```

---

# Any

We can use the ```<any>``` and ```<anyAttribute>``` elements to allow elements and attributes in complex types not defined in the XSD. 

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:choice>
        <xs:element name="phone" type="xs:string"/>
        <xs:element name="email" type="xs:string"/>
      </xs:choice>
      <xs:any minOccurs="0"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:integer"/>
    <xs:anyAttribute/>
  </xs:complexType>
</xs:element>
```

---

# Extensions

* Allow the extension of ```complexTypes```.
* Have to be used inside ```simpleContent``` and ```complexContent``` elements
* This allows a more **object-oriented** approach to the type system.

---

# Simple Content

The ```simpleContent``` element enables you to specify an element as containing a 
```simpleType``` with no elements but enables you to ***restrict*** the value of the element's 
content or ***extend*** the element with attributes.

```xml
<xs:element name="name">
  <xs:complexType>
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute name="type">
         <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="given"/>
            <xs:enumeration value="family"/>
          </xs:restriction>
         </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:element>
```

```xml
<name type="given">John</name>
```

---

# Complex Content

Contains **extensions** or **restrictions** on a **complex type** that contains mixed content or elements only.

```xml
<xs:complexType name="personType">
  <xs:sequence>
    <xs:element name="name" type="xs:string"/>
    <xs:element name="email" type="xs:string"/>
  </xs:sequence>
</xs:complexType>

<xs:complexType name="studentType">
  <xs:complexContent>
    <xs:extension base="person">
      <xs:sequence>
        <xs:element name="number" type="xs:integer"/>
        <xs:element name="course" type="xs:string"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="student" type="studentType" /> 
```

---

# Complex Content


```xml
<student>
  <name>John Doe</name>
  <email>john.doe@gmail.com</email>
  <number>1234</number>
  <course>MIEIC</course>
</student>  
```

---

template:inverse
name:references
# References

---

template:inverse
name:keys
# Keys

---

template:inverse
name:namespaces
# Namespaces

