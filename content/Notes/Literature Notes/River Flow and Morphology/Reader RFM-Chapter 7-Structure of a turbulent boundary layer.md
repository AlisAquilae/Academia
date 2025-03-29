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

where $y^+$ can be considered as a local [[Reynolds Number]], measuring the relative importance of viscous and turbulent transport dependent of the distances to the wall. 

At large $y^+$ the direct effect of viscosity on momentum transport is small. In this region differences in height scale $\eta$ are important, which is the lateral coordinate $y$ normalised by the boundary layer depth $\delta$:

$$
\eta = \frac{y}{\delta}
$$

By combining the different parameters, one more dimensionless number can be obtained, which is referred to as the **friction Reynolds number**

$$
\begin{aligned}
\text{Re}_\tau &= \delta^+ \\
&= \frac{u_\tau \delta}{\nu}
\end{aligned}
$$

The general, scale-independent aspects of boundary layers can be analysed using the aforementioned dimensionless parameters.

In the turbulent part of the boundary layer, the flow is completely specified by $u, y, \rho, \nu, \delta$ and $u_\tau$. With those 6 variables and 3 independent dimensions, dimensional analysis yields a functional relation between 3 dimensionless groups. These groups are conveniantly taken as:

$$
u^+ = f(y^+, \eta)
$$

Close to the wall ($\eta \ll 1$) the velocity $u$ does not scale on $\delta$. The region where this applied is defined as the **inner layer**, which can be subdivided in a turbulent and laminar part (the latter of which is the viscous sublayer). The independece of $\delta$ reduces the number of variables from 6 to 5 and leads to the [[Law of the Wall]]:

$$
u^+ = f_w (y^+)
$$

For large values of the local Reynolds number ($y^+ \gg 1$), in the so-called **outer layer**, the effect of viscosity on the 'velocity deficit' $u_e - u$ is negligible. Dimensional analysis then yields:

$$
\begin{aligned}
\frac{u_e - u}{u_\tau} &= u_e^+ - u^+ \\
&= f_o(\eta)
\end{aligned}
$$

In between the inner and outer layer an intermediate layer may exist, where both viscosity and boundary layer thickness influence the velocity profile. In the next three sections the velocity distribution for the inner, the intermediate and the outer layer are described in more detail. 

---
# 7.3 The inner layer
In the inner layer, the region very close to the wall, the shear stress is entirely viscous. Within this region it is expected that the behaviour is universal, i.e. independent of the external flow and Reynolds number. Discarding the turbulent stress part, the total shear stress reduces to:

$$
\tau = \rho \nu \frac{\mathrm{d}u}{\mathrm{d}y}
$$

Combined with the no-slip condition at the wall, this implies

>[!Warning]
>Skipped the derivation


$$
\left[\frac{\mathrm{d}u^+}{\mathrm{d}y^+} \right]
$$

