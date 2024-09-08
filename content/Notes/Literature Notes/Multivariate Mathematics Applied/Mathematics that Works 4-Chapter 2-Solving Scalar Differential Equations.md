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
>where $c$ is an arbitrary integration constant.
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

