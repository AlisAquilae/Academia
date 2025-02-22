---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
# 2.1 Introduction
In this chapter we discuss four different approaches to describe the mechanics of a system. We will derive very generic equations for the conservation of any quantity of that system. These general equations will be used in [[Reader GFM-Chapter 3-Conservation of mass and momentum|Chapter 3]] and [[Reader GFM-Chapter 5-Conservation of energy|Chapter 5]] to describe the conservation of mass, momentum and energy.

---
# 2.2 Methods of Description
## 2.2.1 Approaches to Mechanics
There are different approaches to the description of mechanics. We differentiate approaches along two dimensions, with each dimension being differentiated into two as well:
- **System vs field**: In the *system* or *integral* approach, we are only interested in the bulk behaviour of the entire system. In the *field* or *differential* approach, we are interested in all details within the system. We want to know the entire field.
- **Lagrangian vs Eulerian**: In the *Lagrangian* or *constant mass* approach, we keep track of the position of individual objects or particles as they move, and study how their properties (e.g. pressure, velocity) change along their trajectory. In the *Eulerian* or *constant volume* approach, we do not consider the position and properties of the individual objects or particles, but instead focus on system properties (e.g. pressure, velocity) change at a fixed location. 

This differentiation gives rise to 4 approaches to mechanics.

## 2.2.2 Constant mass, system approach
In most high school physics, the constant mass, system approach is considered. Suppose
you would study the dynamics of the student on the bike in the upper left corner of Figure 2.2. The mass will remain constant within the mass system, i.e. the student will not suddenly disappear or become larger. We can apply [[Newton's Second Law of Motion]] $\overrightarrow{F} = m\overrightarrow{a}$, i.e. if a force is applied to a student, the student with either accelerate or decelerate. This approach works well for a clearly defined mass system (the student), but for a fluid, it is much harder to define a constant mass system. That is why we decide to give up on following the fluid and instead define a constant volume within which we will study the fluid.

![[Pasted image 20250222143537.png]]

## 2.2.3 Constant volume, system approach
We turn to our bridge example again. In the constant volume, system approach, we no longer keep track of the motion of the student but define a control volume. Conservation of mass as defined before does not hold in this case. The mass is not simply constant in our fixed volume. Instead, we must now keep track of the **flux** of mass over the edges and the total mass in the control volume. So in our previous example (Figure 2.3), we see that we have around 6.8 students in the volume, and we have an outflow of students on the left edge, so the mass of students in our control volume is decreasing in time.

![[Pasted image 20250222144409.png]]

Just like for the conservation of mass, [[Newton's Second Law of Motion]] will not simply hold for the control volume. Instead of keeping track of the momentum of one student, we will now keep track of the total momentum in our control volume (we ignore how this momnentum is )
