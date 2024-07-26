---
fileClass: Base, Summaries
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 1. Functions and their Derivatives
## 1.1 Introduction
The relation between two quantities is often expressed as a **function**. To refresh your knowledge of the standard functions, in the first two parts of this chapter we review the most frequently used standard functions, and we state their most important properties. 

If a function itself expresses the dependency of one quantity upon another, the derivative of that function gives the rate of change of the first quantity with respect to the second one.

The third part of this chapter presents a recapitulation of differentiation and gives the derivatives of the standard functions

---
## 1.2 The Standard Functions
### 1.2.1 Linear Functions
A function $f$(x) can be depicted in a graph by drawing points (x, $f$(x)) in the (x, y)-plane. The result is a curve in the (x, y)-plane with equation $y=f$(x).

The simplest type of functions are the [[Linear Functions]]: 

$$
y=f(\text{x})=a \text{x}+b
$$

The graph of a linear function is a straight line.

A special case arises where $b=0$. In this case, the graph is a straight line through the origin (0, 0). Another special case arises when $a=0$. Then, $f$(x) does not depend on x at all; we call it a **constant function**. The graph of a constant function is the horizontal straight line $y=b$. 

>[!Note]
>If $a=0$ and $b=0$, this line coincides with the x-axis

The numbers $a$ and $b$ are **parameters**: they determine the behaviour of the function. 
- The point of intersection with the y-axis (at $\text{x}=0$) is located at $y=b$, so $b$ is the **vertical intercept**
- $a$ is called the **slope** of the line. The larger $a$ the steeper the line; when we add 1 unit to x, then $y$ increases by $a$ units. If $a$ is negative, then the line is decreasing

>[!Info]
>If the graph of $y$ as a function of $\text{x}$ is a straight line, the graph of $\text{x}$ as a function of $y$ is a straight line too. 


### 1.2.2 Powers and Functions
In many applications, the relation between 2 quantities is modelled with a linear function, often merely because there is no better information available. If such information is present, however, relations that are more complex can be taken into consideration. In this section, we present functions that can model such a more complex relation

A first group of functions are the [[Power Functions]]: 

$$
f(\text{x})=c\text{x}^p
$$

in which $c$ and $p$ are the parameters. These functions can model very different types of behaviour. If $c$ and $p$ are positive, $f(\text{x})$ is increasing and $f(0)=0$. If $c$ is positive and $p$ is negative, $f(\text{x})$ is decreasing for $\text{x} \gt 0$ and $f(\text{x})$ is decreasing for $\text{x} \lt 0$. 

>[!Note]
>**Roots** are powers too. For example $\sqrt{\text{x}}=\text{x}^{1/2}$ and $\sqrt[n]{\text{x}^m} = \text{x}^{m/n}$

The formulas below help to deal with power functions
- For any integer numbers $m$ and $n$, $a^{m/n} = \sqrt[n]{a^m} = \bigl( \sqrt[n]{a} \bigr) ^m$
- For any real number $p$, $a^{-p} = \frac{1}{a^p}$
- For any real number $p$, $(ab)^p = a^p b^p$
- For any real numbers $p$ and $q$, $(a^p)^q = a^{pq}$ 
- For any real numbers $p$ and $q$, $a^p \cdot a^q = a^{p+q}$

### 1.2.3 Polynomials
A second important group of functions are the [[Polynomials]]. This group contains the linear functions (also called **linear polynomials**): 

$$
f(\text{x})=a \text{x} +b
$$

Next, there are **quadratic polynomials**: 

$$
f(\text{x}) = a \text{x}^2 + b \text{x} + c
$$

The general formula of a polynomial is: 

$$
f(\text{x}) = a_0 \text{x}^n = a_1 \text{x}^{n-1} + \dots + a_{n-1} \text{x} + a_n
$$

If $a_0 \neq 0$, then $n$ is the **degree** of the polynomial. The parameters $a_0$, $\dots$, $a_n$ are called the **coefficients**.

