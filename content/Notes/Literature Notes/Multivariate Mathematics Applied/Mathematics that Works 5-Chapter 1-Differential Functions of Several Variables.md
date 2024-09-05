---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---
# 1.1 Introduction
Often, a quantity depends on more than one variable. In this chapter, we consider functions of two variables but most results also apply to functions of more than two variables. 

---
# 1.2 Partial Derivatives and Linear Approximations
In this chapter we discuss differentiation of functions of two variables. We make computations in $R^2$ (and $R^3$). To keep the notation simple, we indicate the coordinates of a point in $R^2$ (or $R^3$) by $x$ and $y$ (or by $x$, $y$ and $z$) instead of $x_1$ and $x_2$ (or $x_1$, $x_2$ and $x_3$). However, the results of this chapter can easily be generalised to functions of $n$ variables. 

## 1.2.1 Functions of One Variable: Graph and Tangent Line
For every number $x$, a function $f(x)$ determines a number $y=f(x)$. The points $(x, f(x))$ in the $(x, y)$-plane together form the graph of $f(x)$. This graph is a curve in the $(x, y)$-plane with equation $y = f(x)$. To every $x$ belongs exactly one value of $y$; $x$ is called the independent and y the dependent variable.

A linear approximation of a function $f(x)$ about $x=a$ is

$$
f(x) \cong f(a) + f'(a)(x-a)
$$

The graph of the function at the right hand side is the tangent line of $f(x)$ at $x=a$. Thus, an equation for the tangent line of $f(x)$ in $x=a$ is

$$
y = f(a) + f'(a)(x-a)
$$

## 1.2.2 Functions of Two Variables: Graph and Tangent Plane
A function $f(x, y)$ of two variables determines for every two real numbers $x$ and $y$ a number $z = f(x,y)$

>[!Example]
>Examples are
>
>$$
>f(x, y) = 2x-y
>$$
>
>and
>
>$$
>p(t,x) = (2t+1)e^{-x}
>$$
>
>Check that $f(2,1) = 3$ and that $p(2,1) = 5 / e$

The points $(x, y, f(x, y))$ in the $(x, y, z)$-space form together the graph of $f(x, y)$. This graph is a (curved) surface with the equation $z = f(x,y)$. To every point $(x,y)$ in the base plane belongs exactly one point $(x,y,f(x,y))$ on the graph; the variables $x$ and $y$ are the independent variables and $z$ is the dependent variable. A part of the graph of such a function is depicted below

>[!Missing]
>Figure 1.2


The point $P = (a,b,f(a,b))$ lies on the graph above the point $Q = (a,b)$ in the base plane. Two tangent lines of $f(x,y)$ through $P$ and $RS$, parallel to the $(x,z)$-plane, and $TU$, parallel in the $(y,z)$-plane. The plane $XYZ$ spanned by these lines contains all tangent lines to the surface through $P$; this plane is the [[Tangent Plane]] of $f(x,y)$ through $P$. 

## 1.2.3 Partial Derivatives
The essential tool in setting up an equation for the tangent line of a function $f(x)$ of one variable is the derivative, $f'(x)$. Likewise, for setting up an equation for the tangent plane of a function $f(x,y)$ of two variables one needs derivatives. The only technical complication is that we now take derivatives with respect to two distinct variables.

The key in differentiating $F(x,y)$ with respect to $x$ is to keep $y$ fixed, as a constant. This is called [[Partial Differentiation]] with respect to $x$. The result is the partial derivative of $f(x,y)$ with respect to $x$. It is denoted by $f_x(x,y)$ or by $\frac{\partial}{\partial x} f(x,y)$

Likewise, we partially differentiate $f(x,y)$ with respect to $y$ by differentiating $f(x,y)$ with respect to $y$ and treating $x$ as a constant. 

>[!Example]
>The partial derivatives of the function $f(x,y) = xy^2 + y$ are (check!)
>
>$$
>f_x(x,y) = y^2 
>$$
>
>$$
>f_y(x,y) = 2xy+1
>$$

The partial derivative at $x=a$ and $y=b$ is the slope of the tangent line to the graph of $f(x,y)$

## 1.2.4 The Equation for the Tangent Line
When we restrict the function $f(x,y)$ to the plane $y=b$, the linear approximation about $x=a$ becomes $f(x,b) \cong f(a,b) + f_x(a,b)(x-a)$

Similarly, when varying only $y$ and keeping $x$ fixed at $x=a$ we find $f(a,y) \cong f(a,b) + f_y(a,b)(y-b)$

The first order approximation of the function $f(x,y)$ of two variables is found by varying both $x$ and $y$ simultaneously, starting in the point $(a,b)$. It turns out that we can simply add the effects of the variation of $x$ and the variation of $y$ together

The first order approximation of $f(x,y)$ through $a,b,f(a,b))$ is $f(x,y) \cong f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$

The graph of the function at the right hand side is the tangent plane of $f(x,y)$.

>[!Example]
>We set up an equation for the tangent plane of $f(x,y)$ at the point $(x,y) = (2,1)$. First we compute the function value $z = f(2,1) = 2$. Next, the partial derivatives
>
>$f_x(x,y) = 1 / y$
>$f_x(2,1)=1$
>$f_y(x,y) = -x/y^2$
>$f_y(2,1) = -2$
>
>These results give the following equation for the tangent plane
>
>$$
>z = 2 + 1(x-2) + -2(y-2) \Rightarrow z = x -2y + 2
>$$


## 1.2.5 Displacements and Perturbations
A linear approximation $f(x)$ about $x=a$ shows the effect of a small deviation $\Delta x$ on the function value. With $f(x) \cong f(a) + f'(a)(x-a)$ we arrive $\Delta x = x-a$ and $\Delta f = f(x) - f(a)$ to find

$$
\Delta f = f(a+\Delta x) - f(a) \cong f'(a)\Delta x
$$

so a small deviation $\Delta x$ in the independent variable is multiplied by a propagation factor $f'(a)$ to bring about a deviation $\Delta f$ in the dependent variable

Likewise, the linear approximation of a function $f(x,y)$ of two variables $(a,b)$ is 

$$
f(x,y) \cong f(a,b)+f_x(a,b)(x-a) + f_y(a,b)(y-b)
$$

And with $\Delta f = f(a + \Delta x, b + \Delta y) - f(a,b)$ we find

$$
\Delta f \cong f_x(a,b)\Delta x+ f_y(a,b)\Delta y
$$

>[!Example]
>Following from the previous example:
>
>The partial derivatives of the function $f(x,y) = x/y$ in $(x,y) = (2,1)$ are $f_x(2,1) = 1$ and $f_y(2,1) = -2$. Thus, the effect of small deviations $\Delta x$ and $\Delta y$ in the independent variable is
>
>$$
>\Delta f \cong \Delta x + -2 \Delta y
>$$





