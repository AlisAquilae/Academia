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
>v(x,y,z)=\begin{pmatrix}2xy+z \\ x^2 +4y \\ x+2 \end{pmatrix}
>$$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>\frac{\partial}{\partial y}v_1(x,y) &= 2x \\
>>\frac{\partial}{\partial x}v_2(x,y) &= 2x \\
>>\frac{\partial}{\partial z}v_1(x,y) &= 1 \\
>>\frac{\partial}{\partial x}v_3(x,y) &= 1 \\
>>\frac{\partial}{\partial z}v_2(x,y) &= 0 \\
>>\frac{\partial}{\partial y}v_3(x,y) &= 0 \\   
>>\end{aligned}
>>$$
>>
>>$2x = 2x$ and $1 = 1$ and $0 = 0$, so this vector field is a gradient field


## 5.2.4 Finding a Potential Function
If a vector field given in a formula has a potential function, then we can constrict this potential by taking antiderivatives. The problem is that a potential function must be a *common* antiderivative of all coordinates of the vector field. If such a common antiderivative does not exist, there is no potential function, and the vector field is not a gradient field. If a potential function does exist, then there are infinitely many, since a potential function is determined up to an arbitrary constant

>[!Example]
>According to the criterion, the vector field
>
>$$
>v(x,y,z)=\begin{pmatrix}2xy+z \\ x^2 +4y \\ x+2 \end{pmatrix}
>$$
>
>has a potential function (see the question above). Such a function must satisfy
>
>$$
>\nabla f(x,y,z) = \begin{pmatrix}f_x(x,y,z) \\ f_y(x,y,z) \\ f_z(x,y,z) \end{pmatrix} = \begin{pmatrix} 2xy+z \\ x^2 + 4y \\ x + 2 \end{pmatrix}
>$$
>
>First we integrate $f_x(x,y,z) = 2xy+z$ with respect to $x$
>
>$$
>\begin{aligned}
>f(x,y,z) &= \int f_x(x,y,z) \, \mathrm dx \\
>&= \int 2xy+z \, \mathrm dx \\
>&= x^2 y + xz + g(y,z)
>\end{aligned}
>$$
>
>where $g(y,z)$ is the integration constant (constant only with respect to the integration variable x!). For any function $g(y,z)$ we now have a candidate potential $f(x,y,z)$ for which $f_x(x,y,z) = v_1(x,y,z)$.For the second coordinate $f_y(x,y,z)$ of $\nabla f(x,y)$ we find
>
>$$
>\left. 
>\begin{array}{ll}
>f_y(x,y,z) &= \frac{\partial}{\partial y}\Bigl(x^2 y + xz + g(y,z)\Bigr) = x^2 +g_y(y,z) \\
>v_2(x,y) &= x^2 +4y
>\end{array}
>\right\} \, \Rightarrow \, g_y(y,z)=4y
>$$
>
>Taking the antiderivative of $g_y(y,z) = 4y$ with respect to $y$ we find
>
>$$
>g(y,z)=2y^2 + h(z) \, \Rightarrow \, f(x,y,z) = x^2 y +xz +2y^2 +h(z)
>$$
>
>Now, $f_y(x,y,z) = v_2(x,y,z)$, for any function $h(z)$. Finally, $f_z(x,y,z)$ gives
>
>$$
>\left.
>\begin{array}{ll}
>f_z(x,y,z) &= \frac{\partial}{\partial z} \Bigl( x^2y + xz +2y^2 + h(z) \Bigr) = x + h'(z) \\
>v_3(x,y,z) &= x+2
>\end{array}
>\right\} \, \Rightarrow \, h'(z) = 2
>$$
>
>and $h(z)=2z + C$ with an arbitrary constant $C$, so
>
>$$
>f(x,y,z)=x^2y + xz + 2y^2 + 2z + C
>$$
>
>The vector field $v(x,y,z)$ is the gradient of $f(x,y,z)$ and $f(x,y,z)$ is a potential function of $v(x,y,z)$. Note that the potential function contains an undetermined constant, $C$.

---
# 5.5 Divergence and Laplace Operator
In this section, we consider flows in R$^2$ and in R$^3$. Flows in R$^2$ are called two-dimensional flows. We shall discuss them as if they relate to matter transport; however, the results are valid for heat or electrical charge flows and for gravitational and electric fields

A flow is described by the flow density; for two dimensional matter transport, this is

$$
w(x,y)= \sigma (x,y) v(x,y)
$$

where
- $v(x,y)$ is the velocity field [m/s]
- $\sigma (x,y)$ is the surface mass density [kg/m$^2$]

