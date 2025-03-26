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

## 4.2.2 Adjusting Bernoulli's Law for energy losses (in pipes)
The internal friction described above leads to energy losses. In our consideration so far, Bernoulli's law expresses conservation of energy for a streamline. As discussed in the previous sections, however, energy is not conserved, because a significant amount of energy gets lost. So the Bernoulli's equation has to be adjusted for these losses. 

However, the previous sections showed that the energy losses can only be understood from the total flow domain and the complete velocity profile. Energy losses cannot be evaluated on an isolated streamline: friction shows itself in differences between velocities on neighbouring streamlines (see e.g. Fig. 4.4).

Therefore the following restrictive assumptions will be made
1. Only tubes with circular cross-sections will be discussed. In the following sections generalisation to the open water case will be treated.
2. Only the streamline in the center of the cross-section will be considered
3. The velocity of the middle streamline will be considered to be close to the mean velocity

>[!Example]
>Consider a flow through a tube while accounting for energy losses. Energy is lost in the flow direction, which can be seen in the slope of the total energy line (which was previously horizontal), sloping downward in the flow direction. As in this example the tube has a constant diameter, one can conclude from the law of conservation of mass that the velocity over the streamlines is constant and that the hydraulic gradient line is parallel to the total energy line. As a consequence, including the energy losses leads in this case ti changes in pressure.


>[!Warning]
>There are more examples in the book, relating to the cases for widening of tubes. I skipped these for now


