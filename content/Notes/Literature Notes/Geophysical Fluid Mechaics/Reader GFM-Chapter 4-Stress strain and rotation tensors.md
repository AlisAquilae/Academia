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
# 4.1 Introduction
In the previous chapter, we derive the conservation of momentum as a physical law that enables us to calculate and forecast the acceleration and deceleration of water and air masses. It is in this conservation of momentum, or [[Navier-Stokes Equation]], that a force term deserves special attention because of its relevance in the transport of flow. This term is related to the stress tensor $\tau_{ij}$, and in Equation 3.26 is included in the last term on the left-hand side. In this chapter, we define this term and its mathematical formulation. In doing that, it is worth stressing that in geophysical flows it is key to find representative expressions of $\tau_{ij}$ to be included in the equations of the motion of the flow. Normally this requires specifying the stress tensor in terms of the properties of the flow, in particular the velocity field.

Stress, in the context of forces and flows, is defined as a force that causes a change in the flow. Strain, in a similar context, is the resulting deformation of the flow. Stress can occur without strain, but strain cannot occur in the absence of stress. The gradient of strain with respect to the three spatial directions is a key term int he conservation equation of motion. This physical term is important. Flow is characterised by multiple chaotic movements across the scales in which translation, deformation (strain), and rotation are fundamental attributes of the flow that need to be understood and represented.

---
# 4.2 Decomposing stress in strain and rotation
In the following section, we explain that stress is composed of two distinct phenomena: strain and rotation. We then provide a mathematical formulation to calculate both of them. We use Figure 4.1 as a conceptualisation of how the flow is influenced by strain, rotation, and translation.

![[Pasted image 20250302142054.png]]

In the deformation of the flow by stress, one can distinguish two physical effects: strain and rotation (see figure 4.2). Strain is defined mathematically as the strain-rate tensor or rate-of-strain tensor. It is a physical quantity that describes the rate of change of the deformation of a material in the neighbourhood of a certain point, at a certain moment in time. In figure 4.1 we observe that the rectangular figure changes in shape due to strain, but it is also influenced by rotation. A similar definition holds for the rate-of-rotation, but now referring to the swirl of the flow, as shown in figure 4.2.

![[Pasted image 20250302142315.png]]

## 4.2.1 How do we describe it mathematically?
To derive a mathematical expression of the stress tensor $\tau_{ij}$ as a function of the velocities, our starting point is a perturbation $\Delta u_i$ in the velocity field $u_i^o$ at position $o$. We can relate this perturbation to the derivatives of the velocity field using Taylor's series expansion. 

$$
u_i^o + \Delta u_i = u_i^o + \frac{\partial u_i}{\partial x_j} \Delta x_j + \frac{\partial ^2 u_i}{\partial x^2_j} \frac{(\Delta x_j)^2}{2!} + \dots \tag{4.1}
$$

>[!Note]
>Note that in the expansion we omit the terms of third- and higher-order.

In our