---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Coastal Oceanography and Delta Geology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Coastal Oceanography and Delta Geology]]"]
---
# 5.1 Estuarine Circulation and Stratification
An estuary is a semi enclosed basin with free communication with the sea and fresh water inflow from the land. It represents the interface between land and sea, where freshwater from the river mixes with saline seawater. 

At the river outlet, a river plume develops because seawater has a higher density than freshwater. At the landward side of the estuary, tides can extend beyond the limit of salinity intrusion, sometimes reaching hundreds of kilometers inland.

>[!Missing]
>Insert Fig. 5.1


## 5.1.1 Estuarine Circulation
In an estuary, the time-averaged velocity profile varies over depth. The tidallyaveraged velocity profile is typically directed landward near the bottom and seaward near the surface (figure 5.2). These averaged currents are typically an order of magnitude weaker than the amplitude of the tidal currents. 

>[!Important]
>The velocity differences over depth are caused by a horizontal density gradient, which relates to the salinity and temperature differences between high-salinity seawater and freshwater in the river.


>[!Missing]
>Insert Fig. 5.2


The horizontal pressure gradient along an estuary is given by

$$
\frac{\partial p}{\partial x} = g \rho \frac{\partial \zeta}{\partial x} + g z \frac{\partial \rho}{\partial x} \tag{5.1}
$$

The first term on the right hand side is the surface slope term and the second term is the density gradient term. In a hydrostatic equilibrium, these two terms balance and the horizontal pressure gradient is zero. If there is a density gradient present between the river and the estuary mouth, a surface slope develops, which occurs in nearly all estuaries. A horizontal pressure gradient arises due to fresh water inflow by the river at the head of the estuary and saltier ocean water exchange at the inlet.

>[!Important]
>The horizontal pressure gradient drives an exchange flow of fresh and salt water. This is called the estuarine circulation.


## 5.1.2 Stratification
The estuarine circulation has a large effect on density stratification within an estuary. In turn, stratification effects influence the exchange of salt and fresh water in estuaries. As a result of the feedbacks, stratification is a complex topic of estuarine physics. This section will give a brief overview of factors that influence stratification.

The intensity of stratification largely depends on the magnitude of tidal mixing with respect to the fresh water inflow. Differential advection of salinity over the vertical enhances stratification, while mixing eliminates stratification.

>[!Missing]
>Insert Fig. 5.4

We can illustrate this considering a relatively deep estuary where the river discharge is high compared to the tidal velocity (figure 5.4a). The high input of fresh water at the river head flows seaward over a saline layer with higher density. At the interface of the two layers, a shear layer will develop as a result of the velocity of the upper layer. This velocity shear creates turbulent vortices, which enhances mixing between the two layers. 

The turbulent motion may not be strong enough to mix the entire water column. The vertical extent of the internal mixing layer depends on the competition between processes of stratification and de-stratification. Let us consider a similar estuary with a smaller depth. When the depth of the lower saline layer is small enough, turbulence at the interface will interact with the bottom boundary layer and mixing becomes more important. No internal mixing layer develops, but salinity gradually increases towards the bottom (figure 5.5b).

>[!Missing]
>Insert Fig. 5.5

Next to the estuary depth, the tidal amplitude has a strong control on the mixing process. A larger tidal velocity intensifies the shear stress at the interface between fresh and salt water. The result is turbulence and a deeper mixed layer.

The influence of tidal velocity creates an apparent variation of salinity over the the spring-neap cycle. Figure 5.6 demonstrates the salinity variation in the Hudson river during spring tide and neap tide. The higher tidal velocity during spring tide causes vigorous mixing and therefore a smaller vertical salinity gradient. During the neap tide, there is less mixing and the estuary is highly stratified.

>[!Missing]
>Insert Fig. 5.6

The intensity of stratification relative to mixing can be quantified by the gradient Richardson number, based on the ratio between the density gradient and the shear:

$$
Ri_{GR} = \frac{g}{\rho} \frac{\partial p / \partial z}{(\partial u/\partial z)^2} \tag{5.10}
$$

