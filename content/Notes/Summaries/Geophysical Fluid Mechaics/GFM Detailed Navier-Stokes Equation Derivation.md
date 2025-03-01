---
fileClass: Base, Summaries
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Reader GFM-Chapter 2-Kinematics]]", "[[Reader GFM-Chapter 3-Conservation of mass and momentum]]"]
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---

>[!Warning]
>This summary is dedicated to deriving the Navier-Stokes equation in a more elaborate manner, especially concerning how to arrive at the initial momentum balance equation. This is a summary partially based on the study book, but supplemented with results from online searches and ChatGPT.


# Reynolds Transport Theorem
The Reynolds Transport Theorem (RTT) is a fundamental theorem in fluid mechanics that allows us to translate the description of physical laws from a [[Lagrangian Perspective]] (i.e. system-based) to a [[Eulerian Perspective]] (i.e. control-volume based). It helps to analyse how extensive properties (like mass, momentum and energy) change within a control volume and across its boundaries
## The Integral Form
In an integral form, we consider a control volume $CV$, which is a fixed region in space through which fluid flows. Let $B$ be any property (such as mass, momentum or energy) and let $b$ be the corresponding intensive property (i.e. per unit mass):

$$
B = \int\limits_{CV} \; \rho b \, \mathrm{d}V \tag{1}
$$

where
- $\rho$ is the fluid density
- $b$ is the intensive property (e.g. $\overrightarrow{u}$ if $B$ is momentum)
- $\mathrm{d}V$ is a differential volume element

We know, however, that $B$ can change over time in a control volume, for example mass flowing in and out of the CV. The flow volume out of an infinitesimal (i.e. infinitely small) edge piece $\mathrm{d}A$ is equal to:

$$
\overrightarrow{u} \cdot \overrightarrow{n} \; \mathrm{d}A \tag{2}
$$

where
- $\overrightarrow{u}$ is the velocity
- $\overrightarrow{n}$ is a unit vector point outwards and orthogonal to the surface of the control volume. 
- $(\overrightarrow{u} \cdot \overrightarrow{n}$), i.e. the dot product, corresponds to the projection of the velocity in the direction orthogonal to the surface, which is the only part of the velocity contributing to the outflow. The flow parallel to the surface will not contribute to the outflow

>[!Note]
>We define outflow as positive, and correspondingly define inflow (where the velocity is directed into the control volume) as negative outflow

The net outflow out of the total outer edge $CS$ of the control volume is equal to 

$$
\int\limits_{CS} \rho b \; (\overrightarrow{u} \cdot \overrightarrow{n}) \; \mathrm{d}A \tag{3}
$$

