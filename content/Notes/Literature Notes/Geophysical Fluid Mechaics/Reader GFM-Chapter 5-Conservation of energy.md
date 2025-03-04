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
# 5.1 Conservation of energy
## 5.1.1 Types of energy
So far, we have derived equations that enable us to understand and represent the conservation of mass and momentum of the flow. An additional balance equation can be set up, which represents the conservation of energy.

The total energy is composed of three sorts of energy:
- **Kinetic energy**: The energy which a flow possesses by being in motion

$$
\rho \frac{u_i u_i}{2} \mathrm{d}V \tag{5.1}
$$

- **Potential energy**: The energy possessed by a parcel of air or water by its position relative to others

$$
\rho g h \mathrm{d}V \tag{5.2}
$$

- **Internal energy**: The energy in a system arising from the internal microscopic state of a fluid, such as chemical bonds

$$
\rho e \mathrm{d}V \tag{5.3}
$$

In geophysical flows, salinity and temperature vary, creating density differences. Both density differences and pressure differences drive the flow, which is constrained by the continuity equation. When following a particle in the flow, there is a constant exchange between the three forms of energy.

## 5.1.2 Derivation of conservation equation of energy
In this part, we derive a constant volume version of the first law of thermodynamics. This law states that the rate of change in energy of a constant mass system $E$ is caused by the net influx of heat $\tilde{q}$ minus the rate at which work is being done by the system $\hat{w}$:

$$
\frac{\mathrm{d}E}{\mathrm{d}t} = \frac{\mathrm{d}\tilde{q}}{\mathrm{d}t} - \frac{\mathrm{d}\hat{w}}{\mathrm{d}t} \tag{5.4}
$$

The energy of the system per unit mass is given by the sum of the three types of energy identified above (Equations 5.1 - 5.3), i.e.

$$
E = \frac{u_i u_i}{2} + gh + e \tag{5.5}
$$

We can derive the constant volume field approach equation for this quantity, which si given by