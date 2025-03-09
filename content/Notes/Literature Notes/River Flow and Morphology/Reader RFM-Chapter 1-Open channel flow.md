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
The fundamental quantities to be investigated in open water flow are - as in the pipe flow case - velocities and pressure. The extra and complicating factor in the description of flow in channels and rivers is that it has a free surface: the flow domain (i.e. the "(x,y,z)" for which one has to determine the velocities and pressures) changes with the flow in