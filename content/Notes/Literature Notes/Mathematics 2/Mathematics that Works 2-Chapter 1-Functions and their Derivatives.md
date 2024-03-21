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
An [[Exponential Function]] is a function of the form $f(x)=ca^x$, where $c$ and $a$ are constants, with $a \gt 0$. The parameter $a$ is calle