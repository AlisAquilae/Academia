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
### 5.1 Substitution
#### 5.1.1 The Chain Rule and the Substitution Method
Previously we have seen how we can find the [[Antidifferentiation|Antiderivative]] of a standard function. Moreover, it turned out that an almost standard function like $f(x)=e^{4x}$ could also be integrated directly. If we guess $F(x)=e^{4x}$ to be an antiderivative, we find upon differentiation an extra factor 4. Division by 4 produces a correct antiderivative; the derivative of $F(x)=\frac14e^{4x}$ is $f(x)=e^{4x}$. 

The above method seems to be a convenient technique to substantially extend our supply of antiderivatives. Unfortunately, there is a catch, and no small one indeed

>[!Example]
>We try to apply the above trick to the function 
>
>$$
>f(x)=\cos(x^2)
>$$
>
>For antiderivative we try $F(x)=\sin(x^2)$, knowing that the antiderivative of $\cos(x)$ is $\sin(x)$. Upon differentiation, we find
>
>$$
>F'(x)=\cos(x^2)-\frac{\sin(x^2)}{2x^2}
>$$
>
>Apart from the required $f(x)=\cos(x^2)$ we get an extra term, which we did not want at all. The method clearly fails in this case

The method turns out to be effective only when the independent variable $x$ is replaced by a linear function of $x$. Here, we replaced $x$ by $x^2$, producing an unwanted extra term in the derivative.

To deal with this, we can use the **method of substitution**. Here, we substitute part of the function $f(x)$ with $u(x)$: an arbitrarily chosen function. The steps are as follows:
1. Look for a composite function $f(u(x))$ as a part of the integrand. Initially, focus at the identification of the inner function $u(x)$; the outer function $f(u)$ is dealt with later
2. Choose $u=u(x)$ as the new variable
3. Determine the derivative $u'(x)$. Check whether this is a factor of the integrand
4. If necessary, rewrite the integrand, and substitute for the new variable $u$ with $du=u'(x)dx$
5. Find the antiderivative of $f(u)$ and substitute $u(x)=u$ back into the result

>[!Example]
>We determine the integral
>
>$$
>\int \cos(x)e^{\sin(x)}dx
>$$
>
>The trick is to find the substitution. We try $u=u(x)=sin(x)$. Indeed, $u'(x)=\cos(x)$, so
>
>$$
>\begin{aligned}
>\int \cos(x)e^{\sin(x)}dx &= \int e^{\sin(x)} \cos(x)dx \\
>&= \int e^{u(x)}u'(x)dx \\
>&= \int e^u du \\
>&= e^u + C \\
>&= e^{\sin(x)} \\
>\end{aligned} 
>$$

>[!Note]
>A mnemonic to memorise the substitution method is writing the derivative of $u'(x)$ as
>
>$$
>u'(x)=\frac{du}{dx} \Rightarrow u'(x)dx = du
>$$
>
>In this way, the substitution carries $u'(x)dx$ over into $du$. 

It may be useful to multiple the integrand by a constant factor to make the derivative $u'(x)$ better visible. Of course, we must compensate by dividing the integral by the same factor. In this way, the method of substitution is also effective for linear functions like $u(x)$, the guessing technique used in direct integration.

>[!Example]
>At first sight, the integrand in 
>
>$$
>\int e^{-5x}dx
>$$
>
>is no clear candidate for substitution; for effective substitution of $u(x)=-5x$, the required derivative of $u'(x)=-5$ is missing. We may solve this issue by multiplying the integrand with the missing factor, while dividing the integral by this same factor
>
>>[!Info]
>>This is allowed because of the constant factor rule discussed previously
>
>Using $u=u(x)$ we obtain
>
>$$
>\begin{aligned}
>\int e^{-5x}dx &= -\frac{1}{5} \int e^{-5x} \cdot -5 dx \\
>&= -\frac{1}{5} e^{u(x)}u'(x)dx \\
>&= -\frac{1}{5} e^u du \\
>&= -\frac{1}{5} e^u + C \\
>&= -\frac{1}{5} e^{-5x}+C \\
>\end{aligned}
>$$

#### 5.1.2 Special Case
Functions of the type $f