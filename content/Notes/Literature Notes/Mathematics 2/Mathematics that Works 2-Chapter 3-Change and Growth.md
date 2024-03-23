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

