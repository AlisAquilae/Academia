---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 4-Integrals]]"]
Draft: 
Status: Done
aliases:
  - "Integration"
Related Notes: ["[[Mathematics that Works 2-Chapter 4-Integrals]]"]
Related Terminology: ["[[Differentiation]]"]
Related Courses: ["[[Mathematics 2]]"]
---
The reverse process of [[Differentiation]] is **Antidifferentiation**. In antidifferentiating a function $g(x)$, we look for a function $f(x)$ such that $f'(x)=g(x)$. The function $f(x)$ is called an **antidervative** of $g(x)$. 

The requested function in antidifferentiation is not uniquely defined. We can always add a constant to a given solution, to produce a different function with the same derivative; this constant disappears in differentiation. Therefore, the antiderivative of a function is defined up to a constant

>[!Example]
>All the antiderivatives of $f(x)=2x+1$ can be written as $F(x)=x^2+x+C$, where $C$ is an arbitrary constant

The antiderivative is denoted using $F(x)$ (with a capital $F$)

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

Read more on antidifferentiation:
- [[Mathematics that Works 2-Chapter 4-Integrals]]
- [[Mathematics that Works 2-Chapter 5-Integration Techniques]]