---
fileClass: Base, Concepts
title: 
Parents: ["[[Reader RFM-Chapter 3-Derivation of the St-Venant equations]]"]
Draft: 
Status: To Revisit
aliases: 
Related Notes: ["[[Reader RFM-Chapter 3-Derivation of the St-Venant equations]]", "[[Reader RFM-Chapter 4-Solutions of the St-Venant equations]]"]
Related Terminology: 
Related Courses: ["[[River Flow and Morphology]]"]
---
The **Froude Number** is a dimensionless number defined as the ratio of inertial forces to gravitational forces in free-surface flow. It is based on the speed-length ratio, which Froude defined as

$$
\text{Fr} = \frac{u}{\sqrt{gL}}
$$

where
- $u$ is the flow velocity
- $g$ is the gravity acceleration
- $L$ is the characteristic length

In open channel flow, the characteristic length $L$ is typically the hydraulic depth $D_h$, so the Froude number is often rewritten as

$$
\text{Fr} = \frac{u}{\sqrt{g D_h}}
$$

where $D_h = \frac{A}{b}$ (with $A$ as the cross-sectional flow area and $b$ as the surface width)

An alternative yet equivalent expression of the Froude number in terms of [[Discharge]] $Q$, channel width $b$ and cross-sectional area $A$ (all of which are more often measured than flow velocity $u$) is as follows. 

$$
\text{Fr} = \sqrt{\frac{Q^2 b}{g A^3}}
$$

