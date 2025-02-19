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
# 1.1 Introduction
Geophysical Fluid Mechanics addresses the mechanics of geophysical flows. Various types of flow occur on earth, including the flows of lava, water and air. This first chapter sets out to establish the difference between a fluid and a solid, and introduce the basic properties of a fluid. The second part of this chapter explains the tensor notation used in the mathematical description of the balance equations that govern the geophysical flow in the remainder of this reader.

# 1.2 Properties of Fluids
The difference between a solid and a fluid can be introduced from a comparison between pudding. When tilted, pudding will deform over a fixed distance. In more formal terms, it reacts to a [[Shear Force|Shear Stress]], $\tau$, with a fixed deformation, called the [[Shear Strain]], $\gamma$. It is therefore a solid. A [[Fluid]], on the other hand, reacts to shear stress with a continuous deformation. It is then not interesting to look at the deformation itself, since the fluid continues to deform indefinitely. Instead, what is interesting is the [[Shear Rate]], $S$ or $\dot{\gamma}$, i.e. the speed with which the fluid is deformed. 

The shear strain is found by measuring the deformation horizontally relative to the original height - in other words,

$$
\gamma = \frac{\mathrm{dx}}{\mathrm{dy}} \tag{1.1}
$$

The shear rate, then, is the shear stress per unit of time. Given that a distance per unit of time is simply the velocity, the shear rate is quantified as

$$
S = \dot{\gamma} = \frac{\mathrm{dx}}{\mathrm{dy}} \frac{1}{\mathrm{dt}} = \frac{\mathrm{du}}{\mathrm{dy}} \tag{1.2}
$$

Where
- $\mathrm{dx}$ is the displacement in horizontal direction
- $\mathrm{dy}$ is the original height
- $\mathrm{dt}$ is the time period
- $\mathrm{du}$ is the horizontal displacement in the time period, i.e. the velocity in the flow direction

How much the shear rate is influenced by a certain amount of sheer stress depends on the [[Fluid Viscosity]]. Viscosity is the first key property of a fluid, which can be described as the "syrupiness". When a fluid is more viscous, it offers more resistance to deformation. 

