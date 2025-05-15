---
fileClass: Base, Lecture Notes
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Introduction
Today: Open water flow
- St-Venant equations
- Derivations of different steady flows
- Open water-groundwater coupling

Open water is the part that can most directly be managed and measured. We therefore have more empirical equations

We typically divide the system into multiple parts. We heer deal with
- Hyporheic exchange
- Gaining and losing streams

To couple OW and GR, we need water level for both (for head differences), the flux/discharge, and the velocity of the flux/discharge

We generally take the groundwater as the 'master' at the regional scale. We take the St-Venant equations for classical open water modelling, and further simplify this to allow for the coupling. The OW is 'inserted' in the GW system as an additional package. 

We use $a$ as water level, $v$ as velocity, and $Q$ as discharge. 

We look at gradually-varied flow (i.e. long-waves), and only look at the large-scale effects of weirs. 

Classical assumptions
1. Cross-section averaged properties (e.g. velocity averaged)
2. Hydrostatic pressure
3. Uniform velocity

We find the St-Venant equations: a mass balance and a momentum balance. 

>[!Note]
>See notes of RFM on the derivation of the St-Venant equations


We have different variants
- Dynamic: change over time and space
- Steady: no change over time
- Uniform: No change over time
- Equilibrium: no change over time and space

Equilibrium: $I=0$, pure equilibrium. We find $S_o - S_f = 0$

We find

$$
Q_e = \frac{1}{n} \sqrt{S_o} \, A \, R^{2/3}
$$

However, we have inflow and outflow. Still, we look at different blocks which we consider to be in equilibrium. There's no backwater curve, as we are looking at equilibrium and no influence of one block on the other.

For steady flow

>[!Warning]
>See slides for the flromulas

Steady flow without side inflow

$$
\frac{\partial a}{\partial x} = \frac{S_o - S_f}{1 - \text{Fr}^2}
$$


Steady flow with side inflow

$$
i \neq 0
$$

$$
\frac{\partial a}{\partial s} = \frac{S_o - S_f - S_i}{1 - \text{Fr}^2}
$$

Lateral inflow slope is

$$
S_i = 2\frac{Q}{gA^2}I
$$

>[!Warning]
>See notes


## Open water geometry
