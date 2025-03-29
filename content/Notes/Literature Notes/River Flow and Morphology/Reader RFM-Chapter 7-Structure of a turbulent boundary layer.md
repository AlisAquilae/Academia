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
\left[\frac{\mathrm{d}u^+}{\mathrm{d}y^+} \right]_{\text{y=0}} = 1
$$

which, on integration, yields:

$$
y^+ = u^+ \tag{7.1}
$$

The portion of the inner layer where this equation applies is the laminar sublayer, which extends approximately to $y^+ \lt 5$. The remainder of the inner layer, which extends approximately to $\eta \lt 0.1$, is yet to be defined in Section 7.5.

---
# 7.4 The overlap layer
In Section 7.2, two unknown functions were introduced that describe velocity variation in the inner and outer layer, respectively. In between the inner and outer layer, an overlap is supposed to exist, where both the constraints for the inner and outer layer are satisfied. This implies that across the overlap layer the functions of the inner and outer layer are both valid and must match to guarantee a smooth overlap:

$$
u^+ = f_w(y^+) \;\; \text{ and } \; \; u^+_e - u^+ = f_o(\eta)
$$

Using the definition of the friction Reynolds number, it can be shown that $y^+ = \eta \delta^+$. Hence, the dimensionless velocity of the free flow as a function of $\delta^+$ is the sum of the function $f_o$ and $f_w$ and reads:

$$
u_e^+ = f_o(\eta) + f_w(\eta \delta^+)
$$

A solution to this function, which defines the overlap region, can be found by differentiation with respect to $\delta^+$:

$$
u+e^+ (\delta^+) = 0 + \eta f'_w(\eta \delta^+)
$$

and subsequently with respect to $\eta$

$$
\begin{aligned}
0 &= f'_w(\eta \delta^+) + \eta \delta^+ f''_w(\eta \delta^+) \\
&= f'_w (y^+) + y^+ f''_w(y^+) \\
&= \frac{\mathrm{d}}{\mathrm{d}y^+} \left( y^+ \frac{\mathrm{d}f_w}{\mathrm{d}y^+} \right)
\end{aligned}
$$

using that $y^+ = \eta \delta^+$. 

When integrated with respect to $y^+$, this gives:

$$
y^+ \frac{\mathrm{d}f_w}{\mathrm{d}y^+} = \text{constant}
$$

The constant that emerges is usually written as $1 / \kappa$, where $\kappa$ ($\approx 0.41$) is the [[Von Karman Constant]]:

$$
\frac{\mathrm{d}f_w}{\mathrm{d}y^+} = \frac{1}{\kappa y^+}
$$

Integrating once more with respect to $y^+$ gives the **log-law velocity profile**

$$
f_w = u^+ = \frac{1}{\kappa} \ln(y^+) + B
$$

A typical value for $B$ is 5.6.

The overlap, or log-law region, is confined to the region between $y^+ \gt 30$ and $\eta \lt 0.3$

