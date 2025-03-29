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

