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