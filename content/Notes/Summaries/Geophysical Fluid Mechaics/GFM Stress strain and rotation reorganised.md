---
fileClass: Base, Summaries
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Reader GFM-Chapter 4-Stress strain and rotation tensors]]"]
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
>[!Warning]
>This addendum contain the information from [[Reader GFM-Chapter 4-Stress strain and rotation tensors|Chapter 4]], but has been reorganised in a way which made more sense to me.

# Introduction to stress and strain
In geophysical fluid mechanics, stress describes forces that influence and shape the movement of a fluid. These stresses are responsible for deformations in the fluid, which are mathematically described using strain and rotation
- **Strain** (deformation without rotation): a measure of how the fluid elements stretch or compress
- **Rotation** (without deformation): a measure of how the fluid spins without changing its shape, i.e. the swirl of the flow

>[!Important]
>It is important to emphasise that stress does not directly cause rotation. Stress only causes strain, or deformation. Such deformations can be due to equal pressure from all directions, in which case the fluid expands or compresses but does not rotate. Conversely, fluid can rotate independently of stress, through a process called **rigid-body rotation**. However, stress-induced strain can cause rotation, in the specific case of [[Shear Strain]]. Such strain creates velocity differences between layers of fluid. This creates vorticity and induces rotation in the fluid


Based on the combination of translation, deformation and rotation, we can differentiate between 4 types of motion
- Rigid-body motion: only translation and rotation, with no deformation
- Spin rigidly: pure rotation
- Deformation while spinning: shear-induced rotation
- Flow smoothly: translation without rotation

Finally, before deriving deformation and rotation mathematically, it is important to differentiate rotation from vorticity. As mentioned before, rotation refers to how much a fluid element spins. Vorticity refers to the mathematical measure of rotation in a fluid, and is caused by differences in velocity. 

---
# Mathematical analysis of stress
To analyse stress mathematically, we must work towards deriving a stress tensor $\tau_{ij}$, as is included in the [[Navier-Stokes Equation]]. As described above, stress can (in)directly lead to strain (i.e. deformation) and rotation. To investigate these in tandem, we compute a velocity gradient tensor. Doing so allows us to identify whether flow converges towards a single point (causing compression, i.e. strain), flow past each other (causing shear strain) or spin around each other (causing rotation). 

We define the velocity gradient tensor as

$$
L = \nabla v = \frac{\partial v_i}{\partial x_j} \tag{1}
$$

where
- $v$ is the velocity
- $x$ is the current coordinate

>[!Example]
>Suppose the velocity field is
>
>$$
>v = \left( \frac{1}{5-x}, \frac{-y}{10}, 0 \right)
>$$
>
>This gives the velocity of any particle in the fluid as a function of the particle's position at that instant
>
>The velocity gradient is
>
>$$
>L = \begin{bmatrix} \frac{1}{(5-x)^2} & 0 & 0 \\ 0 & \frac{-1}{10} & 0 \\ 0 & 0 & 0  \end{bmatrix}
>$$


The velocity gradient tensor can be decomposed int symmetric and asymmetric parts as follows:

$$
\begin{aligned}
L &= \frac{1}{2}\left( L + L^T \right) + \frac{1}{2} \left(L - L^T \right) \\
&= \overbrace{\frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right)}^{\text{related to shear-strain}} \;+ \; \underbrace{\frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} - \frac{\partial u_j}{\partial x_i} \right)}_{\text{Related to rotation}}
\end{aligned} \tag{2}
$$

## Rate of Deformation Tensor
The first term $\frac{1}{2}\left( L + L^T \right)$ is symmetric, and describes the strain rate tensor in an Eulerian context. It is formally called the **Rate of Deformation Tensor**, and is assigned the symbol $D$. So $D$ is defined as

$$
\begin{aligned}
D &= \frac{1}{2}\left( L + L^T \right) \\
d_{ij} &= \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right)
\end{aligned}\tag{3}
$$

The rate of deformation tensor links with fluid viscosity ($\mu$) and external forces to form the stress tensor ($\tau_{ij}$). For an incompressible, unstratified fluid, this relation is described as

$$
\begin{aligned}
\tau_{ij} &= -2\mu d_{ij} \\
&= -\mu \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right)
\end{aligned} \tag{4}
$$

This equation shows that viscous forces are proportional to the velocity gradient, making it critical for describing momentum in the [[Navier-Stokes Equation]]. 

## Rotation-Rate Tensor
The second term, $\frac{1}{2} \left(L - L^T \right)$, is an asymmetric tensor. The asymmetric part is called the **spin tensor**, and gives the letter $W$. It is directly related to the rate of rotation, but not its deformation at all. It is defined as

$$
W = \frac{1}{2} \left(L - L^T \right) \tag{5}
$$
The rotation rate tensor can also be written in a vectorial form as:

$$
\overrightarrow{\omega}_{rot} = \frac{1}{2} \overrightarrow{\nabla} \times \overrightarrow{v} \tag{6}
$$

Rotation is closely related to vorticity. If vorticity is high, the fluid is rotating strongly. If vorticity is zero, the flow is irrotational. Specifically, vorticity ($\overrightarrow{\omega}$) is given as

$$
\overrightarrow{\omega} = \overrightarrow{\nabla} \times \overrightarrow{u} \tag{7}
$$

Hence, vorticity is two times the rotation vector $\overrightarrow{\omega}_{rot}$


So the velocity gradient tensor can be written as 

$$
\begin{aligned}
L &= D + W \\
&= d_{ij} + \omega_{ij}
\end{aligned}
$$

>[!Summary]
>In summary, the tensor $\partial u_i / \partial x_j$ has been split into an anti-symmetrical tensor, $\omega_{ij}$ (it is defined as the rotation rate tensor), and a symmetrical tensor, $d_{ij}$ (it is defined as the strain rate tensor, or deformation rate tensor). The latter is related to the shear tensor $\tau_{ij}$ that is included in the [[Navier-Stokes Equation]]

