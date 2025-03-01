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
- $b$ is the inyte