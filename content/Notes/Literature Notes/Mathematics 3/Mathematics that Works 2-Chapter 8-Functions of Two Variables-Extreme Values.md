---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 3]]"]
Draft: 
Status: Done
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
>\begin{array}{ll}
>y&=0 \\
>x&=0
>\end{array}
>\right. &\Rightarrow \text{ Stationary Point: }(0,0) \\
>b&: \left\{
>\begin{array}{ll}
>y &= 0 \\
>3x +2y -6 &=0
>\end{array}
>\right. \Rightarrow \left\{
>\begin{array}{ll}
>y&=0 \\
>x&=2
>\end{array}
>\right. &\Rightarrow \text{ Stationary Point: }(2,0) \\
>c&: \left\{
>\begin{array}{ll}
>6x+y-6 &= 0 \\
>x &= 0
>\end{array}
>\right. \Rightarrow \left\{
>\begin{array}{ll}
>y&=6 \\
>x&=0
>\end{array}
>\right. &\Rightarrow \text{ Stationary Point: }(0,6) \\
>d&: \left\{
>\begin{array}{ll}
>6x+y-6&=0 \\
>3x +2y -6 &=0
>\end{array}
>\right. \Rightarrow \left\{
>\begin{array}{ll}
>x&=\frac23 \\
>y&=2
>\end{array}
>\right. &\Rightarrow \text{ Stationary Point: }(\frac23,2) \\
>\end{aligned}
>$$
>
>Now we have found all stationary points: $(0,0)$, $(2,0)$, $(0,6)$, and $(\frac32,2)$. Substitute these points into the functions $f_x(x,y)$ and $f_y(x,y)$ to check that both are zero


#### 8.1.3 Maximum and Minimum Values in a Graph
If the graph $f(x,y)$ lies above $f(a,b)$ for all $(x,y)$ close to $(a,b)$, then $f(x,y)$ has a **local minimum value** at $(a,b)$.

If the graph $f(x,y)$ lies below $f(a,b)$ for all $(x,y)$ close to $(a,b)$, then $f(x,y)$ has a **local maximum value** at $(a,b)$.

A **saddle point** is a stationary point $(a,b)$ in which in one direction from $(a,b)$, $f(x,y)$ is above $f(a,b)$ and in another direction, $f(x,y)$ is below $f(a,b)$. 

Together, the minimum values and maximum values constitute the extreme values of a function. To find the extreme values, we first find the stationary points, and next we classify them in having a minimum value, a maximum value or a saddle point

#### 8.1.4 The Second Order Derivative Test

>[!Warning]
>I skipped the justification here and went straight for the conclusion. 

We take

$$
h(a,b)=f_{xx}(a,b)f_{yy}(a,b) -f_{xy}(a,b)^2
$$

If $(a,b)$ is a stationary point of the function $f(x,y)$, then
- if $h(a,b) \gt 0$ and $f_{xx} \gt 0$, then $f(x,y)$ has a minimum value in $(a,b)$
- if $h(a,b) \gt 0$ and $f_{xx} \lt 0$, then $f(x,y)$ has a maximum value in $(a,b)$
- if $h(a,b) \lt 0$, then $f(x,y)$ has a saddle point in $(a,b)$

>[!Example]
>We examine the nature of the stationary points of the function
>
>$$
>f(x,y)=3x^2 +xy^2 -6xy
>$$
>
>We already checked the stationary points before: $(0,0)$, $(2,0)$, $(0,6)$, and $(\frac32,2)$. 
>
>We find the following (partial) derivatives
>- $f_{x}(x,y)=6xy+y^2 -6y$
>- $f_{xx}(x,y)=6y$
>- $f_{yx}(x,y)=6x+2y-6$
>- $f_y(x,y)=3x^2 +2xy -6x$
>- $f_{xy}(x,y)=6x + 2y -6$
>- $f_{yy}(x,y)=2x$
>
>The following scheme helps to find the nature of the stationary points
>
>
>| $(a,b)$       | $f_{xx}(a,b)$ | $f_{yy}(a,b)$ | $f_{xy}(a,b)$ | $h(a,b)$ | Conclusion   | $f(a,b)$   |
>| ------------- | ------------- | ------------- | ------------- | -------- | ------------ | ---------- |
>| $(0,0)$       | 0             | 0             | -6            | -36      | Saddle Point | 0          |
>| $(2,0)$       | 0             | 4             | 6             | -26      | Saddle Point | 0          |
>| $(0,6)$       | 36            | 0             | 6             | -36      | Saddle Point | 0          |
>| $(\frac23,2)$ | 12            | $\frac43$     | 2             | 12       | Minimum      | $-\frac83$ |
>
>We find three saddle points and one minimum. The minimum value is at the point $(\frac32,2)$ and the function value there is $-\frac83$









