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
## 3.1 Derivative and Change
### 3.1.1 The Tangent Line and the First Order Approximation
Imagine a non-linear function together with its tangent line at $x=a$. The formula for a tangent line is 

$$
y=f(a)+f'(a)(x-a)
$$

The tangent line itself ia the graph of a function $g(x)$,

$$
g_1(x)=f(a)+f'(a)(x-a)
$$

At $x=a$, this function has the same value as $f(x)$, so $g_1(a)=f(a)$. Furthermore, they have the same derivatives at $x=a$, so $g_1'(a)=f'(a)$. 

We call $g_1(x)$ the **First Order Approximation** (linear approximation) of $f(x)$ about $x=a$, and it gives a fair approximation for $f(x)$ close enough to $x=a$. The replacement of $f(x)$ by its first order approximation is called **linearization**

### 3.1.2 The Second Order Approximation
In many cases, a first order approximation is good enough to analyse the behaviour of a function in a small neighbourhood. However, in some cases we may need a more accurate approximation. 

This can be achieved through the second order approximation of $f(x)$ about $x=a$:

$$
f(x) \cong f(a)+f'(a)(x-a)+\frac12f''(a)(x-a)^2
$$

The second order approximation of $f(x)$ about $x=a$ is a quadratic function of which the function value and the values of the first and second derivatives at $x=a$ are equal to those of $f(x)$.

### 3.1.3 Taylor Series
We may continue to add new terms in the same way. This yields a sequence of [[Polynomials]] $g_k(x)$ that about $x=0$ more and more resemble $f(x)$; the sequence converges to $f(x)$. Thus

$$
f(x)=\alpha_0+\alpha_1x + \alpha_2x^2 + \alpha_3x^3 + \dots = \sum^\infty_{k=0}\alpha_kx^k
$$
We say that we develop the function into a [[Series]]. 

If all derivatives of $f(x)$ at $x=a$ exist, then $f(x)$ can be developed into a series at $x=a$

$$
\begin{aligned}
f(x)&=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots \\
&= \sum_{k=0}^\infty \frac{f^{(k)}(a)}{k!}(x-a)^k
\end{aligned}
$$

This series is called the [[Taylor Series]] for the function $f(x)$ at $x=a$

>[!Tip]
>Algorithm for setting up the Taylor Series of $f(x)$ at $x=a$
>1. Determine the derivatives $f'(x), f''(x), f'''(x), \dots$ as far as necessary. Put these derivatives in a column, starting with $f(x)$
>2. In the next column, put the function values $f(a), f'(a), f''(a), f'''(a), \dots$
>3. Compose the series

The number of terms necessary for a good approximation depends on the distance $x-a$. 

### 3.1.4 Limits with Taylor Series
Taylor series can be used in calculating limits

>[!Example]
>We may write the number $e$ as $e^1$. With the Taylor series for $e^x$ it follows that 
>
>$$
>e^1=1+1+\frac{1}{2!}+\frac{1}{3!}+ \dots = \sum_{k=0}^\infty \frac{1}{k!}
>$$

---
## 3.2 Models for Continuous Growth
In this section we look at three models of continuous growth: exponential growth, bounded exponential growth, and logistic growth. With these models, we can describe the size of a population, but also the weight or the length of an individual. 

>[!Important]
>The difference between these models and those described in chapter 2 is that here the independent variable (usually time $t$) is continuous

### 3.2.1 Growth Rate and Relative Growth Rate
A quantity $y$ is described as a function of time by the function $y(t)$. The **growth rate (rate of change)** of $y$ is the derivative, $y'(t)$. The **relative growth rate** is the growth rate divided by $y$; in a formula: the relative growth rate is $y'(t)/y(t)$. 

### 3.2.2 Exponential Growth and Decay
The simplest growth function discussed here is the [[Exponential Function]]. 

$$
y(t)=ce^{rt}=c\exp(rt)
$$

This function describes a process with a constant relative growth rate $r$. 

>[!Info]
>For the exponential function $y(t)=ce^{rt}$, we have $y'(t)=cre^{rt}$, so $y'(t)=ry(t)$

With the exponential function, we thus may describe a quantity $y$ for which the growth rate $y'(t)$ is proportional to $y(t)$ itself; the relative growth rate is constant

In most applications, we have $c \gt 0$. For $r \gt 0$, indeed exponential growth occurs; $y(t)$ is increasing for all $t$. For $r \lt 0$, $y(t)$ is decreasing

The paramaters $c$ and $r$ fulfil different roles. 
- $r$ gives the relation between $y'(t)$ and $y(t)$, and is therefore characteristic for the process at hand. 
- $c$ described the initial situation

### 3.2.3 Doubling Time and Half-Life of Exponential Functions
For an exponential function $y(t)=ce^{rt}$ the relative growth rate $r$ is a measure for the speed of the growth process. An alternative measure for the growth speed of the process is the **doubling time**, which is the time span in which $y$ doubles

If the quantity $y(t)=ce^{rt}$ is doubled after time $T$, we have

$$
y(t+T)=2y(t) \Rightarrow ce^{r(t+T)}=2ce^{rt}
$$

$$
ce^{rt}e^{rT}=2ce^{rt}
$$

$$
e^{rT}=2 \Rightarrow rT=\ln(2) \Rightarrow T=\ln(2)/r
$$

The doubling time for exponential growth is therefore $t=\ln(2)/r$. 

>[!Note]
>Note that $T$ depends only on $r$, not on $t$ or $c$. Thus, the doubling time is equal for all initial times and all initial values

