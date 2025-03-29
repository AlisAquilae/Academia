---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 7.1 Introduction
In the first chapter basic concepts of turbulent flow processes were introduced. In the present chapter, the structure of the velocity profile within a boundary layer is mathematically described, based on these basic concepts. In the setup of a mathematical model for the vertical velocity profile in the boundary layer, functional relations will be derived on the basis of dimensional analysis. The dimensionless treatment renders the analysis scale-independent. Up to the last section in this chapter, the presented theory is not particularly focussed on environmental flows, and serves as a general basis for boundary flows of any kind. In the final section, the relation with open channel flows will become clear. Throughout this chapter the surface is referred to as the wall, which is inconsistent, but familiarizes the reader with the diverse terminology one may encounter in boundary
layer theory.

---
# 7.2 Wall and boundary layer units
Figure 6.2 showed the development of a turbulent boundary layer in case of a fluid with a free stream, or external velocity $u_e$ that enters the region above a flat plate parallel to the flow. Outside the boundary layer the free-stream velocity holds. The fully developed turbulent boundary layer, composed of a small laminar sublayer near the surface and a much larger turbulent layer, is the subject of study herein. 

At some distance from the surface, viscous stresses are negligibly small compared with the Reynolds stresses. In the laminar sublayer close to the wall, however, viscous stresses dominate. In this region, the most important scaling variables are the [[Kinematic Viscosity]] $\nu$, the wall shear stress $\tau_w$ and the density of the fluid $\rho$. From these variables, characteristic velocity and length scales can be formed:

friction velocity:

$$
u_\tau \equiv \sqrt{\tau_w / \rho}
$$

viscous length scale:

$$
\delta_v \equiv \frac{\nu}{u_\tau}
$$

Note that the Reynolds number based on these scales is unity. It is stressed that the friction velocity $u_\tau$, also often denoted by $u_*$, has no direct physical meaning and is often encountered in sediment transport formulae. Non-dimensional velocity $u^+$ and height $y^+$ in wall units can be formed using the velocity and length scales:

$$
\begin{aligned}
u^+ &\equiv \frac{u}{u_\tau} \\
y^+ &\equiv \frac{y}{\delta_\nu} \\
&\equiv \frac{y u_\tau}{\nu}
\end{aligned}
$$

where $y^+$ can be considered as a local [[reynolds]]