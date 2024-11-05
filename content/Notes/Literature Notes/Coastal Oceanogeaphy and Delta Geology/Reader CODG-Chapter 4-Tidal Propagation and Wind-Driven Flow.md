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
# 4.1 Deep-Water Tidal Propagation
The [[Equilibrium Tide Theory|Equilibrium Tide]] consists of two symmetrical tidal bulges, tracking around the earth from east to west in a steady progression. In the real world, the progression of tides is more complicated due to coastal boundaries, bottom and wind stresses and the rotation of the earth. Especially in shallow seas, the tidal motion does not instantaneously respond to the celestial motion, but with a delay. This response time depends on propagation of ocean tides into the coastal seas, which are also directly subject to the tide generating force. 

This chapter first discusses the properties of long waves propagating in coastal seas. The production of standing waves and Kelvin waves are discussed, giving insight in the tidal wave behaviour

## 4.1.1 Long Waves
Most water waves, such as waves breaking on the beach or waves in a harbour, have periods in the order of seconds. However, the strongest tidal waves have periods of 12 or 24 hours, and their wavelengths are in the order of hundreds of kilometres. 

>[!Missing]
>Insert Fig. 4.1

Because of the limited depth of the ocean, tidal waves are [[Long Waves]]. Long waves are waves of which the wave length is much larger than the wave depth (length $10^3$ to $10^4$ times larger than depth).

A tidal long wave in the ocean is non-dispersive, which implies that a harmonical disturbance will not change the shape of the wave as it propagates. Furthermore, the propagation speed of a long wave is dependent on the wave frequency. Generally, if a wave has a propagation speed or *celecity* $c$, and a period $T$, the wave length $\lambda$ can be calculated by

$$
\lambda = cT \tag{4.1}
$$

The celerity of a long wave depends on the water depth and the value of the gravitational constant only. For deep-water long waves, the celerity can be calculated by

$$
c = \sqrt{gD} \tag{4.2}
$$

where $D$ is the water depth. In a similar way, the flow velocity $u$, so the actual movement of the water, is related to the water level at a point

$$
u = \zeta \sqrt{\frac{g}{D}} \tag{4.3}
$$

This implies that the maximum currents occur when the water level at a location is highest (at high tide). At low water the currents are directed opposite to the direction of the wave propagation

>[!Missing]
>Insert Fig. 4.2

The water level can be defined as a sine function of both distance and time

$$
\zeta(x,t) = H_0 \cos(kx - \omega t) \tag{4.4}
$$

where
- $\omega = 2\pi / T$ is the wave frequency;
- $k = 2\pi / \lambda$ is called the *wave number*; and
- $\lambda$ is the tidal wave length. 

Substituting this into equation 4.3 results in a similar expression for the flow velocity

$$
u(x,t) = H_0 \sqrt{\frac{g}{D}} \cos(kx-\omega t) \tag{4.5}
$$

The wave number indicates the spatial frequency of a harmonic wave. Both the water level and current speed have a sinusoid form. The two equations together represent a harmonic wave traveling in the positive x direction. In general, the zero phase difference between water level variation and flow velocity variation only holds in the oceans

## 4.1.2 Resonance and Standing Waves
When a progressing wave meets a (coastal) boundary, part of the wave energy will be reflected. In combination with the next incoming wave, this reflected wave can result in a [[Standing Wave]]. A standing wave has a pattern of alternatively nodes and antinodes, separated from each other by a distance of $\frac{1}{4} \lambda$. The antinodes are the points where the amplitude is maximum and the currents are zero. At the nodes the amplitude is zero and the currents are maximum

>[!Missing]
>Insert Fig. 4.3

The figure above shows the production of a standing wave pattern in an estuary. The two figures are separated from each other by a period of $t=\frac{1}{4}T$. The effect of resonance is largest when the length of the basin equals a quarter of the wave length (or three quarters, five quarters, etc.). Only when the basin has exactly this length, a pure standing wave will occur. Any other length results in a combination of a standing and propagating wave. The effect of resonance will be strongest near the head of an embayment: due to energy losses the amplitude of the reflected wave will decrease as it comes closer to the mouth of the embayment.

A famous example of tidal resonance is the Bay of Fundy at the Atlantic coast of Canada, where the tidal amplitude can be up to 15 meters.


>[!Missing]
>Insert Fig. 4.4

The behaviour of standing waves can be illustrated by considering the water level in a rectangular box, which may represent the harbour in a river delta. At the node, in the middle of the box, the amplitude is zero; the water level is constant. At the antinodes, the water level is continuously changing. When assuming zero energy loss, the water movement can be described as a continuous transfer from potential energy to kinetic energy. The maximum potential energy during high water or low water (1) and (3) is converted to a maximum kinetic energy during the middle of the oscillations (2) and (4). This can be considered as two progressive waves travelling in opposite direction, with perfect reflections at the barriers. 

The situation depicted above has only one node and is called the *fundamental node of oscillation* or *uninodal seiche*. The next highest mode has two nodes and so on. 