Generalising the examples leads to a general equation for [[Bernoulli's Law]] with losses: for points on the same streamline with flow from point 1 to point 2,

$$
z_1 + \frac{v_1^2}{2g} + \frac{P_1}{\rho \, g} = z_2 + \frac{v_2^2}{2g} + \frac{P_2}{\rho \, g} + \sum\limits_i \Delta E_i \tag{4.3}
$$

The $\Delta E_i$ stands for the sum of the different energy loss terms that occur between points 1 and 2. 

In the following, different types of losses will be calculated. We differentiate between gradual losses (so due to the flow itself along the entire flow domain) and local losses (due to local causes, e.g. changes in cross-sections). Such equations cannot be derived from purely physical principles, as this would require solving the full turbulent flow. However, there are effective equations that solve this problem in a pragmatic sense.

### 4.2.2.1 Gradual energy losses
One of the oldest and most famous equations for energy losses (gradual losses in this case) is the [[Darcy-Weisbach Equation]] for the gradual loss in energy height

$$
\Delta E_{DW} = \frac{\lambda \, L \, v^2}{2 \, g \, D} \tag{4.4}
$$

Although this equation has been justified by experiments and not theory, the terms in it can be understood intuitively:
- $L$ stands for the length of the tube. Longer tubes generate more friction.
- $D$ stands for the diameter of the tube. Most friction and turbulence is caused by the wall of the tube. For a tube with a circular cross-section, the ratio between perimeter and area is given by $\frac{4}{D}$. The larger the diameter $D$, the smaller this ratio and the smaller the relative contribution of the wall to the friction. This is reflected in the equation by the fact that the diameter $D$ appears in the denominator
- $v^2$ is the velocity squared. Higher (average) velocity results in more friction. That his increase goes with the second power of the velocity is only a good approximation for turbulent flow, however, based on experimental evidence, and is not always true
- $\lambda$ is the so-called Darcy-Weisbach friction coefficient. It is thought to be independent of $v$, $L$ and $D$ and stands for the (dimensionless) roughness of the wall of the tube. Rougher walls cause more friction and have a higher $\lambda$. This coefficient depends on the material of the tube and on the smoothness of its finish. 

The Darcy-Weisbach equation (Eq. 4.4) is effective for turbulent situations, but it does not apply to all flow situations. As discussed above, the second power in the equation is only valid in turbulent situations. For other flow situations, however, one sticks to the algebraic form of the equations and chooses to make the friction coefficient $\lambda$ velocity-dependent. This dependency is typically plotted in a so-called Moody-diagram. In these graphs one plots the resistance coefficient $\lambda$ as a function of the Reynolds number, rather than velocity. As the Reynolds number is directly proportional to the velocity, this investigates essentially the same dependency. 

>[!Missing]
>Insert Figure 4.9

The graph contains many measurements. The roughness of the tube was parameterised by the ratio of the roughness length $k_s$ (the size of the "bumps" on the wall of the tube, as is also used for sandpaper) divided by the diameter $D$ of the tube. Measurements corresponding to the same $k_s / D$ values were plotted with the same symbol.

In this graph, one can distinguish several regions:
1. The **rough turbulent** region. In this region, the Darcy-Weisbach equation is valid: $\lambda$ is approximately constant for a fixed relative roughness length $k_s / D$. For the relation between $\lambda$ and $k_s / D$ many equations exist. One very well known one is the [[Colbrook-White Equation]]:

$$
\frac{1}{\sqrt{\lambda}} = -2 \log \left( 0.27 \frac{k_s}{D} + \frac{2.51}{\text{Re} \sqrt{\lambda}} \right) \tag{4.6}
$$

2. The **smooth turbulent** region. In this region the resistance no longer depends on the relative roughness $k_s / D$: all points with different symbols fall on the same line in Fig. 4.9. In these cases the roughness $k_s$ is smaller than the laminar boundary layer (see e.g. Fig. 4.4)$. Therefore, the flow in the tube only "feels" the smooth laminar boundary and not the real rough tube boundary. One widely used equation to calculate the resistance coefficient in these cases is:
   
   $$
   \frac{1}{\sqrt{\lambda}} = 2 \log \left( \frac{\text{Re} \sqrt{\lambda}}{2.51} \right) \tag{4.7}
   $$
   
   This equation can be derived from Colebrook-White by setting $k_s / D = 0$. In this equation, $\lambda$ depends only on the velocity (through $\text{Re}$) but not on $k_s$
3. The **laminar** region. The friction is now proportional to $v$ rather than to $v^2$ (and thus $\lambda \sim 1/v$ ) and depends on $\text{Re}$. An equation often used in this region is:
   
   $$
   \lambda = \frac{64}{\text{Re}} \tag{4.8}
   $$

4. Several "transition"  regions, where the characteristics of the regions above mix

### 4.2.2.2 Local energy losses
Local energy losses have many causes: changes in cross-sections, bends in the tube, valves, etc. All these different cases have their own equations. 


## 4.2.3 Friction in open water: Manning and Chézy
The Bernoulli analysis of open water starts by choosing a streamline. In these notes the line at the water surface is chosen, because the pressure there is atmospheric, and thus equal to zero. 

A result of this approach is that there are only two energy components:
- Static energy, its height given by the sum of bottom height ($z_b$) and water depth $d$, so this is the sum of potential and pressure energy;
- Kinetic energy. As was also done for tubes, the velocity in this term is thought to be close to the mean velocity in the cross-section. 

For analysis over larger lengths of the river, the energy loss is an important component. This energy loss is visible as the slope of the total energy line. This slope is called the **friction slope**, denoted by $S_f$ and is technically defined as the energy loss per unit length:

$$
S_f = \frac{\Delta E}{\Delta L} \tag{4.11}
$$

The sigh is positive, which means energy loss in the downstream direction. This friction slope can vary in space.

The calculation of energy losses for open water is more complicated than for the pipes in previous sections. Although the flow in open water is (almost) always turbulent, an exact calculation is complicated by the geometrical complexity of the cross-section, irregular roughness of the bottom and velocity distribution. Therefore, every equation to calculate this energy loss is necessarily empirical. One often used equation that will also be used in these notes is the [[Manning's Law|Manning Equation]].

$$
\begin{aligned}
S_f &= \frac{n^2 \, v^2}{d^{4/3}} \\
&= \frac{n^2 \, Q^2}{B^2 \, d^{10/3}}
\end{aligned} \tag{4.12}
$$

>[!Note]
>Remember, $Q = B \, d \, v$ (Eq. 2.10) for a broad rectangular cross-section


Note that the velocity appears squared in the equation, just as in the Darcy-Weisbach (Eq. 4.4) for turbulent flow. The strange powers $4/3$ and $10/3$ in the denominator are purely empirical: they yield good results in many practical situations. The factor $n$ is called the [[Manning Coefficient]] and represents the roughness of the river bed. 

The flow velocity according to Manning's equation is in general:

$$
v = \frac{R_h^{2/3} S_f^{1/2}}{n} \tag{4.13}
$$

with $R_h$ (or $R$) being the hydraulic radius as mentioned in Chapter 2. And for a broad-rectangular cross-section:

$$
v = \frac{d^{2/3} S_f^{1/2}}{n} \tag{4.14}
$$

with $d$ being the [[Hydraulic Depth]] as mentioned in Equation 2.3 of Chapter 2.

Sometimes the [[Chézy Equation]] is used instead of Manning's. The Chézy relation is also empirical and uses a constant $C$ representing smoothness rather than roughness:

$$
\begin{aligned}
S_f &= \frac{v^2}{C^2 \, d} \\
&= \frac{Q^2}{C \, B^2 \, d^3}
\end{aligned} \tag{4.15}
$$

The Manning and Chézy coefficients can be converted to each other using:

$$
C = \frac{1}{n} d^{1/6} \tag{4.16}
$$

The flow velocity according to Chézy's equation is in general

$$
v= C \sqrt{R_h S_f} \tag{4.17}
$$

and for a broad rectangular cross-section:

$$
v = C \sqrt{d \, S_f} \tag{4.18}
$$


---
# 4.3 Characteristic flow conditions
## 4.3.1 Equilibrium flow: normal discharge and depth
As already shortly discussed in chapter 2, an important special case of open water is that of [[Uniform Flow]] or equilibrium flow. Such an equilibrium situation is characterised by parallel channel bottom ($z_0$), streamlines (being the water surface) and total energy lines. This can also be expressed by the equality of slopes (bottom slope $S_o$ and friction slope $S_f$):

$$
S_o = S_f \tag{4.19}
$$

Using the Manning equation (Eq. 4.12) this can be rewritten into

$$
\begin{aligned}
S_o = S_f &= \frac{n^2 v^2}{d^{4/3}} \\
v &= \frac{\sqrt{S_o}}{n} d^{2/3}
\end{aligned} \tag{4.20}
$$

Or using the Chézy equation (Eq. 4.15) we obtain:

$$
\begin{aligned}
S_o = S_f &= \frac{v^2}{C^2 d} \\
v &= C \sqrt{S_o d}
\end{aligned} \tag{4.21}
$$

Both of these show that in equilibrium situations there is a unique non-linear relationship between water depth and velocity. 

The relation between depth and velocity is important, but in practice the following questions are even more useful:
- Given a water depth $d$, what is the (unique) discharge corresponding to this depth in equilibrium situations? This discharge is called the [[Normal Discharge]] or equilibrium discharge corresponding to the given depth and denoted by $Q_n$
- Given a discharge $Q$, what is the (unique) water depth corresponding to this discharge in equilibrium situations? This water depth is called the [[Normal Depth]] corresponding to the given discharge and denoted by $d_n$

The answer to the questions above can be derived from the velocity (Eq. 4.20 or Eq. 4.21), combined with $Q = a \, v = B \, d \, v$, to yield:

$$
\begin{aligned}
\text{Manning: } \; \; Q_n &= \frac{B \sqrt{S_o}}{n}d^{5/3} \\
d_n &= \left( \frac{n \, Q}{B \sqrt{S_o}} \right)^{3/5} \\
\text{Chézy: } \; \; Q_n &= C \, B \, S_o^{1/2} \, d_n^{2/3} \\
d_n &= \left(\frac{Q^2}{C^2 B^2 S_o} \right)^{1/3}
\end{aligned} \tag{4.22}
$$


## 4.3.2 Critical, subcritical and supercritical flow
[[Bernoulli's Law]] also allows other analyses than the equilibrium case. The important example of distinguishing subcritical and supercritical flow will be presented in this section. Although not all the mathematics involved can be presented here (some of it will be discussed in the next section), most of the important conclusions can be understood intuitively.

The Bernoulli analysis in this case consists of the analysis of the energy as a function of water depth $d$ *for a constant discharge*. The analysis is done locally around a point A. By local we mean that the energy slope (and thus the friction slope and the Manning coefficient) is not considered, only the energy in the point itself. The water depths shown are also only locally valid and certainly not parallel to the bottom at a larger scale and thus not necessarily in equilibrium.

To simplify the analysis, we choose the $z = 0$ level at the height of point A. The part of the energy height above this level (so the total energy above the bed) is called the **specific energy**. This specific energy can be written in two ways. The first is using Bernoulli's equation:

$$
\begin{aligned}
E_{\text{spec}} &= \text{static energy} + \text{kinetic energy} \\
&= d + \frac{v^2}{2g}
\end{aligned} \tag{4.23}
$$

The second way uses the relation $v = Q / (B\,d)$

$$
E_{\text{spec}} = d + \frac{Q^2}{2g \, B^2 \, d^2} \tag{4.24}
$$

This second way is more suitable for open water because the analysis in this section will be done for one fixed discharge $Q$. 

>[!Missing]
>Insert Figure 4.13


Figure 4.13 illustrates the energy analysis for a decreasing sequence of water depths $d_1 \gt d_2 \gt d_3 \gt d_4 \gt d_5 \gt d_6$ (and thus a sequence of decreasing static energies). As the discharge is kept constant, decreasing water depth also results in increasing velocities: $v_1 \lt v_2 \lt v_3 \lt v_4 \lt v_5 \lt v_6$. 
- At first ($1 \to 2$) the decrease of the water depth $d$ causes a decrease in the total energy: the kinetic energy increases ($v_2 \gt v_1$), but the static energy decreases more. 
- For ($2 \to 3$) the kinetic energy keeps increasing, but the decrease of static energy is still larger, so the total energy still decreases. 
- Around the so-called critical situation (3, 4) the decrease of the total energy stops, and the increase of kinetic energy becomes equal to the loss in static energy