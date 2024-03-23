---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]", "[[Factorial]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes]]"]
Related Terminology: ["[[Factorial]]"]
Related Courses: ["[[Mathematics 2]]"]
---
The **Binomial Coefficient** of two numbers $n$ and $k$ (read "n choose k") is 

$$
\binom{n}{k}=\frac{n}{1} \cdot \frac{n-1}{2} \cdot \frac{n-2}{3} \cdot \frac{n-k+1}{k}
$$

>[!Example]
>$\binom{5}{2}=\frac51 \cdot \frac42=10$
>$\binom{7}{4}=\frac71 \cdot \frac62 \cdot \frac53 \cdot \frac44 = 35$

A way to quickly calculate an entire binomial coefficient, without calculating its parts first, is as follows (through the use of [[Factorial|Factorials]])

$$
\binom{n}{k}=\frac{n!}{n!\cdot (n-k)!}
$$

>[!Example]
>$\binom{6}{0}=\frac{6!}{0!\cdot (6-0)!}=1$

We can compute for example $(a+b)^4$ using the binomial theorem

$$
(a+b)^4=\binom{4}{0}a^4+\binom{4}{1}a^3b+\binom{4}{2}a^2b^2+\binom{4}{3}ab^3+\binom{4}{4}b^4
$$
Hence
$$
(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4
$$

>[!Example]
>Find the probability that a family with 7 children counts 4 sons and 3 daughters
>
>The number of compositions with 4 sons and 3 daughters is found by dividing the total number of orderings of the children (which is $7!$) by the number of orderings of the sons (this is $4!$) and that of the daughters (which is $3!$). So
>
>$$
>\frac{7!}{4!\cdot 3!}=\binom{7!}{4!}
>$$
>
>The probability of 4 sons and 3 daughters is then $\binom{7}{4}p^4(1-p)^{7-4}$
>
>We say that the probability of $k$ sons out of $n$ follows a binomial distribution $B(n, p)$

