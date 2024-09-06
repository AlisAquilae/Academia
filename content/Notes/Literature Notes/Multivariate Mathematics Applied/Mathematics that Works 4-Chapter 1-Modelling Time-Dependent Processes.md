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
# 1.1 Introduction
When modelling, we sometimes want to capture the speed at which certain events occur. We know, for example in chemistry, that a reaction may be faster of the concentration of the reactants increase, but we cannot predict how fast. Thus, we are not able to identify possible bottlenecks in the reaction scheme.

To resolve this problem we need a quantitative description of the reaction rate, in which the rate is expressed as a  function of the reactants. This expression leads to differential equations, which play a prominent role in modelling physical, biological and technological processes. Such a differential equation has the general form of

$$
n'(t) = \alpha n(t)
$$

# 1.2 Flux Models and Systems of Algebraic Equations

## 1.2.1 Flux Models (Skipped)

>[!Warning]
>Skipped the part on flux models, since these were used purely as an example

## 1.2.2 Solving Systems of Linear Equations by Elimination and Substitution
We obtained flux models in terms of linear equations. In this paragraph, we discuss techniques for solving systems of linear equations. Here, we repeat some basic techniques from algebra. Read Mat 2 for more on this. Here, I will only discuss it in general

We try to turn the system in echelon form. A system of linear equations is in echelon form if each equation has either zeroes as coefficients only, or begins with more zero coefficients than the equation preceding it. We can obtain echelon form for any system using elimination and substitution. 

If a system has multiple solutions, we obtain a free variable. We write this variable in terms of the other variables. 

Systems are inconsistent if there is no possible solution to the system. This is often the case if there are more equations than variables, in which case we say the system is overdetermined. 

We cannot solve for these. So instead, we make a best approximation using the least squares problem. 

$$
Ax \cong b
$$

The solution of this can be found as the solution of normal equations

$$
A^TAx = A^Tb
$$


---
# 1.5 Modelling with Differential Equations
## 1.5.1 Linear Growth or Decay
Consider the formula below again


$$
n'(t) = \alpha n(t)
$$

This is a differential equation, which is proportional (due to the $\alpha$) to itself. The constant $\alpha$ is called the relative growth rate. 

When deriving the solutions to this equation, these turn out to be **exponential functions**

## 1.5.2 The Logistic Model
We might run into the case where growth is not infinitely possible. Growth might start competing with itself. This can be modelled by letting the relative growth rate $\alpha$ depend on n(t), instead of keeping it constant. 

$$
\alpha = \frac{r}{K}(K-n(t))
$$

Now the proportionality constant is a linear function of $n$. The constant $K$ is called the **carrying capacity** of the environment; as $n \to K$, $\alpha$ tends to 0 and the growth vanishes. If $n \gt K$ then $\alpha$ becomes negative, and growth turns into decay. The constant $r$ denotes the relative growth rate under favourable conditions, i.e. if $n$ is small in comparison to $K$. For this choice for $\alpha$, and plugging this into the linear growth equation, we obtain the so-called [[Logistic Differential Equation]] 
$$
n'(t) = \frac{r}{K}(K-n(t))n(t)
$$

The logistic differential equation can also be solved analytically. Its solutions will turn out to be 

$$
n(t) = \frac{K}{1+ce^{-rt}}
$$

Here, the constant $c$ depends on the initial value $n(0)$. 

## 1.5.3 Ordinary Differential Equations: Basic Concepts
In modelling a physical or biological problem, a first step is to distinguish the state variable $x$. When we know the state variable, we may try to describe its future behaviour. 

>[!Example]
>When studying the orbit of a projectile, its position and velocity are the state variables


When we try to predict the future development of state variable $x$, we recognise that it depends on time $t$, so $x=x(t)$. If the rate of change $x'(t)$ depends on $x(t)$, the evolution of $x$ in time can be modelled with a differential equation. 

A differential equation of the first order is an equation that expresses $x'(t)$ in terms of $x(t)$ and, optionally, $t$. Usually we write such a differential equation as 

$$
x'(t) = f(t(x,t))
$$

Because $x$ depends only on one independent variable $t$, the above equation is called an [[Ordinary Differential Equation]]. A function $x(t)$ satisfying the differential equation is called a **solution** of the differential equation. The differential equation alone does not determine the solution uniquely: we must also know the initial state. So we need an **initial condition**, for example that the solution has the value $x(0)$ at time $t(0)$: $x(t_0)=x_0$. Differential equation and initial condition together are called an **initial value problem**

An ordinary differential equation $x'(t) = f(t.x(t))$ is **linear** if $f(t,x)$ is a linear function of $x$. Then the differential equation has the form

$$
x'(t) = a(t)x(t)+b(t)
$$

In this linear differential equation, the function $b(t)$ is the **inhomogeneous term**. If $b(t) = 0$ for all $t$, the linear differential equation is called **homogeneous**; otherwise, it is **inhomogeneous**. Every inhomogeneous linear differential equation has a corresponding homogeneous linear differential equation, which is obtained by omitting the inhomogeneous term $b(t)$

$$
x'(t) = a(t)x(t)
$$

## 1.5.4 Time-Invariant Differential Equations and Steady States
Again, we model physical chemical or biological processes that depend on time. Thus, in the equation $x'(t) = f(t,x(t))$ the independent variable $t$ represents time; the dependent variable $x(t)$ is the state variable, describing the process we are modelling. 

Now we restrict ourselves to processes of which the external conditions are constant. Then the rate of change $x'(t)$ only depends on $x(t)$ itself and not upon $t$. To such a process a differential equation may belong of the type

$$
x'(t) = f(x(t))
$$

Here, the right hand side is a function is a function of $x(t)$ only. Such a differential equation is called **time-invariant** or **autonomous**

It is a well-established fact that many time-invariant systems in nature tend to a final state in which nothing changes anymore. Then the system comes at a rest in a stationary state. Therefore, we first look for constant solutions: $x(t) = x^*$ for all $t$. In this case, $x'(t) = 0$ and for all $t$

$$
f(x(t)) = 0
$$

which is the case if 

$$
f(x^*) = 0
$$

A value $x$ satisfying this condition is called a [[Steady State]]

Thus, $x^*$ is a steady state of the differential equation $x'(t)=f(x(t))$ if the constant function $x(t)=x^*$ solves the differential equation. In other words, $x^*$ is a steady state of $x'(t)=f(x(t))$ if $f(x^*) = 0$

>[!Example]
>The salt concentration in a CSTR is modelled with the equation 
>
>$$
>c'(t) = D(f(t) - c(t))
>$$
>
>If the input concentration is constant, this differential equation is time-invariant
>
>$$
>c'(t) = D(f - c(t))
>$$
>
>Its steady states satisfies a simple algebraic equation
>
>$$
>c'(t) = D(f-c(t)) = 0
>$$
>
>$$
>c^* = f
>$$
>
>The result is intuitively clear. In the long run, the concentration in the vessel becomes equal to the constant input concentration


>[!Example]
>The steady states $x^*$ of the logistic differential equation
>
>$$
>x'(t) = \frac{r}{K}(K-x(t))x(t)
>$$
>
>satisfy the algebraic equation
>
>$$
>\frac{r}{K}(K-x^*)x^* = 0
>$$
>
>The equation has two solutions, $x^* = 0$ and $x^* = K$


