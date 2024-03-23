---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Related Terminology: ["[[Geometric Sequence]]", "[[Series]]"]
Related Courses: ["[[Mathematics 2]]"]
---
In many areas of science, **Sequences** of numbers are used. The individual numbers in the sequence are called **terms**; the first term is denoted by $t_1$, the second by $t_2$, and the nth by $t_n$. An (infinite) sequence thus consists of the terms: 

$$
t_1, t_2, t_3, \dots, t_n, \dots
$$

Where the $\dots$ at the end indicate that the sequence is infinite

It is impossible to infer unambiguously from the first few terms of a sequence what the following terms will be. But if we think that we recognise a pattern, we can try to make a prediction. 

>[!Example]
>The sequence $1, 4, 9, 16, 25, \dots$ is found. We may suppose that the nth term will be $t_n=n^2$

A sequence that has many applications is the [[Geometric Sequence]]. 

Another special type of sequence is the [[Series]]

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
