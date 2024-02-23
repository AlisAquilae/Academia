---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 2024
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
### 1.3.1 Introduction
Discharge dynamics with their high and low flow periods determine, together with the geology and topography, the shape of channels. Sediment is mainly transported during high water levels, which results in a transformation of the river shape.

In this section, we will go deeper into natural river shapes and river systems, and in what way these shapes and systems depend on the discharge. This knowledge is even important for man-made channels. Nowadays, we often 'design' channels, but we still have to be aware of the natural processes of erosion and sedimentation when doing this. 

We already introduced the calculation of the required [[Discharge]] capacity in the course [[Water 1]] ([[Chézy Equation]]). In this section, we will expand this knowledge with the explanation of river shapes: **river morphology**. 

---
### 1.3.2 Horton's Geomorphological Laws
In the course Water 1 we introduced the order numbers according to Strahler ([[Strahler Order Numbering]]). When a river system is ordered according to Strahler's ordering, we can ask ortselves whether dendritic networks have certain universal characteristics. For example, we can calculate the number of links/streams in every order: $N_i$ is the number of links/streams of order $i$; $N_{i+1}$ the number of links of order $i+1$, etc. 

If we apply this analysis to a natural catchment, we will discover a notable structure in the data: 

$$
R_B=\frac{N_i}{N_{i+1}} \tag{1.22}
$$

With $R_B$ a constant value. 

We call $R_B$ the **Bifurcation Number** (*bifurcation* means splitting). If we repeat this analysis for many catchments in the same geomorphological unit (e.g. the Belgian Ardennes), we will get almost the same bifurcation number for every channel. Even between those geomorphological units, the bifurcation number is relatively constant, with an average value of 3.5. 

>[!Info]
>Globally, the bifurcation number roughly varies between 3 and 5, which is a very small spread for what seems to be a randomly established drainage pattern. 

>[!Note]
>More elongated catchments have larger bifurcation numbers

Also, other transportation networks have similar bifurcation numbers: trees have an average of 3.2, lightning splits with an average ratio of 3.5 and our blood vessels have an $R_B$ of 3.4. Hence, nature gives us a clear ordering in seemingly chaotic transporting systems