>[!Important]
>Thus, a polynomial with a degree of 2 is a quadratic polynomial. The graph is called a **parabola**

For the quadratic polynomial $f(\text{x}) = a \text{x}^2 + b \text{x} + c$ (with $a \neq 0$) we have
- if $a \gt 0$, then the graph is a parabola opening upwards, with minimum at $\text{x}=-b/(2a)$ and $f(\text{x}) \rightarrow \infty$ 
- If $a \lt 0$, then the graph is a parabola opening downwards, with maximum at $\text{x}=-b/(2a)$ and $f(\text{x}) \rightarrow -\infty$
- If the **discriminant** $D=b^2 - 4ac$ is positive, then $f(\text{x})$ has zeros at :
  $$
  \text{x}_{1,2}=\frac{-b \, \pm \, \sqrt{D}}{2a} = \frac{-b \, \pm \, \sqrt{b^2 - 4ac}}{2a}
  $$
  

### 1.2.4 Rational Functions
A characteristic of all polynomials $f(\text{x})$ is that $f(\text{x}) \to \pm \, \infty$ as $\text{x} \to \pm \, \infty$ . This trait puts an important restriction on the phenomena that we can model with polynomials. This restriction does not apply to [[Rational Functions]], which are quotients of two polynomials: 

$$
f(\text{x}) = \frac{p(\text{x})}{q(\text{x})}
$$

### 1.2.5 The Inverse Function
Often, a function is used to describe a causal relationship: a cause x leads to an effect $y$. In other cases, we must proceed the other way around. 

In mathematical terms, the [[Inverse Functions|Inverse Function]] of a function $y= f(\text{x})$  with input x and output $y$ is the function $g(y)$ that returns the input x for a given output $y$. The inverse function of $f(\text{x})$ thus gives the solution x of the equation $y=f(\text{x})$ 

>[!Example]
>The inverse function of $f(\text{x})=x^3$ is $g(y) = \sqrt[3]{y}$. That is, $g(y)=y^{1/3}$ 

>[!Note]
>Sometimes the inverse function of $f(\text{x})$ is denoted by $f^{-1} (\text{x})$

---
## 1.3 Transcendental Functions
### 1.3.1 Exponential Functions
An [[Exponential Function]] is a function of the form $f(x)=c\,a^x$, where $c$ and $a$ are constants, with $a \gt 0$. The parameter $a$ is called the **base** of the exponential function

>[!Warning]
>Do not confuse the exponential functions $f(x)=c\,a^x$ with the power functions $f(x)=c \, x^p$. Notice the position of the variable $x$

One special exponential function is the function whose tangent line crosses the y-axis at exactly $y=1$. This special case is called $e$, the value of which is $e=2.71828 \dots$ 

The exponential function $f(x)=e^x$ is used so frequently that it is often called THE exponential function. It is also denoted as exp(x)

Below are some rules for powers and exponents:
- For any integer numbers $m$ and $n$, $a^{m/n} = \sqrt[n]{a^m}=\bigl(\sqrt[n]{a}\bigr)^m$ 
- For any real number $p$, $a^{-p} = \frac{1}{a^p}$ and $(ab)^p = a^pb^p$
- For any real numbers $p$ and $q$, $(a^p)^q=a^{pq}$
- For any real numbers $p$ and $q$, $a^p \cdot a^q=a^{p+q}$

### 1.3.2 Logarithms
The [[Logarithmic Function]] $^a \log(x)$ is the [[Inverse Functions|Inverse Function]] of the exponential function $a^x$. We call $^a \log(x)$ the logarithm of $x$ to base $a$. 

In a formula, $^a \log(x)=y \to a^y=x$

>[!Note]
>The logarithm $^a \log(x)$ is defined only if:
>- $a \gt 0$
>- $a \neq 1$
>- $x \gt 0$

The [[Natural Logarithm]] $\ln(x)$ is $^e \log(x)$, the logarithm to base $e$

