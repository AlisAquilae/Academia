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
>
>Now our table looks as
>
> | $n$ | $t_n$ | $v_n$ | $f(t_n,v_n)$ | $hf(t_n,v_n)$ | $v_{n+1}$ |
> | --- | ----- | ----- | ------------ | ------------- | --------- |
> | 0   | 0     | 1     | -1           | -0.1          | 0.9       |
>
>For the second step, we move to the third row. Into its first two cells we write $1$ (the value of $n$) and $0.1$ (the value of $t_n = n_h$). Into the third cell comes $v_1$, and its value $v_1=0.9$ is copied from the sixth cell in the previous row. Into the fourth and fifth cell we write the values of $f(t_n,v_n)=-v_1^2=-(0.9)^2 = -0.81$ and $hf(t_n,v_n)=-0.081$. Finally, we compute $v_2$
>
>$$
>v_2 = v_1 + hf(t_1,v_1) = 0.9 - 0.081 = 0.819
>$$
>
>Thus, the first three rows of the table become
>
>| $n$ | $t_n$ | $v_n$ | $f(t_n,v_n)$ | $hf(t_n,v_n)$ | $v_{n+1}$ |
>| --- | ----- | ----- | ------------ | ------------- | --------- |
>| 0   | 0     | 1     | -1           | -0.1          | 0.9       |
>| 1   | 0.1   | 0.9   | -0.81        | -0.081        | 0.819     |
>
>Next, we fill the fourth row. Into the second cell we write $n=2$ and $t_n=nh=0.2$. Into the third cell we copy the value $v_2=0.819$ from the sixth cell in the third row. Into the fourth and fifth cell we now write $f(t_2,v_2)=-v_2^2=-(0.819)^2 = -0.670761$ and $hf(t_2,v_2)=-0.0670761$. Next we write $v_3$ into the sixth cell,
>
>$$
>v_3 = v_2 +hf(t_2,v_2)=0.819-0.0670761 = 0.7519239
>$$
>
>Thus, the fourth rows of the table are
>
> | $n$ | $t_n$ | $v_n$ | $f(t_n,v_n)$ | $hf(t_n,v_n)$ | $v_{n+1}$ |
> | --- | ----- | ----- | ------------ | ------------- | --------- |
> | 0   | 0     | 1     | -1           | -0.1          | 0.9       |
> | 1   | 0.1   | 0.9   | -0.81        | -0.081        | 0.819     |
> | 2   | 0.2   | 0.819 | -0.670761    | -0.0670761    | 0.7519239 |
> 
> For comparison, the real solution $u(t)$ of the differential equation is
> 
> $$
> u(t)=\frac{1}{t+1}
> $$
> 
> so $u(t_1)=0.90909091$, $u(t_2)=0.83333333$ and $u(t_3)=0.76923077$. The approximation contains a slowly increasing error. This was to be expected, since we stack approximation upon approximation, and consequently error upon error


## 5.2.4 Euler's Backward Method; Implicit and Explicit Methods
Instead of using a forward difference quotient (where $h$ is thought to be positive), we can also apply the difference quotient backward to the derivative in the differential equation

$$
u'(t)=f(t,u(t))
$$

We then get

$$
\frac{u(t+h)-u(t)}{h} \cong f(t+h,u(t+h)) \,  \Rightarrow \, u(t+h) \cong u(t)+hf(t+h,u(t+h))
$$

This way to convert a differential equation into a difference equation is called Euler's Backward Method (EB):

$$
u'(t)=f(t,u(t)) \underset{\text{Euler Backward}}{\to} v(t+h) = v(t) + hf(t+h,v(t+h))
$$

Writing $t_n=t_0 + nh$ we find a series of approximations $v_n$ for $u(t_n)$ through the formula

$$
v_{n+1} = v_n + hf(t_{n+1},v_{n+1})
$$

The difference quotient of Euler's Forward method

$$
v_{n+1}=v_n + hf(t_n,v_n)
$$

not only gives the definition of the approximation $v_n$, it also proposes a scheme for their calculation. Thus, if we have $v_0$ we can use it to directly calculate $v_{n+1}$. This is not the case for the difference equation of Euler's backward method

