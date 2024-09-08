---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---
# 2.2 Time-Invariant Scalar Differential Equations
## 2.2.1 Separation of Variables

>[!Example]
>We look for the solution $x(t)$ of the initial value problem
>
>$$
>x'(t) = kx(t), x(0)=2
>$$
>
>**Step 1**: We bring the factor $x(t)$ to the left hand side of the equation, which is realised by dividing the differential equation left and right by $x(t)$. The result is
>
>$$
>\frac{1}{x(t)}x'(t)=k
>$$
>
>**Step 2**: We integrate left and right with respect to $t$
>
>$$
>\int \frac{1}{x(t)} x'(t)dt = \int k dt
>$$
>
>**Step 3**: In the integral on the left, we exchange the integration variable to $x$ by using substitution, with $dx=x'(t)dt$. Thus,
>
>$$
>\int \frac{1}{x(t)}x'(t)dt = \frac{1}{x} dx = \int k dt
>$$
>
>**Step 4**: Solving these integrals, we obtain 
>
>$$
>\ln(|x|) = kt + K
>$$
>
>where $K$ is an arbitrary integration constant.
>
>**Step 5:** The resulting equation must be solved for $x$. To remove the natural logarithm we take exponentials (on the left and right hand side), which gives
>
>$$
>e^{\ln(|x|)} = e^{kt + K} = e^{kt}e^K
>$$
>
>We can drop the absolute values by admitting negative values for $C$. We now have obtained the general solution of the differential equation
>
>$$
>x(t) = Ce^{kt}
>$$
>
>Verify that the solution satisfies the differential equation for all $C$ and $t$
>
>**Step 6**: The constant $C$ is used to find the specific solution $x(t)$ that satisfies the initial condition. Substitution of $t=0$ into the general solution gives
>
>$$
>2 = x(0) = Ce^{k0} = C \Rightarrow C=2
>$$
>
>Hence, the solution of the initial value problem is $x(t)=2e^{kt}$

The differential equation $x'(t) = kx(t)$ is so common in all fields of science that it is useful to know the solution $x(t)=Ce^{kt}$ by heart

The method used above to solve the differential equation $x'(t) = kx(t)$ can be applied in principle to any time-invariant differential equation

$$
x'(y)=f(x(t))
$$

We can solve this differential equation by separation of variables. We divide both sides of the equation by $f(x(t))$ to find

$$
\frac{1}{f(x(t))}x'(t)=1
$$

We antidifferentiate the functions at both sides formally with respect to $t$:

$$
\int \frac{1}{f(x(t))}x'(t)dt = \int 1 dt
$$

By substitution we change to $x$ as integration variable in the left integral, using that $dx = x'(t)dt$. Thus, we find

$$
\int \frac{1}{f(x)}dx = t + K
$$

If we can find the remaining integral, we obtain an equation for $x(t)$

>[!Example]
>We look for a solution of the initial value problem
>
>$$
>x'(t) = 1-2x(t), x(0)=1
>$$
>
>**Step 1:** Separation of variables gives
>
>$$
>\frac{1}{1-2x(t)}x'(t)=1
>$$
>
>**Step 2**: By integration with respect to $t$ we get
>
>$$
>\int \frac{1}{1-2x(t)}x'(t)dt = \int 1 dt
>$$
>
>**Step 3**: Substituting $x$ for integration variable in the integral on the left yields
>
>$$
>\int \frac{1}{1-2x(t)}x'(t)dt = \int \frac{1}{1-2x}dx = \int 1 dt
>$$
>
>**Step 4**: Evaluation of these integrals gives the equation
>
>$$
>-\frac12 \ln(|1-2x|) = t + K
>$$
