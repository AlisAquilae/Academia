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
# 4.2 The Convection-Diffusion Equation
## 4.2.1 Functions of Space and Time
In this chapter, we consider the evolution of processes in space and time. Examples are transport of matter (molecules, cells or organisms), possible in combination with (bio-)chemical reactions, heat transport, fluid flows, et cetera.

We shall model these processes with mathematical equations, which we formulate on the basis of transport laws and conservation laws. As a thread in this section, we use the example of the concentration $c$ of the substance in solution. However, similar results apply for the other above-mentioned applications. 

>[!Note]
>To keep things simple, we assume in this chapter that motion takes place in one direction only; we denote the spatial variable in this direction with $x$. 

## 4.2.2 Conservation Laws and the Balance Equation
The conservation law in all its various forms is the fundamental rule for the changes of a spatial distribution. The mathematical formulation of the conservation law is the balance equation. In simple words, this balance equation is formulated as follows:
- Consider a small domain
- Compute the change of the amount of substance in the domain: the amount of substance flowing in minus the amount flowing out, plus the amount of substance originating within the domain minus the amount that disappears

>[!Warning]
>The book gives a detailed derivation of the balance equation of concentration. I have skipped this part, since it serves as an example which we do not engage further with. I will only show the final balance equation which was derived

$$
\frac{\partial}{\partial t}c(x,t) = -\frac{\partial J(x,t)}{\partial x} + \sigma (c(x,t),x,t)
$$

where
- $\frac{\partial}{\partial t}c(x,t)$ is the total rate of change
-  $-\frac{\partial J(x,t)}{\partial x}$ is the net transport rate
- $\sigma (c(x,t),x,t)$ is the source density

## 4.2.3 Transport Laws: Convection, Diffusion and Dispersion
The balance equation derived above connects the rate of change of a concentration $c(x,t)$ to the flow density $J(x,t)$. Below we consider transport laws that state how the flow density $J(x,t)$ depends on the concentration $c(x,t)$. Contrary to the balance equation, which formulates a general bookkeeping principle based on mass conservation, the transport law depends on the nature of physical processes. Neglecting possible source terms, we consider three important cases

### 4.2.3.1 Convection
The particles are carried along by a flow (e.g. a liquid or gas flow). This process is called convection. If $v(x,t)$ is the flow velocity, then

$$
J(x,t) = v(x,t)c(x,t)
$$

Substitution in the balance equation gives

$$
\frac{\partial}{\partial t} c(x,t) = \frac{\partial}{\partial x} (v(x,t)c(x,t))
$$

This is the (one-dimensional) convection equation or transport equation. If the flow velocity $v$ does not depend on position $x$ or time $t$, then it reduces to

$$
\frac{\partial}{\partial t} c(x,t) = -v \frac{\partial}{\partial x} c(x,t)
$$

Since the transport equation contains only first order partial derivatives of $c(x,t)$ with respect to $t$ and with respect to $x$, the transport equation is called a first order partial differential equation. 

### 4.2.3.2 Diffusion
The particles move because of continuous random movements of individual molecules. This motion of individual particles is often called a random walk. The collective motion of all particles together is denoted with the term diffusion. It leads to a flow that is proportional to the differences in concentration

$$
J(x,t) = -D \frac{\partial}{\partial x}c(x,t)
$$

This relation is called Fick's Law; the proportionality constant $D$ is called the diffusion coefficient. 

Substitution of Fick's Law into the balance equation gives

$$
\frac{\partial}{\partial t}c(x,t)= \frac{\partial}{\partial x}\left(D \frac{\partial}{\partial x}c(x,t) \right)
$$

This is the (one-dimensional) diffusion equation. Often we assume that $D$ does not depend on $x$, and then it reduces to

