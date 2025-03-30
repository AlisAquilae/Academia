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
Bedload transport $q_{BL}$ can be assumed to depend upon five variables: sediment density $\rho_s$, water density $\rho$, bed shear stress $\tau_b$, grain size $D$ and the gravity acceleration $g$. Choosing $\rho, D$ and $g$ as repeating variables, a dimensional analysis yields the following generalised transport formula:

$$
\phi \left(\frac{\rho_s - \rho}{\rho}; \frac{q_{BL}}{D^{3/2} g^{1/2}};\frac{\tau_b}{\rho g D} \right) = 0
$$

The relative density $\Delta = (\rho_s - \rho)/\rho$ is usually included in the shear stress term and in the sediment transport term. The shear stress term divided by $\Delta$ is recognised as the [[Shields Parameter|Shields stress]]. The sediment transport term can be combined with $\Delta$ to yield the Einstein bedload number $\Phi$, which is defined as follows:

$$
\Phi = \frac{q_{BL}}{\sqrt{\frac{\rho_s - \rho}{\rho}g D^3}}
$$

To quantify bedload transport, $\Phi$ is empirically related either directly with the Shields stress $\tau_*$ or with the excess of the Shields stress above a critical Shields stress ($\tau_{*c}$). We start to consider sediment transport in the absence of bed forms, i.e. plane bed transport. A functional relation is sought of the form:

$$
\Phi = f(\tau_*; \tau_{*c})
$$

## 9.3.1 Meyer-Peter and Müller equation
One of the most notorious bedload transport relations is that due to Meyer-Peter and Müller (MPM), which takes the form:

$$
\begin{array}{ll}
\Phi = 0 & \tau_* \lt 0.047 \\
\Phi = 8(\tau_* - 0.047)^{3/2} & \tau_* \gt 0.047
\end{array}
$$

The relation was derived using flume data pertaining to well-sorted seidment in the sand-gravel sizes $D$ between $0.03$ and $2.9$ cm. After re-analysis of the original data, Wong and Parker corrected the proportionality constant from $8$ to $4.93$ and the exponent from $1.5$ to $1.6$.

While the MPM relation is historically important and still finds application, it has limitations. The flume data used to define it correspond to the very high end of the transport events that normally occur during floods in alluvial gravel-bed streams ([[Bankfull Discharge]] conditions).

## 9.3.2 Einstein equation
Einstein followed a probabilistic philosophy, abandoning the concept of a critical shear stress. He tried to estimate sediment transport flux by accounting for the probability that any sediment particle within a population would by mobalised by the fluctuating flow field. An implicit relation is proposed of the form:

$$
\frac{43 \Phi}{1 + 43\Phi} = 1-\frac{1}{\sqrt{\pi}} \int\limits_{-(0.143/\tau_*)-2}^{+(0.143/\tau_*)-2} \, e^{-t} \, \mathrm{d}t
$$

The relation takes into account that small sediment grains hide within the pore space. For larger shear stresses, the Einstein formula approaches $\Phi \approx 8 \tau_*$. Apart from the absence of a threshold, Einstein's equation differs from many other bedload formulas in that the transport rate is not approximately proportional to the Shields stress raised to the power 1.5.

>[!Note]
>Some more examples are very briefly mentioned in the reader, which are all based on the two formulas described above


## 9.3.3 Bagnold equation
Rather than starting from a dimensional analysis, Bagnold's  approach was to estimate the forces required to move an entire later of the bed relative to underlying layers. When the Shields stress is large enough ($\tau_* \gt \tau_{*sheet}$) and the bedload layer devolves into a sliding layer of grains that can be several grains thick, sheet flow conditions are said to occur. In case of a negligible bed slope, the Coulomb force for this would be

$$
\begin{aligned}
F &= \tan\phi_s (\rho_s - \rho) g V_s \\
&= \tan\phi_s (\rho_s - \rho) g A c_s \delta_B
\end{aligned}
$$

where $\tan\phi_s$ is the coefficient of internal friction. Normalising by area ($A$), substitution of $F/A = \tau_b$, where $\tau_b$ is the bed shear stress, and incorporating a velocity term on each side of the equation gives (remember, $q_{BL} = c_s \delta_b u_s$):

$$
\tau_b u_s = \tan\phi_s(\rho_s - \rho) g \,q_{BL}
$$

To solve the equation for bedload transport, Bagnold assumes a hydraulically rough flow over a plane bed ($D/z_0 = 30$), so that the velocity at the height of the grain diameter is $u_s (z = D) \approx 8.5 u_\tau$ (see the Boundary layer chapters). He furthermore defined the efficiency factor $e_b$, to represent the ratio of the flow's capacity to do work to the amount of work done to move sediment. And with $\tau_b = \rho u_\tau^2$, Bagnold solves for $q_{BL}$:

$$
q_{BL} = \frac{8.5 e_b \rho u^3_\tau}{(\rho_s)}
$$