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
## 5.2.1 Gradient and Directional Derivative
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


When we denote a displacement from $(a,b)$ to $(a + \Delta x, b + \Delta y)$ in vector form as $\Delta p$, we find this to be equal to

$$
|\nabla f(a,b)|\cos(\varphi)
$$

where $\varphi$ is the angle between $\nabla f(a,b)$ and $\Delta p$.

>[!Warning]
>Usually, a gradient contains only partial derivatives with respect to spatial variables. If $f(x,y,t)$ depends on two spatial variables $x$ and $y$ and a temporal variable $t$, then
>
>$$
>\nabla f(x,y,t) = \begin{pmatrix}f_x(x,y,t) \\ f_y(x,y,t) \end{pmatrix}
>$$


As discussed in [[Mathematics that Works 5-Chapter 1-Differential Functions of Several Variables#1.2 Partial Derivatives and Linear Approximations|Chapter 1.2]], a function $f(x,y)$ of two variables determines for every two real numbers $x$ and $y$ a number $z=f(x,y)$. The gradient of this function at $(x,y)=(a,b)$ is a vector, containing the partial derivatives $f_x(a,b)$ and $f_y(a,b)$ as elements. Since these partial derivatives depend on the location $(a,b)$ where they are evaluated, the gradient also depends on this location. Thus, the gradient of $f(x,y)$ determines for every two real numbers $x$ and $y$ a vector $v=f(x,y)$. 

$$
\nabla f(a,b) = \begin{pmatrix}f_x(a,b) \\ f_y(a,b) \end{pmatrix}
$$

We call this kind of function a vector field.

A vector field is a function from R$^n$ to R$^n$.

A scalar field is a function from R$^n$ to R.

Scalar fields and vector fields play a role in many different branches of science. Typical scalar fields are spatially dependent pressure or temperature. Typical vector fields are spatially dependent flows or forces.

We may visualise a vector field that is given by a formula $v(x,y)$ by selecting a number of points $(x,y)$, evaluating the vector field $v(x,y)$ at these points, and drawing the resulting vectors as arrows originating in the point of evaluation. 

## 5.2.2 The Gradient Operator, Gradient Field and Potential Function
Just like the function $f(x,y)$ itself, its gradient $\nabla f(x,y)$ depends on the position $(x,y)$. Thus the symbol $\nabla$ (or 'grad') can be considered as an operating acting onto a scalar field $f(x,y)$, yielding a vector field $\nabla f(x,y)$. Therefore, $\nabla$ is called the gradient operator. Where an ordinary function takes a variable (a real number, or a vector) as its arguments and gives a number or vector as result in return, an operator such as the gradient takes a function (here the scalar field $f(x,y)$) as its argument and returns another function (here the vector field $\nabla f(x,y)$). Therefore, an operator is called a "function on functions".

Actually, we have met operators like this before: a smooth function $f(x)$ can be differentiated, and the result is a derivative function $f'(x)$. Thus, "differentiation" is an operator, taking the function $f(x)$ as argument and returning the function $f'(x)$ as result. Another example is "antidifferentiation".

The terms "differentiation" and "antidifferentiation" strongly suggest that these operators have opposite effect. Indeed, when we differentiate the antiderivative $\int f(x) \mathrm dx$ of $f(x)$, then we retrieve the original function $f(x)$. However, this does not hold when we do it the other way around; the antiderivative of the derivative $f'(x)$ can be any function $g(x)=f(x)+C$, where $f(x)$ is the original function and $C$ is an arbitrary constant.

The potential function plays the same role to a vector field as the antiderivative to an ordinary function, including the undetermined integration constant $C$. Thus, the vector field $\nabla f(x)$ is the gradient field of the function $f(x,y)$. Conversely, if $v(x,y) = \nabla f(x,y)$, then $f(x,y)$ is a potential function of the vector field $v(x,y)$. In addition, if $f(x,y)$ is a potential function of the vector field $v(x,y)$, then also $g(x,y) = f(x,y) + C$ is a potential function of $v(x,y)$ for any constant $C$.

## 5.2.3 The Existence of a Potential Function
With its gradient, a function $f(x,y)$ from R$^2$ to R generates a vector field in R$^2$. Thus, the vector field $\nabla f(x,y)$ may be considered as a kind of spatial derivative of $f(x,y)$, and the function $f(x,y)$ is a potential function for its gradient field $v(x,y)=\nabla f(x,y)$. The same holds in R$^3$ for functionos $f(x,y,z)$ and in R$^n$ for functions with $n$ arguments

The question arises whether the reverse is also true: given a vector field $v(x,y)$, can we find a function $f(x,y)$ from R$^2$ to R for which $v(x,y) = \nabla f(x,y)$? In other words, does a vector field have a potential function? If so, the potential function $f(x,y)$ is a kind of spatial antiderivative for $v(x,y)$

If the vector field $v(x,y)$ has a potential function, then $\frac{\partial}{\partial y} v_1 (x,y) = \frac{\partial}{\partial x} v_2(x,y)$

According to this criterion, the vector field

$$
v(x,y) = \begin{pmatrix} 2xy \\ x^2 y^2 \end{pmatrix}
$$

has no potential function, since $\frac{\partial}{\partial y} v_1 (x,y) = 2x$ and $\frac{\partial}{\partial x} v_2(x,y) = 2xy^2$

Under mildly restrictive conditions, the reverse also applies. A vector field $v(x,y)$ has a potential function if $\frac{\partial}{\partial y} v_1 (x,y) = \frac{\partial}{\partial x} v_2(x,y)$

Similarly, for vector fields in R$^3$ we find that a vector field $v(x,y,z)$ has a potential function if 
- $\frac{\partial}{\partial y}v_1(x,y) = \frac{\partial}{\partial x}v_2(x,y)$ 
- $\frac{\partial}{\partial z}v_1(x,y) = \frac{\partial}{\partial x}v_3(x,y)$
- $\frac{\partial}{\partial z}v_2(x,y) = \frac{\partial}{\partial y}v_3(x,y)$

>[!Question]
>Test whether the following vector field is a gradient field
>
>$$
>v(x,y)=\begin{pmatrix}2x+y \\ 1-x \end{pmatrix}
>$$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>\frac{\partial}{\partial y} v_1 (x,y) &= 1 \\
>>\frac{\partial}{\partial x} v_2(x,y) &= -1
>>\end{aligned}
>>$$
>>
>>$1 \neq -1$, so this is not a gradient field

>[!Question]
>Test whether the following vector field is a gradient field
>
>$$
>