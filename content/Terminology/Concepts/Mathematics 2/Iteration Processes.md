---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Related Terminology: 
Related Courses: ["[[Mathematics 2]]"]
---
**Iteration Processes** are processes in which each term arises by multiplying its predecessor with a fixed number $r$. 

More general iteration processes are obtained by 

$$
t_{n+1}=f(t_n)
$$

where the function $f(t)$ describes how a **state** $t_{n+1}$ is derived from its predecessor $t_n$. 

In particular, we consider the linear iteration process and the logistic iteration process

#### Linear Iteration Process
A linear iteration process is a process in the form of 

$$
t_{n+1}=at_n+b
$$

There is a linear relation between $t_n$ and $t_{n+1}$

The behaviour of an iteration process is strongly dependent on its initial state. 

>[!Example]
>Take the iteration process $t_{n+1}=1.5t_n-1$. For $t_0=4$, the sequence $t_0, t_1, t_2, t_3, \dots$ goes to $\infty$ and for $t_0=1$ it decreases to $-\infty$.

For the iteration process above, the division between decreasing and increasing sequences lies at $t_0=2$. For this initial state we find $t_1=2, t_2=2, t_3=3$ and so on. If we start at this point the state remains the same. Therefore, the state $\underline{t}=2$ is called the **steady state** of this iteration process. Because the sequences $t_0, t_1, t_2, t_3, \dots$ move away from the steady state for any initial state $t_0 \neq \underline{t}$, the steady state is called **unstable**. When the sequences $t_0, t_1, t_2, t_3, \dots$ converge towards the steady state $\underline{t}$ we call this steady state **stable**

#### General Iteration Processes: Steady States and their Stability
In the graph, steady states are the intersection points of the model curve $y=f(x)$ with the auxiliary line $y=x$. $\underline{t}$, then, is a steady state for $f(\underline{t})=\underline{t}$. 

>[!Example]
>We compute the steady state of the linear iteration process used previously: $t_{n+1}=1.5t_n-1$. 
>
>$$
>\underline{t}=1.5\underline{t}-1 \Rightarrow 0=0.5\underline{t}-1 \Rightarrow \underline{t}=2
>$$
>
>This result agrees with the value we found previously

A steady state to which sequences converge is called **stable** or **attracting**; a steady state from which sequences diverge is called **unstable** or **repelling** (as discussed above).

Whether a steady state is stable or unstable depends on the derivative of $f(x)$. A steady state $\underline{t}$ of the iteration process $t_{n+1}=f(t_n)$ is
- stable if $-1 \lt f'(t) \lt 1$
- unstable if $-1 \gt f'(t) \gt 1$

#### The Logistic Iteration Process
A logistic iteration process has the form of 

$$
t_{n+1}=k(a-t_n)t_n
$$

with positive parameters $k$ and $a$. The (constant) factor $r$ in the linear iteration process is replaced by the factor $k(a-t_n)$, which depends on $t_n$. For $t \approx 0$, we have $k(a-t_n) \approx ka$, and the iteration process strongly resembles a linear process. As $t_n$ increases, the factor $k(a-t_n)$ decreases, and for $t_n \gt a$ it even becomes negative

By scaling the process, we may restrict ourselves to the case $a=1$:

$$
t_{n+1}=k(1-t_n)t_n
$$

Like for the linear iteration process, the consecutive states can be calculated easily. The same goes for the steady states