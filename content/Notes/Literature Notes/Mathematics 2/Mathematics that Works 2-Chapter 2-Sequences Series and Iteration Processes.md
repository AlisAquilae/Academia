---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 2]]"]
Draft: 
Status: Done
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

By summation of the terms of a sequence, we obtain a series. We start at the first term, and keep adding terms one by one. The sum of a finite number of consecutive terms of a sequence, starting at the first one, gives what is called a **partial sum**:

$$
S_1=t_1, S_2=t_1+t_2, S_3=t_1+t_2+t_3 \text{ and } S_n=t_1+t_2+t_3+\dots+t_n
$$

So $S_n$ is the sum of the first $n$ terms of the sequence. The consecutive partial sums themselves form a new sequence, $S_1, S_2, S_3, S_4, \dots$. In order to distinguish this new sequence from the original sequence, it is called a [[Series]]

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

#### 2.1.3 The Binomial Expansion
Using the well-known formula $(a+b)^2=a^2+2ab+b^2$ we expand the square of $a+b$ into powers of $a$ and $b$. When we expand $(a+b)^n$ into powers of $a$ and $b$ for any integer $n$, we obtain coefficients that can also be found in **Pascal's Triangle**. In this triangle, each number is the sum of its left and right upper neighbours. 

To derive the coefficients of the nth row, it is not necessary to form the whole triangle; they can be found by a simple formula. First, we introduce the following notations

The [[Factorial]] $n!$ (read "n factorial") of a positive integer $n$ is the number 

$$
n!=1 \cdot 2 \cdot 3 \cdot ... \cdot n \text{ for } n \neq 0 \text{ and } 0!=1
$$

>[!Example]
>$3!=1\cdot 2\cdot 3=6$
>$6!=1\cdot2\cdot3\cdot4\cdot5\cdot6=720$

The [[Binomial Coefficient]] of two numbers $n$ and $k$ (read "n choose k") is 

$$
\binom{n}{k}=\frac{n}{1} \cdot \frac{n-1}{2} \cdot \frac{n-2}{3} \cdot \frac{n-k+1}{k}
$$

>[!Example]
>$\binom{5}{2}=\frac51 \cdot \frac42=10$
>$\binom{7}{4}=\frac71 \cdot \frac62 \cdot \frac53 \cdot \frac44 = 35$

A way to quickly calculate an entire binomial coefficient, without calculating its parts first, is as follows

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

Factorials and binomial coefficients have prominent roles in probability and statistics. 

>[!Important]
>The number of possible orderings of $n$ objects is $n!$

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


---
### 2.2 Iteration Processes
In the previous section we considered sequences for which the term $t_{n+1}$ directly follows from its predecessor $t_n$. Specifically the terms $t_n=ar^{n-1}$ of a geometric sequence satisfy

$$
t_{n+1}=rt_n
$$

This is a simple [[Iteration Processes|Iteration Process]] (iteration meaning repetition), in which each term arises by multiplying its predecessor with a fixed number $r$. 

More general iteration processes are obtained by 

$$
t_{n+1}=f(t_n)
$$

where the function $f(t)$ describes how a **state** $t_{n+1}$ is derived from its predecessor $t_n$. 

In particular, we consider the linear iteration process and the logistic iteration process

#### 2.2.1 Linear Iteration Process
A linear iteration process is a process in the form of 

$$
t_{n+1}=at_n+b
$$

There is a linear relation between $t_n$ and $t_{n+1}$

The behaviour of an iteration process is strongly dependent on its initial state. 

>[!Example]
>Take the iteration process $t_{n+1}=1.5t_n-1$. For $t_0=4$, the sequence $t_0, t_1, t_2, t_3, \dots$ goes to $\infty$ and for $t_0=1$ it decreases to $-\infty$.

For the iteration process above, the division between decreasing and increasing sequences lies at $t_0=2$. For this initial state we find $t_1=2, t_2=2, t_3=3$ and so on. If we start at this point the state remains the same. Therefore, the state $\underline{t}=2$ is called the **steady state** of this iteration process. Because the sequences $t_0, t_1, t_2, t_3, \dots$ move away from the steady state for any initial state $t_0 \neq \underline{t}$, the steady state is called **unstable**. When the sequences $t_0, t_1, t_2, t_3, \dots$ converge towards the steady state $\underline{t}$ we call this steady state **stable**

#### 2.2.2 General Iteration Processes: Steady States and their Stability
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

#### 2.2.3 The Logistic Iteration Process
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