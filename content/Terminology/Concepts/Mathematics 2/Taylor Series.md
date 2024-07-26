---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics 2 Summary]]", "[[Mathematics that Works 2-Chapter 3-Change and Growth]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 3-Change and Growth]]", "[[Mathematics 2 Summary]]"]
Related Terminology: ["[[Series]]"]
Related Courses: ["[[Mathematics 2]]"]
---
The **Taylor Series** is a special series which is used to get a close approximation of a function, where each term added increases its accuracy. It has the following form:

$$
\begin{aligned}
f(x)&=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots \\
&= \sum_{k=0}^\infty \frac{f^{(k)}(a)}{k!}(x-a)^k
\end{aligned}
$$

>[!Tip]
>Algorithm for setting up the Taylor Series of $f(x)$ at $x=a$
>1. Determine the derivatives $f'(x), f''(x), f'''(x), \dots$ as far as necessary. Put these derivatives in a column, starting with $f(x)$
>2. In the next column, put the function values $f(a), f'(a), f''(a), f'''(a), \dots$
>3. Compose the series

For more background on the Taylor Series, see [[Mathematics that Works 2-Chapter 3-Change and Growth]]