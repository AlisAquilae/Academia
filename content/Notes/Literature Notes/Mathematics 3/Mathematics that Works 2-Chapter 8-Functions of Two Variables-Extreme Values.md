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
### 8.1 Extreme Values
#### 8.1.1 Introduction: Functions of One Variable
In [[Mathematics that Works 2-Chapter 1-Functions and their Derivatives#1.4 The Derivative|Chapter 1.4]] we discussed the concepts of stationary point, maximum and minimum for functions of one variable. The function $f(x)$ has a maximum at $x=a$ if the graph of $f(x)$ lies below $f(a)$ in a neighbourhood of $x=a$. 

For a smooth function $f(x)$, a point where the function attains a maximum (or minimum) is always a stationary point, that is a point $x=a$ where the tangent line to $f(x)$ is horizontal; so, $f'(a)=0$. The second derivative test can be used to decide whether $f(x)$ has a maximum in the stationary point $x=a$,

$$
f'(a)=0 \text{ and } f''(a)<0 \Rightarrow f(x) \text{ has a maximum at }x=a
$$

With a few modifications, this approach also applies to functions $f(x,y)$ of two variables

#### 8.1.2 Stationary Points
The point $(a,b)$ is a **stationary point** of the function $f(x,y)$ if the tangent plane of $f(x,y)$ at $(a,b)$ is horizontal. This is the case if the tangent lines in the direction of the x-axis and y-axis are both horizontal, $f_x(a,b)=0$ and $f_y(a,b)=0$. The equation of the tangent plane is

$$
\begin{aligned}
z &= f(a,b)+0(x-a)+0(y-b) \\
z&= f(a,b)
\end{aligned}
$$

>[!Example]
>We are looking for the stationary points of 
>
>$$
>f(x,y)=3x^2y+xy^2 -6xy
>$$
>
>The partial derivatives are $f_x(x,y)=6xy+y^2 -6y$ and $f_y(x,y)=3x^2 +2xy-6x$. Therefore, the stationary points are the solutions of the system of equations
>
>$$
>\left\{
>\begin{array}{ll}
>6xy + y^2 -6y&=0 \\
>3x^2 +2xy -6x &= 0
>\end{array}
>\right.
>$$
>
>To find the solutions we factorise the left hand sides. We find
>
>$$
>\left\{
>\begin{array}{ll}
>y(6x+y-6)&=0 \\
>x(3x+2y-6) &= 0
>\end{array}
>\right. \Rightarrow
>\left\{
>\begin{array}{ll}
>y &=0 \\
>6x + y -6 &= 0 \\
>x &= 0 \\
>3x + 2y -6 &= 0
>\end{array}
>\right.
>$$
>
>Both $f_x(x,y)$ and $f_y(x,y)$ are zero if one of the factors is zero. Combining the two possibilities for $f_x(x,y)=0$ and the two possibilities for $f_y(x,y)=0$ gives rise to four different possibilities for a stationary point
>
>$$
>\begin{aligned}
>a&: \left\{
>\begin{array}[ll]
>y&=0 \\
>x&=0
>\end{array}
>\right.
>\end{aligned}
>$$



$$
\begin{aligned}
a&: \left\{
\begin{array}{ll}
y&=0 \\
x&=0
\end{array}
\right. &\Rightarrow \text{ Stationary Point: }(0,0) \\
b&: \left\{
\begin{array}{ll}
y &= 0 \\
3x +2y -6 &=0
\end{array}
\right. \Rightarrow \left\{
\begin{array}{ll}
y&=0 \\
x&=2
\end{array}
\right. &\Rightarrow \text{ Stationary Point: }(2,0) \\
c&: \left\{
\begin{array}{ll}
6x+y-6 &= 0 \\
x &= 0
\end{array}
\right. \Rightarrow \left\{
\begin{array}{ll}
y&=6 \\
x&=0
\end{array}
\right. &\Rightarrow \text{ Stationary Point: }(0,6) \\
d&: \left\{
\begin{array}{ll}
6x+y-6&=0 \\
3x +2y -6 &=0
\end{array}
\right. \Rightarrow \left\{
\begin{array}{ll}
y&=0 \\
x&=2
\end{array}
\right. &\Rightarrow \text{ Stationary Point: }(2,0) \\
\end{aligned}
$$