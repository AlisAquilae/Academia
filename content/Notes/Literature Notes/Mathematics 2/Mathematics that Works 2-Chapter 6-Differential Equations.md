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
### 6.1 Direction Fields, Steady States and Models
In this section, we will analyse differential equations without calculating the solutions explicitly. This gives us a tool for checking whether the model (the differential equation) exhibits the behaviour we expect. 

#### 6.1.1 Differential Equations and Direction Field
Consider the following logistic differential equation

$$
y'(t)=\frac{r}{a}(a-y(t))y(t)
$$

The solutions $y(t)$ of this differential equation are the logistic functions that were discussed in [[Mathematics that Works 2-Chapter 3-Change and Growth#3.2 Models for Continuous Growth|Chapter 3.2]] We will see in 6.2 how we can find these solutions; here we restrict ourselves to the differential equation itself

If we would know the function $y(t)$, then we could simply draw a graph of $y$ against $t$ and investigate its behaviour. Lacking a solution, we cannot do this. However, from the differential equation we know that at the point with coordinates $t$ and $y(t)$ the derivative has the value $y'(t)=\frac{r}{a}(a-y(t))y(t)$. Thus, at any point $(t, y(t))$ we can compute the slope $y'(t)$

Now we draw in a whole grid of points, a short line segment, with the slope $y'(t)$ belonging to each individual point. Such a line segment is called a **tangent line segment**. Doing this for an entire grid we reach what is called a **direction field** for the differential equation. This direction field gives a lot of information about the solutions of the differential equation. 

A differential equation of the first order is an equation of the form 

$$
y'(t)=f(t, y(t))
$$

with at the right hand side a function of the independent variable $t$ and the dependent variable $y(t)$

>[!Example]
>The following equations are differential equations of the first order
>- $y'(t)=-3y(t)$
>- $y'(t)= -ty(t)+\sin(t)$
>- $y'(t)=(1-y(t)^2)y(t)$
>- $y'(t)=ty(t)^2$

The direction field for the differential equation $y'(t)=f(t, y(t))$ consists of the tangent line elements at selection grid points in the $(t, y)$-plane. The tangent line element at the point $(t, y(t)$ has a slope $y'(t)$. Its value follows directly from the differential equation: the angle $\varphi$ between tangent line element and the $t$-axis satisfies $\tan(\varphi)=y'(t) = f(t, y(t))$

When looking at different examples, we see that a solution $y(t)$ is not fully determined by the differential equation alone. In the direction field, we can draw several curves that follow the tangent line elements. A solution $y(t)$ is uniquely determined only if we know a given point $(t_0, y_0)$ on the solution curve. Such a function $y(t)$ does not only satisfy the differential equation, it also satisfies the additional condition $y(t_0)=y_0$. This additional condition is called the **initial condition**

#### 6.1.2 Time-Invariant Differential Equations and Steady States
Often, differential equations model physical, economic, or biological processes that depend on time. In the equation $y'(t)=f(t, y(t))$, the independent variable $t$ represents time; the dependent variable $y(t)$ represents the **state** of the process we are modelling. 

Here we restrict ourselved to processes of which the external conditions are constant. The change $y'(t)$ then only depends on the state $y(t)$, and not upon $t$ (in a way different from through $y(t)$). Such a process is modelled by a differential equation of the type

$$
y'(t)=f(y(t))
$$

in which the right hand side is a function of $y(t)$ only. Such a differential equation is called **time-invariant** or **autonomous**. The direction fields of such equations depend on $y$ only, and not on $t$. In other words, if we shift the picture horizontally, nothing changes. 

A time invariant differential equation describes a system that does not explicitly depend on time $t$. In such a case, there may exist solutions $y(t)$ that do not depend on time either. Clearly these are constant solutions, $y(t)=\underline{y}$ for all $t$. In that case, $y'(t)=0$, so

$$
f(y(t))=0 \text{ for all }t
$$

This is the case if 

$$
f(\underline{y})=0
$$

 A steady state $\underline{y}$ that satisfies this condition is called a **steady state** of the differential equation. 

$\underline{y}$ is a steady state of $y'(t)=f(y(t))$ if $f(\underline{y})=0$

>[!Example]
>We give for the following differential equations the steady states, if they exist. 
>
>
| Diff. Equation          | Steady State (if appliccable)                                                   |
| ----------------------- | ------------------------------------------------------------------------------- |
| $y'(t)=-3y(t)$          | $y(t)=\underline{y}=0$                                                          |
| $y'(t)=2y(t)-4$         | $y(t)=\underline{y}= 2$                                                         |
| $y'(t)=y(t)^2 + 2$      | No steady state                                                                 |
| $y'(t)=y(t)^2 -5y(t)+6$ | $y(t)=\underline{y}_{1,2}$ with $\underline{y}_1 = 2$ and $\underline{y}_2 = 3$ |

#### 6.1.3 Stability of Steady States
A steady state of a time-invariant differential equation is **stable** (or **attracting**) if any solution that starts near this steady state moves to this steady state. The steady state is **unstable** (or **repelling**) if solutions, starting near this steady state, tend to run away from this steady state. 

The stability of a steady state can readily be observed in the direction field. But we don't need the direction field, the stability is directly found by investigating the graph of the function $f(y)$. 

A steady state $\underline{y}$ of the differential equation $y'(t)=f(y(t))$ is **stable** if $f'(\underline{y})\lt 0$ and **unstable** if $f'(\underline{y}) \gt 0$

>[!Important]
>Algorithm for steady states of time-invariant differential equations
>1. Write the differential equation in the form $y'(t)=f(y(t))$, and identify the function $f(y)$
>2. Find the steady states $\underline{y}$ by solving the equation $f(\underline{y})=0$
>3. Determine the stability of a steady state $\underline{y}$ by checking whether $f'(\underline{y}) \lt 0$

>[!Warning]
>Do not mix up the stability criterion for a steady state of a differential equation and that of an iteration process (see [[Mathematics that Works 2-Chapter 2-Sequences Series and Iteration Processes#2.2 Iteration Processes|Chapter 2.2]]). A steady state $\underline{y}$ of an iteration process $y_{n+1}=f(y_n)$ satisfies $\underline{y}=f(\underline{y})$, and it is stable if $-1 \lt f'(\underline{y}) \lt 1$

---
### 6.2 Time-Invariant Differential Equations
A differential equation $y'(t)=f(t, y(t))$ describes the growth of a quantity $y(t)$. Above, we have seen that the direction field of the differential equation allows many solutions: one for every starting point. An expression that represents all these solutions together is called the **general solution** of the differential equation. In order to determine $y(t)$ for $t \gt 0$ we should know, next to the differential equation, also the initial state $y(0)$

An **initial value problem** is a differential equation with an initial condition

$$
\left\{
\begin{array}{ll}
y'(t) &= f(t,y(t)) \\
y(t_0) &= y_0 
\end{array}
\right.
$$

In this section, we restrict ourselves to **time-invariant differential equations** for which $y'(t)=f(y(t))$; the right hand side does not depend explicitly on time

#### 6.2.1 Separation of Variables

Consider the following situation. We look for the solution $y(t)$ of the initial value problem

$$
y'(t)=ky(t)
$$

$$
y(0)=2
$$

First, we move the factor $y(t)$ to the left hand side. This is realised by dividing the differential equation left and right by $y(t)$, giving

$$
\frac{1}{y(t)}y'(t)=k
$$

Next, we integrate left and right with respect to $t$

$$
\int \frac{1}{y(t)}y'(t)dt = \int k dt
$$

In the integral on the left, we change the integration variable to $y$ by using substitution. With $dy=y'(t)dt$ we find

$$
\int \frac1{y}dy = \int k dt
$$

Elaborating these integrals, we obtain

$$
\ln(|y|) = kt + K
$$

where $K$ is an arbitrary constant. To find $y(t)$ we remove the natural logarithm by taking the ecponential, both on the left and on the right hand side

$$
e^{\ln(|y|)} = e^{kt+K} = e^K e^kt
$$

so

$$
|y(t)| = Ce^{kt} \text{ where } C=e^K
$$

We can now drop the absolute value by admitting negative values for $C$

We now have obtained the general solution of the differential equation,

$$
y(t)=Ce^{kt}
$$

The constant $C$ is used to make $y(t)$ satisfy the initial condition. Here $y(0)=2$, which gives

$$
\left.
\begin{array}{ll}
y(0) &= Ce^{k0}0 = C \\
y(0) &= 2
\end{array}
\right\}
\Rightarrow
C=2
$$

Hence, the solution of the initial value problem is $y(t)=2e^{kt}$ 

>[!Note]
>The method that we used above to solve the differential equation $y'(t)=ky(t)$ can in principle be applied to any time-invariant differential equation

>[!Important]
>Algorithm for solving $y'(t)=f(y(t))$
>1. Carry $f(y)$ to the left hand side by division
>2. Take antiderivatives with respect to $t$
>3. At the left hand side, switch to $y$ as an integration variable
>4. Find the integral at the left hand side, no integration constant is required here
>5. Solve the resulting equation for $y(t)$
>6. If an initial condition is specified, use this to find the integration constant

#### 6.2.2 Special Cases: The Growth Functions
In [[Mathematics that Works 2-Chapter 3-Change and Growth#3.2 Models for Continuous Growth|Chapter 3.2]] we discussed several growth functions, and we found relations between these functions and their derivatives

|                     | Growth Function             |                                 | Differential Equation |
| ------------------- | --------------------------- | ------------------------------- | --------------------- |
| Exponential         | $y(t)=ce^{rt}$              | $y'(t)=ry(t)$                   | Linear                |
| Bounded Exponential | $y(t)=a-ce^{rt}$            | $y'(t)=r(a-y(t))$               | Linear                |
| Logistic            | $y(t)=\frac{a}{1+ce^{-rt}}$ | $y'(t)=\frac{r}{a}y(t)(a-y(t))$ | Logistic              |

---
### 6.3 Time-Dependent Differential Equations
#### 6.3.1 Separation of Variables
In the previous section, we applies the method of separation of variables to time-invariant differential equations. Here, we extend the method to a class of time-dependent differential equations

Consider the following situation. We are looking for the solution $y(t)$ of the initial value problem

$$
y'(t)=\frac1{t+1}y(t),\text{ with }y(1)=3
$$

First, we take the factor $y(t)$ to the left hand side of the equation. 

$$
\frac{y'(t)}{y(t)} = \frac{1}{t+1}
$$

Now the variables are separated; the left hand side depends on $y$ only, while the right hand side depends on $t$ only. Next, we integrate left and right hand side with respect to $t$

$$
\int \frac{y'(t)}{y(t)}dt = \int \frac{1}{t+1} dt
$$

In the integral to the left, we change the integration variable to $t$ by using substitution

$$
\int \frac{1}{y} dy = \int \frac{1}{t+1} dt
$$

Elaborating these integrals, we obtain

$$
\ln(|y|)=\ln(t+1)+K 
$$

Where $K$ is an arbitrary constant. This equation is solved for $y$. To remove the natural logarithm we take exponentials

$$
e^{\ln(|y|)} = e^{\ln(t+1)+K} = e^{K}e^{\ln(t+1)}
$$

so

$$
|y(t)|=C |t+1|
$$
Where $C=e^K$

We can drop the absolute values by admitting negative values for $C$

$$
y(t)=C(t+1)
$$

For the solution with $y(1)=3$ we find

$$
\left.
\begin{array}{ll}
y(1)&=2C \\
y(1)&=3
\end{array}
\right\} \Rightarrow
2C=3 \Rightarrow
C=\frac32
$$
