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
# Unit Testing
## For Java, Using JUnit
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
2. [Unit Testing](#unit-testing)
3. [JUnit](#junit)
4. [Mockito](#mockito)
5. [Test Coverage](#coverage)
6. [Mutation Testing](#mutation)
]

---

template: inverse
name:intro
# Introduction

---

# Software Testing

A **process** to evaluate the **quality** and **functionality** of a software system:

* Does the software meet the specified **requirements**, both **functional** and **non-functional**?

* Are there any **defects** (aka bugs)?

Software testing comes in **many forms** and can be done at **different levels** of the software development cycle.

---

# Automated Testing

Traditional software testing was done by **deploying** your application to a **test environment** and **manually** performing **black-box** tests. For example, by **clicking** through the **user interface** to find if something was **broken**.

Automated testing is a **technique** where the **tester/developer** writes **scripts** to test and compare the **actual** outcome with the **expected** outcome.

---

# Black-box vs. White-box

In **black-box** testing, the actual **internal** structure of the item being tested is **unknown** or **not taken into consideration**.

![](../assets/unit-testing/black-white-box.svg)

In **white-box** testing, the design of the test cases is **based** on the **internal structure** of the system being tested, so that the **maximum number** of different **code paths** are **covered**.

---

# Testing Levels

* **Unit Testing** - testing **individual units** of a software system in order to validate if they perform as designed.

* **Integration Testing** -	**individual units** are **combined** and tested **as a group** in order to expose faults in the **interaction** between them.

* **System Testing** -  the **complete software system** is **deployed** and **tested** to evaluate its **compliance** with the specified **requirements**.

* **Acceptance Testing** - the complete system is tested for acceptability to evaluate if it is compliant with the business requirements and acceptable for delivery.

---

# Testing Types

* **Smoke** - ensure that the **most important** features work.
* **Functional** - verify if **functional requirements** are met.
* **Usability** - verify if the system is easily **usable** by end-users.
* **Security** - uncover **vulnerabilities** of the system.
* **Performance** - test the **responsiveness** and **stability** of the system under a certain **load**.
* **Regression** - ensure that **previously** developed and tested software still performs after a **change**.
* **Compliance** - determine the **compliance** of a system with any **standards**.

---

template: inverse
name:unit-testing
# Unit Testing

---

# Unit Testing

Testing **individual units** of a software system in order to **validate** if they perform as designed.

There are several **advantages** to unit tests:

* Increases **confidence** in **changing**/**maintaining** code.
* In order to make unit testing **possible**, codes need to be **modular**, which makes them more **reusable**. Good unit testing **promotes** good code.
* Development becomes **faster** as the whole system does not need to be started to test newly written code.
* When a test fails we know **which unit** is the **culprit**.

---

# F.I.R.S.T.

The [F.I.R.S.T.](https://github.com/ghsukumar/SFDC_Best_Practices/wiki/F.I.R.S.T-Principles-of-Unit-Testing) principles of unit testing:

* **Fast** - Units tests should be **fast** so we can run them often.
* **Isolated** / **Independent** - Only test **one unit** at a time. Only test **one thing** at a time. **Order** of tests should **not matter**. 
* **Repeatable** - Results should be deterministic and not depend on the environment (time, available data, random values, ...).
* **Self-validating** - No manual checking necessary.
* **Thorough** / **Timely** - Cover every **use case** scenario (different from 100% code coverage). Test for **corner cases**, **large** data sets, **different** roles, **illegal** arguments and **bad** inputs...
  
---

# The 3 As

A unit test should be divided into **three** different parts:

* Arrange - Where the test is **setup** and the data is **arranged**.
* Act - Where the the actual method under test is **invoked**.
* Assert - Where a **single logical assert** is used to test the outcome.

**Helper** classes can be used to **setup** data to be **reused** in **several** tests cases. 

---

# Test Doubles

Test doubles are pretend objects that help reduce complexity and verify code independently from the rest of the system. They come in many [flavours](https://martinfowler.com/articles/mocksArentStubs.html):

* **Dummy** - never actually used; just to fill parameter lists.

* **Fake** - working implementations, but not suitable for production.

* **Stubs** - provide canned answers to calls made during the test.

* **Spies** - stubs that also record some information based on how they were called. 

* **Mocks** - pre-programmed with expectations which form a specification of the calls they are expected to receive.

---

# State vs. Behavior Testing

* **State Testing**: determine whether the exercised method worked correctly by examining **the state** after the method was exercised.

* **Behavior Testing**: specify **which methods** are to be invoked, thus verifying not that the ending state is correct, but that the **sequence of steps** performed was **correct**.

**Mocks** are used for **behavior** testing.

---

template: inverse
name:junit
# JUnit

---

# JUnit

**JUnit** is a **testing framework** for **Java** specialized in **unit tests**.

A **JUnit** test is a **method** contained in a **class** which is **only used** for **testing**.

**JUnit** tests most have the **@Test** annotation.

A simple test class looks like this:

```java
import org.junit.Test;

public class TestDog {
    @Test
    public void testDogName() {
        Dog dog = new Dog("Max");
        
        assertEquals("Max", dog.getName());
    }
}
```

---

# Asserts

**JUnit** provides a series of **assert methods** to help test for certain **conditions**:

* **fail**([message]) - Fails the test.
* **assertTrue**([message,] condition)
* **assertFalse**([message,] condition)
* **assertEquals**([message,] expected, actual)
* **assertEquals**([message,] expected, actual, tolerance)
* **assertNull**([message,] object)
* **assertNotNull**([message,] object)
* **assertSame**([message,] expected, actual)
* **assertNotSame**([message,] expected, actual)

Message is an **optional message** specifying why the test failed.

---

# Set Up and Tear Down

---

template: inverse
name:mockito
# Mockito

---

# Mockito

---

template: inverse
name:coverage
# Test Coverage

---

# Test Coverage

---

template: inverse
name:coverage
# Mutation Testing

---

# Mutation Testing