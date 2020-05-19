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
# Property Based Testing
## Using jqwik for Java
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a> /
<a href="http://hugosereno.eu">Hugo Sereno</a>

---

template: inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
2. [jqwik](#jqwik)
]

---

template: inverse
name:intro
# Introduction

---

template: inverse
name:intro
# jqwik

---

# Gradle

To use jqwik, you just need to add the following to your build.gradle:

```
test {
    useJUnitPlatform {
        includeEngines 'jqwik'
    }

    include '**/*Test.class'
}

dependencies {
    testCompile group: 'net.jqwik', name: 'jqwik', version: '1.2.7'
}
```

**Notice** that we are defining that our tests are inside classes with a name ending in **Test**.

---

# Properties

To define a **property**, we just need to add the .inline-code[@Property] **annotation** to our test:

```java
class TestNumbers {
  @Property
  public void testSumAssociativity(@ForAll int a, @ForAll int b, @ForAll int c) {
    assert((a + b) + c == a + (b + c));
  }
}
```

Notice that our test receives **three parameters** (a, b, and c) and that we are saying that the property
should **hold for all** possible values using the .inline-code[@ForAll] annotation.

---

# Parameter Generation

**jqwik** is capable of generating parameters for a **wide range of types**: Strings, all kinds of numerical types, booleans, characters, Lists, Sets, Streams, Arrays, ...

Here we are testing if reversing any integer list twice results in the same list:

```java
@Property
public void testDoubleReverse(@ForAll List<Integer> list) {
  assert(reverseList(reverseList(list)).equals(list));
}

public <T> List<T> reverseList(List<T> list) {
  ArrayList<T> reversed = new ArrayList<>();

  for (T e : list) reversed.add(0, e);

  return reversed;
}
```

---

# Constraining Parameters

Sometimes we want to constrain the generated parameters. For example, the following test:

```java
@Property
public void testReverseChangesList(@ForAll List<Integer> list) {
  assert(!reverseList(list).equals(list));
}
```

Does not hold for some lists (*e.g.*, empty and single-element), so we can use the .inline-code[@Size] annotation to constrain the generated lists:

```java
@Property
public void testReverseChangesList(@ForAll @Size(min = 2) List<Integer> list) {
  assert(!reverseList(list).equals(list));
}
```

There are still some edges cases that will not hold, can you find them?

---

# Constraining Parameters

There are several types of constraints that can be applied:

* .inline-code[@WithNull(value = 0.1)] If we want to generate null values, value is the percentage of null values to generate.
* .inline-code[@Unique] Prevents repeated values in a list.
* .inline-code[@StringLength(value = 0, min = 0, max = 0)] A fixed size string or between min and max characters.
* .inline-code[@Chars(value = {})], .inline-code[@CharRange(from = 0, to = 0)], .inline-code[@NumericChars], .inline-code[@LowerChars], .inline-code[@UpperChars], .inline-code[@AlphaChars], .inline-code[@WhiteSpace] Several ways to constraint character generation.
* .inline-code[@NotEmpty], .inline-code[@Size(value = 0, min = 0, max = 0)] To constraint the size of generated lists.
* .inline-code[@Positive], .inline-code[@Negative], .inline-code[@IntRange(min = 0, max)], .inline-code[@DoubleRange(min = 0.0, max)], ... To constraint generated numbers.

---

# Constraining Parameterized Types

If we want to constrain the generation of **contained parameter types** we can annotate the parameter type **directly**:

```java
@Property
public void testListSumPositive(@ForAll @NotEmpty List<@Positive Integer> list) {
  assert(sum(list) > 0);
}

private int sum(List<Integer> list) {
  int sum = 0;
  for (int e : list) sum += e;
  return sum;
}
```

This property does not hold, why? Also, try fixing the .inline-code[testReverseChangesList()] test.

---

# Arbitrary

If the default generators are not enough, we can use the .inline-code[@Provide] annotation and .inline-code[Arbitrary] class to create new generators:

```java
@Property void testWithPrimes(@ForAll("primeNumbers") int prime) {
  // do some testing using prime
}

@Provide
Arbitrary<Integer> primeNumbers() {
  return Arbitraries.integers().greaterOrEqual(2).filter(n -> isPrime(n));
}

private boolean isPrime(Integer n) {
  for(int i=2;i<=Math.sqrt(n);i+=2)
    if(n%i==0) return false;
  return true;
}
```

With arbitraries we can generate .inline-code[integers()], .inline-code[strings()], ... which we can then restrict using functions like .inline-code[filter(f)], .inline-code[map(f)], .inline-code[greaterOrEqual(n)], .inline-code[alpha()], .inline-code[numeric()], .inline-code[ofLength(n)], ...

---

# Combining Arbitraries

We can even combine *arbitraries* using the .inline-code[combine] and .inline-code[as] methods, sprinkled with some Java lambda magic:

```java
@Property void testWithPlates(@ForAll("carPlates") String plate) {
  // do some testing using plate
}

@Provide
Arbitrary<String> carPlates() {
  return Combinators.combine(
    Arbitraries.strings().alpha().ofLength(2),
    Arbitraries.strings().numeric().ofLength(2),
    Arbitraries.strings().numeric().ofLength(2)
  ).as((s1, s2, s3) -> s1.toUpperCase() + "-" + s2  + "-" + s3);
}
```

---

#Output

The result of a test in jqwik looks something like these:

```
                              |-------------------jqwik-------------------
tries = 1000                  | # of calls to property
checks = 1000                 | # of not rejected calls
generation-mode = RANDOMIZED  | parameters are randomly generated
after-failure = PREVIOUS_SEED | use the previous seed
seed = 529692752344469023     | random seed to reproduce generated values
```

In this report we can see the number of test runs for this property (.inline-code[tries]), number of calls that were not rejected (.inline-code[checks]), how values were generated (.inline-code[generation-mode]), if we should keep using the same seed if a property check fails (.inline-code[after-failure]), and which seed was used (.inline-code[seed]). 

---

# 