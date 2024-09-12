---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---
# Intro
Diffusion: $c_t(x,t) = Dc_{xx}(x,t)$
Convection: $c_t(x,t)=-vc_x(x,t)$

# Convection and Diffusion
Convection means that particles move towards a direction.

Diffusion means that the particles move in a random direction. 

Today, the only spatial direction we consider is X, that is, one horizontal direction. 

# Initial conditions and boundary conditions
You need an initial condition in all cases

In some cases you have a boundary condition at one end of the spatial domain. There might be something there which greatly affects the process. 

Boundary condition: $c(t, a) = 0$ where t is time, a is the position of the boundary condition and the value is the value. It prescribes a fixed value. This is called a Dirchlet condition. 

Another: $c_x(t,a)$ = 0: where there is no flow at that point. It is simple a block which stops everything. 

If a BC has a value of 0, it is called homogeneous

So for a full description of the process ,you need a differential equation, an initial condition, and one or more boundary conditions. 

---
# Linearity, Homogeneity and Superposition
An ODE is 
- time-independent if $f(x(t), t)=f(x(t))$
- Linear if $f(x(t),t) = a(t)x(t)+b(t)$
- Linear and homogeneous if $f(x(t),t)=a(t)x(t)$

A linear combination of solutions of a linear homogeneous ODE is a solution of that ODE again. This is called **superposition**

A partial differential equation such as $c_t(x,t)=Dc_{xx}(x,t)-vc_x(x,t)$ is also linear and homogeneous

Superposition also applies to homogeneous linear boundary conditions

---
# Steady State Solutions
In the book steady state is called $cs(x)$, 

Finding a steady state is finding a function of x only,  since it does not depend on time anymore.

The steady states solve an ordinary differential equation with the time taken out, and set equal to 0. Thus it becomes an ordinary differential equation. 

The steady state must also satisfy the boundary conditions