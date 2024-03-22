---
fileClass: Base, Concepts
title: 
Parents: ["[[Mathematics that Works 2-Chapter 1-Functions and their Derivatives]]"]
Draft: 
Status: Done
aliases: 
Related Notes: ["[[Mathematics that Works 2-Chapter 1-Functions and their Derivatives]]"]
Related Terminology: ["[[Natural Logarithm]]"]
Related Courses: ["[[Mathematics 2]]"]
---
The **Logarithmic Function** $^a \log(x)$ is the [[Inverse Functions|Inverse Function]] of the [[Exponential Function]] $a^x$. We call $^a \log(x)$ the logarithm of $x$ to base $a$. 

In a formula, $^a \log(x)=y \to a^y=x$

>[!Note]
>The logarithm $^a \log(x)$ is defined only if:
>- $a \gt 0$
>- $a \neq 1$
>- $x \gt 0$

The [[Natural Logarithm]] $\ln(x)$ is $^e \log(x)$, the logarithm to base $e$

For logarithms, the following rules apply:
- Inverse: $^a\log(x) \iff x=a^y$ and $a^{^a\log(x)}=x$
- Product rule: $^a \log(xy) = ^a\log(x) + ^a\log(y)$
- Quotient rule: $^a\log \left(\frac{x}{y}\right)=^a\log(x)-^a\log(y)$
- Power rule: $^a\log(x^p)=p \cdot ^a\log(x)$
- Change the base: $^a\log(x)=\frac{^b\log(x)}{^b\log(a)}$

We often put logarithms in a graph with a **logarithmic scale**. A scale is logarithmic if the distance to the origin is proportional to the logarithm of the value on the scale of this point

Equal distances between points on the logarithmic scale imply equal ratios of the values on the scale. The distance between points P and Q, with Q being larger, is found through $\log(\frac{q}{p})$

>[!Example]
>On a logarithmic scale, the distance between the points $x_1=1$ and $x_2=10$ is equal to the distance between $x_3=1000$ and $x_4=10000$, since $\log(10)-\log(1)=1$ and $\log(10000)-\log(1000)=1$

>[!Important]
>What is noteworthy is that the graph of a power function is a straight line when there are logarithmic scales on both axes. The graph of an exponential function is a straight line as well when a logarithmic scale is used on the y-axis and a linear scale is used on the x-axis