Equation 2.22 is called [[Horton's Law of Stream Numbers]], also called the **Bifurcation Law of Drainage Patterns**. Since we have an order for every interior and exterior link of the river system, we can extend our analysis with the average length of channels with a certain order, or even the average slope of channels and the average drainage area of a certain order.

We can calculate the average length of the channel of order $i$ with the arithmetic mean: 

$$
\bar{L}_i=\frac{1}{N} \sum_{j=1}^N L_{ij} \tag{1.23}
$$


The ratio of the average lengths for increasing orders in a catchment also gives constant values: 

$$
R_L=\frac{\bar{L}_i}{\bar{L}_{i-1}} \tag{1.24} 
$$

with $R_L$ the so-called **length ratio number**. The value for $R_L$ is between 1.5 and 3.5 for natural watercourses. The average length ratio number is 2 for catchments

We call this [[Horton's Law of Stream Length]]. The average length of a channel doubles (approximately) per increasing order. With an increasing Strahler order, the number of channels in this order will decrease until we reach a point where we can no longer accurately determine the average length of the channel in that order. Therefore, this ratio is often no longer constant for higher Strahler orders. 

Even for the average slope of channels in a certain order, we can find a geometrical constant ratio. This is Horton's third geomorphological law: 

$$
R_S=\frac{\bar{S}_i}{\bar{S}_{i+1}} \tag{1.25}
$$

with $R_S$ the slope ratio number. The average slope of channels with Strahler order $i$ can be calculated with: 

$$
\bar{S}_i=\frac1N \sum_{j=1}^N S_{ij} \tag{1.26} 
$$


>[!Info]
>We can find an alternative interpretation of this slope ratio number in the typical length profiles of rivers. If we plot the elevation of a river against the distance to the [[Debouchment]] of the river system, we will often find a concave shape which we can describe with an exponential equation. This equation is another way to express the third law of Horton's Geomorphological law. 

If we define the average drainage area for a given Strahler order as: 

$$
\bar{A}_i=\frac1N \sum_{j=1}^N A_{ij} \tag{1.27} 
$$


then we will be able to formulate the surface ratio number $R_A$ as: 

$$
R_A=\frac{\bar{A}_ i}{\bar{A}_{i-1}} \tag{1.28}
$$


This last geomorphological law was derived by Schumm. 

>[!Note]
>Note that the denominator in Eqs. 2.22 and 2.25 use $i+1$ and the ones in Eqs. 2.24 and 2.28 use $i-1$, because $N$ and $S$ decrease in the downstream direction, while $L$ and $A$ increase, leading to positive numbers for the ratios

The fact that bifurcation (splitting), the average length and slope, and even the average drainage area of river systems is not a random development, but rather a system which obeys geomorphological laws, indicates a strong ordering system of natural drainage patterns. The resulting river network determines the way in which water and sediments are transported in the catchment. If we want to understand or simulate these transport systems, we have to take these structures into account. 

In the course Water 1, we introduced you to the relationship between the shape of the river network and the way water is discharged. In this course and with the introduced geomorphological laws, we will expand your knowledge with the physical background of these processes. 

---
### 1.3.3 River Mechanics
Horton's geomorphological laws, as described in the previous sections, give a geometrical description of the river network. Within a catchment, we can use these statistical laws to understand river networks and the spatial variation in hydrological regimes. The predictive skills of these laks is, however, limited. For this reason, we often use deterministic models for changes in channels, such as the construction of a secondary channel in the flood plains of the Rhine river

Deterministic models as used in hydrology and hydraulics (river mechanics) use methods from classical mechanics, which we can subdivide into statics and dynamics. Projects related to statics are for example the succumbing of river banks or the pillar of a bridge, but for example also the buoyancy of a water plant. Dynamics describe the movement of both solids (e.g. sediments) and liquids, for example the effects of a narrower part in the river. 

Classical mechanics are based on [[Newton's Second Law of Motion]]: 

$$
\overrightarrow{F}=m\overrightarrow{a} \tag{1.29}
$$


In this equation, $\overrightarrow{F}$  is the force in Newton [N], $m$ is the mass [kg] and $\overrightarrow{a}$ is the acceleration $[m \, s^{-2}]$. 

>[!Note]
>The arrows indicate a vector, which has a quantity and a direction (in contrast to a [[Scalars|Scalar]], such as temperature, which does not have a direction). 

Equation 2.29 forms the basic principle for both statics and dynamics. We will explain both processes with examples of sand particles and water flow in a river.

#### 1.3.3.1 Statics
When the water flow in the river is not strong enough to move a sand particle on the river bottom, the condition of the sand particle is characterised by a **static equilibrium**. If we use a Cartesian axis-system with coordinates (x, y, z), this means that the sum of forces in all three directions equals 0 (equilibrium of all forces): 

$$
\begin{align}
& \sum F_x=0 \\
& \sum F_y=0 \\
& \sum F_z=0 \\
\end{align} \tag{1.30}
$$


Or, in vector notation: 

$$
\sum \overrightarrow{F} = (0,0,0) \tag{1.31} 
$$


When the sand particle resists the dragging force (the so-called **shear stress**) of the water flow on the river bottom, this means that the surrounding sand particles exercise a force in the opposite direction and equal the force of the water flow, such that an equilibrium of forces is formed. The water flow normally has to overcome a certain threshold in order to break through the static equilibrium resulting in a motion of the sand particle. If this happens, the sand particle will experience a **translation**. A translation is a shift or movement without a rotation. 

A static equilibrium is not only characterised by an equilibrium in forces, but also by an equilibrium of torque: 

$$
\begin{align}
& \sum M_x=0 \\
& \sum M_y=0 \\
& \sum M_z=0 \\
\end{align} \tag{1.32}
$$


Or, in vector notation: 

$$
\sum \overrightarrow{M} = (0,0,0) \tag{1.33} 
$$


**Torque** is the product of a force times the arm (distance) of that force, or in vector notation: 

$$
\overrightarrow{M} = \overrightarrow{r} \times \overrightarrow{F} \tag{1.34} 
$$


Here $r$ is the 'arm', which we can display as a vector, because it is a unit with both a quantity and a direction. When the torque is not in equilibrium in one of the three directions, the sand particle will experience a rotation. Hence, the absence of an equilibrium opf $M_x$, $M_y$ or $M_z$ results in a rotation around respectively the x-axis, y-axis or z-axis. 

We can thus explain the static behaviour of a sand particle on the river bottom as a simultaneous occurrence of six equilibria: an equilibrium of forces in three directions and a torque equilibrium on three axes. Statics, as described above, are the basics to describe whether for example the banks of a river, a pillar of a bridge or a dike will succumb due to the forces and torque of water that act on it. 

When the water movement exceeds the threshold for movement of the sand particle, the particles will roll, slide and jump over the river bottom, or the particles will move with the water in **suspension** (i.e. 'floating' in the water). Most rivers in the world travel enormous amounts of sand or other sediments

#### 1.3.3.2 Dynamics
Also in dynamics, where we try to quantify water movement and the transport of sediments, the second law of Newton is important. We will have to rewrite Eq. 2.29 in order to use this equation for a liquid: 

$$
\overrightarrow{F} = m\overrightarrow{a} = \frac{\delta}{\delta t}(m\overrightarrow{v} \,) \tag{1.35}
$$


The product of mass and velocity in this equation $(m\overrightarrow{v} \,)$ is called the **impulse** (vector), which has the same direction as the velocity. Hence, a force is the change of an impulse in time. The application of this law to river water, with or without suspended sediments, starts with setting up a control volume. A control volume of a river has imaginary boundaries and is both in static and dynamic equilibrium. This means that we can set up a balance of mass and impulse for this control volume. 

We can set up a mass balance when we define the control volume with two boundaries transversal to the water flow. The distance between those two boundaries is $\Delta x$. When more water flows through the upper boundary than through the lower boundary, the water level will increase in the control volume. Vice versa, when more water leaves the control volumes than that water enters, the water level of the control volume will drop. Here, we assume that there is no water exchange with the groundwater (so no infiltration or drainage) and that the flux on the upper boundary (the water level), e.g. precipitation, is negligible. 

For sediment transport, we can make a similar balance with a control volume. When more sediment enters than leaves the control volume, there will be a sediment increase in the control volume. If this happens, there will be 2 options the concentration of sediment in suspension will increase (the water will get more turbid) or sedimentation will take place. Sedimentation within the control volume can raise the river bottom or form river banks. With such a simplified mass balance, we can solve many problems in river functioning, but for some complex problems when the water velocity is of importance, we have to solve the impulse balance next to the water balance. 

To solve three dimensional water flow in detail, we have to make a mass and impulse balance for an infinitesimally small control volume. This means extremely small, but not infinitely small, because the volume should be larger than the scale of molecules. Both balances will become a coupled system of differential equations, which is very difficult to solve analytically. With the growth in computer power, solving this system is getting closer, but it will take many years before we are really there. Hence, our current models are not yet able to simulate sediment transport of every individual particle on the scale of a river by solving these equations.

The transport of sediments depends heavily on the drag force of the river flow at the bottom of the river, together with the mixing forces by turbulent fluctuations in the flow, which results in suspended sediments. Streamflow details determine the river's capacity to transport sediments. As described above with the help of the mass balance, streamflow gradients can result in changes in the river morphology. The river morphology, in its turn, determines the boundary conditions of the water flow. Characteristic for coupled rivers systems is that changes in water movement, both in space and time, take place much faster than change in the river morphology. 

---
### 1.3.4 Meandering
Not all rivers look the same from above. Generally, we have the following subdivision in river patterns
- **Straight**: the river has a clear channel and it has barely any bends
- **Meandering**: the river shows a large sequence of bends
- **Braided**: this pattern is characterised by a river which has many different channels that intersect or cross each other, and then converge or diverge again, like the strands of a braid. We often see this pattern in sandy river banks with a strongly changing discharge and/or steep hill slopes. Hence, this river pattern often occurs in mountainous areas
- **Anastomosing**: we find this pattern in rivers with clayey banks and low streamflow velocities, such as delta regions. 

It is not always easy to distinguish the different patterns, but from laboratory experiments, we know that the patterns are mainly determined by the slope. 

>[!Info]
>The straight pattern is the least occurring pattern; at least for natural rivers. Most rivers on Earth have a meandering pattern, while only a small part shows a braided pattern

Why does a river meander? This has to do with the strive of the river for an energetic condition that is as low as possible. A too high streamflow velocity and shear stress (the force which pushes on the sediment particles) will result in a movement of the sediment from the river bottom. This movement lasts until the river bed and banks have reached a new shape, in which sediment transport is minimal. A river will always 'strive' for such an energetically favourable shape,. as long as that is possible within the current boundary of conditions as determined by external processes, such as sea level rise or plate tectonics. These external processes determine the height difference the river has to bridge between the source and the debouchment. 

We can quantify to which extent the river meanders with the so-called [[Sinuosity]]. Sinuosity is the ratio between the actual distance of the river (measured alongside the river channel) and the shortest possible distance when the river would have been straight. A straight line / river thus has a sinuosity of 1. 

>[!Info]
>Most natural meandering river systems have a sinuosity of about 1.5. In areas with sufficient slopes in their valleys, the sinuosity can reach 4.

Meandering bends, however, have a negative effect on navigation, because of the larger distance boats have to travel. For this reason (but also for fast discharge), many natural meandering rivers were straightened

As you have seen in the course Water 1, there is a relationship between the streamflow velocity of the river, the roughness of the river bottom and the gradient, as described with the [[Chézy Equation]]. In the case the gradient of the river changes due to aforementioned external processes, the river will try to return to its old equilibrium state. The river can change its length (and with that the gradient and sinuosity), by having more or fewer meanders. 

A river starts meandering due to a heterogeneous distribution of the sediment particles in the river bed, meaning that at some locations in the bed, there are more large particles and in other more small particles. Because of this, particles are not uniformly distributed, but they gather in banks, resulting in erosion at this side (the outer bend). Meandering is an active process and therefore, meandering rivers are in a dynamic equilibrium.

In a meander, erosion takes place  in the outer bend, while deposition takes place in the inner bend. The result is that the meander bend will slowly move in the downstream direction. The shape of the meander is quite stable during this process, but it is possible that 2 meander bends cross and cut each other off. The old meanders will remain in the landscape as local lows.

>[!Info]
>The [[Thalweg]], the line that connects the deepest points along the river, is not in the middle of the river in meandering bends due to the asymmetry of these meandering bends

Just like many other geomorphological characteristics of rivers, meander shapes show a remarkable uniformity. Because of this, it is difficult to distinguish 2 rivers with different sizes, with are not drawn on a scale, based on their meander shapes. Several characteristic meander sizes are couples. 

>[!Info]
>Geomorphological research has shown that there is an almost linear relationship between the width of the river and the length of its meanders (here, the meander length is defined as the length of one meander cycle)

Also between the meander length and the average radius of the curvature (the width of the meander), there is an almost linear relationship present. Longer meanders have a larger radius of curvature. This holds for almost every possible length scale and other things than rivers. 

#### 1.3.4.1 A Model for the Shapes of Meanders
If we want to mathematically describe the shape of regular meanders, we have to use an equation which strives for a distribution of changes that is as evenly distributed as possible. Leopold et al. (1995) argued that the best mathematical model for this is a so-called sinusoidal curve: 

$$
\Theta = \Theta_\text{max} \Bigl( 2 \pi \frac sM \Bigr) \tag{1.36} 
$$

With
- $\Theta$ the angle (in $\degree$ ) measured between the local streamflow direction $s$ and the average downstream direction of the system $x$. 
- $\Theta_{\text{max}}$ is the maximum value of $\Theta$
- $s$ is the distance alongside the [[Thalweg]] of the river
- $M$ is the total distance alongside the [[Thalweg]] of one meander cycle

The variation in the deviation of the angle with direction $x$ alongside the curve, is lower for a sinusoidal curve than for a normal sinus curve or a curve mande from circular parts. This shows that a river tries to minimise and equally distribute the energy use for the transport of water and sediment. Hence, the meander shape is a compromise between on the one hand the strive for an equal distribution of the change in shear stress alongside the river bed and on the other hand, an optimisation of the energy use necessary for transport of water and sediments. That is why meanders all look similar. 

### 1.3.5 The Influence of Extremes
In [[Reader Water 2-Chapter 2.2-Hydrological Extremes|Chapter 1.2]] we introduced hydrological extremes and the return period of these extremes. Within the subject of river morphology, it is interesting to explore the effect of these extremes on the morphology

If we look at a certain point alongside the river, the cros-section has a shape and size which allows the river to discharge the most occurring discharges within its banks. With the most occurring discharges we mean low discharges or discharges around the average discharge. High discharge amounts, so the les frequent discharge amounts, result in higher water levels than what fits within the river banks. In such a case, part of the discharge will take place over the floodplains next to the river. The flood plains of a river are the flat lands next to the river, which are created in the landscape under the occurring climateology by regular floods of the river. 

The processes which determine the current cross-section of the channel, are erosion and deposition. Why does the cross-section of the river reach certain dimensions? Low discharges often occyr, but these amounts only have a limited eroding power. The extreme discharges, however, have a much higher eroding power, but they rarely occur. Hence, the dimensions of a river are determined by the discharge which occurs frequent enough, but which also has sufficient eroding power. This discharge amount is called the [[Bankfull Discharge]]

The bankfull discharge has a return period of approximately 1.5 years: so, on average two times per three year, the bankfull discharge is reached or exceeded. This amount is sufficient to determine the shape and dimensions of the river. On the average, the annual maximum discharge has a return period of approximately 2.5 years. Hence, it is very normal (and unavoidable) that a river floods occasionally. People often seem to ignore the natural behaviour of rivers, which results in high damages and costs after an inundation of the river. Fortunately, this is changing.

>[!Note]
>Extreme discharges sometimes lead to sudden and large changes, for example in the course of a meandering river. 

---
### 1.3.6 Hydraulic Geometry
As described in the previous sections, the dimensions (hydraulic geometry: width, depth and slope) of the cross-section of the river are as such that the most occurring discharges are transported within the banks of the river. Only twice per three years (on average), the river will be completely filled. So, how does the hydraulic geometry of a given cross-section vary with the discharge?

>[!Missing]
>Insert fig. 2.37

The figure above displays 2 cross-sections (one close to the source and one close to the debouchment) in the river for 2 different discharges (small and large discharges). When the discharge increases from a small to a large discharge (from B to D), the width $b$ and depth $h$ of course increase with discharge $Q$. 

If we follow the river from source to outlet (so from C top D in the figure above), then we see that the sizes of the cross-sections will gradually increase. This is because the discharge (and also the bankfull discharge) increases with an increasing draining surface area of the river. Based on a long dataset of discharge measurements, Leopold et al. (1995) concluded that there is an almost linear relationship between the average annual discharge and the drainage area: 

$$
Q_{\text{avg}} \cong A^{1.03} \tag{1.37} 
$$


The bankfull discharge $Q_{\text{eff}}$ increases non-linearly with the drainage area: 

$$
Q_{\text{eff}} \cong A^{0.8} \tag{1.38}  
$$


>[!Note]
>The bankfull discharge only occurs after severe rain showers and such severe rain showers are never large enough to cover the entire area of large catchments. Therefore, the bankfull discharge increases less than the average yearly discharge with increasing drainage area. 