$$
v_{n+1} = v_n + hf(t_{n+1},v_{n+1})
$$

because in this equation also $f(t_{n+1}, v_{n+1})$ occurs, besides $v_{n+1}$. As long as $v_{n+1}$ is unknown, $f(t_{n+1},v_{n+1})$ cannot be calculated, and consequently $v_{n+1}$ cannot be determined directly. Instead, the above equation must be solved for $v_{n+1}$

In the general case, where $f(t,u)$ is non-linear in $u$, we must determine each new value $v_{n+1}$ as the solution of a non-linear equation. The methods for which this is the case, such as Euler's backward, are called implicit, that is, the new iterate $v_{n+1}$ is defined implicitly. Methods that allow $v_{n+1}$ to be calculated directly, such as Euler forward, are called explicit

For this reason, explicit methods appear to be more attractive than implicit methods. However, this ease of use of the explicit method comes at a price, in that explicit methods often have a less favourable error propagation. 

## 5.2.5 Local Errors

>[!Warning]
>I skipped the derivation, and went straight for the conclusion

The local error of Euler's forward and backward methods satisfy

$$
\delta_{n+1, \text{EF}} \cong \frac{1}{2} hu''(t_n) \, . \, \text{ and } \, \delta_{n+1,\text{EB}} \cong -\frac{1}{2} hu''(t_n)
$$

This property states that the local errors of Euler's forward and backward methods are proportional to $h$, for small values of the stepsize $h$. In general, the asymptotic proportionality factors $\frac{1}{2}u''(t)$ and $-\frac{1}{2}u''(t)$ are not known, since $u(t)$ itself is unknown. 

## 5.2.6 The Trapezoidal Rule and the Runge-Kutta Method
The trapezoidal rule (TR) converts differential equations into difference equations by 

$$
u'(t)=f(t,u(t)) \underset{\text{Trapezoidal rule}}{\to} v_{n+1} = v_n + \frac{1}{2}h \left[f(t_n,v_n) + f(t_{n+1},v_{n+1}) \right]
$$

Usually this method is more accurate than both Euler's methods are. This is readily seen by its local error for which we find

$$
\delta_{n+1, \text{TR}} \cong h^2 \Phi (u,t_n), \, \Phi(u,t_n) = -\frac{1}{12} u '''(t_n)
$$

The local error is now proportional to $h^2$. We therefore say that the trapezoidal rule has order 2/. Note that again the proportionality factor $-\frac{1}{12} u '''(t_n)$ is usually unknown. The local errors of Euler's methods are proportional to $h$; consequently, these methods have order 1. Therefore, we expect that the trapezoidal rule (which has order 2) has a smaller error and thus gives a more precise approximation. We must be cautious, however; the errors involve various unknown proportionality factors, and the stepsize $h$ must be sufficiently small.

For an even more precise result we must resort to more complicated methods. The most common of these is the following Runge-Kutta method

$$
\begin{aligned}
v(t_{n+1}) &= v(t_n) + \frac{1}{6} \left[ k_1 + 2k_2 + 2k_3 + k_4 \right] \, \text{ where } \, \\
k_1 &= f(t_n,v(t_n)) \\
k_2 &= f(t_n + \frac{1}{2}h,v(t_n)+\frac{1}{2}hk_1) \\
k_3 &= f(t_n + \frac{1}{2}h, v(t_n) + \frac{1}{2}hk_2) \\
k_4 &= f(t_{n+1},v(t_n)+hk_3)
\end{aligned}
$$

For this Runge-Kutta method, the local error has the form of

$$
\delta_{n, \text{RK}} \cong h^4 \Phi (f,u;t_n)
$$

where $\Phi (f,u;t)$ is a function of $t$ that has a rather complicated dependence upon the derivatives of $u(t)$ and $f(t,u)$. 

The Runge-Kutta method has order 4. For a small stepsize $h$, we expect the results of this method to be more accurate than that of Euler's methods and the trapezoidal rule, at the same $h$.

This implementation of the Runge-Kutta method is relatively simple for a such a high order method. This simplicity makes it very popular. 

## 5.2.7 Systems of Ordinary Differential Equations
Instead of a function $u(t)$ with real function values, we can also consider functions $U(t)$ which values are vectors in R$^q#$