For a process with exponential decay, the natural counterpart of the doubling time is the **half-life**. The half-life $T$ is the time span in which the quantity decreases to half its value, $y(t+T)=\frac12y(t)$

### 3.2.4 Bounded Exponential Growth
Populations of plants or animals usually do not continue to grow indefinitely. Similarly, the length or weight of an individual are bounded. In these cases, the relative growth rate is not constant but decreases; the exponential growth model does not apply.

The function that described bounded exponential growth is

$$
y(t)=a-ce^{-rt}
$$

With
- $a \gt 0$
- $r \gt 0$

The graph of this function displays a linear growth at first; next, the growth is decreased, to vanish in the end. We have

$$
y(0)=a-c
$$

and

$$
\lim_{t\to \infty}y(t)=a
$$

as well as

$$
y'(t)=r(a-y(t))
$$

The relation $y'(t)=r(a-y(t))$ for a function describing bounded exponential growth shows that the parameters $a$ and $r$ determine the relation between $y'(t)$ and $y(t)$; they are characteristic for the process being modelled. This process does not depend on $c$. The parameter $c$ described the initial situation

### 3.2.5 Logistic Growth: The Sigmoid Curve
Often a growth process starts with an exponential phase, then the growth slows down, and finally comes to a full stop. This behaviour cannot be described by the functions previously studied. The graph of such a functioon has the form of a dilated letter $S$. One function with an S-shaped graph is

$$
y(t)=\frac{a}{1+ce^{-rt}}
$$

With
- $a \gt 0$
- $r \gt 0$

This function is called a **logistic function** and its graph is a **sigmoid curve**. We have

$$
y(0)=\frac{a}{1+c}
$$

and for $r \gt 0$:

$$
\begin{aligned}
\lim_{t \to -\infty}y(t)=\frac{a}{1+\infty}=0 \\
\lim_{t\to\infty}y(t)=\frac{a}{1+0}=a \\
\end{aligned}
$$

for $r \lt 0$

$$
\begin{aligned}
\lim_{t\to -\infty}y(t)=\frac{a}{1+0}=a \\
\lim_{t \to\infty}y(t)=\frac{a}{1+\infty}=0 \\
\end{aligned}
$$

The growth rate of the logistic function satisfies the relation

$$
y'(t)=\frac{r}{a}y(t)(a-y(t))
$$

---
# 4. Integrals
## 4.1 Derivative and Antiderivative
The **derivative** of the function $f(x)=x^3$ is found by [[Differentiation]] of $f(x)$ with respect to $x$. The result is $f'(x)=3x^2$. If reversely a function $f(x)$ is sought for which $f'(x)=3x^2$, then $f(x)=x^3$ is the solution

The reverse process of differentiation is [[Antidifferentiation]]. In antidifferentiating a function $g(x)$, we look for a function $f(x)$ such that $f'(x)=g(x)$. The function $f(x)$ is called an **antidervative** of $g(x)$. 

The requested function in antidifferentiation is not uniquely defined. We can always add a constant to a given solution, to produce a different function with the same derivative; this constant disappears in differentiation. Therefore, the antiderivative of a function is defined up to a constant

>[!Example]
>All the antiderivatives of $f(x)=2x+1$ can be written as $F(x)=x^2+x+C$, where $C$ is an arbitrary constant

The antiderivative is denoted using $F(x)$ (with a capital $F$)

### 4.1.1 Antidifferentiation
The search for an antiderivative is called antidifferentiation or **integration**. In this context, we speak of the **integral** of $f(x)$, indicated by the integral sign

$$
\int f(x)dx=F(x)+C
$$

Where $F(x)$ is an antiderivative of $x$

The integral is defined except for an additive constant; hence, we use the term **indefinite integral**. The constant $C$ is called the constant of integration. The function $f(x)$ behind the integral sign is called the **integrand**: this is the function for which we need the antiderivative. Behind that function is the symbol dx, indicating that x is the variable with respect to which we integrate. In this context, this variable $x$ is called the **variable of integration**

Just as we know standard derivatives, so do we know standard antiderivatives

| Function                   | Antiderivative                             |
| -------------------------- | ------------------------------------------ |
| $f(x)=x^a$                 | $F(x)=\frac{1}{a+1}x^{a+1}$ for $a \neq 1$ |
| $f(x)=e^x$                 | $F(x)=e^x$                                 |
| $f(x)=\frac{1}{x}$         | $F(x)=\ln(\|{x}\|)$                        |
| $f(x)=\sin(x)$             | $F(x)=-\cos(x)$                            |
| $f(x)=\cos(x)$             | $F(x)=\sin(x)$                             |
| $f(x)=\frac{1}{\cos(x)^2}$ | $F(x)=\tan(x)$                             |

### 4.1.2 Direct Integration
In **Direct integration**, we find an antiderivative if a function in a table or by making an educated guess. We verify our guess by differentiating and, if necessary, we adapt it. If we fail to find an antiderivative this way, we must resort to more advanced techniques. These will be discussed in a different chapter

### 4.1.3 Rules for Indefinite Integration
There are numeral rules which we can uses for antidifferentiation or integration
- Constant factor rule: a constant factor can be moved outside the integral
  $\int cf(x)dx=c\int f(x)dx$

>[!Example]
>$\int f(x)dx=\int \frac{1}{2x}dx=\frac12 \int \frac{1}{x}dx=\frac{1}{2}\ln(|x|)+C$

