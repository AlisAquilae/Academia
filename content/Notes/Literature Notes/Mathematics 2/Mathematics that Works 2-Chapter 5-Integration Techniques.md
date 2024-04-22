---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 2]]"]
Draft: 
Status: Done
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
Functions of the type $f(x)=u'(x)/u(x)$ can always be integrated using the method of substitution.

The general rule for this type of integrals is

$$
\int \frac{u'(x)}{u(x)}dx = \ln(|u(x)|) + C
$$

>[!Example]
>In the integral 
>
>$$
>\int \frac{2x+1}{x^2 + x + 1}dx
>$$
>
>the integrand has the form $u'(x) / u(x)$, since the numerator is exactly the derivative of the denominator. With the substitution $u(x)=x^2 + x + 1$ we find
>
>$$
>\begin{aligned}
>\int \frac{2x+1}{x^2 + x + 1}dx &= \int \frac{(x^2 + x + 1)'}{x^2 + x + 1}dx \\
>&= \int \frac{u'(x)}{u(x)}dx \\
>&= \int \frac{1}{u(x)}u'(x)dx \\
>&= \int \frac{1}{u}du \\
>&= \ln(|u|)+C \\
>&= \ln (x^2 + x + 1) + C \\
>\end{aligned}
>$$

#### 5.1.3 The Substitution Method for Definite Integrals
When applying a substitution in a definite integral, not only the integration variable itself is involved, but also the limits of integration. They must be made to comply with the new integration variable $u$; if $x$ rund from $a$ to $b$, then $u(x)$ runs from $u(a)$ to $u(b)$

The substitution method for definite integrals reads

$$
\int_a^b f(u(x))u'(x)dx = \int_{u(a)}^{u(b)} f(u)du
$$

>[!Note]
>When using substitution for an indefinite integral, we must substitute the original variable back after integration. This is not necessary for substitution in a definite integral

>[!Example]
>We calculate the definite integral 
>
>$$
>\int_0^{\sqrt{\pi}} x \sin(x^2)dx
>$$
>
>We try the substitution $u=x^2$. For clarity, we use the following scheme:
>- Substitution: $u(x) = x^2$
>- Derivative: $u'(x) = 2x \Rightarrow 2xdx = du$
>- Lower limit: $x=0 \Rightarrow u(0)=0$
>- Upper limit: $x=\sqrt{\pi} \Rightarrow u(\sqrt{\pi})=(\sqrt{\pi})^2 = \pi$
>
>With this substitution we find 
>
>$$
>\begin{aligned}
>\int_0^{\sqrt{\pi}} x \sin(x^2)dx &= \frac12 \int_0^{\sqrt{\pi}} \sin(x^2) 2xdx \\
>&= \frac12 \int_{x=0}^{x=\sqrt{\pi}} \sin(u(x))u'(x)dx \\
>&= \frac12 \int_{u=0}^{u=\pi} \sin(u)du \\
>&= \frac12 [-\cos(u)]^{u=\pi}_{u=0} \\
>&= \frac12 (-\cos(\pi))+\cos(0)) \\
>&= 1 \\
>\end{aligned}
>$$


---
### 5.2 Integration by Parts
#### 5.2.1 The Product Rule and Integration by Parts
The derivative of the product of two functions $f(x)$ and $g(x)$ is

$$
[f(x)g(x)]'=f'(x)g(x) + f(x)g'(x)
$$

Integrating both sides of this equation, we find

$$
f(x)g(x)= \int [f(x)g(x)]' dx = \int f'(x)g(x) dx + \int f(x)g'(x) dx
$$

If we can easily find one of the integrals at the right side, we can also find the other one, which may be the more difficult one:

$$
\int f(x)g'(x) dx = f(x)g(x) + f'(x)g(x)dx
$$

In this way, we may try to simplify our problem

>[!Example]
>We look for an antiderivative of $x \cos(x)$. We recognise this integrand as the product of two functions $f(x)=x$ and $g'(x)=\cos(x)$
>
>$$
>\int x \cos(x) dx = \int f(x) g'(x)dx
>$$
>
>and consequently
>
>$$
>\int f(x)g'(x) dx= f(x)g(x)-\int f'(x)g(x)dx
>$$
>
>$$
>\int x \cos(x) dx = x \sin(x) - \int 1\sin(x) dx
>$$
>
>The integral at the right hand side is straightforward, an antiderivative of $\sin(x)$ is $-\cos(x)$. This yields
>
>$$
>\int x cos(x) dx = x \sin(x) - (-\cos(x)) +C = x \sin(x) + \cos(x)
>$$
>
>With integration constant C. Now we have found an antiderivative of $x \cos(x)$, namely $x\sin(x)+\cos(x)$

>[!Important]
>Algorithm for Integration by Parts:
>1. The integrand can be decomposed as the product of two functions
>2. Identify one of the factors as a derivative by writing the integrand in the form of $f(x)g'(x)$
>3. Set up a scheme: $\left\{\begin{array}f(x) = \dots \Rightarrow f'(x) = \dots \\ g'(x)=\dots \Rightarrow g(x)=\dots \end{array}\right.$
>4. Apply the rule $\int f(x)g'(x) dx = f(x)g(x) + f'(x)g(x)dx$
>5. Finally, find $\int f'(x)g(x)dx$ 

>[!Warning]
>Integration by parts can be performed in two directions. If we make the correct choice, the new integral will be simpler than the original one. If we make the wrong choice, it becomes more difficult!


#### 5.2.2 Integration By Parts for Definite Integrals
Integration by parts for antiderivatives has a natural extention to definite integrals. The procedure is

$$
\begin{aligned}
\int_a^b f(x)g'(x)dx &= \int_a^b (f(x)g(x))' dx - \int_a^b f'(x)g(x)dx \\
&= \left[f(x)g(x)\right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx
\end{aligned}
$$

Removing the intermediate step, we find

$$
\int_a^b f(x)g'(x)dx = \left[f(x)g(x) \right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx
$$

>[!Example]
>We evaluate the definite integral
>
>$$
>I=\int_0^{\pi} x \cos(x) dx
>$$
>
>We choose $g'(x)=\cos(x)$, with antiderivative $g(x)=\sin(x)$. This leaves $f(x)=x$, with derivative $f'(x)=1$. So we obtain
>
>$$
>\begin{aligned}
>I &= \int_0^{\pi} x \cos(x) \\
>&= \left[ x \sin(x) \right]^{x=\pi}_{x=0} - \int_0^{\pi} \sin(x)dx \\
>&= 0 + \left[ \cos(x)\right]^{x=\pi}_{x=0} \\
>&= -2
>\end{aligned}
>$$

#### 5.2.3 Repeated Integration by Parts
So far, integration by parts has always resulted in an integral that could be integrated directly. Unfortunately, this is not always the case. If the remaining integral cannot be evaluated by direct integration, we can try to integrate by parts again, or to apply a substitution

>[!Example]
>We want an antiderivative of $p(x)=x^2e^x$. If we consider $p(x)$ to be the product of $f(x)=x^2$ and $g'(x)=e^x$ (with antiderivative $g(x)=e^x$) we can use integration by parts
>
>$$
>\int x^2 e^x dx = x^2 e^x - 2 \int xe^x dx
>$$
>
>This latter integral has already been determined in a previous example, also using integration by parts. We now use this result, to find the antiderivative
>
>$$
>\begin{aligned}
>\int x^2 e^x dx &= x^2 e^x - 2(x-1)e^x + C \\
>&= (x^2 -2x +2)e^2 + C
>\end{aligned}
>$$
>
>Substitution by parts leaves us with an integral that needs further elaboration, and here repeated integration by parts may be necessary. For example, we find an antiderivative of $x^5 \cos(x)$ after integrating by parts five times consecutively. Here the risk of calculation error is high


#### 5.2.4 Special Case: $g'(x)=1$
Consider the following situation. We want an antiderivative of $f(x)=\ln(x)$. This standard function does not appear in the list of standard integrals. We do know the derivative $f'(x)=\frac1{x}$, but for integration by parts we need a product of the form $f(x)g'(x)$. To this end we can take $g'(x)=1$, and then indeed we do obtain $f(x)g'(x)$. Integration by parts (with $g(x)=x)$ gives

$$
\begin{aligned}
\int \ln(x)dx &= \int \ln(x) \cdot 1 \\
&= \ln(x) \cdot 1 - \int \frac1{x} \cdot x dx \\
&= x\ln(x) - \int 1 dx \\
&= x\ln(x)-x+C
\end{aligned}
$$

---
### 5.3 Partial Fraction Decomposition
In [[Mathematics that Works 2-Chapter 4-Integrals#4.1.3 Rules for Indefinite Integration|Chapter 4.1]] we have written the integral of a sum of functions as the sum of the integral of those functions

$$
\int (f(x) + g(x)) dx = \int f(x) dx + \int g(x)dx
$$

Sometimes it takes some modification to write an integrand as a sum. This is particularly so in this section.

>[!Example]
>A sum (or the difference) of two fractions with different denominators, such as 
>
>$$
>f(x)=\frac{1}{x} + \frac{-1}{x+1} = \frac{1}{x} - \frac{1}{x+1}
>$$
>
>can be written as a single function, by reducing both fractions to a common denominator
>
>$$
>\begin{aligned}
>f(x)&=\frac{1}{x}\frac{x+1}{x+1} + \frac{x}{x} \frac{-1}{x+1} \\
>&= \frac{(x+1)-x}{x(x+1)} \\
>&= \frac{1}{x(x+1)}
>\end{aligned}
>$$

The advantage of the latter notation is that it is more compact; the advantage of the first is that it is suited for direct integration. Now suppose we want an antiderivative of this latter fraction. Because the two notations denote the same function, we may write it as the sum of two simpeler fractions. We find

$$
\begin{aligned}
\int \frac{1}{x(x+1)} dx &= \int \frac{1}{x}-\frac{1}{x+1}dx \\
&= \frac{1}{x}dx - \int \frac{1}{x+1} dx \\
&= \ln(|x|)-\ln(|x+1|) + C
\end{aligned}
$$

It appears we can determine the integral using the sum rule. 

Reducing two simple fractions to a common denominator results in a fraction with a compound denominator. In order to integrate a fraction with a compound denominator we must write this fraction as the sum of fractions with simple denominators. This reversed process is called **partial fraction decomposition**

>[!Example]
>We continue with the example above, with the function
>
>$$
>f(x)=\frac{1}{x(x+1)}
>$$
>
>The denominator of this fraction is a product of the factors $x$ and $x+1$. A fraction with such a denominator, a product of factors, can always be written as the sum of two more simple fractions, with simple factors in the denominator. 
>
>$$
>f(x)=\frac{1}{x(x+1)}=\frac{a}{x} + \frac{b}{x+1}
>$$
>
>The right hand side of this equation can be reduced to a common denominator
>
>$$
>\begin{aligned}
>f(x)&=\frac{a}{x} + \frac{b}{x+1} \\
>&= \frac{a(x+1)}{x(x+1)} + \frac{bx}{x(x+1)} \\
>&= \frac{a(x+1)+bx}{x(x+1)} \\
>&= \frac{(a+b)x+a}{x(x+1)}
>\end{aligned}
>$$
>
>The numerator of the fraction is a function of $x$ with yet unknown constants $a$ and $b$. This function must be equal to the numerator of $f(x)$ for all $x$, so
>
>$$
>(a+b)x+a = 1 \Rightarrow (a+b)x+a = 0x+1
>$$
>
>for all $x$. This is the case if $(a+b)=0$ and $a=1$, so $a=1$ and $b=-1$. We conclude
>
>$$
>f(x)=\frac{a}{x}+\frac{b}{x+1}=\frac{1}{x}-\frac{1}{x+1}
>$$
>
>Note that we have recovered the sum we started with in the previous example

#### 5.3.1 Factorisation
In the above examples and exercises, the denominator was already factorised. If this is not the case, we must first find the factors of the denominator

Consider the fraction

$

