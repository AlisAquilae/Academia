---
fileClass: Base, Lecture Notes
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Introduction
Models on monday and tuesday depend on time. This is a single variable, usually $t$. Thus, also differential equations of variables with 1 variable

Here, they still depend on time but also on other variable, such as place. 

Thus, we deal with Partial differential equations. 

# Chain Rule
We will extend the chain rule to functions having a more complex structure than $f(x(t))$. To help us understand how this works, we will use the theory of linear approximations for small deviations. 

## Linear Approximation 2d (tangent line)
In the neighbourhood fo aposition x=a, a function f(x) can be approximated by its tangent line (linear approximation), with standard formula: $y(x)=f(a)+f'(a)(x-a)$

In the neighbourhood of these functions, the tangent line is close to the function

If 2-a is small, the tangent line y(x) approximates the original function f(x)

$f(x) \cong f(a) + f'(a)(x-a)$

Writing Delta x for the small displacement x-a can be done by redcucing the funcrtion by f(a) on both sides. This gives us

$$
\Delta f \cong f'(a)\Delta x
$$

This tells us that for a small deviation in x, we can approximate the function value by the derivative of the function value. 

Dividing by Delta x and taking the limit yields the definition of the derivative: the difference of the derivative quotient. This completes the circle

You can make a 

## Linear approximation 3D (tangent plane)
The graph of a function of two variables $f(x,y)$ is a surface in 3D-space. 

The standard formula for the tangent plane is

$$
z(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)
$$

Writing back to a Delta F, we reach an approximation again

$$
\Delta f \cong f_x(a,b)\Delta x + f_y(a,b)\Delta y
$$

For small deviations in multiple directions, add the effects (rather than multiply, which is the case in 1 route)