- Sum rule: The integral of the sum (or difference) of two functions is the sum (or the difference) of the integral of those functions
  $\int f(x) + g(x) dx = \int f(x) dx + \int g(x)dx$

>[!Example]
>The function $h(x)=2x+1$ is the sum of the functions $f(x)=2x$ and $g(x)=1$. An antiderivative of $f(x)$ is $F(x)=x^2$, and an antiderivative of $g(x)$ is $G(x)=x$. We find $H(x)=F(x)+G(x)=x^2 + x$

---
## 4.2 Integral and Area
### 4.2.1 The Definite Integral
The area of the region below a graph is approximated by the **definite integral**.

The definite integral of a function $f(x)$ between $a$ and $b$ is

$$
\lim_{N \to \infty} \sum_{n=1}^{N} f(x_n) \Delta x = \int_{a}^{b}f(x)dx
$$

We say that the function $f(x)$ is integrated with respect to $x$. The numbers $a$ and $b$ are the integration limits: $x$ varies between $a$ and $b$

### 4.2.2 Definite Integral and Antiderivative
Integrals with limits are often called definite integrals, and those without limits are called indefinite integrals. An indefinite integral indicates the antiderivative of a function. A definite integral represents the area below the graph of a function on a certain interval. 

The definite integral of $f(x)$ from $a$ to $b$ can be found using the antiderivative $F(x)$ of $f(x)$, as $F(b)-F(a)$. This difference of the values of the antiderivative in the limits $x=b$ and $x=a$ is commonly denoted by placing the antiderivative $F(x)$ between square brackets, with the limits as super- and subscript. 

$$
\int_a^bf(x)dx=\left[ F(x)\right]^{x=b}_{x=a}=F(b)-F(a)
$$

>[!Example]
>An antiderivative of the function $f(x)=e^x$ is $F(x)=e^x$. We use this to calculate the area of the region below the graph of $f(x)$ between$x=0$ and $x=1$
>
>$$
>\int_0^1 e^x dx = \left[e^x \right]^{x=1}_{x=0}=e^1 - e^0 = e-1
>$$

### 4.2.3 Rules for Definite Integrals
The rules for indefinite integrals also apply to definite integrals. In addition, there are specific rules regarding limits

- A constant factor in the integrand can be moved outside the integral:

$$
\int_a^b \alpha f(x)dx = \alpha \int_a^bf(x)dx
$$

>[!Note]
>This also works for a negative integrand

>[!Info]
>In integration, the area of the region below the horizontal axis is counted negatively. 

- Sum rule: if the integrand is the sum of two functions, we can split the integral into the sum of two integrals with the same limits

$$
\int_a^b f(x)+g(x)dx = \int_a^b f(x)dx + \int^b_a g(x)dx
$$

- Cut and Paste: The sum of two definite integrals over consecutive intervals can be written as a single integral over the jointed interval:

$$
\int_a^b f(x)dx + \int_b^c f(x)dx = \int_a^c f(x)dx
$$

- Switching Limits

$$
\int_a^b f(x)dx = -\int_b^a f(x)dx
$$


### 4.2.4 The Average
The average of a function $f(x)$ for $a \le x \le b$ is 

$$
\bar{f_{[a,b]}}=\frac{1}{b-a} \int_a^b f(x)dx
$$

Or in words: the average of a function over an interval is the integral of the function divided by the length of the interval. 

---
# 5. Integration Techniques
## 5.1 Substitution
### 5.1.1 The Chain Rule and the Substitution Method
Previously we have seen how we can find the [[Antidifferentiation|Antiderivative]] of a standard function. Moreover, it turned out that an almost standard function like $f(x)=e^{4x}$ could also be integrated directly. If we guess $F(x)=e^{4x}$ to be an antiderivative, we find upon differentiation an extra factor 4. Division by 4 produces a correct antiderivative; the derivative of $F(x)=\frac14e^{4x}$ is $f(x)=e^{4x}$. 

The above method seems to be a convenient technique to substantially extend our supply of antiderivatives. Unfortunately, there is a catch, and no small one indeed

>[!Example]
>We try to apply the above trick to the function 
>
>$$
>f(x)=\cos(x^2)
>$$
>
>For antiderivative we try $F(x)=\sin(x^2)$, knowing that the antiderivative of $\cos(x)$ is $\sin(x)$. Upon differentiation, we find
>
>$$
>F'(x)=\cos(x^2)-\frac{\sin(x^2)}{2x^2}
>$$
>
>Apart from the required $f(x)=\cos(x^2)$ we get an extra term, which we did not want at all. The method clearly fails in this case

The method turns out to be effective only when the independent variable $x$ is replaced by a linear function of $x$. Here, we replaced $x$ by $x^2$, producing an unwanted extra term in the derivative.

To deal with this, we can use the **method of substitution**. Here, we substitute part of the function $f(x)$ with $u(x)$: an arbitrarily chosen function. The steps are as follows:
1. Look for a composite function $f(u(x))$ as a part of the integrand. Initially, focus at the identification of the inner function $u(x)$; the outer function $f(u)$ is dealt with later
2. Choose $u=u(x)$ as the new variable
3. Determine the derivative $u'(x)$. Check whether this is a factor of the integrand
4. If necessary, rewrite the integrand, and substitute for the new variable $u$ with $du=u'(x)dx$
5. Find the antiderivative of $f(u)$ and substitute $u(x)=u$ back into the result

