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
This chapter gives a description of ocean wave propagation, wave spectra, and their hydrodynamics in deep water and near the coast. The wave hydrodynamics presented in this chapter is based upon linear wave theory. This theory assumes (1) gravity is the only force acting on the wave, (2) water depth changes are gradual, and (3) that the fluid is inviscid, incompressible and irrotational. These assumptions generally hold for small steepness, $a |k| \ll 1$ . The latter implies that the amplitude ($a$) should be small as compared to the wave length ($2\pi / k$)

>[!Note]
>It is important to realise many (more complex) wave theories exist, such as Stokes' 2nd, 3rd or even 4th order wave theory

>[!Info]
>This chapter is mainly derived from Holthuijsen (2007) and Davidson-Arnott (2006) even tough linear wave theory was originally developed by Airy in 1825 (and is therefore also referred to as Airy wave theory). All units are MKS unless specified.

# 6.1 Simple Wave Description
In this section, a description of a simple ocean wave is presented. The propagation of a basic ocean wave, in a Cartesian coordinate system, is visualized in figure 6.1. 

![[Pasted image 20241122124446.png]]

Along the horizontal axis, the wave period and wave length are shown. The wave period ($T$) is the time that is needed to complete one complete cycle and the wave length ($L$) is the distance between the crest of two waves. In this picture, the ocean surface state at rest coincides with the vertical coordinate $z=0$. A flat bottom is assumed at a depth of $z=-d$ (not shown in the figure). If a sinusoidal wave propagates in the positive $x$-direction, then the surface of the ocean ($\eta$) is located at $z=\eta(x,t)$ and according to linear wave theory the surface undulations can be described by:

$$
\eta(x,t) = a \sin(\omega t + kx) \tag{6.1}
$$

in which
- $\omega$ is the radian frequency
- $k$ is the wave number, and
- $a$ is the amplitude of the wave

The radianf requency and the wave number are given by

$$
\omega = \frac{2\pi}{T} \tag{6.2}
$$

and

$$
k = \frac{2\pi}{L} \tag{6.3}
$$

where $T$ is the period and $L$ is the wave length, respectively.

The harmonic wave is propagating with a constant phase, this could be observed by following the crest of the wave from a fixed point

The speed at which the wave propagates is called the phase speed, and is denoted as

$$
c = \frac{\mathrm dx}{\mathrm dt} = \frac{\omega}{k} = \frac{L}{T} \tag{6.4}
$$

---
# 6.2 Orbital Motion
In the previous section the water surface motion was presented. However, a passing wave not only effects the water surface, it also sets the water under the surface in motion. In linear wave theory this movement is orbital with an amplitude that decreases with depth, see image below. This decrease in orbital diameter is hyperbolic and at a depth of half the wave length the orbital motion is already negligible.

![[Pasted image 20241122125844.png]]

The following two equations describe the horizontal and vertical velocity components respectively at any location and moment:

$$
u_x = \omega a \frac{\cos(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

$$
u_z = \omega a \frac{\sin(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

In which
- $d$ is the water depth
- $z$ is the vertical height with $z=0$ at the mean surface water elevation. 

From these equations, it is visible that the orbital velocities increase with increasing amplitude and wave frequency. In the crest of the wave ($\eta \gt 0$) the velocity is always directed in the down-wave direction. The opposite holds for the trough of the wave where the velocity is always oriented up-wave

![[Pasted image 20241122130228.png]]

Equations 6.5 and 6.6 are complicated, so in practice simplifying assumptions are made depending on the wave environment. The most common assumptions are based on the water depth $d$ and two limiting conditions; deep and shallow water

## 6.2.1 Deep Water
