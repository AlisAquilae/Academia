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