>[!Example]
>We determine the integral
>
>$$
>\int \cos(x)e^{\sin(x)}dx
>$$
>
>The trick is to find the substitution. We try $u=u(x)=sin(x)$. Indeed, $u'(x)=\cos(x)$, so
>
>$$
>\begin{aligned}
>\int \cos(x)e^{\sin(x)}dx &= \int e^{\sin(x)} \cos(x)dx \\
>&= \int e^{u(x)}u'(x)dx \\
>&= \int e^u du \\
>&= e^u + C \\
>&= e^{\sin(x)} \\
>\end{aligned} 
>$$

>[!Note]
>A mnemonic to memorise the substitution method is writing the derivative of $u'(x)$ as
>
>$$
>u'(x)=\frac{du}{dx} \Rightarrow u'(x)dx = du
>$$
>
>In this way, the substitution carries $u'(x)dx$ over into $du$. 

It may be useful to multiple the integrand by a constant factor to make the derivative $u'(x)$ better visible. Of course, we must compensate by dividing the integral by the same factor. In this way, the method of substitution is also effective for linear functions like $u(x)$, the guessing technique used in direct integration.

>[!Example]
>At first sight, the integrand in 
>
>$$
>\int e^{-5x}dx
>$$
>
>is no clear candidate for substitution; for effective substitution of $u(x)=-5x$, the required derivative of $u'(x)=-5$ is missing. We may solve this issue by multiplying the integrand with the missing factor, while dividing the integral by this same factor
>
>>[!Info]
>>This is allowed because of the constant factor rule discussed previously
>
>Using $u=u(x)$ we obtain
>
>$$
>\begin{aligned}
>\int e^{-5x}dx &= -\frac{1}{5} \int e^{-5x} \cdot -5 dx \\
>&= -\frac{1}{5} e^{u(x)}u'(x)dx \\
>&= -\frac{1}{5} e^u du \\
>&= -\frac{1}{5} e^u + C \\
>&= -\frac{1}{5} e^{-5x}+C \\
>\end{aligned}
>$$

### 5.1.2 Special Case
Functions of the type $f(x)=u'(x)/u(x)$ can always be integrated using the method of substitution.

The general rule for this type of integrals is

