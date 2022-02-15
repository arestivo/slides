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
# Memory Management
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Physical Addresses](#physical)
1. [Logical Addresses](#logical)
1. [Virtual Addresses](#virtual)
1. [Process Memory](#process)
1. [Memory In C++](#cpp)
]

---

template:inverse
name:intro
# Introduction

---

# Memory


* Memory is not infinite.
* There is a hierarchy:
  * Cache: Volatile, Limited size, Expensive, Temporary use, Very fast...
  * Primary: Volatile, Fast, ...
  * Secondary: Non-volatile, slow, cheap, ...
* The memory management function of the OS creates an abstraction
that simplifies the usage of memory.
![](../assets/memory/memory.svg)

---

# Word Size

* The number of binary digits that a CPU can process at one time.
* In modern computers also the size of the address space.
* For example: a **byte**-addressable **32-bit** computer can address: 2<sup>32</sup> bytes of memory (4GiB).

---

template:inverse
name:physical
# Physical Addresses

---

# Physical Address

* Each physical memory location has an address.
* Physical addresses start at zero.
* Example for a 32-bit computer with 16MiB of memory:

![](../assets/memory/addresses.svg)

---

# Single Contiguous Allocation

* The simplest memory management technique. 
* All the memory is available to a **single** application.
* With the exception of a small portion reserved for the operating system.
* Examples: MS-DOS, Embedded Systems, ...

![](../assets/memory/single.svg)

---

# Multitasking

* With a single CPU, only one task (process) is said to be running at any point in time. 
* Multitasking solves the problem by scheduling which task is running at any given time.
* Reassigning a CPU from one task to another one is called a **context switch**.
* Parallelism is achieved when context switches occur frequently enough.

---

# Static Relocation

* In a single contiguous allocation enviroment, the CPU is forced to swap the memory contents every time a context switch occurs.
* A better solution is to allocate a part of the memory to each process.
* Access to the memory is protected using *base* and *limit* registers (hardware protection): base &leq; address < base + limit.

![](../assets/memory/multiple.svg)

---

template:inverse
name:logical
# Logical Addresses

---

# Address Binding

When code is compiled from a high level language into machine code, the address of variables can be bound to:
* **Absolute** addresses (if we know where a process will be located in memory). 
* **Relocatable** addresses (if we want to be able to have the process in any memory location).

---

# Logical Addresses

Address binding is the process of translating logical addresses into their corresponding physical addresses:

![](../assets/memory/logical.svg)

* Address relocation: physical = logical + base
* Memory protection: base &leq; physical < base + limit

---

# Swapping

Sometimes there is not enough space to keep all processes in memory at the same time.

Swapping is a mechanism in which a process can be swapped temporarily out of main memory to secondary storage (disk) and make that memory available to other processes.

![](../assets/memory/swapping.svg)

---

# Fragmentation

The problem of having contiguous memory allocation is that as processes are swapped in and out of memory, the memory becomes fragmented:

![](../assets/memory/fragmentation.svg)

Fragmentation can be fixed by using a memory compaction technique.

---

template:inverse
name:virtual
# Virtual Addresses

---

# Virtual Memory

Gives the illusion of access to a larger memory space than exists by storing part of the process data into secondary storage.

![](../assets/memory/virtual.svg)

---

# Paging

Most virtual memory systems are implemented using a memory management technique called paging:

.pull-left[
* The process address space is broken into blocks of the same size called pages.
* The main memory is divided into small fixed-sized blocks of memory called frames (usually the same size as a page).
* At any given time, pages can be loaded into memory or stored in secondary storage.
]

.pull-right[
![](../assets/memory/paging.svg)
]

---

# Advantages

* Simple to implement.

* Paging reduces fragmentation.

* Paging is an efficient memory management technique.

* Due to equal size of the pages and frames, swapping becomes very easy.

---

# Page Tables

* A virtual address is composed by a page number and an offset.
* A physical address is composed by a frame number and an offset.

![](../assets/memory/page-frame.svg)

* From the standpoint of the process, memory is contiguous.
* Page tables are used to translate the virtual addresses seen by the application into physical addresses used by the hardware.

---

# Thrashing

* If the working set of a program or a workload cannot be effectively held within physical memory, then constant data swapping, i.e., thrashing, may occur.
* Thrashing is a state in which the CPU performs *productive* work less, and *swapping* more.
* The CPU is busy in swapping pages so much that it can not respond to user programs as much as required. 

---

template:inverse
name:process
# Process Memory

---

# Heap and Stack

* Stack (Local variables, return addresses and parameters).
* Heap (Dynamically allocated memory).
* Good idea to allocate extra space to allow program growth.

![](../assets/memory/process.svg)

---

# Multiple Instances

Program and data can be separated in memory making it easier to have multiple instances of the same program.

![](../assets/memory/multiprocess.svg)

---

template:inverse
name:cpp
# Memory In C++

---

# C++ Variables

* Two types of variables: statically and dynamically allocated
* **Statically** allocated variables are stored in the **stack**.
* **Dinamically** allocated variables are stored in the **heap**.
* Dinamically allocated variables are created using: malloc and new.

---

# The Stack

* When variables in the stack are no longer needed, they are **automatically** deallocated.
* Allocation can be predetermined at compile time.
* Allocation much **faster** than in the heap.
* Implemented using a stack (LIFO).
* Used to store **local** variables, return addresses and parameters.
* Can cause a **stackoverflow** when the stack limit is reached.
* Can be used without using pointers.
* Use if you **know** exactly how much memory you need to allocate at compile time and it is **not a lot**.

---

# The Heap

* Variables in the heap must be **manually** deallocated.
* Memory is allocated using: new, new[] ou malloc.
* Memory is freed using: delete, delete[] ou free.
* Allocation much **slower** than in the stack.
* Can suffer **fragmentation**.
* Use if you **do not know** exactly how much memory you need to allocate at compile time or if you need a **lot**.
* Responsible for **memory leaks**.

---

# Syntax

C / C++ (cstdlib)

```c
void* malloc (size_t size);
void* realloc (void* ptr, size_t size);
void free (void* ptr);
```

C++

```c
void* operator new (std::size_t size) throw (std::bad_alloc);
void* operator new[] (std::size_t size) throw (std::bad_alloc);
void operator delete (void* ptr);
void operator delete[] (void* ptr);
```


---

# Examples
```c
int *data;

data = (int*) malloc(4 * sizeof(int));

/* we need more space after all */
data = (int*) realloc(data, 5 * sizeof(int));

/* do stuff with data */

free(data);
```

New C++ Operators:

```cpp
int *data;

data = new int[3];
delete[] data;
```

```cpp
int *data;

data = new int;
delete data;
```


---

# Static Alocation

```cpp
void main() {
  int a[4];

  for (int i = 0; i < 4; i++)
    cin >> a[i]; // reads from stdin values: 1 3 5 7
}
```

.large[
![](../assets/memory/static.svg)
]

---

# Dynamic Alocation

```cpp
void main() {
  int n, *a;
  
  cin >> n; // number of values to read: 3 
  a = (int *) malloc(n * sizeof(int)) ;

  for (int i = 0; i < n; i++)
    cin >> a[i]; // reads from stdin values: 1 3 5

  free(a);
}
```

.large[
![](../assets/memory/dynamic.svg)
]

---

# Passing by Value

```cpp
int sum(int a, int b) {
  return a + b;
}

void main() {
  int x, y;
  cin >> x >> y; // reads from stdin values: 2 3 
  int z = sum (x, y);
}
```

.small[
![](../assets/memory/byvalue.svg)
]

---

# Passing by Pointer

```cpp
void sum(int a, int b, int* c) {
  *c = a + b;
}

void main() {
  int x, y, z;
  cin >> x >> y; // reads from stdin values: 2 3 
  sum (x, y, &z);
}
```

![](../assets/memory/bypointer.svg)

---

# Passing by Reference

```cpp
void sum(int a, int b, int &c) {
  c = a + b;
}

void main() {
  int x, y, z;
  cin >> x >> y; // reads from stdin values: 2 3 
  sum (x, y, z);
}
```

![](../assets/memory/byreference.svg)

---

# Passing by Reference and Pointer

```cpp
void create_array (int s,int* &b){
  b = (int *) malloc(s * sizeof(int));
}

void main() {
  int s, *a;
  cin >> s; // reads 3 
  create_array(s, a);
  free(a);
}
```

.large[
![](../assets/memory/byreferencepointer.svg)
]

