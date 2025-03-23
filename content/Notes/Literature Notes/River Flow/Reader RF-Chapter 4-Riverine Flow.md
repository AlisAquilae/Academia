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
# 4.1 Introduction
In the preceding discussions, Bernoulli's Law was presented as a foundational principle in fluid dynamics, focusing on the relationship between potential, kinetic and pressure energy, and how these forms of energy are conserved along a streamline. This conservation, however, assumes an idealised scenario where no energy is lost, and the total energy remains constant throughout the flow. While this serves as a useful first-order approximation, it does not fully capture the complexities of real-world fluid behaviour. In practical situations, energy is inevitably lost due to friction, primarily manifesting as heat. 

In 1845, James Joule was the first to quantitatively demonstrate the conversion of mechanical energy into heat through friction. His work marked a pivotal step in understanding the thermodynamics of energy dissipation in fluids. In real fluid flows, energy losses are caused by friction at both the walls of a conduit and within the fluid itself, due to internal friction resulting from viscosity. While the temperature increase due to this friction is miniscule and dissipates rapidly into the surroundings, the effect on energy transfer is significant enough to warrant consideration in fluid dynamics models. 

This chapter will introduce friction as an energy loss mechanism and explore how to pragmatically account for it in fluid models. By incorporating energy losses into Bernoulli's equation, we move closer to realistic representations of flow, particularly in practical applications like pipe systems and open channels. Topics covered will include the Reynolds number and its role in distinguishing laminar from turbulent flow, adjustments to Bernoulli's law for both gradual and localised energy losses, and common empirical formulas like Manning's and Chezy's equations for open channel flow. Finally, we will discuss how these concepts relate to characterising flow conditions, including equilibrium, critical, subcritical, and supercritical flows. 

---
# 4.2 Friction and energy losses
## 4.2.1 The Reynolds number: Laminar vs. Turbulent flow
One way in which friction shows itself in a measurable way is in the velocity profile. It is important to distinguish two flow regimes: laminar and turbulent. Reynolds demonstrated this in his famous ink-experiment. He introduced a thin line of ink in a tube containing a flowing fluid. He observed that two situations can occur:
- The ink remained concentrated in a thin line. This situation is called [[Laminar Flow]].
- The ink spread all over the tube. This is called [[Turbulent Flow]]. One can see that this spreading is due to whirls in the flow. These whirls have all sizes and shaped, are dynamic and characteristic for turbulence.

Moreover, Reynolds found that for low velocities, flow was always laminar, and that for high velocities, flow was always turbulent, and that the transition between these two occurred at about the same velocity. This transition depends on the kind of fluid. By introducing a dimensionless number named after him, Reynolds created on equation for all fluids:

$$
\text{Re} = \frac{\rho}{\mu} \, \overline{v} \, D
$$

where
- $\rho$ stands for the density of the fluid
- $\mu$ stands for its [[Fluid Viscosity|Viscosity]]
- $D$ stands for the diameter of the tube
- $\overline{v}$ stands for the average flow velocity of the fluid

>[!Important]
>In general,
>- $\text{Re} \lt 2000 = \text{Laminar}$
>- $\text{Re} \gt 4000 = \text{Turbulent}$

Friction in laminar situations is different from friction in turbulent situations. The difference between laminar and turbulent flow can be made visible by following floaters (left panels of Figure 4.4). The positions of the floaters at regular time intervals are marked by dots. The positions of each floater are connected by smooth lines. The (average) streamlines are plotted in gray. In both cases, the velocities decrease near the wall (bottom in the illustration). In the turbulent case the floaters are mixing in the vertical due to the whirls in the flow. In the laminar case floaters tend stay at the same vertical distance to the wall

>[!Missing]
>Insert Figure 4.4


In many practical situations, the velocity profile is a combination of the profiles in Figure 4.4:
- A (usually small) laminar layer near the wall (the so-called [[Boundary Layer]])
- A logarithmic turbulent velocity profile beyond the boundary layer

The following equation is widely used to describe this velocity profile:

$$
\frac{v(y)}{v_{\tau}} = \left\{ \begin{array}{ll} \frac{1}{k} \ln \left(\frac{y \, v_{\tau} \, \rho}{\mu} \right) + C \; \; \text{ if } y \gt \delta \\
\frac{v_{\tau} \, \rho}{\mu} \, y
\end{array} \right. \tag{4.2}
$$

where
- $v(y)$ is the magnitude of the flow velocity at distance $y$ from the wall
- $v_{\tau}$ is the friction velocity or shear velocity
- $k$ is the [[Von Karman Constant]]
- $\rho$ and $\mu$ are the density and viscosity, respectively. The fraction $\mu / \rho$ is called the [[Kinematic Viscosity]]
- $\delta$ is the thickness of the laminar layer
- $C$ is a constant chosen such that both equations are equal for $y = \delta$

## 4.1.2 Adjusting Bernoulli's Law for energy losses (in pipes)
The internal friction described above leads to energy losses. In our consideration so far, Bernoulli's law expresses conservation of energy for a streamline. As discussed in the previous sections, however, energy is not conserved, because a significant amount of energy gets lost. So the Bernoulli's equation has to be adjusted for these losses. 

However, the previous sections showed that the energy losses can only be understood from the total flow domain and the complete velocity profile. Energy losses cannot be evaluated on an isolated streamline: friction shows itself in differences between velocities on neighbouring streamlines (see e.g. Fig. 4.4).

Therefore the following restrictive assumptions will be made
1. Only tubes with circular cross-sections will be discussed. In the following sections generalisation to the open water case will be treated.
2. Only the streamline in the center of the cross-section will be considered
3. The velocity of the middle streamline will be considered to be close to the mean velocity

>[!Example]
>Consider a flow through a tube while accounting for energy losses. Energy is lost in the flow direction, which can be seen in the slope of the total energy line (which was previously horizontal), sloping downward in the flow direction. As in this example the tube has a constant diameter, one can conclude from the law of conservation of mass that the velocity over the streamlines is constant and that the hydraulic gradient line is parallel to the total energy line. As a consequence, including the energy losses leads in this case ti changes in pressure.


>[!Warning]