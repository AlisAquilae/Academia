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

# 2.2 Rectangular Domains
## 2.2.1 Refresher: Integration Over an Interval (Skipped)

## 2.2.2 Refresher of Integration Techniques: Substitution and Integration by Parts
The method of substitution is useful when the integrand contains a composite function

>[!Tip]
>Algorithm for the method of substitution:
>1. Look for a composite function $f(u(x))$ as a part of the integrand. Here the identification of the inner function $u(x)$ is of prime importance; the outer function $f(u)$ turns up on its own accord
>2. Choose $u = u(x)$
>3. Determine the derivative $\frac{du}{dx}=u'(x)$. Check whether this expression appears as a part of the integrand
>4. If necessary, rewrite the integrand and substitute the new variable $u$ with $du = u'(dx)$
>
>$$
>\int_a^b f(u(x))u'(x)dx = \int_{u(a)}^{u(b)} f(u) du
>$$

>[!Example]
>In the integral 
>
>$$
>\int_0^1 xe^{-x^2}dx
>$$
>
>we recognize a composite function of $f(u)=e^u$ and $u(x)=-x^2$. The derivative of the inner function $u'(x) = -2x$, also appears in the integrand up to a factor of $-2$. Therefore
>
>$$
>\begin{aligned}
>\int_0^1 xe^{-x^2} &= -\frac{1}{2} \int_0^1 e^{-x^2 } \cdot -2x \, dx \\
>&= -\frac12 \int_0^{-1} e^u \, du \\
>&= -\frac12 \left[ e^u \right]_{u=0}^{u=-1} \\
>&= -\frac12(e^{-1} - e^0) \\
>&= \frac12(1-e^{-1})
>\end{aligned}
>$$
>

Integration by parts is useful when integrating a product of functions

>[!Tip]
>Algorithm for the method of integration by parts
>1. Identify the integrand as the product of two functions
>2. Identify one of the factors as a derivative; that is, write the integrand in the form $f(x)g'(x)$
>3. Set up a scheme containing $f(x), f'(x), g(x), g'(x)$
>4. Apply the rule $\int_a^b f(x)g'(x)dx = \left[ f(x)g(x) \right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx$
>5. Finally, find $\int_a^b f'(x)g(x)dx$

>[!Example]
>In the integral
>
>$$
>\int_0^\infty xe^{-x} dx
>$$
>
>we recognise an integrand as a product of $x$ and $e^{-x}$. Although we can identify both factors as the derivative of a known function, only the choice $f(x) = x$ and $g'(x) = e^{-x}$ leads to a useful result
>
>$$
>\begin{aligned}
>\int_0^\infty xe^{-x}dx &= \left[ x \cdot -e^{-x} \right]_{x=0}^{x=\infty} - \int_0^\infty 1 \cdot -e^{-x} dx \\
>&= (0-0) + \int_0^\infty e^{-x}dx \\
>&= \left[ -e^{-x} \right]_{x=0}^{x=\infty} \\
>&= 0 - -1 \\
>&= 1
>\end{aligned}
>$$
>


## 2.2.3 Integration Over a Rectangle (Skipped)

## 2.2.4 Double Integrals ad Iterative Integrals
For a rectangular domain bounded by the lines  $x=a, x=b, y=c$ and $y=d$ 

$$
\int \int f(x,y)dA = \int_c^d \int_a^b f(x,y)dxdy
$$

Note that the limits in outer integral correspond to the outer integration variable, $y$, and that the inner integral corresponds to the inner integration variable, $x$. 

>[!Tip]
>You can swap whether you first differentiate X and Y, as long as you then also swap the integrals and the integration variables in the notation

>[!Example]
>We want to integrate the function 
>
>$$
>f(x,y)=xy+y^2
>$$
>
>over the rectangular region $R$ given by $0 \le x \le 1$ and $-1 \le y \le 1$. Thus, we evaluate the integral
>
>$$
>V=\int_{-1}^1 \int_0^1 xy+y^2 dx dy
>$$
>
>in which we first integrate with respect to $x$ and next with respect to $y$, as can be seen from the order of the symbols dx and dy. Integrating with respect to $x$, we find
>
>$$
>\begin{aligned}
>V &= \int_{y=-1}^{y=1} \left[ \int_{x=0}^{x=1} xy+y^2 dx \right] dy \\
>&= \int_{y=-1}^{y=1} \left[ \frac12 x^2 y +xy^2 \right]_{x=0}^{x=1}dy \\
>&= \int_{y=-1}^{y=1} \frac12y + y^2 dy
>\end{aligned}
>$$
>
>Here, we mentioned explicitly the integration variable in the limits, although this is not strictly necessary. We will further omit this explicit notation
>
>Next, we integrate with respect to $y$. By integration and evaluation of the limits, the variable $x$ has dissapeared, so an ordinary integral with respect to $y$ remains. 
>
>$$
>\begin{aligned}
>V &= \int_{-1}^1 \frac12 y + y^2 dy \\
>&= \left[ \frac14 y^2 +\frac13 y^3 \right]_{y=-1}^{y=1} \\
>&= (\frac14 + \frac13) - (\frac14 - \frac13) \\
>&= \frac23
>\end{aligned}
>$$

The steps above can be done in reversed order as well; in other words, first integrating with respect to $y$ and then integrating with respect to $x$. In addition, we now integrated along 3 unknowns, $x$ and $y$. Adding more unknowns follows the same principle.

Finally, we note that the physical dimension of the integral is the product of the integration variable and that of thr 