$$
\frac{\partial}{\partial t}c(x,t)= D \frac{\partial^2}{\partial x^2}c(x,t)
$$
As the diffusion equation has a second order partial derivative with respect to $x$, this is a second order partial differential equation
### 4.2.3.3 Dispersion
The particles move because of mutual repulsion. This mechanism is obvious in electrical charges, but it also occurs in population dynamics, if individuals compete for resources such as food. Again, there is a levelling flow from high density to low density, and this flow is proportional to the differences in the concentration. 

$$
J(x,t)=-D \frac{\partial}{\partial x}c(x,t)
$$

This relation has exactly the same form as Fick's Law, although the underlying mechanism is quite different. Substitution in the balance equation gives

$$
\frac{\partial}{\partial t}c(x,t)= \frac{\partial}{\partial x}\left(D \frac{\partial}{\partial x}c(x,t) \right)
$$

When $D$ is constant in space, this reduces to

$$
\frac{\partial}{\partial t}c(x,t)= D \frac{\partial^2}{\partial x^2}c(x,t)
$$

The potential equation has the same form as the diffusion equation. Also in chemistry and hydrology, one speaks of a (chemical or hydrostatic) potential. In population biology, one speaks of a dispersion equation. 

As the dispersion equation has a second order partial derivative with respect to $x$, this is a second order partial differential equation

### 4.2.3.4 Convection-Diffusion Equation
The transport equation described the transport of particles in a flow. On second thought, it is not very likely that the particle motion is fully determined by the flow, since particles move also within the flow. This motion may have various causes, for example (molecular) diffusion or an (electrical or chemical) potential

A liquid flow through a porous medium (such as sand or clay) follows winding tracks. Then the flow $v$ is a spatial average; local deviations occur with respect to this value. This can induce dispersion of the particles, an additional scattering resembling molecular diffusion, but to a larger extent. A comparable effect can be caused by turbulence in a liquid- or gas flow at high speed.

In all these cases, the transport is not by convection only, but also diffusional effects play a role; hence, we obtain a mixture of the convection equation with the diffusion equation

$$
\frac{\partial}{\partial t}c(x,y)= \frac{\partial}{\partial x}\left(D \frac{\partial}{\partial x}c(x,t) \right) - \frac{\partial}{\partial x} (v(x,t)c(x,t))
$$

An equation of this form is called a convection-diffusion equation or an advection-dispersion equation, depending on the field of application. 

## 4.2.4 Initial Conditions and Boundary Conditions
Time-dependent processes are often described by a function $c(t)$. The value of $c(t)$ at time $t$ is called the state of the process. When the rate of change $c'(t)$ is modelled with an ordinary differential, we need an initial value $c(0)$ for a full description of the process. 

For processes depending on space and time, the situation is more complicated. Here, the value of $c(x,t)$ for all positions $x$ is called the state of the process at a given time $t$. When we model the process with a partial differential equation, not only do we need an initial condition (for example, $c(x,0)=\varphi(x))$, but we must also describe what happens at the boundaries of the spatial domain. We do this by formulating boundary conditions.

For the convection equation

$$
\frac{\partial}{\partial t} c(x,t) = -v \frac{\partial}{\partial x} c(x,t)
$$

(with $v \gt 0$) we distinguish between bounded and unbounded spatial domains.

On an unbounded domain (that is. $-\infty \lt x \lt \infty$) we only need an initial condition,

$$
c(x, t_0) = \varphi(x)
$$

At an upstream boundary of the domain, we usually need a boundary condition. Mostly, it has the form

$$
c(a, t)=f(t)
$$

At a downstream boundary, imposing a boundary condition is not allowed

For the diffusion equation

$$
\frac{\partial}{\partial t}c(x,t)= D \frac{\partial^2}{\partial x^2}c(x,t)
$$

a finite spatial domain, $a \lt x \lt b$, is used most often. As $t \gt 0$, one speaks of a strip in the $(x,t)$-plane.

Now we need an initial condition,

$$
c(x,t_0)=\varphi(x)
$$

and at both boundaries a boundary condition

The boundary conditions can attain various forms; the simplest are the linear boundary conditions. The mostly used linear boundary conditions (for the boundary $x=a$) are listed below

