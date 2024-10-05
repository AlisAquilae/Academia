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
# 4.2 Steady States
## 4.2.1 Steady States of Systems of Time-Invariant Differential Equations
A solution of a differential equation is called a steady state if the state variable is constant with time (see [[Mathematics that Works 4-Chapter 1-Modelling Time-Dependent Processes#1.5 Modelling with Differential Equations|Paragraph 1.5]]). Systems of differential equations may also have steady states. This is the case if all state variables, together describing the state of the system, are constant. 

A steady state ($x^*, y^*$) of a (time-invariant) system of differential equations

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \\
y'(t) &= g(x(t),y(t))
\end{array}
\right.
$$

is a solution of the form $x(t)=x^*$ and $y(t)=y^*$ for all $t \gt 0$. Since these steady states satisfy $x'(t)=0$ and $y'(t)=0$, the steady states ($x^*, y^*$) solve the system of equations

$$
\left\{
\begin{array}{ll}
f(x^*, y^*) &= 0\\
g(x^*, y^*) &= 0
\end{array}
\right.
$$

In particular, the steady state of a time-invariant system of linear differential equations can be found by solving a linear system of algebraic equations.

For non-linear systems of differential equations, finding steady states is less straightforward

>[!Example]
>In [[Mathematics that Works 4-Chapter 1-Modelling Time-Dependent Processes#1.5 Modelling with Differential Equations|Paragraph 1.5]] we introduced the Lotka-Volterra model for two populations that live in one biotope. The first species, with density $x(t)$, is prey for the second species, the predator, with density $y(t)$. We model prey and predator together with two coupled differential equations
>
>$$
>\left\{
>\begin{array}{ll}
>x'(t) &= r \, x(t) - \beta \, x(t) y(t) \\
>y'(t) &= -\alpha \, y(t) + Y \, \beta \, x(t)y(t)
>\end{array}
>\right.
>$$
>
>In a stationary state, the rates of change of both prey and predator are zero
>
>$$
>\left\{
>\begin{array}{ll}
>0 &= r \, x(t) - \beta \, x(t) y(t) \\
>0 &= -\alpha \, y(t) + Y \, \beta \, x(t)y(t)
>\end{array}
>\right.
>$$
>
>As the steady state foes not vary with time, we may omit the variable $t$, thus
>
>$$
>\left\{
>\begin{array}{ll}
>0 &= r \, x^* - \beta \, x^* y^* \\
>0 &= -\alpha \, y^* + Y \, \beta \, x^* y^*
>\end{array}
>\right.
>$$
>
>Systematically finding all solutions may be facilitated by factorizing the equations
>
>$$
>\left\{
>\begin{array}{ll}
>x^*(r - \beta y^*) &= 0 \\
>y^*(-\alpha + Y \beta x^*) &= 0
>\end{array}
>\right.
>$$
>
>We combine the options for the first equation with options for the second equation to find
>
>$$
>\left\{
>\begin{array}{ll}
>x^* &= 0 \\
>y^* &= 0 \\
>\end{array}
>\right. \, \text{ or } \, 
>\left\{
>\begin{array}{ll}
>x^* &= 0 \\
>-\alpha + Y \beta x^* &= 0
>\end{array}
>\right. \, \text{ or } \, 
>\left\{
>\begin{array}{ll}
>r - \beta y^* &= 0 \\
>y^* &= 0
>\end{array}
>\right. \, \text{ or } \, 
>\left\{
>\begin{array}{ll}
>r - \beta y^* &= 0 \\
>-\alpha + Y\beta x^* &= 0
>\end{array}
>\right.
>$$
>
>Solving these small systems gives all possible steady states. The second and third system come out as inconsistent, meaning that these are not valid steady states. Thus, only the first and second system describe steady states.
>
>In the model above, the prey $x$ increases exponentially if the predator $y$ is absent. If the biotope has a limited carrying capacity $K$ for the prey, a more appropriate model is
>
>$$
>\left\{
>\begin{array}{ll}
>x'(t) &= r \, x(t) (1-\frac{1}{K}) - \beta \, x(t) y(t) \\
>y'(t) &= -\alpha \, y(t) + Y \, \beta \, x(t)y(t)
>\end{array}
>\right.
>$$
>
>This model has an additional steady state, in which prey $x$ exists in absence of $y$


## 4.2.2 Stability of Steady States
Consider two marbles, one on a hill and one in a valley. If we displace the second marble somewhat from its position, it rolls back, and eventually it resumes to its former steady state. We call this steady state stable

The steady state of the first marble is different. If we displace this marble by a small distance from its position, it rolls away. This steady state is called unstable. 

Thus, we may determine the stability of a steady state by perturbing the state somewhat to see what happens. If the perturbation vanishes, the steady state is stable. If the perturbation from the steady state increases, the steady state is unstable. 

The above example motivates us to consider solutions of the system of linear differential equations with a small perturbation from the steady state. Therefore, let ($x(t), y(t)$) be a solution of the differential equation

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \\
y'(t) &= g(x(t),y(t))
\end{array}
\right.
$$

We assume that ($x^*, y^*$) is a steady state, and we write

$$
\begin{aligned}
x(t) &= x^* + \delta(t) \\
y(t) &= y^* + \epsilon (t)
\end{aligned}
$$

where $\delta (t)$ and $\epsilon (t)$ are the small perturbation form the steady state. Then the steady state is stable if the solution ($x(t),y(t)$ returns to the steady state

Thus, the steady state ($x^*, y^*$) of the system of differential equations

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \\
y'(t) &= g(x(t),y(t))
\end{array}
\right.
$$

is (locally) stable if, for small values of $\delta (0)$ and $\epsilon (0)$, the solution of

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \, , \, x(0) = x^* + \delta (0) \\
y'(t) &= g(x(t),y(t)) \, , \, y(0) = y^* + \epsilon (0)
\end{array}
\right.
$$

satisfies $x(t) \to x^*$ and $y(t) \to y^*$ as $t \to \infty$. The steady state is (locally) unstable if it is not locally stable

## 4.2.3 Linearization
We study the stability of the steady state ($x^*, y^*$) by linearizing the system of differential equations about this steady state. To this end, we consider the deviation of a solution ($x(t),y(t))$ from the steady state ($x^*, y^*$). Here, the Jacobian matrix plays a central role

The Jacobian matrix $J(x,y)$ of the system of differential equations

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \\
y'(t) &= g(x(t),y(t))
\end{array}
\right.
$$

contains the partial derivatives of the right-hand side functions

$$
J(x,y) = \begin{pmatrix} f_x(x,y) & f_y(x,y) \\ g_x(x,y) & g_y(x,y)
\end{pmatrix}
$$

In a first-order approximation, the deviations $x(t)-x^*$ and $y(t)-y^*$ of a solution ($x(t),y(t)$) from the steady state $(x^*, y^*)$ satisfy the linearized system of differential equations

$$
u'(t) = J(x^*, y^*)u(t) \, \text{ where } \, u(t) = \begin{pmatrix} x(t)-x^* \\ y(t)-y^* \end{pmatrix}
$$

The stability of the steady state $(x^*, y^*)$ of the non-linear system is closely connected with the stability of the steady state $(0,0)$ of the linearized system.

The steady state $(x^*, y^*)$ of the system of differential equations

$$
\left\{
\begin{array}{ll}
x'(t) &= f(x(t),y(t)) \\
y'(t) &= g(x(t),y(t))
\end{array}
\right.
$$

is locally stable if linearization about $(x^*, y^*)$ yields a linear system with a stable steady state at $(0,0)$. The steady state is locally unstable if linearization about $(x^*,y^*)$ yields a linear system with an unstable steady state at $(0,0)$

>[!Example]
>Consider a logistic prey-predator system
>
>$$
>\left\{
>\begin{array}{ll}
>x'(t) &= f(x(t),y(t)) &= x(t)(1-x(t)-\frac{1}{2}y(t)) \\
>y'(t) &= g(x(t),y(t)) &= y(t)(-1+2x(t))
>\end{array}
>\right.
>$$
>
>The Jacobian matrix of this system at an arbitrary point $(x,y)$ is
>
>$$
>J(x,y) = \begin{pmatrix} f_x(x,y) & f_y(x,y) \\ g_x(x,y) & g_y(x,y)
\end{pmatrix} = \begin{pmatrix}1-2x-\frac{1}{2}y & -\frac{1}{2}x \\ 2y & -1+2x \end{pmatrix}
>$$
>
>We have already found the steady states, namely at the points $(0,0)$, $(1,0)$ and $(\frac{1}{2}, 1)$ as steady states $(x^*, y^*)$
>
>a) for the steady state $(0,0)$ we find the Jacobian matrix
> 
>$$
>J(0,0) = \begin{pmatrix}-1 & -\frac{1}{2} \\ 0 & 1 \end{pmatrix}
>$$ 
>
>with eigenvalues $\lambda = 1$ and $\mu = -1$. If $v$ and $w$ are the corresponding eigenvectors, the solution of the linearized system $u'(t)=Ju(t)$ is
>
>$$
>u(t)=\alpha v e^t + \beta w e^{-t}
>$$
>
>with coefficients $\alpha$ and $\beta$. Hence, the steady state is unstable; as $\lambda$ is a positive eigenvalue, the solutions run away from the steady state (provided that $\alpha \neq 0$)
>
>b) for the steady state $(1,0)$ we find
>
>$$
>J(1,0) = \begin{pmatrix}-1 & -\frac{1}{2} \\ 0& 1 \end{pmatrix}
>$$



