---
fileClass: Base, Lecture Notes
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
TDS covers ordinary differential equations

Extremely useful in modelling systems which continually evolve in time (instead of iterating processes)

What is a differential equation? It is an equation. An equality involving an unknown function and its derivative(s)

Example:

$$
tx'(t) - x(t) = 2t^3
$$

A solution is a choice of the unknown function for which the equation is satisfied (for all values of t)

## Concepts in differential equations
Ordinary differential equations (ODE): Only one independent variable involved, usually $t$ (so we have $x(t)$ but not $x(t, x)$)

First order differential equation. First order derivative as highest order derivative involved. We are mostly going to see these

Time-invariant first order differential equations: of the form $x'(t) = f(x(t))$; so $x'(t)$ depends on x(t) only, and not on $t$ other than via $x(t)$. So if the $t$ is not written directly somewhere, which would be time-dependent

Linear first order ODE: Of the form $x'(t)=a(t)x(t) + b(t)$. So the equation is linear on $x(t)$. Not $x^2$ or $e^x$  os $\frac{1}{x(t)}$

If $b(t) = 0$ its homogeneous, else it is inhomogeneous

DE's are difficult to solve. To choose the right approach, you need to know the type of differential equation we are dealing with. 

## Two basic models (still ODEs)
Exponential growth: $x'(t) = \alpha x(t)$. This one is linear as well as homogeneous

Solution function: $x(t) = ce^{\alpha t}$

initial value $x(0) = c$

Steady state: x = 0

Logistic growth: $x'(t) = \frac{r}{K}(K - x(t))x(t)$

Solution function: $x(t) = \frac{K}{1+ce^{-rt}}$

Initial value $x(0) = \frac{K}{1+c}$

Steady state x = 0 and x = K

A steady state is a value of the variable x where the value does not change anymore. 
