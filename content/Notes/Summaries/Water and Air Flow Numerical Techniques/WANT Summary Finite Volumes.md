---
fileClass: Base, Summaries
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 1. Finite Volumes in Steady States
## 1.1 Introduction
Finite volumes are slightly different from [[Finite Differences]]. The main difference lies in the perspective used. Whereas finite difference thinks in terms of nodes, finite volumes works with control volumes. Here, we still treat the same domain, but rather than connecting nodes, we divide the domain into blocks called control volumes. Each node is now contained inside a control volume, and rather than solving for the node, we are going to solve for the control volume. 

We have to make a few decisions on how to do so. The main decision is how to determine where one control volume ends and the other begins. There are generally two methods:
1. Each node is centred in the control volume
2. Each boundary between control volumes is exactly in the middle between 2 neighbouring nodes

![[Pasted image 20250510150854.png]]

Generally, we are going to follow the second approach, as this is easier when working with fluxes at the border.


## 1.2 The Mathematics of Finite Volumes
Our starting point is, again, the convection-diffusion equation

$$
\frac{\partial s}{\partial t} = -u \frac{\partial s}{\partial x} + D \frac{\partial^2 s}{\partial x^2}
$$

It is useful to write this in terms of fluxes again

$$
\begin{aligned}
\frac{\partial s}{\partial t} &= - \frac{\partial q}{\partial x} \\
qw &= us - D \frac{\partial s}{\partial x}
\end{aligned}
$$

We imagine a square box through which a fluid passes. Here, we keep it simple, and consider only a flow passing through the box in the $x$-direction. The box has a 'state' $s$, and we are interested in how this state changes over time. 

In the finite volume approach we take here, rather than solving the equation, we are going to create a budget for all the faces of the box. This is represented mathematically as follows:

$$
\int\limits_V \frac{\partial s}{\partial t} \, \mathrm{d}V = \oint\limits_S q \, \mathrm{d}S
$$

This reads as follows: the change of the state $s$, integrated over the control volume, is equal to the balance of everything which goes in and out of the volume through the box's faces. We can also write this as the sum of all the fluxes going in and out of the box

$$
\int\limits_V \frac{\partial s}{\partial t} \, \mathrm{d}V = \sum\limits_i^N Q_i
$$

Let's give our box the dimensions $\Delta x$, $\Delta y$ and $\Delta z$. The change in state $s$ between timesteps $n$ and $n+1$ can then be calculated in our example (again, assuming only flow in the $x$-direction) as

$$
s_{n+1} \Delta x \Delta y \Delta z - s_n \Delta x \Delta y \Delta z = q_{\text{left}} \Delta y \Delta z \Delta t - q_{\text{right}} \Delta y \Delta z \Delta t
$$

![[Pasted image 20250510153349.png]]

We can easily extend this for the other faces of the box by adding $q_{\text{top}}$ and $q_{\text{bottom}}$, for example. 

## 1.3 Steps to a Solution
In general, the steps needed to come to a solution can be divided along the two problems which are central:

1. The mathematical problem
   - Define a domain
   - Define a flux function
   - Define boundary conditions
   - Define external fluxes
2. The numerical problem
   - Define the discretization
   - Create the control volumes
   - Choose a method to solve the equations

