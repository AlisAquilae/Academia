---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 1-Functions and their Derivatives]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 1-Functions and their Derivatives]]"]
Related Terminology: 
Related Courses: ["[[Mathematics 2]]"]
---
### The Derivative
The points $A$ and $B$ are on the (non-linear) graph of $f(x)$. Between $A$ and $B$, $x$ changes from $a$ to $a+\Delta x$, an increment of $\Delta x$; $y$ changes from $f(a)$ to $f(a+\Delta x)$, that is an increment of $\Delta f=f(a+\Delta x)-f(a)$. The slope of the line through A and B is

$$
\frac{\Delta f}{\Delta x} = \frac{f(a+\Delta x)-f(a)}{\Delta x}
$$

This expression is called the **difference quotient**

If we keep $A$ fixed and move $B$ along the graph towards $A$, the straight line through $A$ and $B$ carries over into the tangent line $r$ through $A$ to the graph $f(x)$. In the process, the slope of the line through $A$ and $B$ carries over into the slope of the tangent line. The difference quotient approaches a limit, the derivative of $f(x)$ at $x=a$. 

>[!Important]
>Hence, the derivative $f'(a)$ is the slope of the tangent line $r$ of $f(x)$ at $x=a$

If we determine the derivative of all values of $x$, we obtain the **derivative function** $f'(x)$. The process of determining the derivative is called **Differentiation**.

### Standard Derivatives and Differentiation Rules
Finding the derivative directly from the definition is a laborious task. Differentiation using standard derivatives and differentiation rules is much easier. 

Below we give a table of derivatives of a number of standard functions

| Function          | Derivative                  |
| ----------------- | --------------------------- |
| $f(x)=a$          | $f'(x)=0$                   |
| $f(x)=x^a$        | $f'(x)=ax^{n-1}$            |
| $f(x)=\ln(x)$     | $f'(x)=\frac{1}{x}$         |
| $f(x)=e^x=exp(x)$ | $f'(x)=e^x$                 |
| $f(x)=a^x$        | $f'(x)=a^x \ln(a)$          |
| $f(x)=\sin(x)$    | $f'(x)=\cos(x)$             |
| $f(x)=cos(x)$     | $f'(x)=-sin(x)$             |
| $f(x)=\tan(x)$    | $f'(x)=\frac{1}{\cos(x)^2}$ |
Combining these standard functions by taking sums, products, or quotients, we can build up more complicated functions. Here the following rules apply

- Constant factor rule: $[cf(x)]'=cf'(x)$
- Sum rule: $[f(x)+g(x)]'=f'(x)+g'(x)$
- Product rule: $[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$
- Quotient rule: $[\frac{f(x)}{g(x)}]'=\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$
- Chain rule: $h'(x)=f'(u(x))u'(x)$
