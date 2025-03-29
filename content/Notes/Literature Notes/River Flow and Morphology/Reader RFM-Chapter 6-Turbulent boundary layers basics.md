---
fileClass: Base, Literature Notes
title: 
Parents: ["[[River Flow and Morphology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow and Morphology]]"]
---
The present chapter deals with the basic concepts of turbulence and boundary layers. In the first part theory which was derived in the introduction course [[Hydraulics and Hydrometry]] is placed in a more general framework. The latter part introduces the basic properties used to describe the turbulent boundary layer, and the forces associated with turbulence.

# 6.1 Boundary layer concept by Prandtl
A boundary layer can be defined as the flow layer over a bounding surface of any kind, that extends up to the region where the flow is unaffected by the surface. In open channel flow, the turbulent boundary layer generally covers the entire water column. This means, for instance, that the type of bed material in a river affects the flow velocity near the surface. This is different in the ocean, where the boundary layer makes up only a small portion of the water column. 

Boundary layer flows can be characterised using dimensionless numbers, that proceed from a dimensionless analysis. A key dimensionless number is the [[Reynolds Number]], which can be interpreted as the ratio between the inertia forces and viscous forces acting on a fluid element. 

Figure 6.1 shows a classical example of a boundary layer, regarding the interaction between a flat plate parallel to the approaching velocity and the surrounding fluid. The flow causes a resultant **drag force** on the plate, depending on the Reynolds number. In the top panel, the Reynolds number is small and thus the viscous effects are relatively strong. The presence of the plate affects the upstream velocity ahead of the plate. For moderate Reynolds numbers as in the central panel, the region where the viscous effects are important is much smaller in all directions, except downstream. For higher Reynolds number flow as in the bottom panel, the viscous effects are appreciable only near the wall and downstream of it, which coincides with the wake region. 

>[!Important]
>Increase of the Reynolds number means a decrease in the thickness of the layer where viscosity is dominant, and the flow is laminar


![[Pasted image 20250329110436.png]]

Looking in more detail at the flow velocity structure within the boundary layer, it can be noticed that the velocity profile develops over two subregions (see Fig. 6.2). Up to some point, the boundary layer remains laminar. For laminar flow, mixing only occurs on a molecular scale, but the flow does not remain irrotational. The first section is called the laminar boundary layer. Further downstream, the boundary layer develops to become turbulent and gradually attains a constant thickness. It is noted that zooming into a turbulent boundary layer, close to the surface a viscous layer is maintained that is smaller than the viscous boundary layer at the leading edge of the plate. 

![[Pasted image 20250329110809.png]]

Within the turbulent boundary layer, irregular mixing of the fluid particles take place. The transition between the turbulent and laminar boundary layer is dependent on the Reynolds number. Different types of transitions occur in nature. At sufficiently high Reynolds numbers, a distinction can be made between:
- **Natural transition**: Infinitesimal disturbances of selected frequencies become unstable and grow as two-dimensional waves. During the growth of these so-called Tollmien-Schlichtin waves, spanwise distortions and three-dimensional, nonlinear interactions become relevant. Finally, the waves breakdown to turbulence. This is a natural transition
- **Bypass transition**: Transition proceeds so rapidly that the general processes associated with natural transition seem to be bypassed. This process is characterised by growth over time scales much shorter than the viscous scale of Tollmien-Schlichting waves.

>[!Info]
>Critical Reynolds numbers for the transition between laminar and turbulent flow are circumstantial, i.e. they depend on the specific hydraulic situation