An alternative derivation was given by Prandtl, starting with his [[Prandtl's Mixing Length|Mixing length]] concept:

$$
\tau = \rho l^2 \left(\frac{\mathrm{d}u}{\mathrm{d}y} \right)^2
$$


He assumed that close to the surface, $l$ becomes linearly dependent on the distance from the surface $l = \kappa y$. The shear stress at the subsurface $\tau_0$ then reads as:

$$
\begin{aligned}
\tau_0 &= \rho \kappa^2 y^2 \left(\frac{\mathrm{d}u}{\mathrm{d}y} \right)^2 \\
\text{or } \; \mathrm{d}u &= \frac{u_\tau}{\kappa y} \mathrm{d}y
\end{aligned}
$$

on integration, this yields:

$$
\frac{u}{u_e} = \frac{1}{\kappa} \ln(y) + C
$$

Values of the integration constant were experimentally determined in the form

$$
C = 5.56 - \frac{1}{\kappa} \ln \frac{\nu}{u_\tau}
$$

Combining the previous two equations and substituting for the nondimensional variables $u^+$ and $y^+$ then results in

$$
u^+ = \frac{1}{\kappa} \ln(y^+) + B \tag{7.2}
$$

The earlier derivation via the dimensional analysis confirms Prandtl's theory and hypotheses for a turbulent boundary layer. Vice versa, Prandtl's findings, which were supported by empirical observations, show that the overlap layer exists and may cover a large part of the boundary layer.

---
# 7.5 The buffer layer, Van Driest damping function

The velocity profile in the boundary layer is now determined by equation 7.1 in the viscous sublayer, which roughly applies for $y^+ \lt 5$, and by equation 7.2 in the log-law layer, which roughly stretches from $y^+ \gt 30$ to $\eta \lt 0.3$. Hence, additional velocity profile information is missing in the so-called **buffer layer** between $5 \lt y^+ \lt 30$.

The empirical solution to this hiatus was due to Van Driest in the context of the mixing length theory.

The total shear stress reads as:

$$
\begin{aligned}
\tau/\rho &= \nu \frac{\mathrm{d}u}{\mathrm{d}y} + l^2 \left(\frac{\mathrm{d}u}{\mathrm{d}y} \right)^2 \\
\text{or, equivalently: } \; \tau/\tau_w &= \frac{\mathrm{d}u^+}{\mathrm{d}y^+} + \left(l^+ \frac{\mathrm{d}u^+}{\mathrm{d}y^+}\right)^2
\end{aligned}
$$

The normalised mixing length is defined as $l^+ \equiv l / \delta_\nu$. This is a quadratic equation for $\mathrm{d}u^+ / \mathrm{d}y^+$, which has the solution

$$
\frac{\mathrm{d}u^+}{\mathrm{d}y^+} = \frac{2\tau / \tau_w}{1 + \sqrt{1 + 4(\tau / \tau_w)l^{+2}}}
$$

In the inner layer, the ratio $\tau / \tau_w$ is essentially unity, so that the law of the wall is obtained in terms of the mixing length as the integral of the equation above:

$$
\begin{aligned}
u^+ &= f_w(y^+)\\
&= \int_0^{y^+} \frac{2 \mathrm{d}y^+}{1 + \sqrt{1 + 4l^{+2}}}
\end{aligned} \tag{7.3}
$$

Equation 7.3 gives the velocity profile through the inner layer, provided that the vertical structure of $l^+$ is known. In the log-law region, $l^+$ relates to $y^+$ as in $l^+ = \kappa y^+$. In the viscous sublayer, turbulent shear stresses are absent, which can be captured by the constraint $\mathrm{d}l^+ / \mathrm{d}y^+ = 0$ for $y^+ = 0$. Hence, the specification $l^+ = \kappa y^+$ needs to be reduced, or damped, near the wall. Van Driest proposed the following specification:

$$
l^+ = \kappa y^+ \left[1-e^{-y^+ / A^+} \right] \tag{7.4}
$$

where $A^+$ is a constant ascribed the value $A^+ = 26$. The term in the square brackets is the [[Van Driest Damping Function]].

Equations 7.3 and 7.4 together form the [[Law of the Wall]]. From experiments it was found that the law of the wall provides an excellent representation of the data. 

---
# 7.6 The outer layer
For very large values of $y^+$ the log-law does not represent the exact velocity profile Particularly in non-equilibrium boundary layers with a pressure gradient, the velocity profile deviates slightly from the log-law in the outer layer. Coles observed in 1956 that the deviation of the log-law had a wake-like shape relative to the free stream:

$$
u = u_{\text{log-law}} + \Delta u f(\eta)
$$

The wake function $f$ is assumed to be a universal S-shaped function defined to satisfy the normalisation conditions $f(0) = 0$ and $f(1) = 0$. The validity of this function was experimentally confirmed. Popular forms are:

$$
\begin{aligned}
f(\eta) &= \sin^2 \left(\frac{\pi}{2}\eta \right) \\
&= 3\eta^2 - 2\eta^3
\end{aligned}
$$

Those ingredients have lead to the formulation of the [[Coles Law of the Wake]]:

$$
u^+ = \frac{1}{\kappa} \ln(y^+) + B + \frac{2\Pi}{\kappa}f(\eta)
$$

In general, Cole's wake strength parameter $\Pi$ is a function of pressure gradient. The law of the wake allows for relatively steep velocity profiles. 

The different subdivisions of the boundary layer defined in the previous sections are summarised in Figure 7.2

![[Pasted image 20250329153831.png]]

---
# 7.7 Roughness effects
The analysis above applies for hydraulically smooth wall flows, which are actually uncommon in rivers and streams. In general, environmental flows are hydraulically rough. Protrusions as small as sand particles influence the mean velocity profile, as the transfer of momentum to the wall is dominated by pressure drag or the roughness elements, rather than skin friction drag. In the transitional regime, both viscous and roughness effects operate. 

The normative size of the roughness elements $k_s$ can be made dimensionless as in

$$
k_s^+ = \frac{u_\tau k_s}{\nu}
$$

A dimensional analysis now includes an additional roughness variable, leading the following adapted velocity profile for the overlap region:

$$
\begin{aligned}
u^+ &= \frac{1}{\kappa} \ln(y^+) + \tilde{B} \; \; \text{ , where} \\
\tilde{B} &= \left\{ \begin{array}{ll} B & (k_s^+ \to 0; \text{hydraulically smooth}) \\
B_k - \frac{1}{\kappa} \ln(k^+_s) & (k^+_s \to \infty; \text{hydraulically rough}) \end{array} \right.
\end{aligned}
$$

where $B = 5.6$ as in equation 7.2 and $B_k$ takes a value of 8.5. Elaborate all-encompassing interpolation formulas are available for $\tilde{B}$, to determine its value under transitional roughness. In practice, the following mean velocity profile is generally used, with $z$ denoting the vertical coordinate:

$$
u = \frac{u_\tau}{\kappa} \ln \left(\frac{z}{z_0} \right)
$$

where $z_0$ is called the roughness length. 