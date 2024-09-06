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