Newton performed experiments in which he found shear stress to be proportional to the shear rate. This, as we call it now, is [[Newton's Law of Viscosity]]:

$$
\tau = \mu \frac{\mathrm du}{\mathrm dy} \tag{1.3}
$$

$\mu$ is the [[Dynamic Viscosity]], and its value is different for every fluid. The ratio of dynamic viscosity to fluid density is called the [[Kinematic Viscosity]], $v$. Both $v$ and $\mu$ decrease with increasing temperature. 

Fluids that satisfy equation 1.3 are called [[Newtonian Fluids]], which include water and air. 

>[!Note]
>Not all geophysical fluids are Newtonian. Quicksand, for instance, is a dilatant substance, which means that $\mu$ increases with the rate of shear

A second key property of a fluid is [[Fluid Density]], which is equivalent to [[Specific Mass]] or mass per unit of volume. [[Specific Weight]] is the specific mass times the gravitational acceleration, hence, $w=\rho g$. Finally, [[Specific Volume]] is defined as volume per unit of mass. 

The third key property of a fluid is [[Fluid Surface Tension]]. A molecule located inside a fluid is pulled equally in all directions by cohesive forces from neighbouring fluid molecules, resulting in a net force of zero. Molecules at the surface do not have the same molecules on all sides of them, and therefore are pulled to the inside of the fluid. This creates internal pressure and a tangential force parallel to the surface, forcing the liquid surfaces to contract to the minimum area. The parallel forces are referred to as surface tension, and smooth the surface.

---
# 1.3 Use of Tensors
A [[Tensor]] is a mathematical object that helps to describe physical properties such as stress, strain or velocity gradients at any location in a fluid.

## 1.3.1 Why use tensors?
1. Equations written as tensors do not change, regardless of the number of dimensions we consider (1D, 2D or 3D) and the coordinate system (Cartesian, cylindrical or spherical)
2. Equations are more compact
3. More emphasis on underlying physical mechanisms

## 1.3.2 Order of tensors
- Tensors can be of order 0, 1, 2, $\dots$ The order of the tensors depends on the number of directions involved. E.g. temperature or pressure have no direction and are zeroth order tensors. Velocity has one direction, thus a first-order tensor. Shear stress involves two directions (a force on a direction, acting on a surface with a direction) and is a second-order tensor. Third order tensors are hardly used in this course.
- The number of components of a tensor depends on its order and number of dimensions involved 

$$
n_c = n_d^{n_o}
$$

where
- $n_c$ is the number of components
- $n_d$ is the number of dimensions
- $n_o$ is the order of tensors

See the table below for an overview of different tensors

| Type   | Example      | Order | Number of components | Index       | Vector               |
| ------ | ------------ | ----- | -------------------- | ----------- | -------------------- |
| Scalar | Pressure     | 0     | 1                    | $p$         | $p$                  |
| Vector | Velocity     | 1     | 3                    | $u_i$       | $\overrightarrow{u}$ |
| Dyad   | Shear stress | 2     | 9                    | $\tau_{ij}$ | $\tau$               |

## 1.3.3 Tensor notations
- **Vector notation:** 
	- Scalar: $a$ (normal letter)
	- Vector: $\overrightarrow{a}$ (letter with arrow)
	- Dyad / Tensor: **a** (bold letter)
- **Einstein / Index notation:**
	- Scalar: $a$ (no index)
	- Vector: $a_i$ (one index)
	- Dyad / Tensor: $a_{ij}$ (two different indices)
- **Full / Component notation**
	- Scalar: 
	  
	  $$
	  a
	  $$
	  
	- Vector:
	  
	  $$
	  \begin{pmatrix}a_1\\ a_2 \\a_3\end{pmatrix}
	  $$
	  
	- Dyad / Tensor:
	  
	  $$
	  \begin{pmatrix}a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}
	  $$
	  
	  How do we measure a tensor? When trying to measure a tensor, the order of the tensor determines the number of values you expect. If e.g. you want to measure temperature (a scalar) you expect only one value. If you are measuring velocity (a vector) you expect to measure three values (one for each component), and so forth.
	  
- **Summation convention**: Any repeated index is summed over. The number of non-repeated indices determined the tensor order of the result.

>[!Example]
>
>$$
>a_ib_i
>$$
>
>$a_i$ and $b_i$ both have one index so they are vectors. Index $i$ is repeated. There is no non-repeated index, so the result is a scalar. We sum over the repeated index (sum until 3 for the 3D case and until 2 for the 2D case):
>
>$$
>a_ib_i = \sum^3_{i=1} a_ib_i = a_1b_1 + a_2b_2 + a_3b_3
>$$

>[!Example]
>
>$$
>a_{ij}b_j
>$$
>
>$a_{ij}$ has two indices, so this is a tensor. $b_j$ has one index and is a vector. This term has one non-repeating index ($i$), so the result is a vector
>
>$$
>\begin{aligned}
>a_{ij}b_j &= \sum^3_{j=1}a_{ij}b_j \\
>&= a_{i1}b_1 + a_{12}b_2 + a_{i3}b_3 \\
>&= \begin{pmatrix}a_{11}b_1 + a_{12}b_2 + a_{13}b3 \\
>a_{21}b_1 + a_{22}b_2 + a_{23}b_3 \\
>a_{31}b_1 + a_{32}b_2 + a_{33}b_3 \end{pmatrix}
>\end{aligned}
>$$


## 1.3.4 Special Tensors
- **Unit vectors (first order)**: Unit vectors (length 1) pointing in the direction of the axes:

$$
\begin{aligned}
\overrightarrow{e_1} &= \begin{pmatrix}1\\0\\0\end{pmatrix} \\
\overrightarrow{e_2} &= \begin{pmatrix}0\\1\\0 \end{pmatrix} \\
\overrightarrow{e_3} &= \begin{pmatrix}0\\0\\1 \end{pmatrix} \\
\end{aligned}
$$

![[Pasted image 20250218202452.png]]

>[!Example]
>
>$$
>u = \begin{pmatrix}u_x \\ u_y \\ u_z \end{pmatrix}
>$$
>
>can also be written by splitting the direction $e_i$ and the magnitude $u_i$:
>
>$$
>u = \overrightarrow{e_x}u_x + \overrightarrow{e_y}u_y + \overrightarrow{e_z}u_z
>$$

- **Gradient vector (first order)**: This is a vector form of the derivative and only has meaning when combined with another tensor (which can be of varying orders):

$$
\overrightarrow{\nabla} = \frac{\partial}{\partial x_i} = \begin{pmatrix} \frac{\partial}{\partial x_2} \\ \frac{\partial}{\partial x_2} \\ \frac{\partial}{\partial x_3}\end{pmatrix}
$$

- **Kronecker delta** (second order): Used as a sort of identity matrix. It acts as a selector in tensor notation, returning the component of the tensor equal to the component the Kronecker delta is multiplied with.

$$
\left.
\begin{aligned}
\delta_{ij} = 1 \, \text{ if } \, i=j \\ \delta_{ij} = 0 \, \text{ if } \, i \neq 0
\end{aligned}
\right\} \Rightarrow \delta_{ij} = \begin{pmatrix}1&0&0 \\ 0&1&0\\0&0&1
\end{pmatrix} 
$$