$$
\int \frac{u'(x)}{u(x)}dx = \ln(|u(x)|) + C
$$

>[!Example]
>In the integral 
>
>$$
>\int \frac{2x+1}{x^2 + x + 1}dx
>$$
>
>the integrand has the form $u'(x) / u(x)$, since the numerator is exactly the derivative of the denominator. With the substitution $u(x)=x^2 + x + 1$ we find
>
>$$
>\begin{aligned}
>\int \frac{2x+1}{x^2 + x + 1}dx &= \int \frac{(x^2 + x + 1)'}{x^2 + x + 1}dx \\
>&= \int \frac{u'(x)}{u(x)}dx \\
>&= \int \frac{1}{u(x)}u'(x)dx \\
>&= \int \frac{1}{u}du \\
>&= \ln(|u|)+C \\
>&= \ln (x^2 + x + 1) + C \\
>\end{aligned}
>$$

### 5.1.3 The Substitution Method for Definite Integrals
When applying a substitution in a definite integral, not only the integration variable itself is involved, but also the limits of integration. They must be made to comply with the new integration variable $u$; if $x$ rund from $a$ to $b$, then $u(x)$ runs from $u(a)$ to $u(b)$

The substitution method for definite integrals reads

$$
\int_a^b f(u(x))u'(x)dx = \int_{u(a)}^{u(b)} f(u)du
$$

>[!Note]
>When using substitution for an indefinite integral, we must substitute the original variable back after integration. This is not necessary for substitution in a definite integral

>[!Example]
>We calculate the definite integral 
>
>$$
>\int_0^{\sqrt{\pi}} x \sin(x^2)dx
>$$
>
>We try the substitution $u=x^2$. For clarity, we use the following scheme:
>- Substitution: $u(x) = x^2$
>- Derivative: $u'(x) = 2x \Rightarrow 2xdx = du$
>- Lower limit: $x=0 \Rightarrow u(0)=0$
>- Upper limit: $x=\sqrt{\pi} \Rightarrow u(\sqrt{\pi})=(\sqrt{\pi})^2 = \pi$
>
>With this substitution we find 
>
>$$
>\begin{aligned}
>\int_0^{\sqrt{\pi}} x \sin(x^2)dx &= \frac12 \int_0^{\sqrt{\pi}} \sin(x^2) 2xdx \\
>&= \frac12 \int_{x=0}^{x=\sqrt{\pi}} \sin(u(x))u'(x)dx \\
>&= \frac12 \int_{u=0}^{u=\pi} \sin(u)du \\
>&= \frac12 [-\cos(u)]^{u=\pi}_{u=0} \\
>&= \frac12 (-\cos(\pi))+\cos(0)) \\
>&= 1 \\
>\end{aligned}
>$$


---
## 5.2 Integration by Parts
### 5.2.1 The Product Rule and Integration by Parts
The derivative of the product of two functions $f(x)$ and $g(x)$ is

$$
[f(x)g(x)]'=f'(x)g(x) + f(x)g'(x)
$$

Integrating both sides of this equation, we find

$$
f(x)g(x)= \int [f(x)g(x)]' dx = \int f'(x)g(x) dx + \int f(x)g'(x) dx
$$

If we can easily find one of the integrals at the right side, we can also find the other one, which may be the more difficult one:

$$
\int f(x)g'(x) dx = f(x)g(x) + f'(x)g(x)dx
$$

In this way, we may try to simplify our problem

>[!Example]
>We look for an antiderivative of $x \cos(x)$. We recognise this integrand as the product of two functions $f(x)=x$ and $g'(x)=\cos(x)$
>
>$$
>\int x \cos(x) dx = \int f(x) g'(x)dx
>$$
>
>and consequently
>
>$$
>\int f(x)g'(x) dx= f(x)g(x)-\int f'(x)g(x)dx
>$$
>
>$$
>\int x \cos(x) dx = x \sin(x) - \int 1\sin(x) dx
>$$
>
>The integral at the right hand side is straightforward, an antiderivative of $\sin(x)$ is $-\cos(x)$. This yields
>
>$$
>\int x cos(x) dx = x \sin(x) - (-\cos(x)) +C = x \sin(x) + \cos(x)
>$$
>
>With integration constant C. Now we have found an antiderivative of $x \cos(x)$, namely $x\sin(x)+\cos(x)$

>[!Important]
>Algorithm for Integration by Parts:
>1. The integrand can be decomposed as the product of two functions
>2. Identify one of the factors as a derivative by writing the integrand in the form of $f(x)g'(x)$
>3. Set up a scheme: 
>   
>$$
>\left\{
>\begin{array}{ll}
>f(x) &= \dots \Rightarrow f'(x)&= \dots \\ 
>g'(x)&=\dots \Rightarrow g(x)&=\dots 
>\end{array}
>\right.
>$$
>   
>4. Apply the rule $\int f(x)g'(x) dx = f(x)g(x) + f'(x)g(x)dx$
>5. Finally, find $\int f'(x)g(x)dx$ 

>[!Warning]
>Integration by parts can be performed in two directions. If we make the correct choice, the new integral will be simpler than the original one. If we make the wrong choice, it becomes more difficult!


### 5.2.2 Integration By Parts for Definite Integrals
Integration by parts for antiderivatives has a natural extention to definite integrals. The procedure is

$$
\begin{aligned}
\int_a^b f(x)g'(x)dx &= \int_a^b (f(x)g(x))' dx - \int_a^b f'(x)g(x)dx \\
&= \left[f(x)g(x)\right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx
\end{aligned}
$$

Removing the intermediate step, we find

$$
\int_a^b f(x)g'(x)dx = \left[f(x)g(x) \right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx
$$

>[!Example]
>We evaluate the definite integral
>
>$$
>I=\int_0^{\pi} x \cos(x) dx
>$$
>
>We choose $g'(x)=\cos(x)$, with antiderivative $g(x)=\sin(x)$. This leaves $f(x)=x$, with derivative $f'(x)=1$. So we obtain
>
>$$
>\begin{aligned}
>I &= \int_0^{\pi} x \cos(x) \\
>&= \left[ x \sin(x) \right]^{x=\pi}_{x=0} - \int_0^{\pi} \sin(x)dx \\
>&= 0 + \left[ \cos(x)\right]^{x=\pi}_{x=0} \\
>&= -2
>\end{aligned}
>$$

### 5.2.3 Repeated Integration by Parts
So far, integration by parts has always resulted in an integral that could be integrated directly. Unfortunately, this is not always the case. If the remaining integral cannot be evaluated by direct integration, we can try to integrate by parts again, or to apply a substitution

>[!Example]
>We want an antiderivative of $p(x)=x^2e^x$. If we consider $p(x)$ to be the product of $f(x)=x^2$ and $g'(x)=e^x$ (with antiderivative $g(x)=e^x$) we can use integration by parts
>
>$$
>\int x^2 e^x dx = x^2 e^x - 2 \int xe^x dx
>$$
>
>This latter integral has already been determined in a previous example, also using integration by parts. We now use this result, to find the antiderivative
>
>$$
>\begin{aligned}
>\int x^2 e^x dx &= x^2 e^x - 2(x-1)e^x + C \\
>&= (x^2 -2x +2)e^2 + C
>\end{aligned}
>$$
>
>Substitution by parts leaves us with an integral that needs further elaboration, and here repeated integration by parts may be necessary. For example, we find an antiderivative of $x^5 \cos(x)$ after integrating by parts five times consecutively. Here the risk of calculation error is high

### 5.2.4 Special Case: $g'(x)=1$
Consider the following situation. We want an antiderivative of $f(x)=\ln(x)$. This standard function does not appear in the list of standard integrals. We do know the derivative $f'(x)=\frac1{x}$, but for integration by parts we need a product of the form $f(x)g'(x)$. To this end we can take $g'(x)=1$, and then indeed we do obtain $f(x)g'(x)$. Integration by parts (with $g(x)=x)$ gives

$$
\begin{aligned}
\int \ln(x)dx &= \int \ln(x) \cdot 1 \\
&= \ln(x) \cdot 1 - \int \frac1{x} \cdot x dx \\
&= x\ln(x) - \int 1 dx \\
&= x\ln(x)-x+C
\end{aligned}
$$

---
## 5.3 Partial Fraction Decomposition
In [[Mathematics that Works 2-Chapter 4-Integrals#4.1.3 Rules for Indefinite Integration|Chapter 4.1]] we have written the integral of a sum of functions as the sum of the integral of those functions

$$
\int (f(x) + g(x)) dx = \int f(x) dx + \int g(x)dx
$$

Sometimes it takes some modification to write an integrand as a sum. This is particularly so in this section.

>[!Example]
>A sum (or the difference) of two fractions with different denominators, such as 
>
>$$
>f(x)=\frac{1}{x} + \frac{-1}{x+1} = \frac{1}{x} - \frac{1}{x+1}
>$$
>
>can be written as a single function, by reducing both fractions to a common denominator
>
>$$
>\begin{aligned}
>f(x)&=\frac{1}{x}\frac{x+1}{x+1} + \frac{x}{x} \frac{-1}{x+1} \\
>&= \frac{(x+1)-x}{x(x+1)} \\
>&= \frac{1}{x(x+1)}
>\end{aligned}
>$$

The advantage of the latter notation is that it is more compact; the advantage of the first is that it is suited for direct integration. Now suppose we want an antiderivative of this latter fraction. Because the two notations denote the same function, we may write it as the sum of two simpeler fractions. We find

$$
\begin{aligned}
\int \frac{1}{x(x+1)} dx &= \int \frac{1}{x}-\frac{1}{x+1}dx \\
&= \frac{1}{x}dx - \int \frac{1}{x+1} dx \\
&= \ln(|x|)-\ln(|x+1|) + C
\end{aligned}
$$

It appears we can determine the integral using the sum rule. 

Reducing two simple fractions to a common denominator results in a fraction with a compound denominator. In order to integrate a fraction with a compound denominator we must write this fraction as the sum of fractions with simple denominators. This reversed process is called **partial fraction decomposition**

>[!Example]
>We continue with the example above, with the function
>
>$$
>f(x)=\frac{1}{x(x+1)}
>$$
>
>The denominator of this fraction is a product of the factors $x$ and $x+1$. A fraction with such a denominator, a product of factors, can always be written as the sum of two more simple fractions, with simple factors in the denominator. 
>
>$$
>f(x)=\frac{1}{x(x+1)}=\frac{a}{x} + \frac{b}{x+1}
>$$
>
>The right hand side of this equation can be reduced to a common denominator
>
>$$
>\begin{aligned}
>f(x)&=\frac{a}{x} + \frac{b}{x+1} \\
>&= \frac{a(x+1)}{x(x+1)} + \frac{bx}{x(x+1)} \\
>&= \frac{a(x+1)+bx}{x(x+1)} \\
>&= \frac{(a+b)x+a}{x(x+1)}
>\end{aligned}
>$$
>
>The numerator of the fraction is a function of $x$ with yet unknown constants $a$ and $b$. This function must be equal to the numerator of $f(x)$ for all $x$, so
>
>$$
>(a+b)x+a = 1 \Rightarrow (a+b)x+a = 0x+1
>$$
>
>for all $x$. This is the case if $(a+b)=0$ and $a=1$, so $a=1$ and $b=-1$. We conclude
>
>$$
>f(x)=\frac{a}{x}+\frac{b}{x+1}=\frac{1}{x}-\frac{1}{x+1}
>$$
>
>Note that we have recovered the sum we started with in the previous example

### 5.3.1 Factorisation
In the above examples and exercises, the denominator was already factorised. If this is not the case, we must first find the factors of the denominator

Consider the fraction

$$
f(x)\frac{2x}{x^2 + 3x + 2}
$$

The denominator is a quadratic function of $x$. We can factorise it by finding its zeros $p$ and $q$, for instance with the quadratic root formula. 

We find $p=-1$ and $q=-2$, which leads to the factorisation

$$
x^2 +3x+2 = (x-p)(x-q)=(x+1)(x+2)
$$

The factors that we find are the denominators of the simple fractions into which we decompose,

$$
f(x)=\frac{2x}{(x+1)(x+2)}=\frac{a}{x+1} + \frac{b}{x+2}
$$

We reduce the sum to a common denominator and rearrange terms according to powers of $x$

$$
\begin{aligned}
\frac{2x}{(x+1)(x+2)} &= \frac{a}{x+1} + \frac{b}{x+2} \\
&= \frac{a(x+2)+b(x+1)}{(x+1)(x+2)} \\
&= \frac{(a+b)x + (2a+b)}{(x+1)(x+2)}
\end{aligned}
$$

Equating coefficients in the numerator results in the system of linear equations

$$
\left\{
\begin{array}{ll}
a+b &= 2 \\
2a+b &= 0
\end{array}
\right.
$$

with solutions $a=-2$ and $b=4$. As antiderivatives we obtain

$$
\begin{aligned}
\int \frac{2x}{x^2 + 3x + 2} dx &= \int \frac{-2}{x+1} + \frac{4}{x+2}dx \\
&= \int \frac{2}{x+1}dx + \int \frac{4}{x+2}dx \\
&= -2 \ln(|x+1|) + 4 \ln(|x+2|) + C
\end{aligned}
$$

---
# 6. Differential Equations
## 6.1 Direction Fields, Steady States and Models
In this section, we will analyse differential equations without calculating the solutions explicitly. This gives us a tool for checking whether the model (the differential equation) exhibits the behaviour we expect. 

### 6.1.1 Differential Equations and Direction Field
Consider the following logistic differential equation

$$
y'(t)=\frac{r}{a}(a-y(t))y(t)
$$

The solutions $y(t)$ of this differential equation are the logistic functions that were discussed in [[Mathematics that Works 2-Chapter 3-Change and Growth#3.2 Models for Continuous Growth|Chapter 3.2]] We will see in 6.2 how we can find these solutions; here we restrict ourselves to the differential equation itself

If we would know the function $y(t)$, then we could simply draw a graph of $y$ against $t$ and investigate its behaviour. Lacking a solution, we cannot do this. However, from the differential equation we know that at the point with coordinates $t$ and $y(t)$ the derivative has the value $y'(t)=\frac{r}{a}(a-y(t))y(t)$. Thus, at any point $(t, y(t))$ we can compute the slope $y'(t)$

Now we draw in a whole grid of points, a short line segment, with the slope $y'(t)$ belonging to each individual point. Such a line segment is called a **tangent line segment**. Doing this for an entire grid we reach what is called a **direction field** for the differential equation. This direction field gives a lot of information about the solutions of the differential equation. 

A differential equation of the first order is an equation of the form 

$$
y'(t)=f(t, y(t))
$$

with at the right hand side a function of the independent variable $t$ and the dependent variable $y(t)$

>[!Example]
>The following equations are differential equations of the first order
>- $y'(t)=-3y(t)$
>- $y'(t)= -ty(t)+\sin(t)$
>- $y'(t)=(1-y(t)^2)y(t)$
>- $y'(t)=ty(t)^2$

The direction field for the differential equation $y'(t)=f(t, y(t))$ consists of the tangent line elements at selection grid points in the $(t, y)$-plane. The tangent line element at the point $(t, y(t)$ has a slope $y'(t)$. Its value follows directly from the differential equation: the angle $\varphi$ between tangent line element and the $t$-axis satisfies $\tan(\varphi)=y'(t) = f(t, y(t))$

When looking at different examples, we see that a solution $y(t)$ is not fully determined by the differential equation alone. In the direction field, we can draw several curves that follow the tangent line elements. A solution $y(t)$ is uniquely determined only if we know a given point $(t_0, y_0)$ on the solution curve. Such a function $y(t)$ does not only satisfy the differential equation, it also satisfies the additional condition $y(t_0)=y_0$. This additional condition is called the **initial condition**

### 6.1.2 Time-Invariant Differential Equations and Steady States
Often, differential equations model physical, economic, or biological processes that depend on time. In the equation $y'(t)=f(t, y(t))$, the independent variable $t$ represents time; the dependent variable $y(t)$ represents the **state** of the process we are modelling. 

Here we restrict ourselved to processes of which the external conditions are constant. The change $y'(t)$ then only depends on the state $y(t)$, and not upon $t$ (in a way different from through $y(t)$). Such a process is modelled by a differential equation of the type

$$
y'(t)=f(y(t))
$$

in which the right hand side is a function of $y(t)$ only. Such a differential equation is called **time-invariant** or **autonomous**. The direction fields of such equations depend on $y$ only, and not on $t$. In other words, if we shift the picture horizontally, nothing changes. 

A time invariant differential equation describes a system that does not explicitly depend on time $t$. In such a case, there may exist solutions $y(t)$ that do not depend on time either. Clearly these are constant solutions, $y(t)=\underline{y}$ for all $t$. In that case, $y'(t)=0$, so

$$
f(y(t))=0 \text{ for all }t
$$

This is the case if 

$$
f(\underline{y})=0
$$

 A steady state $\underline{y}$ that satisfies this condition is called a **steady state** of the differential equation. 

$\underline{y}$ is a steady state of $y'(t)=f(y(t))$ if $f(\underline{y})=0$

>[!Example]
>We give for the following differential equations the steady states, if they exist. 
>
>
>| Diff. Equation          | Steady State (if appliccable)                                                   |
>| ----------------------- | ------------------------------------------------------------------------------- |
>| $y'(t)=-3y(t)$          | $y(t)=\underline{y}=0$                                                          |
>| $y'(t)=2y(t)-4$         | $y(t)=\underline{y}= 2$                                                         |
>| $y'(t)=y(t)^2 + 2$      | No steady state                                                                 |
>| $y'(t)=y(t)^2 -5y(t)+6$ | $y(t)=\underline{y}_{1,2}$ with $\underline{y}_1 = 2$ and $\underline{y}_2 = 3$ |

### 6.1.3 Stability of Steady States
A steady state of a time-invariant differential equation is **stable** (or **attracting**) if any solution that starts near this steady state moves to this steady state. The steady state is **unstable** (or **repelling**) if solutions, starting near this steady state, tend to run away from this steady state. 

The stability of a steady state can readily be observed in the direction field. But we don't need the direction field, the stability is directly found by investigating the graph of the function $f(y)$. 

A steady state $\underline{y}$ of the differential equation $y'(t)=f(y(t))$ is **stable** if $f'(\underline{y})\lt 0$ and **unstable** if $f'(\underline{y}) \gt 0$

>[!Important]
>Algorithm for steady states of time-invariant differential equations
>1. Write the differential equation in the form $y'(t)=f(y(t))$, and identify the function $f(y)$
>2. Find the steady states $\underline{y}$ by solving the equation $f(\underline{y})=0$
>3. Determine the stability of a steady state $\underline{y}$ by checking whether $f'(\underline{y}) \lt 0$

>[!Warning]
>Do not mix up the stability criterion for a steady state of a differential equation and that of an iteration process (see [[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes#2.2 Iteration Processes|Chapter 2.2]]). A steady state $\underline{y}$ of an iteration process $y_{n+1}=f(y_n)$ satisfies $\underline{y}=f(\underline{y})$, and it is stable if $-1 \lt f'(\underline{y}) \lt 1$

---
## 6.2 Time-Invariant Differential Equations
A differential equation $y'(t)=f(t, y(t))$ describes the growth of a quantity $y(t)$. Above, we have seen that the direction field of the differential equation allows many solutions: one for every starting point. An expression that represents all these solutions together is called the **general solution** of the differential equation. In order to determine $y(t)$ for $t \gt 0$ we should know, next to the differential equation, also the initial state $y(0)$

An **initial value problem** is a differential equation with an initial condition

$$
\left\{
\begin{array}{ll}
y'(t) &= f(t,y(t)) \\
y(t_0) &= y_0 
\end{array}
\right.
$$

In this section, we restrict ourselves to **time-invariant differential equations** for which $y'(t)=f(y(t))$; the right hand side does not depend explicitly on time

### 6.2.1 Separation of Variables

Consider the following situation. We look for the solution $y(t)$ of the initial value problem

$$
y'(t)=ky(t)
$$

$$
y(0)=2
$$

First, we move the factor $y(t)$ to the left hand side. This is realised by dividing the differential equation left and right by $y(t)$, giving

$$
\frac{1}{y(t)}y'(t)=k
$$

Next, we integrate left and right with respect to $t$

$$
\int \frac{1}{y(t)}y'(t)dt = \int k dt
$$

In the integral on the left, we change the integration variable to $y$ by using substitution. With $dy=y'(t)dt$ we find

$$
\int \frac1{y}dy = \int k dt
$$

Elaborating these integrals, we obtain

$$
\ln(|y|) = kt + K
$$

where $K$ is an arbitrary constant. To find $y(t)$ we remove the natural logarithm by taking the ecponential, both on the left and on the right hand side

$$
e^{\ln(|y|)} = e^{kt+K} = e^K e^kt
$$

so

$$
|y(t)| = Ce^{kt} \text{ where } C=e^K
$$

We can now drop the absolute value by admitting negative values for $C$

We now have obtained the general solution of the differential equation,

$$
y(t)=Ce^{kt}
$$

The constant $C$ is used to make $y(t)$ satisfy the initial condition. Here $y(0)=2$, which gives

$$
\left.
\begin{array}{ll}
y(0) &= Ce^{k0} = C \\
y(0) &= 2
\end{array}
\right\}
\Rightarrow
C=2
$$

Hence, the solution of the initial value problem is $y(t)=2e^{kt}$ 

>[!Note]
>The method that we used above to solve the differential equation $y'(t)=ky(t)$ can in principle be applied to any time-invariant differential equation

>[!Important]
>Algorithm for solving $y'(t)=f(y(t))$
>1. Carry $f(y)$ to the left hand side by division
>2. Take antiderivatives with respect to $t$
>3. At the left hand side, switch to $y$ as an integration variable
>4. Find the integral at the left hand side, no integration constant is required here
>5. Solve the resulting equation for $y(t)$
>6. If an initial condition is specified, use this to find the integration constant

### 6.2.2 Special Cases: The Growth Functions
In [[Mathematics that Works 2-Chapter 3-Change and Growth#3.2 Models for Continuous Growth|Chapter 3.2]] we discussed several growth functions, and we found relations between these functions and their derivatives

|                     | Growth Function             |                                 | Differential Equation |
| ------------------- | --------------------------- | ------------------------------- | --------------------- |
| Exponential         | $y(t)=ce^{rt}$              | $y'(t)=ry(t)$                   | Linear                |
| Bounded Exponential | $y(t)=a-ce^{rt}$            | $y'(t)=r(a-y(t))$               | Linear                |
| Logistic            | $y(t)=\frac{a}{1+ce^{-rt}}$ | $y'(t)=\frac{r}{a}y(t)(a-y(t))$ | Logistic              |

---
## 6.3 Time-Dependent Differential Equations
### 6.3.1 Separation of Variables
In the previous section, we applies the method of separation of variables to time-invariant differential equations. Here, we extend the method to a class of time-dependent differential equations

Consider the following situation. We are looking for the solution $y(t)$ of the initial value problem

$$
y'(t)=\frac1{t+1}y(t),\text{ with }y(1)=3
$$

First, we take the factor $y(t)$ to the left hand side of the equation. 

$$
\frac{y'(t)}{y(t)} = \frac{1}{t+1}
$$

Now the variables are separated; the left hand side depends on $y$ only, while the right hand side depends on $t$ only. Next, we integrate left and right hand side with respect to $t$

$$
\int \frac{y'(t)}{y(t)}dt = \int \frac{1}{t+1} dt
$$

In the integral to the left, we change the integration variable to $t$ by using substitution

$$
\int \frac{1}{y} dy = \int \frac{1}{t+1} dt
$$

Elaborating these integrals, we obtain

$$
\ln(|y|)=\ln(t+1)+K 
$$

Where $K$ is an arbitrary constant. This equation is solved for $y$. To remove the natural logarithm we take exponentials

$$
e^{\ln(|y|)} = e^{\ln(t+1)+K} = e^{K}e^{\ln(t+1)}
$$

so

$$
|y(t)|=C |t+1|
$$
Where $C=e^K$

We can drop the absolute values by admitting negative values for $C$

$$
y(t)=C(t+1)
$$

For the solution with $y(1)=3$ we find

$$
\left.
\begin{array}{ll}
y(1)&=2C \\
y(1)&=3
\end{array}
\right\} \Rightarrow
2C=3 \Rightarrow
C=\frac32
$$

Hence, the solution of the initial value problem is $y(t)=\frac{3}{2}(t+1)$

>[!Note]
>The above method applies to any differential equation of the form
>
>$$
>y'(t)=p(y(t))q(t)
>$$

>[!Important]
>Separation of variables for $y'(t)=p(y(t))q(t)$
>1. Divide both sides by $p(y)$
>2. Integrate both sides with respect to $t$
>3. On the left, change to $y$ as integration variable
>4. Solve the integrals; here only one integration constant is needed
>5. Solve the resulting equation for $y(t)$
>6. If an initial condition is specified, use it to find the integration constant

