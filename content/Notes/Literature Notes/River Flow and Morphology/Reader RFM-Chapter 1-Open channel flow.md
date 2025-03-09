---
fileClass: Base, Literature Notes
title: 
Parents: ["[[River Flow and Morphology]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow and Morphology]]"]
---
# 1.1 Introduction
The course this reader was made for gives an introduction to the study of the flow of water through brooks, channels, rivers, etc. This type of flow is often called [[Open Water Flow]] or also free surface flow, to distinguish it from flow through closed conduits. 

In general, the quantities describing these flows vary in space and time. Such temporal and spatial variations are called **waves**. In this course, we are mainly interested in waves generate by, for example, rainfall events.

>[!Note]
>In many other context, the name 'wave' is reserved for periodic phenomena. This is *not* the case in these notes. A flood wave on the river Rhine is not periodic

Next section gives a very brief introduction of the hydraulics of closed conduits. This will only be used to state more clearly the differences with the description of open water flow

---
# 1.2 Closed conduits and pipes
In principle, any hydraulic flow can be described by the velocity vector $\overrightarrow{u}$ and pressure $p$ ( a scalar). They should be given for all times $t$ and places $(x,y,z)$ (within the solution domain)

>[!Note]
>We will only consider fluids with a constant density. For compressible fluids, for example, one should add that density as an essential descriptior

![[Pasted image 20250309154336.png]]

Figure 1.1 shoes a typical problem of the closed conduits. At the left water flows into a smaller pipe and continues through a wider pipe at the right. A complete description of this flow is given by the values of:

$$
\left\{  
\begin{aligned}
\overrightarrow{u}(t,x,y,z) &= \begin{pmatrix} u_x (t,x,y,z) \\ u_y (t,x,y,z) \\ u_z (t,x,y,z) \end{pmatrix} \\
&p(t,x,y,z)
\end{aligned}
\right\} \; \text{for all} (x,y,z) \in \text{the pipe}
$$

Figure 1.2 illustrates such a description.

![[Pasted image 20250309155012.png]]

The complete mathematical description is given by the continuity equation combined with the [[Navier-Stokes Equation|Navier-Stokes Equations]]. 

---
# 1.3 Free surface flow
The fundamental quantities to be investigated in open water flow are - as in the pipe flow case - velocities and pressure. The extra and complicating factor in the description of flow in channels and rivers is that it has a free surface: the flow domain (i.e. the "(x,y,z)" for which one has to determine the velocities and pressures) changes with the flow in time and space and the determination of this surface is part of the problem.

Not all boundaries of the domain are free. Figure 1.4 illustrates the non-varying part of the flow domain: the bed of the river. We denote the $z$-coordinate of this bed by $z_b (x,y)$.

![[Pasted image 20250309155635.png]]

The variable aspect of the flow domain is the upper surface formed by all the water depths (see Figure 1.5). We denote by $a(t,x,y)$ the water depth at place $(x,y)$ at time $t$

![[Pasted image 20250309155648.png]]

The description of open water flow thus consists of giving flow velocities and pressures for all $(x,y,z)$ such that $z_b (x,y) \le z \le a(t,x,y)$. This water depth $a$ is not given in advance: it is a result of the velocities and pressures and is thus part of the calculation problem. In principle, the Navier-Stokes equation can be extended to cover also this free surface flow. However, doing so makes these equations even more complex, and extremely difficult to solve numerically. 

To make the calculation of waves in open water practically feasible, one needs to simplify them by making assumptions - justified in most practical situations - reducing the mathematical complexity of the problem. The first scientist to do so efficiently was the French engineer Saint-Venant. The resulting differential equations are named after him.

---
# 1.4 The Rhine as example (==Skipped==)

