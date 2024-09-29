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
>>f_x(1,1) &= 4e^{-1} \\
>>f_y(x,y) &= -2x^2 e^{-y} \\
>>f_y(1,1) &= -2e^{-1}\\
>>\Delta x &= -1 \, \text{ and } \, \Delta y = -1 \\
>>&= \frac{4e^{-1} \cdot -1 + -2e^{-1} \cdot -1}{\sqrt{-1^2 + -1^2}} \\
>>&= \frac{-4e^{-1} +2e^{-1}}{\sqrt{2}} \\
>>&= \frac{-2e^{-1}}{\sqrt{2}}\\
>>&\approx -0.52 
>>\end{aligned}
>>$$


A useful tool in the analysis of functions of several (spatial) variables is the gradient. The vector of partial derivatives of the function $f(x,y)$ is called the gradient of $f(x,y)$. The gradient in $(a,b)$ is denoted as $\mathit{grad}f(a,b)$ or as $\nabla f(a,b)$ 

$$
\nabla f(a,b) = \begin{pmatrix}f_x(a,b) \\ f_y(a,b) \end{pmatrix}
$$

>[!Question]
>Find the gradient of $f(x,y) = y \cos(xy)$ in the point $(1,0)$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>f_x(x,y) &= -y^2 \sin(xy) \\
>>f_y(x,y) &= 1 \cdot \cos(xy) + -xy\sin(xy) \\
>>&= \cos(xy) - xy\sin(xy) \\
>>\nabla f(x,y) &= \begin{pmatrix} -y^2 \sin(xy) \\ \cos(xy) - xy\sin(xy) \end{pmatrix} \\
>>\nabla f(1,0) &= \begin{pmatrix} -0^2 \sin(1\cdot 0) \\ \cos(1\cdot 0) - 1\cdot 0\sin(1\cdot 0) \end{pmatrix} \\
>>&= \begin{pmatrix} 0 \\ 1 \end{pmatrix}
>>\end{aligned}
>>$$



