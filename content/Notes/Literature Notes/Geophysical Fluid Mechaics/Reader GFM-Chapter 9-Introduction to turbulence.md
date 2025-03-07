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
# 9.1 The origin and nature of turbulence
Turbulence is the phenomenon that occurs as a result of inherent instability in fluid flows. In water and air flows, these instabilities can be produced by density (thermal) differences or velocity (mechanical) differences. 

Osborne Reynolds (1842-1912) was the first to study this instability phenomenon and provide a quantitative mathematical description of the flow to either amplify or damp disturbances in the flow. Disturbances are always present in fluid flows and result from small and rapid perturbations. For instance, turbulent motions can be present at the inlet, near a wall, or with air masses under phase changes. Here, the laminar streamlines are disturbed by obstacles creating disturbances.

The crucial question when considering turbulence is whether such initial disturbances will grow or decay. Relevant in our course is that turbulence is a key process in the transport and mixing of water and air. As such, it is impossible to describe these flows in any detail without accounting for their turbulent nature. 

There are different processes contributing to the growth of turbulent instability in the flow. Reynolds' experiments showed that the relation between viscous forces and inertial (advective terms in Equation 3.26) forces play a crucial role. Viscosity tends to dampen disturbances, while inertial forces amplify them. When viscosity is dominant (low $Re$ number) the flow will be laminar, while when inertia dominates over viscosity (high $Re$ number) the flow becomes turbulent.

Most geophysical flows are turbulent, owing to the large scale of the flows involved characterised by wind and thermal instabilities, and the low viscosity of water and air. The turbulent flow can be characterised by their very large [[Reynolds Number]]. For instance, for clear water at 20$\degree$ C and 1 atm, and with typical values for kinematic viscosity, one obtains very high Reynolds numbers. This indicates that normally the flow has a turbulent nature because the inertial forces are much larger than the viscous forces. 

---
# 9.2 Reynolds decomposition: towards a statistical description of turbulence

Because of the chaotic behaviour of turbulence, it is almost impossible to quantify turbulence-induced variations of a flow variable at each instant in time and at each position. In other words, velocity, pressure, and temperature remain unpredictable. However, large-scale variations of these variables are superimposed on the more coherent, larger, or longer-lived flow structures. The statistics of these variations are often temporally steady and spatially constant. Therefore, in geophysical flows, we describe and represent turbulence using a statistical description based on the following variables: mean (1st-order), (co-)variances (2nd-order) and higher-order (third-order skewness) variables.

To this end, the flow characteristics are treated using the so-called Reynolds decomposition. This descomposition consists of decomposing the flow variable (velocity, temperature, sediment, ...) into a mean component and a fluctuating component:

$$
\begin{aligned}
\mu &= \bar{\mu} + u'\\
\phi &= \bar{\phi} + \phi'
\end{aligned} \tag{9.1}
$$

Note that we made this decomposition in only one direction (for the sake of simplicity in the equations), but it also applies to the three directions of wind. Moreover, $\phi$ is a generic scalar like tempera