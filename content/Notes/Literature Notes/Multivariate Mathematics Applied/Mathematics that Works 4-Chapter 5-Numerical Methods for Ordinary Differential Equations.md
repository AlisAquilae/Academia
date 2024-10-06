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
# 5.1 Introduction
We have discussed methods to solve ordinary differential equations (ODEs) by means of separation of variables and variation of constants. In practice, the scope of these so-called analytical methods is limited. Therefore it may be necessary to resort to numerical approximation methods. In this chapter we discuss simple methods to approximate the solution $u(t)$ of the initial value problem

$$
\left\{
\begin{array}{ll}
u'(t) &= f(t,u(t)) \\
u(t_0) &= u_0
\end{array}
\right.
$$

# 5.2 Simple Numerical Methods for Differential Equations

## 5.2.1 Difference Quotients
Numerical approximations of function derivatives are seldom computed for their own sake. However, numerically approximated derivatives do have important applications, specifically in the context of numerical solution of differential equations

The simplest formulas to numerically approximate a derivative are derived straight-forward from the definition of the derivative, the differential quotient

$$
\lim\limits_{h \to 0} \frac{u(t+h) -u(t)}{h} = u'(t)
$$

The numerical approximation is found simply by omitting the limiting process; thus, the differential quotient is approximated with the difference quotient. 

$$
\frac{u(t+h)-u(t)}{h} \cong u(t)
$$

now with $h$ a "fixed" number. 

The approximation error decreases with decreasing $h$. This is underpinned by the following property: for $h$ small enough, the errors in the forward difference quotient is

$$
u'(t) - \frac{u(t+h)-u(t)}{h} \cong -\frac{1}{2} hu''(t)
$$

We conclude that for a smooth function, the error of the difference quotient is almost proportional to $h$.

>[!Note]
>Notice that the proportionality factor $\frac{1}{2} u''(t)$ is usually unknown


## 5.2.2 Euler's Forward Method
A simple method for approximately solving the differential equation

$$
u'(t)=f(t,u(t))
$$

is obtained by replacing the derivative (the differential quotient) by a difference quotient

$$
\frac{u(t+h)-u(t)}{h} \cong f(t,u(t))
$$

We multiply by $h$ and rearrange terms to obtain

$$
u(t+h) \cong u(t) +h f(t,u(t))
$$

We emphasise that the solution $u(t)$ of the differential equation satisfies this difference equation only approximately. In contrast, its exact solutions are denoted by $v(t)$, so

$$
v(t+h) = v(t) + h f(t,v(t))
$$

This method to convert a differential equation into a corresponding difference equation is called Euler's Forward Method (EF):

$$
u'(t) = f(t,u(t)) \underset{\text{Euler forward}}{\rightarrow} v(t+h) = v(t) + h f(t,v(t))
$$

The difference equation is used to compute approximating solutions for $u(t)$ in the form of a table. This table contains a number of points $t_n$, and the approximation $v(t_n)$ of the solution $u(t_n)$ at these points $t_n$. Because the variable $t$ is often interpreted as time, the $t_n$ are generally referred to as time points. To avoid unnecessary complications, the time points $t_n$ are chosen at regular intervals; thus, we have $t_n = t_0 + nh$, where $h$ is called the stepsize. Then the difference equation reads

$$
v(t_{n+1}) = v(t_n) + h f(t,v(t_n))
$$

This difference equation enables a direct calculation of $v(t_{n+1})$ given $v(t_n)$. Using this recipe recursively (starting at $v(t_0) = u(t_0)$), we find consecutive approximations $v(t_n)$ for $u(t_n)$ at the discrete time points $t=t_n$. Therefore, we say the differential equation is discretised. To emphasise this discrete character, and to simplify the formula, we often write

$$
v_{n+1} = v_n + h f(t_n,v_n)
$$

with $v_n = v(t_n)$. As this formula is to be applied repeatedly for increasing values of $n$, it is also called a recursion. We may hope that the values $v_n$ satisfying this difference equation are good approximations for $u(t_n)$. Later we will see to what extent this is indeed the case. 

>[!Example]
>Eurler's forward method applied to the initial value problem
>
>$$
>\left\{
>\begin{array}{ll}
>u'(t) &= -u(t)^2 \\
>u(0) &= 1
>\end{array}
>\right.
>$$
>
>results in the recursion
>
>$$
>\left\{
>\begin{array}{ll}
>v_{n+1} &= v_n - hv_n^2 \, , \, n = 1,2,3,4,\dots \\
>v_0 &= 1 
>\end{array}
>\right.
>$$


## 5.2.3 Implementation of Euler's Method in a Table
As stated above, the output of Euler's method is a table containing consecutive approximations $v(t_n)$ for $u(t_n)$ for increasing values of $t_n$. Obviously, for interpreting the results ir is probably much better to present this output in the form of a graph; however, we must first generate numbers, e.g. using Excel or any programming language

>[!Example]
>We approximate the solution $u(t)$ of the initial value problem
>
>$$
>\left\{
>\begin{array}{ll}
>u'(t) &= -u(t)^2 \\
>u(0) &= 1
>\end{array}
>\right.
>$$
>
>with Euler's forward method using a stepsize $h=0.1$. In this case, we have $f(t,u)=-u^2$, $t_0=0$ is the initial time and we take $v_0=u(0)=1$
>
>We organise our work in a tabke. Consecutively, its first three columns contain the step number $n$, the corresponding time $t_n$, and the approximate value $v_n$. Next, we use some auxiliary columns to store $f(t_n, v_n)=-v_n^2$ and $hf(t_n,v_n)$. So we start with $0$ (the value of $n$), $0$ (the value of $t_0$) and $1$ (the value of $v_0$). Next, we write $f(t_0,v_0)=-v_0^2 =-1$ and $hf(t_0,v_0)=0.1 \cdot -1 = -0.1$. Finally, we compute $v_1$ and write this into the sixth column
>
>$$
>v_1 = v_0 + hf(t_0,v_0) = v_0 + (-hv_0^2) = 1-0.1 = 0.9
>$$



| $n$ | $t_n$ | $v_n$ | $f(t_n,v_n)$ |     |
| --- | ----- | ----- | ------------ | --- |
|     |       |       |              |     |
