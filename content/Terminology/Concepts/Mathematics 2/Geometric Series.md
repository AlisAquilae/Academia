---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]", "[[Geometric Sequence]]", "[[Series]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Related Terminology: 
Related Courses: 
---
By summation of a [[Geometric Sequence]] we obtain a **Geometric Series**: a type of [[Series]] with many of the same characteristics as a geometric sequence

>[!Example]
>The partial sums of the geometric series $1+2+4+8+16+\dots$ are 
>
>$$
>S_1=1, S_2=1+2=3, S_3=1+2+4=7, S_4=1+2+4+8=15, \dots
>$$
>
>Clearly, $S_n \to \infty$ for $n \to \infty$ for this series; therefore, it is divergent

>[!Important]
>If the sum of a geometric series exists, it can be computed directly. The partial sum $S_n$ of the first $n$ terms of a geometric sequence satisfies
>
>$$
>S_n=a+ar+ar^2+\dots +ar^{n-1}=a \frac{1-r^n}{1-r} \text{ provided that } r \neq 1
>$$

From the formula for the partial sum of a geometric series ,we derive the formula for sum $S$. For $-1 \lt r \le 1$ we have $r^n \to 0$ as $n \to \infty$. In this case, the sequence $S_n$ has a limit, and thus the geometric series is convergent

A geometric series with common ratio $r$ is convergent if $-1 \lt r \lt 1$. The sum $S$ of the series then satisfies 

$$
S=\lim_{n\to\infty} S_n= \lim_{n\to\infty} a \frac{1-r^n}{1-r} = \frac{a}{1-r}
$$

For any other value of $r$, the geometric series is divergent

>[!Example]
>$1+2+4+8+16+\dots$ is divergent, since $r=2$
>
>$1+\frac12+\frac14+\frac18+\frac{1}{16}+\dots$ is convergent, since $r=\frac12$. Its sum is $\frac{1}{1-\frac12}=2$

>[!Note]
>If we have to add many consecutive numbers, we use ellipsis $\dots$ as above, or we use the symbol $\Sigma$ (pronounced as *sigma*). The $\Sigma$-sign stands for the summation (addition) of a number of terms. For example,
>
>$$
>\sum_{12}^{n=6}t_n=t_6+t_7+t_8+\dots+t_{12}
>$$
>
>The number below the $\Sigma$-sign indicates where we start, the number above where we end. If there is no end term, we use the $\infty$ sign. For the sum of the series we thus have 
>
>$$
>\sum_{n=1}^{\infty}t_n=t_1+t_2+t_3+\dots
>$$
