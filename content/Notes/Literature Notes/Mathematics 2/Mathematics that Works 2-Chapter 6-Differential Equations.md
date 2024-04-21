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
### 6.1 Direction Fields, Steady States and Models
In this section, we will analyse differential equations without calculating the solutions explicitly. This gives us a tool for checking whether the model (the differential equation) exhibits the behaviour we expect. 

#### 6.1.1 Differential Equations and Direction Field
Consider the following logistic differential equation

$$
y'(t)=\frac{r}{a}(a-y(t))y(t)
$$

The solutions $y(t)$ of this differential equation are the logistic functions that were discussed in [[Mathematics that Works 2-Chapter 3-Change and Growth#3.2 Models for Continuous Growth|Chapter 3.2]] We will see in 6.2 how we can find these solutions; here we restrict ourselves to the differential equation itself

If we would know the function $y(t)$, then we could simply draw a graph of $y$ against $t$ and investigate its behaviour. Lacking a solution, we cannot do this. However, from the differential equation we know that at the point with coordinates $t$ and $y(t)$ the derivative has the value $y'(t)=\frac{r}{a}(a-y(t))y(t)$. Thus, at any point $(t, y(t))$ we can compute the slope $y'(t)$

Now we draw in a whole grid of points, a short line segment, with the slope $y'(t)$ belonging to each individual point. Such a line segment is called a **tangent line segment**. Doing this for an entire grid we reach what is called a **direction field** for the differential equation. This direction field gives a lot of information about the solutions of the differential equation. 

A differential equation of the first order is an equation of the form 

$$
y'(t)=f(t, y(t))
$$

with at the right hand side a function of the independent variable $t$ and the dependent variable $y(t)$

>[!Example]
>The following equations are differential equations of the first order
>- $y'(t)=-3y(t)$
>- $y'(t)= -ty(t)+\sin(t)$
>- $y'(t)=(1-y(t)^2)y(t)$
>- $y'(t)=ty(t)^2$

The direction field for the differential equation $y'(t)=f(t, y(t))$ consists of the tangent line elements at selection grid points in the $(t, y)$-plane. The tangent line element at the point $(t, y(t)$ has a slope $y'(t)$. Its value follows directly from the differential equation: the angle $\varphi$ between tangent line element and the $t$-axis satisfies $\tan(\varphi)=y'(t) = f(t, y(t))$

When looking at different examples, we see that a solution $y(t)$ is not fully determined by the differential equation alone. In the direction field, we can draw several curves that follow the tangent line elements. A solution $y(t)$ is uniquely determined only if we know a given point $(t_0, y_0)$ on the solution curve. Such a function $y(t)$ does not only satisfy the differential equation, it also satisfies the additional condition $y(t_0)=y_0$. This additional condition is called the **initial condition**

#### 6.1.2 Time-Invariant Differential Equations and Steady States
Often, differential equations model physical, economic, or biological processes that depend on time. In the equation $y'(t)=f(t, y(t))$, the independent variable $t$ represents time; the dependent variable $y(t)$ represents the **state** of the process we are modelling. 

Here we restrict ourselved to processes of which the external conditions are constant. The change $y'(t)$ then only depends on the state $y(t)$, and not upon $t$ (in a way different from through $y(t)$). Such a process is modelled by a differential equation of the type

$$
y'(t)=f(y(t))
$$

in which the right hand side is a function of $y(t)$ only. Such a differential equation is called **time-invariant** or **autonomous**. The direction fields of such equations depend on $y$ only, and not on $t$. In other words, if we shift the picture horizontally, nothing changes. 

A time invariant differential equation describes a system that does not explicitly depend on time $t$. In such a case, there may exist solutions $y(t)$ that do not depend on time either. Clearly these are constant solutions, $y(t)=\underline{y}$ for all $t$. In that case, $y'(t)=0$, so

$$
f(y(t))=0 \text{ for all }t
$$

This is the case if 

$$
f(\underline{y})=0
$$

 A steady state $\underline{y}$ that satisfies this condition is called a **steady state** of the differential equation. 

$\underline{y}$ is a steady state of $y'(t)=f(y(t))$ if $f(\underline{y})=0$

>[!Example]
>We give for the following differential equations the steady states, if they exist. 