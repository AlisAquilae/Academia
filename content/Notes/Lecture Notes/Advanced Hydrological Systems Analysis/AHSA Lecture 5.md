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

You can always add sources and sinks to the Richard's equation. 

To summarise
- Unsaturated flow
  - $\theta$ variable, $\psi$ negative
  - $q_x$ and $q_y$ negligible
  - $K(\psi)$
- Saturated zone
  - $\theta$ constant
  - $\psi + z$ constant, i.e. $q_z = 0$ (Dupuit)
  - $K$ independent of $\psi$

How to couple all of this together? Take 1 POV and concentrate on essentials from that POV. Here: saturated groundwater
- Unsaturated zone: too dynamic
- Need to respect mass balance
- Effective porosity, mean soil moisture
- Recharge goes through the unsaturated zone (intermediate between atmosphere and groundwater)

We don't use both, because UZ is probably too dynamic, different spatial and temporal scales are of interest, it is computationally expensive, and seldom all aspects are interesting. 

---
# GW Recharge
This part focuses on how important it is to estimate recharge. 

GW recharge is the water flux that replenishes an aquifer. Equivalent terms: net infiltration. 

Why do we care? In terms of regional groundwater management, we look at sustainable / safe yield. This is the rate at which groundwater can withdrawn without producing undesirable effects. Recharge refills groundwater reservoir, and you shouldn't be taking out more than comes in.  Moreover, safe yield should be less than recharge, since groundwater is also used for other processes (e.g. as baseflow to rivers, as evapotranspiration, etc.)

We can quantify recharge to some extent, but what is then the safe yield? How much water do all our ecosystems need? This is not easy to determine. 
