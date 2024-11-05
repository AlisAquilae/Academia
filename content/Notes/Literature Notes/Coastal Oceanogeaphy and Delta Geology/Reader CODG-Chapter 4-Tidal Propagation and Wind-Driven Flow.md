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

The behaviour of standing waves can be illustrated by considering the water level in a rectangular box, which may represent the harbour in a river delta. At the node, in the middle
