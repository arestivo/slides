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
# Operating Systems
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Introduction](#intro)
1. [Services](#services)
]

---

template:inverse
name:intro
# Introduction

---

# Software Stack


![](assets/os/os-stack.svg)

---

# Hardware is Complicated

.small[
![](assets/os/os-motherboard.svg)
]

---

# Operating Systems as an Abstraction

The OS provides applications a virtual machine that is:

* Easier to use
* Hardware independent

*Example*: Linux works in all kinds of architectures, but for application developers and users it is virtually the same in every one.

---

# Operating System as a Resource Manager

* The OS manages the resources used by applications (CPU, memory, disk, network, ...).

* In multi-process systems there are many process asking for the same resources.

* The OS coordinates the usage of those resources both in time as in space.

* Applications cannot access resources directly.

---

# Kernel

* A low-level abstraction layer.
* The core of a computer's operating system.
* The first program loaded on start-up. 
* It handles the rest of start-up.
* It handles memory and peripherals.
* An application access to the kernel is called a system call.

---

template:inverse
name:services
# Operating System Services

---

# Program execution

The Operating System:

* Provides an interface between an application program and the computer hardware.
* Provides a set of services which simplify development and execution of application programs.

---

# Memory management

The Operating System:

* Is responsible for managing all system memory which is currently in use by programs.
* Ensures that a program does not interfere with memory already in use by another program.

---

# Multitasking

The Operating System:

* Enables multiple independent computer programs to run on the same computer giving the appearance that they are performing tasks at the same time.
* Generally done via time-sharing.

---

# File systems

The Operating System:

* Enables programs to access data stored on disks.

The specific way in which files are stored on a disk is called a file system.

---

# Networking

The Operating System:

* Enables programs to access several types of networking systems.
* Makes sure networking resources are shared between programs.

---

# Security

The Operating System:

* Must be capable of distinguishing between requests which should be allowed to be processed, and others which should not be processed.

---

# User interface

* Every computer that is to be operated by an individual requires a user interface. 
* The user interface is usually referred to as a shell and is essential if human interaction is to be supported.
* Most of the modern computer systems support graphical user interfaces.
