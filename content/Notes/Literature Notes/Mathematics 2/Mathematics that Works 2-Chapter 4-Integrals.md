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
### 4.1 Derivative and Antiderivative
The **derivative** of the function $f(x)=x^3$ is found by [[Differentiation]] of $f(x)$ with respect to $x$. The result is $f'(x)=3x^2$. If reversely a function $f(x)$ is sought for which $f'(x)=3x^2$, then $f(x)=x^3$ is the solution

The reverse process of differentiation is [[Antidifferentiation]]. In antidifferentiating a function $g(x)$, we look for a function $f(x)$ such that $f'(x)=g(x)$. The function $f(x)$ is called an **antidervative** of $g(x)$. 

The requested function in antidifferentiation is not uniquely defined. We can always add a constant to a given solution, to produce a different function with the same derivative; this constant disappears in differentiation. Therefore, the antiderivative of a function is defined up to a constant

>[!Example]
>All the antiderivatives of $f(x)=2x+1$ can be written as $F(x)=x^2+x+C$, where $C$ is an arbitrary constant

The antiderivative is denoted using $F(x)$ (with a capital $F$)

#### 4.1.1 Antidifferentiation
The search for an antiderivative is called antidifferentiation or **integration**. In this context, we speak of the **integral** of $f(x)$, indicated by the integral sign

$$
\int f(x)dx=F(x)+C
$$

Where $F(x)$ is an antiderivative of $x$

The integral is defined except for an additive constant; hence, we use the term **indefinite integral**. The constant $C$ is called the constant of integration. The function $f(x)$ behind the integral sign is called the **integrand**: this is the function for which we need the antiderivative. Behind that function is the symbol dx, indicating that x is the variable with respect to which we integrate. In this context, this variable $x$ is called the **variable of integration**

Just as we know standard derivatives, so do we know standard antiderivatives

| Function                   | Antiderivative                             |
| -------------------------- | ------------------------------------------ |
| $f(x)=x^a$                 | $F(x)=\frac{1}{a+1}x^{a+1}$ for $a \neq 1$ |
| $f(x)=e^x$                 | $F(x)=e^x$                                 |
| $f(x)=\frac{1}{x}$         | $F(x)=\ln(\|{x}\|)$                        |
| $f(x)=\sin(x)$             | $F(x)=-\cos(x)$                            |
| $f(x)=\cos(x)$             | $F(x)=\sin(x)$                             |
| $f(x)=\frac{1}{\cos(x)^2}$ | $F(x)=\tan(x)$                             |

#### 4.1.2 Direct Integration
In **Direct integration**, we find an antiderivative if a function in a table or by making an educated guess. We verify our guess by differentiating and, if necessary, we adapt it. If we fail to find an antiderivative this way, we must resort to more advanced techniques. These will be discussed in a different chapter

#### 4.1.3 Rules for Indefinite Integration
There are numeral rules which we can uses for antidifferentiation or integration
- Constant factor rule: a constant factor can be moved outside the integral
  $\int cf(x)dx=c\int f(x)dx$

>[!Example]
>$\int f(x)dx=\int \frac{1}{2x}dx=\frac12 \int \frac{1}{x}dx=\frac{1}{2}\ln(|x|)+C$

- Sum rule: The integral of the sum (or difference) of two functions is the sum (or the difference) of the integral of those functions
  $\int f(x) + g(x) dx = \int f(x) dx + \int g(x)dx$

>[!Example]
>The function $h(x)=2x+1$ is the sum of the functions $f(x)=2x$ and $g(x)=1$. An antiderivative of $f(x)$ is $F(x)=x^2$, and an antiderivative of $g(x)$ is $G(x)=x$. We find $H(x)=F(x)+G(x)=x^2 + x$

---
### 4.2 Integral and Area
#### 4.2.1 The Definite Integral
The area of the region below a graph is approximated by the **definite integral**.

The definite integral of a function $f(x)$ between $a$ and $b$ is

$$
\lim_{N \to \infty} \sum_{n=1}^{N} f(x_n) \Delta x = \int_{a}^{b}f(x)dx
$$

We say that the function $f(x)$ is integrated with respect to $x$. The numbers $a$ and $b$ are the integration limits: $x$ varies between $a$ and $b$

#### 4.2.2 Definite Integral and Antiderivative
Integrals with limits are often called definite integrals, and those without limits are called indefinite integrals. An indefinite integral indicates the antiderivative of a function. A definite integral represents the area below the graph of a function on a certain interval. 

The definite integral of $f(x)$ from $a$ to $b$ can be found using the antiderivative $F(x)$ of $f(x)$, as $F(b)-F(a)$. This difference of the values of the antiderivative in the limits $x=b$ and $x=a$ is commonly denoted by placing the antiderivative $F(x)$ between square brackets, with the limits as super- and subscript. 

$$
\int_a^bf(x)dx=\left[ F(x)\right]^{x=b}_{x=a}=F(b)-F(a)
$$

>[!Example]
>An antiderivative of the function $f(x)=e^x$ is $F(x)=e^x$. We use this to calculate the area of the region below the graph of $f(x)$ between$x=0$ and $x=1$
>
>$$
>\int_0^1 e^x dx = \left[e^x \right]^{x=1}_{x=0}=e^1 - e^0 = e-1
>$$

#### 4.2.3 Rules for Definite Integrals
The rules for indefinite integrals also apply to definite integrals. In addition, there are specific rules regarding limits

- A constant factor in the integrand can be moved outside the integral:

$$
\int_a^b \alpha f(x)dx = \alpha \int_a^bf(x)dx
$$

>[!Note]
>This also works for a negative integrand

>[!Info]
>In integration, the area of the region below the horizontal axis is counted negatively. 

- Sum rule: if the integrand is the sum of two functions, we can split the integral into the sum of two integrals with the same limits

$$
\int_a^b f(x)+g(x)dx = \int_a^b f(x)dx + \int^b_a g(x)dx
$$

- Cut and Paste: The sum of two definite integrals over consecutive intervals can be written as a single integral over the jointed interval:

$$
\int_a^b f(x)dx + \int_b^c f(x)dx = \int_a^c f(x)dx
$$