For logarithms, the following rules apply:
- Inverse: $^a\log(x) \iff x=a^y$ and $a^{^a\log(x)}=x$
- Product rule: $^a \log(xy) = ^a\log(x) + ^a\log(y)$
- Quotient rule: $^a\log \left(\frac{x}{y}\right)=^a\log(x)-^a\log(y)$
- Power rule: $^a\log(x^p)=p \cdot ^a\log(x)$
- Change the base: $^a\log(x)=\frac{^b\log(x)}{^b\log(a)}$

We often put logarithms in a graph with a **logarithmic scale**. A scale is logarithmic if the distance to the origin is proportional to the logarithm of the value on the scale of this point

Equal distances between points on the logarithmic scale imply equal ratios of the values on the scale. The distance between points P and Q, with Q being larger, is found through $\log(\frac{q}{p})$

>[!Example]
>On a logarithmic scale, the distance between the points $x_1=1$ and $x_2=10$ is equal to the distance between $x_3=1000$ and $x_4=10000$, since $\log(10)-\log(1)=1$ and $\log(10000)-\log(1000)=1$

>[!Important]
>What is noteworthy is that the graph of a power function is a straight line when there are logarithmic scales on both axes. The graph of an exponential function is a straight line as well when a logarithmic scale is used on the y-axis and a linear scale is used on the x-axis

### 1.3.3 Trigonometric Functions
Some functions are periodic because they repeat themselves. The most important periodic functions are the [[Trigonometric Functions]] $\sin(\Theta)$, $\cos(\Theta)$ and $\tan(\Theta)$.

Take a point $P=(x, y)$ on a circle about the origin with radius $r$. If $\Theta$ is the angle of $OP$ with respect to the positive x-axis, then:
- $\sin(\Theta)=\frac{y}{r}$
- $\cos(\Theta)=\frac{x}{r}$
- $\tan(\Theta)=\frac{y}{x}$

Often we measure the angle $\Theta$ in radians, abbreviated rad. A full revolution is $2\pi$ rad.

| $\Theta$ in rad | $\Theta$ in $\deg$ | $\sin(\Theta)$    | $\cos(\Theta)$    | $\tan(\Theta)$    |
| --------------- | ------------------ | ----------------- | ----------------- | ----------------- |
| 0               | 0                  | 0                 | 1                 | 0                 |
| $\frac16\pi$    | 30                 | $\frac12$         | $\frac12\sqrt{3}$ | $\frac13\sqrt{3}$ |
| $\frac14\pi$    | 45                 | $\frac12\sqrt{2}$ | $\frac12\sqrt{2}$ | 1                 |
| $\frac13\pi$    | 60                 | $\frac12\sqrt{3}$ | $\frac12$         | $\sqrt{3}$        |
| $\sqrt12\pi$    | 90                 | 1                 | 0                 | $\pm \infty$      |

There are many formulas and relations between trigonometric functions which are known, for example $\sin(\Theta)^2 + \cos(\Theta)^2=1$

---
## 1.4 The Derivative
### 1.4.1 Differentiation
The points $A$ and $B$ are on the (non-linear) graph of $f(x)$. Between $A$ and $B$, $x$ changes from $a$ to $a+\Delta x$, an increment of $\Delta x$; $y$ changes from $f(a)$ to $f(a+\Delta x)$, that is an increment of $\Delta f=f(a+\Delta x)-f(a)$. The slope of the line through A and B is

$$
\frac{\Delta f}{\Delta x} = \frac{f(a+\Delta x)-f(a)}{\Delta x}
$$

This expression is called the **difference quotient**

If we keep $A$ fixed and move $B$ along the graph towards $A$, the straight line through $A$ and $B$ carries over into the tangent line $r$ through $A$ to the graph $f(x)$. In the process, the slope of the line through $A$ and $B$ carries over into the slope of the tangent line. The difference quotient approaches a limit, the derivative of $f(x)$ at $x=a$. 

