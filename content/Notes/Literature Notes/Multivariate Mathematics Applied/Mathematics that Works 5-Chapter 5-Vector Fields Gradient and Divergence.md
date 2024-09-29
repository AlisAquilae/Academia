---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---
# 5.2 Gradient and Potential
The partial derivative $f_x(a,b)$ of $f(x,y)$ is the derivative of $f(x,y)$ at $(a,b)$ in the direction of the positive x-axis. In a first order approximation, a displacement from $(a,b)$ to $(a+\Delta x, b)$ causes the function value to change by 

$$
f(a+\Delta x, b)-f(a,b) \cong f_x(a,b)\Delta x
$$

Likewise, a displacement from $(a,b)$ to $(a,b+\Delta y)$ causes a change in the function value of

$$
f(a,b+\Delta y) - f(a,b) \cong f_y(a,b)\Delta y
$$

When these displacements are made simultaneously, from $(a,b)$ to $(a + \Delta x, b + \Delta y)$, the first order approximation of their joint effect is found by moving along the tangent plane of $f(x,y)$

$$
f(a + \Delta x, b + \Delta y) - f(a,b) \cong f_x(a,b)\Delta x + f_y(a,b)\Delta y
$$

The directional derivative of of $f(x,y)$ at $(a,b)$ in the direction from $(a,b)$ to $(a + \Delta x, b + \Delta y)$ is the slope in that direction, which is the vertical increment along the tangent plane divided by the horizontal displacement:

$$
\frac{f_x(a,b)\Delta x + f_y(a,b)\Delta y}{\sqrt{\Delta x^2 + \Delta y^2}}
$$

>[!Question]
>Find the directional derivative of the function $f(x,y)=2x^2 e^{-y}$ at the point $(1,1)$ in the direction of the point $(0,0)$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>f_x(x,y) &= 4xe^{-y} \\
>>f_y(x,y) &= 
>>\end{aligned}
>>$$