The boundary concept described above breaks down if the flow separates. This may occur in case of a pressure drop in the flow direction. Consider, for instance, the widening part of a Venturi meter where the flow diverges. In that section, conservation of mass requires that flow velocity decreases in the flow direction, and the [[Bernoulli's Equation]] can be used to show that pressure must increase in the flow direction. Rather than a pressure gradient, the flow is forced by the convective acceleration term in the momentum balance. The adverse pressure gradient, together with a no-slip condition (zero velocity) at the wall, may result in a backflow which separates the boundary layer from the surface (see Fig. 6.4). Consequently, the effect of viscosity is transmitted into the interior of the flow, which exerts a **form drag** or **pressure drag** on the surface. A more detailed description of this phenomenon will be given at the end of this chapter, where the concepts of drag and lift are further introduced. 

![[Pasted image 20250329111451.png]]

In theory, the details of a viscous, incompressible flow past any object can be obtained by solving the governing Navier-Stokes equations and the equation describing conservation of mass for incompressible flow. Using boundary layer concepts introduced in the previous sections, Prandtl was able to impose certain approximations to simplify the governing equations. The following assumptions were made:
- High Reynolds numbers
- $\frac{\partial}{\partial x} \ll \frac{\partial}{\partial y}$ (streamwise gradients much smaller than cross-stream gradients)
- $p = p_e$ (pressure is that in the external flow)

Physically, the flow is primarily parallel to the plate and any fluid property is convected downstream much more quickly than it is diffused across the streamlines. Using these assumptions in an asymptotic analysis resulted in the following boundary-layer equations:

$$
\begin{aligned}
\rho \left(\overline{u} \frac{\partial \overline{u}}{\partial x} + \overline{v}\frac{\partial \overline{u}}{\partial y} \right) &= \rho u_e \frac{\mathrm{d}u_e}{\mathrm{d}x} + \frac{\partial \tau}{\partial y} \\
\frac{\partial \overline{u}}{\partial x} + \frac{\partial \overline{v}}{\partial y} &= 0
\end{aligned}
$$

These equations govern the gradual growth of the boundary layer sketched in Figure 6.2. The flow represents a balance between viscous and inertial effects, with pressure playing no role. For a flow field that satisfied the boundary layer equations, an event that happens downstream of a given location cannot affect what happens upstream of that point. The development of the boundary layer over a flat plate parallel to the flow, as sketched in Figure 6.2, is therefore independent of the length of the plate. In addition, the presence of the plate has no effect on the flow ahead of the plate. 

Based on a clever coordinate transform and change of variables, Blasius was able to reduce the boundary layer (partial differential) equations to ordinary differential equations that he was able to solve. Blasius' solution provides details of the velocity profile and wall shear stress in a laminar boundary layer that develops along a flat plate.

---
# 6.2 Turbulence and Reynolds decomposition
Turbulence is a type of fluid motion that is difficult to define. Crucial of a turbulent flow is that it is subject to semi-random, stochastic property changes. Turbulence refers to:
- A 3D, time-dependent, eddying motion with many scales, causing continuous mixing of fluid elements, often superposed on a simpler mean flow
- A solution of the Navier-Stokes equations
- A natural state at high Re; most environmental flows are fully turbulent. 
- An efficient mixer of momentum, energy and constituents
- A major source of energy loss, or, the conversion of kinetic energy into heat

The fundamental difference between laminar and turbulent flow is the semi-random behaviour of fluid particles. Turbulence-induced variations of a flow variable or constituent can be isolated by decomposing the flow variable, or constituent, into a mean and a fluctuating component:

$$
\begin{aligned}
u &= \overline{u} + u' \\
\phi &= \overline{\phi} + \phi'
\end{aligned}
$$

Herein, $\phi$ can be seen as a scalar like temperature or salinity. Averaging a product of fluctuating quantities yields an extra term representing the net effect of turbulent fluctuations:

$$
\begin{aligned}
\overline{u^2} &= \overline{u}^2 + \overline{u'^2} \\
\overline{u \phi} &= \overline{u}\overline{\phi} + \overline{u' \phi'}
\end{aligned}
$$

In these latter two equations, the first can be recognised as a variance and the latter as a covariance. Due to the effects of turbulent fluctuations, transport of momentum or a constituent like salinity is feasible in absence of a mean drift. Consider a simple shear flow, in which the only nonzero mean velocity component is $u$. Hence, $\overline{v} = 0$, taking $v$ as the vertical velocity component. The instantaneous momentum flux equals the mass flux $\rho u A$ times velocity. For the net horizontal flux, this boils down to:

$$
\overline{(\rho A u^2)} = \rho(\overline{u}^2 + \overline{u'^2})A
$$

and for the net vertical flux to

$$
\overline{(\rho A u v)} = \rho (\overline{u} \, \overline{v} + \overline{u' v'})A = \rho \overline{u'v'}A
$$

In the vertical direction, turbulent fluctuations thus cause transport of momentum in absence of mean drift. 

The effect of turbulence on the mean flow arises from the net transport of momentum by fluctuating velocities. As far as the mean flow is concerned this has the same effect as an additional force. This 'effective force' (per unit area) is called a [[Reynolds Stress]].

In a simple shear flow, for which $\overline{w} = 0$, the total effective shear stress reads:

$$
\tau = \underbrace{\mu \frac{\partial \overline{u}}{\partial y}}_{\text{viscous}} \, \underbrace{-\rho \overline{u' v'}}_{\text{turbulent}}
$$

In general, the turbulence contribution to the transport of momentum is substantially greater than the viscous contribution, except for a very thin inner layer nar the surface, where viscous forces dominate. In the subsequent chapter inner and associated outer layers will be parameterised. The effects of turbulence on mean flow patterns are widely varying, and often difficult to generalise. In case of bluff bodies (i.e. objects in water for which flow separation is likely to occur), it can be stated that turbulence causes a delay of flow separation and reduction of the pressure drag.

>[!Warning]
>Skipped the part on changing viscosities due to suspended sediment load and the generalisation of Reynolds stresses to be applicable to a general flow situation


In the examination of the Reynolds stress, Prandtl introduced a mixing length $l$, with the aim to relate the Reynolds stress to velocity shear. [[Prandtl's Mixing Length]] is defined as the distance in which a particle loses its excess momentum or gains its momentum deficit and assumed the mean velocity of its surroundings. Assuming that the changes of velocity $u'$ and $v'$ following from this particle motion are statistically equal, then it follows that $u' \approx -v' \approx l \, \mathrm{d}u / \mathrm{d}y$, and:

$$
\tau = -\rho \overline{u' v'} = \rho l^2 \left(\frac{\mathrm{d}\overline{u}}{\mathrm{d}\overline{y}} \right)^2
$$

in which the viscous contribution has been omitted. Close to the surface, Prandtl assumed that $l$ becomes dependent on the distance from the surface: $l = ky$. Thus assumption results in a logarithmic velocity profile, which will be derived in the next chapter.

---
# 6.3 Thickness definitions of the boundary layer
In the analysis of the boundary layer, three different boundary layer thicknesses are in use. To start with, the thickness of the boundary layer $\delta$ can be defined as the distance from the surface where the local velocity equals 99 percent of the external stream velocity ($u_e$):

$$
\delta = y(u=0.99u_e)
$$

The displacement thickness (see Figure 6.6)