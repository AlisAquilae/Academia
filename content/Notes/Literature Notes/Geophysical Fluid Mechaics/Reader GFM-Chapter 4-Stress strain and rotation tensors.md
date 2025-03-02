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

In our next step, we only consider terms of the first order derivatives in $\Delta x_j$. The increment in velocity (now in index notation) reads

$$
\Delta u_i = \frac{\partial u_i}{\partial x_j} \Delta x_j \tag{4.2}
$$

Note that $\frac{\partial u_i}{\partial x_j}$ is a second-order tensor that describes the velocity gradients in the flow: the shear-rate tensor. This tensor quantifies all the deformations and rotations in all directions that depend on the velocity gradients. In the following, we will decompose it into two contributions to distinguish between shear-strain and rotation. 

Adding and subtracting the term $\frac{\partial u_j}{\partial x_i}$ in Equation 4.2, we can then rewrite the increment in the velocity $\Delta u_i$ as

$$
\Delta u_i = \overbrace{\frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) \Delta x_j}^{\text{related to shear-strain}} \;+ \; \underbrace{\frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} - \frac{\partial u_j}{\partial x_i} \right) \Delta x_j}_{\text{Related to rotation}} \tag{4.3}
$$

We can now define in more detail the strain and rotation tensors

## 4.2.2 Strain rate tensor
From equation 4.3, we define the strain-rate tensor as

$$
d_{ij} = \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) \tag{4.4}
$$

This tensor is related to the shear tensor using the viscosity in the fluid $\mu$. In doing so, we can relate the stress tensor to the physical aspects (velocities) of the flow. 

$$
\begin{aligned}
\tau_{ij} &= -2\mu d_{ij} \\
&= -\mu \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right)
\end{aligned} \tag{4.5}
$$

Very important to note is that this tensor is symmetric. In other words: $d_{ij} = d_{ji}$. 

>[!Info]
>One can check this with a simple example by substituting $i=1$ and $j=2$, and finding out if $d_{12}$ equals $d_{21}$


The physical interpretation of this term is to view it as a transporting momentum through the control volume. A retarding stress would transport momentum out of the control volume, whereas a stress in the direction of motion transports momentum into the volume.

>[!Note]
>This point of view is useful in determining the signs of the various stresses. It also corresponds closely to the actual physical process since the “shear” on a volume is created by fluid molecules entering the volume at a higher or lower velocity than the average velocity of the particles already in the volume.

## 4.2.3 Rotation-rate tensor
Similar to the strain tensor, we now define the rotation-rate tensor:

$$
\omega_{ij} = \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} - \frac{\partial u_j}{\partial x_i} \right) \tag{4.7}
$$

Notice that from the definition, we can see that the rotation vector is directly related to the curl of the velocity field (cross-product of gradient vector and velocity vector). Another property of this tensor is that it is asymmetric, and therefore $\omega_{ij} \neq \omega_{ji}$. 

The rotation rate tensor can also be written in a vectorial form as:

$$
\overrightarrow{\omega}_{rot} = \frac{1}{2} \overrightarrow{\nabla} \times \overrightarrow{u} \tag{4.8}
$$

The vorticity is defined as the curl (form or cause to form into a curved or spiral shape) of the velocity field. Vorticity is a vector quantity. The magnitude of the vorticity vector is a measure of the rotation of the fluid. The direction of the vorticity: the vector determines the axis of rotation, and the direction determines the sense of rotation (clockwise if the vector points away from you). Furthermore, the rotation vector is also closely linked to another property of the velocity field that