---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
### 2.1 Sequences and Series
#### 2.1.1 Sequences
In many areas of science, [[Sequences]] of numbers are used. The individual numbers in the sequence are called **terms**; the first term is denoted by $t_1$, the second by $t_2$, and the nth by $t_n$. An (infinite) sequence thus consists of the terms: 

$$
t_1, t_2, t_3, \dots, t_n, \dots
$$

Where the $\dots$ at the end indicate that the sequence is infinite

It is impossible to infer unambiguously from the first few terms of a sequence what the following terms will be. But if we think that we recognise a pattern, we can try to make a prediction. 

>[!Example]
>The sequence $1, 4, 9, 16, 25, \dots$ is found. We may suppose that the nth term will be $t_n=n^2$

A sequence that has many applications is the [[Geometric Sequence]]. It has the form 

$$
t_1=a, t_2=ar, t_3=ar^2, t_3=ar^3, \dots
$$

The nth term is given by $t_n=ar^{n-1}$. Each new term of a geometric sequence arises by multiplying its predecessor by a (constant) factor $r$, so 

$$
t_n=rt_{n-1}
$$

The factor $r$ is called the **common ratio** of the geometric sequence

Worded differently, a sequence is a geometric sequence if the quotient of two consecutive terms is constant:

$$
t_n / t_{n-1}=r
$$

>[!Example]
>If the terms $1, \frac12, \frac14, \frac18, \frac{1}{16}, \dots$ form the beginning of a geometric sequence, then $a=1$ and $r=\frac12$. The nth term is then given by $t_n=\left(\frac12 \right)^{n-1}$

An important reason to consider infinite sequences is the behaviour of the sequence "towards infinity". A sequence can have a **limit**. 

>[!Important]
>If a sequence has a limit for $n \to \infty$, it is called **convergent**. If a sequence does not have a limit, it is said to be **divergent**
>
>Geometric sequences have limits (and are therefore convergent) for $-1 \lt r \le 1$ and do not have limits (and are therefore divergent) for any other $r$

>[!Example]
>The sequence $\frac12, \frac23, \frac34, \frac45, \dots, \frac{n}{n+1}, \dots$ has a limit of $1$, and is therefore convergent
>
>The sequence $1, 2, 3, 4, \dots, n, \dots$ has no limit, so it is divergent
>
>The sequence $1, -1, 1, -1, 1, -1, \dots$ also has no limit, so it is divergent

>[!Example]
>For $a=1$ amd $r=\frac12$ we find a convergent sequence with limit $0$
>
>$$
>t_1=1, t_2=\frac12, t_3=\frac14, t_4=\frac18, \dots
>$$
>
>For $a=1$ and $r=-2$ we obtain a divergent sequence with no limit
>
>$$
>t_1=1, t_2=-2, t_3=4, t_4=-8, \dots
>$$

#### 2.1.2 Series
The most frequently used operation on a sequence of numbers is addition. Think for example of the addition of monthly incomes to an annual income, or of a bank balance to which interest is added.

By summation of the terms of a sequence, we obtain a [[Series]]. We start at the first term, 