So the unit of the two-dimensional flow density $w(x,y)$ is kg / m s

In R$^3$ the flow density of matter transport is

$$
w(x,y,z) = \rho (x,y,z)v(x,y,z)
$$

where
- $\rho (x,y,z)$ is the mass density [kg/m$^3$]
- $v(x,y,z)$ is the velocity field

The unit of the flow density is then kg / m$^2$ s

In this section, we examine how to formulate a balance equation for matter transport using its flow density field

## 5.5.1 Transversal Flow
We consider a spatially uniform two-dimensional flow-density field $w(x,y)=w$. The flow passes (at least in part) through a segment $K$ between points $A$ and $B$, with length $l$. We want to know how much substance passes through $K$ per unit of time. To this end, we decompose the vector $w$ in a component along $K$ and a component orthogonal to $K$ as 

$$
w = w^{//} + w^{\perp}
$$

The component $w^{//}$ is called the tangential flow density. It does not contribute to the mass transport through $K$; after all, it does not pass through $K$. 

The component $w^{\perp}$ is called the transversal flow density. As it is orthogonal to $K$, it fully contributes to the mass flow, to the effect of

$$
F = \left|w^\perp \right| \, l
$$

In other words, flow is the product of the flow density and the length of the cross-section

We see that only the transversal flow density $w^\perp$ contributes to the flow through $K$. Hence, we have to compute this transversal component $w^\perp$ of $w$. A general discussion on how this is calculated is postponed to paragraph 5.8.

>[!Note]
>Paragraph 5.8 is not part of this course, meaning that this general calculation is out of scope

For now, we may confine ourselves to the simple case that the segment $K$ is parallel to one of the coordinate axes. 

>[!Example]
>A two-dimensional mass flow with flow density
>
>$$
>w = \begin{pmatrix}2\\1 \end{pmatrix}
>$$
>
>passes the segment $K$ between the points $A=(1,2)$ and $B=(3,2)$. As the second coordinates of $a$ and $b$ are equal, the segment $K$ is parallel to the $x$-axis. Hence, the tangential component $w^{//}$ is also parallel to the $x$-axis, and therefore the orthogonal component $w^\perp$ is parallel to the $y$-axis
>
>$$
>w^{//} = \begin{pmatrix}2\\0 \end{pmatrix} \, , \, w^\perp = \begin{pmatrix} 0 \\ -1 \end{pmatrix}
>$$
>
>Thus, the flow of $w$ through $K$ is 
>
>$$
>\begin{aligned}
>F &= |w^\perp | \, l  \\
>&= \left| \begin{pmatrix} 0\\-1 \end{pmatrix} \right| \cdot (3-1) \\
>&= |-2| \\
>&= 2
>\end{aligned} 
>$$
>
>Because of the minus-sign in $w^\perp$, the flow passes through $K$ downwards


Similar considerations apply to three-dimensional flows. Whereas a two-dimensional flow may cross a segment, which is a one-dimensional object, a three-dimensional flow $w(x,y,z) = w$ must cross a two-dimensional surface $R$, for example a triangle, rectangle or parallelogram. Again, we can decompose the flow density $w$ into a component $w^{//}$ along $R$ and a component $w^\perp$ orthogonal to $R$

$$
w = w^{//} + w^\perp
$$

The flow density $F$ through $R$ is now the product of the transversal component $w^\perp$ with the area $A$ of $R$

$$
F = \left| w^\perp \right| \, A
$$

>[!Note]
>Note that the matter flow in R$^2$ and R$^3$ have the same dimension, kg / s

For the actual computation of the transversal flow, we again restrict ourselves to the simplest case, which is a rectangle parallel to two of the three coordinate axes

>[!Example]
>A mass flow with density
>
>$$
>w = \begin{pmatrix}-1\\2\\2 \end{pmatrix}
>$$
>
>passes the rectangle $R$ with vertices $A = (1,3,2)$, $B = (1,3,5)$, $C = 4,3,5$ and $D = (4,3,2)$. All these points have 3 as a second coordinate, so $R$ lies in the plane $y=3$. Therefore, $w^\perp$ is the component of $w$ that is parallel to the $y-axis$, so 
>
>$$
>w^\perp = \begin{pmatrix}0\\2\\0 \end{pmatrix} \, , \, w^{//} = \begin{pmatrix}-1\\0\\2 \end{pmatrix}
>$$
>
>Thus, the flow of $w$ through $K$ is
>
>$$
>\begin{aligned}
>F &= \left| w^\perp \right| \, A \\
>&= \left| \begin{pmatrix}0\\2\\0 \end{pmatrix} \right| \cdot (4-1)(5-2) \\
>&= 18
>\end{aligned}
>$$


## 5.5.2 The Divergence of a Vector Field
Picture a rectangle $ABCD$ in R$^2$. Through this domain there is a two-dimensional mass flow, with mass density $\sigma (x,y)$ and velocity $v(x,y)$. Thus, the flow density field is 

$$
w(x,y)= \sigma (x,y) v(x,y)
$$

As the flow density is spatially varying, the outflow may not be balanced exactly by the inflow, so the amount of mass in the rectangle changes in time. Therefore, we will compute the net outflow $F$ of $w(x,y)$ from the rectangle

The divergence of the vector field $w(x,y)$ in $(x,y)$ is

$$
\text{div } \, w(x,y) = \frac{\partial}{\partial x}w_1(x,y) + \frac{\partial}{\partial y} w_2(x,y)
$$

A vector field $w(x,y)$ for which $\text{div } \, w(x,y) = 0$ for any $x$ and $y$ is called divergence free

Instead of $\text{div } \, w(x,y) = 0$, the symbolic notation $\nabla \cdot w(x,y)$ is also used. Here the divergence of a vector field $w(x,y)$ is considered as the inner product of the gradient $\nabla$ with the vector field

$$
\text{div } \, w(x,y) = \frac{\partial}{\partial x}w_1(x,y) + \frac{\partial}{\partial y} w_2(x,y) = \left( \begin{pmatrix}\frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{pmatrix}, \begin{pmatrix}w_1(x,y) \\ w_2(x,y) \end{pmatrix} \right)
$$

The net outflow rate $F$ of $w(x,y)$ from a small rectangular domain with sides $\Delta x$ and $\Delta y$ and centre $(x,y)$ is in first-order approximation

$$
F \cong \nabla \cdot w(x,y) \Delta x \Delta y
$$

The divergence $\nabla \cdot w(x,y)$ of a vector field $w(x,y)$ denotes the local outflow rate at position $(x,y)$ per unit area

>[!Important]
>Here, we are talking about an outflow rate. If we are looking for an inflow rate, we need to include a negative-sign before our answer

The gradient introduced in [[#5.2 Gradient and Potential|Paragraph 5.2]] is a differentiation operator that takes a scalar field $f(x,y)$ as an argument and returns the vector field $\nabla f(x,y)$. The divergence introduced here is also a differential operator, but this one takes a vector field $v(x,y)$ as an argument, and returns the scalar field $\nabla \cdot v(x,y)$. 

>[!Question]
>A two-dimensional matter flow is given by the flow density field
>
>$$
>w(x,y)=\begin{pmatrix}xy-3 \\ y/x \end{pmatrix}
>$$
>
>Compute the outflow rate from a small rectangle about the point $(1,3)$ with sides (parallel to the coordinate axes) with lengths $\Delta x$ and $\Delta y$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>w_x(x,y) &= y \\
>>w_x(1,3) &= 3 \\ 
>>w_y(x,y) &= 1/x \\
>>w_y(1,3) &= 1 \\
>>\nabla \cdot w(x,y) &= w_x(x,y) + w_y(x,y) \\
>>&= 3+1 \\
>>&= 4 \\
>>F &\approx \nabla \cdot w(x,y) \, A \\
>>&\approx 4 \Delta x \Delta y 
>>\end{aligned}
>>$$

In three dimensions, the divergence $\nabla \cdot w(x,y,z)$ of the vector field $w(x,y,z)$ is defined as 

$$
\nabla \cdot w(x,y,z) = \frac{\partial}{\partial x}w_1(x,y,z) + \frac{\partial}{\partial y}w_2(x,y,z) + \frac{\partial}{\partial z}w_3(x,y,z)
$$

Exactly as above, we can calculate the outflow rate of a three-dimensional flow density $w(x,y,z)$ from a rectangular block with dimensions $\Delta x$, $\Delta y$ and $\Delta z$. We then compute the flow through the six rectangles that bound the block. For the outflow, we thus find

$$
F \cong \nabla \cdot w(x,y,z) \Delta x \Delta y \Delta z
$$

>[!Warning]
>As for the gradient $\nabla$, for the divergence we differentiate with respect to the spatial variables only, so for a vector field $w(x,y,t)$ with two spatial variables $x$ and $y$ and a temporal variable $t$, 
>
>$$
>\nabla \cdot w(x,y,t) = \frac{\partial}{\partial x}w_1(x,y) + \frac{\partial}{\partial y} w_2(x,y)
>$$


>[!Question]
>A matter flow is given by the flow density field
>
>$$
>w(x,y,z) = \begin{pmatrix}xy \\ yz \\ zx \end{pmatrix}
>$$
>
>Compute the inflow rate of this matter flow in a small rectangular block about the point $(1,1,0)$ with edges (parallel to the coordinate axes) with lengths $\Delta x$, $\Delta y$ and $\Delta z$. 
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>\frac{\partial}{\partial x} w_1(x,y,z) &= y \\
>>\frac{\partial}{\partial x} w_1(1,1,0) &= 1 \\
>>\frac{\partial}{\partial y} w_2(x,y,z) &= z \\
>>\frac{\partial}{\partial y} w_2(1,1,0) &= 0 \\
>>\frac{\partial}{\partial z} w_3(x,y,z) &= x \\
>>\frac{\partial}{\partial z} w_3(1,1,0) &= 1 \\
>>\nabla \cdot w(x,y,z) &= 1+0+1 \\
>>&= 2 \\
>>F_{\text{in}} & \approx - \nabla \cdot w(x,y,z) \, V \\
>>&= -2 \Delta x \Delta y \Delta z
>>\end{aligned}
>>$$
>>
>>>[!Note]
>>>Note the negative sign. We include this because we are trying to find an inflow, not an outflow


##  5.5.3 The Balance Equation
Now we consider a surface mass density $\sigma$ (superficial 2D concentration) and a two-dimensional mass flow density field $w$ that may depend on space and time

$$
w(x,y,t)=\sigma(x,y,t)v(x,y,t)
$$

In the absence of sources and sinks, the mass density $\sigma(x,y,t)$ can be affected only by the mass flow density field $w(x,y,t)$. More precisely, we find that in the absence of sources and sinks, a two-dimensional flow density $w(x,y)$ affects the mass density $\sigma(x,y)$ as 

$$
\frac{\partial}{\partial t} \sigma(x,y,t) = -\nabla \cdot w(x,y,t)
$$

In R$^3$, a flow density $w(x,y,z)$ affects the mass density $\rho(x,y,z)$ as

$$
\frac{\partial}{\partial t} \rho(x,y,z,t) = -\nabla \cdot w(x,y,z,t)
$$

As a consequence, if the mass flow density is divergence free and there are no sources and sinks, then the mass density ($\sigma$ or $\rho$ is constant in time)

>[!Question]
>A two-dimensional mass flow density is given by a time-dependent flow density field
>
>$$
>w(x,y,t) = \begin{pmatrix}\sin(x)\cos(t) \\ \cos(y)\sin(t)\end{pmatrix}
>$$
>
>Find the rate of change of the mass density $\sigma(x,y,t)$ at $x=0$, $y=0$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>\sigma (x,y,t) &= - \nabla \cdot w(x,y,t) \\
>>\nabla \cdot w(x,y,t) &= \frac{\partial}{\partial x}w_1(x,y,t) + \frac{\partial}{\partial y}w_2(x,y,t) \\
>>&= \cos(x)\cos(t) - \sin(y)\sin(t) \\
>>\sigma (0,0,t) &= - \nabla \cdot w(0,0,t) \\
>>\nabla \cdot w(0,0,t) &= \cos(0)\cos(t) - \sin(0)\sin(t) \\
>>&=  1 \cdot \cos(t) - 0 \cdot \sin(t) \\
>>&= \cos(t) \\
>>\sigma (0,0,t) &= -\cos(t)
>>\end{aligned}
>>$$


## 5.5.4 The Laplace Operator

>[!Example]
>The gradient of the function $f(x,y) = x^2 y + y^2 -2x$ is
>
>$$
>\nabla f(x,y) = \begin{pmatrix}f_x(x,y) \\ f_y(x,y) \end{pmatrix} = \begin{pmatrix} 2xy-2 \\ x^2 +2y \end{pmatrix}
>$$
>
>This is a function from R$^2$ to R$^2$, a vector field. The divergence of this vector field is
>
>$$
>\text{div} \nabla f(x,y) = \frac{\partial}{\partial x}(2xy-2) + \frac{\partial}{\partial y}(x^2 +2y) = 2y+2
>$$
>
>This in turn is a function from R$^2$ to R, a scalar field

Numerous applications involve functions $f(x,y)$ from R$^2$ to R of which we first take the gradient; the result is a vector field $\nabla f(x,y)$. Next we take the divergence of this vector field. We thus compute

$$
\text{div} \nabla f(x,y) 
$$

and this is a function from R$^2$ to R (scalar field) again. This combination occurs so often that it has its own symbol: the Laplace operator $\Delta$. 

For any function $f(x,y)$ from R$^2$ to R, $\Delta f(x,y)$ is the function from R$^2$ to R defined as 

$$
\begin{aligned}
\Delta f(x,y) &= \text{div}(\nabla f(x,y)) \\
&= \frac{\partial^2}{\partial x^2} f(x,y) + \frac{\partial^2}{\partial y^2} f(x,y) \\
&= f_{xx}(x,y) + f_{yy}(x,y)
\end{aligned}
$$



>[!Note]
>Given that the divergence can, again, be denoted as $\nabla$, the Laplace operator is sometimes denoted as $\nabla \cdot \nabla$ or $\nabla^2$

>[!Example]
>Continuing with the previous example: for the function $f(x,y)=x^2 y + y^2 -2x$,
>
>$$
>\Delta f(x,y)= \frac{\partial^2}{\partial x^2} (x^2 y + y^2 -2x) + \frac{\partial^2}{\partial y^2} (x^2 y + y^2 -2x) = 2y+2
>$$
>
>This is the same as the result above

>[!Warning]
>The Laplace operator $\Delta$ must not be confused with differences such as $\Delta x$


>[!Question]
>Find $\Delta f(x,y)$ for 
>
>$$
>f(x,y) = \sin (\lambda x) \cos(\mu y)
>$$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>f_x(x,y) &= \lambda \cos(\lambda x)\cos(\mu y) \\
>>f_{xx}(x,y) &= - \lambda^2 \sin(\lambda x)\cos(\mu y) \\
>>f_y(x,y) &= - \mu \sin(\mu y) \sin(\lambda x) \\
>>f_{yy}(x,y) &= - \mu ^2 \cos(\mu y) \sin(\lambda x) \\
>>\Delta f(x,y) &= f_{xx}(x,y) + f_{yy}(x,y) \\
>>&= - \lambda^2 \sin(\lambda x)\cos(\mu y) - \mu ^2 \cos(\mu y) \sin(\lambda x) \\
>>&= -(\lambda ^2 + \mu^2)\sin(\lambda x)\cos(\mu y)
>>\end{aligned}
>>$$


The Laplace operator in R$^3$ is defined in the same way

For any function $f(x,y,z)$ from R$^3$ to R, $\Delta f(x,y,z)$ is the function from R$^3$ to R defined as 

$$
\begin{aligned}
\Delta f(x,y,z) &= \text{div}(\nabla f(x,y,z)) \\
&= \frac{\partial^2}{\partial x^2} f(x,y,z) + \frac{\partial^2}{\partial y^2} f(x,y,z) + \frac{\partial^2}{\partial z^2} f(x,y,z) \\
&= f_{xx}(x,y,z) + f_{yy}(x,y,z) + f_{zz} (x,y,z)
\end{aligned}
$$

## 5.5.5 The Laplace Operator in Other Coordinate Systems
A function of two spatial variables is not necessarily expressed in Cartesian coordinates $x$ and $y$. A frequently used alternative are the spatial coordinates $r$ and $\varphi$, introduced in [[Mathematics that Works 5-Chapter 2-Integration in Two or Three Dimensions#2.8 Coordinate Transforms|Paragraph 2.8]]. They are connected to the ordinary (Cartesian) coordinates $x$ and $y$ via the relations

$$
\begin{aligned}
x &= r \cos(\varphi) \\
y &= r \sin (\varphi)
\end{aligned}
$$

Of course, we can compute $\Delta f(x,y)$ for a function $f(r, \varphi)$ by changing the variables to $x$ and $y$, then applying the Laplace operator (with repeated use of the chain rule), and finally substituting the polar coordinates $r$ and $\varphi$ back again. This is quite a laborious procedure. Fortunately, there is a formula available for determining $\Delta f(r, \varphi)$ directly. We present it without derivation

$$
\begin{aligned}
\Delta f(r, \varphi) &= \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial}{\partial r} f(r, \varphi) \right) + \frac{1}{r^2} \frac{\partial ^2}{\partial \varphi ^2} f(r, \varphi) \\
&= \frac{r(r f_r(r, \varphi))_r + f_{\varphi \varphi}(r, \varphi)}{r^2}
\end{aligned}
$$


>[!Warning]
>Skipped the Laplace operators for Cylindrical coordinates and Spherical coordinates