>[!Important]
>Hence, the derivative $f'(a)$ is the slope of the tangent line $r$ of $f(x)$ at $x=a$

If we determine the derivative of all values of $x$, we obtain the **derivative function** $f'(x)$. The process of determining the derivative is called [[Differentiation]].

### 1.4.2 Standard Derivatives and Differentiation Rules
Finding the derivative directly from the definition is a laborious task. Differentiation using standard derivatives and differentiation rules is much easier. 

Below we give a table of derivatives of a number of standard functions

| Function           | Derivative                  |
| ------------------ | --------------------------- |
| $f(x)=a$           | $f'(x)=0$                   |
| $f(x)=x^a$         | $f'(x)=ax^{n-1}$            |
| $f(x)=\ln(x)$      | $f'(x)=\frac{1}{x}$         |
| $f(x)=e^x=\exp(x)$ | $f'(x)=e^x$                 |
| $f(x)=a^x$         | $f'(x)=a^x \ln(a)$          |
| $f(x)=\sin(x)$     | $f'(x)=\cos(x)$             |
| $f(x)=\cos(x)$     | $f'(x)=-\sin(x)$            |
| $f(x)=\tan(x)$     | $f'(x)=\frac{1}{\cos(x)^2}$ |
Combining these standard functions by taking sums, products, or quotients, we can build up more complicated functions. Here the following rules apply

- Constant factor rule: $[cf(x)]'=cf'(x)$
- Sum rule: $[f(x)+g(x)]'=f'(x)+g'(x)$
- Product rule: $[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$
- Quotient rule: $[\frac{f(x)}{g(x)}]'=\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$
- Chain rule: $h'(x)=f'(u(x))u'(x)$

### 1.4.3 The Equation for the Tangent Line
At the beginning of this section, we introduced the derivative $f'(a)$ of $f(x)$ at $x=a$ as the slope of the tangent line to $f(x)$ at $x=a$. Conversely, we may set up a formula for the tangent line using the derivative.

The tangent line to $f(x)$ at $x=a$ has equation:

$$
y=f(a)+f'(a)(x-a)
$$

### 1.4.4 Increasing and Decreasing: Local Extremes
The derivative $f'(a)$ of $f(x)$ at $x=a$ is the slope of the graph of $f(x)$ at $x=a$. Hence,
- $f'(a) \gt 0 \Rightarrow f(x) \text{ is increasing at }x=a$
- $f'(a) \lt 0 \Rightarrow f(x) \text{ is decreasing at }x=a$

These relations can be used in finding **local extremes** (i.e. local maxima and local minima). Indeed, for a smooth function $f(x)$ a point $x=a$ can be a local extreme only if $f'(a)=0$. Such a point is called a **stationary point**

>[!Important]
>If $f'(a)=0$ and $f'(x)$ turns from positive to negative at $x=a$, then $f(x)$ has a local maximum at $x=a$
>
>If $f'(a)=0$ and $f'(x)$ turns from negative to positive at $x=a$, then $f(x)$ has a local minimum at $x=a$

To apply the first derivative test, we must first determine whether $f'(x)$ is increasing or decreasing at this point $x=a$ where $f'(x)=0$. Just as we can use the derivative $f'(x)$ to decide whether $f(x)$ is increasing or decreasing, we can use the second derivative $f''(x)$ to decide whether $f'(x)$ is increasing or decreasing

>[!Important]
>If $f'(a)=0$ and $f''(a) \lt 0$, then $f(x)$ has a local maximum at $x=a$
>
>If $f'(a)=0$ and $f''(a) \gt 0$, then $f(x)$ has a local minimum at $x=a$

---
# 2. Sequences Series and Iteration Processes
## 2.1 Sequences and Series
### 2.1.1 Sequences
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

### 2.1.2 Series
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

### 2.1.3 The Binomial Expansion
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
## 2.2 Iteration Processes
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

### 2.2.3 The Logistic Iteration Process
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

---
# 3. Change and Growth