>[!Important]
>At a boundary $x=a$,
>- A boundary condition of the first kind (or Dirichlet boundary condition) prescribes the state variable,
>  
>$$
>c(a,t)=f(t)
>$$
>
>- A boundary condition of the second kind (or Neumann boundary condition) prescribed the spatial derivative of the state variable,
>  
>$$
>\frac{\partial}{\partial x}c(x,t)=f(t)
>$$
>
>- A boundary condition of the third kind (or Robin boundary condition), which prescribes a linear relation between the state variable and its spatial derivative,
>  
>$$
>\alpha c(a,t) + \beta \frac{\partial}{\partial x}c(a,t) = f(t)
>$$

Similar conditions may apply at the boundary in $x=b$. 

>[!Note]
>The boundary conditions on both boundaries need not be the same. For example, on one boundary we may prescribe the state variable, while we prescribe its spatial derivative on the other boundary

The above linear boundary conditions are called homogeneous if the right hand side is 0. In other words, a linear boundary condition $\alpha c(a,t) + \beta \frac{\partial}{\partial x}c(a,t) = f(t)$ at $x=a$ is called homogeneous of $f(t)=0$ for all $t\gt 0$. Otherwise, it is called inhomogeneous

## 4.2.5 The Superposition Principle
In the process of finding a solution of a partial differential equation, the linearity plays an important role; all results in this chapter apply only to linear equations. Fortunately, many processes in space and time, among which diffusion and convection, can be modelled adequately with linear equations.

Linear combinations of solutions of a linear homogeneous equation such as 

$$
\frac{\partial}{\partial t} c(x,t) =D \frac{\partial^2}{\partial x^2}c(x,t) -v \frac{\partial}{\partial x} c(x,t)
$$

are in turn solutions of the same equation: if $c_1(x,t)$ and $c_2(x,t)$ are solutions, then any linear combination $\alpha c_1(x,t) + \beta c_2(x,t)$ with arbitrary coefficients $\alpha$ and $\beta$ is a solution as well. This is known as the superposition principle; $c(x,t)$ is called a superposition of the solutions $c_1(x,t)$ and $c_2(x,t)$. 

The superposition principles does not only apply to the differential equation, but also to the boundary conditions. For example, for a homogeneous boundary condition of the first kind at the boundary $x=a$ we have

$$
\text{ if } \, u_1(a,t) = 0 \, \text{ and } \, u_2(a,t)=0 \, \text{ then also } \, u(a,t) = \alpha u_1(a,t) + \beta u_2(a,t) = 0
$$

If two functions satisfy the same homogeneous boundary condition, then any linear combination of these functions satisfies this boundary condition too. Hence, the superposition principle is also valid for a homogeneous linear differential equation with homogeneous linear boundary conditions


## 4.2.6 Steady States
If a process can be modelled with a time-invariant differential equation with time-invariant boundary conditions, its state often has a limit as $t \to \infty$. This final state is a special solution of the differential equation (with boundary conditions) that does not depend on time. Such a solution is called a steady state solution of the differential equation. As it does not change in time, it is relatively easy to compute. 

