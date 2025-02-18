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
# 1. Introduction
Geophysical Fluid Mechanics addresses the mechanics of geophysical flows. Various types of flow occur on earth, including the flows of lava, water and air. This first chapter sets out to establish the difference between a fluid and a solid, and introduce the basic properties of a fluid. The second part of this chapter explains the tensor notation used in the mathematical description of the balance equations that govern the geophysical flow in the remainder of this reader.

## 1.2 Properties of Fluids
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

A second key property of a fluid is [[Fluid Density]], which is equivalent to [[Specific Mass]] or mass per unit of volume. 