---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 2]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
### 3.1 Derivative and Change
#### 3.1.1 The Tangent Line and the First Order Approximation
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

#### 3.1.2 The Second Order Approximation
In many cases, a first order approximation is good enough to analyse the behaviour of a function in a small neighbourhood. However, in some cases we may need a more accurate approximation. 

This can be achieved through the second order approximation of $f(x)$ about $x=a$:

$$
f(x) \cong f(a)+f'(a)(x-a)+\frac12f''(a)(x-a)^2
$$

The second order approximation of $f(x)$ about $x=a$ is a quadratic function of which the function value and the values of the first and second derivatives at $x=a$ are equal to those of $f(x)$.

#### 3.1.3 Taylor Series
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

#### 3.1.4 Limits with Taylor Series
Taylor series can be used in calculating limits

>[!Example]
>We may write the number $e$ as $e^1$. With the Taylor series for $e^x$ it follows that 
>
>$$
>e^1=1+1+\frac{1}{2!}+\frac{1}{3!}+ \dots = \sum_{k=0}^\infty \frac{1}{k!}
>$$


---
### 3.2 Models for Continuous Growth
In this section we look at three models of continuous growth: exponential growth, bounded exponential growth, and logistic growth. With these models, we can describe the size of a population, but also the weight or the length of an individual. 

>[!Important]
>The difference between these models and those described in chapter 2 is that here the independent variable (usually time $t$) is continuous

#### 3.2.1 Growth Rate and Relative Growth Rate
A quantity $y$ is described as a function of time by the function $y(t)$. The **growth rate (rate of change)** of $y$ is the derivative, $y'(t)$. The **relative growth rate** is the growth rate divided by $y$; in a formula: the relative growth rate is $y'(t)/y(t)$. 

#### 3.2.2 Exponential Growth and Decay
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

#### 3.2.3 Doubling Time and Half-Life of Exponential Functions
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

#### 3.2.4 Bounded Exponential Growth
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

