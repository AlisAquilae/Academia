---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: Done
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

$$
\rho \frac{\partial}{\partial t} \left( \frac{u_i u_i}{2} + e \right) + \rho u_i \left( \frac{u_i u_i}{2} + e \right) = - \frac{\partial q_i}{\partial x_i} - \frac{\partial}{\partial x_i} (\tau_{ij} u_j + p u_i) - \rho g u_i \frac{\partial h}{\partial x_i} \tag{5.6}
$$

where $q_i$ is the heat flux vector. Using the concept of the material derivative (see [[Reader GFM-Chapter 2-Kinematics|Chapter 2]]), the equation of energy can be written as:

$$
\rho \frac{D}{Dt} \left( \frac{u_i u_i}{2} + e \right) = - \frac{\partial q_i}{\partial x_i} - \frac{\partial}{\partial x_i} (pu_i) - \rho gu_i \frac{\partial h}{\partial x_i} \tag{5.7}
$$

Or in words

![[Pasted image 20250304105813.png]]

- The rate of heat transfer appears with a negative sign. This is because the divergence represents the outflow of heat from the system, but the energy will increase on the inflow of heat
- Both the work by viscous forces and pressure forces have a negative sign since the work as stated here is the work done by the system on the surroundings, which results in a loss of energy
- The work done by gravity forces is included here on the right hand side but originates from the internal kinetic energy of the system. The term only has value of there is motion ($u_i$) with a component parallel to gravity ($\partial h / \partial x_i$). This is the case if the fluid flows to a higher elevation, which will result in a loss of kinetic or internal energy

---
# 5.2 Mechanical versus thermal energy (==skipped==)


---
# 5.3 Perfect fluids: Bernoulli's equation
Perfect fluids have zero viscosity, which implies that there are neither shear stresses in the flow, nor is there heat conduction. Although perfect fluids do not exist in reality, the concept of a perfect fluid has many practical applications in low-viscosity fluids.

The conservation law for energy (Eq. 5.7) can be simplified assuming there is
1. Stationary flow: $\partial / \partial t = 0$
2. No heat transfer: $\partial q_i / \partial x_i = 0$
3. Inviscid flow: i.e. stress is negligible: $\tau_{ij} = 0$

Under those assumptions, we have

$$
\rho u_i \frac{\partial}{\partial x_i} \left(\frac{u_i u_i}{2} + 2 \right) = - \frac{\partial}{\partial x_i} (pu_i) - \rho gu_i \frac{\partial h}{\partial x_i} \tag{5.8}
$$

As a last step, we assume incompressible fluid, which means no energy can be transferred to internal energy (since we have no gradient in heat flux, no viscous action, and no compression of the fluid), which will therefore be constant:

$$
u_i \overbrace{\frac{\partial}{\partial x_i} \underbrace{\left( \frac{u_i u_i}{2} + \frac{p}{\rho} + gh \right)}_{\text{Total energy (scalar)}}}^{\text{Gradient in energy (vector)}} = 0 \tag{5.9}
$$

The above is a dot product of velocity with the gradient of energy and that has to be zero. In other words, the flow is orthogonoal to the gradient of energy, and therefore parallel to constant energy lines. So along a streamline, the energy is constant, which yields [[Bernoulli's Equation]]:

$$
\frac{u_i u_i}{2} + \frac{p}{\rho} + gh = C \; : \; \text{constant along a streamline} \tag{5.10}
$$

Although the pressure term in the equation stems from the work done by the system, pressure is often referred to as a form of energy of a fluid particle. Bernoulli's equation then states that as far as the effects of viscosity can be neglected, the sum of kinetic energy, pressure energy and potential energy remains constant along a streamline. 