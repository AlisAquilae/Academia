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
### 1.1 Introduction
The relation between two quantities is often expressed as a **function**. To refresh your knowledge of the standard functions, in the first two parts of this chapter we review the most frequently used standard functions, and we state their most important properties. 

If a function itself expresses the dependency of one quantity upon another, the derivative of that function gives the rate of change of the first quantity with respect to the second one.

The third part of this chapter presents a recapitulation of differentiation and gives the derivatives of the standard functions

---
### 1.2 The Standard Functions
#### 1.2.1 Functions as a Model
A mathematical model is a mathematical description (by means of functions or equations) of an observable phenomenon, The goal of modelling is to gain insight in the phenomenon and to allow for predictions about its behaviour, which is the quintessence of science.

A model can never give a complete representation of reality; it is always a simplification. A good model tries to find a balance between simplicity and accuracy; it must be simple enough to enable calculations and relevant conclusions, and it should be accurate enough to make these conclusions reliable. If a simple model gives a description of the observations that is equally as good as that of a more complicated model, the simple model is to be preferred. 

#### 1.2.2 Linear Functions
A function $f$(x) can be depicted in a graph by drawing points (x, $f$(x)) in the (x, y)-plane. The result is a curve in the (x, y)-plane with equation $y=f$(x).

The simplest type of functions are the [[Linear Functions]]: 

$$
y=f(\text{x})=a \text{x}+b
$$

The graph of a linear function is a straight line.

A special case arises where $b=0$. In this case, the graph is a traight line through the origin (0, 0). Another special case arises when $a=0$. Then, $f$(x) does not depend on x at all; we call it a **constant function**. The graph of a constant function is the horizontal straight line $y=b$. 

>[!Note]
>If $a=0$ and $b=0$, this line coincides with the x-axis

The numbers $a$ and $b$ are **parameters**: they determine the behaviour of the function. 
- The point of intersection with the y-axis (at $\text{x}=0$) is located at $y=b$, so $b$ is the **vertical intercept**
- $a$ is called the **slope** of the line. The larger $a$ the steeper the line; when we add 1 unit to x, then $y$ increases by $a$ units. If $a$ is negative, then the line is decreasing

>[!Info]
>If the graph of $y$ as a function of $\text{x}$ is a straight line, the graph of $\text{x}$ as a function of $y$ is a straight line too. 

#### 1.2.3 Powers and Functions
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

#### 1.2.4 Polynomials
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
  

#### 1.2.5 Rational Functions
A characteristic of all polynomials $f(\text{x})$ is that $f(\text{x}) \to \pm \, \infty$ as $\text{x} \to \pm \, \infty$ . This trait puts an important restriction on the phenomena that we can model with polynomials. This restriction does not apply to [[Rational Functions]], which are quotients of two polynomials: 

$$
f(\text{x}) = \frac{p(\text{x})}{q(\text{x})}
$$
#### 1.2.6 The Inverse Function
Often, a function is used to describe a causal relationship: a cause x leads to an effect $y$. In other cases, we must proceed the other way around. 

In mathematical terms, the [[Inverse Functions|Inverse Function]] of a function $y= f(\text{x})$  with input x and output $y$ is the function $g(y)$ that returns the input x for a given output $y$. The inverse function of $f(\text{x})$ thus gives the solution x of the equation $y=f(\text{x})$ 

>[!Example]
>The inverse function of $f(\text{x})=x^3$ is $g(y) = \sqrt[3]{y}$. That is, $g(y)=y^{1/3}$ 

>[!Note]
>Sometimes the inverse function of $f(\text{x})$ is denoted by $f^{-1} (\text{x})$

---
### 1.3 Transcendental Functions
#### 1.3.1 Exponential Functions
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

#### 1.3.2 Logarithms
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

#### 1.3.3 Trigonometric Functions
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
### 1.4 The Derivative
#### 1.4.1 Differentiation
The points $A$ and $B$ are on the (non-linear) graph of $f(x)$. Between $A$ and $B$, $x$ changes from $a$ to $a+\Delta x$, an increment of $\Delta x$; $y$ changes from $f(a)$ to $f(a+\Delta x)$, that is an increment of $\Delta f=f(a+\Delta x)-f(a)$. The slope of the line through A and B is

