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
