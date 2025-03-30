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
# 9.1 Introduction
In a conceptual experiment concerning a mobile bed composed of uniform sediment, a gradual increase of flow velocity results in movement of grains when the actual [[Shields Parameter|Shields stress]] $(\tau_*)$ exceeds a critical value ($\tau_{*c}$). In case of small differences between the actual and critical Shields stress, sediment will roll and slide along the bed. As the difference between the two becomes larger, sediment will begin to hop or saltate a few grain diameters above the bed. At some stage the uniform particles can remain almost permanently in suspension. The mode of sediment transport in which grains regularly contact the bed is named **bedload transport**, whereas **suspended load transport** concerns the situation in which lift and gravity forces acting on the grains nearly balance. In the present chapter the two basic transport modes are introduced. 

---
# 9.2 Bedload and suspended load layers
If and how the particles move an be expressed in terms of the relation between the actual shear stress ($\tau_b$) and the critical shear stress ($\tau_{cr}$). There are different ways to phrase the stage of sediment transport. Common dimensionless formulations include the transport stage paramater $T_*$:

$$
T_* = \frac{\tau_b}{\tau_{cr}}
$$

and the excess shear stress, $S$:

$$
S = \frac{\tau_b - \tau_{cr}}{\tau_{cr}}
$$

The following approximate transport thresholds apply:
- No motion: $T_* \lt 1$
- Rolling: $1 \lt T_* \lt (1.5 - 2)$
- Saltation: $2 \lt T_*$
- Suspension: $1 \lt T_*$ and $w_s \lt 2.5 u_*$

Exceeding the suspended load threshold has a second requirement stating that the shear velocity should exceed 2.5 times the fall velocity $w_s$. If sediment particles are too coarse to be readily suspended in the flow, they may be transported as grain flow or sheet flow under high energetic conditions. 

Provided that $T_* \gt 1$ and the shear velocity constraint is satisfied, the water column can be subdivided in a bedload layer and a suspended load layer. The bedload layer has a thickness $\delta_g$, which is approximately 2 to 5 times the grain size $D$. Within the bedload layer, the sediment concentration, $C_s$, can either be expressed as a mass concentration or the volumetric concentration. The bedload sediment flux, $q_{BL}$, is either a mass flux or volumetric flux.

The total bedload flux reads:

$$
q_{BL} = \int\limits_0^{\delta_B} c_s u_s \, \mathrm{d}z
$$

where $u_s$ is the sediment velocity. For suspended sediment $u_s$ is approximately equal to the current velocity, but bedload particles move slower than the surrounding fluid. The vertical variation of sediment concentration within the bedload is for many purposes not a subject of study. Therefore, the total bedload flux is often given by:

$$
q_{BL} = \lt c_s \gt_{BL} <u_s>_{BL} \delta_B
$$

where $<c_s>_{BL}$ and $<u_s>_{BL}$ are a representative concentration and velocity of the bedload layer (respectively).

The suspended load layer occupies the portion of the water column above the bedload layer. The suspended sediment flux $q_{SL}$ is then defined as in

$$
q_{SL} = \int\limits_{\delta_B}^a c_s u \, \mathrm{d}z
$$

The velocity of suspended load particles is often considered to be equal to the flow velocity.

---
# 9.3 Bedload transport
Bedload transport $q_{BL}$ can be assumed to depend upon five variables: sediment density $\rho_s$, water density $\rho$, bed shear stress $\tau_b$, grain size $D$ and the gravity ac