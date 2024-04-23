---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 3]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
### 7.1 Graph and Tangent Plant
In this chapter we study functions of two variables. We make computations in $R^2$ and $R^3$. To keep the notation simple we indicate the coordinates of a point by $x$ and $y$ (and $z$). Note that the results of this chapter can readily be generalised to functions of $n$ variables

#### 7.1.1 Functions of One Variable: Graph and Tangent Line
For every number $x$, a function $f(x)$ determines a number $y=f(x)$. The points $(x, f(x))$ in the $(x,y)$-plane together form the graph of $f(x)$. This graph is a curve in the $(x,y)$-plane with equation $y=f(x)$. To every $x$ belongs exactly one value of $y$; $x$ is called the independent variable and $y$ the dependent variable

In [[Mathematics that Works 2-Chapter 3-Change and Growth#3.1 Derivative and Change|Chapter 3.1]] we derived a linear approximation of a function $f(x)$ of a single variable

$$
f(x) \cong f(a)+ f'(a)(x-a)
$$

The graph of this function at the right hand side is the tangent line of $f(x)$ at $x=a$. Therefore, an equation for the tangent line is 

$$
y=f(a)+f'(a)(x-a)
$$

Thus we approximate the change in $y$ along the graph from $a$ to $x$ by change along the tangent line of the graph.

#### 7.1.2 Functions of Two Variables: Graph and Tangent Line
A function $f(x,y)$ of two variables determines for every set of two real numbers $x$ and $y$, a number $z=f(x,y)$

>[!Example]
>$f(x,y)=2x-y$ is an example of a function of two variables. Check that $f(2,1)=3$

Together, the points $(x,y,f(x,y))$ in the $(x,y,z)$-space form the graph of $f(x,y)$. This graph is a (curved) surface with equation $z=f(x,y)$. To every point $(x,y)$ in the base plane belongs exactly one point $(x,y,f(x,y))$ on the graph; the variables $x$ and $y$ are the independent variables and $z$ is the dependent variable. 

The point $P=(a,b,f(a,b))$ lies on the graph, above the point $Q=(a,b)$ in the base plane. Two tangent lines of $f(x,y)$ through $P$ are $RS$, parallel to the $(x,z)$-plane, and $TU$, parallel to the $(y,z)$-plane. The plane $XYZ$ spanned by these lines contains all tangent lines to the surface through $P$. This is the **tangent plane** of $f(x,y)$ through $P$

Below we will set up an equation for this tangent plane. 

First we fix the value for $y$, to $y=b$. We define an auxiliary function $g(x)$ of one variable as 

$$
g(x)=f(x,b)
$$

The graph of this function is found as the cross section of the plane $y=b$ with the graph $z=f(x,y)$. Furthermore, we recognise the tangent line $RS$ of $f(x,y)$ in $P$ as the tangent line of $g(x)$ in $P$. The equation of this tangent line is

$$
z=g(a)+g'(a)(x-a)
$$

Thus, the slope of the tangent line $RS$ (with $y=b$ fixed) is $g'(a)$. Hence, a first order approximation of the displacement along the graph of $f(x,y)$ in the x-direction, at a fixed value $y=b$ is

$$
f(x,y) \cong f(a,b) + g'(a)(x-a)
$$

Likewise, we intersect the graph of $f(x,y)$ with the vertical plane $x=a$, by taking $x$ fixed. The curve we obtain as a cross-section of the plane $x=a$ with $z=f(x,y)$ is again  the graph of the auxiliary function of one variable, now $y$:

$$
h(y)=f(a,y)
$$

The tangent line $TU$ of $f(x,y)$ in $P$ corresponds to the tangent line of $h(y)$ in $P$. It satisfies the equation

$$
z=h(b)+h'(b)(y-b)
$$

Now $h'(b)$ is the slope of the tangent line $TU$ at $x=a$ fixed. For a displacement along the graph of $f(x,y)$ in the y-direction, with a fixed value $x=a$, we find

$$
f(x,y) \cong f(a,b)+h'(b)(y-b)
$$

#### 7.1.3 Partial Derivatives
The derivatives $g'(a)$ and $h'(b)$ that we used above can also be derived directly from the function $f(x,y)$. To find $g'(a)$, we differentiate $g(x)=f(x,b)$ with respect to $x$, and then we substitute the value $a$ for $x$. We obtain the same result by differentiating $f(x,y)$ with respect to $x$, treating $y$ as constant, followed by substitution of $a$ and $b$ for $x$ and $y$ respectively. 

In a similar way we can find $h'(b)$, by differentiating $h(y)=f(a,y)$ with respect to $y$ and substituting $y=b$. This is also realised by differentiating $f(x,y)$ with respect to $y$ and treating $x$ as constant, after which we substitute the values $a$ and $b$ for $x$ and $y$ into the result. 

The procedure of differentiating a function $f(x,y)$ with respect to $x$ while holding $y$ fixed is called [[Partial Differentiation]] with respect to $x$. The result is the **partial derivative** of $f(x,y)$ with respect to $x$. It is denoted by $f_x(x,y)$ or by $\frac{\partial}{\partial x}f(x,y)$

>[!Example]
>The partial derivatives of the function $f(x,y)=xy^2 + y$ are
>
>$$
>f_x(x,y)=y^2
>$$
>
>and
>
>$$
>f_y(x,y)=2xy+1
>$$


#### 7.1.4 The Equation for the Tangent Plane
Substituting the partial derivative into the above expression for a displacement in the x-directiono with $y=b$ fixed, we obtain

$$
f(x,y) \cong f(a,b) + f_x(a,b)(x-a)
$$

Similarly, the expression for a displacement in the y-direction with $x=a$ fixed becomes

$$
f(x,y) \cong f(a,b)+f_y(a,b)(y-b)
$$

The first order approximation of the function $f(x,y)$ of two variables is found by varying both $x$ and $y$ simultaneously, starting in the point $(a,b)$. It turns out that in a first order approximation we can simply add the effect of the variation of $x$ and that of the variation of $y$

The first order approximation of $f(x,y)$ about the point $(a,b,f(a,b))$ becomes

$$
f(x,y) \cong f(a,b)+f_x(a,b)(x-a) + f_y(a,b)(y-b)
$$

The graph of the function at the right hand side is the **tangent plane** of $f(x,y)$ through the point $(a,b,f(a,b))$. An equation of the tangent plane is

$$
z = f(a,b)+f_x(a,b)(x-a) + f_y(a,b)(y-b)
$$

>[!Example]
>We set up an equation for the tangent plane of $f(x,y)=x/y$ at the point $(2,1)$. First we compute the function value, $z=f(2,1)=2$. Next, the partial derivatives
>
>$$
>\begin{aligned}
>f_x(x,y) &= 1/y &\Rightarrow f_x(2,1)&=1\\
>f_y(x,y) &= -x/y^2 &\Rightarrow f_y(2,1) &= -2
>\end{aligned}
>$$
>
>We substitute the values calculated to find the equation for the tangent plane
>
>$$
>\begin{aligned}
>z &= 2 + 1\cdot (x-2) + -2 \cdot (y-1) \\
>&= x-2y + 2
>\end{aligned}
>$$


#### 7.1.5 Higher Order Partial Derivatives
The partial derivatives $f_x(x,y)$ and $f_y(x,y)$ themselves are again functions of two variables. We may differentiate them again, with respect to $x$ or $y$. The result is one of the following four so-called **second order partial derivatives**
- $f_{xx}(x,y)$
- $f_{xy}(x,y)$
- $f_{yy}(x,y)$
- $f_{yx}(x,y)$

This procedure may be continues, leading to third and higher order partial derivatives

>[!Example]
>The function $f(x,y)=x^n \ln(y)+ye^{2x}$ has two partial derivatives
>
>$$
>\begin{aligned}
>f_x(x,y)&=2x \ln(y) + 2ye^{2x} &\text{ and } f_y(x,y) &= \frac{x^2}{y}+e^{2x} \\
>\end{aligned}
>$$
>
>Differentiating once more yields four second order partial derivatives
>
>$$
>\begin{aligned}
>f_{xx}(x,y)&= 2\ln(y)+4ye^{2x} &\text{ and } f_{yx}(x,y)&= \frac{2x}{y}+2e^{2x} \\
>f_{xy}(x,y)&= \frac{2x}{y}+2e^{2x} & \text{ and } f_{yy}(x,y) &= -\frac{x^2}{y^2}
>\end{aligned}
>$$

In this example, $f_{xy}(x,y)$ appears to be equal to $f_{yx}(x,y)$. This property holds in general for smooth functions. Thus, the order in which partial derivatives are taken does not matter. 
