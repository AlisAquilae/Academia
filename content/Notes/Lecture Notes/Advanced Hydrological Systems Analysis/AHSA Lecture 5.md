---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# Introduction
Today: saturated and unsaturated zone processes, strong focus on groundwater recharge
- Saturated/unsaturated flow (brief recap)
- Groundwater recharge (definition, measurement, environmental controls and global assessment)

---
# Recap
We start with Darcy's law. 

$$
q = -K \frac{dh}{dx}
$$

$$
K = \frac{k \rho g}{\mu}
$$

- $k$ is intrinsic permeability
- $\rho$ is density
- $\mu$ is dynamic viscosity

This $K$ is hydraulic conductivity, which thus depends both on the fluid and the soil properties. 

$$
h = \frac{v}{\rho g} + z = \psi + z = \text{pressure head} + \text{elevation head}
$$

>[!Warning]
>See slides

For unsaturated flow, it becomes a mass balance

$$
q_x = -K_x(\theta) \frac{\partial \psi(\theta)}{\partial x}
$$

$q_y$ is the same

$$
q_z = -K_z(\theta) \left( \frac{\partial \psi (\theta)}{\partial z} +1 \right)
$$

where $\theta$ is volumetric water content. $K$ usually strongly decreases when unsaturated

Combine Darcy's Law with mass balance equation, we find

$$
\begin{aligned}
\text{change of storage with time} = \text{mass inflow rate} - \text{mass outflow rate} \\
-S_s \frac{\partial h}{\partial t}  = 
\end{aligned}
$$

This results in Richard's equation, with flow dependent on volumetric water content. This is highly nonlinear, and therefore difficult to deal with. 

In modelling, we usually use the Van Genuchten equation which models the water retention curve. 