>[!Example]
>If you multiple a vector $a_j$ with $\delta_{ij}$, you get
>
>$$
>\sum_j \delta_{ij}a_j = a_i
>$$

It is also frequently used in simplifying tensors with different components

>[!Example]
>For a second-order tensor $T_{kj}$:
>$$
>\delta_{ik} T_{kj} = T_{ij}
>$$

- **Alternating Unit Tensor** (third order): This is a third order tensor, which you can picture as a 3x3 cube


## 1.3.5 Products between vectors
- **Inner/scalar/dot product:** 
	- Result: scalar
	- Vector notation: $\overrightarrow{a} \cdot \overrightarrow{b} = |\overrightarrow{a}||\overrightarrow{b}|\cos \theta$, with $\theta$ the angle between $\overrightarrow{a}$ and $\overrightarrow{b}$
	- Index notation: $a_ib_i$ 
	- Component notation: $a_1b_1 + a_2b_2 + a_3b_3$
	- Physical interpretation: how parallel vectors are
- **Outer/vector/cross product:**
	- Result: vector
	- Vector notation: $\overrightarrow{a} \times \overrightarrow{b} = |\overrightarrow{a}||\overrightarrow{b}|\sin \theta \overrightarrow{n}$, where $\theta$ is the angle between the vectors and $\overrightarrow{n}$ is a unit vector orthogonal to $\overrightarrow{a}$  and $\overrightarrow{b}$ pointing in the direction defined by the right hand rule
	- Index notation: $\varepsilon_{ijk}a_ib_j$
	- Component notation:
	  
	  $$
	  \begin{vmatrix}
	  \overrightarrow{e_1} & \overrightarrow{e_2} & \overrightarrow{e_3} \\
	  a_1 & a_2 & a_3 \\
	  b_1 & b_2 & b_3 \\
	  \end{vmatrix} = \det \begin{pmatrix}
	  \overrightarrow{e_1} & \overrightarrow{e_2} & \overrightarrow{e_3} \\
	  a_1 & a_2 & a_3 \\
	  b_1 & b_2 & b_3 \\
	  \end{pmatrix} = \begin{pmatrix}
	  a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1
	  \end{pmatrix}
	  $$
	  
	- Physical interpretation: The degree of orthogonality of $\overrightarrow{a}$ and $\overrightarrow{b}$. 
- **Dyadic/direct product:**
	- Result: tensor
	- Vector notation: $\overrightarrow{a} \, \overrightarrow{b}$ or