Where:
- $g$ denotes the gravitational acceleration
- $\rho$ is the density
- $z$ is the vertical coordinate, and
- $u$ is the velocity

>[!Important]
>When the gradient Richardson number is smaller than 0.25, the water column is locally considered to be well-mixed. A Richardson number of 0.5 or higher indicates stratification.

Stratification typically varies throughout the water column, and spatially. Close to the bed, where the velocity gradient is strongest, conditions are typically well-mixed. Wind may cause velocity shear and mixing near the surface.


>[!Summary]
>Summarising, density stratification is mainly influenced by 2 factors:
>1. Estuary depth
>2. Tidal amplitude

Based on these, we can identify the following estuaries
- A strongly stratified estuary or salt-wedge estuary is often relatively deep. The depth is large compared to the tidal velocity and the river discharge is large compared to the tidal velocities. At times of small river flow or during spring tides the stratification may weaken.
- Partially mixed estuaries show great variation between spring tides and neap tides. During spring tides the estuary can be well-mixed, while during neap tides intensive stratification can develop. Another time-dependent factor is (seasonal) variation of river discharge. A higher river discharge increases the intensity of stratification, depending on the location in the estuary. Additionally, stratification increases towards the head of the estuary, where tidal velocities can be damped and river flow is more dominant.
- Well-mixed estuaries are mostly shallow estuaries and have a small river discharge relative to the tidal velocities. During neap tide or periods of high river discharge stratification may develop.

>[!Missing]
>Insert Fig. 5.7


## 5.1.3 Salt Intrusion
Salt intrusion threatens water quality in low-lying deltas, reducing the availability of drinking water. Expressing the intensity of the salt water flow into an estuary is often done by the salt intrusion length. 

>[!Important]
>The salt intrusion length is defined as the distance to the point where the salinity equals the river salinity, measured from the mouth of an estuary. The salt intrusion length is influenced by tidal forcing, river flow and geomorphological characteristics such as the river depth. 

In this section a simple model is offered for calculating the salt intrusion length, as provided by Mikhailova (2012).

>[!Warning]
>I skipped the derivation of the formulas

The salt intrusion length Ls depends on the type of stratification within the estuary, for which two types are distinguished. The first type is a well-mixed or partially mixed estuary (I), the second type consists of the strongly stratified or a salt-wedge types of estuary (II).

In case of a well-mixed estuary, a one-dimensional form of the salt balance equation can be used to determine the salt intrusion distance. The final formula, specifically in the case of a steady state estuary, is

$$
L_s = \ln \left(\frac{S_s}{S_r} \right)\frac{AK}{Q}
$$

Where
- $S_s$ is the sea-water salinity, or the initial salinity
- $S_r$ is the salinity of the river mouth
- $A$ is the mean channel cross-sectional area; in other words, $A=bh$
- $K$ is the horizontal dispersion coefficient in streamwise direction (assumed to be constant)
- $Q$ is the river discharge

This is an expression for the salt intrusion length in a mixed type of estuary. 

>[!Important]
>We can conclude that the salt intrusion length increases with increasing cross-sectional area and dispersion coefficient, or with a lower river discharge.

Calculating the salt intrusion length for a highly stratified estuary is more complicated. The top and bottom layers are largely decoupled, so the mean velocity will not be representative of either of the two layers. 

There are various empirical equations to calculate the salt intrusion length for highly stratified estuaries. First, we introduce the densimetric Froude number. The densimetric Froude number indicates the ratio between the inertial force and the gravity force caused by the density difference (i.e. the buoyancy force). This ratio is often used in the analysis of jets and plumes.

In this case, the salt water entering the estuary can be considered a wedge. Salt water intrusion into an estuary occurs if $F_{rp} < 1$. By assuming a densimetric Froude number of 1, the critical river flow up until which salt intrusion is possible can be estimated. After some derivation and substitution, we find

$$
Q_c = bh^{\frac{3}{2}} \sqrt{\frac{\Delta \rho}{\rho_m}g}
$$

Where
- $Q_r$ is the critical discharge
- $