The natural period of oscillation is the time it takes a wave to travel from one boundary and return after reflection by the other boundary. The time of this half-wave oscillation follows from equation 4.2

$$
T = \frac{2 \times \text{box length}}{(g \times \text{water depth})^{\frac{1}{2}}} = \frac{2L}{\sqrt{gD}} \tag{4.6}
$$

This is [[Merian's Equation]], after its originator. Merian's equation may be used to estimate the natural periods of for example long lakes, but the estimated values will differ from reality because the depths are varying. Also, the irregular shapes of natural lakes will result in different natural periods, in both lateral and longitudinal direction. 

## 4.1.3 Kelvin Waves
In the previous paragraphs, rotation of the Earth was neglected. Large-scale waves however are under influence of the [[Coreolis Force]]. A tidal wave in the Northern Hemisphere is deflected to the right of its propagation direction, during flood. This deflected component will continue until it meets a barrier (mostly the coastline). The result is a set-up of water against the coast. Similarly, the water is set-down during ebb. A tidal wave featuring such a setup and setdown towards the coastal boundary is called a [[Kelvin Wave]].

>[!Missing]
>Insert Fig. 4.5

The water setup creates a pressure gradient directed away from the shore. The development of this pressure gradient continues until it balances the Coreolis force. Now, the Kelvin wave is a [[Geostrophic Wave]]. Mathematically, the resulting wave can be described as follows

$$
\zeta(y) = \zeta_0 e^{-\frac{fy}{c}} \tag{4.8}
$$

$$
u(y) = \sqrt{\frac{g}{D}} \zeta(y) \tag{4.9}
$$

Here, the boundary is located at $y=0$ and $\zeta_0$ is the wave amplitude at $y=0$. $f$ is the Coreolis parameter, defined as $f = 2\Omega \sin \phi$, in which $\Omega$ is the angular velocity of the earth and $\phi$ is the latitude. 

The above equations imply an exponential decay of the wave amplitude away from the shore and a current velocity which is proportional to the amplitude. The parameter $c/f$ is called the *Rossby radius of deformation* and scales the decay length of the amplitude. At a distance $y=c/f$ away from the boundary the amplitude has decreased to $\zeta = 0.37\zeta_0$

The Coreolis effect is essential to the propagation of a Kelvin wave. The Coreolis force deflects the wave to the right boundary at the Northern hemisphere and is stronger for waves with a higher celerity. The flow velocity is often highest in the upper part of the water column, where the flow experiences a stronger deflection to the coast. This generates a pressure gradient force that drives a net circulation, with water flowing to the coast in the upper layer and water flowing seaward in the lower layer. We will elaborate on this effect in the next section

>[!Missing]
>Insert Fig. 4.6

The spatial propagation of a Kelvin wave in a theoretical basin is presented in the left figure above. The wave enters the basin at 7AM, propagates around a node (called an [[Amphidromic Point]]), passes the reflective boundary of the basin around 0PM and leaves the basin at 5PM. A similar process is visible in the southern coast of England, propagates in easterly direction along the Belgian coast, and then north along the Dutch coast towards the Wadden Sea (right image).


---
# 4.2 Wind-Driven Flow
Open water systems like estuaries and shallow seas are exposed to atmospheric forcing mechanisms, including wind. In this section water level set-up due to wind forcing and Ekman transport is discussed. The wind does not only affect the near-surface layer, but may set the entire water column in motion. This section is based on chapter 6 of Pugh (1996)

## 4.2.1 Wind Stress and Set-Up
When the wind blows over the water surface, it moves the water as a result of drag. The ripples and waves cause surface roughness which is needed for the movement. The wind stress on the sea surface, $\tau_s$, can be quantified by assuming that it is dependent on the wind speed, $W$, and the air density, $\rho_a$. We can derive the following relationship for the wind stress

$$
\tau_s = C_D \rho_a^i W^j \tag{4.10}
$$

where
- $C_D$ is a dimensionless drag coefficient, and $i$ and $j$ coefficients. 

The coefficients can be determined by applying a dimensional analysis on equation 4.10

$$
[ML^{-1}T^{-2}] = [ML^{-3}]^i[LT^{-1}]^j
$$

This gives values of 1 and 2 for $i$ and $j$ respectively

$$
\tau_s = C_D \rho_a W^2 \tag{4.11}
$$

The value of the drag coefficient depends on the level at which the wind speed is measured; conventionally, this is 10m above the water level. $C_D$ can then be estimated as 

$$
C_D = 0.63 \cdot 10^{-3} + 0.066W_{10} \cdot 10^{-3}
$$

where $W_{10}$ is the wind speed measured at 10 m above the water level and falls within the range $[2.5 ms^{-1}, 21 ms^{-1}]$. 

>[!Missing]
>Insert Fig. 4.7

We can illustrate the effect of the wind stress with an example. A steady wind across a narrow channel causes water to build up against the coast in the direction of the wind (see image above). In case of a steady state, the wind stress is balanced by the pressure term in the momentum equation

$$
\frac{}{}
$$