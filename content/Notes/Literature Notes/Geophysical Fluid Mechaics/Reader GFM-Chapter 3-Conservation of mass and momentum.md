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
# 3.1 Introduction
In this chapter, we introduce the three main governing equations that enable us to describe and forecast the motion evolution of geophysical flows. The conservation laws are for the variables mass, movement and energy. For these variables, the derivation starts with equation 2.7, and the application of this generic equation to mass ($M$), three-components of the velocity ($u_i$) and energy ($e$). We start with an example that motivates us to derive an equation to ensure that mass is conserved. We then move to the derivation of the conservation equation. Under typical conditions of water and air, we simplify this mass conservation law, and we derive its incompressible form. A fluid that is incompressible keeps the volume constant subject to changes of temperature and pressure.

---
# 3.2 Conservation of Mass - The equation of continuity
![[Pasted image 20250224145242.png]]

Figure 3.1 (left) shows a deep convective cloud formed in the Amazonian rain forest. Clouds are fundamental entities in transporting mass, momentum and energy. A key question is how much mass clouds are transporting from the layer above the forest into the upper layers of the atmosphere, and how much mass is transported into or out of the cloud. During this transport, we need to account that mass ($M$) is not created and destroyed, and therefore we need to derive a physical law that conserves mass. From this general law, we can make physical assumptions that enable us to not only conserve the mass, but also conserve the volume. In doing so, we obtain a relation of the three directions of the wind that quantifies if the flow converges (moves together) or diverges (split up).

## 3.2.1 Why do we need a law to conserve mass?
We define mass ($M$) as $M=\rho V$ (where $\rho$ is density and $V$ is volume). Assuming that we have a control volume (see [[Reader GFM-Chapter 2-Kinematics|Chapter 2]]), mass can not be created or destroyed within this volume. In other words, if you import air of the same density over a boundary of the control volume, then it is forced to move out another boundary of the control volume. Mass is therefore a **conserved variable**. 

Another assumption that we will apply often in our derivations is that density of air or water is as a first approximation constant in time (not always, see [[Reader GFM-Chapter 6-Compressibility and vorticity|Chapter 6]] for a more in-depth discussion). If this assumption holds, then in addition of mass conservation, the volume is also conserved. If the flow satisfied this assumption, we call it **incompressible flow**. Applying this assumption to the conserved law of momentum will enable us to obtain more physical expressions of the [[Shear Strain]]-term