$$
\frac{\Delta f}{\Delta x} = \frac{f(a+\Delta x)-f(a)}{\Delta x}
$$

This expression is called the **difference quotient**

If we keep $A$ fixed and move $B$ along the graph towards $A$, the straight line through $A$ and $B$ carries over into the tangent line $r$ through $A$ to the graph $f(x)$. In the process, the slope of the line through $A$ and $B$ carries over into the slope of the tangent line. The difference quotient approaches a limit, the derivative of $f(x)$ at $x=a$. 

>[!Important]
>Hence, the derivative $f'(a)$ is the slope of the tangent line $r$ of $f(x)$ at $x=a$

If we determine the derivative of all values of $x$, we obtain the **derivative function** $f'(x)$. The process of determining the derivative is called [[Differentiation]].

#### 1.4.2 Standard Derivatives and Differentiation Rules
Finding the derivative directly from the definition is a laborious task. Differentiation using standard derivatives and differentiation rules is much easier. 

Below we give a table of derivatives of a number of standard functions

| Function          | Derivative                  |
| ----------------- | --------------------------- |
| $f(x)=a$          | $f'(x)=0$                   |
| $f(x)=x^a$        | $f'(x)=ax^{n-1}$            |
| $f(x)=\ln(x)$     | $f'(x)=\frac{1}{x}$         |
| $f(x)=e^x=exp(x)$ | $f'(x)=e^x$                 |
| $f(x)=a^x$        | $f'(x)=a^x \ln(a)$          |
| $f(x)=\sin(x)$    | $f'(x)=\cos(x)$             |
| $f(x)=cos(x)$     | $f'(x)=-sin(x)$             |
| $f(x)=\tan(x)$    | $f'(x)=\frac{1}{\cos(x)^2}$ |
Combining these standard functions by taking sums, products, or quotients, we can build up more complicated functions. Here the following rules apply

- Constant factor rule: $[cf(x)]'=cf'(x)$
- Sum rule: $[f(x)+g(x)]'=f'(x)+g'(x)$
- Product rule: $[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$
- Quotient rule: $[\frac{f(x)}{g(x)}]'=\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$
- Chain rule: $h'(x)=f'(u(x))u'(x)$

#### 1.4.3 The Equation for the Tangent Line
At the beginning of this section, we introduced the derivative $f'(a)$ of $f(x)$ at $x=a$ as the slope of the tangent line to $f(x)$ at $x=a$. Conversely, we may set up a formula for the tangent line using the derivative.

The tangent line to $f(x)$ at $x=a$ has equation:

$$
y=f(a)+f'(a)(x-a)
$$

#### 1.4.4 Increasing and Decreasing; Local Extremes
The derivative $f'(a)$ of $f(x)$ at $x=a$ is the slope of the graph of $f(x)$ at $x=a$. Hence,
- $f'(a) \gt 0 \Rightarrow f(x) \text{ is increasing at }x=a$
- $f'(a) \lt 0 \Rightarrow f(x) \text{ is decreasing at }x=a$

These relations can be used in finding **local extremes** (i.e. local maxima and local minima). Indeed, for a smooth function $f(x)$ a point $x=a$ can be a local extreme only if $f'(a)=0$. Such a point is called a **stationary point**

>[!Important]
>If $f'(a)=0$ and $f'(x)$ turns from positive to negative at $x=a$, then $f(x)$ has a local maximum at $x=a$
>
>If $f'(a)=0$ and $f'(x)$ turns from negative to positive at $x=a$, then $f(x)$ has a local minimum at $x=a$

To apply the first derivative test, we must first determine whether $f'(x)$ is increasing or decreasing at this point $x=a$ where $f'(x)=0$. Just as we can use the derivative $f'(x)$ to decide whether $f(x) is increasing or decreasing, we can use the second derivative $f''(x)$ to decide whether $f'(x)$ is increasing or decreasing

>[!Important]
>If $f'(a)=0$ and $f''(a) \lt 0$, then $f(x)$ has a local maximum at $x=a$
>
>If $f'(a)=0$ and $f''(a) \gt 0$, then $f(x)$ has a local minimum at $x=a$

