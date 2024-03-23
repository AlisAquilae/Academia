---
fileClass: Base, Concepts
title: 
Parents: ["[[Sequences]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Related Terminology: ["[[Geometric Series]]", "[[Sequences]]"]
Related Courses: ["[[Mathematics 2]]"]
---
The most frequently used operation on a [[Sequences|Sequence]] of numbers is addition. Think for example of the addition of monthly incomes to an annual income, or of a bank balance to which interest is added.

By summation of the terms of a sequence, we obtain a series. We start at the first term, and keep adding terms one by one. The sum of a finite number of consecutive terms of a sequence, starting at the first one, gives what is called a **partial sum**:

$$
S_1=t_1, S_2=t_1+t_2, S_3=t_1+t_2+t_3 \text{ and } S_n=t_1+t_2+t_3+\dots+t_n
$$

So $S_n$ is the sum of the first $n$ terms of the sequence. The consecutive partial sums themselves form a new sequence, $S_1, S_2, S_3, S_4, \dots$. In order to distinguish this new sequence from the original sequence, it is called a **Series**

The partial sum $S_n$ of a sequence form a series. If these partial sums have a limit $S$, then the series is **convergent** and $S$ is the sum of the series. If there is no limit, the series is **divergent**

>[!Example]
>The partial sum of the series $1+4+9+16+\dots$ are 
>
>$$
>S_1=1, S_2=1+4=5, S_3=1+4+9=14, S_4=1+4+9+16=30, \dots
>$$
>
>Since $S_n \to \infty$ as $n \to \infty$ for this series, its sum does not exist; the series is divergent

By summation of a [[Geometric Sequence]] we obtain a [[Geometric Series]]