>[!Example]
>In a column infiltration experiment, we inject water with a solute concentration $C$ into a clean soil sample. If $v$ denotes the water velocity in the soil sample, then the concentration $c(z,t)$ satisfies the advection-disperion equation
>
>$$
>\frac{\partial}{\partial t} c(x,t) =D \frac{\partial^2}{\partial x^2}c(x,t) -v \frac{\partial}{\partial x} c(x,t)
>$$
>
>with the initial boundary conditions
>- $c(z,0)=0 \, \text{ initial condition}$
>- $c(0,t)=C \, \text{ boundary condition top}$
>- $c_z(h,t) = 0 \, \text{ boundary condition bottom}$
>
>After some time, the concentration approaches a final state.
>
>$$
>\lim\limits_{t \to \infty} c(z,t) = cs(z)
>$$
>
>This final state $cs(z)$ does not vary with time; yet it is a solution of the differential equation. Therefore,
>
>$$
>\frac{\partial}{\partial t}cs(z)=0=D \frac{\partial^2}{\partial z^2}cs(z) -v \frac{\partial}{\partial z} cs(z)
>$$
>
>Thus, the final state $cs(z)$ can be found by solving an ordinary differential equation!
>
>The general solution of the equation
>
>$$
>D\, cs''(z)-v\, cs'(z) = 0
>$$
>
>Is solved by first taking the antiderivative
>
>$$
>D \, cs'(z) - v\,cs(z)=A
>$$
>
>where $A$ is an arbitrary real constant. Next, the resulting ordinary differential equation is either solved by separation of variables, or by variation of constants. The result is
>
>$$
>cs(z)=-\frac{A}{v} + Be^{vz/D}
>$$
>
>Where $B$ is a second constant. As $cs(z)$ must also satisfy both boundary conditions, $-\frac{A}{v} = C$ and $B=0$. Therefore, 
>
>$$
>cs(z)=C
>$$
>
>This result agrees with our physical intuition; if we infiltrate water with concentration $C$ into the column long enough, then the whole column will have concentration $C$ in the end


# 4.5 Unbounded Domains
## 4.5.1 Different Domains, Different Boundary Conditions

Usually we are interested in processes on a bounded spatial domain. However, if we are not interested in events close to a boundary of this domain, then we may neglect the effect of this boundary. In this case, we can model the spatial domain as half-infinite; thus, we obtain a diffusion equation on a quadrant of the $(x,t)$-plane,

$$
x \gt 0, t \gt 0
$$

The boundary $x=0$ has an ordinary boundary condition. The point $x = \infty$ is called an improper boundary. There an improper boundary condition applies, for example $c(x,t)$ is bounded for large values of $x$, or $c_x(x,t) \to 0$ as $x \to \infty$. 

In some cases, we are only interested in events somewhere in the middle of the domain, far away from any boundary. Then it is convenient to model the domain as unbounded. Thus, we get the diffusion equation on a half-plane

$$
-\infty \lt x \lt \infty, t \gt 0
$$

Now, for $x = -\infty$ as well as for $x=\infty$ we have an improper boundary condition

## 4.5.2 The Boltzmann Transform and the Error Function
In this section, we consider solutions of the diffusion equation and of the convection-diffusion equation on an infinite or half-infinite spatial domain. We given special solutions for some diffusion problems that often occur in practice. 

The error function $\mathit{erf}(y)$is defined as

$$
\mathit{erf}(y) \underset{\text{D}}{=} \frac{2}{\sqrt{\pi}} \int_0^y e^{-x^2} \mathrm dz
$$

The function 

$$
c(x,t) = \mathit{erf} \left(\frac{x}{2 \sqrt{D\,t}} \right)
$$

is a solution of the diffusion equation $c(x,t)=Dc_{xx}(x,t)$

>[!Note]
>You do not have to understand how the error function works or why it works

The error function gives us a solution of the diffusion equation that is valid for $t \gt 0$ and all $x$. The corresponding initial and boundary conditions are stated in the next property

The function $c(x,t) = \mathit{erf} \left(\frac{x}{2 \sqrt{D\,t}} \right)$ is the solution of the initial value problem

$$
\left\{
\begin{array}{ll}
\text{PDE} &: \frac{\partial}{\partial t}c(x,t) = D \frac{\partial^2}{\partial x^2}c(x,t) \, \text{ with } \, -\infty \lt x \lt \infty \\
\text{BC}_1 &: c(-\infty, t) = -1 \\
\text{BC}_2 &: c(\infty, t) = 1 \\
\text{IC} &: c(x,0) = \left\{
\begin{array}{ll}
-1  & \text{ for } \, x \lt 0 \\
0  & \text{ for } \, x = 0 \\
1 & \text{ for } \, x \gt 0
\end{array}
\right.
\end{array}
\right.
$$


