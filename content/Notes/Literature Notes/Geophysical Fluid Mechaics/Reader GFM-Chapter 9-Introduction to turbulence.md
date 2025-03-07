---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
# 9.1 The origin and nature of turbulence
Turbulence is the phenomenon that occurs as a result of inherent instability in fluid flows. In water and air flows, these instabilities can be produced by density (thermal) differences or velocity (mechanical) differences. 

Osborne Reynolds (1842-1912) was the first to study this instability phenomenon and provide a quantitative mathematical description of the flow to either amplify or damp disturbances in the flow. Disturbances are always present in fluid flows and result from small and rapid perturbations. For instance, turbulent motions can be present at the inlet, near a wall, or with air masses under phase changes. Here, the laminar streamlines are disturbed by obstacles creating disturbances.

The crucial question when considering turbulence is whether such initial disturbances will grow or decay. Relevant in our course is that turbulence is a key process in the transport and mixing of water and air. As such, it is impossible to describe these flows in any detail without accounting for their turbulent nature. 

There are different processes contributing to the growth of turbulent instability in the flow. Reynolds' experiments showed that the relation between viscous forces and inertial (advective terms in Equation 3.26) forces play a crucial role. Viscosity tends to dampen disturbances, while inertial forces amplify them. When viscosity is dominant (low $Re$ number) the flow will be laminar, while when inertia dominates over viscosity (high $Re$ number) the flow becomes turbulent.

Most geophysical flows are turbulent, owing to the large scale of the flows involved characterised by wind and thermal instabilities, and the low viscosity of water and air. The turbulent flow can be characterised by their very large [[Reynolds Number]]. For instance, for clear water at 20$\degree$ C and 1 atm, and with typical values for kinematic viscosity, one obtains very high Reynolds numbers. This indicates that normally the flow has a turbulent nature because the inertial forces are much larger than the viscous forces. 

---
# 9.2 Reynolds decomposition: towards a statistical description of turbulence
## 9.2.1 Introduction the Reynolds decomposition
Because of the chaotic behaviour of turbulence, it is almost impossible to quantify turbulence-induced variations of a flow variable at each instant in time and at each position. In other words, velocity, pressure, and temperature remain unpredictable. However, large-scale variations of these variables are superimposed on the more coherent, larger, or longer-lived flow structures. The statistics of these variations are often temporally steady and spatially constant. Therefore, in geophysical flows, we describe and represent turbulence using a statistical description based on the following variables: mean (1st-order), (co-)variances (2nd-order) and higher-order (third-order skewness) variables.

To this end, the flow characteristics are treated using the so-called Reynolds decomposition. This descomposition consists of decomposing the flow variable (velocity, temperature, sediment, ...) into a mean component and a fluctuating component:

$$
\begin{aligned}
\mu &= \overline{\mu} + u'\\
\phi &= \overline{\phi} + \phi'
\end{aligned} \tag{9.1}
$$

Note that we made this decomposition in only one direction (for the sake of simplicity in the equations), but it also applies to the three directions of wind. Moreover, $\phi$ is a generic scalar like temperature or salinity, and $\phi'$ is the turbulence-induced variation. The time average of the arbitrary variable $\bar{\phi}$ at time $t_0$ is defined as:

$$
\overline{\phi} = \frac{1}{T} \int\limits_{t_0 - \frac{1}{2} T}^{t_0 + \frac{1}{2}T} \; \phi \, \mathrm{d}t \tag{9.2}
$$

The limits of the integration, determined by the time average $T$, should be sufficiently large to comply:
1. The average component is independent of those limits, and
2. During the period of the averaging time the turbulent conditions remain similar

For instance, there is no influence of diurnal variability, i.e. changes of the variable due that during the day there are changes of the input of radiative energy.. In an unsteady flow problem, where e.g. the time-averaged velocity varies with time, $T$ should be large compared to the time-scale of the turbulent fluctuations, but small compared to the time-scale of the mean flow (the time within which the mean flow does not change)

A key assumption with the Reynolds decomposition is that the time average of the fluctuating components is zero by definition:

$$
\overline{\phi '}= \frac{1}{T} \int\limits_{t_0 - \frac{1}{2} T}^{t_0 + \frac{1}{2}T} \; \phi' \, \mathrm{d}t = 0 \tag{9.2}
$$

In other words, we assume that during the averaging time, there are the same amount of positive and negative fluctuations. As such, the net effect is an average fluctuation of the variables equal to $0$

## 9.2.2 Variance of the velocity fluctuation and turbulent fluxes
A fundamental aspect in geophysical flows is that introducing the Reynolds decomposition in the product of two variables yields two terms: a term that is only composed by the product of the mean values, and a term that is only formed by the product of two fluctuation values. This term $\overline{u'^2}$ or $\overline{u' \phi '}$ , and it represents the net effect of turbulent fluctuations. 

The derivation of this term is as follows:

$$
\begin{aligned}
\overline{u^2} &= \overline{(\overline{u} + u')^2} \\
&= \overline{u}\overline{u} + 2 \overline{\overline{u}u'} \\
&= \overline{u}^2 + 0 + \overline{u'^2} \\
&= \overline{u}^2 + \overline{u'^2}
\end{aligned} \tag{9.3}
$$

The last term in this equation is recognised as the variance of the $u$-component (fluctuating) wind and covariance (second-order statistical moments) between the fluctuating component $u$. Notice that the averaged fluctuations around the average fall out of the equation because they are $0$.

>[!Warning]
>Skipped some of the alternatives to Equation 3.9 which take length or ensemble averages rather than time averages


---
# 9.3 Reynolds averages on the governing equations of the flow (==Skipped==)

---
# 9.4 Turbulent kinetic energy
An important quantity that defines the energy of the turbulent flow in water or air is the turbulent kinetic energy (TKE). It is therefore associated with the amount of energy of the turbulent eddies in the mean flow. TKE can be produced by fluid shear, friction or buoyancy. The TKE per unit mass $k$ (units m$^2$ s$^{-2}$) is defined as half the trace (the sum of all elements on the main diagonal) of the Reynolds stress tensor:

$$
\begin{aligned}
k &= \frac{1}{2} (\overline{u_1 '^2} + \overline{u_2 '^2} + \overline{u_3 '^2}) \\
&= \frac{1}{2} (\overline{u '^2} + \overline{v '^2} + \overline{w '^2})
\end{aligned} \tag{9.4}
$$

TKE is normally measured and therefore can be calculated using the eddy-covariance instruments (EC). EC measures with a high frequency ($\gt 10$ Hz) the three components of the velocity field. 